import React, { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMobileNav, closeMobileNav } from '../../../store/slices/uiSlice'
import { useScrolled } from '../../../hooks/useScrolled'
import Button from '../../ui/Button/Button'
import './Header.css'

function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { mobileOpen, scrolled } = useSelector((s) => s.ui)
  useScrolled()

  const handleToggle = useCallback(() => dispatch(toggleMobileNav()), [dispatch])
  const handleClose = useCallback(() => dispatch(closeMobileNav()), [dispatch])

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ]

  const handleNavClick = (href) => {
    handleClose()
    if (href.startsWith('/')) {
      navigate(href)
    } else {
      navigate('/')
    }
  }

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="brand" aria-label="Selvavel home" onClick={handleClose}>
        <img src="/android-icon-192x192.png" alt="" className="brand-icon" aria-hidden="true" />
        <span className="brand-text">Selvavel</span>
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick(link.href)
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <Button as="a" className="nav-cta" href="/#contact" onClick={handleClose}>Schedule Consultation</Button>
      </div>
      <button className={`hamburger ${mobileOpen ? 'open' : ''}`} onClick={handleToggle} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} aria-controls="mobile-nav-dialog">
        <span /><span /><span />
      </button>
    </header>
  )
}
export default Header
