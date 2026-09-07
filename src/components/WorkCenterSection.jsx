import React from 'react'
import { LayoutGrid, AlertTriangle, Play, CheckCircle2, ChevronRight, Folder } from 'lucide-react'

export function WorkCenterSection() {
  const quickActions = [
    { title: 'Raise Request', desc: 'Create new Material Request against BOQ limit' },
    { title: 'Approve Measurements', desc: 'Verify and authorize physical site works' },
    { title: 'Verify Goods Receipt', desc: 'Log and inventory incoming truck shipments' }
  ]

  const attentionItems = [
    { title: 'Variance Limit Crossed', desc: 'Coarse Aggregate consumption exceeded BOQ planned value by 12% at Infinity Heights Site.', severity: 'High' },
    { title: 'Subcontractor Measurement Approval', desc: 'Precision Masonry submitted brickwork measurement log for verification.', severity: 'Medium' }
  ]

  const activities = [
    { text: 'Store Manager logged Goods Receipt MRN-2026-015 for 800 bags cement.', time: '10 mins ago' },
    { text: 'Finance Manager authorized payout for Subcontractor Bill SUB-BILL-09.', time: '1 hour ago' },
    { text: 'Project Manager updated status of Metro Flyover Project to Active.', time: '4 hours ago' }
  ]

  return (
    <section id="workcenter" className="section-padding">
      <div className="ambient-glow glow-orange" style={{ top: '-10%', left: '50%', transform: 'translateX(-50%)' }} />

      <div className="container position-relative z-index-1">
        <div className="row align-items-center mb-5">
          <div className="col-12 col-lg-6">
            <div className="erp-section-badge mb-3">
              <LayoutGrid size={14} className="text-warning" />
              <span className="text-warning fw-bold small text-uppercase" style={{ letterSpacing: '0.05em' }}>Operational Hub</span>
            </div>
            <h2 className="display-5 fw-bold gradient-text mb-3">The Work Center Experience</h2>
            <p className="lead fw-semibold">
              The first screen users land on after session verification. The Work Center aggregates role-based stats, quick-access routes, attention alerts, and recent updates under a single control deck.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <div className="glass-card p-4 bg-dark">
              <div className="d-flex align-items-center gap-2 mb-3">
                <Folder size={18} className="text-warning" />
                <span className="small text-white fw-semibold erp-ui-text">Quick Dashboard Summary</span>
              </div>
              <p className="text-slate-400 small mb-0">
                Instead of jumping between nested modules, users see the exact indicators, approval lists, and records relevant to their session profile immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Polished Work Center UI Card */}
        <div className="row justify-content-center">
          <div className="col-12 col-xl-11">
            <div className="glass-card p-4 border border-secondary" style={{ background: '#090d16' }}>
              
              {/* Top Header Row */}
              <div className="d-flex flex-wrap align-items-center justify-content-between border-bottom border-secondary pb-3 mb-4 gap-3">
                <div className="d-flex align-items-center gap-3">
                  <h5 className="fw-bold m-0 erp-ui-text text-white">Work Center</h5>
                  <div className="d-flex align-items-center bg-dark border border-secondary px-3 py-1 rounded">
                    <span className="small text-slate-400 erp-ui-text me-2">Selected Project:</span>
                    <select className="bg-transparent border-0 text-warning erp-ui-text small" style={{ outline: 'none' }} disabled>
                      <option>Infinity Heights Block A</option>
                    </select>
                  </div>
                </div>
                <div className="small font-monospace text-slate-400">Role: <span className="text-info fw-bold">PROJECT_MANAGER</span></div>
              </div>

              {/* Stats Bar */}
              <div className="row g-3 mb-4">
                <div className="col-12 col-md-4">
                  <div className="p-3 bg-dark border border-secondary rounded erp-ui-text text-start erp-panel-ui">
                    <span className="small text-slate-400 d-block mb-1">Active Projects</span>
                    <div className="fs-4 fw-bold text-white">12 Projects</div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="p-3 bg-dark border border-secondary rounded erp-ui-text text-start erp-panel-ui">
                    <span className="small text-slate-400 d-block mb-1">Pending Requests</span>
                    <div className="fs-4 fw-bold text-warning">8 Requests</div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="p-3 bg-dark border border-secondary rounded erp-ui-text text-start erp-panel-ui">
                    <span className="small text-slate-400 d-block mb-1">Total Spent</span>
                    <div className="fs-4 fw-bold text-success">₹54,15,000</div>
                  </div>
                </div>
              </div>

              {/* Main Panel Content split */}
              <div className="row g-4">
                {/* Left side: Actions & Attention */}
                <div className="col-12 col-lg-7">
                  <h6 className="fw-semibold erp-panel-label text-slate-400 mb-3 uppercase">Quick Actions</h6>
                  <div className="row g-2 mb-4">
                    {quickActions.map((act, idx) => (
                      <div key={idx} className="col-12">
                        <div className="p-3 rounded bg-dark border border-secondary d-flex align-items-center justify-content-between hover:shadow-[0_0_8px_rgba(255,255,255,0.05)] transition">
                          <div>
                            <div className="small text-white fw-semibold erp-ui-text">{act.title}</div>
                            <div className="text-slate-400 text-xs mt-1">{act.desc}</div>
                          </div>
                          <ChevronRight size={16} className="text-slate-400" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <h6 className="fw-semibold erp-panel-label text-slate-400 mb-3 uppercase">Attention Required</h6>
                  <div className="d-flex flex-column gap-2">
                    {attentionItems.map((att, idx) => (
                      <div key={idx} className="p-3 rounded bg-dark border border-danger border-opacity-50 d-flex gap-3 text-start">
                        <div className="text-danger mt-1">
                          <AlertTriangle size={18} />
                        </div>
                        <div>
                          <div className="d-flex align-items-center gap-2">
                            <span className="small text-white fw-semibold erp-ui-text">{att.title}</span>
                            <span className="badge-custom badge-cancelled text-xs">{att.severity}</span>
                          </div>
                          <p className="text-slate-400 small m-0 mt-1">{att.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side: Activity Feed & Quick Links */}
                <div className="col-12 col-lg-5">
                  <h6 className="fw-semibold erp-panel-label text-slate-400 mb-3 uppercase">Recent Activity</h6>
                  <div className="p-3 rounded bg-dark border border-secondary text-start erp-ui-text small mb-4">
                    {activities.map((act, idx) => (
                      <div key={idx} className="mb-3 border-bottom border-secondary pb-2 last-border-none">
                        <p className="text-slate-300 mb-1">{act.text}</p>
                        <span className="text-slate-500 text-xs">{act.time}</span>
                      </div>
                    ))}
                  </div>

                  <h6 className="fw-semibold erp-panel-label text-slate-400 mb-3 uppercase">Quick Access Links</h6>
                  <div className="row g-2 text-start erp-ui-text small">
                    {['Projects Directory', 'Inventory Ledger', 'Raise PO', 'Measurements Board', 'Finance Reports'].map((lnk, idx) => (
                      <div key={idx} className="col-6">
                        <div className="p-2 bg-dark rounded border border-secondary text-slate-300 text-center hover:text-white cursor-pointer transition">
                          {lnk}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
