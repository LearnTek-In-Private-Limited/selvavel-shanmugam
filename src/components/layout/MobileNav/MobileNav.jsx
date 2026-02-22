import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { closeMobileNav } from '../../../store/slices/uiSlice'
import './MobileNav.css'

function MobileNav() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const mobileOpen = useSelector((s) => s.ui.mobileOpen)
  const handleClose = useCallback(() => dispatch(closeMobileNav()), [dispatch])

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ]

  const handleNavClick = useCallback((href) => {
    handleClose()
    if (href.startsWith('/')) {
      navigate(href)
    } else {
      navigate('/')
    }
  }, [handleClose, navigate])

  if (!mobileOpen) return null
  return (
    <>
      <div className="mobile-overlay" onClick={handleClose} aria-hidden="true" />
      <nav className="mobile-nav" role="dialog" aria-modal="true" aria-label="Site navigation" id="mobile-nav-dialog">
        <button className="mobile-close" onClick={handleClose} aria-label="Close navigation menu" autoFocus><span aria-hidden="true">&times;</span></button>
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
    </>
  )
}
export default MobileNav
