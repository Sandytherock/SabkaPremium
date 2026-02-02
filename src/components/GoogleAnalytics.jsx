import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Google Analytics 4 Component
const GoogleAnalytics = ({ measurementId = 'G-XXXXXXXXXX' }) => {
  const location = useLocation()

  useEffect(() => {
    // Load Google Analytics script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script1)

    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag = gtag
    
    gtag('js', new Date())
    gtag('config', measurementId, {
      page_path: location.pathname + location.search,
      send_page_view: true
    })

    return () => {
      // Cleanup
      const existingScript = document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${measurementId}"]`)
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [measurementId])

  // Track page views on route change
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', measurementId, {
        page_path: location.pathname + location.search,
      })
    }
  }, [location, measurementId])

  return null
}

// Export tracking functions for custom events
export const trackEvent = (eventName, eventParams = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
}

export const trackPageView = (pagePath) => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: pagePath
    })
  }
}

export const trackPurchase = (transactionId, value, items) => {
  if (window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: 'INR',
      items: items
    })
  }
}

export const trackAddToCart = (itemName, value) => {
  if (window.gtag) {
    window.gtag('event', 'add_to_cart', {
      currency: 'INR',
      value: value,
      items: [{
        item_name: itemName,
        price: value
      }]
    })
  }
}

export default GoogleAnalytics
