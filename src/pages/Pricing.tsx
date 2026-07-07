import { useEffect, useState } from 'react'
import { Upload, CheckCircle, Briefcase, Network, Target, ShieldCheck, Award, BarChart3, ArrowRight, Mail } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import FAQAccordion from '../components/FAQAccordion'

gsap.registerPlugin(ScrollTrigger)

const includedServices = [
  { icon: Briefcase, title: '50+ Targeted Applications/Week', desc: 'We apply to roles matching your skills and goals, customized for each position.' },
  { icon: Network, title: 'Direct Hiring Manager Outreach', desc: 'We network directly with decision-makers who can fast-track your application.' },
  { icon: Target, title: 'Hidden Opportunity Sourcing', desc: 'Access jobs that never get posted publicly through our recruiter network.' },
  { icon: ShieldCheck, title: 'Interview Coordination & Prep', desc: 'We schedule interviews and prepare you with company-specific coaching.' },
  { icon: Award, title: 'Salary Negotiation Support', desc: 'Our recruiters negotiate the best compensation package on your behalf.' },
  { icon: BarChart3, title: 'Live Progress Dashboard', desc: 'Track every application, outreach, and interview in real-time.' },
]

const packages = [
  { name: 'Entry Level', desc: 'Recent grads & 0-2 years experience', duration: '4-6 weeks', apps: '30+ apps/week' },
  { name: 'Professional', desc: '3-8 years experience & mid-career', duration: '6-8 weeks', apps: '50+ apps/week' },
  { name: 'Executive', desc: 'Senior leaders, directors & C-suite', duration: '8-12 weeks', apps: 'Unlimited' },
]

const faqItems = [
  { question: 'How do I get my custom Job Landing Package?', answer: 'Fill out the form on this page with your details and upload your resume. Our team will review your profile, career goals, and experience level within 24 hours, then send you a personalized reverse recruiting package with pricing and a detailed strategy plan.' },
  { question: 'What happens after I submit my details?', answer: 'Within 24 hours, a dedicated reverse recruiter will review your profile and reach out via email with your custom package. This includes your recommended service tier, estimated timeline, pricing, and the strategy we will use to land your next role.' },
  { question: 'Is there any cost to get a custom package quote?', answer: 'Absolutely not. Getting your custom Job Landing Package is completely free, with no obligation. You only pay if you decide to move forward with our reverse recruiting service.' },
]

