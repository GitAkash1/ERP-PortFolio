import React, { useState } from 'react'
import { FileBarChart2, Play, Table, Download, TrendingUp, ShieldCheck } from 'lucide-react'

export function ReportsSection() {
  const [selectedReport, setSelectedReport] = useState('boq')

  const boqReportData = [
    { item: 'OPC 53 Cement', planned: '12,500 Bags', consumed: '7,200 Bags', percent: '57.6%', variance: 'Normal' },
    { item: 'TMT Steel Fe 500D', planned: '85 MT', consumed: '45 MT', percent: '52.9%', variance: 'Normal' },
    { item: 'Coarse Aggregate', planned: '4,200 Cu.m', consumed: '2,900 Cu.m', percent: '69.0%', variance: 'Review Required' }
  ]

  const poReportData = [
    { poNum: 'PO-2026-027', vendor: 'UltraMax Concrete', date: '2026-08-12', value: '₹3,96,480', status: 'Approved' },
    { poNum: 'PO-2026-028', vendor: 'Apex Steel Industries', date: '2026-08-14', value: '₹27,90,000', status: 'Delivered' },
    { poNum: 'PO-2026-029', vendor: 'Rapid Aggregate Co', date: '2026-08-18', value: '₹5,40,000', status: 'Pending Approval' }
  ]

  const costReportData = [
    { type: 'Purchase Orders Raised', committed: '₹96,48,000', actual: '₹54,15,000', note: 'Liabilities pending physical receipt' },
    { type: 'Material Receipts (MRN)', committed: '--', actual: '₹48,20,000', note: 'Goods verified and logged in store' },
    { type: 'Subcontractor Billings', committed: '--', actual: '₹5,95,000', note: 'Joint measurement certificates approved' }
  ]

  return (
    <section id="reports" className="section-padding">
      <div className="ambient-glow glow-purple" style={{ bottom: '15%', right: '5%' }} />

      <div className="container position-relative z-index-1">
        <div className="row align-items-center mb-4">
          <div className="col-12 col-lg-6">
            <div className="erp-section-badge mb-3">
              <FileBarChart2 size={14} className="text-warning" />
              <span className="text-warning fw-bold small text-uppercase" style={{ letterSpacing: '0.05em' }}>Data Insights</span>
            </div>
            <h2 className="display-5 fw-bold mb-3 text-white" style={{ fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif" }}><span className="gradient-text">
              Executive Analytics & Operational Reports</span>
            </h2>
            <p className="lead fw-semibold">
              Generate detailed analysis matrices on demand. Filter reports by project codes to reconcile budgets, verify commitments, and audit vendor milestones.
            </p>
          </div>

          <div className="col-12 col-lg-6">
            <div className="glass-card p-4">
              <h6 className="fw-semibold mb-3 text-success erp-ui-text">Select Report Parameters</h6>
              <div className="row g-2">
                <div className="col-12 col-sm-6">
                  <label className="small text-slate-400 erp-ui-text mb-1">Select Project</label>
                  <select className="form-select bg-dark border-secondary text-white erp-ui-text" style={{ fontSize: '0.875rem' }} disabled>
                    <option>Infinity Heights Block A</option>
                  </select>
                </div>
                <div className="col-12 col-sm-6">
                  <label className="small text-slate-400 erp-ui-text mb-1">Select Report Type</label>
                  <select 
                    value={selectedReport} 
                    onChange={(e) => setSelectedReport(e.target.value)} 
                    className="form-select bg-dark border-secondary text-white erp-ui-text" 
                    style={{ fontSize: '0.875rem' }}
                  >
                    <option value="boq">BOQ Consumption Report</option>
                    <option value="po">Purchase Order Status</option>
                    <option value="cost">Project Cost Summary</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Report Display Container */}
        <div className="row justify-content-center">
          <div className="col-12 col-xl-11">
            <div className="glass-card p-4">
              <div className="d-flex flex-wrap align-items-center justify-content-between border-bottom border-secondary pb-3 mb-4 gap-2">
                <div className="d-flex align-items-center gap-2">
                  <Table size={16} className="text-success" />
                  <span className="fw-semibold erp-ui-text text-white text-uppercase" style={{ fontSize: '0.9rem' }}>
                    {selectedReport === 'boq' && 'BOQ Consumption Ledger'}
                    {selectedReport === 'po' && 'Purchase Order Audit Queue'}
                    {selectedReport === 'cost' && 'Reconciled Cost Breakdowns'}
                  </span>
                </div>
                <button className="glass-button py-1 px-3 small erp-ui-text"><Download size={12} /> Download Excel</button>
              </div>

              {selectedReport === 'boq' && (
                <div className="table-responsive">
                  <table className="custom-table" style={{ fontSize: '0.875rem' }}>
                    <thead>
                      <tr>
                        <th>Material Item</th>
                        <th className="text-end">BOQ Planned Quantity</th>
                        <th className="text-end">Actual Consumed Quantity</th>
                        <th className="text-end">Consumption %</th>
                        <th className="text-center">Variance Alert</th>
                      </tr>
                    </thead>
                    <tbody>
                      {boqReportData.map((row, idx) => (
                        <tr key={idx}>
                          <td className="text-white fw-bold">{row.item}</td>
                          <td className="text-end text-slate-300">{row.planned}</td>
                          <td className="text-end text-info">{row.consumed}</td>
                          <td className="text-end text-warning fw-semibold">{row.percent}</td>
                          <td className="text-center">
                            <span className={`badge-custom ${row.variance === 'Normal' ? 'badge-completed' : 'badge-hold'}`}>
                              {row.variance}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {selectedReport === 'po' && (
                <div className="table-responsive">
                  <table className="custom-table" style={{ fontSize: '0.875rem' }}>
                    <thead>
                      <tr>
                        <th>PO Number</th>
                        <th>Vendor Partner</th>
                        <th>Order Date</th>
                        <th className="text-end">Total PO Value</th>
                        <th className="text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {poReportData.map((row, idx) => (
                        <tr key={idx}>
                          <td className="text-warning fw-bold">{row.poNum}</td>
                          <td className="text-white">{row.vendor}</td>
                          <td className="text-slate-400">{row.date}</td>
                          <td className="text-end text-info fw-semibold">{row.value}</td>
                          <td className="text-center">
                            <span className={`badge-custom ${row.status === 'Approved' ? 'badge-active' : row.status === 'Delivered' ? 'badge-completed' : 'badge-hold'}`}>
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {selectedReport === 'cost' && (
                <div className="table-responsive">
                  <table className="custom-table" style={{ fontSize: '0.875rem' }}>
                    <thead>
                      <tr>
                        <th>Accounting Component</th>
                        <th className="text-end">Committed Values</th>
                        <th className="text-end">Actual Expenditures</th>
                        <th>Audit Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {costReportData.map((row, idx) => (
                        <tr key={idx}>
                          <td className="text-white fw-bold">{row.type}</td>
                          <td className="text-end text-warning">{row.committed}</td>
                          <td className="text-end text-success fw-semibold">{row.actual}</td>
                          <td className="text-slate-400 small">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
