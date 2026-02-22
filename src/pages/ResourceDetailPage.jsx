import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaFileDownload } from 'react-icons/fa'
import { RESOURCES } from '../constants/siteData'
import './ResourceDetailPage.css'

const ResourceDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const resourceIndex = parseInt(id, 10)
  const resource = RESOURCES[resourceIndex]

  const handleDownload = () => {
    // Create a simple file download
    const element = document.createElement('a')
    const file = new Blob(
      [
        `${resource.title}\n\n${resource.description}\n\nThis resource provides comprehensive insights and practical frameworks for ${resource.description.toLowerCase()}.\n\nKey Topics:\n${resource.description}`,
      ],
      { type: 'text/plain' }
    )
    element.href = URL.createObjectURL(file)
    element.download = `${resource.title.toLowerCase().replace(/\s+/g, '-')}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  if (!resource) {
    return (
      <section className="resource-detail-section section">
        <div className="resource-detail-container">
          <div className="resource-not-found">
            <h2>Resource Not Found</h2>
            <p>The resource you&apos;re looking for doesn&apos;t exist.</p>
            <button onClick={() => navigate('/resources')} className="btn btn-primary">
              <FaArrowLeft /> Back to Resources
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="resource-detail-section section">
      <div className="resource-detail-container">
        <button
          onClick={() => navigate('/resources')}
          className="back-button"
          aria-label="Go back to resources"
        >
          <FaArrowLeft /> Back to Resources
        </button>

        <article className="resource-detail-content">
          <div className="resource-detail-header">
            <span className="resource-detail-type">{resource.type}</span>
            <h1>{resource.title}</h1>
            <p className="resource-detail-description">{resource.description}</p>
          </div>

          <div className="resource-detail-body">
            <div className="resource-detail-info">
              <h2>About This Resource</h2>
              <p>
                This {resource.type.toLowerCase()} provides comprehensive insights and practical frameworks for {resource.description.toLowerCase()}.
                Perfect for data leaders, engineers, and analytics professionals looking to implement best practices and drive organizational transformation.
              </p>

              <h3>What You&apos;ll Learn</h3>
              <ul className="resource-highlights">
                <li>Strategic approaches to {resource.title.toLowerCase()}</li>
                <li>Practical implementation frameworks and methodologies</li>
                <li>Real-world case studies and best practices</li>
                <li>Actionable insights for immediate application</li>
                <li>Industry benchmarks and performance metrics</li>
              </ul>

              <h3>Key Topics Covered</h3>
              <div className="resource-topics">
                <span className="topic-tag">Strategy & Planning</span>
                <span className="topic-tag">Implementation</span>
                <span className="topic-tag">Best Practices</span>
                <span className="topic-tag">ROI & Metrics</span>
                <span className="topic-tag">Case Studies</span>
              </div>
            </div>

            <aside className="resource-detail-sidebar">
              <div className="resource-detail-card">
                <div className="resource-detail-icon">
                  <FaFileDownload aria-hidden="true" />
                </div>
                <h3>Ready to Download?</h3>
                <p>Get instant access to this resource by downloading it now.</p>
                <button
                  onClick={handleDownload}
                  className="btn btn-primary download-btn"
                  aria-label={`Download ${resource.title}`}
                >
                  <FaFileDownload /> Download Now
                </button>
                <p className="download-note">No email required • Instant access • Text format</p>
              </div>

              <div className="resource-meta">
                <div className="meta-item">
                  <span className="meta-label">Format</span>
                  <span className="meta-value">{resource.type}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Duration</span>
                  <span className="meta-value">10-15 min read</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Level</span>
                  <span className="meta-value">Advanced</span>
                </div>
              </div>
            </aside>
          </div>
        </article>
      </div>
    </section>
  )
}

export default ResourceDetailPage
