// Default reviews data
export const defaultReviews = [
  {
    id: 1,
    name: "Aayush Kumar",
    rating: 5,
    review: "I got ChatGPT & Netflix both from SabkaPremium. Delivery was super fast!",
    date: new Date('2025-01-15'),
    verified: true
  },
  {
    id: 2,
    name: "Priya Sharma",
    rating: 5,
    review: "Affordable and 100% working accounts. Highly recommended!",
    date: new Date('2025-01-14'),
    verified: true
  },
  {
    id: 3,
    name: "Rohan Singh",
    rating: 5,
    review: "Great service! My Canva Pro was activated within minutes.",
    date: new Date('2025-01-13'),
    verified: true
  },
  {
    id: 4,
    name: "Neha Patel",
    rating: 5,
    review: "My go-to for all OTT and AI tools. Super easy process!",
    date: new Date('2025-01-12'),
    verified: true
  },
  {
    id: 5,
    name: "Aditya Mehta",
    rating: 5,
    review: "Very professional and trustworthy. I've purchased multiple plans!",
    date: new Date('2025-01-11'),
    verified: true
  },
  {
    id: 6,
    name: "Anjali Verma",
    rating: 5,
    review: "Netflix subscription working perfectly! Best prices in the market.",
    date: new Date('2025-01-10'),
    verified: true
  },
  {
    id: 7,
    name: "Rahul Gupta",
    rating: 5,
    review: "Got my ChatGPT account in just 2 hours. Amazing service!",
    date: new Date('2025-01-09'),
    verified: true
  },
  {
    id: 8,
    name: "Sneha Reddy",
    rating: 5,
    review: "YouTube Premium subscription is working flawlessly. Highly recommended!",
    date: new Date('2025-01-08'),
    verified: true
  }
]

// Helper function to get star display
export const getStarDisplay = (rating) => {
  return '⭐'.repeat(rating)
}

// Helper function to format date with time
export const formatDate = (date) => {
  const reviewDate = new Date(date)
  const now = new Date()
  const diffTime = Math.abs(now - reviewDate)
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  
  // Show relative time for recent reviews
  if (diffDays === 0) {
    return 'Today'
  } else if (diffDays === 1) {
    return 'Yesterday'
  } else if (diffDays < 7) {
    return `${diffDays} days ago`
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7)
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30)
    return `${months} ${months === 1 ? 'month' : 'months'} ago`
  } else {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return reviewDate.toLocaleDateString('en-US', options)
  }
}

// Helper function to get exact date and time
export const formatDateTime = (date) => {
  const reviewDate = new Date(date)
  const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' }
  const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true }
  
  const formattedDate = reviewDate.toLocaleDateString('en-US', dateOptions)
  const formattedTime = reviewDate.toLocaleTimeString('en-US', timeOptions)
  
  return `${formattedDate} at ${formattedTime}`
}
