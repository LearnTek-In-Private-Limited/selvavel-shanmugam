import React from 'react'
import { motion } from 'framer-motion'
import profileImage from '../../../img/profile1.jpg'
import { fadeUp } from '../../../constants/animations'
import SectionHead from '../../ui/SectionHead/SectionHead'
import './About.css'

/**
 * About section with biography and profile image
 * @component
 * @returns {React.ReactElement} About section with two-column layout
 */
const About = () => {
  return (
    <motion.section
      id="about"
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <SectionHead
        eyebrow="About"
        heading="Selvavel Shanmugam"
      />

      <div className="about-grid">
        <div className="about-media">
          <img
            src={profileImage}
            alt="Selvavel Shanmugam, Data and AI Tech Lead"
            loading="lazy"
            decoding="async"
            width={320}
            height={320}
          />
        </div>

        <div className="about-content">
          <p>
            My name is Selvavel Shanmugam — a Hands-On, Motivational, Innovational, Influential,
            and Tactful Leader in Data Engineering and Data Analytics with a global client base.
          </p>

          <p>
            I hold a bachelor&apos;s degree in Information Technology from Anna University, Chennai,
            and a master&apos;s degree in Data Science and Business Analytics from the University of
            London.
          </p>

          <p>
            I partner with organizations globally to build robust data platforms, modernize
            analytics workflows, and deploy responsible AI adoption strategies — all measured
            against tangible, client-defined business outcomes.
          </p>
        </div>
      </div>
    </motion.section>
  )
}

export default About
