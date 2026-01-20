import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'
import OrderNotification from '../components/OrderNotification'
import HeroSection from '../components/HeroSection'
import FOMOSection from '../components/FOMOSection'
import PromoSection from '../components/PromoSection'
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
import '../components/WhatsAppCommunity.css'
import '../components/WhatsAppCommunityBanner.css'

function Home() {
  return (
    <>
      <WhatsAppCommunityBanner />
      <Header />
      <HeroSection />
      <FOMOSection />
      <PromoSection />
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
