import React from 'react'
import { motion } from 'framer-motion'
import profileImage from '../img/profile1.jpg'
import SectionHead from '../components/ui/SectionHead/SectionHead'
import { fadeUp } from '../constants/animations'
import './AboutPage.css'

const AboutPage = () => {
  return (
    <section id="about" className="about-page-section section">
      <div className="about-page-container">
        <SectionHead
          eyebrow="Professional Journey"
          heading="About Selvavel"
          body="Data engineering and AI consulting leader with a global presence, driving innovation through scalable platforms and strategic business outcomes."
        />

        <motion.div
          className="about-page-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="about-page-image">
            <img
              src={profileImage}
              alt="Selvavel Shanmugam, Data and AI Leader"
              loading="lazy"
              decoding="async"
              width={400}
              height={400}
            />
          </div>

          <div className="about-page-text">
            <h2>Selvavel Shanmugam</h2>
            <p className="about-intro">
              Hands-on, motivational, influential, and tactful leader in data engineering and analytics with a global client base spanning three continents.
            </p>

            <p>
              My name is Selvavel Shanmugam — a Data Engineering and Data Analytics specialist with proven expertise in building robust platforms, modernizing analytics workflows, and deploying responsible AI adoption strategies. With a passion for translating complex data challenges into strategic business solutions, I partner with organizations globally to achieve measurable outcomes.
            </p>

            <p>
              I hold a bachelor&apos;s degree in Information Technology from Anna University, Chennai, and a master&apos;s degree in Data Science and Business Analytics from the University of London. These qualifications, combined with hands-on experience across multiple continents, have equipped me with a unique perspective on global data challenges and solutions.
            </p>

            <p>
              My approach is grounded in deep technical expertise paired with strategic business acumen. I believe that successful data transformation isn&apos;t just about technology—it&apos;s about understanding organizational goals, building the right teams, and creating sustainable platforms that drive long-term value.
            </p>

            <h3>Core Competencies</h3>
            <div className="competencies-grid">
              <div className="competency-item">
                <h4>Data Engineering</h4>
                <p>Platform architecture, ETL/ELT design, data governance</p>
              </div>
              <div className="competency-item">
                <h4>Analytics & BI</h4>
                <p>Advanced analytics, dashboard design, performance optimization</p>
              </div>
              <div className="competency-item">
                <h4>AI & ML</h4>
                <p>Responsible AI adoption, ML pipelines, AI strategy</p>
              </div>
              <div className="competency-item">
                <h4>Leadership</h4>
                <p>Team building, strategic consulting, organizational change</p>
              </div>
            </div>

            <h3>Global Experience</h3>
            <p>
              With experience across Asia, Europe, and North America, I bring a global perspective to local challenges. I&apos;ve worked with enterprises ranging from startups to Fortune 500 companies, helping them modernize their data infrastructure and unlock the potential of their data assets.
            </p>

            <div className="cta-section">
              <p>Ready to discuss how data and AI can transform your organization?</p>
              <a href="/contact" className="btn btn-primary">Schedule a Consultation</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutPage
