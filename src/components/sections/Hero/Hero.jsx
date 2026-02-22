import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import profileImage from '../../../img/profile1.jpg'
import { fadeUp } from '../../../constants/animations'
import './Hero.css'

/**
 * Hero section (not lazy-loaded for LCP optimization)
 * @component
 * @returns {React.ReactElement} Hero section with CTA buttons
 */
const Hero = () => {
  return (
    <section id="home" className="hero section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="hero-grid"
      >
        <div className="hero-content">
          <p className="eyebrow">Data Engineering and AI Consulting</p>
          <h1>Driving Innovation in Data Engineering &amp; Data Analytics Globally</h1>
          <p className="hero-copy">
            Hands-on, motivational, and influential leadership in Data Engineering and
            Analytics — delivering scalable platforms, AI integration, and strategic consulting
            tied to real business outcomes.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#resources">
              Discover Insights <FaArrowRight aria-hidden="true" />
            </a>
            <a
              className="btn btn-secondary"
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Free Consultation
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={profileImage}
            alt="Selvavel Shanmugam, Data and AI Leader"
            fetchPriority="high"
            decoding="async"
            width={420}
            height={525}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
