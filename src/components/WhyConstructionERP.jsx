import React from 'react'
import { ShieldCheck, HardHat, TrendingUp } from 'lucide-react'

export function WhyConstructionERP() {
  const points = [
    {
      title: 'Enforced BOQ Baselines',
      desc: 'Prevent unauthorized field expenditures. Every material request is checked against the approved budget limits, blocking wastage at the source.',
      icon: <ShieldCheck className="text-warning" size={24} />
    },
    {
      title: 'Field to Head-Office Integration',
      desc: 'Log physical goods receipts at store warehouses and record daily consumption on-site. Watch stock updates propagate to executive ledgers instantly.',
      icon: <HardHat className="text-info" size={24} />
    },
    {
      title: 'Granular Auditable Logs',
      desc: 'Verify milestone work orders, physical measurement sheets, and billing payouts. Reconcile committed PO values against actual bills in one place.',
      icon: <TrendingUp className="text-success" size={24} />
    }
  ]

  return (
    <section id="why" className="section-padding">
      <div className="ambient-glow glow-purple" style={{ top: '10%', left: '10%' }} />

      <div className="container position-relative z-index-1">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Why <span className="gradient-text">ConstructionERP?</span></h2>
          <p className="lead fw-semibold mx-auto max-w-3xl">
            A secure, purpose-built SaaS solution designed to enforce operational discipline and audit trails at every level of your construction lifecycle.
          </p>
        </div>

        <div className="row g-4">
          {points.map((pt, idx) => (
            <div key={idx} className="col-12 col-lg-4">
              <div className="glass-card p-4 h-100 text-center text-lg-start d-flex flex-column align-items-center align-items-lg-start">
                <div className="p-3 bg-dark rounded border border-secondary mb-4 d-inline-flex">
                  {pt.icon}
                </div>
                <h4 className="fw-bold mb-3">{pt.title}</h4>
                <p className="text-slate-400 small leading-relaxed m-0">{pt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
