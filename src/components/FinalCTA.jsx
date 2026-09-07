import React, { useState } from 'react'
import { ArrowRight, ChevronUp } from 'lucide-react'
import { EnquiryModal } from './ContactSection'

export function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="final-cta" className="section-padding text-center position-relative overflow-hidden">
      <div className="ambient-glow glow-orange" style={{ bottom: '-20%', left: '30%' }} />

      <div className="container position-relative z-index-1">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2 className="display-4 fw-bold mb-4 text-white" style={{ fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif", lineHeight: '1.35' }}>
              Build Every Project With One <br />
              <span className="text-warning">Connected Construction Platform</span>
            </h2>
            <p className="lead fw-semibold mx-auto mb-5 max-w-3xl" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Bring projects, materials, procurement, inventory, subcontractors, costs, and operational workflows together with ConstructionERP. Empower your field teams while retaining absolute financial supervision.
            </p>

            <div className="d-flex flex-wrap gap-3 justify-content-center mb-4">
              <button 
                onClick={() => setIsModalOpen(true)} 
                className="erp-cta-primary erp-explore-cta"
                aria-label="Explore ConstructionERP"
              >
                <span className="erp-explore-cta__shimmer" aria-hidden="true" />
                <span>Explore ConstructionERP</span>
                <ArrowRight size={18} className="erp-explore-cta__arrow" />
              </button>
              <button 
                onClick={() => handleScroll('workflow')} 
                className="erp-cta-secondary"
              >
                <span>View Platform Workflow</span>
              </button>
            </div>

            <button 
              onClick={() => handleScroll('hero')}
              className="btn btn-link text-slate-400 text-decoration-none mt-3 d-inline-flex align-items-center gap-1 hover:text-white"
            >
              <ChevronUp size={16} />
              <span className="small font-monospace uppercase">Back To Top</span>
            </button>
          </div>
        </div>
      </div>

      {/* Shared Enquiry Modal Popup */}
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
