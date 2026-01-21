import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import PixelTracker from './components/PixelTracker'
import Home from './pages/Home'
import Order from './pages/Order'
import Reviews from './pages/Reviews'

function ScrollToTop() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // Force scroll to top immediately
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    
    // Also try with requestAnimationFrame for better timing
    window.requestAnimationFrame(() => {
      window.scrollTo(0, 0)
    })
  }, [pathname, search])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <PixelTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  )
}

export default App
