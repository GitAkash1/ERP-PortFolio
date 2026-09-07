import React from 'react'
import { GitCommit, ArrowRight, UserCheck, Key, Settings, FolderClosed, ShoppingCart, Archive, FileText, DollarSign, BarChart } from 'lucide-react'

export function WorkflowSection() {
  const steps = [
    { title: 'Auth & Login', desc: 'Secure user authentication & credentials', icon: <UserCheck size={18} />, color: 'text-warning' },
    { title: 'Permissions Map', desc: 'Role-based access matrix & controls', icon: <Key size={18} />, color: 'text-info' },
    { title: 'Work Center Hub', desc: 'Centralized task & module workspace', icon: <Settings size={18} />, color: 'text-light' },
    { title: 'Project Init', desc: 'Site setup, budgets & configurations', icon: <FolderClosed size={18} />, color: 'text-primary' },
    { title: 'BOQ Estimation', desc: 'Baseline cost estimation & quantities', icon: <FileText size={18} />, color: 'text-warning' },
    { title: 'Material Request', desc: 'On-site material indent workflow', icon: <ShoppingCart size={18} />, color: 'text-info' },
    { title: 'Purchase Order', desc: 'Authorized PO issuance to vendors', icon: <ShoppingCart size={18} />, color: 'text-primary' },
    { title: 'Receipt Note', desc: 'Material inspection & store logs', icon: <Archive size={18} />, color: 'text-success' },
    { title: 'Site Log', desc: 'Daily execution & field updates', icon: <Archive size={18} />, color: 'text-success' },
    { title: 'Contractor Order', desc: 'Subcontractor work allocation', icon: <UserCheck size={18} />, color: 'text-warning' },
    { title: 'Measurements', desc: 'Joint measurement sheet logging', icon: <FileText size={18} />, color: 'text-info' },
    { title: 'Subcontractor Bill', desc: 'Milestone billing & verification', icon: <DollarSign size={18} />, color: 'text-success' },
    { title: 'Ledger Variance', desc: 'Real-time financial audit & variance', icon: <BarChart size={18} />, color: 'text-danger' }
  ]

  return (
    <section id="workflow" className="section-padding">
      <div className="ambient-glow glow-blue" style={{ top: '10%', right: '-10%' }} />

      <div className="container position-relative z-index-1">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold gradient-text mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Complete Application Workflow
          </h2>
          <p className="lead fw-semibold mx-auto max-w-3xl" style={{ fontSize: '1.1rem' }}>
            A continuous operational audit loop. Review how transactions propagate from field level entry to executive ledger dashboards.
          </p>
        </div>

        {/* Workflow Grid */}
        <div className="row g-3 g-md-4 justify-content-center">
          <div className="col-12 col-xl-11">
            <div className="glass-card p-4 p-md-5">
              <div className="row g-3 g-md-4 justify-content-center">
                {steps.map((st, idx) => {
                  const stepNum = String(idx + 1).padStart(2, '0')
                  return (
                    <div key={idx} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="workflow-card">
                        <div>
                          <div className="workflow-card-header">
                            <div className="d-flex align-items-center gap-2">
                              <span className="workflow-step-badge">STEP {stepNum}</span>
                              {idx < steps.length - 1 && (
                                <ArrowRight size={12} className="text-slate-500 opacity-60 d-none d-sm-inline" />
                              )}
                            </div>
                            <div className={`workflow-icon-box ${st.color}`}>
                              {st.icon}
                            </div>
                          </div>
                          <h6 className="workflow-card-title">{st.title}</h6>
                          <p className="workflow-card-desc">{st.desc}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
