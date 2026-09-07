import React, { useRef, useState, useEffect, useCallback } from 'react'
import { CheckCircle2, ChevronRight, Link, ChevronLeft } from 'lucide-react'

export function Lifecycle() {
  const lifecycleSteps = [
    { title: 'Project Creation', desc: 'Initialize location, budget limits and configurations' },
    { title: 'BOQ Estimation', desc: 'Define required materials, quantities, and baseline costs' },
    { title: 'Material Request', desc: 'Raised from site against allocated BOQ parameters' },
    { title: 'Purchase Order', desc: 'Authorized PO sent directly to vendor with tax rules' },
    { title: 'Material Receipt', desc: 'Verify incoming physical quantities at store/site' },
    { title: 'Inventory Stock', desc: 'Automatic updates of stock quantities and reorder alarms' },
    { title: 'Site Consumption', desc: 'Log materials consumed during day-to-day work' },
    { title: 'Subcontractor Work', desc: 'Issue formal work orders defining milestones' },
    { title: 'Measurements', desc: 'Log completed tasks with joint measurement sheets' },
    { title: 'Bills', desc: 'Compile approved measurements into vendor payments' },
    { title: 'Project Costs', desc: 'Aggregate material receipts + subcontractor bills' },
    { title: 'Reports', desc: 'BOQ variance reports, PO audits and cost margins' }
  ]

  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const totalCards = lifecycleSteps.length

  const updateScrollState = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)

    const cards = el.querySelectorAll('.lifecycle-card-snap')
    if (!cards.length) return
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
    const cards = el.querySelectorAll('.lifecycle-card-snap')
    const card = cards[idx]
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
    <section id="lifecycle" className="section-padding lifecycle-carousel-section">
      <div className="ambient-glow glow-blue" style={{ bottom: '10%', left: '5%' }} />

      <div className="container position-relative z-index-1">
        <div className="text-center mb-5">
          <div className="erp-section-badge mb-3">
            <Link size={14} className="text-warning" />
            <span className="text-warning fw-semibold small text-uppercase" style={{ letterSpacing: '0.05em' }}>End-to-End Traceability</span>
          </div>
          <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Connected <span className="text-warning">Construction Lifecycle</span>
          </h2>
          <p className="lead fw-bold mx-auto max-w-3xl" style={{ fontSize: '1.1rem' }}>
            See how data flows seamlessly across departments, ensuring complete audit trails from the first estimate to the final financial statements.
          </p>
        </div>

        {/* Timeline Grid on Desktop, Horizontal Carousel on Mobile */}
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-xl-11">
            <div className="glass-card p-4 p-md-5 lifecycle-glass-card">
              
              {/* Carousel Navigation Arrows (Mobile Only) */}
              <button
                className={`lifecycle-nav-btn lifecycle-nav-left${canScrollLeft ? '' : ' lifecycle-nav-hidden'}`}
                onClick={scrollPrev}
                aria-label="Previous lifecycle step"
                disabled={!canScrollLeft}
              >
                <ChevronLeft size={18} />
              </button>

              <button
                className={`lifecycle-nav-btn lifecycle-nav-right${canScrollRight ? '' : ' lifecycle-nav-hidden'}`}
                onClick={scrollNext}
                aria-label="Next lifecycle step"
                disabled={!canScrollRight}
              >
                <ChevronRight size={18} />
              </button>

              {/* Cards Container: Row on desktop, flex track on mobile */}
              <div
                className="row g-4 lifecycle-carousel-track"
                ref={trackRef}
                role="region"
                aria-label="Construction lifecycle steps"
              >
                {lifecycleSteps.map((step, idx) => (
                  <div key={idx} className="col-12 col-md-6 col-lg-4 col-xl-3 lifecycle-card-snap">
                    <div
                      className={`p-3 h-100 rounded bg-dark bg-opacity-40 border border-secondary position-relative hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] transition lifecycle-card-inner${activeIndex === idx ? ' lifecycle-card-active' : ''}`}
                      style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <div className="d-flex align-items-start gap-3">
                        <div className="text-warning mt-1 flex-shrink-0">
                          <CheckCircle2 size={18} />
                        </div>
                        <div>
                          <div className="small text-slate-500 font-monospace mb-1" style={{ fontSize: '0.75rem' }}>STEP {idx + 1}</div>
                          <h6 className="fw-bold mb-2 text-white" style={{ fontSize: '0.95rem' }}>{step.title}</h6>
                          <p className="text-slate-400 small m-0" style={{ fontSize: '0.8rem', lineHeight: '1.45' }}>
                            {step.desc}
                          </p>
                        </div>
                      </div>
                      {idx < lifecycleSteps.length - 1 && (
                        <div className="position-absolute d-none d-xl-block" style={{ top: '50%', right: '-12px', transform: 'translateY(-50%)', zIndex: 10 }}>
                          <ChevronRight size={18} className="text-secondary" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Dot Indicators (Mobile Only) */}
              <div className="lifecycle-indicators" role="tablist" aria-label="Lifecycle step navigation">
                {lifecycleSteps.map((step, idx) => (
                  <button
                    key={idx}
                    className={`lifecycle-dot${activeIndex === idx ? ' lifecycle-dot-active' : ''}`}
                    onClick={() => scrollToCard(idx)}
                    role="tab"
                    aria-selected={activeIndex === idx}
                    aria-label={`Go to step ${idx + 1}: ${step.title}`}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
