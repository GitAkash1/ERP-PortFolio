import React from 'react'
import { Archive, Plus, Info } from 'lucide-react'

export function InventorySection() {
  const stockSummary = [
    { code: 'MAT-CEM-001', name: 'OPC 53 Grade Cement', planned: '12,500', received: '8,400', consumed: '7,200', available: '1,200', unit: 'Bags' },
    { code: 'MAT-STE-002', name: 'TMT Steel Fe 500D (12mm)', planned: '85', received: '60', consumed: '45', available: '15', unit: 'MT' },
    { code: 'MAT-AGG-003', name: 'Coarse Aggregate 20mm', planned: '4,200', received: '3,100', consumed: '2,900', available: '200', unit: 'Cu.m' }
  ]

  return (
    <section id="inventory" className="section-padding">
      <div className="ambient-glow glow-orange" style={{ bottom: '10%', right: '10%' }} />

      <div className="container position-relative z-index-1">
        <div className="row align-items-center mb-5">
          <div className="col-12 col-lg-6">
            <div className="erp-section-badge mb-3">
              <Archive size={14} className="text-warning" />
              <span className="text-warning fw-bold small text-uppercase" style={{ letterSpacing: '0.05em' }}>Inventory Systems</span>
            </div>
            <h2 className="display-5 fw-bold gradient-text mb-3">Stock & Site Consumption</h2>
            <p className="lead fw-semibold mx-auto max-w-3xl">
              Track the flow of materials in real-time. Record daily site consumption to monitor construction waste and variance patterns directly against the initial BOQ parameters.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <div className="glass-card p-4">
              <h6 className="fw-bold mb-3 text-success font-monospace">Material Lifecycle Stages</h6>
              <div className="row g-2 text-start font-monospace small">
                {[
                  'BOQ Plan Baseline',
                  'Approved requests',
                  'Purchase Orders',
                  'Physical receipts',
                  'Project Warehouse Stock',
                  'Daily Site Consumption',
                  'Consumed Quantities',
                  'Remaining balances'
                ].map((stage, idx) => (
                  <div key={idx} className="col-12 col-sm-6">
                    <div className="p-2 bg-dark rounded border border-secondary d-flex align-items-center gap-2">
                      <span className="text-success fw-bold">✓</span>
                      <span className="text-slate-300">{stage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stock table */}
        <div className="row">
          <div className="col-12">
            <div className="glass-card p-4">
              <div className="d-flex align-items-center justify-content-between border-bottom border-secondary pb-3 mb-4">
                <h5 className="fw-bold m-0 font-monospace text-white">Project-Level Stock Balances</h5>
                <span className="small text-slate-400">Project: Infinity Heights Block A</span>
              </div>

              <div className="table-responsive">
                <table className="custom-table font-monospace" style={{ fontSize: '0.85rem' }}>
                  <thead>
                    <tr>
                      <th>Material Code</th>
                      <th>Material Name</th>
                      <th className="text-end">BOQ Planned</th>
                      <th className="text-end">Receipts</th>
                      <th className="text-end">Site Consumed</th>
                      <th className="text-end">Current Stock</th>
                      <th>Unit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stockSummary.map((stk, idx) => (
                      <tr key={idx}>
                        <td className="text-slate-400">{stk.code}</td>
                        <td className="text-white fw-bold">{stk.name}</td>
                        <td className="text-end text-slate-300">{stk.planned}</td>
                        <td className="text-end text-info">{stk.received}</td>
                        <td className="text-end text-danger">{stk.consumed}</td>
                        <td className="text-end text-success fw-bold">{stk.available}</td>
                        <td className="text-slate-400">{stk.unit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Warning Alert */}
              <div className="mt-4 p-3 bg-dark border border-warning rounded d-flex align-items-start gap-3">
                <div className="text-warning mt-1">
                  <Info size={16} />
                </div>
                <div>
                  <div className="small text-warning fw-bold font-monospace">Variance Alarm Mode Active</div>
                  <p className="text-slate-400 small m-0">
                    If site-level consumption exceeds BOQ planned quantity guidelines, the system logs a high-priority variance alert and restricts subsequent material requests until reviewed by the Project Manager.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
