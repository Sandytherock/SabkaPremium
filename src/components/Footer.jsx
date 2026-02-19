import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
        <div>
          <img src="/assets/logo.png" alt="SabkaPremium - Affordable Premium Subscriptions India" loading="lazy" />
          <p>India's Most Trusted Affordable Premium Service Platform for Students & Creators.</p>
          
          {/* Security Trust Badges */}
          <div className="footer-security-badges">
            <div className="security-badge">
              <i className="fa-solid fa-shield-halved"></i>
              <span>Secure Payment</span>
            </div>
            <div className="security-badge">
              <i className="fa-solid fa-lock"></i>
              <span>SSL Encrypted</span>
            </div>
            <div className="security-badge">
              <i className="fa-solid fa-check-circle"></i>
              <span>Verified Seller</span>
            </div>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul className="links">
            <li><Link to="/">Home</Link></li>
            <li><a href="/#plans" onClick={(e) => {
              if (window.location.pathname !== '/') {
                e.preventDefault();
                window.location.href = '/#plans';
              }
            }}>Our Plans</a></li>
            <li><a href="/#how-to-order" onClick={(e) => {
              if (window.location.pathname !== '/') {
                e.preventDefault();
                window.location.href = '/#how-to-order';
              }
            }}>How to Order</a></li>
            <li><Link to="/reviews">Customer Reviews</Link></li>
          </ul>
        </div>
        <div>
          <h4>Popular Services</h4>
          <ul className="links">
            <li><a href="/#chatgpt">ChatGPT Plus India</a></li>
            <li><a href="/#netflix">Netflix 4K Cheap</a></li>
            <li><a href="/#canva">Canva Pro Discount</a></li>
            <li><a href="/#claude">Claude Max AI</a></li>
            <li><a href="/#gemini">Gemini Ultra</a></li>
            <li><a href="/#adobe">Adobe Creative Cloud</a></li>
          </ul>
        </div>
        <div>
          <h4>We're Trusted!</h4>
          <ul className="ticks">
            <li>✅ 1000+ Happy Customers</li>
            <li>✅ Instant Delivery</li>
            <li>✅ Replacement Only in Case of Issue</li>
            <li>✅ No Refund Policy</li>
            <li>🔒 Secure UPI Payments</li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <div className="socials">
            <a href="https://instagram.com/sabka_premium" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://t.me/Somya2208" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a href="mailto:sabkapremium01@gmail.com" aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="foot-copy">
        <p>© 2025 SabkaPremium.com | All rights reserved. | Trusted by 5000+ customers across India</p>
        <p style={{ fontSize: '0.875rem', marginTop: '10px', opacity: '0.8' }}>
          Buy ChatGPT Plus, Netflix 4K, Canva Pro, AI Tools at lowest prices in India
        </p>
        <p>Made with ❤️ for Indian Students & Creators</p>
      </div>
    </footer>
  )
}

export default Footer

