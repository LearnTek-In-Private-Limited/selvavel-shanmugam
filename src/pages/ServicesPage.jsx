import React from 'react'
import { motion } from 'framer-motion'
import { FaDatabase, FaGlobe, FaChartBar, FaLayerGroup, FaBrain, FaLightbulb } from 'react-icons/fa'
import SectionHead from '../components/ui/SectionHead/SectionHead'
import Card from '../components/ui/Card/Card'
import { SERVICES } from '../constants/siteData'
import { stagger } from '../constants/animations'
import './ServicesPage.css'

const ServicesPage = () => {
  const iconRegistry = {
    database: FaDatabase,
    globe: FaGlobe,
    chart: FaChartBar,
    layer: FaLayerGroup,
    brain: FaBrain,
    lightbulb: FaLightbulb,
  }

  return (
    <section id="services" className="services-page-section section">
      <div className="services-page-container">
        <SectionHead
          eyebrow="Expertise & Solutions"
          heading="Services"
          body="Comprehensive data engineering, analytics, and AI consulting services tailored to drive business transformation and measurable outcomes."
        />

        <motion.div
          className="services-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SERVICES.map((service, index) => {
            const IconComponent = iconRegistry[service.iconKey]
            return (
              <motion.div key={index} variants={stagger}>
                <Card className="service-card">
                  <div className="service-icon">
                    {IconComponent && <IconComponent aria-hidden="true" />}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="services-footer">
          <p className="services-cta-text">
            Ready to transform your data infrastructure? Let&apos;s discuss how we can help your organization.
          </p>
          <a href="/#contact" className="btn btn-primary">
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesPage
