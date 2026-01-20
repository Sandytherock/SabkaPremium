import React, { useState, useEffect } from 'react'

function FOMOSection() {
  const [countdown, setCountdown] = useState('03:45:00')
  const [slots, setSlots] = useState(5)

  useEffect(() => {
    // Countdown timer
    let timer = 3 * 60 * 60 + 45 * 60 // 3 hours 45 minutes in seconds
    
    const interval = setInterval(() => {
      const hours = Math.floor(timer / 3600).toString().padStart(2, '0')
      const minutes = Math.floor((timer % 3600) / 60).toString().padStart(2, '0')
      const seconds = (timer % 60).toString().padStart(2, '0')
      
      setCountdown(`${hours}:${minutes}:${seconds}`)
      
      if (--timer < 0) {
        timer = 3 * 60 * 60 + 45 * 60
      }
    }, 1000)

    // Slots counter
    const slotsInterval = setInterval(() => {
      setSlots(prev => prev > 1 ? prev - 1 : prev)
    }, 60000) // Decrease every minute

    return () => {
      clearInterval(interval)
      clearInterval(slotsInterval)
    }
  }, [])

  return (
    <section className="fomo">
      <div className="container fomo-row">
        <div className="fomo-item">⏳ Offer ends in <span id="countdown">{countdown}</span></div>
        <div className="fomo-item">🔥 Hurry! Only <span id="slots-left">{slots}</span> slots left today</div>
      </div>
    </section>
  )
}

export default FOMOSection
