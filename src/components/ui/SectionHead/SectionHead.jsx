import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../../../constants/animations'
import './SectionHead.css'

/**
 * Section heading container with eyebrow, heading, and optional body text
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.eyebrow] - Eyebrow/label text above heading
 * @param {string} props.heading - Main heading text
 * @param {string} [props.body] - Optional body text below heading
 * @param {Object} [props.motionVariants] - Custom Framer Motion variants
 * @returns {React.ReactElement} Motion-enabled section heading
 */
const SectionHead = React.memo(
  ({ eyebrow, heading, body, motionVariants = fadeUp }) => {
    return (
      <motion.div className="section-head" variants={motionVariants}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {heading && <h2>{heading}</h2>}
        {body && <p>{body}</p>}
      </motion.div>
    )
  }
)

SectionHead.displayName = 'SectionHead'

export default SectionHead