export default function Pricing() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    experience: '', targetRole: '', targetIndustry: '',
    currentSalary: '', targetSalary: '', linkedIn: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
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
      gsap.utils.toArray('.animate-grid').forEach((el) => {
        gsap.fromTo((el as Element).children, { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: el as Element, start: 'top 85%' } })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Pricing', path: '/pricing' }]}
        title="Get Your Custom Job Landing Package"
        subtitle="Tell us about yourself. We'll build a personalized reverse recruiting plan just for you."
      />

      {/* How It Works Banner */}
      <section className="bg-brand-dark py-16 animate-section">
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-14 h-14 rounded-full bg-brand-gold/20 flex items-center justify-center mx-auto">
                <span className="text-brand-gold text-2xl font-bold">1</span>
              </div>
              <h3 className="text-white font-semibold mt-4">Fill Out the Form</h3>
              <p className="text-white/60 text-sm mt-2">Share your experience, goals, and upload your resume</p>
            </div>
            <div>
              <div className="w-14 h-14 rounded-full bg-brand-gold/20 flex items-center justify-center mx-auto">
                <span className="text-brand-gold text-2xl font-bold">2</span>
              </div>
              <h3 className="text-white font-semibold mt-4">We Review Your Profile</h3>
              <p className="text-white/60 text-sm mt-2">Our recruiter assesses your needs within 24 hours</p>
            </div>
            <div>
              <div className="w-14 h-14 rounded-full bg-brand-gold/20 flex items-center justify-center mx-auto">
                <span className="text-brand-gold text-2xl font-bold">3</span>
              </div>
              <h3 className="text-white font-semibold mt-4">Receive Your Custom Package</h3>
              <p className="text-white/60 text-sm mt-2">Personalized plan with pricing sent to your email</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="bg-white section-padding animate-section">
        <div className="container-main">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="bg-brand-success/5 border border-brand-success/20 rounded-2xl p-10 md:p-14 text-center">
                  <div className="w-20 h-20 rounded-full bg-brand-success/10 flex items-center justify-center mx-auto">
                    <CheckCircle size={40} className="text-brand-success" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark mt-6">Your Job Landing Package Request is Submitted!</h3>
                  <p className="text-brand-slate mt-3 leading-relaxed max-w-lg mx-auto">
                    Our team is reviewing your profile and resume. You will receive your personalized <strong>Job Landing Package</strong> within <strong>24 hours</strong> via email at <strong>{formData.email}</strong>.
                  </p>
                  <div className="mt-8 p-5 bg-white rounded-xl border border-black/10 text-left max-w-md mx-auto">
                    <p className="text-sm text-brand-slate">Your package will include:</p>
                    <ul className="mt-3 space-y-2">
                      {['Custom reverse recruiting strategy', 'Recommended service tier', 'Estimated timeline to hire', 'Personalized pricing', 'Next steps to get started'].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-brand-dark">
                          <CheckIcon /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-brand-slate text-sm mt-6">
                    Questions? Email us at <a href="mailto:support@joblandingpro.com" className="text-brand-gold font-medium">support@joblandingpro.com</a>
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">Tell Us About Yourself</h2>
                    <p className="text-brand-slate mt-2">Complete the form below and upload your resume. We will build your custom Job Landing Package.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1.5">First Name <span className="text-brand-error">*</span></label>
                        <input name="firstName" required value={formData.firstName} onChange={handleChange} placeholder="John"
                          className="w-full h-[52px] px-5 border border-brand-slate/30 rounded-pill focus:outline-none focus:border-brand-gold text-brand-dark" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1.5">Last Name <span className="text-brand-error">*</span></label>
                        <input name="lastName" required value={formData.lastName} onChange={handleChange} placeholder="Doe"
                          className="w-full h-[52px] px-5 border border-brand-slate/30 rounded-pill focus:outline-none focus:border-brand-gold text-brand-dark" />
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1.5">Email <span className="text-brand-error">*</span></label>
                        <input name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com"
                          className="w-full h-[52px] px-5 border border-brand-slate/30 rounded-pill focus:outline-none focus:border-brand-gold text-brand-dark" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1.5">Phone</label>
                        <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000"
                          className="w-full h-[52px] px-5 border border-brand-slate/30 rounded-pill focus:outline-none focus:border-brand-gold text-brand-dark" />
                      </div>
                    </div>

                    {/* Experience & Role */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1.5">Years of Experience <span className="text-brand-error">*</span></label>
                        <select name="experience" required value={formData.experience} onChange={handleChange}
                          className="w-full h-[52px] px-5 border border-brand-slate/30 rounded-pill focus:outline-none focus:border-brand-gold text-brand-dark bg-white appearance-none">
                          <option value="">Select experience</option>
                          <option>0-2 years (Entry Level)</option>
                          <option>3-5 years (Mid Level)</option>
                          <option>6-10 years (Senior)</option>
                          <option>10+ years (Executive)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1.5">Target Role <span className="text-brand-error">*</span></label>
                        <input name="targetRole" required value={formData.targetRole} onChange={handleChange} placeholder="e.g. Senior Product Manager"
                          className="w-full h-[52px] px-5 border border-brand-slate/30 rounded-pill focus:outline-none focus:border-brand-gold text-brand-dark" />
                      </div>
                    </div>

                    {/* Industry & Salary */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1.5">Target Industry</label>
                        <select name="targetIndustry" value={formData.targetIndustry} onChange={handleChange}
                          className="w-full h-[52px] px-5 border border-brand-slate/30 rounded-pill focus:outline-none focus:border-brand-gold text-brand-dark bg-white appearance-none">
                          <option value="">Select industry</option>
                          <option>Technology</option>
                          <option>Healthcare</option>
                          <option>Finance & Banking</option>
                          <option>Marketing & Sales</option>
                          <option>Engineering</option>
                          <option>Human Resources</option>
                          <option>Operations & Logistics</option>
                          <option>Creative & Design</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1.5">Current Salary Range</label>
                        <select name="currentSalary" value={formData.currentSalary} onChange={handleChange}
                          className="w-full h-[52px] px-5 border border-brand-slate/30 rounded-pill focus:outline-none focus:border-brand-gold text-brand-dark bg-white appearance-none">
                          <option value="">Select range</option>
                          <option>Under $50K</option>
                          <option>$50K - $75K</option>
                          <option>$75K - $100K</option>
                          <option>$100K - $150K</option>
                          <option>$150K - $200K</option>
                          <option>$200K+</option>
                        </select>
                      </div>
                    </div>

                    {/* Target Salary & LinkedIn */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1.5">Target Salary Range</label>
                        <select name="targetSalary" value={formData.targetSalary} onChange={handleChange}
                          className="w-full h-[52px] px-5 border border-brand-slate/30 rounded-pill focus:outline-none focus:border-brand-gold text-brand-dark bg-white appearance-none">
                          <option value="">Select range</option>
                          <option>$50K - $75K</option>
                          <option>$75K - $100K</option>
                          <option>$100K - $150K</option>
                          <option>$150K - $200K</option>
                          <option>$200K - $300K</option>
                          <option>$300K+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1.5">LinkedIn Profile URL</label>
                        <input name="linkedIn" type="url" value={formData.linkedIn} onChange={handleChange} placeholder="https://linkedin.com/in/yourprofile"
                          className="w-full h-[52px] px-5 border border-brand-slate/30 rounded-pill focus:outline-none focus:border-brand-gold text-brand-dark" />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">Tell Us About Your Goals</label>
                      <textarea name="message" rows={4} value={formData.message} onChange={handleChange}
                        placeholder="What kind of role are you looking for? Any target companies? What has your job search been like so far?"
                        className="w-full px-5 py-4 border border-brand-slate/30 rounded-2xl focus:outline-none focus:border-brand-gold text-brand-dark resize-none" />
                    </div>

                    {/* Resume Upload */}
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">Upload Your Resume <span className="text-brand-error">*</span></label>
                      <div className="border-2 border-dashed border-brand-slate/25 rounded-xl p-8 text-center hover:border-brand-gold transition-colors cursor-pointer bg-brand-light-grey/30">
                        <Upload size={32} className="text-brand-slate mx-auto mb-3" />
                        <p className="text-brand-dark font-medium">Click to upload or drag and drop</p>
                        <p className="text-brand-slate text-sm mt-1">PDF, DOC, DOCX up to 5MB</p>
                      </div>
                      <p className="text-xs text-brand-slate mt-2">Your resume helps us build the most accurate Job Landing Package for your experience and skills.</p>
                    </div>

                    <button type="submit" className="btn-primary w-full py-4 text-base flex items-center justify-center gap-2">
                      Get My Custom Job Landing Package <ArrowRight size={18} />
                    </button>
                    <p className="text-xs text-brand-slate text-center">
                      No obligation. Free assessment. We will never share your information.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* What's Included */}
              <div className="bg-brand-light-grey rounded-xl p-6">
                <h4 className="font-semibold text-brand-dark mb-4">What's Included in Your Package</h4>
                <div className="space-y-4">
                  {includedServices.map((s) => (
                    <div key={s.title} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center shrink-0">
                        <s.icon size={18} className="text-brand-gold" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-brand-dark">{s.title}</p>
                        <p className="text-xs text-brand-slate leading-relaxed mt-0.5">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package Types */}
              <div className="bg-brand-dark rounded-xl p-6">
                <h4 className="font-semibold text-white mb-4">We Customize For Every Level</h4>
                <div className="space-y-3">
                  {packages.map((pkg) => (
                    <div key={pkg.name} className="bg-white/10 rounded-lg p-4">
                      <p className="text-white font-semibold text-sm">{pkg.name}</p>
                      <p className="text-white/50 text-xs mt-0.5">{pkg.desc}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs">
                        <span className="text-brand-gold">{pkg.duration}</span>
                        <span className="text-white/40">·</span>
                        <span className="text-white/60">{pkg.apps}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-white/40 text-xs mt-4">Pricing is customized based on your experience, goals, and timeline.</p>
              </div>

              {/* Trust Box */}
              <div className="bg-brand-success/5 border border-brand-success/20 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck size={18} className="text-brand-success" />
                  <span className="font-semibold text-brand-dark text-sm">100% Free Assessment</span>
                </div>
                <p className="text-brand-slate text-sm">Getting your custom Job Landing Package quote is completely free. No credit card required. No obligation to purchase.</p>
              </div>

              {/* Contact */}
              <div className="border border-black/10 rounded-xl p-6 text-center">
                <Mail size={24} className="text-brand-gold mx-auto mb-2" />
                <p className="text-sm text-brand-slate">Prefer to talk first?</p>
                <a href="mailto:support@joblandingpro.com" className="text-brand-gold font-semibold text-sm hover:underline">support@joblandingpro.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-light-grey py-20 animate-section">
        <div className="container-main max-w-3xl">
          <SectionHeader title="Common Questions" />
          <FAQAccordion items={faqItems} />
        </div>
      </section>
    </>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" className="shrink-0">
      <circle cx="8" cy="8" r="8" fill="#E7FBFC" />
      <path d="M5 8L7 10L11 6" stroke="#28A745" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
