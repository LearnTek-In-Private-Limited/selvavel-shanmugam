import React from 'react'
import { motion } from 'framer-motion'
import { FaFileDownload, FaArrowRight } from 'react-icons/fa'
import SectionHead from '../components/ui/SectionHead/SectionHead'
import Card from '../components/ui/Card/Card'
import { RESOURCES } from '../constants/siteData'
import { stagger } from '../constants/animations'
import './ResourcesPage.css'

const ResourcesPage = () => {
  return (
    <section id="resources" className="resources-page-section section">
      <div className="resources-page-container">
        <SectionHead
          eyebrow="Knowledge Base"
          heading="Resources"
          body="Curated guides, whitepapers, and frameworks for building modern data platforms and adopting AI responsibly."
        />

        <motion.div
          className="resources-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {RESOURCES.map((resource, index) => (
            <motion.div key={index} variants={stagger}>
              <Card className="resource-card">
                <div className="resource-icon">
                  <FaFileDownload aria-hidden="true" />
                </div>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <div className="resource-footer">
                  <span className="resource-type">{resource.type}</span>
                  <a href="#" className="resource-link">
                    Download <FaArrowRight aria-hidden="true" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ResourcesPage
