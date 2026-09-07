import React, { useState, useEffect } from 'react'
import { ShoppingCart, Send, FileCheck2, PackageCheck } from 'lucide-react'

const STEPS = ['request', 'order', 'receipt']

export function ProcurementSection() {
  const [activeStep, setActiveStep] = useState('request')
  const [isPaused, setIsPaused] = useState(false)

  // Auto-rotation timer: cycles steps every 3.5s unless hovered
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setActiveStep((prevStep) => {
        const currentIndex = STEPS.indexOf(prevStep)
        const nextIndex = (currentIndex + 1) % STEPS.length
        return STEPS[nextIndex]
      })
    }, 3500)

    return () => clearInterval(timer)
  }, [isPaused])

  const handleStepHover = (step) => {
    setActiveStep(step)
    setIsPaused(true)
  }

  const handleStepClick = (step) => {
    setActiveStep(step)
    setIsPaused(false)
  }

  return (
    <section id="procurement" className="procurement-section section-padding">
      <div className="ambient-glow glow-blue" style={{ top: '30%', left: '10%' }} />

      <div className="container position-relative z-index-1">
        <div className="text-center mb-5">
          <div className="erp-section-badge mb-3">
            <ShoppingCart size={14} className="text-warning" />
            <span className="text-warning fw-semibold small text-uppercase" style={{ letterSpacing: '0.05em' }}>Supply Chain Integration</span>
          </div>
          <h2 className="display-5 fw-bold mb-3"><span className="gradient-text">Procurement Pipeline</span></h2>
          <p className="lead fw-semibold mx-auto max-w-3xl">
            Streamline supply chains by connecting material requests from the field directly to purchase orders and goods received notes.
          </p>
        </div>

        {/* Step Tabs */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-10 col-lg-8">
            <div 
              className="row g-2"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="col-4">
                <button 
                  type="button"
                  onClick={() => handleStepClick('request')} 
                  onMouseEnter={() => handleStepHover('request')}
                  className={`erp-pipeline-step d-flex flex-column align-items-center gap-2 w-100 ${activeStep === 'request' ? 'active' : ''}`}
                >
                  <Send size={18} className="step-icon" />
                  <span className="small">1. Material Request</span>
                  {activeStep === 'request' && (
                    <div className="erp-pipeline-progress-bar">
                      <div key={`progress-request-${isPaused}`} className={`erp-pipeline-progress-fill ${isPaused ? 'paused' : ''}`} />
                    </div>
                  )}
                </button>
              </div>
              <div className="col-4">
                <button 
                  type="button"
                  onClick={() => handleStepClick('order')} 
                  onMouseEnter={() => handleStepHover('order')}
                  className={`erp-pipeline-step d-flex flex-column align-items-center gap-2 w-100 ${activeStep === 'order' ? 'active' : ''}`}
                >
                  <FileCheck2 size={18} className="step-icon" />
                  <span className="small">2. Purchase Order</span>
                  {activeStep === 'order' && (
                    <div className="erp-pipeline-progress-bar">
                      <div key={`progress-order-${isPaused}`} className={`erp-pipeline-progress-fill ${isPaused ? 'paused' : ''}`} />
                    </div>
                  )}
                </button>
              </div>
              <div className="col-4">
                <button 
                  type="button"
                  onClick={() => handleStepClick('receipt')} 
                  onMouseEnter={() => handleStepHover('receipt')}
                  className={`erp-pipeline-step d-flex flex-column align-items-center gap-2 w-100 ${activeStep === 'receipt' ? 'active' : ''}`}
                >
                  <PackageCheck size={18} className="step-icon" />
                  <span className="small">3. Material Receipt</span>
                  {activeStep === 'receipt' && (
                    <div className="erp-pipeline-progress-bar">
                      <div key={`progress-receipt-${isPaused}`} className={`erp-pipeline-progress-fill ${isPaused ? 'paused' : ''}`} />
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Display Panels */}
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="glass-card p-4 erp-pipeline-display-card">
              <div key={activeStep} className="erp-pipeline-panel-fade">
                {activeStep === 'request' && (
                  <div>
                    <div className="d-flex align-items-center justify-content-between border-bottom border-secondary pb-3 mb-4">
                      <h5 className="fw-bold m-0 erp-ui-text text-white">Material Request: MR-2026-042</h5>
                      <span className="badge-custom badge-hold">Pending Approval</span>
                    </div>
                    <div className="row g-3 small erp-ui-text">
                      <div className="col-12 col-md-6">
                        <div className="p-3 bg-dark rounded border border-secondary">
                          <div className="text-slate-400 mb-1">Project</div>
                          <div className="text-white fw-bold">PRJ-2026-001 (Infinity Heights Block A)</div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="p-3 bg-dark rounded border border-secondary">
                          <div className="text-slate-400 mb-1">BOQ Reference Link</div>
                          <div className="text-white fw-bold">BOQ-M-001 (Cement OPC 53)</div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="p-3 bg-dark rounded border border-secondary">
                          <div className="text-slate-400 mb-1">Requested Qty</div>
                          <div className="text-warning fw-bold">800 Bags</div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="p-3 bg-dark rounded border border-secondary">
                          <div className="text-slate-400 mb-1">Unit</div>
                          <div className="text-white">Bags</div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="p-3 bg-dark rounded border border-secondary">
                          <div className="text-slate-400 mb-1">Remarks / Justification</div>
                          <div className="text-white">Required for third-floor slab concreting schedule.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 'order' && (
                  <div>
                    <div className="d-flex align-items-center justify-content-between border-bottom border-secondary pb-3 mb-4">
                      <h5 className="fw-bold m-0 erp-ui-text text-white">Purchase Order: PO-2026-027</h5>
                      <span className="badge-custom badge-active">Issued / Sent</span>
                    </div>
                    <div className="row g-3 small erp-ui-text">
                      <div className="col-12 col-md-4">
                        <div className="p-3 bg-dark rounded border border-secondary">
                          <div className="text-slate-400 mb-1">Vendor Details</div>
                          <div className="text-white fw-bold">UltraMax Concrete Supplies</div>
                          <div className="text-slate-400 small">Mob: +91 98765 43210</div>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="p-3 bg-dark rounded border border-secondary">
                          <div className="text-slate-400 mb-1">Dates</div>
                          <div>Order Date: <span className="text-white">2026-08-12</span></div>
                          <div>Exp Delivery: <span className="text-warning">2026-08-25</span></div>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="p-3 bg-dark rounded border border-secondary">
                          <div className="text-slate-400 mb-1">Taxation Rules</div>
                          <div className="text-white">GST @18% Included</div>
                          <div className="text-slate-400">Freight Paid by Vendor</div>
                        </div>
                      </div>
                    </div>

                    <h6 className="fw-semibold mt-4 mb-3 erp-ui-text text-warning">PO Line Items</h6>
                    <div className="table-responsive">
                      <table className="custom-table" style={{ fontSize: '0.875rem' }}>
                        <thead>
                          <tr>
                            <th>Material</th>
                            <th className="text-end">PO Qty</th>
                            <th>Unit</th>
                            <th className="text-end">Unit Price</th>
                            <th className="text-end">Tax Value</th>
                            <th className="text-end">Net Payable</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-white">OPC 53 Grade Cement</td>
                            <td className="text-end text-white">800</td>
                            <td>Bags</td>
                            <td className="text-end text-warning">₹420.00</td>
                            <td className="text-end text-danger">₹60,480.00</td>
                            <td className="text-end text-info">₹3,96,480.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeStep === 'receipt' && (
                  <div>
                    <div className="d-flex align-items-center justify-content-between border-bottom border-secondary pb-3 mb-4">
                      <h5 className="fw-bold m-0 erp-ui-text text-white">Material Receipt Note: MRN-2026-015</h5>
                      <span className="badge-custom badge-completed">Fully Logged</span>
                    </div>
                    <div className="row g-3 small erp-ui-text">
                      <div className="col-12 col-md-6">
                        <div className="p-3 bg-dark rounded border border-secondary">
                          <div className="text-slate-400 mb-1">PO Link Reference</div>
                          <div className="text-white fw-bold">PO-2026-027 (UltraMax Concrete Supplies)</div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="p-3 bg-dark rounded border border-secondary">
                          <div className="text-slate-400 mb-1">Goods Receipt Status</div>
                          <div className="text-success fw-bold">800 Bags Received / 0 Bags Rejected</div>
                          <div className="text-slate-400 small">Automatic inventory stock count updated +1</div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="p-3 bg-dark rounded border border-secondary">
                          <div className="text-slate-400 mb-2">Gate Inspection Remarks</div>
                          <div className="text-white">Physical bag count verification completed by Store Manager. Bag batch verified for moisture damages. Stacked in Yard A.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
