import { Link } from 'react-router-dom'
import { Mail, Twitter, Facebook, Instagram, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Success Stories', path: '/success-stories' },
  { label: 'Jobs', path: '/jobs' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
  { label: 'FAQ', path: '/faq' },
]

const serviceLinks = [
  { label: 'Done-For-You Applications', path: '/services' },
  { label: 'Hiring Manager Outreach', path: '/services' },
  { label: 'Hidden Job Sourcing', path: '/services' },
  { label: 'Interview Coordination', path: '/services' },
  { label: 'Salary Negotiation', path: '/services' },
  { label: 'Live Dashboard', path: '/services' },
]

const socialLinks = [
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-brand-dark relative">
      {/* Gradient top edge */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-brand-dark pointer-events-none" />

      <div className="container-main pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/assets/logo.png" alt="JobLandingPro" className="w-10 h-10 object-contain" />
              <div>
                <span className="text-xl font-bold text-white">JobLanding</span>
                <span className="text-xl font-bold text-brand-gold">Pro</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm mt-4 leading-relaxed">
              Your trusted reverse recruiting partner. We help professionals land their dream jobs by applying, networking, and negotiating on your behalf.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-white/60 text-sm hover:text-brand-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-white/60 text-sm hover:text-brand-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5">Contact Us</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Mail size={16} className="text-brand-gold shrink-0" />
                <a href="mailto:support@joblandingpro.com" className="hover:text-brand-gold transition-colors">
                  support@joblandingpro.com
                </a>
              </div>
            </div>

            <h4 className="text-white font-semibold text-base mb-3">Newsletter</h4>
            {subscribed ? (
              <p className="text-brand-success text-sm">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 h-11 px-4 bg-white/10 border border-white/20 rounded-l-pill text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-brand-gold"
                  required
                />
                <button
                  type="submit"
                  className="h-11 px-4 bg-brand-gold text-brand-dark rounded-r-pill hover:bg-white transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} JobLandingPro. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-white/50 text-sm">
            <Link to="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-brand-gold transition-colors">Terms of Use</Link>
            <span>|</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-success animate-pulse" />
              Always Available
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
