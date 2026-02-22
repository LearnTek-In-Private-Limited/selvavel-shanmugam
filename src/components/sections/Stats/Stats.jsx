import React from 'react'
import { motion } from 'framer-motion'
import { STATS } from '../../../constants/siteData'
import { fadeUp, stagger } from '../../../constants/animations'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import SectionHead from '../../ui/SectionHead/SectionHead'
import './Stats.css'

/**
 * Stats card component (memoized)
 */
const StatCard = React.memo(({ stat }) => (
  <motion.div className="stat-card" variants={fadeUp}>
    <span className="stat-value">{stat.value}</span>
    <span className="stat-label">{stat.label}</span>
  </motion.div>
))

StatCard.displayName = 'StatCard'

/**
 * Stats section with grid of statistics
 * @component
 * @returns {React.ReactElement} Stats section with motion animations
 */
const Stats = () => {
  const reduced = useReducedMotion()
  const variants = reduced ? { visible: {} } : stagger

  return (
    <motion.section
      id="impact"
      className="section stats-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
    >
      <SectionHead
        eyebrow="Impact by the Numbers"
        heading="Measurable Results Across Every Engagement"
      />

      <div className="stats-grid">
        {STATS.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>
    </motion.section>
  )
}

export default Stats
