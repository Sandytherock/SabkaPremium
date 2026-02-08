import React from 'react'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'
import OrderNotification from '../components/OrderNotification'
import HeroSection from '../components/HeroSection'
import FOMOSection from '../components/FOMOSection'
import VideoReviewsSection from '../components/VideoReviewsSection'
import CoachingSection from '../components/CoachingSection'
import PlansSection from '../components/PlansSection'
import ChatGLMSection from '../components/ChatGLMSection'
import HowToOrderSection from '../components/HowToOrderSection'
import PaymentProofsSection from '../components/PaymentProofsSection'
import AboutCoachSection from '../components/AboutCoachSection'
import TestimonialsSection from '../components/TestimonialsSection'
import WhatsAppCommunity from '../components/WhatsAppCommunity'
import WhatsAppCommunityBanner from '../components/WhatsAppCommunityBanner'
import PriceComparisonTable from '../components/PriceComparisonTable'
import ExitIntentPopup from '../components/ExitIntentPopup'
import ComboDeals from '../components/ComboDeals'
import CountdownTimer from '../components/CountdownTimer'
import LiveStatistics from '../components/LiveStatistics'
import SecurityBadges from '../components/SecurityBadges'
import FAQSection from '../components/FAQSection'
import ContentSection from '../components/ContentSection'
import '../components/WhatsAppCommunity.css'
import '../components/WhatsAppCommunityBanner.css'

function Home() {
  return (
    <>
      <SEO 
        title="SabkaPremium â€“ AI & OTT at Student-Friendly Prices | ChatGPT, Netflix, Canva Pro"
        description="Get ChatGPT Plus, Claude Max, Netflix 4K, Canva Pro, YouTube Premium & 20+ AI tools at lowest prices in India. Instant delivery, replacement guarantee, trusted by 5000+ users."
        keywords="ChatGPT Plus India, Netflix 4K cheap, Canva Pro discount, AI tools India, Claude Max, Gemini Ultra, YouTube Premium, Spotify Premium, Adobe Creative Cloud, cheap premium accounts, student discounts India"
      />
      <StructuredData />
      <WhatsAppCommunityBanner />
      <Header />
      <HeroSection />
      <FOMOSection />
      <VideoReviewsSection />
      {/* Main Services - User sabse pehle yahi dekhna chahta hai */}
      <PlansSection />
      <ComboDeals />
      <PriceComparisonTable />
      <ChatGLMSection />
      {/* How to Order - Simple process */}
      <HowToOrderSection />
      {/* Trust Building - Payment Proofs */}
      <PaymentProofsSection />
      <TestimonialsSection />
      {/* Extra Value - Coaching after trust is built */}
      <CoachingSection />
      <AboutCoachSection />
      {/* Community & Support */}
      <WhatsAppCommunity />
      {/* SEO Content Section - Rich content for rankings */}
      <ContentSection />
      {/* FAQ - Last doubts clear */}
      <FAQSection />
      <Footer />
      <FloatingButtons />
      <OrderNotification />
      <ExitIntentPopup />
    </>
  )
}

export default Home


