/**
 * Meta Pixel Utility Functions
 * Safe wrapper for Facebook Pixel tracking
 * Handles SSR compatibility and ensures fbq exists before calling
 */

/**
 * Check if Meta Pixel is available
 * @returns {boolean}
 */
export const isPixelAvailable = () => {
  return typeof window !== 'undefined' && typeof window.fbq === 'function'
}

/**
 * Track Meta Pixel event
 * @param {string} eventName - Event name (e.g., 'PageView', 'ViewContent', 'Purchase')
 * @param {object} eventData - Optional event parameters
 */
export const trackPixelEvent = (eventName, eventData = {}) => {
  if (isPixelAvailable()) {
    try {
      window.fbq('track', eventName, eventData)
      console.log(`[Meta Pixel] Tracked: ${eventName}`, eventData)
    } catch (error) {
      console.error('[Meta Pixel] Tracking error:', error)
    }
  } else {
    console.warn('[Meta Pixel] fbq not available')
  }
}

/**
 * Track PageView event
 * Used for SPA route changes
 */
export const trackPageView = () => {
  trackPixelEvent('PageView')
}

/**
 * Track ViewContent event
 * Used when user views a product/service page
 * @param {object} contentData - Content details
 * @param {string} contentData.content_name - Name of the content/product
 * @param {string} contentData.content_category - Category of the content
 * @param {string} contentData.content_ids - Array of content IDs
 * @param {string} contentData.content_type - Type of content (e.g., 'product')
 * @param {number} contentData.value - Value of the content
 * @param {string} contentData.currency - Currency code (e.g., 'INR')
 */
export const trackViewContent = (contentData = {}) => {
  const defaultData = {
    content_type: 'product',
    currency: 'INR',
    ...contentData
  }
  trackPixelEvent('ViewContent', defaultData)
}

/**
 * Track InitiateCheckout event
 * Used when user starts checkout process
 * @param {object} checkoutData - Checkout details
 */
export const trackInitiateCheckout = (checkoutData = {}) => {
  trackPixelEvent('InitiateCheckout', checkoutData)
}

/**
 * Track Purchase event
 * Used when user completes a purchase
 * @param {object} purchaseData - Purchase details
 * @param {number} purchaseData.value - Purchase amount
 * @param {string} purchaseData.currency - Currency code
 * @param {string} purchaseData.content_ids - Array of product IDs
 */
export const trackPurchase = (purchaseData) => {
  trackPixelEvent('Purchase', purchaseData)
}

/**
 * Track Lead event
 * Used when user submits a form or shows purchase intent
 * @param {object} leadData - Lead details
 */
export const trackLead = (leadData = {}) => {
  trackPixelEvent('Lead', leadData)
}

/**
 * Track custom event
 * Used for tracking button clicks, actions, etc.
 * @param {string} eventName - Custom event name
 * @param {object} eventData - Event data
 */
export const trackCustomEvent = (eventName, eventData = {}) => {
  if (isPixelAvailable()) {
    try {
      window.fbq('trackCustom', eventName, eventData)
      console.log(`[Meta Pixel] Custom Tracked: ${eventName}`, eventData)
    } catch (error) {
      console.error('[Meta Pixel] Custom tracking error:', error)
    }
  }
}
