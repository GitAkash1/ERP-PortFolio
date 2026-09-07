import React, { useState } from 'react'
import { ArrowRight, Server, Layers, Cpu } from 'lucide-react'
import { EnquiryModal } from './ContactSection'
import { VanishText } from './VanishText'

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="hero" className="position-relative overflow-hidden min-vh-100 d-flex align-items-center section-padding">
      {/* Background ambient glows */}
      <div className="ambient-glow glow-orange glow-pulse" style={{ top: '-10%', left: '-10%' }} />
      <div className="ambient-glow glow-blue glow-pulse" style={{ bottom: '-10%', right: '-10%' }} />

      <div className="container position-relative z-index-1">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-10">
            {/* Tagline Badge */}
            <div className="erp-section-badge mb-4">
              <span className="spinner-grow spinner-grow-sm text-warning" role="status" aria-hidden="true" style={{ width: '8px', height: '8px' }}></span>
              <span className="text-warning fw-bold small tracking-wider text-uppercase" style={{ letterSpacing: '0.08em' }}>ConstructionERP</span>
            </div>

            {/* Headline */}
            <h1 className="display-3 fw-bold mb-4 tracking-tight text-white" style={{ fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif", lineHeight: '1.35' }}>
              <VanishText 
                phrases={[
                  'Plan. Procure. Track. Control.',
                  'BOQ & Cost Estimation Hub',
                  'Site & Subcontractor Control',
                  'Unified Construction Platform'
                ]} 
                className="vanish-text-highlight" 
              />
              <br />
              All in One <span className="gradient-text">ConstructionERP</span>
            </h1>

            {/* Supporting Copy */}
            <p className="lead fw-semibold mx-auto mb-5 max-w-3xl" style={{ fontSize: '1.2rem', lineHeight: '1.75' }}>
              Unify your construction project management, BOQ estimation, procurement, inventory, subcontractor lifecycle, and finance under a single secure platform. Connect site operations, store logs, and head-office audits into a unified role-based operational hub.
            </p>

            {/* Centered Primary CTA Button */}
            <div className="d-flex justify-content-center mb-5">
              <button 
                onClick={() => setIsModalOpen(true)} 
                className="erp-cta-primary erp-explore-cta"
                aria-label="Explore ConstructionERP"
              >
                <span className="erp-explore-cta__shimmer" aria-hidden="true" />
                <span>Explore ConstructionERP</span>
                <ArrowRight size={18} className="erp-explore-cta__arrow" />
              </button>
            </div>
          </div>
        </div>

        {/* Polished Floating Product Cards */}
        <div className="row mt-5 justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="glass-card p-4 animate-float" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="d-flex align-items-center justify-content-between border-bottom border-secondary pb-3 mb-3">
                <div className="d-flex align-items-center gap-2">
                  <div className="rounded-circle bg-danger" style={{ width: '10px', height: '10px' }}></div>
                  <div className="rounded-circle bg-warning" style={{ width: '10px', height: '10px' }}></div>
                  <div className="rounded-circle bg-success" style={{ width: '10px', height: '10px' }}></div>
                </div>
                <div className="small text-slate-400 font-monospace" style={{ fontSize: '0.75rem' }}>construction_erp_core_hub</div>
                <div></div>
              </div>
              <div className="row g-3 text-start">
                <div className="col-12 col-md-4">
                  <div className="p-3 rounded bg-dark bg-opacity-50 border border-secondary">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="small text-slate-400" style={{ fontSize: '0.75rem' }}>Total Budget</span>
                      <Server size={14} className="text-primary" />
                    </div>
                    <h5 className="font-monospace fw-bold m-0 text-primary">₹8,45,20,000</h5>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="p-3 rounded bg-dark bg-opacity-50 border border-secondary">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="small text-slate-400" style={{ fontSize: '0.75rem' }}>BOQ Items</span>
                      <Layers size={14} className="text-warning" />
                    </div>
                    <h5 className="font-monospace fw-bold m-0 text-warning">412</h5>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="p-3 rounded bg-dark bg-opacity-50 border border-secondary">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="small text-slate-400" style={{ fontSize: '0.75rem' }}>Active Tasks</span>
                      <Cpu size={14} className="text-success" />
                    </div>
                    <h5 className="font-monospace fw-bold m-0 text-success">11</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Modal Popup */}
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

