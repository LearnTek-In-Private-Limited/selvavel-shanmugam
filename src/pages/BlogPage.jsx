import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import SectionHead from '../components/ui/SectionHead/SectionHead'
import Card from '../components/ui/Card/Card'
import { BLOG_POSTS } from '../constants/siteData'
import { stagger } from '../constants/animations'
import './BlogPage.css'

const BlogPage = () => {
  const navigate = useNavigate()

  return (
    <section id="blog" className="blog-page-section section">
      <div className="blog-page-container">
        <SectionHead
          eyebrow="Insights & Articles"
          heading="Blog"
          body="Deep dives into data engineering, analytics, AI adoption, and leadership strategies for data-driven organizations."
        />

        <motion.div
          className="blog-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {BLOG_POSTS.map((post, index) => (
            <motion.div key={index} variants={stagger}>
              <Card className="blog-card">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h3>{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="blog-read-time">{post.readTime}</span>
                  <button
                    className="blog-read-more"
                    onClick={() => navigate(`/blog/${index}`)}
                    aria-label={`Read article: ${post.title}`}
                  >
                    Read More <FaArrowRight aria-hidden="true" />
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BlogPage
