import React from 'react'

function HeroSection() {
  return (
    <section className="hero">
      <div className="bg-blur"></div>
      <div className="container hero-wrap">
        <div className="hero-copy">
          <h1>All Premium Accounts, One Place.</h1>
          <p className="sub">ChatGPT 5 Pro • Claude Max • Gemini AI Pro • Cursor AI • Replit Core • LinkedIn Premium • Netflix 4K • Prime Video • Canva Pro • YouTube Premium • Spotify Premium</p>
          <div className="cta-row">
            <a href="#plans" className="btn-primary">Explore Plans</a>
            <a href="#how-to-order" className="btn-ghost">How it works</a>
          </div>
          {/* Enhanced Trust Badges */}
          <div className="trust-badges">
            <div className="trust-badge">
              <div className="trust-badge-icon">
                <i className="fa-solid fa-users"></i>
              </div>
              <div className="trust-badge-text">
                <div className="trust-badge-number">1000+</div>
                <div className="trust-badge-label">Happy Customers</div>
              </div>
            </div>
            
            <div className="trust-badge">
              <div className="trust-badge-icon">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <div className="trust-badge-text">
                <div className="trust-badge-number">1-6 Hours</div>
                <div className="trust-badge-label">Instant Delivery</div>
              </div>
            </div>
            
            <div className="trust-badge">
              <div className="trust-badge-icon">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <div className="trust-badge-text">
                <div className="trust-badge-number">Policy</div>
                <div className="trust-badge-label">Replacement Only</div>
              </div>
            </div>
            
            <div className="trust-badge">
              <div className="trust-badge-icon">
                <i className="fa-solid fa-lock"></i>
              </div>
              <div className="trust-badge-text">
                <div className="trust-badge-number">Secure</div>
                <div className="trust-badge-label">UPI Payment</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/assets/ChatGPTAppIllustration.png" alt="Premium services illustration" loading="lazy" />
          <div className="floating-badge" aria-hidden="true">✅ Issue? Replacement Only, No Refund</div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
