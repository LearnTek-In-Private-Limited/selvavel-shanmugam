# Component Integration Guide

## Quick Start - Updated App.jsx

To integrate all generated components into your application, update your `src/App.jsx` with the following structure:

```jsx
import { useState, useEffect, Suspense, lazy } from 'react'
import Header from './components/layout/Header/Header'
import MobileNav from './components/layout/MobileNav/MobileNav'
import Hero from './components/sections/Hero/Hero'
import Stats from './components/sections/Stats/Stats'
import About from './components/sections/About/About'
import Services from './components/sections/Services/Services'
import Portfolio from './components/sections/Portfolio/Portfolio'
import Blog from './components/sections/Blog/Blog'
import Testimonials from './components/sections/Testimonials/Testimonials'
import Resources from './components/sections/Resources/Resources'
import Contact from './components/sections/Contact/Contact'
import Footer from './components/layout/Footer/Footer'
import { useScrolled } from './hooks/useScrolled'
import './App.css'

// Optional: Lazy load non-critical sections for code splitting
// const Stats = lazy(() => import('./components/sections/Stats/Stats'))
// const About = lazy(() => import('./components/sections/About/About'))
// const Services = lazy(() => import('./components/sections/Services/Services'))
// const Portfolio = lazy(() => import('./components/sections/Portfolio/Portfolio'))
// const Blog = lazy(() => import('./components/sections/Blog/Blog'))
// const Testimonials = lazy(() => import('./components/sections/Testimonials/Testimonials'))
// const Resources = lazy(() => import('./components/sections/Resources/Resources'))
// const Contact = lazy(() => import('./components/sections/Contact/Contact'))

// Loading fallback component
const SectionFallback = () => (
  <div style={{ padding: '4rem 0', textAlign: 'center', opacity: 0.6 }}>
    Loading...
  </div>
)

function App() {
  useScrolled() // Initialize scroll tracking

  return (
    <div className="site-shell">
      <Header />
      <MobileNav />

      <main>
        <Hero />

        <Suspense fallback={<SectionFallback />}>
          <Stats />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Services />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Portfolio />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Blog />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Resources />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}

export default App
```

---

## Redux Store Setup

Ensure your Redux store includes these slices:

### Store Configuration (`src/store/index.js`)

```javascript
import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './slices/uiSlice'
import contactReducer from './slices/contactSlice'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    contact: contactReducer,
  },
})

export default store
```

### UI Slice (`src/store/slices/uiSlice.js`)

```javascript
import { createSlice } from '@reduxjs/toolkit'

const initialState = { mobileOpen: false, scrolled: false }

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openMobileNav(state) { state.mobileOpen = true },
    closeMobileNav(state) { state.mobileOpen = false },
    toggleMobileNav(state) { state.mobileOpen = !state.mobileOpen },
    setScrolled(state, action) { state.scrolled = action.payload },
  },
})

export const { openMobileNav, closeMobileNav, toggleMobileNav, setScrolled } = uiSlice.actions
export default uiSlice.reducer
```

### Contact Slice (`src/store/slices/contactSlice.js`)

```javascript
import { createSlice } from '@reduxjs/toolkit'
import { submitContact } from '../thunks/submitContact'

const initialState = {
  status: 'idle', // idle | loading | success | error
  error: null,
  fieldErrors: {},
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setFieldErrors(state, action) {
      state.fieldErrors = action.payload
    },
    clearFieldError(state, action) {
      delete state.fieldErrors[action.payload]
    },
    resetContact(state) {
      state.status = 'idle'
      state.error = null
      state.fieldErrors = {}
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContact.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(submitContact.fulfilled, (state) => {
        state.status = 'success'
        state.error = null
        state.fieldErrors = {}
      })
      .addCase(submitContact.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.payload || 'Failed to submit form'
      })
  },
})

export const { setFieldErrors, clearFieldError, resetContact } = contactSlice.actions
export default contactSlice.reducer
```

### Contact Thunk (`src/store/thunks/submitContact.js`)

```javascript
import { createAsyncThunk } from '@reduxjs/toolkit'
import emailjs from '@emailjs/browser'

export const submitContact = createAsyncThunk(
  'contact/submitContact',
  async ({ formRef, formData }, { rejectWithValue }) => {
    try {
      // Initialize emailjs (replace with your service ID)
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current
      )

      return { success: true }
    } catch (error) {
      return rejectWithValue(
        error.message || 'Failed to send message. Please try again.'
      )
    }
  }
)
```

---

## Environment Variables

Create a `.env.local` file with:

```
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
```

---

## Constants Setup

Ensure `src/constants/siteData.js` includes all data constants:

```javascript
// NAV_LINKS, FOOTER_NAV, SOCIAL_LINKS
// STATS, SERVICES, TESTIMONIALS
// PORTFOLIO_PROJECTS, BLOG_POSTS, RESOURCES
```

Ensure `src/constants/animations.js` includes all variants:

```javascript
// fadeUp, stagger, slideInRight, noAnimation
```

---

## Hooks Setup

### useScrolled Hook (`src/hooks/useScrolled.js`)

Dispatches `setScrolled` based on scroll position:

