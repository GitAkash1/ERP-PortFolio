import React from 'react'
import { ClipboardCheck, ArrowDownRight, Layers, FileText } from 'lucide-react'

export function BOQSection() {
  const sampleBOQItems = [
    { itemCode: 'BOQ-M-001', category: 'Cement', material: 'OPC 53 Grade Cement', plannedQty: '12,500', unit: 'Bags', rate: '₹420', total: '₹52,50,000' },
    { itemCode: 'BOQ-M-002', category: 'Steel Rebar', material: 'TMT Steel Fe 500D (12mm)', plannedQty: '85', unit: 'MT', rate: '₹62,000', total: '₹52,70,000' },
    { itemCode: 'BOQ-M-003', category: 'Aggregates', material: 'Coarse Aggregate 20mm', plannedQty: '4,200', unit: 'Cu.m', rate: '₹1,850', total: '₹77,70,000' },
    { itemCode: 'BOQ-M-004', category: 'Bricks', material: 'Fly Ash Clay Bricks', plannedQty: '1,50,000', unit: 'Nos', rate: '₹8', total: '₹12,000' }
  ]

  return (
    <section id="boq" className="section-padding">
      <div className="ambient-glow glow-purple" style={{ bottom: '-10%', right: '-10%' }} />

      <div className="container position-relative z-index-1">
        <div className="row align-items-center mb-5">
          <div className="col-12 col-lg-5">
            <div className="erp-section-badge mb-3">
              <ClipboardCheck size={14} className="text-warning" />
              <span className="text-warning fw-bold small text-uppercase" style={{ letterSpacing: '0.05em' }}>Estimation Matrix</span>
            </div>
            <h2 className="display-5 fw-bold mb-3"><span className="gradient-text">Bill of Quantities</span> (BOQ)</h2>
            <p className="lead fw-semibold">
              The baseline for all material requests and cost controls. Every quantity ordered by project managers must reconcile against the approved BOQ line items, blocking random or unbudgeted purchases.
            </p>

            {/* Relationship Chain */}
            <div className="glass-card p-3 mt-4 bg-dark">
              <h6 className="fw-bold mb-3 text-warning">BOQ Estimation Pipeline</h6>
              <div className="d-flex flex-column gap-2 small erp-ui-text">
                <div className="d-flex align-items-center justify-content-between p-2 rounded bg-black">
                  <span>1. Active Project</span>
                  <ArrowDownRight size={14} className="text-warning" />
                </div>
                <div className="d-flex align-items-center justify-content-between p-2 rounded bg-black">
                  <span>2. Core BOQ Document</span>
                  <ArrowDownRight size={14} className="text-warning" />
                </div>
                <div className="d-flex align-items-center justify-content-between p-2 rounded bg-black">
                  <span>3. Line Items (Material + Quantity + Unit)</span>
                  <ArrowDownRight size={14} className="text-warning" />
                </div>
                <div className="d-flex align-items-center justify-content-between p-2 rounded bg-black">
                  <span>4. Downstream Site Material Requests</span>
                  <span className="text-success small">Authorized Limit</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7 mt-4 mt-lg-0">
            {/* Product BOQ Detail Mockup */}
            <div className="glass-card p-4">
              <div className="d-flex align-items-center justify-content-between border-bottom border-secondary pb-3 mb-3">
                <div>
                  <h5 className="fw-bold m-0 erp-ui-text text-white">BOQ #BOQ-2026-INFIN</h5>
                  <span className="small text-slate-400">Linked Project: Infinity Heights Block A</span>
                </div>
                <div className="d-flex gap-2">
                  <button className="glass-button py-1 px-3 small erp-ui-text"><FileText size={12} /> Export PDF</button>
                </div>
              </div>

              {/* BOQ Summary Cards */}
              <div className="row g-3 mb-4">
                <div className="col-6">
                  <div className="p-3 bg-dark rounded border border-secondary">
                    <span className="small text-slate-400 erp-ui-text d-block mb-1">Total BOQ Items</span>
                    <span className="erp-ui-text fw-bold text-white fs-5">48 Categories</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 bg-dark rounded border border-secondary">
                    <span className="small text-slate-400 erp-ui-text d-block mb-1">Est. Material Value</span>
                    <span className="erp-ui-text fw-bold text-warning fs-5">₹3,42,12,000</span>
                  </div>
                </div>
              </div>

              {/* Items Table */}
              <div className="table-responsive">
                <table className="custom-table" style={{ fontSize: '0.875rem' }}>
                  <thead>
                    <tr>
                      <th>Line ID</th>
                      <th>Category</th>
                      <th>Material Details</th>
                      <th className="text-end">Planned Qty</th>
                      <th>Unit</th>
                      <th className="text-end">Est. Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleBOQItems.map((item, idx) => (
                      <tr key={idx}>
                        <td className="text-slate-400">{item.itemCode}</td>
                        <td className="text-info fw-semibold">{item.category}</td>
                        <td className="text-white">{item.material}</td>
                        <td className="text-end text-white">{item.plannedQty}</td>
                        <td className="text-slate-400">{item.unit}</td>
                        <td className="text-end text-warning">{item.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
