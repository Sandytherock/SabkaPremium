import React, { useState, useEffect } from 'react'
import './ExitIntentPopup.css'

function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('exitPopupShown')
    if (popupShown) {
      setHasShown(true)
      return
    }

    const handleMouseLeave = (e) => {
      // Only show if mouse leaves from top and popup hasn't been shown
      if (e.clientY <= 0 && !hasShown && !isVisible) {
        setIsVisible(true)
        setHasShown(true)
        sessionStorage.setItem('exitPopupShown', 'true')
      }
    }

    // Add event listener
    document.addEventListener('mouseleave', handleMouseLeave)

    // Cleanup
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasShown, isVisible])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleClaim = () => {
    // Copy discount code
    navigator.clipboard.writeText('WELCOME5')
    alert('🎉 Discount code WELCOME5 copied! Apply at checkout.')
    setIsVisible(false)
    // Scroll to plans
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!isVisible) return null

  return (
    <div className="exit-popup-overlay" onClick={handleClose}>
      <div className="exit-popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="exit-popup-close" onClick={handleClose}>
          ✕
        </button>

        <div className="exit-popup-icon">
          😱
        </div>

        <h2 className="exit-popup-title">
          Wait! Don't Leave Empty-Handed!
        </h2>

        <p className="exit-popup-subtitle">
          You're about to miss out on an <strong>EXCLUSIVE</strong> offer!
        </p>

        <div className="exit-popup-offer">
          <div className="offer-badge">SPECIAL OFFER</div>
          <div className="offer-discount">
            <span className="discount-number">5%</span>
            <span className="discount-text">OFF</span>
          </div>
          <p className="offer-description">
            On Your First Order
          </p>
        </div>

        <div className="exit-popup-code">
          <span className="code-label">Use Code:</span>
          <span className="code-value">WELCOME5</span>
        </div>

        <div className="exit-popup-benefits">
          <div className="benefit-item">
            ✅ Instant Delivery in 1-6 Hours
          </div>
          <div className="benefit-item">
            ✅ Support Assistance Available
          </div>
          <div className="benefit-item">
            ✅ 24/7 Customer Support
          </div>
        </div>

        <div className="exit-popup-actions">
          <button className="claim-button" onClick={handleClaim}>
            🎁 Claim My Discount
          </button>
          <button className="decline-button" onClick={handleClose}>
            No thanks, I'll pay full price
          </button>
        </div>

        <div className="exit-popup-urgency">
          ⏰ This offer expires when you close this window!
        </div>
      </div>
    </div>
  )
}

export default ExitIntentPopup

