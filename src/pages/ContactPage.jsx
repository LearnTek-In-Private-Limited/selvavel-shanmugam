import React, { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaClock } from 'react-icons/fa'
import SectionHead from '../components/ui/SectionHead/SectionHead'
import { fadeUp } from '../constants/animations'
import './ContactPage.css'

const ContactForm = lazy(() => import('../components/sections/Contact/ContactForm'))

function FormFallback() {
  return <div style={{ height: '500px', background: 'rgba(7,15,121,0.05)', borderRadius: '12px', marginTop: '2rem' }} aria-hidden="true" />
}

const ContactPage = () => {
  return (
    <section id="contact" className="contact-page-section section">
      <div className="contact-page-container">
        <SectionHead
          eyebrow="Get In Touch"
          heading="Contact"
          body="Let&apos;s discuss how we can work together to transform your data and AI capabilities. Reach out today."
        />

        <motion.div
          className="contact-page-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaEnvelope aria-hidden="true" />
              </div>
              <h3>Email</h3>
              <p>Get in touch via email for inquiries and consultations.</p>
              <a href="mailto:selvavel@example.com">Send Email</a>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaLinkedin aria-hidden="true" />
              </div>
              <h3>LinkedIn</h3>
              <p>Connect on LinkedIn to stay updated with latest insights.</p>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                Visit LinkedIn
              </a>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaClock aria-hidden="true" />
              </div>
              <h3>Response Time</h3>
              <p>Typically respond within 24-48 hours on business days.</p>
              <span className="response-badge">24h Response</span>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Send us a Message</h2>
            <p className="form-intro">
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
            <Suspense fallback={<FormFallback />}>
              <ContactForm />
            </Suspense>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactPage
