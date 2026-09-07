import React, { useState, useEffect, useCallback } from 'react'
import { Menu, X, Mail } from 'lucide-react'
import erpLogo from '../assets/image.png'

// Centralized nav items -- mapped to existing section IDs in the landing page
const navItems = [
  { label: 'Solutions',    target: 'overview' },
  { label: 'Services',     target: 'modules' },
  { label: 'Client',       target: 'clients' },
  { label: 'Testimonials', target: 'testimonials' },
  { label: 'FAQ',          target: 'faq' },
]

// All section IDs tracked by IntersectionObserver
const SECTION_IDS = ['hero', ...navItems.map((n) => n.target)]

export function TopNavigation() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled]       = useState(false)
  const [menuOpen, setMenuOpen]           = useState(false)

  // Track scroll depth to slightly increase navbar opacity after user scrolls
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // IntersectionObserver for active-section detection
  useEffect(() => {
    const observers = []
    const sectionMap = new Map()

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          sectionMap.set(id, entry.isIntersecting ? entry.intersectionRatio : 0)
          let best = 'hero', bestRatio = -1
          sectionMap.forEach((ratio, sId) => {
            if (ratio > bestRatio) { bestRatio = ratio; best = sId }
          })
          setActiveSection(best)
        },
        { threshold: [0.15, 0.35, 0.5], rootMargin: '-80px 0px -30% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // Smooth scroll helper with navbar offset compensation
  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id)
    if (!el) return
    const navH = 72
    const top = el.getBoundingClientRect().top + window.scrollY - navH
    window.scrollTo({ top, behavior: 'smooth' })
    setMenuOpen(false)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 992) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`erp-topnav${isScrolled ? ' erp-topnav--scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="erp-topnav__inner">
          <button
            className="erp-topnav__brand"
            onClick={() => scrollTo('hero')}
            aria-label="Back to top"
          >
            <img
              src={erpLogo}
              alt="ERP Logo"
              className="erp-navbar-logo"
            />
            <span className="erp-topnav__brand-text">
              Construction<span className="gradient-text">ERP</span>
            </span>
          </button>

          {/* Pill Container wrapping ONLY the 5 navigation links */}
          <div className="erp-topnav__pill-container d-none d-lg-flex">
            <ul className="erp-topnav__pill-links" role="list">
              {navItems.map(({ label, target }) => (
                <li key={target}>
                  <button
                    className={`erp-topnav__pill-link${activeSection === target ? ' erp-topnav__pill-link--active' : ''}`}
                    onClick={() => scrollTo(target)}
                    aria-current={activeSection === target ? 'true' : undefined}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="d-flex align-items-center gap-2">
            <button
              className="erp-topnav__contact-btn d-none d-sm-inline-flex"
              onClick={() => scrollTo('contact')}
              aria-label="Contact Us"
            >
              <Mail size={14} />
              <span>Contact Us</span>
            </button>

            <button
              className="erp-topnav__hamburger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="erp-mobile-menu"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        id="erp-mobile-menu"
        className={`erp-mobile-menu${menuOpen ? ' erp-mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div
          className="erp-mobile-menu__backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
        <div className="erp-mobile-menu__panel">
          <div className="erp-mobile-menu__header">
            <span className="erp-topnav__brand-text">
              Construction<span className="gradient-text">ERP</span>
            </span>
            <button
              className="erp-topnav__hamburger"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <X size={22} />
            </button>
          </div>
          <ul className="erp-mobile-menu__list" role="list">
            {navItems.map(({ label, target }) => (
              <li key={target}>
                <button
                  className={`erp-mobile-menu__item${activeSection === target ? ' erp-mobile-menu__item--active' : ''}`}
                  onClick={() => scrollTo(target)}
                  aria-current={activeSection === target ? 'true' : undefined}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
