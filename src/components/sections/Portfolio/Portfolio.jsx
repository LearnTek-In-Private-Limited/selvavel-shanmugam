import React from 'react'
import { motion } from 'framer-motion'
import { PORTFOLIO_PROJECTS } from '../../../constants/siteData'
import { fadeUp, stagger } from '../../../constants/animations'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import SectionHead from '../../ui/SectionHead/SectionHead'
import './Portfolio.css'

/**
 * Portfolio project card component (memoized)
 */
const PortfolioCard = React.memo(({ project }) => (
  <motion.article className="portfolio-card" variants={fadeUp}>
    <div className="portfolio-header">
      <span className="portfolio-category">{project.category}</span>
      <h3>{project.title}</h3>
    </div>

    <p className="portfolio-description">{project.description}</p>

    <div className="portfolio-tech">
      {project.tech.map((tech) => (
        <span key={tech} className="tech-tag">
          {tech}
        </span>
      ))}
    </div>

    <div className="portfolio-outcome">
      <strong>Outcome:</strong> {project.outcome}
    </div>
  </motion.article>
))

PortfolioCard.displayName = 'PortfolioCard'

/**
 * Portfolio section with project grid
 * @component
 * @returns {React.ReactElement} Portfolio section with project cards
 */
const Portfolio = () => {
  const reduced = useReducedMotion()
  const variants = reduced ? { visible: {} } : stagger

  return (
    <motion.section
      id="portfolio"
      className="section section-alt"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
    >
      <SectionHead
        eyebrow="Portfolio"
        heading="Recent Projects & Engagements"
        body="A selection of successful projects delivering measurable business impact through data engineering, AI integration, and strategic consulting."
      />

      <div className="portfolio-grid">
        {PORTFOLIO_PROJECTS.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </motion.section>
  )
}

export default Portfolio
