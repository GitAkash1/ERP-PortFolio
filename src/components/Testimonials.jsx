import React, { useRef, useState, useEffect, useCallback } from 'react'
import { Star, MessageSquareQuote, Building2, ChevronLeft, ChevronRight } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      role: "Senior Project Director",
      company: "Apex Infrastructure Group",
      project: "Metro Line Extension Project",
      avatarInitials: "RS",
      avatarGradient: "linear-gradient(135deg, #f97316 0%, #ec4899 100%)",
      message: "ConstructionERP completely transformed how we track site material consumption and subcontractor billings. Having BOQ limits auto-checked before purchase orders are issued saved us from huge budget overruns.",
      rating: 5,
      highlightBadge: "Infrastructure"
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "VP of Operations",
      company: "Skyline Highrise Builders",
      project: "Commercial Tower Phase II",
      avatarInitials: "SJ",
      avatarGradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
      message: "The real-time sync between store managers at site and head office procurement is incredible. Daily work logs and goods receipts propagate instantly, making month-end audit reports completely painless.",
      rating: 5,
      highlightBadge: "Commercial Real Estate"
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Chief Procurement Officer",
      company: "Horizon Infra Works",
      project: "National Highway Expansion",
      avatarInitials: "AP",
      avatarGradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
      message: "Managing dozens of subcontractors with different measurement sheets used to take weeks. With ConstructionERP's automated workflow, payment certificates and cost reconciliations are processed seamlessly.",
      rating: 5,
      highlightBadge: "Civil & Roads"
    }
  ]

  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const totalCards = testimonials.length

  const updateScrollState = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)

    const cards = el.querySelectorAll('.testimonial-card-snap')
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
    const cards = el.querySelectorAll('.testimonial-card-snap')
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
    <section id="testimonials" className="section-padding position-relative testimonials-carousel-section">
      {/* Ambient Background Glow */}
      <div className="ambient-glow glow-orange" style={{ top: '20%', right: '10%' }} />
      <div className="ambient-glow glow-purple" style={{ bottom: '15%', left: '5%' }} />

      <div className="container position-relative z-index-1">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="erp-section-badge mb-3">
            <MessageSquareQuote size={14} className="text-warning" />
            <span className="text-warning fw-semibold small text-uppercase" style={{ letterSpacing: '0.05em' }}>
              Customer Feedback
            </span>
          </div>

          <h2 className="display-5 fw-bold text-white mb-3">
            Trusted by <span className="text-warning">Construction Leaders</span>
          </h2>
          <p className="lead fw-semibold mx-auto max-w-3xl">
            Hear from teams using ConstructionERP to simplify project operations, enforce BOQ discipline, and streamline day-to-day construction management.
          </p>
        </div>

        {/* Testimonials Horizontal Carousel */}
        <div className="testimonials-carousel-outer">
          {/* Navigation Arrows */}
          <button
            className={`testimonials-nav-btn testimonials-nav-left${canScrollLeft ? '' : ' testimonials-nav-hidden'}`}
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            disabled={!canScrollLeft}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            className={`testimonials-nav-btn testimonials-nav-right${canScrollRight ? '' : ' testimonials-nav-hidden'}`}
            onClick={scrollNext}
            aria-label="Next testimonial"
            disabled={!canScrollRight}
          >
            <ChevronRight size={20} />
          </button>

          {/* Scrollable Track */}
          <div
            className="testimonials-carousel-track"
            ref={trackRef}
            role="region"
            aria-label="Customer Testimonials Carousel"
          >
            {testimonials.map((t, idx) => (
              <div key={t.id} className="testimonial-card-snap">
                <div className={`glass-card p-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden testimonial-card-inner${activeIndex === idx ? ' testimonial-card-active' : ''}`}>
                  {/* Subtle Card Accent Line */}
                  <div 
                    className="position-absolute top-0 start-0 w-100" 
                    style={{ height: '3px', background: t.avatarGradient, opacity: 0.8 }} 
                  />

                  <div>
                    {/* Top Bar: Category Badge & Star Rating */}
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span 
                        className="badge bg-dark border border-secondary text-slate-300 font-monospace" 
                        style={{ fontSize: '0.7rem', padding: '4px 8px' }}
                      >
                        {t.highlightBadge}
                      </span>
                      <div className="d-flex align-items-center gap-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={15} fill="#f97316" color="#f97316" />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Quote Content */}
                    <p className="text-slate-300 small leading-relaxed mb-4" style={{ fontSize: '0.925rem', lineHeight: '1.6' }}>
                      "{t.message}"
                    </p>
                  </div>

                  {/* Customer Footer Metadata */}
                  <div className="pt-3 border-top border-secondary border-opacity-25 d-flex align-items-center gap-3">
                    {/* Avatar Circle */}
                    <div 
                      className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold flex-shrink-0 shadow-sm"
                      style={{ 
                        width: '46px', 
                        height: '46px', 
                        background: t.avatarGradient,
                        fontSize: '0.95rem',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {t.avatarInitials}
                    </div>

                    <div className="overflow-hidden">
                      <h5 className="fw-bold mb-0 text-white text-truncate" style={{ fontSize: '0.95rem' }}>
                        {t.name}
                      </h5>
                      <div className="text-slate-400 small text-truncate" style={{ fontSize: '0.78rem' }}>
                        {t.role}
                      </div>
                      <div className="text-info font-monospace text-truncate d-flex align-items-center gap-1 mt-1" style={{ fontSize: '0.72rem' }}>
                        <Building2 size={11} className="flex-shrink-0" />
                        <span>{t.company}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="testimonials-indicators" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                className={`testimonials-dot${activeIndex === idx ? ' testimonials-dot-active' : ''}`}
                onClick={() => scrollToCard(idx)}
                role="tab"
                aria-selected={activeIndex === idx}
                aria-label={`Go to testimonial ${idx + 1}: ${t.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
