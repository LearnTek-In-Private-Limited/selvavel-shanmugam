import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../../../constants/animations'
import SectionHead from '../../ui/SectionHead/SectionHead'
import ContactForm from './ContactForm'
import './Contact.css'

/**
 * Contact section wrapper
 * @component
 * @returns {React.ReactElement} Contact section with form
 */
const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="section section-contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <div className="contact-container">
        <SectionHead
          eyebrow="Contact"
          heading="Ready to Transform Your Data Strategy?"
          body="Get in touch with Selvavel for a free consultation. We'll discuss your data challenges and explore a clear roadmap for your Data Engineering and AI transformation."
        />

        <ContactForm />
      </div>
    </motion.section>
  )
}

export default Contact
