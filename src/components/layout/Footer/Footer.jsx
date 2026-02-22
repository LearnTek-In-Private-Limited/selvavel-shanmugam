import React from 'react'
import { FaLinkedin, FaBookOpen } from 'react-icons/fa'
import { FOOTER_NAV } from '../../../constants/siteData'
import './Footer.css'

const Footer = React.memo(() => {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand-col">
          <span className="footer-brand">Selvavel</span>
          <p className="footer-tagline">Driving Innovation in Data Engineering & Data Analytics Globally</p>
          <div className="footer-socials">
            <a href="https://linkedin.com/in/selvavel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin aria-hidden="true" /></a>
            <a href="#blog" aria-label="Blog"><FaBookOpen aria-hidden="true" /></a>
          </div>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          {Object.entries(FOOTER_NAV).map(([sectionKey, links]) => (
            <div key={sectionKey} className="footer-nav-col">
              <p className="footer-nav-heading">{sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)}</p>
              {links.map((link) => (<a key={link.href} href={link.href}>{link.label}</a>))}
            </div>
          ))}
        </nav>
      </div>
      <div className="footer-bottom">
        <p>&copy; {year} Selvavel. Data Engineering and AI Consulting. All rights reserved.</p>
      </div>
    </footer>
  )
})
Footer.displayName = 'Footer'
export default Footer
