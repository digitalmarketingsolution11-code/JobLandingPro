import { useState, useEffect } from 'react'

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[999] bg-brand-dark flex flex-col items-center justify-center transition-all duration-700"
      style={{ animation: 'fadeOut 0.6s ease-in-out 1.4s forwards' }}>
      {/* Logo */}
      <div className="flex items-center gap-3 animate-fade-in">
        <img src="/assets/logo.png" alt="JobLandingPro" className="w-14 h-14 object-contain animate-bounce-gentle" />
        <div>
          <span className="text-2xl font-bold text-white">JobLanding</span>
          <span className="text-2xl font-bold text-brand-gold">Pro</span>
        </div>
      </div>

      {/* Loading bar */}
      <div className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-brand-gold rounded-full animate-loading-bar" />
      </div>

      <p className="text-white/40 text-xs mt-4 animate-pulse">Loading your career success partner...</p>

      <style>{`
        @keyframes fadeOut {
          to { opacity: 0; visibility: hidden; }
        }
        @keyframes loadingBar {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        @keyframes bounceGentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-loading-bar {
          animation: loadingBar 1.3s ease-out forwards;
        }
        .animate-bounce-gentle {
          animation: bounceGentle 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
