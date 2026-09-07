import React from 'react'
import { IndianRupee, TrendingUp, ShieldCheck, Calculator } from 'lucide-react'

export function FinanceSection() {
  return (
    <section id="finance" className="section-padding">
      <div className="ambient-glow glow-blue" style={{ bottom: '10%', left: '40%' }} />

      <div className="container position-relative z-index-1">
        <div className="row align-items-center mb-5">
          <div className="col-12 col-lg-6">
            <div className="erp-section-badge mb-3">
              <IndianRupee size={14} className="text-warning" />
              <span className="text-warning fw-bold small text-uppercase" style={{ letterSpacing: '0.05em' }}>Finance & Costs</span>
            </div>
            <h2 className="display-5 fw-bold gradient-text mb-3">Real-Time Cost Control</h2>
            <p className="lead fw-semibold">
              Audit committed obligations and actual cash outflows immediately. Stop waiting for month-end reports—track cost variances as site purchases occur.
            </p>
          </div>
          
          <div className="col-12 col-lg-6">
            {/* Calculation Formula Card */}
            <div className="glass-card p-4 bg-dark">
              <div className="d-flex align-items-center gap-2 mb-3 border-bottom border-secondary pb-2">
                <Calculator size={18} className="text-danger" />
                <h6 className="fw-bold m-0 font-monospace text-white">Project Cost Ledger Equation</h6>
              </div>
              <div className="font-monospace small text-slate-300">
                <div className="p-2 bg-black rounded mb-2 border border-secondary">
                  <div className="text-slate-400 small">Committed Cost (Future Liability)</div>
                  <div className="text-warning fw-bold mt-1">Sum of All Raised Purchase Orders (PO Value)</div>
                </div>
                <div className="p-2 bg-black rounded border border-secondary">
                  <div className="text-slate-400 small">Actual Spend (Paid / Unpaid Liabilities)</div>
                  <div className="text-success fw-bold mt-1">Material Receipts (MRNs) + Approved Subcontractor Bills</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Finance Dashboard Mock */}
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="glass-card p-4">
              <div className="d-flex align-items-center justify-content-between border-bottom border-secondary pb-3 mb-4">
                <h5 className="fw-bold m-0 font-monospace text-white">Project Cost Audit Ledger</h5>
                <span className="small text-slate-400 font-monospace text-success">✓ fully reconciled</span>
              </div>

              <div className="row g-4 text-start font-monospace">
                <div className="col-12 col-md-4">
                  <div className="p-3 bg-dark border border-secondary rounded">
                    <div className="text-slate-400 small mb-1">Total Estimated Budget</div>
                    <h3 className="fw-bold text-white mb-2">₹1,50,00,000</h3>
                    <div className="small text-slate-500">BOQ reference limit</div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="p-3 bg-dark border border-secondary rounded">
                    <div className="text-slate-400 small mb-1">Committed Cost (POs Raised)</div>
                    <h3 className="fw-bold text-warning mb-2">₹96,48,000</h3>
                    <div className="small text-slate-500">64.3% of total budget</div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="p-3 bg-dark border border-secondary rounded">
                    <div className="text-slate-400 small mb-1">Actual Spend (Receipts + Bills)</div>
                    <h3 className="fw-bold text-success mb-2">₹54,15,000</h3>
                    <div className="small text-slate-500">Reconciled material + labor</div>
                  </div>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="mt-4">
                <div className="d-flex justify-content-between small font-monospace text-slate-400 mb-2">
                  <span>Usage relative to plan</span>
                  <span className="text-white">64.3% committed</span>
                </div>
                <div className="progress bg-secondary" style={{ height: '8px' }}>
                  <div className="progress-bar bg-warning" role="progressbar" style={{ width: '64.3%' }} aria-valuenow="64.3" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
