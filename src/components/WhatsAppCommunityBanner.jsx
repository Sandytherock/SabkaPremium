import React from 'react'

function WhatsAppCommunityBanner() {
  return (
    <div className="top-announcement-banner">
      <div className="banner-marquee">
        <div className="marquee-content">
          <span className="banner-item">
            <span className="icon">🔥</span>
            <strong>Limited Slots Today!</strong> Instant Delivery in 1-6 Hours
          </span>
          <span className="banner-divider">•</span>
          <span className="banner-item">
            <span className="icon">📱</span>
            <strong>Join WhatsApp Community</strong> - See Daily Payment Proofs from 500+ Customers
          </span>
          <span className="banner-divider">•</span>
          <span className="banner-item">
            <span className="icon">⚡</span>
            <strong>Flash Deal:</strong> 20% OFF Today Only!
          </span>
          <span className="banner-divider">•</span>
          <span className="banner-item">
            <span className="icon">✅</span>
            <strong>100% Verified Service</strong> - 100% Replacement Policy
          </span>
          <span className="banner-divider">•</span>
          {/* Duplicate for seamless loop */}
          <span className="banner-item">
            <span className="icon">🔥</span>
            <strong>Limited Slots Today!</strong> Instant Delivery in 1-6 Hours
          </span>
          <span className="banner-divider">•</span>
          <span className="banner-item">
            <span className="icon">📱</span>
            <strong>Join WhatsApp Community</strong> - See Daily Payment Proofs from 500+ Customers
          </span>
          <span className="banner-divider">•</span>
          <span className="banner-item">
            <span className="icon">⚡</span>
            <strong>Flash Deal:</strong> 20% OFF Today Only!
          </span>
          <span className="banner-divider">•</span>
          <span className="banner-item">
            <span className="icon">✅</span>
            <strong>100% Verified Service</strong> - 100% Replacement Policy
          </span>
        </div>
      </div>
      <a 
        href="https://chat.whatsapp.com/JSwKDdlLKCEBOIe2a7hLkA" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-quick-btn"
        title="Join WhatsApp Community"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.552 4.17 1.605 6L.058 23.942l6.134-1.534A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.758-.543-5.358-1.57l-.384-.243-3.98 1.01 1.02-3.914-.257-.4A9.96 9.96 0 012 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
        Join
      </a>
    </div>
  )
}

export default WhatsAppCommunityBanner

