import { createFileRoute } from '@tanstack/react-router'
import React, { useEffect } from 'react'
import { Hero } from '../components/Hero'
import { Overview } from '../components/Overview'
import { Lifecycle } from '../components/Lifecycle'
import { Modules } from '../components/Modules'
import { ProblemSolutionSection } from '../components/ProblemSolutionSection'
import { ProjectManagement } from '../components/ProjectManagement'
import { BOQSection } from '../components/BOQSection'
import { ProcurementSection } from '../components/ProcurementSection'
import { InventorySection } from '../components/InventorySection'
import { SubcontractorSection } from '../components/SubcontractorSection'
import { FinanceSection } from '../components/FinanceSection'
import { WorkCenterSection } from '../components/WorkCenterSection'
import { RBACSection } from '../components/RBACSection'
import { WorkflowSection } from '../components/WorkflowSection'
import { ProductShowcase } from '../components/ProductShowcase'
import { FAQSection } from '../components/FAQSection'
import { ClientsSection } from '../components/ClientsSection'
import { TechnologyStack } from '../components/TechnologyStack'
import { Testimonials } from '../components/Testimonials'
import { FinalCTA } from '../components/FinalCTA'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'
import { TopNavigation } from '../components/TopNavigation'
import bgImage from '../assets/bgimage1.png'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  // Lightweight viewport animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div 
      className="erp-portfolio-page text-light position-relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      {/* Mobile-Only Fixed Viewport Background Layer */}
      <div 
        className="mobile-bg-fixed-layer d-md-none"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          height: '100dvh',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: '25% center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      {/* Glassmorphic Top Navigation Bar */}
      <TopNavigation />

      {/* Soft Hazy Background Layer */}
      <div className="glass-bg-overlay" />
      
      {/* Section 01 — Hero */}
      <div className="reveal">
        <Hero />
      </div>

      {/* Section 02 — Product Introduction */}
      <div className="reveal">
        <Overview />
      </div>

      {/* Enterprise Clients Section */}
      <div className="reveal">
        <ClientsSection />
      </div>

      {/* Section 03 — ERP Modules */}
      <div className="reveal">
        <Modules />
      </div>

      {/* Section — Problem & Solutions */}
      <div className="reveal">
        <ProblemSolutionSection />
      </div>

      {/* Section 04 — Product UI Showcase */}
      <div className="reveal">
        <ProductShowcase />
      </div>
      
      {/* Showcase Detail Panels */}
      <div className="reveal">
        <WorkCenterSection />
      </div>
      <div className="reveal">
        <ProjectManagement />
      </div>
      <div className="reveal">
        <BOQSection />
      </div>
      <div className="reveal">
        <ProcurementSection />
      </div>
      <div className="reveal">
        <InventorySection />
      </div>
      <div className="reveal">
        <SubcontractorSection />
      </div>
      <div className="reveal">
        <FinanceSection />
      </div>

      {/* Section 06 — Workflow / Business Flow */}
      <div className="reveal">
        <WorkflowSection />
      </div>
      <div className="reveal">
        <Lifecycle />
      </div>

      {/* Section 07 — Role-Based Experience */}
      <div className="reveal">
        <RBACSection />
      </div>

      {/* Section 08 — Technology Stack */}
      <div className="reveal">
        <TechnologyStack />
      </div>

      {/* Section 09 — Customer Testimonials */}
      <div className="reveal">
        <Testimonials />
      </div>

      {/* Section 10 — Final CTA */}
      <div className="reveal">
        <FinalCTA />
      </div>

      {/* FAQ Section */}
      <div className="reveal">
        <FAQSection />
      </div>

      {/* Section 10 — Contact & Enquiry */}
      <div className="reveal">
        <ContactSection />
      </div>

      <Footer />
    </div>
  )
}
