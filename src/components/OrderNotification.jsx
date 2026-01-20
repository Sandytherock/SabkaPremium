import React, { useState, useEffect } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'

function OrderNotification() {
  const [isVisible, setIsVisible] = useState(false)
  const [notification, setNotification] = useState({ name: '', product: '', time: '', isReal: false })

  const names = [
    "Rahul", "Priya", "Amit", "Neha", "Rohan", "Anjali", "Arjun", "Sneha",
    "Vikram", "Pooja", "Aditya", "Riya", "Karan", "Divya", "Siddharth", "Shreya",
    "Harsh", "Ananya", "Varun", "Isha", "Ayush", "Kavya", "Aryan", "Meera"
  ]

  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Pune", "Chennai", "Kolkata",
    "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh", "Indore", "Bhopal", "Patna"
  ]

  const products = [
    "ChatGPT Plus 3M",
    "Netflix Premium 1M",
    "YouTube Premium Family",
    "Claude Pro 1M",
    "Canva Pro 6M",
    "Gemini Advanced 1M",
    "Spotify Premium 3M",
    "Prime Video 1M",
    "Perplexity Pro 1M",
    "ChatGPT Plus 6M"
  ]

  const times = [
    "2 minutes ago",
    "5 minutes ago",
    "8 minutes ago",
    "12 minutes ago",
    "15 minutes ago",
    "Just now"
  ]

  // Fetch real orders from Supabase
  const fetchRealOrders = async () => {
    if (!isSupabaseConfigured()) return []
    
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('name, plan_name, created_at')
        .order('created_at', { ascending: false })
        .limit(10)
      
      if (error) throw error
      return data || []
    } catch (error) {
      console.log('Could not fetch real orders:', error.message)
      return []
    }
  }

  const getTimeAgo = (timestamp) => {
    const now = new Date()
    const orderTime = new Date(timestamp)
    const diffMinutes = Math.floor((now - orderTime) / (1000 * 60))
    
    if (diffMinutes < 1) return 'Just now'
    if (diffMinutes < 60) return `${diffMinutes} minutes ago`
    
    const diffHours = Math.floor(diffMinutes / 60)
    if (diffHours < 24) return `${diffHours} hours ago`
    
    const diffDays = Math.floor(diffHours / 24)
    return `${diffDays} days ago`
  }

  const showNotification = async () => {
    // Try to show real order 40% of the time
    const showRealOrder = Math.random() < 0.4
    
    if (showRealOrder) {
      const realOrders = await fetchRealOrders()
      if (realOrders.length > 0) {
        const randomOrder = realOrders[Math.floor(Math.random() * realOrders.length)]
        
        setNotification({
          name: randomOrder.name,
          product: `just purchased ${randomOrder.plan_name}`,
          time: getTimeAgo(randomOrder.created_at),
          isReal: true
        })

        setIsVisible(true)
        setTimeout(() => setIsVisible(false), 6000)
        return
      }
    }
    
    // Fallback to fake notification
    const randomName = names[Math.floor(Math.random() * names.length)]
    const randomCity = cities[Math.floor(Math.random() * cities.length)]
    const randomProduct = products[Math.floor(Math.random() * products.length)]
    const randomTime = times[Math.floor(Math.random() * times.length)]

    setNotification({
      name: `${randomName} from ${randomCity}`,
      product: `just purchased ${randomProduct}`,
      time: randomTime,
      isReal: false
    })

    setIsVisible(true)
    setTimeout(() => setIsVisible(false), 6000)
  }

  useEffect(() => {
    // Show first notification after 5 seconds
    const firstTimer = setTimeout(() => {
      showNotification()
    }, 5000)

    // Show notification every 12-18 seconds
    const interval = setInterval(() => {
      const randomDelay = 12000 + Math.random() * 6000
      setTimeout(() => {
        if (!isVisible) {
          showNotification()
        }
      }, randomDelay)
    }, 18000)

    return () => {
      clearTimeout(firstTimer)
      clearInterval(interval)
    }
  }, [])

  return (
    <div id="order-notification" className={`order-popup ${isVisible ? 'show' : ''}`}>
      <div className="order-popup-content">
        <div className="order-popup-icon">
          <i className="fa-solid fa-check-circle"></i>
        </div>
        <div className="order-popup-text">
          <div className="order-popup-name">
            {notification.name}
            {notification.isReal && <span style={{ 
              fontSize: '10px', 
              background: '#10a37f', 
              padding: '2px 6px', 
              borderRadius: '4px', 
              marginLeft: '6px',
              fontWeight: '600'
            }}>LIVE</span>}
          </div>
          <div className="order-popup-product">{notification.product}</div>
          <div className="order-popup-time">{notification.time}</div>
        </div>
      </div>
      <button 
        className="order-popup-close" 
        aria-label="Close notification"
        onClick={() => setIsVisible(false)}
      >
        <i className="fa-solid fa-times"></i>
      </button>
    </div>
  )
}

export default OrderNotification
