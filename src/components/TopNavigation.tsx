import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Success Stories', path: '/success-stories' },
  { label: 'Jobs', path: '/jobs' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function TopNavigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[99] transition-all duration-300 ${
          scrolled ? 'bg-brand-dark shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container-main flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/assets/logo.png"
              alt="JobLandingPro"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-white hidden sm:block">JobLanding</span>
            <span className="text-xl font-bold text-brand-gold hidden sm:block">Pro</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[14px] font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-brand-gold'
                    : 'text-white/90 hover:text-brand-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex btn-primary text-sm px-5 py-2.5"
          >
            Get Started
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-[340px] max-w-[85vw] bg-brand-dark shadow-2xl transition-transform duration-400 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
              <img src="/assets/logo.png" alt="JobLandingPro" className="w-9 h-9 object-contain" />
              <span className="text-lg font-bold text-white">JobLanding</span>
              <span className="text-lg font-bold text-brand-gold">Pro</span>
            </Link>
            <button
              className="text-white p-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="p-6 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-3 px-4 text-base font-medium rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? 'text-brand-gold bg-white/5'
                    : 'text-white/80 hover:text-brand-gold hover:bg-white/5'
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-white/10">
              <Link
                to="/contact"
                className="btn-primary w-full text-center"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
