import React from 'react'
import { useNavigate } from 'react-router-dom'

function ChatGLMSection() {
  const navigate = useNavigate()

  return (
    <section className="combo" id="chatglm">
      <div className="container">
        <h2>🎬 ChatGLM Pro Suite — 4K 60 FPS Video & Unlimited Images</h2>
        <p className="muted">VIP access • Watermark-free outputs • Priority rendering</p>

        <div className="combo-wrap">
          <img src="/assets/chatglm-cover.jpg" alt="ChatGLM Pro Suite" />

          <div className="combo-copy">
            <h3>What you'll get</h3>
            <ul>
              <li>🎞️ <strong>Unlimited video generation</strong> up to <strong>4K 60 FPS</strong></li>
              <li>⏱️ Per render length: <strong>10 sec</strong> per generation</li>
              <li>🖼️ <strong>Unlimited image generation</strong> (VIP)</li>
              <li>🚫 No watermark on videos & images</li>
              <li>⚡ Priority queue for faster renders</li>
              <li>📦 Latest model updates included</li>
              <li>🔐 Shared access (mobile + desktop)</li>
            </ul>

            <div className="price">
              <s>₹2,999</s>
              <span className="now">₹999</span>
              <span className="muted" style={{ fontWeight: 600 }}>/ 3 months</span>
            </div>
            <button 
              className="btn-primary" 
              onClick={() => {
                navigate('/order?plan=ChatGLM-3M-2499')
                window.scrollTo(0, 0)
              }}
            >
              Get ChatGLM Pro (₹999 / 3M)
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChatGLMSection
