import React from 'react'
import { useCurrency } from '../context/CurrencyContext'
import './CurrencyToggle.css'

function CurrencyToggle() {
  const { currency, toggleCurrency, loading } = useCurrency()

  if (loading) {
    return null // Don't show toggle while detecting
  }

  return (
    <button 
      className="currency-toggle"
      onClick={toggleCurrency}
      title={`Switch to ${currency === 'INR' ? 'USD' : 'INR'}`}
      aria-label={`Current currency: ${currency}. Click to switch to ${currency === 'INR' ? 'USD' : 'INR'}`}
    >
      <div className={`currency-option ${currency === 'INR' ? 'active' : 'inactive'}`}>
        <span className="currency-flag">🇮🇳</span>
        <span className="currency-code">INR</span>
      </div>
      <div className={`currency-option ${currency === 'USD' ? 'active' : 'inactive'}`}>
        <span className="currency-flag">🌎</span>
        <span className="currency-code">USD</span>
      </div>
    </button>
  )
}

export default CurrencyToggle