```javascript
export function useScrolled(threshold = 20) {
  const dispatch = useDispatch()

  useEffect(() => {
    const handleScroll = () => {
      dispatch(setScrolled(window.scrollY > threshold))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [dispatch, threshold])
}
```

### useReducedMotion Hook (`src/hooks/useReducedMotion.js`)

Respects user's motion preferences:

```javascript
export function useReducedMotion() {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  const [reduced, setReduced] = useState(mediaQuery.matches)

  useEffect(() => {
    const handler = (e) => setReduced(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [mediaQuery])

  return reduced
}
```

### useContactForm Hook (`src/hooks/useContactForm.js`)

Manages form state and validation:

```javascript
export function useContactForm() {
  const dispatch = useDispatch()
  const { status, error, fieldErrors } = useSelector((s) => s.contact)
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
      dispatch(clearFieldError(name))
    },
    [dispatch]
  )

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      const errors = validateContactForm(formData)
      if (Object.keys(errors).length > 0) {
        dispatch(setFieldErrors(errors))
        return
      }
      const result = await dispatch(submitContact({ formRef, formData }))
      if (result.meta.requestStatus === 'fulfilled') {
        setFormData(INITIAL_FORM_DATA)
        setTimeout(() => dispatch(resetContact()), 4000)
      }
    },
    [formData, dispatch]
  )

  return { formRef, formData, status, error, fieldErrors, handleChange, handleSubmit }
}
```

---

## Validators Setup

Create `src/utils/validators.js`:

```javascript
export function validateContactForm(formData) {
  const errors = {}

  if (!formData.fullName?.trim()) {
    errors.fullName = 'Full name is required'
  }

  if (!formData.email?.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
    errors.phone = 'Please enter a valid phone number'
  }

  if (!formData.subject?.trim()) {
    errors.subject = 'Subject is required'
  }

  if (!formData.message?.trim()) {
    errors.message = 'Message is required'
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }

  return errors
}
```

---

## CSS Architecture

All component styles are centralized in `src/App.css` with:

- CSS custom properties (variables) in `:root`
- Mobile-first responsive design
- Semantic color system
- Reduced motion support
- Smooth transitions and animations

**Color Palette** (CSS Variables):
```css
--color-bg: #fcf9f5
--color-surface: #ffffff
--color-surface-soft: #f5f0ea
--color-text: #0b0449
--color-muted: #595769
--color-primary: #070f79
--color-primary-strong: #0b0449
--color-accent: #f3c8cf
--color-border: #e8e0f0
```

---

## Lazy Loading Implementation

For optimal performance, lazy load non-critical sections:

```javascript
const Stats = lazy(() => import('./components/sections/Stats/Stats'))
const About = lazy(() => import('./components/sections/About/About'))
// ... other sections
```

**Note**: Hero section should NOT be lazy-loaded for LCP optimization.

---

## Testing Checklist

- [ ] All components render without errors
- [ ] Redux state updates correctly
- [ ] Mobile nav opens/closes
- [ ] Form validation works
- [ ] Error messages display correctly
- [ ] Success message appears after submission
- [ ] Scroll tracking works (header changes on scroll)
- [ ] Mobile menu closes on link click
- [ ] Images load with correct dimensions
- [ ] Animations work on scroll
- [ ] Keyboard navigation functions
- [ ] Screen reader compatibility verified
- [ ] Reduced motion respected
- [ ] Responsive design on all breakpoints

---

## Performance Optimization Notes

1. **Image Optimization**
   - Hero image: fetchpriority="high"
   - Other images: loading="lazy", decoding="async"
   - All images: explicit width/height attributes

2. **Code Splitting**
   - Lazy load all section components except Hero
   - Use Suspense with fallback UI

3. **Memoization**
   - All UI primitives wrapped with React.memo
   - Card components memoized
   - useCallback for event handlers

4. **Animation Performance**
   - Respect prefers-reduced-motion
   - Use Framer Motion's optimized rendering
   - viewport-based animation triggers

5. **Bundle Size**
   - CSS variables reduce redundancy
   - Shared component patterns
   - Minimal external dependencies

---

## Deployment Notes

1. Ensure environment variables are set in deployment
2. EmailJS service must be configured with correct IDs
3. Test contact form submission in production
4. Verify mobile navigation on different devices
5. Monitor Core Web Vitals
6. Check accessibility with screen readers

---

## Version Information

- React: 18+
- Redux: @reduxjs/toolkit
- Framer Motion: latest
- React Icons: latest
- EmailJS: latest

---

## Support & Troubleshooting

### Mobile nav not closing
- Check Redux store initialization
- Verify `closeMobileNav` action is dispatched
- Ensure `MobileNav` component is rendered

### Form submission failing
- Verify EmailJS environment variables
- Check network tab for API errors
- Ensure form validation passes

### Images not loading
- Verify path: `src/img/profile1.jpg`
- Check image dimensions match component expectations
- Use console to debug image load errors

### Animations not working
- Check Framer Motion installation
- Verify variants are imported correctly
- Check for `prefers-reduced-motion` setting

---

Generated: February 2026
For: Selvavel Portfolio Application
