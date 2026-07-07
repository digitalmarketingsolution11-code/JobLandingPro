import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import TopNavigation from './components/TopNavigation'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppChat from './components/WhatsAppChat'
import CookieConsent from './components/CookieConsent'
import Preloader from './components/Preloader'
import SchemaOrg from './components/SchemaOrg'
import Home from './pages/Home'
import About from './pages/About'
import ServicesPage from './pages/ServicesPage'
import Pricing from './pages/Pricing'
import TestimonialsPage from './pages/TestimonialsPage'
import Blog from './pages/Blog'
import Jobs from './pages/Jobs'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import SuccessStories from './pages/SuccessStories'
import NotFound from './pages/NotFound'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <SchemaOrg />
      <Preloader />
      <ScrollToTopOnRouteChange />
      <TopNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppChat />
      <CookieConsent />
    </>
  )
}
