import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Mail, Phone, MapPin, Clock, Send, Shield, X } from 'lucide-react'

export function EnquiryForm({ isModal = false, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'Request Demo',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: 'Request Demo',
      message: ''
    })
    if (isModal && onClose) {
      onClose()
    }
  }

  const idPrefix = isModal ? 'modal-contact-' : 'contact-'

  return (
    <form onSubmit={handleSubmit} className="row g-3">
      <div className="col-12 col-md-6">
        <label htmlFor={`${idPrefix}name`} className="form-label small text-slate-400 font-monospace" style={{ fontSize: '0.75rem' }}>YOUR NAME *</label>
        <input
          type="text"
          className="glass-input"
          id={`${idPrefix}name`}
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
      </div>

      <div className="col-12 col-md-6">
        <label htmlFor={`${idPrefix}email`} className="form-label small text-slate-400 font-monospace" style={{ fontSize: '0.75rem' }}>EMAIL ADDRESS *</label>
        <input
          type="email"
          className="glass-input"
          id={`${idPrefix}email`}
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
      </div>

      <div className="col-12 col-md-6">
        <label htmlFor={`${idPrefix}phone`} className="form-label small text-slate-400 font-monospace" style={{ fontSize: '0.75rem' }}>MOBILE NUMBER *</label>
        <input
          type="tel"
          className="glass-input"
          id={`${idPrefix}phone`}
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Mobile Number"
          required
        />
      </div>

      <div className="col-12 col-md-6">
        <label htmlFor={`${idPrefix}company`} className="form-label small text-slate-400 font-monospace" style={{ fontSize: '0.75rem' }}>COMPANY NAME *</label>
        <input
          type="text"
          className="glass-input"
          id={`${idPrefix}company`}
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company Name"
          required
        />
      </div>

      <div className="col-12">
        <label htmlFor={`${idPrefix}subject`} className="form-label small text-slate-400 font-monospace" style={{ fontSize: '0.75rem' }}>ENQUIRY TYPE *</label>
        <select
          className="glass-input"
          id={`${idPrefix}subject`}
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        >
          <option value="Request Demo">Request Product Demonstration</option>
          <option value="Enterprise Pricing">Enterprise SLA & Custom Pricing</option>
          <option value="Scoping & Customization">Database / Scoping Scenarios</option>
          <option value="General Inquiry">General Platform Inquiry</option>
        </select>
      </div>

      <div className="col-12">
        <label htmlFor={`${idPrefix}message`} className="form-label small text-slate-400 font-monospace" style={{ fontSize: '0.75rem' }}>MESSAGE *</label>
        <textarea
          className="glass-input"
          id={`${idPrefix}message`}
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="3"
          placeholder="Tell us about your project requirements..."
          required
        ></textarea>
      </div>

      <div className="col-12 mt-3">
        <button type="submit" className="glass-button glass-button-primary w-100 py-2.5 d-flex align-items-center justify-content-center gap-2">
          <span>Book Enquiry</span>
          <Send size={16} />
        </button>
      </div>
    </form>
  )
}

