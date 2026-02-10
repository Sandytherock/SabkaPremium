import React, { useState } from 'react'
import './IndianPayment.css'

function IndianPayment({ amount }) {
  const upiId = 'somya2208jain2208@okhdfcbank'
  const [selectedMethod, setSelectedMethod] = useState('qr')
  const [copied, setCopied] = useState(false)

  const copyUpiId = () => {
    navigator.clipboard.writeText(upiId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="indian-payment">
      <div className="payment-header-section">
        <h3>💳 Choose Your Payment Method</h3>
        <div className="total-amount-display">
          <span className="amount-label">Total Amount:</span>
          <span className="amount-value">₹{amount}</span>
        </div>
      </div>

      <div className="payment-methods-tabs">
        <button 
          className={`payment-tab ${selectedMethod === 'qr' ? 'active' : ''}`}
          onClick={() => setSelectedMethod('qr')}
        >
          <svg className="tab-icon" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
            <rect x="3" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
            <rect x="13" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
            <rect x="13" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
            <rect x="5" y="5" width="4" height="4" fill="currentColor"/>
            <rect x="15" y="15" width="4" height="4" fill="currentColor"/>
          </svg>
          UPI QR Code
        </button>
        <button 
          className={`payment-tab ${selectedMethod === 'upi' ? 'active' : ''}`}
          onClick={() => setSelectedMethod('upi')}
        >
          <svg className="tab-icon" viewBox="0 0 24 24" fill="none">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" fill="currentColor"/>
            <path d="M6.5 10h3v1h-3v3h-1v-3.5c0-.28.22-.5.5-.5h.5zm4.5 0h1.5v4h-1v-3h-1v3h-1v-4zm3.5 0h2c.28 0 .5.22.5.5V14c0 .28-.22.5-.5.5h-2v-4.5zm1 3.5v-3h1v3h-1z" fill="currentColor"/>
          </svg>
          UPI ID
        </button>
      </div>

      <div className="payment-content">
        {/* UPI QR Option */}
        {selectedMethod === 'qr' && (
          <div className="payment-method-content">
            <div className="payment-left-col">
              <div className="payment-method-header">
                <div className="qr-code-container">
                  <img src="/assets/upi-qr.png.jpg" alt="UPI QR Code" className="qr-code-image" />
                </div>
                <h4>Scan QR Code</h4>
                <p className="method-description">Works with all UPI apps</p>
              </div>

              <div className="upi-apps-supported">
                <p className="apps-label">Supported Apps:</p>
                <div className="app-icons">
                  <div className="app-badge">Google Pay</div>
                  <div className="app-badge">PhonePe</div>
                  <div className="app-badge">Paytm</div>
                  <div className="app-badge">BHIM</div>
                </div>
              </div>

              <div className="payment-info-box upi-info">
                <p><strong>💡 Quick & Secure:</strong> Scan with any UPI app and pay instantly</p>
              </div>
            </div>

            <div className="payment-right-col">
              <div className="payment-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h5>Open your UPI app</h5>
                    <p>GPay, PhonePe, Paytm, or any UPI app</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h5>Scan the QR code</h5>
                    <p>Amount ₹{amount} will be pre-filled</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h5>Complete payment</h5>
                    <p>Enter UPI PIN and confirm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* UPI ID Option */}
        {selectedMethod === 'upi' && (
          <div className="payment-method-content">
            <div className="payment-left-col">
              <div className="payment-method-header">
                <svg className="large-icon upi-icon" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#097939"/>
                  <path d="M8 10h2v8H8v-8zm4 0h2v8h-2v-8zm4 0h2v8h-2v-8z" fill="white"/>
                  <path d="M7 8h10v1H7V8z" fill="#FF6600"/>
                </svg>
                <h4>Pay via UPI ID</h4>
                <p className="method-description">Enter manually in your UPI app</p>
              </div>

              <div className="upi-id-display-box">
                <p className="upi-label">UPI ID:</p>
                <div className="upi-id-container">
                  <code className="upi-id-text">{upiId}</code>
                  <button className="copy-button" onClick={copyUpiId}>
                    {copied ? (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="payment-info-box upi-info">
                <p><strong>💡 Alternative:</strong> If QR doesn't work, use this UPI ID to send payment manually</p>
              </div>
            </div>

            <div className="payment-right-col">
              <div className="payment-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h5>Copy UPI ID</h5>
                    <p>Click the copy button above</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h5>Open UPI app & paste</h5>
                    <p>Enter amount ₹{amount} manually</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h5>Complete payment</h5>
                    <p>Verify details and confirm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="payment-bottom-info">
        <div className="security-badges">
          <div className="security-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="#4CAF50"/>
            </svg>
            <span>100% Secure</span>
          </div>
          <div className="security-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#FF9800"/>
            </svg>
            <span>Instant Activation</span>
          </div>
          <div className="security-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#2196F3"/>
            </svg>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndianPayment
