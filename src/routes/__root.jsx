import { HeadContent, Scripts, createRootRoute, Link } from '@tanstack/react-router'
import React from 'react'
import appCss from '../styles.css?url'
import faviconImage from '../assets/image.png'
import { Server, ArrowLeft } from 'lucide-react'

function NotFound() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center text-center p-4 position-relative overflow-hidden" style={{ background: '#030712', color: '#f8fafc' }}>
      <div className="ambient-glow glow-orange" style={{ top: '20%', left: '20%' }} />
      <div className="ambient-glow glow-blue" style={{ bottom: '20%', right: '20%' }} />
      
      <div className="glass-card p-5 mx-auto position-relative z-index-1" style={{ maxWidth: '540px', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="erp-section-badge mb-4 mx-auto d-inline-flex align-items-center gap-2">
          <Server size={16} className="text-warning" />
          <span className="text-warning fw-bold small text-uppercase" style={{ letterSpacing: '0.08em' }}>ConstructionERP 404</span>
        </div>
        <h1 className="display-4 fw-bold mb-3">
          <span className="gradient-text">Page Not Found</span>
        </h1>
        <p className="text-slate-300 mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
          The module or resource you requested could not be located on the ERP platform.
        </p>
        <Link to="/" className="erp-cta-primary text-decoration-none d-inline-flex align-items-center gap-2">
          <ArrowLeft size={18} />
          <span>Return to ERP Home</span>
        </Link>
      </div>
    </div>
  )
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'ConstructionERP — Construction Management ERP Platform',
      },
      {
        name: 'description',
        content: 'ConstructionERP is a B2B platform connecting project management, BOQ estimation, procurement, inventory, subcontractor lifecycle, finance and cost reports into one connected platform.',
      },
      {
        name: 'keywords',
        content: 'construction erp, project management, bill of quantities, procurement, material requests, purchase orders, subcontractor bills, construction finance, construction reports',
      }
    ],
    links: [
      {
        rel: 'icon',
        type: 'image/png',
        href: faviconImage,
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap',
      }
    ],
  }),
  notFoundComponent: NotFound,
  shellComponent: RootDocument,
})

function RootDocument({ children }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
