import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { plansData, tabs } from '../data/plansData'
import WhatsAppOrderButton from './WhatsAppOrderButton'
import { trackViewContent, trackCustomEvent } from '../lib/metaPixel'
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

  // Track when user views plans section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Track ViewContent when plans section becomes visible
            trackViewContent({
              content_name: 'Plans Section',
              content_category: activeTab,
              content_type: 'product_group'
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    const plansSection = document.getElementById('plans')
    if (plansSection) {
      observer.observe(plansSection)
    }

    return () => {
      if (plansSection) {
        observer.unobserve(plansSection)
      }
    }
  }, [activeTab])

  const handleOrderClick = (plan) => {
    // Track Order Now button click
    trackCustomEvent('OrderNowButtonClick', {
      content_name: plan,
      button_location: 'plan_card'
    })
    
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
        {Object.keys(plansData).map(category => {
          const sections = plansData[category].reduce((acc, plan) => {
            const isNewSection = !!plan.sectionHeader || acc.length === 0
            if (isNewSection) {
              acc.push({
                header: plan.sectionHeader || null,
                note: plan.sectionNote || null,
                plans: [plan]
              })
            } else {
              acc[acc.length - 1].plans.push(plan)
            }
            return acc
          }, [])

          return (
            <div
              key={category}
              id={category}
              className={`tabpane ${activeTab === category ? 'active' : ''}`}
              role="tabpanel"
            >
              {sections.map((section, sIndex) => (
                <div key={sIndex}>
                  {section.header && (
                    <div className="section-header-divider">
                      <h2 className="plans-section-header">{section.header}</h2>
                      {section.note && <p className="plans-section-note">{section.note}</p>}
                    </div>
                  )}

                  <div className={`grid grid-cols-${Math.min(section.plans.length || 1, 4)}`}>
                    {section.plans.map((plan, index) => (
                      <article
                        key={`${sIndex}-${index}`}
                        className={`card ${plan.popular ? 'popular' : ''} ${plan.accent ? 'accent' : ''}`}
                      >
                        <div className="tags-container">
                          {plan.popular && <div className="tag popular-tag">🔥 Most Popular</div>}
                          {plan.trending && <div className="tag trending-tag">📈 Trending</div>}
                          {plan.bestValue && <div className="tag value-tag">⭐ Best Value</div>}
                          {plan.tag && !plan.popular && !plan.trending && !plan.bestValue && <div className="tag">{plan.tag}</div>}
                        </div>

                        <h3>
                          <img src={plan.logo || `/assets/${category}-logo.png`} alt="" /> {plan.title}
                        </h3>

                        <ul>
                          {plan.features && plan.features.map((feature, fIndex) => (
                            <li key={fIndex}>{feature}</li>
                          ))}
                        </ul>

                        <div className="price">{plan.price}</div>

                        <button
                          className="btn-primary"
                          onClick={() => handleOrderClick(plan.plan)}
                          disabled={!!plan.disabled}
                          title={plan.disabled ? 'Currently unavailable' : undefined}
                        >
                          {plan.disabled ? 'Out of Stock' : 'Order Now'}
                        </button>

                        <WhatsAppOrderButton 
                          productName={tabs.find(tab => tab.id === category)?.label || category}
                          plan={plan.title}
                          price={plan.price}
                          discount={plan.discount}
                          disabled={!!plan.disabled}
                        />

                        {plan.note && <p className="muted tiny-text">{plan.note}</p>}
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default PlansSection
