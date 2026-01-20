import React, { useState, useEffect } from 'react'
import './LiveStatistics.css'

function LiveStatistics() {
  const [stats, setStats] = useState({
    ordersDelivered: 1247,
    activeUsers: 23,
    activeSubscribers: 156,
    avgRating: 4.8
  })

  useEffect(() => {
    // Simulate live updates
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        activeUsers: Math.floor(Math.random() * 15) + 18, // 18-32 range
        ordersDelivered: prev.ordersDelivered + Math.floor(Math.random() * 2) // Randomly increment
      }))
    }, 8000) // Update every 8 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="live-statistics-bar">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon">📦</div>
            <div className="stat-content">
              <div className="stat-number">{stats.ordersDelivered.toLocaleString()}</div>
              <div className="stat-label">Orders Delivered</div>
            </div>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <div className="stat-number">{stats.avgRating}/5.0</div>
              <div className="stat-label">Average Rating</div>
            </div>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <div className="stat-icon live-pulse">👥</div>
            <div className="stat-content">
              <div className="stat-number">{stats.activeUsers}</div>
              <div className="stat-label">Viewing Now</div>
            </div>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <div className="stat-icon">⚡</div>
            <div className="stat-content">
              <div className="stat-number">{stats.activeSubscribers}</div>
              <div className="stat-label">Active Subscribers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveStatistics
