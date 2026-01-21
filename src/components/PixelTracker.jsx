import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../lib/metaPixel'

/**
 * PixelTracker Component
 * Tracks Meta Pixel PageView events on every route change in SPA
 * Mount this component once at the root level (in App.jsx)
 */
function PixelTracker() {
  const location = useLocation()

  useEffect(() => {
    // Track PageView on route change
    // This fires after the initial PageView from index.html
    // and on every subsequent route change
    trackPageView()
  }, [location.pathname, location.search])

  // This component doesn't render anything
  return null
}

export default PixelTracker
