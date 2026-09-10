import React, { useRef, useState, useEffect, useCallback } from 'react'
import { Server, ChevronLeft, ChevronRight } from 'lucide-react'
import { SiHtml5, SiBootstrap, SiReact, SiPython, SiDjango, SiPostgresql } from 'react-icons/si'

export function TechnologyStack() {
  const techs = [
    {
      name: 'HTML5',
      category: 'Frontend Foundation',
      desc: 'Semantic elements for robust document structures, accessibility, and SEO.',
      color: 'rgba(227, 79, 38, 0.18)',
      borderColor: 'rgba(227, 79, 38, 0.4)',
      icon: <SiHtml5 size={38} color="#e34f26" />
    },
    {
      name: 'Bootstrap 5',
      category: 'CSS UI Layout',
      desc: 'Responsive styling utilities, flex grid structure, and modular UI patterns.',
      color: 'rgba(139, 92, 246, 0.18)',
      borderColor: 'rgba(139, 92, 246, 0.4)',
      icon: <SiBootstrap size={38} color="#8b5cf6" />
    },
    {
      name: 'React.js',
      category: 'Frontend Logic',
      desc: 'Dynamic state rendering, SPA routing, and reusable interface components.',
      color: 'rgba(97, 218, 251, 0.18)',
      borderColor: 'rgba(97, 218, 251, 0.4)',
      icon: <SiReact size={38} color="#61dafb" />
    },
    {
      name: 'Python',
      category: 'Backend Logic',
      desc: 'Robust server scripts, computational logic, data mapping, and utility controllers.',
      color: 'rgba(55, 118, 171, 0.18)',
      borderColor: 'rgba(55, 118, 171, 0.4)',
      icon: <SiPython size={38} color="#3776ab" />
    },
    {
      name: 'Django',
      category: 'Backend Web Framework',
      desc: 'B2B secure APIs, session auth context, object relational database filters (ORM), and strict RBAC guards.',
      color: 'rgba(68, 183, 139, 0.18)',
      borderColor: 'rgba(68, 183, 139, 0.4)',
      icon: <SiDjango size={38} color="#44b78b" />
    },
    {
      name: 'PostgreSQL',
      category: 'Database Management',
      desc: 'Session-locked relational structure, index performance logs, transaction integrity, and audit tracking.',
      color: 'rgba(65, 105, 225, 0.18)',
      borderColor: 'rgba(65, 105, 225, 0.4)',
      icon: <SiPostgresql size={38} color="#4169e1" />
    }
  ]

  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const totalCards = techs.length

  const updateScrollState = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)

    const cards = el.querySelectorAll('.techstack-card-snap')
    if (!cards.length) return
    let closestIdx = 0
    let closestDist = Infinity
    const isMobile = window.innerWidth <= 767.98
    const targetRefPoint = isMobile ? el.scrollLeft + 20 : el.scrollLeft + el.clientWidth / 2
    cards.forEach((card, i) => {
      const cardRefPoint = isMobile ? card.offsetLeft : card.offsetLeft + card.offsetWidth / 2
      const dist = Math.abs(cardRefPoint - targetRefPoint)
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
    const cards = el.querySelectorAll('.techstack-card-snap')
    const card = cards[idx]
    if (!card) return
    const isMobile = window.innerWidth <= 767.98
    if (isMobile) {
      const targetScrollLeft = card.offsetLeft - 20
      el.scrollTo({ left: Math.max(0, targetScrollLeft), behavior: 'smooth' })
    } else {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
    setActiveIndex(idx)
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
    <section id="tech-stack" className="section-padding position-relative overflow-hidden techstack-carousel-section">
      <div className="ambient-glow glow-blue" style={{ bottom: '10%', right: '5%' }} />

      <div className="container position-relative z-index-1">
        <div className="text-center mb-5">
          <div className="erp-section-badge mb-3">
            <Server size={16} className="text-warning" />
            <span className="text-warning fw-bold small text-uppercase" style={{ letterSpacing: '0.05em' }}>Architecture</span>
          </div>
          <h2 className="display-5 fw-bold mb-3"><span className="gradient-text">Enterprise Technology Stack</span></h2>
          <p className="lead fw-semibold mx-auto max-w-3xl">
            ConstructionERP utilizes a robust industry-standard tech stack. We combine React's logic layer with Django's secure database integrity rules.
          </p>
        </div>

        <div className="techstack-carousel-outer">
          {/* Mobile Navigation Arrows */}
          <button
            className={`techstack-nav-btn techstack-nav-left${canScrollLeft ? '' : ' techstack-nav-hidden'}`}
            onClick={scrollPrev}
            aria-label="Previous technology"
            disabled={!canScrollLeft}
          >
            <ChevronLeft size={18} />
          </button>

          <button
            className={`techstack-nav-btn techstack-nav-right${canScrollRight ? '' : ' techstack-nav-hidden'}`}
            onClick={scrollNext}
            aria-label="Next technology"
            disabled={!canScrollRight}
          >
            <ChevronRight size={18} />
          </button>

          {/* Cards Container: Grid on desktop, flex track on mobile */}
          <div
            className="row g-4 justify-content-center techstack-carousel-track"
            ref={trackRef}
            role="region"
            aria-label="Enterprise Technology Stack cards"
          >
            {techs.map((tech, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4 techstack-card-snap">
                <div 
                  className={`tech-card h-100 p-4 techstack-card-inner${activeIndex === idx ? ' techstack-card-active' : ''}`}
                  style={{ 
                    border: `1px solid ${tech.borderColor}`,
                    background: `linear-gradient(135deg, ${tech.color} 0%, rgba(9, 13, 22, 0.7) 100%)`
                  }}
                >
                  <div 
                    className="tech-icon-wrapper flex-shrink-0 me-3"
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '14px',
                      background: 'rgba(15, 23, 42, 0.85)',
                      border: `1px solid ${tech.borderColor}`,
                      boxShadow: `0 6px 18px -4px ${tech.color}`
                    }}
                  >
                    {tech.icon}
                  </div>
                  <div className="text-start">
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <h5 className="fw-bold m-0 text-white" style={{ fontSize: '1.05rem' }}>{tech.name}</h5>
                      <span className="badge bg-dark border border-secondary text-slate-300 font-monospace" style={{ fontSize: '0.65rem', padding: '3px 8px' }}>
                        {idx < 3 ? 'FRONTEND' : 'BACKEND'}
                      </span>
                    </div>
                    <span className="text-info font-monospace d-block mb-1" style={{ fontSize: '0.725rem' }}>{tech.category}</span>
                    <p className="text-slate-300 m-0 small" style={{ fontSize: '0.825rem', lineHeight: '1.45' }}>{tech.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Dot Indicators */}
          <div className="techstack-indicators" role="tablist" aria-label="Technology stack navigation">
            {techs.map((tech, idx) => (
              <button
                key={idx}
                className={`techstack-dot${activeIndex === idx ? ' techstack-dot-active' : ''}`}
                onClick={() => scrollToCard(idx)}
                role="tab"
                aria-selected={activeIndex === idx}
                aria-label={`Go to technology ${idx + 1}: ${tech.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
