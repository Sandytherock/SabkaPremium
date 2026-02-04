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
      services: ['ChatGPT 5 Pro (Business Teams)', 'YouTube Premium'],
      originalPrice: 2148,
      comboPrice: 249,
      savings: 1899,
      features: [
        'AI-powered learning (Business Teams)',
        'Ad-free video tutorials',
        'Background playback',
        'Save ₹1,899/month'
      ]
    },
    {
      id: 2,
      badge: '💻 DEVELOPER PRO',
      badgeColor: '#0891b2',
      title: 'Full Stack Developer Pack',
      subtitle: 'Complete Developer Toolkit',
      icon: '👨‍💻',
      services: ['ChatGPT 5 Pro (Business Teams)', 'Cursor AI Pro', 'Replit Core'],
      originalPrice: 2297,
      comboPrice: 1199,
      savings: 1098,
      features: [
        'AI coding assistants',
        'Cloud development',
        'Business Teams access',
        'Save ₹1,098/month'
      ]
    },
    {
      id: 3,
      badge: '🚀 JOB SEEKER',
      badgeColor: '#0e76a8',
      title: 'Career Growth Pack',
      subtitle: 'Land Your Dream Job',
      icon: '💼',
      services: ['LinkedIn Career', 'ChatGPT 5 Pro (Business Teams)', 'Canva Pro'],
      originalPrice: 1497,
      comboPrice: 899,
      savings: 598,
      features: [
        'Professional networking',
        'AI-powered resume (Business Teams)',
        'Design portfolio',
        'Save ₹598/month'
      ]
    },
    {
      id: 4,
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
      badge: '💼 ENTREPRENEUR',
      badgeColor: '#059669',
      title: 'Business Starter Pack',
      subtitle: 'Start & Grow Your Business',
      icon: '🚀',
      services: ['LinkedIn Business', 'ChatGPT 5 Pro (Business Teams)', 'Canva Pro', 'Gemini Pro'],
      originalPrice: 1796,
      comboPrice: 1199,
      savings: 597,
      features: [
        'Lead generation',
        'AI business tools (Business Teams)',
        'Professional branding',
        'Save ₹597/month'
      ]
    },
    {
      id: 6,
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
      id: 7,
      badge: '🎯 SALES PRO',
      badgeColor: '#dc2626',
      title: 'Sales Powerhouse Pack',
      subtitle: 'Close More Deals',
      icon: '📈',
      services: ['LinkedIn Sales Navigator', 'ChatGPT 5 Pro (Business Teams)', 'Perplexity Pro'],
      originalPrice: 1897,
      comboPrice: 1299,
      savings: 598,
      features: [
        'B2B lead generation',
        'AI prospecting (Business Teams)',
        'Research tools',
        'Save ₹598/month'
      ]
    },
    {
      id: 8,
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
                  productName="Combo Deal"
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
