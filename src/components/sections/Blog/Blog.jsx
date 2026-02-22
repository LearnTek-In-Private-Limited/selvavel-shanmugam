import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { BLOG_POSTS } from '../../../constants/siteData'
import { fadeUp, stagger } from '../../../constants/animations'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import SectionHead from '../../ui/SectionHead/SectionHead'
import './Blog.css'

/**
 * Blog post card component (memoized)
 */
const BlogCard = React.memo(({ post, index }) => {
  const navigate = useNavigate()

  return (
    <motion.article className="blog-card" variants={fadeUp}>
      <div className="blog-header">
        <span className="blog-category">{post.category}</span>
        <h3>{post.title}</h3>
      </div>

      <p className="blog-excerpt">{post.excerpt}</p>

      <div className="blog-meta">
        <span className="blog-date">{post.date}</span>
        <span className="blog-read-time">{post.readTime}</span>
      </div>

      <div className="blog-tags">
        {post.tags.map((tag) => (
          <span key={tag} className="blog-tag">
            {tag}
          </span>
        ))}
      </div>

      <button
        className="blog-read-more"
        onClick={() => navigate(`/blog/${index}`)}
        aria-label={`Read full article: ${post.title}`}
      >
        Read More <FaArrowRight aria-hidden="true" />
      </button>
    </motion.article>
  )
})

BlogCard.displayName = 'BlogCard'

/**
 * Blog section with post grid
 * @component
 * @returns {React.ReactElement} Blog section with post cards
 */
const Blog = () => {
  const reduced = useReducedMotion()
  const variants = reduced ? { visible: {} } : stagger

  return (
    <motion.section
      id="blog"
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
    >
      <SectionHead
        eyebrow="Blog"
        heading="Insights & Perspectives"
        body="Practical insights on data engineering, AI integration, and leadership in the modern data landscape."
      />

      <div className="blog-grid">
        {BLOG_POSTS.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </motion.section>
  )
}

export default Blog
