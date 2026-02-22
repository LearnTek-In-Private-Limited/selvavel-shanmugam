import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header/Header'
import MobileNav from './components/layout/MobileNav/MobileNav'
import Footer from './components/layout/Footer/Footer'
import ScrollToTopButton from './components/ui/ScrollToTopButton/ScrollToTopButton'
import Hero from './components/sections/Hero/Hero'

const Stats = lazy(() => import('./components/sections/Stats/Stats'))
const About = lazy(() => import('./components/sections/About/About'))
const Services = lazy(() => import('./components/sections/Services/Services'))
const Portfolio = lazy(() => import('./components/sections/Portfolio/Portfolio'))
const Blog = lazy(() => import('./components/sections/Blog/Blog'))
const Testimonials = lazy(() => import('./components/sections/Testimonials/Testimonials'))
const Resources = lazy(() => import('./components/sections/Resources/Resources'))
const Contact = lazy(() => import('./components/sections/Contact/Contact'))

// Page imports
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'))
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ResourceDetailPage = lazy(() => import('./pages/ResourceDetailPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

// Scroll to top on route change
function ScrollToTop() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return null
}

function SectionFallback({ height = '300px' }) {
  return <div style={{ height, background: 'transparent' }} aria-hidden="true" />
}

function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <MobileNav />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <Suspense fallback={<SectionFallback height="240px" />}><Stats /></Suspense>
        <Suspense fallback={<SectionFallback height="400px" />}><About /></Suspense>
        <Suspense fallback={<SectionFallback height="520px" />}><Services /></Suspense>
        <Suspense fallback={<SectionFallback height="500px" />}><Portfolio /></Suspense>
        <Suspense fallback={<SectionFallback height="500px" />}><Blog /></Suspense>
        <Suspense fallback={<SectionFallback height="460px" />}><Testimonials /></Suspense>
        <Suspense fallback={<SectionFallback height="420px" />}><Resources /></Suspense>
        <Suspense fallback={<SectionFallback height="600px" />}><Contact /></Suspense>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Router>
      <ScrollToTopButton />
      <div className="site-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={
            <>
              <ScrollToTop />
              <a className="skip-link" href="#main-content">Skip to main content</a>
              <Header />
              <MobileNav />
              <main id="main-content" tabIndex="-1">
                <Suspense fallback={<SectionFallback height="600px" />}>
                  <PortfolioPage />
                </Suspense>
              </main>
              <Footer />
            </>
          } />
          <Route path="/blog" element={
            <>
              <ScrollToTop />
              <a className="skip-link" href="#main-content">Skip to main content</a>
              <Header />
              <MobileNav />
              <main id="main-content" tabIndex="-1">
                <Suspense fallback={<SectionFallback height="600px" />}>
                  <BlogPage />
                </Suspense>
              </main>
              <Footer />
            </>
          } />
          <Route path="/blog/:id" element={
            <>
              <ScrollToTop />
              <a className="skip-link" href="#main-content">Skip to main content</a>
              <Header />
              <MobileNav />
              <main id="main-content" tabIndex="-1">
                <Suspense fallback={<SectionFallback height="600px" />}>
                  <BlogDetailPage />
                </Suspense>
              </main>
              <Footer />
            </>
          } />
          <Route path="/services" element={
            <>
              <ScrollToTop />
              <a className="skip-link" href="#main-content">Skip to main content</a>
              <Header />
              <MobileNav />
              <main id="main-content" tabIndex="-1">
                <Suspense fallback={<SectionFallback height="600px" />}>
                  <ServicesPage />
                </Suspense>
              </main>
              <Footer />
            </>
          } />
          <Route path="/resources" element={
            <>
              <ScrollToTop />
              <a className="skip-link" href="#main-content">Skip to main content</a>
              <Header />
              <MobileNav />
              <main id="main-content" tabIndex="-1">
                <Suspense fallback={<SectionFallback height="600px" />}>
                  <ResourcesPage />
                </Suspense>
              </main>
              <Footer />
            </>
          } />
          <Route path="/resources/:id" element={
            <>
              <ScrollToTop />
              <a className="skip-link" href="#main-content">Skip to main content</a>
              <Header />
              <MobileNav />
              <main id="main-content" tabIndex="-1">
                <Suspense fallback={<SectionFallback height="600px" />}>
                  <ResourceDetailPage />
                </Suspense>
              </main>
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <ScrollToTop />
              <a className="skip-link" href="#main-content">Skip to main content</a>
              <Header />
              <MobileNav />
              <main id="main-content" tabIndex="-1">
                <Suspense fallback={<SectionFallback height="600px" />}>
                  <AboutPage />
                </Suspense>
              </main>
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <ScrollToTop />
              <a className="skip-link" href="#main-content">Skip to main content</a>
              <Header />
              <MobileNav />
              <main id="main-content" tabIndex="-1">
                <Suspense fallback={<SectionFallback height="600px" />}>
                  <ContactPage />
                </Suspense>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}
