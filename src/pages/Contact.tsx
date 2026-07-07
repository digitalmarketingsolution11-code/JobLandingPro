import { useEffect, useState } from 'react'
import { Mail, Clock, Calendar, CheckCircle, Twitter, Facebook, Instagram, MessageCircle } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const [formState, setFormState] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    serviceInterest: '', subject: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.animate-section').forEach((el) => {
        gsap.fromTo(el as Element, { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: el as Element, start: 'top 85%' } })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Contact', path: '/contact' }]}
        title="Get in Touch"
        subtitle="We are always available to help you take the next step in your career"
      />

      {/* Contact Form & Info */}
      <section className="bg-white section-padding animate-section">
        <div className="container-main">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="bg-brand-success/5 border border-brand-success/20 rounded-2xl p-10 md:p-14 text-center">
                  <div className="w-20 h-20 rounded-full bg-brand-success/10 flex items-center justify-center mx-auto">
                    <CheckCircle size={40} className="text-brand-success" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark mt-6">Message Sent!</h3>
                  <p className="text-brand-slate mt-3 leading-relaxed">
                    Thank you for reaching out. We will get back to you within 24 hours. Use the WhatsApp chat button at the bottom left for instant replies.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl md:text-2xl font-semibold text-brand-dark">Send Us a Message</h2>
                  <p className="text-brand-slate mt-2">Fill out the form below and we will respond within 24 hours</p>

                  <form onSubmit={handleSubmit} className="mt-8">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1.5">First Name <span className="text-brand-error">*</span></label>
                        <input name="firstName" required value={formState.firstName} onChange={handleChange}
                          placeholder="First Name"
                          className="w-full h-[52px] px-5 border border-brand-slate/30 rounded-pill focus:outline-none focus:border-brand-gold text-brand-dark" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1.5">Last Name <span className="text-brand-error">*</span></label>
                        <input name="lastName" required value={formState.lastName} onChange={handleChange}
                          placeholder="Last Name"
                          className="w-full h-[52px] px-5 border border-brand-slate/30 rounded-pill focus:outline-none focus:border-brand-gold text-brand-dark" />
                      </div>
                    </div>
                    <div className="mt-5">
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">Email <span className="text-brand-error">*</span></label>
                      <input name="email" type="email" required value={formState.email} onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full h-[52px] px-5 border border-brand-slate/30 rounded-pill focus:outline-none focus:border-brand-gold text-brand-dark" />
                    </div>
                    <div className="mt-5">
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">Phone (WhatsApp Preferred)</label>
                      <input name="phone" type="tel" value={formState.phone} onChange={handleChange}
                        placeholder="Your WhatsApp number"
                        className="w-full h-[52px] px-5 border border-brand-slate/30 rounded-pill focus:outline-none focus:border-brand-gold text-brand-dark" />
                    </div>
                    <div className="mt-5">
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">Service Interest</label>
                      <select name="serviceInterest" value={formState.serviceInterest} onChange={handleChange}
                        className="w-full h-[52px] px-5 border border-brand-slate/30 rounded-pill focus:outline-none focus:border-brand-gold text-brand-dark bg-white appearance-none">
                        <option value="">Which service are you interested in?</option>
                        <option>Reverse Recruiting - Starter</option>
                        <option>Reverse Recruiting - Professional</option>
                        <option>Reverse Recruiting - Executive</option>
                        <option>Job Search Strategy</option>
                        <option>Interview Preparation</option>
                        <option>Salary Negotiation</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                    <div className="mt-5">
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">Subject <span className="text-brand-error">*</span></label>
                      <input name="subject" required value={formState.subject} onChange={handleChange}
                        placeholder="Subject"
                        className="w-full h-[52px] px-5 border border-brand-slate/30 rounded-pill focus:outline-none focus:border-brand-gold text-brand-dark" />
                    </div>
                    <div className="mt-5">
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">Message <span className="text-brand-error">*</span></label>
                      <textarea name="message" required value={formState.message} onChange={handleChange}
                        placeholder="Tell us about your career goals and how we can help..."
                        rows={5}
                        className="w-full px-5 py-4 border border-brand-slate/30 rounded-2xl focus:outline-none focus:border-brand-gold text-brand-dark resize-none" />
                    </div>
                    <button type="submit" className="btn-primary w-full mt-6 py-4">Send Message</button>
                  </form>
                </>
              )}
            </div>

            {/* Sidebar Info - Email Only */}
            <div className="bg-brand-dark rounded-xl p-8 md:p-10 text-white h-fit lg:sticky lg:top-24">
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Email Us</p>
                    <a href="mailto:support@joblandingpro.com" className="text-white hover:text-brand-gold transition-colors font-medium">support@joblandingpro.com</a>
                    <p className="text-white/40 text-xs mt-1">We reply within 24 hours</p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Response Time</p>
                    <p className="text-white font-medium">Usually within minutes</p>
                    <p className="text-white/40 text-xs mt-1">We are always here for you</p>
                  </div>
                </div>

                {/* Book a Call */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0">
                    <Calendar size={20} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Book a Free Call</p>
                    <p className="text-white text-sm">Schedule a 30-min consultation</p>
                    <a
                      href="https://wa.me/2348021458021?text=Hi%20JobLandingPro!%20I%20want%20to%20book%20a%20free%20consultation%20call."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block btn-primary text-xs mt-3 px-5 py-2"
                    >
                      Book via WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/50 text-sm mb-4">Follow Us</p>
                <div className="flex items-center gap-3">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark transition-all"
                    aria-label="Twitter"><Twitter size={16} /></a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark transition-all"
                    aria-label="Facebook"><Facebook size={16} /></a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark transition-all"
                    aria-label="Instagram"><Instagram size={16} /></a>
                </div>
              </div>

              {/* WhatsApp hint - just a nudge, no number */}
              <div className="mt-6 p-4 rounded-xl border border-white/10 text-center" style={{ backgroundColor: 'rgba(37, 211, 102, 0.1)' }}>
                <MessageCircle size={20} className="text-white/60 mx-auto mb-2" />
                <p className="text-white/60 text-xs">Need instant help? Use the WhatsApp chat button at the bottom of the page.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="We Are Always Here to Help"
        description="Send us an email or use the WhatsApp chat button for instant replies. Your career success is our priority."
        buttonText="Send an Email"
        buttonLink="mailto:support@joblandingpro.com"
      />
    </>
  )
}
