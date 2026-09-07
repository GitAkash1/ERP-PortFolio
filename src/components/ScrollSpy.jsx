import React, { useEffect, useState } from 'react'

export function ScrollSpy() {
  const sections = [
    { id: 'hero', name: 'Hero' },
    { id: 'overview', name: 'Overview' },
    { id: 'why', name: 'Why Us' },
    { id: 'modules', name: 'Modules' },
    { id: 'showcase', name: 'Showcase' },
    { id: 'workcenter', name: 'Work Center' },
    { id: 'projects', name: 'Projects' },
    { id: 'boq', name: 'BOQ' },
    { id: 'procurement', name: 'Procurement' },
    { id: 'inventory', name: 'Inventory' },
    { id: 'subcontractors', name: 'Subcontractors' },
    { id: 'finance', name: 'Finance' },
    { id: 'workflow', name: 'Workflow' },
    { id: 'lifecycle', name: 'Lifecycle' },
    { id: 'rbac', name: 'RBAC' },
    { id: 'tech-stack', name: 'Technology' },
    { id: 'testimonials', name: 'Testimonials' },
    { id: 'final-cta', name: 'Get Started' }
  ]

  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Run once initially
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="scrollspy-dots d-none d-lg-flex">
      {sections.map((sec) => (
        <button
          key={sec.id}
          className={`scrollspy-dot ${activeSection === sec.id ? 'active' : ''}`}
          onClick={() => scrollToSection(sec.id)}
          title={sec.name}
          aria-label={`Scroll to ${sec.name}`}
        />
      ))}
    </div>
  )
}
