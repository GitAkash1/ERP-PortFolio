import React from 'react'
import { ShieldCheck } from 'lucide-react'

export function RBACSection() {
  return (
    <section id="rbac" className="section-padding">
      <div className="ambient-glow glow-blue" style={{ bottom: '-10%', left: '10%' }} />

      <div className="container position-relative z-index-1">
        <div className="text-center">
          <div className="erp-section-badge mb-3">
            <ShieldCheck size={14} className="text-warning" />
            <span className="text-warning fw-semibold small text-uppercase" style={{ letterSpacing: '0.05em' }}>Role Based Access Control</span>
          </div>
          <h2 className="display-5 fw-bold mb-4 text-white" style={{ fontFamily: "'Plus Jakarta Sans', 'Outfit', sans-serif" }}>
            Granular <span className="text-warning">RBAC Security</span>
          </h2>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-9">
              <p className="lead fw-semibold  mx-auto" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                ConstructionERP provides granular Role-Based Access Control (RBAC) to ensure every team member gets only the permissions required for their responsibilities. Administrators can control access at both module and action levels, including view, create, edit, approve, and manage operations. This protects sensitive business workflows while maintaining secure, scalable access across projects, teams, and operational modules.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


