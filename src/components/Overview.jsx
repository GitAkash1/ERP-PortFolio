import React, { useState, useRef } from 'react'
import { FolderGit2, ClipboardList, ShoppingCart, Archive, Users, IndianRupee, FileBarChart2, ArrowRight } from 'lucide-react'

import m1Image from '../assets/m1image.png'
import m2Image from '../assets/M2image.png'
import m3Image from '../assets/m3image.png'
import m4Image from '../assets/m4image.png'
import m5Image from '../assets/m5image.png'
import m6Image from '../assets/m6image.png'
import m7Image from '../assets/m7image.png'

export function Overview() {
  const steps = [
    { name: 'Projects', desc: 'Initialize and track sites', icon: <FolderGit2 className="text-primary" />, image: m1Image },
    { name: 'BOQ', desc: 'Detailed bill of quantities', icon: <ClipboardList className="text-warning" />, image: m2Image },
    { name: 'Procurement', desc: 'Material requests & POs', icon: <ShoppingCart className="text-info" />, image: m3Image },
    { name: 'Inventory', desc: 'Stock management & consumption', icon: <Archive className="text-success" />, image: m4Image },
    { name: 'Subcontractors', desc: 'Work orders & bill approvals', icon: <Users className="text-purple" />, image: m5Image },
    { name: 'Finance', desc: 'PO costs vs actual spends', icon: <IndianRupee className="text-danger" />, image: m6Image },
    { name: 'Reports', desc: 'Project consumption metrics', icon: <FileBarChart2 className="text-light" />, image: m7Image }
  ]

  const [activeIdx, setActiveIdx] = useState(0)
  const trackRef = useRef(null)

  const scrollToCard = (idx) => {
    if (!trackRef.current) return
    const card = trackRef.current.children[idx]
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
    setActiveIdx(idx)
  }

  const handleScroll = () => {
    if (!trackRef.current) return
    const track = trackRef.current
    const cardWidth = track.children[0]?.offsetWidth ?? 0
    if (cardWidth === 0) return
    const scrollLeft = track.scrollLeft
    const idx = Math.round(scrollLeft / cardWidth)
    setActiveIdx(Math.max(0, Math.min(idx, steps.length - 1)))
  }

  return (
    <section id="overview" className="section-padding">
      <div className="ambient-glow glow-purple" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)' }} />

      <div className="container position-relative z-index-1">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3 text-white" style={{ fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif" }}>
            Enterprise Scope, <span className="text-warning">Industry Precision</span>
          </h2>
          <p className="lead fw-semibold mx-auto max-w-3xl" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            ConstructionERP is a full-stack platform engineered to align field execution with head-office supervision. We coordinate every stage of your operations in a secure session-locked database.
          </p>
        </div>

        {/* Dynamic Connected Layout (Desktop - hidden on mobile) */}
        <div className="row g-4 justify-content-center mt-4 d-none d-md-flex">
          {steps.map((step, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div 
                className="glass-card p-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden"
                style={{
                  backgroundImage: `url(${step.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="position-relative z-index-1 d-flex flex-column justify-content-between h-100">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="p-3 bg-dark bg-opacity-40 rounded border border-secondary d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                        {step.icon}
                      </div>
                      <span className="text-slate-400 small font-monospace fw-bold" style={{ opacity: 0.8 }}>0{idx + 1}</span>
                    </div>
                    <h4 className="fw-bold mb-2 text-white" style={{ fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif", fontSize: 'clamp(1.1rem, 1.25vw, 1.25rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.01em', textShadow: '0 1px 3px rgba(0, 0, 0, 0.85)' }}>{step.name}</h4>
                    <p className="mb-4" style={{ color: '#E2E8F0', fontSize: 'clamp(0.825rem, 0.95vw, 0.875rem)', fontWeight: 400, lineHeight: 1.45, textShadow: '0 1px 2px rgba(0, 0, 0, 0.85)' }}>{step.desc}</p>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="d-none d-xl-flex justify-content-end text-slate-400" style={{ marginTop: '-10px', opacity: 0.5 }}>
                      <ArrowRight size={16} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-Only Horizontal Carousel (hidden on desktop md+) */}
        <div className="overview-mobile-carousel d-md-none mt-4">
          <button
            className="overview-carousel-btn overview-carousel-btn--prev"
            onClick={() => scrollToCard(Math.max(0, activeIdx - 1))}
            aria-label="Previous card"
          >
            ‹
          </button>

          <div
            className="overview-carousel-track"
            ref={trackRef}
            onScroll={handleScroll}
          >
            {steps.map((step, idx) => (
              <div key={idx} className="overview-carousel-slide">
                <div 
                  className="glass-card p-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${step.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="position-relative z-index-1">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="p-3 bg-dark bg-opacity-40 rounded border border-secondary d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                        {step.icon}
                      </div>
                      <span className="text-slate-400 small font-monospace fw-bold" style={{ opacity: 0.8 }}>0{idx + 1}</span>
                    </div>
                    <h4 className="fw-bold mb-2 text-white" style={{ fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif", fontSize: 'clamp(1.1rem, 1.25vw, 1.25rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.01em', textShadow: '0 1px 3px rgba(0, 0, 0, 0.85)' }}>{step.name}</h4>
                    <p className="mb-4" style={{ color: '#E2E8F0', fontSize: 'clamp(0.825rem, 0.95vw, 0.875rem)', fontWeight: 400, lineHeight: 1.45, textShadow: '0 1px 2px rgba(0, 0, 0, 0.85)' }}>{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="overview-carousel-btn overview-carousel-btn--next"
            onClick={() => scrollToCard(Math.min(steps.length - 1, activeIdx + 1))}
            aria-label="Next card"
          >
            ›
          </button>

          <div className="overview-carousel-dots">
            {steps.map((_, idx) => (
              <button
                key={idx}
                className={`overview-carousel-dot${activeIdx === idx ? ' active' : ''}`}
                onClick={() => scrollToCard(idx)}
                aria-label={`Go to card ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
