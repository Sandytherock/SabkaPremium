import React from 'react'
import { useCurrency } from '../context/CurrencyContext'
import { getPrice } from '../utils/currencyDetection'
import './PriceComparisonTable.css'

function PriceComparisonTable() {
  const { currency } = useCurrency()

  const comparisons = [
    { service: 'ChatGPT 5 Pro (1M)', icon: '🤖', official: '₹1,999', ours: '₹799' },
    { service: 'Netflix 4K (1M)', icon: '🎬', official: '₹649', ours: '₹179' },
    { service: 'Gemini AI Pro + 2TB (1M)', icon: '✨', official: '₹1,950', ours: '₹199' },
    { service: 'CapCut Pro (1M)', icon: '🎞️', official: '₹799', ours: '₹499' },
    { service: 'ChatGLM Pro Shared (1M)', icon: '🎥', official: '₹999', ours: '₹999' },
    { service: 'ChatGLM Pro Private (1M)', icon: '🎥', official: '₹1,999', ours: '₹1,999' },
    { service: 'Cursor AI Pro (1M)', icon: '💻', official: '₹1,699', ours: '₹1,299' },
    { service: 'Lovable AI Pro (1M)', icon: '💗', official: '₹2,500', ours: '₹499' },
    { service: 'Claude Pro (1M)', icon: '🧠', official: '₹1,799', ours: '₹1,399' },
    { service: 'Claude Pro Max 20 (1M)', icon: '🚀', official: '₹20,000', ours: '₹10,999' },
    { service: 'Perplexity Pro (1M)', icon: '🔎', official: '₹1,700', ours: '₹499' },
    { service: 'Prime Video (1M)', icon: '📺', official: '₹299', ours: '₹99' },
    { service: 'YouTube Premium Individual (1M)', icon: '▶️', official: '₹149', ours: '₹69' },
    { service: 'YouTube Premium Family (1M)', icon: '👨‍👩‍👧‍👦', official: '₹299', ours: '₹99' },
    { service: 'Hotstar Super (1M)', icon: '⭐', official: '₹299', ours: '₹69' },
    { service: 'ZEE5 Premium (1M)', icon: '🎭', official: '₹299', ours: '₹89' },
    { service: 'Adobe Creative Cloud (1M)', icon: '🎨', official: '₹4,230', ours: '₹499' },
    { service: 'HeyGen Creator (1M)', icon: '🗣️', official: '₹2,400', ours: '₹1,250' },
    { service: 'OpenArt Advanced (1M)', icon: '🖼️', official: '₹2,900', ours: '₹1,499' },
    { service: 'OpenArt Infinite (1M)', icon: '🎨', official: '₹3,900', ours: '₹1,799' },
    { service: 'TradingView Premium (1M)', icon: '📈', official: '₹2,995', ours: '₹1,499' }
  ]

  const parseInr = (value) => {
    const amount = Number(String(value).replace(/[₹,]/g, '').trim())
    return Number.isFinite(amount) ? amount : 0
  }

  const computedComparisons = comparisons.map((item) => {
    const officialAmount = parseInr(item.official)
    const ourAmount = parseInr(item.ours)
    const saveAmount = Math.max(officialAmount - ourAmount, 0)
    const savePercent = officialAmount > 0 ? `${Math.round((saveAmount / officialAmount) * 100)}%` : '0%'

    return {
      ...item,
      save: `₹${saveAmount.toLocaleString('en-IN')}`,
      savePercent,
      officialAmount,
      ourAmount,
      saveAmount
    }
  })

  const totalOfficial = computedComparisons.reduce((sum, item) => sum + item.officialAmount, 0)
  const totalOurs = computedComparisons.reduce((sum, item) => sum + item.ourAmount, 0)
  const totalSave = computedComparisons.reduce((sum, item) => sum + item.saveAmount, 0)
  const yearlySavings = totalSave * 12

  return (
    <section className="price-comparison-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">💰 Why Pay More? Compare & Save!</h2>
          <p className="section-subtitle">
            Monthly available plans mapped to current SabkaPremium prices
          </p>
        </div>

        <div className="comparison-table-wrapper">
          <div className="comparison-table-container">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Official Price</th>
                  <th className="highlight-col">SabkaPremium</th>
                  <th>You Save</th>
                </tr>
              </thead>
              <tbody>
                {computedComparisons.map((item, index) => (
                  <tr key={index}>
                    <td className="service-name">
                      <span className="service-icon">{item.icon}</span>
                      <span>{item.service}</span>
                    </td>
                    <td className="official-price">
                      <span className="price-strike">{getPrice(item.official, currency)}</span>
                      <span className="per-month">/plan</span>
                    </td>
                    <td className="our-price highlight-col">
                      <span className="price-big">{getPrice(item.ours, currency)}</span>
                      <span className="per-month">/plan</span>
                    </td>
                    <td className="savings">
                      <span className="save-amount">{getPrice(item.save, currency)}</span>
                      <span className="save-percent">{item.savePercent} OFF</span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="total-row">
                  <td><strong>Total</strong></td>
                  <td className="official-price">
                    <strong>
                      {currency === 'INR' ? '₹' : '$'}
                      {currency === 'INR' ? totalOfficial.toLocaleString('en-IN') : (totalOfficial / 100).toFixed(2)}
                    </strong>
                  </td>
                  <td className="our-price highlight-col">
                    <strong>
                      {currency === 'INR' ? '₹' : '$'}
                      {currency === 'INR' ? totalOurs.toLocaleString('en-IN') : (totalOurs / 100).toFixed(2)}
                    </strong>
                  </td>
                  <td className="savings">
                    <strong className="save-amount">
                      {currency === 'INR' ? '₹' : '$'}
                      {currency === 'INR' ? totalSave.toLocaleString('en-IN') : (totalSave / 100).toFixed(2)}
                    </strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div className="savings-highlight">
          <div className="savings-card">
            <div className="savings-icon">🎉</div>
            <div className="savings-content">
              <h3>Your Yearly Savings</h3>
              <div className="savings-amount">
                {currency === 'INR' ? '₹' : '$'}
                {currency === 'INR' ? yearlySavings.toLocaleString('en-IN') : (yearlySavings / 100).toFixed(2)}
              </div>
              <p>That's enough for a vacation! 🏖️</p>
            </div>
          </div>
          <div className="savings-cta">
            <p className="cta-text">Why waste money when you can save?</p>
            <a href="#plans" className="cta-button">
              Start Saving Today →
            </a>
          </div>
        </div>

        <div className="comparison-note">
          <p>
            💡 <strong>Note:</strong> SabkaPremium prices are shown as listed plan prices. Official prices are indicative and can vary by region, taxes, and billing cycle.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PriceComparisonTable
