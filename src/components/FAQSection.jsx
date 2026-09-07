import React, { useState } from 'react'
import { Plus, X, HelpCircle } from 'lucide-react'

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      question: 'Who can use ConstructionERP?',
      answer: 'ConstructionERP is designed for construction companies and project teams, including Project Managers, Site Engineers, Procurement Managers, Store Managers, Finance Managers, and Subcontractor Managers.'
    },
    {
      question: 'What modules are available in ConstructionERP?',
      answer: 'The platform provides modules for Project Management, BOQ, Procurement, Inventory & Materials, Subcontractors, Finance, Work Center, and Reports, helping teams manage the complete project workflow in one place.'
    },
    {
      question: 'Can ConstructionERP manage multiple construction projects?',
      answer: 'Yes. ConstructionERP can manage multiple projects while keeping project-specific information such as BOQ, procurement, inventory, consumption, costs, contractors, and reports organized separately.'
    },
    {
      question: 'How does ConstructionERP help with material management?',
      answer: 'ConstructionERP connects material requests, purchase orders, material receipts, inventory stock, and site consumption, allowing teams to track material movement from procurement to actual project usage.'
    },
    {
      question: 'Can ConstructionERP manage subcontractor work orders?',
      answer: 'Yes. The Subcontractors module allows authorized users to create and manage work orders, assign available stock materials, record work progress, and manage related billing workflows.'
    },
    {
      question: 'Does ConstructionERP provide project reports?',
      answer: 'Yes. ConstructionERP provides project-related reports and consumption metrics to help management monitor project progress, material usage, costs, and operational performance.'
    }
  ]

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <section id="faq" className="section-padding">
      <div className="ambient-glow glow-purple" style={{ top: '30%', left: '50%', transform: 'translateX(-50%)' }} />

      <div className="container position-relative z-index-1">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="erp-section-badge mb-3">
            <HelpCircle size={14} className="text-warning" />
            <span className="text-warning fw-semibold small text-uppercase" style={{ letterSpacing: '0.05em' }}>
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="display-5 fw-bold mb-3 text-white" style={{ fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif" }}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="lead fw-semibold mx-auto max-w-3xl text-slate-300" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Quick answers to common questions about ConstructionERP.
          </p>
        </div>

        {/* Constrained Centered Accordion Wrapper */}
        <div className="mx-auto" style={{ maxWidth: '800px' }}>
          <div className="d-flex flex-column gap-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx
              return (
                <div
                  key={idx}
                  className={`glass-card overflow-hidden ${
                    isOpen ? 'border-warning border-opacity-40' : ''
                  }`}
                  style={{
                    backgroundColor: isOpen ? 'rgba(15, 23, 42, 0.75)' : 'rgba(15, 23, 42, 0.45)',
                    borderColor: isOpen ? 'rgba(245, 158, 11, 0.35)' : 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '14px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <button
                    type="button"
                    className="w-100 p-4 text-start bg-transparent border-0 d-flex align-items-center justify-content-between gap-3 text-decoration-none"
                    onClick={() => toggleFAQ(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    id={`faq-question-${idx}`}
                    style={{ cursor: 'pointer', outline: 'none' }}
                  >
                    <span
                      className={`fw-semibold ${
                        isOpen ? 'text-warning' : 'text-white'
                      }`}
                      style={{
                        fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif",
                        lineHeight: '1.4',
                        fontSize: 'clamp(1.025rem, 1.15vw, 1.15rem)'
                      }}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 ${
                        isOpen
                          ? 'bg-warning text-dark fw-bold'
                          : 'bg-dark bg-opacity-60 text-slate-300 border border-secondary border-opacity-40'
                      }`}
                      style={{
                        width: '38px',
                        height: '38px',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      {isOpen ? <X size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-question-${idx}`}
                      className="px-4 pb-4 pt-0"
                    >
                      <div className="pt-3 border-top border-secondary border-opacity-20 text-slate-300" style={{ fontSize: '0.975rem', lineHeight: '1.65' }}>
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
