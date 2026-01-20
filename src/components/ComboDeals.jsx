import React from 'react'
import { useNavigate } from 'react-router-dom'
import WhatsAppOrderButton from './WhatsAppOrderButton'
import './ComboDeals.css'

function ComboDeals() {
  const navigate = useNavigate()

  const combos = [
    {
      id: 1,
      badge: '🔥 MOST POPULAR',
      badgeColor: '#e53e3e',
      title: 'Student Pack',
      subtitle: 'Perfect for Students & Learners',
      icon: '🎓',
      services: ['ChatGPT Plus', 'YouTube Premium'],
      originalPrice: 2148,
      comboPrice: 249,
      savings: 1899,
      features: [
        'AI-powered learning',
        'Ad-free video tutorials',
        'Background playback',
        'Save ₹1,899/month'
      ]
    },
    {
      id: 2,
      badge: '⭐ BEST VALUE',
      badgeColor: '#d69e2e',
      title: 'Entertainment Bundle',
      subtitle: 'For Movie & Music Lovers',
      icon: '🎬',
      services: ['Netflix 4K', 'Prime Video', 'Spotify Premium'],
      originalPrice: 887,
      comboPrice: 349,
      savings: 538,
      features: [
        'Unlimited streaming',
        '4K quality content',
        'Ad-free music',
        'Save ₹538/month'
      ]
    },
    {
      id: 3,
      badge: '💼 PROFESSIONAL',
      badgeColor: '#805ad5',
      title: 'Designer Pack',
      subtitle: 'For Creators & Professionals',
      icon: '🎨',
      services: ['Canva Pro', 'ChatGPT Plus', 'CapCut Pro'],
      originalPrice: 3298,
      comboPrice: 449,
      savings: 2849,
      features: [
        'Professional designs',
        'AI content creation',
        'Video editing tools',
        'Save ₹2,849/month'
      ]
    },
    {
      id: 4,
      badge: '🚀 ULTIMATE',
      badgeColor: '#10a37f',
      title: 'All-in-One Pack',
      subtitle: 'Everything You Need',
      icon: '👑',
      services: ['ChatGPT', 'Netflix', 'Prime', 'Spotify', 'YouTube', 'Canva'],
      originalPrice: 4134,
      comboPrice: 699,
      savings: 3435,
      features: [
        'All premium services',
        'Maximum savings',
        'Complete entertainment',
        'Save ₹3,435/month'
      ]
    }
  ]

  const handleOrderClick = (combo) => {
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
                  <span className="original-price">₹{combo.originalPrice}</span>
                  <span className="arrow">→</span>
                  <span className="combo-price">₹{combo.comboPrice}</span>
                </div>
                <div className="savings-badge">
                  Save ₹{combo.savings}/month
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
                  plan={combo.title}
                  price={`₹${combo.comboPrice}`}
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
              <p>Save up to ₹3,435/month with bundles</p>
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
