import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StickyCTA from './components/StickyCTA'
import Home from './pages/Home'
import Order from './pages/Order'
import Reviews from './pages/Reviews'

function App() {
  return (
    <Router>
      <StickyCTA />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  )
}

export default App
