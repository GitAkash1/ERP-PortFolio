import React from 'react'
import MarqueeRaw from 'react-fast-marquee'
import { Building2 } from 'lucide-react'

const Marquee = typeof MarqueeRaw === 'function' ? MarqueeRaw : (MarqueeRaw?.default || MarqueeRaw)

import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo6.png'
import logo7 from '../assets/logo7.png'

const clientLogos = [
  { id: 1, image: logo1, alt: "ConstructionERP Client Logo 1" },
  { id: 2, image: logo2, alt: "ConstructionERP Client Logo 2" },
  { id: 3, image: logo3, alt: "ConstructionERP Client Logo 3" },
  { id: 4, image: logo4, alt: "ConstructionERP Client Logo 4" },
  { id: 5, image: logo5, alt: "ConstructionERP Client Logo 5" },
  { id: 6, image: logo6, alt: "ConstructionERP Client Logo 6" },
  { id: 7, image: logo7, alt: "ConstructionERP Client Logo 7" },
]

export function ClientsSection() {
  return (
    <section id="clients" className="section-padding position-relative clients-section">
      {/* Ambient Background Glow Effects */}
      <div className="ambient-glow glow-orange" style={{ top: '15%', left: '5%' }} />
      <div className="ambient-glow glow-purple" style={{ bottom: '15%', right: '5%' }} />

      <div className="container position-relative z-index-1">
        {/* Section Header */}
        <div className="text-center mb-5 clients-header">
          <div className="erp-section-badge mb-3">
            <Building2 size={14} className="text-warning" />
            <span className="text-warning fw-semibold small text-uppercase" style={{ letterSpacing: '0.05em' }}>
              ENTERPRISE TRUST
            </span>
          </div>

          <h2 className="display-5 fw-bold text-white mb-3">
            Trusted by <span className="gradient-text">Leaders &amp; Innovators</span> Worldwide
          </h2>
          <p className="lead fw-semibold mx-auto max-w-3xl text-slate-300">
            Powering top-tier construction enterprises, infrastructure firms, and commercial builders with automated workflow discipline and real-time site control.
          </p>
        </div>
      </div>

      {/* Marquee Rows Container */}
      <div className="clients-marquee-container position-relative">
        {/* Left/Right Edge Fade Overlays for Smooth Visual Blend */}
        <div className="marquee-fade-left" />
        <div className="marquee-fade-right" />

        {/* Row 1: Leftward Scrolling */}
        <div className="clients-marquee-row mb-4">
          <Marquee
            direction="left"
            speed={40}
            gradient={false}
            pauseOnHover={true}
            className="clients-marquee"
          >
            {clientLogos.map((logo) => (
              <div key={`row1-${logo.id}`} className="client-logo-card">
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="client-logo-img"
                  loading="lazy"
                />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Row 2: Rightward Scrolling */}
        <div className="clients-marquee-row">
          <Marquee
            direction="right"
            speed={40}
            gradient={false}
            pauseOnHover={true}
            className="clients-marquee"
          >
            {clientLogos.map((logo) => (
              <div key={`row2-${logo.id}`} className="client-logo-card">
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="client-logo-img"
                  loading="lazy"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
