import React from 'react'

function VideoReviewsSection() {
  const videoReviews = [
    {
      src: '/assets/video-reviews/review1.mp4',
      name: 'Verified Buyer',
      product: 'ChatGPT Plus'
    }
  ]
  const placeholderCards = [
    { title: 'More Video Reviews Coming Soon', subtitle: 'New customer clips are being uploaded.' },
    { title: 'Want to be featured?', subtitle: 'Send your short review on WhatsApp.' },
    { title: 'Bonus for video reviews', subtitle: 'Top reviews get a special bonus.' }
  ]

  return (
    <section className="video-reviews" id="video-reviews">
      <div className="container">
        <div className="video-reviews-head">
          <h2>Video Reviews from Real Buyers</h2>
          <p className="muted">
            Trust-building clips from customers who bought tools via SabkaPremium.
          </p>
        </div>

        <div className="video-reviews-track" role="list">
          {videoReviews.map((video, index) => (
            <div key={index} className="video-review-card" role="listitem">
              <div className="video-frame">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  src={video.src}
                />
              </div>
              <div className="video-review-meta">
                <span className="video-review-name">{video.name}</span>
                <span className="video-review-product">{video.product}</span>
              </div>
            </div>
          ))}
          {placeholderCards.map((card, index) => (
            <div
              key={`placeholder-${index}`}
              className="video-review-card video-review-placeholder"
              role="listitem"
            >
              <div className="video-placeholder-box">
                <span className="video-placeholder-title">{card.title}</span>
                <span className="video-placeholder-subtitle">{card.subtitle}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="video-reviews-hint">
          Swipe to see more reviews. Send your review to get featured.
        </p>
        <div className="video-reviews-cta">
          <a
            className="btn-ghost"
            href="https://wa.me/919511335264?text=Hi%20SabkaPremium%2C%20I%20want%20to%20send%20my%20video%20review."
            target="_blank"
            rel="noopener noreferrer"
          >
            Send Video Review on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default VideoReviewsSection
