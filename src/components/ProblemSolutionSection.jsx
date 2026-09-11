import React from 'react'
import { CircleX, CircleCheck, ArrowRight } from 'lucide-react'

export function ProblemSolutionSection() {
  const problems = [
    {
      id: 'p-01',
      number: '01',
      title: 'Scattered Project Information',
      description:
        'Project details, BOQ, milestones and progress information can become difficult to manage when they are maintained across disconnected systems.',
    },
    {
      id: 'p-02',
      number: '02',
      title: 'Manual Material Tracking',
      description:
        'Tracking requested, approved, received, issued and consumed materials manually can lead to visibility gaps and avoidable errors.',
    },
    {
      id: 'p-03',
      number: '03',
      title: 'Disconnected Procurement',
      description:
        'Material requests, purchase orders and receipts can become difficult to follow when procurement activities are not connected.',
    },
    {
      id: 'p-04',
      number: '04',
      title: 'Limited Stock Visibility',
      description:
        'Teams may struggle to understand project-wise material availability, usage and remaining stock without centralized inventory tracking.',
    },
    {
      id: 'p-05',
      number: '05',
      title: 'Complex Site & Contractor Management',
      description:
        'Managing site consumption, work orders and contractor activities across projects can become difficult without structured workflows.',
    },
    {
      id: 'p-06',
      number: '06',
      title: 'Limited Project Cost Visibility',
      description:
        'Project teams need better visibility into operational and project-related costs to support informed decisions.',
    },
  ]

  const solutions = [
    {
      id: 's-01',
      number: '01',
      title: 'Centralized Project Management',
      description:
        'Manage project information, milestones, BOQ and engineering progress through a structured project workflow.',
      badge: 'Centralized',
    },
    {
      id: 's-02',
      number: '02',
      title: 'Connected Material Management',
      description:
        'Connect material requests, approvals, stock and site consumption within a unified material workflow.',
      badge: 'Connected',
    },
    {
      id: 's-03',
      number: '03',
      title: 'Integrated Procurement Workflow',
      description:
        'Connect material requests with purchase orders and material receipts for better procurement tracking.',
      badge: 'Workflow-driven',
    },
    {
      id: 's-04',
      number: '04',
      title: 'Project-wise Stock Visibility',
      description:
        'Track available, issued, consumed and remaining material quantities with centralized inventory workflows.',
      badge: 'Project-wise',
    },
    {
      id: 's-05',
      number: '05',
      title: 'Structured Site & Contractor Operations',
      description:
        'Manage site consumption, work orders and contractor-related activities through organized operational workflows.',
      badge: 'Role-based',
    },
    {
      id: 's-06',
      number: '06',
      title: 'Project Cost Management',
      description:
        'Bring project-related costing information into a structured workflow for better financial visibility.',
      badge: 'Unified',
    },
  ]

  return (
    <section id="problem-solutions" className="section-padding problem-solutions-section position-relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="ambient-glow glow-blue problem-solutions-glow-left" />
      <div className="ambient-glow glow-green problem-solutions-glow-right" />

      <div className="container position-relative z-index-1">
        {/* Section Header */}
        <div className="text-center mb-5 pb-lg-2">
          <div className="problem-solution-pill-badge mb-3">
            <span className="problem-solution-pill-text">PROBLEM</span>
            <ArrowRight size={13} className="problem-solution-pill-arrow" />
            <span className="problem-solution-pill-text">SOLUTION</span>
          </div>

          <h2 className="display-5 fw-bold mb-3 text-white problem-solution-heading">
            Built to Solve the <span className="gradient-text">Challenges</span> Behind{' '}
            <span className="gradient-text">Construction Operations</span>
          </h2>

          <p className="lead fw-semibold mx-auto max-w-3xl text-slate-300 problem-solution-lead">
            ConstructionERP brings projects, materials, procurement, site operations, contractors and costs
            together into one connected workflow — helping construction teams manage operations with greater
            clarity and control.
          </p>
        </div>

        {/* 2-Column Comparison Layout (Bootstrap: col-12 col-lg-6) */}
        <div className="row g-4 problem-solutions-grid">
          {/* Left Column: Problems */}
          <div className="col-12 col-lg-6">
            <div className="problem-solution-panel problem-panel h-100">
              {/* Column Header */}
              <div className="problem-solution-col-header pb-3 mb-2 d-flex align-items-center gap-3">
                <div className="problem-solution-col-icon-circle problem-icon-glow">
                  <CircleX size={20} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="h4 fw-bold text-white mb-0 problem-solution-col-title">
                    Problems Holding Construction Teams Back
                  </h3>
                </div>
              </div>

              {/* Problem Items List */}
              <div className="problem-solution-list">
                {problems.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`problem-solution-item problem-item ${
                      idx !== problems.length - 1 ? 'problem-solution-item-divider' : ''
                    }`}
                  >
                    <div className="d-flex align-items-start gap-3">
                      <div className="problem-solution-item-icon problem-icon-circle flex-shrink-0 mt-1">
                        <CircleX size={17} strokeWidth={2} />
                      </div>
                      <div className="flex-grow-1 min-w-0">
                        <div className="d-flex align-items-center justify-content-between mb-1">
                          <h4 className="problem-solution-item-title mb-0 text-white">
                            {item.title}
                          </h4>
                          <span className="problem-solution-item-num font-monospace small">
                            {item.number}
                          </span>
                        </div>
                        <p className="problem-solution-item-desc mb-0 text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Solutions */}
          <div className="col-12 col-lg-6">
            <div className="problem-solution-panel solution-panel h-100">
              {/* Column Header */}
              <div className="problem-solution-col-header pb-3 mb-2 d-flex align-items-center gap-3">
                <div className="problem-solution-col-icon-circle solution-icon-glow">
                  <CircleCheck size={20} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="h4 fw-bold text-white mb-0 problem-solution-col-title">
                    How ConstructionERP Solves Them
                  </h3>
                </div>
              </div>

              {/* Solution Items List */}
              <div className="problem-solution-list">
                {solutions.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`problem-solution-item solution-item ${
                      idx !== solutions.length - 1 ? 'problem-solution-item-divider' : ''
                    }`}
                  >
                    <div className="d-flex align-items-start gap-3">
                      <div className="problem-solution-item-icon solution-icon-circle flex-shrink-0 mt-1">
                        <CircleCheck size={17} strokeWidth={2} />
                      </div>
                      <div className="flex-grow-1 min-w-0">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-1">
                          <h4 className="problem-solution-item-title mb-0 text-white">
                            {item.title}
                          </h4>
                          <span className="problem-solution-capability-badge">
                            {item.badge}
                          </span>
                        </div>
                        <p className="problem-solution-item-desc mb-0 text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
