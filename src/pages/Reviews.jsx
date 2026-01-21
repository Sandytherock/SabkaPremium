import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'
import WhatsAppCommunityBanner from '../components/WhatsAppCommunityBanner'
import { defaultReviews, getStarDisplay, formatDate, formatDateTime } from '../data/reviewsData'
import { supabase, isSupabaseConfigured } from '../lib/supabase'
import { trackViewContent } from '../lib/metaPixel'
import '../components/WhatsAppCommunityBanner.css'

function Reviews() {
  const [reviews, setReviews] = useState(defaultReviews)
  const [filteredReviews, setFilteredReviews] = useState(defaultReviews)
  const [ratingFilter, setRatingFilter] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [isLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    review: ''
  })

  // Fetch reviews from Supabase
  const fetchReviews = async () => {
    try {
      setIsLoading(true)
      
      // Check if Supabase is configured
      if (!isSupabaseConfigured()) {
        console.log('Using default reviews - Supabase not configured')
        setReviews(defaultReviews)
        setIsLoading(false)
        return
      }

      // Fetch from Supabase
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching reviews:', error)
        // Fallback to default reviews on error
        setReviews(defaultReviews)
      } else {
        // Combine default reviews with Supabase reviews
        // Convert Supabase data to match our format
        const supabaseReviews = data.map(review => ({
          id: review.id,
          name: review.name,
          rating: review.rating,
          review: review.review,
          date: new Date(review.created_at),
          verified: review.verified
        }))
        
        // Merge with default reviews (default reviews first for display consistency)
        setReviews([...defaultReviews, ...supabaseReviews])
      }
    } catch (err) {
      console.error('Unexpected error:', err)
      setReviews(defaultReviews)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchReviews()
    
    // Track ViewContent when Reviews page is viewed
    trackViewContent({
      content_name: 'Customer Reviews',
      content_category: 'reviews',
      content_type: 'page'
    })
    
    // Set up real-time subscription for live updates
    if (isSupabaseConfigured()) {
      const channel = supabase
        .channel('reviews-changes')
        .on(
          'postgres_changes',
          {
            event: '*', // Listen to all events (INSERT, UPDATE, DELETE)
            schema: 'public',
            table: 'reviews'
          },
          (payload) => {
            console.log('Real-time update received:', payload)
            // Refresh reviews when any change occurs
            fetchReviews()
          }
        )
        .subscribe()

      // Cleanup subscription on unmount
      return () => {
        supabase.removeChannel(channel)
      }
    }
  }, [])

  useEffect(() => {
    filterAndSortReviews()
  }, [reviews, ratingFilter, sortBy])

  const filterAndSortReviews = () => {
    let filtered = [...reviews]

    // Filter by rating
    if (ratingFilter !== 'all') {
      filtered = filtered.filter(r => r.rating === parseInt(ratingFilter))
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date))
        break
      case 'oldest':
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date))
        break
      case 'highest':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'lowest':
        filtered.sort((a, b) => a.rating - b.rating)
        break
      default:
        break
    }

    setFilteredReviews(filtered)
  }

  const handleSubmitReview = async (e) => {
    e.preventDefault()
    
    try {
      // Check if Supabase is configured
      if (!isSupabaseConfigured()) {
        console.warn('Supabase not configured - review not saved to database')
        alert('⚠️ Database not configured. Please set up Supabase to save reviews.')
        return
      }

      // Submit to Supabase
      const { data, error } = await supabase
        .from('reviews')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            rating: parseInt(formData.rating),
            review: formData.review,
            verified: false
          }
        ])
        .select()

      if (error) {
        console.error('Error submitting review:', error)
        alert('❌ Error submitting review. Please try again.')
        return
      }

      console.log('Review submitted successfully:', data)
      
      // Reset form
      setFormData({ name: '', email: '', rating: 5, review: '' })
      
      // Show success message
      alert('Thank you for your review! 🎉 It will appear shortly.')
      
      // Refresh reviews (real-time subscription will also update, but this is immediate)
      fetchReviews()
      
    } catch (err) {
      console.error('Unexpected error submitting review:', err)
      alert('❌ Unexpected error. Please try again.')
    }
  }

  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0)
    return (sum / reviews.length).toFixed(1)
  }

  return (
    <>
      <WhatsAppCommunityBanner />
      <Header />
      
      {/* Reviews Hero Section */}
      <section className="reviews-hero">
        <div className="container">
          <h1>⭐ What Our Customers Say</h1>
          <p className="hero-subtitle">Real reviews from real customers who trust SabkaPremium</p>
          
          {/* Stats Bar */}
          <div className="reviews-stats">
            <div className="stat-item">
              <div className="stat-number">{reviews.length}</div>
              <div className="stat-label">Total Reviews</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{calculateAverageRating()}</div>
              <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Sort Section */}
      <section className="reviews-filter">
        <div className="container">
          <div className="filter-bar">
            <div className="filter-group">
              <label htmlFor="rating-filter">Filter by Rating:</label>
              <select 
                id="rating-filter" 
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
              >
                <option value="all">All Ratings</option>
                <option value="5">5 Stars ⭐⭐⭐⭐⭐</option>
                <option value="4">4 Stars ⭐⭐⭐⭐</option>
                <option value="3">3 Stars ⭐⭐⭐</option>
                <option value="2">2 Stars ⭐⭐</option>
                <option value="1">1 Star ⭐</option>
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="sort-filter">Sort by:</label>
              <select 
                id="sort-filter"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="highest">Highest Rating</option>
                <option value="lowest">Lowest Rating</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews Display */}
      <section className="all-reviews-section">
        <div className="container">
          <h2>📝 Customer Reviews</h2>
          
          {/* Reviews Container */}
          <div className="reviews-grid">
            {filteredReviews.length > 0 ? (
              filteredReviews.map(review => (
                <div key={review.id} className="review-card-full">
                  <div className="review-header">
                    <div className="reviewer-info">
                      <div className="reviewer-avatar">
                        {review.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="reviewer-name">
                          {review.name}
                          {review.verified && <span className="verified-badge">✓ Verified</span>}
                        </div>
                        <div className="review-date">
                          <i className="fa-solid fa-clock" style={{ fontSize: '11px', marginRight: '4px' }}></i>
                          {formatDate(review.date)}
                        </div>
                      </div>
                    </div>
                    <div className="review-stars">{getStarDisplay(review.rating)}</div>
                  </div>
                  <div className="review-text">{review.review}</div>
                </div>
              ))
            ) : (
              <p className="no-reviews">No reviews found matching your filters.</p>
            )}
          </div>
        </div>
      </section>

      {/* Submit Review Section */}
      <section className="submit-review-section">
        <div className="container">
          <div className="review-submit-box">
            <h2>📝 Share Your Experience</h2>
            <p className="muted">Help others by sharing your honest review!</p>
            
            <form onSubmit={handleSubmitReview} className="review-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="review-name">Your Name</label>
                  <input 
                    type="text" 
                    id="review-name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="review-email">Your Email</label>
                  <input 
                    type="email" 
                    id="review-email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required 
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="review-rating">Rating</label>
                <div className="star-rating-input">
                  {[5, 4, 3, 2, 1].map(star => (
                    <React.Fragment key={star}>
                      <input 
                        type="radio" 
                        id={`star${star}`} 
                        name="rating" 
                        value={star}
                        checked={formData.rating === star}
                        onChange={(e) => setFormData({...formData, rating: parseInt(e.target.value)})}
                      />
                      <label htmlFor={`star${star}`} title={`${star} stars`}>★</label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="review-text">Your Review</label>
                <textarea 
                  id="review-text" 
                  rows="5" 
                  value={formData.review}
                  onChange={(e) => setFormData({...formData, review: e.target.value})}
                  placeholder="Share your experience with SabkaPremium..." 
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary btn-large">
                <i className="fa-solid fa-paper-plane"></i> Submit Review
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </>
  )
}

export default Reviews
