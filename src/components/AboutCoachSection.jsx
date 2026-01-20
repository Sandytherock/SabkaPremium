import React from 'react'

function AboutCoachSection() {
  const handleScrollToCall = (e) => {
    e.preventDefault()
    const target = document.getElementById('strategy-call')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="coach-about">
      <div className="container narrow">
        <h2>About Your Coach</h2>
        <div className="coach-about-wrap">
          <div className="coach-about-text">
            <p>
              Hi! 👋 My name is <strong>Soumya Jain</strong>, and I'm an active
              practitioner of <strong>software dropshipping</strong>. Over the last
              <strong> 5 months</strong>, I've generated more than
              <strong> ₹3,00,000 in revenue</strong> using this exact business model —
              including <strong>₹1,00,000+</strong> in just the last month.
            </p>
            <p>
              I don't teach theory. I teach the exact systems, methods, and processes
              I personally use in my business — including tools, pricing strategies,
              client acquisition, ads, and delivery systems.
            </p>
            <p className="muted">
              My goal is simple: to help <strong>students, freelancers, and
                beginners</strong> start a profitable online income with a business
              model that requires almost zero investment and has massive earning
              potential.
            </p>
          </div>

          <div className="coach-about-card">
            <h3>Quick Stats</h3>
            <ul>
              <li>💰 ₹3,00,000+ revenue in 5 months</li>
              <li>🧠 Experience with 50+ software tools</li>
              <li>🎓 Helped 1000+ customers with premium tools</li>
              <li>📍 India-based strategies designed for the Indian market</li>
            </ul>
            <a 
              href="#strategy-call" 
              className="btn-primary wfull" 
              style={{ marginTop: '10px' }}
              onClick={handleScrollToCall}
            >
              Start with the ₹99 Call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCoachSection
