import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
  const location = useLocation()
  
  const breadcrumbNameMap = {
    '/': 'Home',
    '/order': 'Order',
    '/reviews': 'Customer Reviews'
  }

  const pathnames = location.pathname.split('/').filter((x) => x)

  const breadcrumbStyle = {
    padding: '15px 0',
    background: '#f9fafb',
    borderBottom: '1px solid #e5e7eb'
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.875rem'
  }

  const linkStyle = {
    color: '#6366f1',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }

  const currentStyle = {
    color: '#6b7280',
    fontWeight: '500'
  }

  const separatorStyle = {
    color: '#9ca3af'
  }

  // Don't show breadcrumbs on homepage
  if (location.pathname === '/') {
    return null
  }

  return (
    <nav style={breadcrumbStyle} aria-label="Breadcrumb">
      <div style={containerStyle}>
        <Link to="/" style={linkStyle}>
          🏠 Home
        </Link>
        
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1
          const to = `/${pathnames.slice(0, index + 1).join('/')}`
          const breadcrumbName = breadcrumbNameMap[to] || value

          return last ? (
            <React.Fragment key={to}>
              <span style={separatorStyle}>/</span>
              <span style={currentStyle}>{breadcrumbName}</span>
            </React.Fragment>
          ) : (
            <React.Fragment key={to}>
              <span style={separatorStyle}>/</span>
              <Link to={to} style={linkStyle}>
                {breadcrumbName}
              </Link>
            </React.Fragment>
          )
        })}
      </div>
      
      {/* Structured Data for Breadcrumbs */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://sabkapremium.com/'
            },
            ...pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join('/')}`
              const breadcrumbName = breadcrumbNameMap[to] || value
              return {
                '@type': 'ListItem',
                position: index + 2,
                name: breadcrumbName,
                item: `https://sabkapremium.com${to}`
              }
            })
          ]
        })}
      </script>
    </nav>
  )
}

export default Breadcrumbs
