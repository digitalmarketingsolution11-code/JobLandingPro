import { Link } from 'react-router-dom'
import { Home, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen bg-brand-dark flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <img src="/assets/logo.png" alt="JobLandingPro" className="w-12 h-12 object-contain" />
          <span className="text-2xl font-bold text-white">JobLanding</span>
          <span className="text-2xl font-bold text-brand-gold">Pro</span>
        </div>

        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-brand-gold leading-none">404</h1>
        <p className="text-white text-xl md:text-2xl font-semibold mt-4">Page Not Found</p>
        <p className="text-white/60 mt-3 leading-relaxed">
          The page you are looking for does not exist or has been moved. Let us help you find your way back to landing your dream job.
        </p>

        {/* Quick Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <Link to="/" className="btn-primary flex items-center gap-2 px-6 py-3">
            <Home size={18} /> Back to Homepage
          </Link>
          <Link to="/contact" className="btn-outline-white flex items-center gap-2 px-6 py-3">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm mb-4">Or try these popular pages:</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: 'Services', path: '/services' },
              { label: 'Success Stories', path: '/success-stories' },
              { label: 'Jobs', path: '/jobs' },
              { label: 'Pricing', path: '/pricing' },
              { label: 'About', path: '/about' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-brand-gold text-sm hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
