import React from 'react'
import { motion } from 'framer-motion'
import { FaUserCircle } from 'react-icons/fa'
import { TESTIMONIALS } from '../../../constants/siteData'
import { fadeUp, stagger } from '../../../constants/animations'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import SectionHead from '../../ui/SectionHead/SectionHead'
import StarRating from '../../ui/StarRating/StarRating'
import './Testimonials.css'

/**
 * Testimonial card component (memoized)
 */
const TestimonialCard = React.memo(({ testimonial }) => (
  <motion.article className="testimonial-card" variants={fadeUp}>
    <StarRating count={testimonial.rating} max={5} />

    <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>

    <div className="testimonial-author">
      <FaUserCircle className="author-avatar" aria-hidden="true" />
      <div>
        <div className="author-name">{testimonial.name}</div>
        <div className="author-title">{testimonial.title}</div>
      </div>
    </div>
  </motion.article>
))

TestimonialCard.displayName = 'TestimonialCard'

/**
 * Testimonials section with client feedback
 * @component
 * @returns {React.ReactElement} Testimonials section with rating cards
 */
const Testimonials = () => {
  const reduced = useReducedMotion()
  const variants = reduced ? { visible: {} } : stagger

  return (
    <motion.section
      id="testimonials"
      className="section section-alt"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
    >
      <SectionHead
        eyebrow="Testimonials"
        heading="Empowering Businesses Through Data-Driven Insights"
      />

      <div className="testimonials-grid">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </motion.section>
  )
}

export default Testimonials
