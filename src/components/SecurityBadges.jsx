import React from 'react'
import './SecurityBadges.css'

function SecurityBadges() {
  return (
    <div className="security-badges">
      <div className="container">
        <div className="badges-grid">
          <div className="badge-item">
            <div className="badge-icon">🔒</div>
            <div className="badge-text">
              <strong>100% Secure</strong>
              <span>Payment</span>
            </div>
          </div>

          <div className="badge-item">
            <div className="badge-icon">⚡</div>
            <div className="badge-text">
              <strong>1-6 Hours</strong>
              <span>Delivery</span>
            </div>
          </div>

          <div className="badge-item">
            <div className="badge-icon">✅</div>
            <div className="badge-text">
              <strong>100% Working</strong>
              <span>Guarantee</span>
            </div>
          </div>

          <div className="badge-item">
            <div className="badge-icon">🛡️</div>
            <div className="badge-text">
              <strong>Free Replace</strong>
              <span>if Issue</span>
            </div>
          </div>

          <div className="badge-item">
            <div className="badge-icon">📱</div>
            <div className="badge-text">
              <strong>UPI Payment</strong>
              <span>GPay, PhonePe, Paytm</span>
            </div>
          </div>

          <div className="badge-item">
            <div className="badge-icon">⭐</div>
            <div className="badge-text">
              <strong>1000+ Customers</strong>
              <span>Satisfied</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecurityBadges
