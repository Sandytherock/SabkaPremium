import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { plansData, tabs } from '../data/plansData'
import WhatsAppOrderButton from './WhatsAppOrderButton'
import './WhatsAppOrderButton.css'

function PlansSection() {
  const [activeTab, setActiveTab] = useState('chatgpt')
  const navigate = useNavigate()

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  const handleOrderClick = (plan) => {
    // Disable scroll restoration before navigating
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    navigate(`/order?plan=${plan}`)
  }

  return (
    <section className="plans" id="plans">
      <div className="container">
        <h2>🔥 Choose Your Service</h2>

        <div className="tabbar" role="tablist" aria-label="Services">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              data-tab={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              <img src={tab.logo} alt={tab.label} /> {tab.label}
            </button>
          ))}
        </div>

        {/* Render plans for active tab */}
        {Object.keys(plansData).map(category => (
          <div
            key={category}
            id={category}
            className={`tabpane ${activeTab === category ? 'active' : ''}`}
            role="tabpanel"
          >
            <div className="grid">
              {plansData[category].map((plan, index) => (
                <React.Fragment key={index}>
                  {plan.sectionHeader && (
                    <div className="section-header-divider">
                      <h2 className="plans-section-header">{plan.sectionHeader}</h2>
                      {plan.sectionNote && <p className="plans-section-note">{plan.sectionNote}</p>}
                    </div>
                  )}
                  <article
                    className={`card ${plan.popular ? 'popular' : ''} ${plan.accent ? 'accent' : ''}`}
                  >
                    {plan.popular && <div className="tag popular-tag">🔥 Most Popular</div>}
                    {plan.tag && <div className="tag">{plan.tag}</div>}
                  {plan.trending && <div className="tag trending-tag">📈 Trending</div>}
                  {plan.bestValue && <div className="tag value-tag">⭐ Best Value</div>}
                  
                  <h3>
                    <img src={plan.logo || `/assets/${category}-logo.png`} alt="" /> {plan.title}
                  </h3>
                  
                  <ul>
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                  
                  <div className="price">{plan.price}</div>
                  
                  <button
                    className="btn-primary"
                    onClick={() => handleOrderClick(plan.plan)}
                  >
                    Order Now
                  </button>
                  
                  <WhatsAppOrderButton 
                    plan={plan.title}
                    price={plan.price}
                    discount={plan.discount}
                  />
                  
                  {plan.note && <p className="muted tiny-text">{plan.note}</p>}
                </article>
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PlansSection
