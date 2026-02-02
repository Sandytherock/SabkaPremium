import React from 'react'

function WhatsAppCommunity() {
  return (
    <section className="whatsapp-community-section">
      <div className="container">
        {/* Main Hero Banner */}
        <div className="community-hero">
          <div className="community-icon">
            <svg viewBox="0 0 32 32" width="80" height="80">
              <path fill="#25D366" d="M16 0C7.164 0 0 7.164 0 16c0 2.831.739 5.587 2.146 8L.078 31.922l8.095-2.053C10.413 31.261 13.169 32 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333c-2.533 0-5.013-.724-7.147-2.093l-.512-.327-5.307 1.347 1.36-5.227-.347-.533A13.28 13.28 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333z"/>
              <path fill="#25D366" d="M23.547 19.427c-.373-.187-2.2-1.093-2.547-1.213-.347-.12-.6-.187-.853.187-.253.373-.973 1.213-1.2 1.467-.213.253-.44.28-.813.093-.373-.187-1.573-.573-3-1.853-1.107-.987-1.853-2.213-2.067-2.587-.213-.373-.027-.573.16-.76.173-.16.373-.44.56-.653.187-.213.253-.373.373-.627.12-.253.067-.467-.027-.653-.093-.187-.853-2.04-1.173-2.8-.307-.733-.613-.627-.853-.64-.213-.013-.467-.013-.72-.013s-.653.093-.987.467c-.333.373-1.28 1.253-1.28 3.053s1.307 3.547 1.493 3.8c.187.253 2.613 3.987 6.333 5.587.88.373 1.573.6 2.107.76.893.28 1.707.24 2.347.147.72-.107 2.2-.893 2.507-1.76.307-.867.307-1.6.213-1.76-.093-.16-.347-.253-.72-.44z"/>
            </svg>
          </div>
          <h2 className="community-title">
            📱 Join Our WhatsApp Community
          </h2>
          <p className="community-subtitle">
            See <strong>LIVE Proofs</strong> from 500+ Real Customers!
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="community-benefits">
          <div className="benefit-card">
            <div className="benefit-icon">🚀</div>
            <h3>New Tools First</h3>
            <p>Be the first to know about new AI tools & services</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">💰</div>
            <h3>Exclusive Discounts</h3>
            <p>Members-only pricing & special offers</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">📢</div>
            <h3>Price Updates</h3>
            <p>Instant notifications on price changes & deals</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="community-cta">
          <a 
            href="https://chat.whatsapp.com/JSwKDdlLKCEBOIe2a7hLkA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-join-btn"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.552 4.17 1.605 6L.058 23.942l6.134-1.534A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.758-.543-5.358-1.57l-.384-.243-3.98 1.01 1.02-3.914-.257-.4A9.96 9.96 0 012 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10z"/>
              <path d="M17.66 14.57c-.28-.14-1.65-.82-1.91-.91-.25-.09-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.16.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.12.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.53-.88-2.1-.23-.55-.46-.47-.64-.48-.16-.01-.35-.01-.54-.01s-.49.07-.74.35c-.25.28-.96.94-96 2.29s.98 2.66 1.12 2.85c.14.19 1.96 2.99 4.75 4.19.66.28 1.18.45 1.58.57.67.21 1.28.18 1.76.11.54-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33z"/>
            </svg>
            Join WhatsApp Community - FREE
          </a>
          <p className="community-members">
            🔥 <strong>500+ Members</strong> already joined!
          </p>
          <div className="trust-indicators">
            <span className="trust-badge">✅ 100% Real Reviews</span>
            <span className="trust-badge">🔒 No Spam</span>
            <span className="trust-badge">⚡ Active Community</span>
          </div>
        </div>

        {/* Social Proof */}
        <div className="community-proof">
          <p className="proof-text">
            💡 <strong>Why join?</strong> Get exclusive offers, new tool launches & pricing updates FIRST!
          </p>
          <div className="proof-stats">
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Active Members</div>
            </div>
            <div className="stat">
              <div className="stat-number">🎁</div>
              <div className="stat-label">Exclusive Offers</div>
            </div>
            <div className="stat">
              <div className="stat-number">⚡</div>
              <div className="stat-label">Instant Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatsAppCommunity
