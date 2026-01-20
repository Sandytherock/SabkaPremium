import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'
import WhatsAppCommunityBanner from '../components/WhatsAppCommunityBanner'
import { planMap, coupons } from '../data/orderPlansMap'
import '../components/WhatsAppCommunityBanner.css'

function Order() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [couponCode, setCouponCode] = useState('')
  const [discount, setDiscount] = useState(0)
  const [couponApplied, setCouponApplied] = useState(false)
  const [couponError, setCouponError] = useState('')

  useEffect(() => {
    const plan = searchParams.get('plan')
    if (plan && planMap[plan]) {
      setSelectedPlan(planMap[plan])
    }
    
    // Force scroll to top with multiple methods
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    
    // Also use setTimeout to ensure DOM is ready
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 10)
  }, [searchParams])

  const applyCoupon = () => {
    const code = couponCode.toUpperCase()
    if (coupons[code]) {
      setDiscount(coupons[code])
      setCouponApplied(true)
      setCouponError('')
    } else {
      setCouponError('Invalid coupon code')
      setDiscount(0)
      setCouponApplied(false)
    }
  }

  const calculateFinalAmount = () => {
    if (!selectedPlan) return 0
    const baseAmount = parseInt(selectedPlan.amount)
    const discountAmount = (baseAmount * discount) / 100
    return baseAmount - discountAmount
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const submitBtn = form.querySelector('button[type="submit"]')
    
    // Disable submit button to prevent double submission
    submitBtn.disabled = true
    submitBtn.textContent = 'Submitting...'
    
    try {
      const formData = new FormData(form)
      
      // Handle file upload (screenshot)
      const screenshotFile = formData.get('screenshot')
      let base64 = ''
      let mime = ''
      
      if (screenshotFile && screenshotFile.size > 0) {
        const result = await fileToBase64(screenshotFile)
        base64 = result.split(',')[1] || result // Get base64 part only
        mime = screenshotFile.type
      }
      
      // Prepare payload for Google Sheets
      const payload = {}
      formData.forEach((value, key) => {
        if (key !== 'screenshot') { // Skip file field
          payload[key] = value
        }
      })
      
      // Add screenshot data
      payload.screenshotBase64 = base64
      payload.screenshotType = mime
      
      // Send to Google Sheets
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbz4O6KY0iVgy4XtFmg9NI0fLKWmb3iqISkZReo62UltYcYeyBjsOxWYfE4QtHXOKxky6g/exec',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(payload)
        }
      )
      
      if (response.ok) {
        alert('Your details have been submitted! We will verify and deliver shortly.')
        form.reset()
        navigate('/')
      } else {
        throw new Error('Failed to submit')
      }
    } catch (err) {
      console.error('Submission error:', err)
      alert('Error submitting order. Please try again or contact us on Telegram/Instagram.')
    } finally {
      submitBtn.disabled = false
      submitBtn.textContent = 'Submit Details'
    }
  }
  
  // Helper function to convert file to base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (err) => reject(err)
    })
  }

  return (
    <div className="order-body">
      <WhatsAppCommunityBanner />
      <Header />
      <main className="order-wrap">
        <section className="order-card">
          <h1>Complete Your Payment</h1>
          
          {selectedPlan && (
            <div className="plan-head" style={{ display: 'flex' }}>
              <img src={selectedPlan.logo} alt="Plan" />
              <span className="pname">{selectedPlan.name}</span>
            </div>
          )}

          <div className="qr">
            <img src="/assets/upi-qr.png.jpg" alt="UPI QR Code" />
            <div className="upi-line">
              <span>UPI ID:</span> <code>somya2208jain2208@okhdfcbank</code>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="form">
            <div className="two">
              <label>
                <span>Your Name</span>
                <input type="text" name="name" required />
              </label>
              <label>
                <span>Your Email</span>
                <input type="email" name="email" required />
              </label>
            </div>

            <label>
              <span>Your Phone</span>
              <input type="tel" name="phone" required />
            </label>

            <div className="two">
              <label>
                <span>Selected Plan</span>
                <input 
                  type="text" 
                  name="plan" 
                  value={selectedPlan ? selectedPlan.name : ''} 
                  readOnly 
                  required 
                />
              </label>
              <label>
                <span>Amount</span>
                <input 
                  type="text" 
                  name="amount" 
                  value={selectedPlan ? `₹${calculateFinalAmount()}` : ''} 
                  readOnly 
                  required 
                />
              </label>
            </div>

            <div className="coupon-row">
              <input 
                type="text" 
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter Coupon Code" 
                aria-label="Coupon Code" 
              />
              <button type="button" className="btn-ghost" onClick={applyCoupon}>Apply</button>
            </div>
            
            {couponApplied && (
              <p className="ok">✅ Coupon applied successfully! {discount}% off</p>
            )}
            {couponError && (
              <p className="warn">❌ {couponError}</p>
            )}
            {discount > 0 && selectedPlan && (
              <p className="ok">Discount: ₹{(parseInt(selectedPlan.amount) * discount) / 100}</p>
            )}

            <label>
              <span>Transaction ID / UTR</span>
              <input type="text" name="transactionId" required />
            </label>

            <label className="file">
              <span>Upload Payment Screenshot (optional)</span>
              <input type="file" name="screenshot" accept="image/*" />
            </label>

            <button type="submit" className="btn-primary wfull">Submit Details</button>

            <p className="tiny">
              Facing issues? Reach us on{' '}
              <a href="https://t.me/Somya2208" target="_blank" rel="noopener noreferrer">Telegram</a> or{' '}
              <a href="https://instagram.com/sabka_premium" target="_blank" rel="noopener noreferrer">Instagram</a>.
            </p>
          </form>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default Order
