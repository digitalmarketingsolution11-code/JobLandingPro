import { useEffect } from 'react'
import { FileText, Network, Search, MessageSquare, Handshake, BarChart3, Users, Zap, ShieldCheck, Award, Target, Clock } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import CTABanner from '../components/CTABanner'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: FileText, title: 'Strategic Job Applications',
    description: 'We submit 50+ tailored applications per week on your behalf. Every application is customized with role-specific keywords, optimized formatting, and a compelling narrative that gets past ATS filters and catches hiring manager attention.',
    deliverables: ['50+ applications/week', 'ATS-optimized submissions', 'Custom cover letters per role', 'Application tracking dashboard', 'Weekly strategy adjustments']
  },
  {
    icon: Network, title: 'Hiring Manager Outreach',
    description: 'We proactively identify and contact hiring managers, VPs, and decision-makers in your target companies. Through LinkedIn, email, and warm introductions, we get your profile directly in front of the people who make hiring decisions.',
    deliverables: ['20+ direct outreach/week', 'LinkedIn InMail campaigns', 'Warm introduction requests', 'Follow-up sequence management', 'Relationship building tracking']
  },
  {
    icon: Search, title: 'Hidden Opportunity Sourcing',
    description: 'The best jobs never get posted publicly. We tap into our recruiter network, company talent pipelines, and exclusive job channels to find opportunities that you would never discover on your own.',
    deliverables: ['Exclusive job access', 'Recruiter network connections', 'Pre-market role alerts', 'Company talent pipeline access', 'Industry-specific sourcing']
  },
  {
    icon: MessageSquare, title: 'Interview Coordination & Prep',
    description: 'When interviews come in, we handle all the scheduling logistics. Then we prepare you with company-specific intel, mock interviews, question prediction, and coaching on how to close the deal.',
    deliverables: ['Interview scheduling', 'Company research reports', 'Mock interview sessions', 'Question prediction decks', 'Post-interview follow-up strategy']
  },
  {
    icon: Handshake, title: 'Offer Negotiation & Close',
    description: 'Our recruiters negotiate your compensation package using insider market data and proven closing techniques. On average, our clients secure 15-25% higher offers than their initial proposal.',
    deliverables: ['Market salary analysis', 'Negotiation strategy calls', 'Counter-offer scripts', 'Benefits optimization', 'Signing bonus negotiation']
  },
  {
    icon: BarChart3, title: 'Live Progress Dashboard',
    description: 'Track every single application, outreach, and interview in real-time. Your personal dashboard gives you complete transparency into your reverse recruiting campaign with detailed analytics and weekly reports.',
    deliverables: ['Real-time application tracker', 'Response rate analytics', 'Weekly progress reports', 'Strategy call recordings', 'Goal milestone tracking']
  },
]

const processSteps = [
  { number: '1', title: 'Discovery & Strategy', description: 'Deep-dive call to understand your goals, skills, target companies, and ideal role. We build your custom recruiting playbook.' },
  { number: '2', title: 'Campaign Launch', description: 'We begin submitting applications, reaching out to hiring managers, and sourcing hidden opportunities within 48 hours.' },
  { number: '3', title: 'Interview Pipeline', description: 'As responses come in, we coordinate interviews, prep you with insider intel, and refine our strategy based on what is working.' },
  { number: '4', title: 'Offer & Negotiate', description: 'When offers arrive, we negotiate the best package possible. Average client sees a 15-25% higher offer than initial proposal.' },
]

const whyUs = [
  { icon: Users, title: 'Former Recruiters', desc: 'Our team used to BE the hiring managers. We know exactly what gets candidates noticed.' },
  { icon: Zap, title: '50+ Apps Per Week', desc: 'While you are busy, we are applying. Consistent, high-volume targeted applications.' },
  { icon: ShieldCheck, title: '98% Success Rate', desc: 'Nearly every client who completes our program lands interviews and gets hired.' },
  { icon: Award, title: '15-25% Higher Offers', desc: 'Our negotiation expertise means you do not just get hired, you get paid what you deserve.' },
  { icon: Target, title: 'Hidden Jobs Access', desc: 'We find roles that never get posted publicly through our recruiter network.' },
  { icon: Clock, title: '4-8 Week Average', desc: 'Most clients land their dream role in under 8 weeks. Some in as little as 3.' },
]

export default function ServicesPage() {
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
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }]}
        title="Reverse Recruiting Services"
        subtitle="Full-service job search execution. We apply, network, and negotiate for you."
      />

      {/* Services Overview */}
      <section className="bg-white section-padding animate-section">
        <div className="container-main">
          <SectionHeader
            eyebrow="What You Get"
            title="Your Complete Reverse Recruiting Team"
            subtitle="Every service is designed to get you in front of hiring managers and land your dream role"
          />
          <div className="space-y-8">
            {services.map((s, i) => (
              <div key={s.title} className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="w-16 h-16 rounded-xl bg-brand-light-blue flex items-center justify-center mb-5">
                    <s.icon size={32} className="text-brand-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-brand-dark">{s.title}</h3>
                  <p className="text-brand-slate leading-relaxed mt-3">{s.description}</p>
                  <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-brand-dark">
                        <CheckIcon /> {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-brand-light-grey rounded-xl p-8 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-4">
                    {[
                      { label: 'What We Do', value: s.title },
                      { label: 'Frequency', value: i < 2 ? 'Weekly (50+ actions)' : i < 4 ? 'As Needed' : 'Real-time' },
                      { label: 'You Do', value: i < 3 ? 'Nothing - we handle it' : i === 3 ? 'Show up & nail it' : 'Review & approve' },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between py-3 border-b border-black/5">
                        <span className="text-brand-slate text-sm">{row.label}</span>
                        <span className="text-brand-dark font-medium text-sm">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-brand-dark section-padding animate-section">
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">Our Process</p>
            <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-white leading-tight">
              From Strategy to <span className="text-brand-gold">Signed Offer</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 animate-grid">
            {processSteps.map((step, i) => (
              <div key={step.number} className="relative text-center">
                <div className="w-14 h-14 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center text-xl font-bold mx-auto">
                  {step.number}
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-[2px] bg-white/15" />
                )}
                <h3 className="text-lg font-semibold text-white mt-5">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-brand-light-grey section-padding animate-section">
        <div className="container-main">
          <SectionHeader
            eyebrow="Why JobLandingPro"
            title="The Reverse Recruiting Advantage"
            subtitle="What makes us different from any other job search service"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-grid">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-8 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-light-blue flex items-center justify-center shrink-0">
                  <item.icon size={22} className="text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark">{item.title}</h3>
                  <p className="text-brand-slate text-sm mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Put a Recruiter to Work For You?"
        description="Book a free strategy call and discover how reverse recruiting can change your job search."
        buttonText="Book a Free Strategy Call"
        buttonLink="/contact"
        secondaryButton={{ text: 'View Pricing', link: '/pricing' }}
      />
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
