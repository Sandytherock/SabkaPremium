import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SEO = ({ 
  title = 'SabkaPremium – AI & OTT at Student-Friendly Prices',
  description = 'Get ChatGPT Plus, Claude Max, Netflix 4K, Canva Pro, YouTube Premium & 20+ AI tools at lowest prices in India. Instant delivery, replacement guarantee, trusted by 5000+ users.',
  keywords = 'ChatGPT Plus cheap, Netflix 4K India, Canva Pro discount, AI tools India, Claude Max, Gemini Ultra, YouTube Premium, Spotify Premium, Adobe Creative Cloud, cheap premium accounts, student discounts India',
  image = '/assets/logo.png',
  type = 'website',
  author = 'SabkaPremium',
  robots = 'index, follow'
}) => {
  const location = useLocation()
  const currentUrl = `https://sabkapremium.com${location.pathname}`

  useEffect(() => {
    // Update document title
    document.title = title

    // Update or create meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: author },
      { name: 'robots', content: robots },
      
      // Open Graph / Facebook
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: currentUrl },
      { property: 'og:image', content: `https://sabkapremium.com${image}` },
      { property: 'og:site_name', content: 'SabkaPremium' },
      { property: 'og:locale', content: 'en_IN' },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `https://sabkapremium.com${image}` },
      
      // Additional SEO
      { name: 'theme-color', content: '#6366f1' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      
      // Geo targeting
      { name: 'geo.region', content: 'IN' },
      { name: 'geo.placename', content: 'India' },
      
      // Language
      { httpEquiv: 'content-language', content: 'en-IN' }
    ]

    metaTags.forEach(({ name, property, httpEquiv, content }) => {
      let meta = null
      
      if (name) {
        meta = document.querySelector(`meta[name="${name}"]`)
        if (!meta) {
          meta = document.createElement('meta')
          meta.setAttribute('name', name)
          document.head.appendChild(meta)
        }
      } else if (property) {
        meta = document.querySelector(`meta[property="${property}"]`)
        if (!meta) {
          meta = document.createElement('meta')
          meta.setAttribute('property', property)
          document.head.appendChild(meta)
        }
      } else if (httpEquiv) {
        meta = document.querySelector(`meta[http-equiv="${httpEquiv}"]`)
        if (!meta) {
          meta = document.createElement('meta')
          meta.setAttribute('http-equiv', httpEquiv)
          document.head.appendChild(meta)
        }
      }
      
      if (meta && content) {
        meta.setAttribute('content', content)
      }
    })

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', currentUrl)

    // Add JSON-LD structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'SabkaPremium',
      url: 'https://sabkapremium.com',
      description: description,
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://sabkapremium.com/?s={search_term_string}',
        'query-input': 'required name=search_term_string'
      },
      publisher: {
        '@type': 'Organization',
        name: 'SabkaPremium',
        logo: {
          '@type': 'ImageObject',
          url: 'https://sabkapremium.com/assets/logo.png'
        }
      }
    }

    let script = document.querySelector('script[type="application/ld+json"]')
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(structuredData)

  }, [title, description, keywords, currentUrl, image, type, author, robots])

  return null
}

export default SEO
