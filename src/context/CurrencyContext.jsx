import React, { createContext, useContext, useState, useEffect } from 'react'
import { getCurrency, setCurrency as saveCurrency, toggleCurrency as toggle } from '../utils/currencyDetection'

const CurrencyContext = createContext()

export function CurrencyProvider({ children }) {
  const [currency, setCurrencyState] = useState('INR') // Default to INR
  const [loading, setLoading] = useState(true)
  const [countryInfo, setCountryInfo] = useState(null)

  useEffect(() => {
    // Auto-detect currency on first load
    async function initCurrency() {
      try {
        const detectedCurrency = await getCurrency()
        setCurrencyState(detectedCurrency)
        
        // Get country info if available
        const countryData = localStorage.getItem('userCountryData')
        if (countryData) {
          setCountryInfo(JSON.parse(countryData))
        }
      } catch (error) {
        console.error('Currency detection failed:', error)
        // Fallback to INR
        setCurrencyState('INR')
      } finally {
        setLoading(false)
      }
    }

    initCurrency()
  }, [])

  const toggleCurrency = () => {
    const newCurrency = toggle(currency)
    setCurrencyState(newCurrency)
  }

  const setCurrency = (newCurrency) => {
    saveCurrency(newCurrency)
    setCurrencyState(newCurrency)
  }

  const value = {
    currency,
    setCurrency,
    toggleCurrency,
    loading,
    countryInfo,
    isINR: currency === 'INR',
    isUSD: currency === 'USD'
  }

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (!context) {
    throw new Error('useCurrency must be used within CurrencyProvider')
  }
  return context
}
