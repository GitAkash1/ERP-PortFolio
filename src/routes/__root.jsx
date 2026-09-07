import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import React from 'react'
import appCss from '../styles.css?url'
import faviconImage from '../assets/image.png'

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
