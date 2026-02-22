import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaBookOpen, FaArrowRight } from 'react-icons/fa'
import { RESOURCES } from '../../../constants/siteData'
import { fadeUp, stagger } from '../../../constants/animations'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import SectionHead from '../../ui/SectionHead/SectionHead'
import './Resources.css'

/**
 * Resource card component (memoized)
 */
const ResourceCard = React.memo(({ resource, index }) => {
  const navigate = useNavigate()

  return (
    <motion.article className="resource-card" variants={fadeUp}>
      <FaBookOpen className="resource-icon" aria-hidden="true" />
      <h3>{resource.title}</h3>
      <p>{resource.description}</p>
      <div className="resource-footer">
        <span className="resource-type">{resource.type}</span>
        <button
          className="resource-link"
          onClick={() => navigate(`/resources/${index}`)}
          aria-label={`View details for ${resource.title}`}
        >
          Learn More <FaArrowRight aria-hidden="true" />
        </button>
      </div>
    </motion.article>
  )
})

ResourceCard.displayName = 'ResourceCard'

/**
 * Resources section with content grid
 * @component
 * @returns {React.ReactElement} Resources section with guide cards
 */
const Resources = () => {
  const reduced = useReducedMotion()
  const variants = reduced ? { visible: {} } : stagger

  return (
    <motion.section
      id="resources"
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
    >
      <SectionHead
        eyebrow="Resources"
        heading="Essential Resources for Data and AI Success"
        body="Explore practical frameworks, implementation guides, and strategic insights for data and AI-driven business transformation."
      />

      <div className="resources-grid">
        {RESOURCES.map((resource, index) => (
          <ResourceCard key={resource.id || index} resource={resource} index={index} />
        ))}
      </div>
    </motion.section>
  )
}

export default Resources
