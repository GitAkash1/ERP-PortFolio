import React from 'react'
import { FolderKanban, Search, Plus, SlidersHorizontal } from 'lucide-react'

export function ProjectManagement() {
  const sampleProjects = [
    { code: 'PRJ-2026-001', name: 'Infinity Heights Block A', client: 'Apex InfraCorp', location: 'Sector 62, Noida', start: '2026-01-10', end: '2027-08-30', budget: '₹14,50,00,000', status: 'Active' },
    { code: 'PRJ-2026-002', name: 'Metro Flyover Segment C', client: 'Urban Transit Authority', location: 'Pune Bypass', start: '2026-03-01', end: '2028-12-15', budget: '₹48,20,00,000', status: 'Active' },
    { code: 'PRJ-2026-003', name: 'Eco-Park Sewerage Line', client: 'Municipal Corporation', location: 'Kolkata East', start: '2026-05-15', end: '2027-01-20', budget: '₹2,35,00,000', status: 'Planned' },
    { code: 'PRJ-2026-004', name: 'Sunrise Corporate Towers', client: 'Sunrise Developers', location: 'Gachibowli, Hyderabad', start: '2025-08-01', end: '2027-04-10', budget: '₹22,80,00,000', status: 'On Hold' }
  ]

  const getStatusClass = (status) => {
    switch (status) {
      case 'Planned': return 'badge-planned'
      case 'Active': return 'badge-active'
      case 'On Hold': return 'badge-hold'
      case 'Completed': return 'badge-completed'
      default: return 'badge-cancelled'
    }
  }

  return (
    <section id="projects" className="section-padding">
      <div className="ambient-glow glow-blue" style={{ top: '10%', left: '-10%' }} />

      <div className="container position-relative z-index-1">
        <div className="row align-items-center mb-5">
          <div className="col-12 col-lg-6">
            <div className="erp-section-badge mb-3">
              <FolderKanban size={14} className="text-warning" />
              <span className="text-warning fw-bold small text-uppercase" style={{ letterSpacing: '0.05em' }}>Project Management</span>
            </div>
            <h2 className="display-5 fw-bold gradient-text mb-3">Organize and Audit Sites Efficiently</h2>
            <p className="lead fw-semibold">
              Manage complete site information, budget allocations, schedules, and active statuses. Filter and search across projects with full CRUD capabilities.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <div className="glass-card p-4">
              <h5 className="fw-bold mb-3 text-white">Supported Project Fields</h5>
              <div className="row g-2">
                {['Project Code', 'Project Name', 'Client Name', 'Site Location', 'Start/End Dates', 'Estimated Budget', 'Workflow Status'].map((field, idx) => (
                  <div key={idx} className="col-6 col-sm-4 col-md-3 col-lg-4">
                    <div className="p-2 bg-dark rounded border border-secondary text-center small text-slate-300 erp-ui-text">
                      {field}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product UI Mockup */}
        <div className="row">
          <div className="col-12">
            <div className="glass-card p-4">
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
                <h5 className="fw-bold m-0 text-gradient-orange-blue erp-ui-text">Projects Directory</h5>
                
                {/* Simulated Filters */}
                <div className="d-flex flex-wrap gap-2">
                  <div className="position-relative">
                    <Search className="position-absolute text-slate-400" size={16} style={{ left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input 
                      type="text" 
                      placeholder="Search code, name..." 
                      className="form-control bg-dark border-secondary text-white erp-ui-text" 
                      style={{ paddingLeft: '36px', fontSize: '0.85rem', width: '220px', minHeight: '38px' }} 
                      readOnly 
                    />
                  </div>
                  <button className="glass-button py-2 px-3 small d-flex align-items-center gap-2">
                    <SlidersHorizontal size={14} />
                    <span className="small">Filter</span>
                  </button>
                  <button className="glass-button glass-button-primary py-2 px-3 small d-flex align-items-center gap-2">
                    <Plus size={14} />
                    <span className="small">New Project</span>
                  </button>
                </div>
              </div>

              {/* Table Mockup */}
              <div className="table-responsive">
                <table className="custom-table" style={{ fontSize: '0.875rem' }}>
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Project Name</th>
                      <th>Client</th>
                      <th>Location</th>
                      <th className="text-end">Budget</th>
                      <th className="text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleProjects.map((p, idx) => (
                      <tr key={idx}>
                        <td className="text-warning fw-bold">{p.code}</td>
                        <td className="text-white fw-semibold">{p.name}</td>
                        <td className="text-slate-300">{p.client}</td>
                        <td className="text-slate-400">{p.location}</td>
                        <td className="text-end text-info fw-semibold">{p.budget}</td>
                        <td className="text-center">
                          <span className={`badge-custom ${getStatusClass(p.status)}`}>{p.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="d-flex align-items-center justify-content-between border-top border-secondary pt-3 mt-3">
                <span className="small text-slate-400">Showing 1 to 4 of 24 projects</span>
                <div className="d-flex gap-1">
                  <button className="glass-button py-1 px-3 small" disabled>Prev</button>
                  <button className="glass-button py-1 px-3 small active" style={{ borderColor: 'var(--accent-orange)' }}>1</button>
                  <button className="glass-button py-1 px-3 small">2</button>
                  <button className="glass-button py-1 px-3 small">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
