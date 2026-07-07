import { useState, useEffect } from 'react'
import { X, Cookie } from 'lucide-react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const dismiss = () => {
    localStorage.setItem('cookie-consent', 'dismissed')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[150] bg-white border-t border-black/10 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="container-main py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
            <Cookie size={20} className="text-brand-gold" />
          </div>
          <div>
            <p className="text-sm text-brand-dark">
              We use cookies to enhance your experience, analyze site traffic, and serve tailored content. By continuing to use JobLandingPro, you agree to our{' '}
              <a href="/privacy" className="text-brand-gold font-medium hover:underline">Privacy Policy</a> and{' '}
              <a href="/terms" className="text-brand-gold font-medium hover:underline">Terms of Use</a>.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
          <button
            onClick={accept}
            className="btn-primary text-sm px-5 py-2.5"
          >
            Accept All
          </button>
          <button
            onClick={dismiss}
            className="p-2 text-brand-slate hover:text-brand-dark transition-colors"
            aria-label="Dismiss"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
