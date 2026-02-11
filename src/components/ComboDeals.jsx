import React from 'react'
import { useNavigate } from 'react-router-dom'
import WhatsAppOrderButton from './WhatsAppOrderButton'
import { useCurrency } from '../context/CurrencyContext'
import { getPrice } from '../utils/currencyDetection'
import './ComboDeals.css'

function ComboDeals() {
  const navigate = useNavigate()
  const { currency } = useCurrency()

  const combos = [
    {
      id: 1,
      badge: '⭐ BEST VALUE',
      badgeColor: '#d69e2e',
      title: 'Entertainment Bundle',
      subtitle: 'For Movie & Video Lovers',
      icon: '🎬',
      services: ['Netflix 4K', 'Prime Video', 'YouTube Premium', 'Zee5 Premium', 'Sony LIV Premium'],
      originalPrice: 1215,
      comboPrice: 449,
      savings: 766,
      features: [
        'Unlimited streaming',
        '4K quality content',
        'Ad-free videos',
        'All Indian & International content',
        'Save ₹766/month'
      ]
    },
    {
      id: 5,
      badge: '🎨 CREATOR PRO',
      badgeColor: '#805ad5',
      title: 'Content Creator Pack',
      subtitle: 'For YouTubers & Influencers',
      icon: '🎥',
      services: ['CapCut Pro', 'Canva Pro', 'ChatGPT 5 Pro (Business Teams)', 'YouTube Premium'],
      originalPrice: 1347,
      comboPrice: 749,
      savings: 598,
      features: [
        'Professional video editing',
        'AI content ideas (Business Teams)',
        'Thumbnail design',
        'Save ₹598/month'
      ]
    },
    {
      id: 6,
      badge: '👑 ULTIMATE',
      badgeColor: '#10a37f',
      title: 'All-in-One Pack',
      subtitle: 'Everything You Need',
      icon: '🌟',
      services: ['ChatGPT 5 Pro (Business Teams)', 'Netflix', 'Prime', 'Spotify', 'YouTube', 'Canva', 'LinkedIn', 'Zee5 Premium', 'Sony LIV Premium'],
      originalPrice: 4961,
      comboPrice: 1099,
      savings: 3862,
      features: [
        'All premium services',
        'Maximum savings (Business Teams)',
        'Complete toolkit',
        '9 Premium Services',
        'Save ₹3,862/month'
      ]
    }
  ]

  const handleOrderClick = (combo) => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    navigate(`/order?plan=${encodeURIComponent(combo.title)}`)
  }

  return (
    <section className="combo-deals-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            🎁 Combo Deals - Save Even More!
          </h2>
          <p className="section-subtitle">
            Bundle multiple services and get massive discounts
          </p>
        </div>

        <div className="combos-grid">
          {combos.map((combo) => (
            <div key={combo.id} className="combo-card">
              <div className="combo-badge" style={{ background: combo.badgeColor }}>
                {combo.badge}
              </div>

              <div className="combo-icon">{combo.icon}</div>

              <h3 className="combo-title">{combo.title}</h3>
              <p className="combo-subtitle">{combo.subtitle}</p>

              <div className="combo-services">
                {combo.services.map((service, idx) => (
                  <span key={idx} className="service-tag">
                    {service}
                  </span>
                ))}
              </div>

              <div className="combo-pricing">
                <div className="price-comparison">
                  <span className="original-price">{currency === 'INR' ? '₹' : '$'}{currency === 'INR' ? combo.originalPrice : (combo.originalPrice / 100).toFixed(2)}</span>
                  <span className="arrow">→</span>
                  <span className="combo-price">{currency === 'INR' ? '₹' : '$'}{currency === 'INR' ? combo.comboPrice : (combo.comboPrice / 100).toFixed(2)}</span>
                </div>
                <div className="savings-badge">
                  Save {currency === 'INR' ? '₹' : '$'}{currency === 'INR' ? combo.savings : (combo.savings / 100).toFixed(2)}/month
                </div>
              </div>

              <ul className="combo-features">
                {combo.features.map((feature, idx) => (
                  <li key={idx}>✅ {feature}</li>
                ))}
              </ul>

              <div className="combo-actions">
                <button
                  className="order-combo-btn"
                  onClick={() => handleOrderClick(combo)}
                >
                  Order Now
                </button>
                <WhatsAppOrderButton
                  productName="Combo Deal"
                  plan={combo.title}
                  price={`${currency === 'INR' ? '₹' : '$'}${currency === 'INR' ? combo.comboPrice : (combo.comboPrice / 100).toFixed(2)}`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="combo-benefits">
          <h3>Why Choose Combo Packs?</h3>
          <div className="benefits-grid">
            <div className="benefit-box">
              <div className="benefit-icon">💰</div>
              <h4>Maximum Savings</h4>
              <p>Save up to {currency === 'INR' ? '₹3,435' : '$34.35'}/month with bundles</p>
            </div>
            <div className="benefit-box">
              <div className="benefit-icon">⚡</div>
              <h4>One-Time Payment</h4>
              <p>Pay once, get multiple services</p>
            </div>
            <div className="benefit-box">
              <div className="benefit-icon">🎯</div>
              <h4>Curated Packages</h4>
              <p>Perfect combinations for your needs</p>
            </div>
            <div className="benefit-box">
              <div className="benefit-icon">🎁</div>
              <h4>Extra Perks</h4>
              <p>Priority support & faster delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComboDeals
