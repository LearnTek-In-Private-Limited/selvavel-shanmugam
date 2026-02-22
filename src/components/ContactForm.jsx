import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function ContactForm() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [fieldErrors, setFieldErrors] = useState({})

  const validateForm = () => {
    const errors = {}

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!validateForm()) {
      return
    }

    setStatus('submitting')

    try {
      // 1. Save to Firestore
      await addDoc(collection(db, 'contacts'), {
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        timestamp: serverTimestamp(),
      })

      // 2. Send email via EmailJS
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      // Success
      setStatus('success')
      setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' })
      setFieldErrors({})

      // Reset to idle after 4 seconds
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      setStatus('error')
      setError(err.message || 'Failed to send message. Please try again.')
      console.error('Form submission error:', err)
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="contact-form-wrapper"
    >
      <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="fullName" className="form-label">
            Full Name <span className="required">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your full name"
            className={`form-input ${fieldErrors.fullName ? 'error' : ''}`}
            aria-required="true"
            aria-describedby={fieldErrors.fullName ? 'fullName-error' : undefined}
            disabled={status === 'submitting'}
          />
          {fieldErrors.fullName && (
            <span id="fullName-error" className="error-message">
              {fieldErrors.fullName}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email <span className="required">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className={`form-input ${fieldErrors.email ? 'error' : ''}`}
            aria-required="true"
            aria-describedby={fieldErrors.email ? 'email-error' : undefined}
            disabled={status === 'submitting'}
          />
          {fieldErrors.email && (
            <span id="email-error" className="error-message">
              {fieldErrors.email}
            </span>
          )}
        </div>

        {/* Phone (optional) */}
        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Phone <span className="optional">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="form-input"
            disabled={status === 'submitting'}
          />
        </div>

        {/* Subject */}
        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            Subject <span className="required">*</span>
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What is this about?"
            className={`form-input ${fieldErrors.subject ? 'error' : ''}`}
            aria-required="true"
            aria-describedby={fieldErrors.subject ? 'subject-error' : undefined}
            disabled={status === 'submitting'}
          />
          {fieldErrors.subject && (
            <span id="subject-error" className="error-message">
              {fieldErrors.subject}
            </span>
          )}
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message <span className="required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about your project..."
            rows="5"
            className={`form-textarea ${fieldErrors.message ? 'error' : ''}`}
            aria-required="true"
            aria-describedby={fieldErrors.message ? 'message-error' : undefined}
            disabled={status === 'submitting'}
          />
          {fieldErrors.message && (
            <span id="message-error" className="error-message">
              {fieldErrors.message}
            </span>
          )}
        </div>

        {/* Status Messages */}
        {error && status === 'error' && (
          <div className="form-message error-banner" role="alert">
            {error}
          </div>
        )}

        {status === 'success' && (
          <div className="form-message success-banner" role="status">
            ✓ Thank you! Your message has been sent successfully. We&apos;ll be in touch soon.
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary form-submit"
          disabled={status === 'submitting' || status === 'success'}
          aria-busy={status === 'submitting'}
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>

        <p className="form-disclaimer">
          We respect your privacy. Your information will never be shared.
        </p>
      </form>
    </motion.div>
  )
}
