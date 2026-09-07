import React, { useState } from 'react'
import { Monitor, Laptop, RefreshCw, Sparkles, Layers } from 'lucide-react'
import B2 from '../assets/B2.png'

export function ProductShowcase() {
  const [activeCard, setActiveCard] = useState(0)

  const cards = [
    { title: 'Work Center', route: '/work-center', details: 'Aggregates attention alerts, stats, quick access links and active project selectors.' },
    { title: 'Project Management', route: '/projects', details: 'Displays client listings, budget baseline inputs, start/end schedules and status badges.' },
    { title: 'Bill of Quantities', route: '/boq', details: 'Defines project estimation line items, raw material units and base contract rates.' },
    { title: 'Material Requests', route: '/procurement/requests', details: 'Track site demands, draft requisitions, and multi-step approvals.' },
    { title: 'Purchase Orders', route: '/procurement/orders', details: 'Audit vendor selections, tax settings, order schedules, and net costs.' },
    { title: 'Material Receipts', route: '/procurement/receipts', details: 'Verify truck loads, log physical counts, and update warehouse stock counts.' },
    { title: 'Inventory Stock', route: '/inventory/stock', details: 'Monitors remaining warehouse margins, reorder thresholds, and active balances.' },
    { title: 'Site Consumption', route: '/inventory/consumption', details: 'Log raw materials utilized on site, mapping deviations against the BOQ.' },
    { title: 'Subcontractor Registry', route: '/subcontractors', details: 'Coordinates company contact details, scope tags, and registry status.' },
    { title: 'Work Orders', route: '/subcontractors/work-orders', description: 'Sets contractor rates, milestones and tasks.' },
    { title: 'Measurements log', route: '/subcontractors/measurements', details: 'Approves physically measured milestone volumes completed by contractors.' },
    { title: 'Cost Ledgers', route: '/finance/costs', details: 'Compares committed liabilities against actual cash spend.' }
  ]

  return (
    <section id="showcase" className="section-padding">
      <div className="ambient-glow glow-blue" style={{ top: '20%', left: '10%' }} />

      <div className="container position-relative z-index-1">
        <div className="text-center mb-5">
          <div className="erp-section-badge mb-3">
            <Sparkles size={14} className="text-warning" />
            <span className="text-warning fw-semibold small text-uppercase" style={{ letterSpacing: '0.05em' }}>Live Site Interface</span>
          </div>
          <h2 className="display-5 fw-bold mb-3 text-white" style={{ fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif" }}>
            <span className='gradient-text'>Real-Time Site & Enterprise ERP Dashboard</span>
          </h2>
          <p className="lead fw-semibold mx-auto max-w-3xl" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
            Experience real-time site monitoring and enterprise resource management in one synchronized operational dashboard.
          </p>
        </div>

        {/* Featured Live ERP Dashboard Banner (B2.png) */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-xl-11">
            <div className="banner-showcase-card p-3 p-md-4">
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3 px-2">
                <div className="d-flex align-items-center gap-2">
                  <span className="banner-badge-tag-blue">Live Field Operations</span>
                  <span className="text-slate-300 small erp-ui-text d-none d-md-inline">• Real-time Cost Variance & Progress Analytics</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-success bg-opacity-20 text-success border border-success border-opacity-30 rounded-pill px-3 py-1 small">
                    ● Connected to Live Database
                  </span>
                </div>
              </div>
              
              <div className="position-relative overflow-hidden rounded-4 border border-secondary border-opacity-40">
                <img 
                  src={B2} 
                  alt="Construction ERP Site Control Dashboard Overview" 
                  className="banner-showcase-img" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Overlapping Cards Layout */}
        <div className="row justify-content-center">
          <div className="col-12 col-xl-11">
            <div className="glass-card p-4">
              <div className="row g-4 align-items-center">
                
                {/* List of cards selector */}
                <div className="col-12 col-lg-5">
                  <div className="d-flex flex-column gap-2" style={{ maxHeight: '420px', overflowY: 'auto', paddingRight: '8px' }}>
                    {cards.map((card, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveCard(idx)}
                        className={`p-3 text-start rounded border transition-all ${
                          activeCard === idx 
                            ? 'bg-warning bg-opacity-10 border-warning text-white' 
                            : 'bg-dark bg-opacity-50 border-secondary text-slate-400 hover:text-white'
                        }`}
                        style={{ outline: 'none' }}
                      >
                        <div className="erp-ui-text fw-semibold small mb-1">{card.title}</div>
                        <div className="text-xs font-monospace text-slate-400">{card.route}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Card Display Preview */}
                <div className="col-12 col-lg-7">
                  <div className="browser-mockup">
                    {/* Browser Header */}
                    <div className="browser-header">
                      <div className="browser-dots">
                        <div className="browser-dot bg-danger" style={{ width: '8px', height: '8px' }}></div>
                        <div className="browser-dot bg-warning" style={{ width: '8px', height: '8px' }}></div>
                        <div className="browser-dot bg-success" style={{ width: '8px', height: '8px' }}></div>
                      </div>
                      <div className="browser-address">
                        localhost:3000{cards[activeCard].route}
                      </div>
                      <div style={{ width: '32px' }}></div>
                    </div>
                    {/* Browser Content */}
                    <div className="p-4" style={{ minHeight: '340px', background: '#090d16' }}>
                      <h4 className="fw-bold text-warning mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>{cards[activeCard].title}</h4>
                      <p className="text-slate-300 mb-4 leading-relaxed" style={{ fontSize: '0.9rem' }}>
                        {cards[activeCard].details || cards[activeCard].description}
                      </p>

                      <div className="p-3 bg-dark bg-opacity-50 border border-secondary rounded font-monospace small">
                        <div className="text-slate-400 mb-1" style={{ fontSize: '0.75rem' }}>React Route Path:</div>
                        <div className="text-white text-break" style={{ fontSize: '0.75rem' }}>
                          src/pages{cards[activeCard].route === '/work-center' ? '/WorkCenter.jsx' : 
                                   cards[activeCard].route === '/projects' ? '/Projects.jsx' : 
                                   cards[activeCard].route === '/boq' ? '/BOQList.jsx' : 
                                   cards[activeCard].route === '/procurement/requests' ? '/MaterialRequests.jsx' : 
                                   cards[activeCard].route === '/procurement/orders' ? '/PurchaseOrders.jsx' : 
                                   cards[activeCard].route === '/procurement/receipts' ? '/MaterialReceipts.jsx' : 
                                   cards[activeCard].route === '/inventory/stock' ? '/Stock.jsx' : 
                                   cards[activeCard].route === '/inventory/consumption' ? '/SiteConsumption.jsx' : 
                                   cards[activeCard].route === '/subcontractors' ? '/subcontractors/SubcontractorList.jsx' : 
                                   cards[activeCard].route === '/subcontractors/work-orders' ? '/subcontractors/SubcontractWorkOrders.jsx' : 
                                   cards[activeCard].route === '/subcontractors/measurements' ? '/subcontractors/MeasurementApproval.jsx' : '/Costs.jsx'}
                        </div>
                      </div>
                    </div>
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
