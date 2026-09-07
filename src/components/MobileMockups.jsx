import React from 'react'
import { Smartphone, LayoutGrid, CheckCircle2, AlertTriangle, Search, Plus, Send } from 'lucide-react'

export function MobileMockups() {
  return (
    <section id="mobile-mockups" className="section-padding position-relative overflow-hidden">
      <div className="ambient-glow glow-purple" style={{ top: '25%', left: '50%', transform: 'translateX(-50%)' }} />

      <div className="container position-relative z-index-1">
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill glass-card mb-3" style={{ background: 'rgba(139,92,246,0.05)' }}>
            <Smartphone size={14} className="text-info" />
            <span className="text-info fw-semibold small text-uppercase">Mobile Experience</span>
          </div>
          <h2 className="display-5 fw-bold mb-3">Responsive Mobile Showcase</h2>
          <p className="lead text-slate-400 mx-auto max-w-3xl">
            ConstructionERP is optimized for field operations. Track inventory, approve measurement logs, and coordinate workflows directly from the job site.
          </p>
        </div>

        {/* 3D Overlapping perspective composition */}
        <div className="mockups-wrapper">
          
          {/* Phone 1: Left Overlapping - Projects Directory */}
          <div className="phone-mockup-frame phone-left">
            <div className="phone-mockup-screen">
              <div className="d-flex align-items-center justify-content-between border-bottom border-secondary pb-2 mb-3">
                <span className="fw-bold tracking-tight text-white font-monospace">Projects</span>
                <Plus size={14} className="text-warning" />
              </div>

              {/* Mini Search */}
              <div className="position-relative mb-3">
                <Search size={10} className="position-absolute text-slate-500" style={{ left: '8px', top: '50%', transform: 'translateY(-50%)' }} />
                <input 
                  type="text" 
                  placeholder="Search site..." 
                  className="w-100 bg-dark border-secondary text-white font-monospace rounded-pill"
                  style={{ fontSize: '0.65rem', padding: '4px 8px 4px 24px', border: '1px solid rgba(255,255,255,0.08)', outline: 'none' }}
                  readOnly 
                />
              </div>

              {/* Projects List */}
              <div className="d-flex flex-column gap-2 text-start font-monospace">
                <div className="p-2 bg-dark rounded border border-secondary">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-warning font-weight-bold" style={{ fontSize: '0.65rem' }}>PRJ-2026-001</span>
                    <span className="badge-custom badge-active" style={{ fontSize: '0.55rem', padding: '1px 4px' }}>Active</span>
                  </div>
                  <div className="text-white fw-bold text-truncate" style={{ fontSize: '0.7rem' }}>Infinity Heights Block A</div>
                  <div className="text-slate-400" style={{ fontSize: '0.6rem' }}>Noida • Budget: ₹14.5Cr</div>
                </div>

                <div className="p-2 bg-dark rounded border border-secondary">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-warning font-weight-bold" style={{ fontSize: '0.65rem' }}>PRJ-2026-002</span>
                    <span className="badge-custom badge-active" style={{ fontSize: '0.55rem', padding: '1px 4px' }}>Active</span>
                  </div>
                  <div className="text-white fw-bold text-truncate" style={{ fontSize: '0.7rem' }}>Metro Flyover Segment C</div>
                  <div className="text-slate-400" style={{ fontSize: '0.6rem' }}>Pune • Budget: ₹48.2Cr</div>
                </div>

                <div className="p-2 bg-dark rounded border border-secondary opacity-75">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-warning font-weight-bold" style={{ fontSize: '0.65rem' }}>PRJ-2026-003</span>
                    <span className="badge-custom badge-planned" style={{ fontSize: '0.55rem', padding: '1px 4px' }}>Planned</span>
                  </div>
                  <div className="text-white fw-bold text-truncate" style={{ fontSize: '0.7rem' }}>Eco-Park Sewerage Line</div>
                  <div className="text-slate-400" style={{ fontSize: '0.6rem' }}>Kolkata • Budget: ₹2.35Cr</div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 2: Center - Work Center (Operational Hub) */}
          <div className="phone-mockup-frame phone-center">
            <div className="phone-mockup-screen">
              <div className="d-flex align-items-center justify-content-between border-bottom border-secondary pb-2 mb-3">
                <div className="d-flex align-items-center gap-1">
                  <LayoutGrid className="text-warning" size={12} />
                  <span className="fw-bold tracking-wider text-white font-monospace">WORK CENTER</span>
                </div>
                <span className="badge bg-dark border border-secondary text-info font-monospace" style={{ fontSize: '0.55rem', padding: '2px 4px' }}>PM</span>
              </div>

              {/* Quick Select Project */}
              <div className="bg-dark border border-secondary p-2 rounded mb-3 text-start">
                <span className="text-slate-500 font-monospace" style={{ fontSize: '0.55rem', display: 'block' }}>SELECTED SITE:</span>
                <span className="text-warning font-monospace fw-bold" style={{ fontSize: '0.65rem' }}>Infinity Heights Block A</span>
              </div>

              {/* KPIs Row */}
              <div className="row g-2 mb-3 font-monospace text-start">
                <div className="col-6">
                  <div className="p-2 bg-dark rounded border border-secondary">
                    <span className="text-slate-400 d-block" style={{ fontSize: '0.55rem' }}>Pending POs</span>
                    <span className="fw-bold text-warning" style={{ fontSize: '0.85rem' }}>8 Items</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-2 bg-dark rounded border border-secondary">
                    <span className="text-slate-400 d-block" style={{ fontSize: '0.55rem' }}>Actual Spent</span>
                    <span className="fw-bold text-success" style={{ fontSize: '0.85rem' }}>₹54.1L</span>
                  </div>
                </div>
              </div>

              {/* Attention Alerts List */}
              <div className="text-start">
                <span className="font-monospace fw-bold text-slate-400 d-block mb-2" style={{ fontSize: '0.6rem', letterSpacing: '0.05em' }}>ATTENTION REQUIRED</span>
                
                <div className="d-flex gap-2 p-2 bg-dark border border-danger border-opacity-50 rounded mb-2">
                  <AlertTriangle size={12} className="text-danger mt-1 flex-shrink-0" />
                  <div className="font-monospace" style={{ fontSize: '0.6rem' }}>
                    <span className="text-white fw-bold d-block">Variance Crossed 12%</span>
                    <span className="text-slate-400" style={{ fontSize: '0.55rem' }}>Coarse Aggregate consumption exceeded planned BOQ baseline.</span>
                  </div>
                </div>

                <div className="d-flex gap-2 p-2 bg-dark border border-secondary rounded">
                  <CheckCircle2 size={12} className="text-info mt-1 flex-shrink-0" />
                  <div className="font-monospace" style={{ fontSize: '0.6rem' }}>
                    <span className="text-white fw-bold d-block">Measurement Approval</span>
                    <span className="text-slate-400" style={{ fontSize: '0.55rem' }}>Precision Masonry submitted brickwork log.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 3: Right Overlapping - Procurement Form */}
          <div className="phone-mockup-frame phone-right">
            <div className="phone-mockup-screen">
              <div className="d-flex align-items-center justify-content-between border-bottom border-secondary pb-2 mb-3">
                <span className="fw-bold tracking-tight text-white font-monospace">New Request</span>
                <Send size={12} className="text-info" />
              </div>

              {/* Form Content */}
              <div className="d-flex flex-column gap-2 text-start font-monospace" style={{ fontSize: '0.6rem' }}>
                <div className="p-2 bg-dark rounded border border-secondary">
                  <span className="text-slate-500 d-block">MATERIAL REQUEST CODE</span>
                  <span className="text-white fw-bold">MR-2026-042</span>
                </div>

                <div className="p-2 bg-dark rounded border border-secondary">
                  <span className="text-slate-500 d-block">BOQ ITEM REFERENCE</span>
                  <span className="text-white fw-bold">Cement OPC 53 Grade</span>
                </div>

                <div className="row g-2">
                  <div className="col-6">
                    <div className="p-2 bg-dark rounded border border-secondary">
                      <span className="text-slate-500 d-block">REQ QUANTITY</span>
                      <span className="text-warning fw-bold">800 Bags</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-2 bg-dark rounded border border-secondary">
                      <span className="text-slate-500 d-block">BOQ LIMIT</span>
                      <span className="text-success fw-bold">2,500 Bags</span>
                    </div>
                  </div>
                </div>

                <div className="p-2 bg-dark rounded border border-secondary">
                  <span className="text-slate-500 d-block">JUSTIFICATION REMARKS</span>
                  <span className="text-white" style={{ fontSize: '0.55rem', lineHeight: '1.3' }}>Required for third-floor slab concreting schedule. Enforced limits checked.</span>
                </div>

                {/* Simulated Button */}
                <div className="p-2 rounded text-center fw-bold mt-2" style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.35)', color: '#6ee7b7' }}>
                  Submit for PM Approval
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
