import React from 'react'
import { motion } from 'framer-motion'
import {
  FaDatabase,
  FaGlobe,
  FaChartBar,
  FaLayerGroup,
  FaBrain,
  FaLightbulb,
} from 'react-icons/fa'
import { SERVICES } from '../../../constants/siteData'
import { fadeUp, stagger } from '../../../constants/animations'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import SectionHead from '../../ui/SectionHead/SectionHead'
import './Services.css'

/**
 * Icon registry mapping
 */
const iconRegistry = {
  database: FaDatabase,
  globe: FaGlobe,
  chart: FaChartBar,
  layer: FaLayerGroup,
  brain: FaBrain,
  lightbulb: FaLightbulb,
}

/**
 * Service card component (memoized)
 */
const ServiceCard = React.memo(({ service }) => {
  const IconComponent = iconRegistry[service.iconKey]

  return (
    <motion.article className="service-card" variants={fadeUp}>
      <div className="service-icon">
        {IconComponent && <IconComponent aria-hidden="true" />}
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </motion.article>
  )
})

ServiceCard.displayName = 'ServiceCard'

/**
 * Services section with 6 service cards
 * @component
 * @returns {React.ReactElement} Services section with icon grid
 */
const Services = () => {
  const reduced = useReducedMotion()
  const variants = reduced ? { visible: {} } : stagger

  return (
    <motion.section
      id="services"
      className="section section-alt"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
    >
      <SectionHead
        eyebrow="Services"
        heading="Expert Services That Deliver Measurable Outcomes"
        body="Practical, client-focused delivery in Data Engineering, AI Integration, and consulting — designed to accelerate transformation and drive adoption at every level of your organization."
      />

      <div className="services-grid">
        {SERVICES.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </motion.section>
  )
}

export default Services
