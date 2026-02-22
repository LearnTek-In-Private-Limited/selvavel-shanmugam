import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHead from '../components/ui/SectionHead/SectionHead'
import Card from '../components/ui/Card/Card'
import { PORTFOLIO_PROJECTS } from '../constants/siteData'
import { stagger } from '../constants/animations'
import './PortfolioPage.css'

const PortfolioPage = () => {
  const [filterActive, setFilterActive] = useState('All')

  const categories = ['All', ...new Set(PORTFOLIO_PROJECTS.map(p => p.category))]

  const filteredProjects = filterActive === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === filterActive)

  return (
    <section id="portfolio" className="portfolio-page-section section">
      <div className="portfolio-page-container">
        <SectionHead
          eyebrow="Featured Work"
          heading="Portfolio Projects"
          body="Explore a selection of enterprise-grade data engineering, analytics, and AI integration projects delivered globally."
        />

        <div className="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filterActive === cat ? 'active' : ''}`}
              onClick={() => setFilterActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          className="portfolio-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={stagger}>
              <Card className="portfolio-card">
                <div className="portfolio-header">
                  <span className="portfolio-category">{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                <div className="portfolio-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="portfolio-outcome">{project.outcome}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioPage
