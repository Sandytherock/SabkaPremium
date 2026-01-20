import React, { useState, useEffect } from 'react'
import './CountdownTimer.css'

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set initial countdown time (e.g., 6 hours from now)
    const getEndTime = () => {
      const now = new Date()
      const end = new Date(now)
      end.setHours(23, 59, 59, 999) // End of day
      return end
    }

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const end = getEndTime().getTime()
      const difference = end - now

      if (difference > 0) {
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ hours, minutes, seconds })
      } else {
        // Reset to new day
        setTimeLeft({ hours: 23, minutes: 59, seconds: 59 })
      }
    }

    // Initial calculation
    calculateTimeLeft()

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (num) => String(num).padStart(2, '0')

  return (
    <div className="countdown-timer-wrapper">
      <div className="countdown-container">
        <div className="countdown-icon">🔥</div>
        <div className="countdown-content">
          <h3 className="countdown-title">Flash Sale Ends In:</h3>
          <div className="countdown-display">
            <div className="time-unit">
              <span className="time-number">{formatTime(timeLeft.hours)}</span>
              <span className="time-label">Hours</span>
            </div>
            <div className="time-separator">:</div>
            <div className="time-unit">
              <span className="time-number">{formatTime(timeLeft.minutes)}</span>
              <span className="time-label">Mins</span>
            </div>
            <div className="time-separator">:</div>
            <div className="time-unit">
              <span className="time-number">{formatTime(timeLeft.seconds)}</span>
              <span className="time-label">Secs</span>
            </div>
          </div>
          <p className="countdown-message">
            ⚡ <strong>Today Only:</strong> 20% OFF All Premium Plans
          </p>
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer
