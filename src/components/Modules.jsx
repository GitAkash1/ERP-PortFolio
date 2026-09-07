import React, { useRef, useState, useEffect, useCallback } from 'react'
import { ShieldAlert, LayoutGrid, Clipboard, ShoppingCart, Archive, Users2, IndianRupee, BarChart3, Settings, ChevronLeft, ChevronRight } from 'lucide-react'

export function Modules() {
  const modulesData = [
    {
      title: 'Authentication & RBAC',
      desc: 'Secure session authorization integrated with roles and permission guards.',
      features: ['Django Session Auth', 'hasPermission() Context Helper', 'Route Guards & Redirects'],
      icon: <ShieldAlert className="text-warning" size={24} />
    },
    {
      title: 'Work Center',
      desc: 'Role-specific operations hub and landing screen with actions and KPIs.',
      features: ['Project Quick Selector', 'Attention Items Tracker', 'Recent Activity Log Feed'],
      icon: <Settings className="text-info" size={24} />
    },
    {
      title: 'Project Management',
      desc: 'Complete project record lifecycle including codes, timelines, budgets, and status tags.',
      features: ['Filter & Search Queries', 'Pagination Controls', 'Detailed Status Badges'],
      icon: <LayoutGrid className="text-primary" size={24} />
    },
    {
      title: 'Bill of Quantities (BOQ)',
      desc: 'Linked specification baseline mapping materials, planned quantities, and units.',
      features: ['Estimation Allocation', 'Unit Cost Breakdowns', 'Material Demands Log'],
      icon: <Clipboard className="text-warning" size={24} />
    },
    {
      title: 'Procurement Pipeline',
      desc: 'Integrated pipeline connecting requests to purchase orders and receipts.',
      features: ['Material Requests Approval', 'PO Vendor Tax Logs', 'Partial Receipt Verification'],
      icon: <ShoppingCart className="text-info" size={24} />
    },
    {
      title: 'Inventory & Stock',
      desc: 'Maintains catalog catalog items, stock limits, and records site consumption.',
      features: ['Project Stock summaries', 'Reorder Alerts', 'Consumption Variance Logs'],
      icon: <Archive className="text-success" size={24} />
    },
    {
      title: 'Subcontractors App',
      desc: 'Subcontractor registry, milestone orders, physical measurements, and payment bills.',
      features: ['Work Order Scope Logs', 'Joint Measurement Approvals', 'Billing Status Progression'],
      icon: <Users2 className="text-light" size={24} />
    },
    {
      title: 'Finance Cost Controls',
      desc: 'Calculates real-time commitments (POs) against actual spend records.',
      features: ['Committed Cost Equation', 'Actual Spend Log', 'Variance Analytics'],
      icon: <IndianRupee className="text-danger" size={24} />
    },
    {
      title: 'Interactive Reports',
      desc: 'Generates detailed BOQ utilization, PO status matrices, and cost charts.',
      features: ['BOQ Consumption %', 'Vendor PO Audit Values', '₹ formatting representation'],
      icon: <BarChart3 className="text-success" size={24} />
    }
  ]

  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Compute how many cards per "view" for indicator grouping
  const totalCards = modulesData.length

  const updateScrollState = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)

    // Find the card closest to center of viewport
    const cards = el.querySelectorAll('.modules-card-snap')
    let closestIdx = 0
    let closestDist = Infinity
    const center = el.scrollLeft + el.clientWidth / 2
    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const dist = Math.abs(cardCenter - center)
      if (dist < closestDist) {
        closestDist = dist
        closestIdx = i
      }
    })
    setActiveIndex(closestIdx)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener('scroll', updateScrollState, { passive: true })
    return () => el.removeEventListener('scroll', updateScrollState)
  }, [updateScrollState])

  const scrollToCard = (idx) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelectorAll('.modules-card-snap')[idx]
    if (!card) return
    const targetScrollLeft = card.offsetLeft - (el.clientWidth / 2 - card.offsetWidth / 2)
    el.scrollTo({ left: Math.max(0, targetScrollLeft), behavior: 'smooth' })
  }

  const scrollPrev = () => {
    const newIdx = Math.max(0, activeIndex - 1)
    scrollToCard(newIdx)
  }

  const scrollNext = () => {
    const newIdx = Math.min(totalCards - 1, activeIndex + 1)
    scrollToCard(newIdx)
  }

  return (
    <section id="modules" className="section-padding modules-carousel-section">
      <div className="ambient-glow glow-orange" style={{ top: '10%', right: '5%' }} />

      <div className="container position-relative z-index-1">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Core <span className="gradient-text">ERP Modules</span>
          </h2>
          <p className="lead fw-semibold mx-auto max-w-3xl" style={{ fontSize: '1.1rem' }}>
            A comprehensive structure of modules aligned with ConstructionERP's Django backend architecture.
          </p>
        </div>
      </div>

      {/* Carousel outer — full-width, contained scroll, no page-level x-overflow */}
      <div className="modules-carousel-outer">
        {/* Left arrow */}
        <button
          className={`modules-nav-btn modules-nav-left${canScrollLeft ? '' : ' modules-nav-hidden'}`}
          onClick={scrollPrev}
          aria-label="Previous module"
          disabled={!canScrollLeft}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Scrollable track */}
        <div
          className="modules-carousel-track"
          ref={trackRef}
          role="region"
          aria-label="Core ERP Modules carousel"
        >
          {modulesData.map((mod, idx) => (
            <div
              key={idx}
              className="modules-card-snap"
              role="group"
              aria-label={`Module ${idx + 1} of ${totalCards}: ${mod.title}`}
            >
              <div className={`glass-card p-4 h-100 d-flex flex-column justify-content-between modules-card-inner${activeIndex === idx ? ' modules-card-active' : ''}`}>
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div
                      className="p-3 bg-dark bg-opacity-40 rounded border border-secondary d-flex align-items-center justify-content-center"
                      style={{ width: '48px', height: '48px' }}
                    >
                      {mod.icon}
                    </div>
                    <span
                      className="badge bg-dark border border-secondary text-slate-400 font-monospace"
                      style={{ fontSize: '0.65rem', padding: '3px 8px' }}
                    >
                      /api/v1/module-0{idx + 1}
                    </span>
                  </div>
                  <h4 className="fw-bold mb-3 text-white" style={{ fontSize: '1.25rem' }}>{mod.title}</h4>
                  <p className="text-slate-400 small mb-4" style={{ fontSize: '0.825rem', lineHeight: '1.5' }}>{mod.desc}</p>
                </div>
                <div>
                  <ul className="list-unstyled p-0 m-0 border-top border-secondary pt-3">
                    {mod.features.map((feat, fidx) => (
                      <li key={fidx} className="d-flex align-items-center gap-2 mb-2 text-slate-300 small" style={{ fontSize: '0.8rem' }}>
                        <span className="bg-warning rounded-circle" style={{ width: '4px', height: '4px', opacity: 0.8, flexShrink: 0 }}></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          className={`modules-nav-btn modules-nav-right${canScrollRight ? '' : ' modules-nav-hidden'}`}
          onClick={scrollNext}
          aria-label="Next module"
          disabled={!canScrollRight}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="modules-indicators" role="tablist" aria-label="Module navigation">
        {modulesData.map((mod, idx) => (
          <button
            key={idx}
            className={`modules-dot${activeIndex === idx ? ' modules-dot-active' : ''}`}
            onClick={() => scrollToCard(idx)}
            role="tab"
            aria-selected={activeIndex === idx}
            aria-label={`Go to module ${idx + 1}: ${mod.title}`}
          />
        ))}
      </div>
    </section>
  )
}
