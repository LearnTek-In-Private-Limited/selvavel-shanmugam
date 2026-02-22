import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaClock, FaCalendar } from 'react-icons/fa'
import { BLOG_POSTS } from '../constants/siteData'
import './BlogDetailPage.css'

const BlogDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const postIndex = parseInt(id, 10)
  const post = BLOG_POSTS[postIndex]

  const handleDownload = () => {
    // Create a text file with the blog post content
    const element = document.createElement('a')
    const content = `${post.title}\n\nBy Selvavel Shanmugam\nPublished: ${post.date}\nReading Time: ${post.readTime}\n\n${post.content}\n\nKey Highlights:\n${post.highlights.join('\n')}\n\nTopics: ${post.topics.join(', ')}`
    const file = new Blob([content], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = `${post.title.toLowerCase().replace(/\s+/g, '-')}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  if (!post) {
    return (
      <section className="blog-detail-section section">
        <div className="blog-detail-container">
          <div className="blog-not-found">
            <h2>Blog Post Not Found</h2>
            <p>The blog post you&apos;re looking for doesn&apos;t exist.</p>
            <button onClick={() => navigate('/blog')} className="btn btn-primary">
              <FaArrowLeft /> Back to Blog
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="blog-detail-section section">
      <div className="blog-detail-container">
        <button
          onClick={() => navigate('/blog')}
          className="back-button"
          aria-label="Go back to blog"
        >
          <FaArrowLeft /> Back to Blog
        </button>

        <article className="blog-detail-content">
          <div className="blog-detail-header">
            <span className="blog-detail-category">{post.category}</span>
            <h1>{post.title}</h1>

            <div className="blog-detail-meta">
              <div className="meta-item">
                <FaCalendar aria-hidden="true" />
                <span>{post.date}</span>
              </div>
              <div className="meta-item">
                <FaClock aria-hidden="true" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <div className="blog-detail-body">
            <div className="blog-detail-main">
              <p className="blog-detail-intro">{post.content}</p>

              <h2>Key Highlights</h2>
              <ul className="blog-highlights">
                {post.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>

              <h2>Topics Covered</h2>
              <div className="blog-detail-topics">
                {post.topics.map((topic) => (
                  <span key={topic} className="topic-tag">
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <aside className="blog-detail-sidebar">
              <div className="blog-detail-card">
                <h3>Download Article</h3>
                <p style={{ fontSize: '0.9rem', color: '#595769', marginBottom: '1rem' }}>
                  Save this article for offline reading
                </p>
                <button
                  onClick={handleDownload}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  aria-label={`Download ${post.title}`}
                >
                  Download Article
                </button>
              </div>

              <div className="blog-detail-card">
                <h3>Article Details</h3>
                <div className="blog-detail-info">
                  <div className="info-item">
                    <span className="info-label">Category</span>
                    <span className="info-value">{post.category}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Reading Time</span>
                    <span className="info-value">{post.readTime}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Published</span>
                    <span className="info-value">{post.date}</span>
                  </div>
                </div>
              </div>

              <div className="blog-detail-tags-sidebar">
                <h3>Tags</h3>
                <div className="tags-container">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </article>
      </div>
    </section>
  )
}

export default BlogDetailPage
