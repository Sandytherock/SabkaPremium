// Currency detection utility - FREE implementation
// Uses multiple fallback methods for reliable detection

const INDIAN_TIMEZONES = ['Asia/Kolkata', 'Asia/Calcutta']

/**
 * Detect if user is from India using multiple methods
 * @returns {Promise<boolean>} - true if India, false otherwise
 */
export async function detectIsIndia() {
  // Check localStorage first for saved preference
  const savedCountry = localStorage.getItem('userCountry')
  if (savedCountry) {
    return savedCountry === 'IN'
  }

  try {
    // Method 1: Try free ipapi.co API (10k requests/month free)
    const response = await fetch('https://ipapi.co/json/', {
      signal: AbortSignal.timeout(3000) // 3 second timeout
    })
    
    if (response.ok) {
      const data = await response.json()
      const isIndia = data.country_code === 'IN'
      
      // Save to localStorage to avoid repeated API calls
      localStorage.setItem('userCountry', isIndia ? 'IN' : 'OTHER')
      localStorage.setItem('userCountryData', JSON.stringify({
        country: data.country_name,
        countryCode: data.country_code,
        detectedAt: new Date().toISOString()
      }))
      
      return isIndia
    }
  } catch (error) {
    console.log('IP API failed, using fallback detection:', error.message)
  }

  // Method 2: Fallback - Timezone detection
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const isIndia = INDIAN_TIMEZONES.includes(timezone)
    
    if (isIndia) {
      localStorage.setItem('userCountry', 'IN')
      localStorage.setItem('userCountryData', JSON.stringify({
        country: 'India',
        countryCode: 'IN',
        detectedAt: new Date().toISOString(),
        method: 'timezone'
      }))
    } else {
      localStorage.setItem('userCountry', 'OTHER')
    }
    
    return isIndia
  } catch (error) {
    console.log('Timezone detection failed:', error.message)
  }

  // Method 3: Final fallback - default to India (since your primary market)
  // User can always manually switch
  localStorage.setItem('userCountry', 'IN')
  return true
}

/**
 * Get saved currency preference or detect
 * @returns {Promise<'INR' | 'USD'>}
 */
export async function getCurrency() {
  const savedCurrency = localStorage.getItem('preferredCurrency')
  
  if (savedCurrency) {
    return savedCurrency
  }

  const isIndia = await detectIsIndia()
  const currency = isIndia ? 'INR' : 'USD'
  localStorage.setItem('preferredCurrency', currency)
  
  return currency
}

/**
 * Set currency preference
 * @param {'INR' | 'USD'} currency 
 */
export function setCurrency(currency) {
  localStorage.setItem('preferredCurrency', currency)
  
  // Also update country for consistency
  localStorage.setItem('userCountry', currency === 'INR' ? 'IN' : 'OTHER')
}

/**
 * Toggle between INR and USD
 * @param {string} currentCurrency 
 * @returns {'INR' | 'USD'}
 */
export function toggleCurrency(currentCurrency) {
  const newCurrency = currentCurrency === 'INR' ? 'USD' : 'INR'
  setCurrency(newCurrency)
  return newCurrency
}

/**
 * Convert INR price to USD with custom pricing adjustments
 * @param {string} priceString - e.g., "₹299", "₹1,999"
 * @returns {string} - e.g., "$4.99", "$14.99"
 */
export function convertINRtoUSD(priceString) {
  if (!priceString) return '$0'
  
  // Remove ₹ symbol and commas
  const numericValue = priceString.replace(/[₹,]/g, '').trim()
  const inrAmount = parseFloat(numericValue)
  
  if (isNaN(inrAmount)) return '$0'
  
  // Convert: ₹100 = $1
  const usdAmount = inrAmount / 100
  const basePrice = parseFloat(usdAmount.toFixed(2))
  
  // Custom USD price adjustments
  const priceAdjustments = {
    3.99: 4.99,   // $3.99 → $4.99
    6.49: 7.99,   // $6.49 → $7.99
    7.99: 9.99,   // $7.99 → $9.99
    13.99: 14.99  // $13.99 → $14.99
  }
  
  // Check if this price needs adjustment
  if (priceAdjustments[basePrice]) {
    return `$${priceAdjustments[basePrice].toFixed(2)}`
  }
  
  // Return original converted price
  return `$${basePrice.toFixed(2)}`
}

/**
 * Get price in selected currency
 * @param {string} inrPrice 
 * @param {string} currency 
 * @returns {string}
 */
export function getPrice(inrPrice, currency) {
  if (currency === 'USD') {
    return convertINRtoUSD(inrPrice)
  }
  return inrPrice
}
