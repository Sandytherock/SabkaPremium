import React from 'react'
import { useNavigate } from 'react-router-dom'

function CoachingSection() {
  const navigate = useNavigate()

  const handleOrderClick = (plan) => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    navigate(`/order?plan=${plan}`)
  }

  return (
    <>
      <section className="coach" id="strategy-call">
        <div className="container">
          <div className="coach-head">
            <span className="coach-pill">
              <i className="fa-solid fa-bolt"></i>
              1-on-1 Software Dropshipping Coaching
            </span>
            <h2>Start Software Dropshipping in 2025 – 1:1 Coaching from ₹99</h2>
            <p className="muted">
              Learn the exact system I used to generate <strong>₹3,00,000+ in 5 months</strong>
              through software dropshipping. No inventory, no shipping, no big capital – just digital products.
            </p>
          </div>

          <div className="coach-grid">
            {/* LEFT: 99 + 999 plans stacked */}
            <div className="coach-left">
              {/* ₹99 Strategy Call */}
              <div className="coach-card">
                <h3>₹99 – 1-on-1 Strategy Call (15–20 min)</h3>
                <ul>
                  <li>✅ <strong>15–20 minute 1-on-1</strong> audio or video call</li>
                  <li>✅ Clear explanation of the <strong>software dropshipping business model</strong></li>
                  <li>✅ Quick roadmap to earn your first <strong>₹10,000–₹50,000</strong></li>
                  <li>✅ Basic list of software tools to resell + ideal pricing for the Indian market</li>
                  <li>✅ Basics of ads, Reels and DM strategy to get your first clients</li>
                  <li>✅ Q&A – ask anything about tools, methods or systems I personally use</li>
                </ul>

                <div className="coach-note">
                  <p>
                    This is <strong>not a webinar</strong>. It is a personalised call where
                    we build a plan based on <strong>your background, time and income goals</strong>.
                  </p>
                </div>

                <div className="coach-cta">
                  <div className="coach-price">
                    <span className="old">₹999</span>
                    <span className="new">₹99</span>
                    <span className="tagline">Introductory offer – limited slots per day</span>
                  </div>
                  <button className="btn-primary" onClick={() => handleOrderClick('Call-1On1-99')}>
                    Book 1-on-1 Strategy Call (₹99)
                  </button>
                  <p className="muted tiny-text">
                    After payment, you will receive a form + Telegram/WhatsApp instructions
                    to schedule your call.
                  </p>
                </div>
              </div>

              {/* 🔥 NEW: ₹999 Full A–Z Plan */}
              <div className="coach-card">
                <h3>₹999 – Learn Software Dropshipping A to Z (Complete System)</h3>
                <ul>
                  <li>📚 <strong>Complete step-by-step training</strong> – from idea to first sales</li>
                  <li>🧩 Exactly which <strong>software tools to resell</strong> and proven Indian pricing</li>
                  <li>📲 <strong>Instagram, Reels and DM system</strong> to get consistent leads</li>
                  <li>📋 Ready-made <strong>scripts, replies and templates</strong> for DMs, stories and highlights</li>
                  <li>⚙️ Delivery system – how to deliver accounts fast and safely to clients</li>
                  <li>🧠 Avoid common mistakes like bans, policy disputes and angry customers</li>
                  <li>🤝 <strong>3 months chat support</strong> to implement everything step by step</li>
                </ul>

                <div className="coach-note">
                  <p>
                    This plan is for people who don't just want an idea, but a
                    <strong> ready-to-use system they can plug in and start executing</strong>.
                  </p>
                </div>

                <div className="coach-cta">
                  <div className="coach-price">
                    <span className="old">₹4,999</span>
                    <span className="new">₹999</span>
                    <span className="tagline">Launch offer – limited seats per month</span>
                  </div>
                  <button className="btn-primary" onClick={() => handleOrderClick('Software-A2Z-999')}>
                    Enrol in A–Z Software Dropshipping (₹999)
                  </button>
                  <p className="muted tiny-text">
                    After payment, you will receive detailed onboarding: where to access content,
                    support channel links and exact implementation steps.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Info boxes */}
            <div className="coach-side">
              <div className="coach-box">
                <h4>Who Is This For?</h4>
                <ul>
                  <li>• Students and job seekers</li>
                  <li>• Freelancers and agency owners</li>
                  <li>• People looking for side income</li>
                  <li>• Anyone who wants a beginner-friendly online business</li>
                </ul>
              </div>

              <div className="coach-box">
                <h4>Why Is It Paid?</h4>
                <p className="muted">
                  Free calls attract people who are not serious.
                  A small fee like <strong>₹99 / ₹999</strong> ensures that only
                  <strong> serious learners</strong> join.
                  If you are serious, I will give you <strong>full value</strong> during the call and program. 🔥
                </p>
              </div>

              <div className="coach-box">
                <h4>What Happens After Booking?</h4>
                <ol>
                  <li>1️⃣ Choose your plan – ₹99 Strategy Call or ₹999 A–Z Program</li>
                  <li>2️⃣ Go to the order page and complete payment via UPI</li>
                  <li>3️⃣ Fill the form with your details and payment screenshot</li>
                  <li>4️⃣ You will receive contact details & instructions on Telegram/WhatsApp</li>
                  <li>5️⃣ Get your call + full access, follow the roadmap and start executing</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="coach-faq">
        <div className="container narrow">
          <h2>₹99 Strategy Call – Common Questions</h2>
          <div className="accordion">
            <details>
              <summary>Will the call be on video or audio?</summary>
              <p>
                Whatever you prefer. We can do the call on <strong>WhatsApp, Telegram, or Google Meet</strong> –
                audio or video as per your comfort.
              </p>
            </details>

            <details>
              <summary>How long will the call be?</summary>
              <p>
                The call usually lasts <strong>15–20 minutes</strong>, but if you have valid questions,
                it can extend slightly.
              </p>
            </details>

            <details>
              <summary>What will I get after the call?</summary>
              <p>
                You will receive a <strong>personal roadmap</strong>, basic tools list, earning strategy,
                and <strong>24-hour chat support</strong> to help you start immediately.
              </p>
            </details>

            <details>
              <summary>Will you sell a course after the call?</summary>
              <p>
                The call is mainly for <strong>clarity and direction</strong>.
                Only if you feel you want the complete system, I may share my course or tool bundles —
                but it is <strong>never forced</strong>.
              </p>
            </details>

            <details>
              <summary>Is there a refund or return if I can't attend?</summary>
              <p>
                In case of any issues, <strong>only replacement will be provided. No refund.</strong>
                But if you inform me in advance, we will <strong>reschedule your slot</strong>.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  )
}

export default CoachingSection

