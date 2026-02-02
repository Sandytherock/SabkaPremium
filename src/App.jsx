import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import PixelTracker from './components/PixelTracker'
import GoogleAnalytics from './components/GoogleAnalytics'
import Home from './pages/Home'
import Order from './pages/Order'
import Reviews from './pages/Reviews'

function ScrollToTop() {
  const { pathname, search, hash } = useLocation()

  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // If there's a hash, scroll to that element instead of top
    if (hash) {
      // Wait for DOM to be ready
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      // No hash, scroll to top
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      
      // Also try with requestAnimationFrame for better timing
      window.requestAnimationFrame(() => {
        window.scrollTo(0, 0)
      })
    }
  }, [pathname, search, hash])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <PixelTracker />
      <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  )
}

export default App
