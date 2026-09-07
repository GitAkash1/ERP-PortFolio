import React from 'react'
import { Users, UserCheck, Scale, FileSpreadsheet } from 'lucide-react'
import B3 from '../assets/B3.png'

export function SubcontractorSection() {
  const steps = [
    { name: 'Register Partner', desc: 'Add contractors, scope expertise, tax details, and status reviews', icon: <UserCheck size={18} className="text-warning" /> },
    { name: 'Work Orders', desc: 'Define milestone specifications, schedules, and agreed rates', icon: <FileSpreadsheet size={18} className="text-info" /> },
    { name: 'Joint Measurements', desc: 'Site engineers verify physical dimensions of completed tasks', icon: <Scale size={18} className="text-success" /> },
    { name: 'Approve & Bill', desc: 'Approve measurements to generate billing invoices automatically', icon: <Users size={18} className="text-purple" /> }
  ]

  const sampleBills = [
    { id: 'SUB-BILL-08', sub: 'Precision Masonry Ltd', work: 'Brickwork Block A', date: '2026-08-15', qty: '120 Cu.m', amt: '₹4,80,000', status: 'Submitted' },
    { id: 'SUB-BILL-09', sub: 'Star Electrics', work: 'Conduit laying Block B', date: '2026-08-18', qty: '450 m', amt: '₹1,35,000', status: 'Paid' }
  ]

  return (
    <section id="subcontractors" className="section-padding overflow-hidden">
      <div className="ambient-glow glow-purple" style={{ top: '20%', left: '5%' }} />

      <div className="container position-relative z-index-1">
        <div className="row align-items-start g-4">
          
          {/* Left Column: Badge -> Heading -> Description -> Billing Queue Table Module */}
          <div className="col-12 col-lg-7">
            <div className="erp-section-badge mb-3">
              <Users size={14} className="text-warning" />
              <span className="text-warning fw-bold small text-uppercase" style={{ letterSpacing: '0.05em' }}>Contractor Control</span>
            </div>

            <h2 className="display-5 fw-bold gradient-text mb-3" style={{ fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif" }}>
              Subcontractor & <span className="text-warning">Partner Lifecycle</span>
            </h2>

            <p className="lead fw-semibold text-slate-300 mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
              Control third-party works by linking work orders, verified site dimensions, and subsequent invoice payouts.
            </p>

            {/* Billing Queue Table Module */}
            <div className="glass-card p-3 p-md-4">
              <div className="d-flex flex-wrap align-items-center justify-content-between border-bottom border-secondary border-opacity-40 pb-3 mb-4 gap-2">
                <h5 className="fw-bold m-0 erp-ui-text text-white">Subcontractor Billing Queue</h5>
                <span className="small text-slate-400 erp-ui-text">Project: Infinity Heights</span>
              </div>

              {/* Local Table Overflow Container */}
              <div className="subcontractor-table-wrapper">
                <table className="custom-table" style={{ fontSize: '0.875rem' }}>
                  <thead>
                    <tr>
                      <th>Bill ID</th>
                      <th>Subcontractor</th>
                      <th>Work Description</th>
                      <th>Date</th>
                      <th className="text-end">Verified Qty</th>
                      <th className="text-end">Invoice Amt</th>
                      <th className="text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleBills.map((b, idx) => (
                      <tr key={idx}>
                        <td className="text-warning fw-bold">{b.id}</td>
                        <td className="text-white">{b.sub}</td>
                        <td className="text-slate-300">{b.work}</td>
                        <td className="text-slate-400">{b.date}</td>
                        <td className="text-end text-info">{b.qty}</td>
                        <td className="text-end text-success fw-semibold">{b.amt}</td>
                        <td className="text-center">
                          <span className={`badge-custom ${b.status === 'Paid' ? 'badge-completed' : 'badge-hold'}`}>
                            {b.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-3 bg-dark bg-opacity-60 border border-secondary border-opacity-40 rounded-3 erp-ui-text small">
                <div className="text-slate-400 mb-1">Audit Check:</div>
                <div className="text-white">Bills are generated directly from approved site measurement logs, matching initial rates. Over-billing is blocked by code limit guards.</div>
              </div>
            </div>
          </div>

          {/* Right Column: Responsive Subcontractor Image Container -> Steps Grid */}
          <div className="col-12 col-lg-5 pt-lg-4 pt-xl-5">
            {/* Responsive Subcontractor Image Container */}
            <div className="subcontractor-image-wrapper mb-4">
              <img 
                src={B3} 
                alt="Subcontractor & Partner Lifecycle" 
                className="subcontractor-image" 
              />
            </div>

            {/* Steps Grid */}
            <div className="row g-2 text-start erp-ui-text small">
              {steps.map((st, idx) => (
                <div key={idx} className="col-12">
                  <div className="p-3 bg-dark bg-opacity-60 rounded-3 border border-secondary border-opacity-40 d-flex align-items-start gap-3">
                    <div className="p-2 bg-black bg-opacity-60 rounded-2 border border-secondary border-opacity-40 mt-1 flex-shrink-0">
                      {st.icon}
                    </div>
                    <div>
                      <div className="text-white fw-bold">{st.name}</div>
                      <div className="text-slate-400 text-xs mt-1">{st.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
