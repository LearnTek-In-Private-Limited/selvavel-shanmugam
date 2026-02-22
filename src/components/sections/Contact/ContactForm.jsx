import React from 'react'
import { motion } from 'framer-motion'
import { useContactForm } from '../../../hooks/useContactForm'
import { fadeUp } from '../../../constants/animations'
import './Contact.css'

/**
 * Contact form component with Redux state management
 * @component
 * @returns {React.ReactElement} Contact form with validation and feedback
 */
const ContactForm = () => {
  const {
    formRef,
    formData,
    status,
    error,
    fieldErrors,
    handleChange,
    handleSubmit,
  } = useContactForm()

  const isSubmitting = status === 'loading'
  const isSuccess = status === 'success'
  const isError = status === 'error'

  return (
    <motion.div variants={fadeUp} className="contact-form-wrapper">
      {isError && (
        <div
          className="form-message error-banner"
          role="alert"
          aria-live="polite"
          aria-atomic="true"
        >
          {error || 'An error occurred. Please try again.'}
        </div>
      )}

      {isSuccess && (
        <div
          className="form-message success-banner"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          Thank you! Your message has been sent successfully. We&apos;ll be in touch soon.
        </div>
      )}

      <form
        ref={formRef}
        className="contact-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="form-group">
          <label htmlFor="fullName" className="form-label">
            Full Name <span className="required">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            className={`form-input ${fieldErrors.fullName ? 'error' : ''}`}
            value={formData.fullName}
            onChange={handleChange}
            disabled={isSubmitting}
            required
            aria-describedby={
              fieldErrors.fullName ? 'fullName-error' : undefined
            }
          />
          {fieldErrors.fullName && (
            <span id="fullName-error" className="error-message">
              {fieldErrors.fullName}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address <span className="required">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className={`form-input ${fieldErrors.email ? 'error' : ''}`}
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            required
            aria-describedby={fieldErrors.email ? 'email-error' : undefined}
          />
          {fieldErrors.email && (
            <span id="email-error" className="error-message">
              {fieldErrors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Phone Number{' '}
            <span className="optional">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            className={`form-input ${fieldErrors.phone ? 'error' : ''}`}
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
            aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
          />
          {fieldErrors.phone && (
            <span id="phone-error" className="error-message">
              {fieldErrors.phone}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            Subject <span className="required">*</span>
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            className={`form-input ${fieldErrors.subject ? 'error' : ''}`}
            value={formData.subject}
            onChange={handleChange}
            disabled={isSubmitting}
            required
            aria-describedby={
              fieldErrors.subject ? 'subject-error' : undefined
            }
          />
          {fieldErrors.subject && (
            <span id="subject-error" className="error-message">
              {fieldErrors.subject}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message <span className="required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            className={`form-textarea ${fieldErrors.message ? 'error' : ''}`}
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            required
            aria-describedby={
              fieldErrors.message ? 'message-error' : undefined
            }
          />
          {fieldErrors.message && (
            <span id="message-error" className="error-message">
              {fieldErrors.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary form-submit"
          disabled={isSubmitting || isSuccess}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        <p className="form-disclaimer">
          We&apos;ll respond to your inquiry within 24 business hours.
        </p>
      </form>
    </motion.div>
  )
}

export default ContactForm