export function EnquiryModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return

    // Capture current scroll position and scrollbar width
    const scrollY = window.scrollY || window.pageYOffset || 0
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    // Lock body scroll and prevent layout shift
    const originalOverflow = document.body.style.overflow
    const originalPaddingRight = document.body.style.paddingRight

    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }

      // Prevent background scrolling via keyboard keys if focus is not in an editable field or inside modal dialog
      const scrollKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Space', 'Home', 'End']
      if (scrollKeys.includes(e.key)) {
        const activeEl = document.activeElement
        const isEditable = activeEl && ['INPUT', 'TEXTAREA', 'SELECT'].includes(activeEl.tagName)
        const isInsideModal = activeEl && activeEl.closest('.erp-enquiry-modal-dialog')

        if (!isEditable && !isInsideModal) {
          e.preventDefault()
        }
      }
    }

    const handleTouchMove = (e) => {
      // Prevent touch scrolling on backdrop layer, allow inside modal body
      const modalBody = document.querySelector('.erp-enquiry-modal-body')
      if (modalBody && modalBody.contains(e.target)) {
        return
      }
      e.preventDefault()
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('touchmove', handleTouchMove, { passive: false })

    return () => {
      document.body.style.overflow = originalOverflow
      document.body.style.paddingRight = originalPaddingRight

      // Restore exact scroll position
      window.scrollTo(0, scrollY)

      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div className="erp-enquiry-modal-backdrop erp-portfolio-page" onClick={onClose}>
      <div className="erp-enquiry-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="erp-enquiry-modal-header d-flex align-items-center justify-content-between">
          <div>
            <h5 className="fw-bold text-white m-0 font-monospace" style={{ fontSize: '1.1rem' }}>
              Construction<span className="text-warning">ERP</span> Enquiry
            </h5>
            <div className="small text-slate-400 font-monospace" style={{ fontSize: '0.725rem' }}>
              Schedule a live demo or enterprise consultation
            </div>
          </div>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary text-slate-400 hover-text-white border-opacity-40 p-1.5 d-flex align-items-center justify-content-center"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        <div className="erp-enquiry-modal-body">
          <EnquiryForm isModal={true} onClose={onClose} />
        </div>
      </div>
    </div>,
    document.body
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="section-padding position-relative overflow-hidden">
      <div className="ambient-glow glow-orange" style={{ top: '20%', left: '5%' }} />
      <div className="ambient-glow glow-blue" style={{ bottom: '10%', right: '5%' }} />

      <div className="container position-relative z-index-1">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <div className="erp-section-badge mb-3">
            <Shield size={14} className="text-warning" />
            <span className="text-warning fw-semibold small text-uppercase" style={{ letterSpacing: '0.05em' }}>Get In Touch</span>
          </div>
          <h2 className="display-5 fw-bold mb-3 text-white" style={{ fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif" }}>
            Ready to Build Smarter with <span className="text-warning">ConstructionERP</span>?
          </h2>
          <p className="lead fw-semibold mx-auto max-w-3xl" style={{ fontSize: '1.1rem' }}>
            Get in touch with our team for project inquiries, enterprise deployment scoping, or to schedule a live product demonstration.
          </p>
        </div>

        <div className="row g-4 mt-2 justify-content-center">
          {/* Left Column — Contact Information Panel */}
          <div className="col-12 col-lg-5">
            <div className="erp-contact-info p-4">
              <div>
                <span className="fw-bold text-white fs-4 font-monospace mb-3 d-block">
                  Construction<span className="text-warning">ERP</span>
                </span>
                <p className="text-slate-400 small mb-4 leading-relaxed" style={{ fontSize: '0.85rem' }}>
                  Engineered to keep site operations, material logs, subcontractor billing, head-office audits, and enterprise accounts synchronized in one secure platform.
                </p>

                {/* Details list */}
                <div className="d-flex flex-column gap-3 mt-4">
                  <div className="d-flex align-items-start gap-3">
                    <div className="p-2 bg-dark bg-opacity-40 rounded border border-secondary text-warning mt-1 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                      <Mail size={16} />
                    </div>
                    <div>
                      <div className="small text-slate-500 font-monospace" style={{ fontSize: '0.7rem' }}>EMAIL INQUIRIES</div>
                      <a href="mailto:akashkarnan02@gmail.com" className="text-white text-decoration-none small hover-text-warning transition">
                        akashkarnan02@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div className="p-2 bg-dark bg-opacity-40 rounded border border-secondary text-warning mt-1 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                      <Phone size={16} />
                    </div>
                    <div>
                      <div className="small text-slate-500 font-monospace" style={{ fontSize: '0.7rem' }}>CALL PLATFORM TEAM</div>
                      <a href="tel:+919345631281" className="text-white text-decoration-none small hover-text-warning transition">
                        +91-9345631281
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div className="p-2 bg-dark bg-opacity-40 rounded border border-secondary text-warning mt-1 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div className="small text-slate-500 font-monospace" style={{ fontSize: '0.7rem' }}>ADDRESS</div>
                      <span className="text-slate-300 small">
                        IUDP Colony, Selvapuram, Coimbatore - 641026
                      </span>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div className="p-2 bg-dark bg-opacity-40 rounded border border-secondary text-warning mt-1 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                      <Clock size={16} />
                    </div>
                    <div>
                      <div className="small text-slate-500 font-monospace" style={{ fontSize: '0.7rem' }}>WORKING HOURS</div>
                      <span className="text-slate-300 small">
                        Mon - Fri: 8:00 AM - 6:00 PM (IST)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-top border-secondary border-opacity-40 text-slate-500 small font-monospace" style={{ fontSize: '0.7rem' }}>
                * Field offices can submit logs 24/7 via offline sync protocols.
              </div>
            </div>
          </div>

          {/* Right Column — Contact/Enquiry Form */}
          <div className="col-12 col-lg-7">
            <div className="erp-contact-form-card p-4">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

