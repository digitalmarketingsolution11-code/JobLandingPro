import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import {
  ArrowRight, ChevronDown, Laptop, HeartPulse, TrendingUp, Megaphone,
  Wrench, Users, Truck, Palette, Briefcase, Target, Network, ShieldCheck,
  Award, MessageSquare
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import BlogCard from '../components/BlogCard'
import JobCard from '../components/JobCard'
import CTABanner from '../components/CTABanner'
import SuccessStoryCard from '../components/SuccessStoryCard'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  { icon: Laptop, name: 'Technology & IT', count: '1,240 Openings' },
  { icon: HeartPulse, name: 'Healthcare & Medical', count: '856 Openings' },
  { icon: TrendingUp, name: 'Finance & Banking', count: '642 Openings' },
  { icon: Megaphone, name: 'Marketing & Sales', count: '938 Openings' },
  { icon: Wrench, name: 'Engineering', count: '724 Openings' },
  { icon: Users, name: 'Human Resources', count: '512 Openings' },
  { icon: Truck, name: 'Operations & Logistics', count: '631 Openings' },
  { icon: Palette, name: 'Creative & Design', count: '489 Openings' },
]

const services = [
  {
    icon: Briefcase, title: 'Done-For-You Job Applications',
    description: 'We apply to 50+ targeted jobs per week on your behalf. No more spending hours on job boards. Our team handles every application, customized to each role.'
  },
  {
    icon: Network, title: 'Direct Hiring Manager Outreach',
    description: 'We proactively network with hiring managers and recruiters in your target industry. Direct introductions that bypass the application black hole.'
  },
  {
    icon: Target, title: 'Targeted Job Search Strategy',
    description: 'We identify hidden opportunities, niche roles, and companies that match your skills and career goals. Strategic targeting that gets results.'
  },
  {
    icon: ShieldCheck, title: 'Interview Scheduling & Prep',
    description: 'When interviews come in, we coordinate scheduling and provide you with company-specific preparation. Walk in confident and ready to win.'
  },
  {
    icon: Award, title: 'Salary Negotiation Support',
    description: 'Our recruiters negotiate on your behalf to secure the best compensation package. Market data, counter-offers, and closing strategies included.'
  },
  {
    icon: MessageSquare, title: 'Personal Recruiter Dashboard',
    description: 'Track every application, outreach, and interview in real-time. Weekly strategy calls with your dedicated reverse recruiter keep you in the loop.'
  },
]

const featuredJobs = [
  { title: 'Senior Software Engineer', company: 'TechCorp Solutions', location: 'Remote', salary: '$120K - $160K', type: 'Full-time', tags: ['Technology', 'Remote'] },
  { title: 'Marketing Director', company: 'GrowthBrand Inc', location: 'New York, NY', salary: '$100K - $140K', type: 'Full-time', tags: ['Marketing', 'Senior'] },
  { title: 'Registered Nurse', company: 'City Medical Center', location: 'Chicago, IL', salary: '$75K - $95K', type: 'Full-time', tags: ['Healthcare', 'Hospital'] },
  { title: 'Financial Analyst', company: 'Meridian Finance', location: 'Boston, MA', salary: '$80K - $110K', type: 'Full-time', tags: ['Finance', 'Analytics'] },
  { title: 'UX/UI Designer', company: 'Creative Studio X', location: 'San Francisco, CA', salary: '$90K - $130K', type: 'Full-time', tags: ['Design', 'Tech'] },
  { title: 'Operations Manager', company: 'LogiChain Partners', location: 'Austin, TX', salary: '$85K - $115K', type: 'Full-time', tags: ['Operations', 'Management'] },
]

const testimonials = [
  {
    quote: 'I applied to over 200 jobs on my own and got zero responses. JobLandingPro applied for me, and within 3 weeks I had 5 interviews lined up. Best investment I ever made.',
    author: 'Michael Torres',
    title: 'Software Engineer at TechGiant',
    avatar: '/assets/testimonial-avatar-1.jpg'
  },
  {
    quote: 'Having a personal recruiter working FOR me changed everything. They connected me directly with a hiring manager who wasn\'t even posting the job publicly. Landed in 6 weeks.',
    author: 'Jennifer Walsh',
    title: 'Marketing Director at BrandCo',
    avatar: '/assets/testimonial-avatar-2.jpg'
  },
  {
    quote: 'The dashboard is incredible - I could see every application they submitted and every recruiter they contacted. Complete transparency. Got 3 offers and chose my dream role.',
    author: 'David Chen',
    title: 'Data Scientist at AnalyticsPro',
    avatar: '/assets/testimonial-avatar-3.jpg'
  },
]

const blogPosts = [
  { image: '/assets/blog-resume-ats.jpg', category: 'Reverse Recruiting', title: 'What Is Reverse Recruiting and Why It Works in 2026', excerpt: 'Discover why top professionals are hiring reverse recruiters to land jobs faster...', readTime: '6 min read', date: 'Dec 10, 2025' },
  { image: '/assets/blog-salary-negotiation.jpg', category: 'Career Strategy', title: 'How to Negotiate a $20K Higher Salary', excerpt: 'Expert negotiation tactics from recruiters who close deals every day...', readTime: '8 min read', date: 'Dec 5, 2025' },
  { image: '/assets/blog-linkedin-mistakes.jpg', category: 'Job Search', title: 'Why Your Job Applications Are Being Ignored', excerpt: 'The hidden reasons 95% of online applications never get seen by a human...', readTime: '5 min read', date: 'Nov 28, 2025' },
]

const howItWorks = [
  { step: '1', title: 'We Learn About You', desc: 'Share your goals, experience, and target roles. Your dedicated reverse recruiter builds your strategy.' },
  { step: '2', title: 'We Apply For You', desc: 'Our team submits tailored applications to 50+ roles weekly. Every app is customized for the position.' },
  { step: '3', title: 'We Network For You', desc: 'We reach out directly to hiring managers and recruiters, bypassing the online application black hole.' },
  { step: '4', title: 'You Get Interviews', desc: 'Interviews start rolling in. We prep you, negotiate for you, and help you land the offer.' },
]

const successStories = [
  {
    name: 'Sarah Mitchell', title: 'Senior Product Manager', previousRole: 'Product Manager at unknown startup',
    newRole: 'Senior PM at Fortune 500', company: 'Fortune 500 Co', timeline: '5 weeks', salaryIncrease: '+$45K',
    quote: 'I applied to 200+ jobs alone with zero callbacks. JobLandingPro connected me directly with a VP who was not even publicly hiring. Had 3 interviews and an offer in 5 weeks.',
    avatar: '/assets/testimonial-avatar-4.jpg', tag: 'Career Upgrade'
  },
  {
    name: 'Marcus Thompson', title: 'Data Engineer', previousRole: 'Unemployed for 8 months',
    newRole: 'Senior Data Engineer', company: 'CloudScale Systems', timeline: '6 weeks', salaryIncrease: '+$40K',
    quote: 'Eight months of applying alone got me nowhere. They applied to 47 roles in week one, reached out to 15 hiring managers directly, and I had interviews within 10 days.',
    avatar: '/assets/testimonial-avatar-9.jpg', tag: 'Breakthrough Hire'
  },
  {
    name: 'Jennifer Walsh', title: 'Marketing Director', previousRole: 'Mid-level Marketing Manager',
    newRole: 'Director of Marketing', company: 'BrandCo', timeline: '4 weeks', salaryIncrease: '+$35K',
    quote: 'Their direct outreach to hiring managers was the game changer. They got me in front of a CMO who was building a team quietly. I got the director role before it ever hit a job board.',
    avatar: '/assets/testimonial-avatar-2.jpg', tag: 'Hidden Opportunity'
  },
  {
    name: 'David Chen', title: 'Software Engineer', previousRole: 'Junior Developer at small agency',
    newRole: 'Full-Stack Engineer', company: 'TechGiant', timeline: '7 weeks', salaryIncrease: '+$38K',
    quote: 'The dashboard showed me every application and every outreach in real-time. Complete transparency. They found me a role I never would have discovered on my own.',
    avatar: '/assets/testimonial-avatar-3.jpg', tag: 'Level Jump'
  },
  {
    name: 'Amanda Foster', title: 'UX Designer', previousRole: 'High School Teacher (career change)',
    newRole: 'Senior UX Designer', company: 'CreativeLabs', timeline: '8 weeks', salaryIncrease: '+$50K',
    quote: 'I was a teacher trying to break into UX. They found companies open to career changers and their outreach got me interviews for roles that were not even posted. Changed my life.',
    avatar: '/assets/testimonial-avatar-6.jpg', tag: 'Career Change'
  },
  {
    name: 'Kevin O\'Brien', title: 'Sales Director', previousRole: 'Individual Contributor, $85K base',
    newRole: 'Sales Director', company: 'GrowthCo', timeline: '5 weeks', salaryIncrease: '+$55K',
    quote: 'They did not just get me a job, they got me the RIGHT job. The salary negotiation alone added $20K to my offer. I would have accepted the first number without them.',
    avatar: '/assets/testimonial-avatar-7.jpg', tag: 'Executive Placement'
  },
]

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroContentRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', delay: 0.3 }
      )

      const sections = document.querySelectorAll('.animate-section')
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
            scrollTrigger: { trigger: section, start: 'top 85%', toggleActions: 'play none none none' }
          }
        )
      })

      const grids = document.querySelectorAll('.animate-grid')
      grids.forEach((grid) => {
        gsap.fromTo(
          grid.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
            scrollTrigger: { trigger: grid, start: 'top 85%', toggleActions: 'play none none none' }
          }
        )
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/assets/hero-main.jpg" alt="Professional recruiter" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-overlay" />
          <div className="absolute inset-0 bg-brand-dark/30" />
        </div>

        <div ref={heroContentRef} className="container-main relative z-10 text-center pt-20">
          <span className="inline-block bg-brand-gold/20 backdrop-blur-sm border border-brand-gold/40 text-brand-gold text-sm font-semibold px-5 py-2 rounded-pill mb-6">
            #1 Reverse Recruiting Service
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-tight max-w-5xl mx-auto">
            Your Personal Recruiter. <br className="hidden md:block" />
            <span className="text-brand-gold">We Apply. You Get Hired.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mt-6 leading-relaxed">
            Stop applying to hundreds of jobs with zero response. Our reverse recruiters apply to targeted roles, network with hiring managers, and land interviews on your behalf.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Hire Your Recruiter <ArrowRight size={18} />
            </Link>
            <Link to="/jobs" className="btn-outline-white text-base px-8 py-4">
              Browse Open Jobs
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-12 text-white/70 text-sm">
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-brand-gold" /> 5,000+ Clients Placed</span>
            <span className="flex items-center gap-2"><Target size={16} className="text-brand-gold" /> 98% Success Rate</span>
            <span className="flex items-center gap-2"><Award size={16} className="text-brand-gold" /> 4.9/5 Rating</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 flex flex-col items-center gap-2">
          <span className="text-xs">Scroll to explore</span>
          <ChevronDown size={20} className="animate-bounce-down" />
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="bg-brand-dark section-padding animate-section">
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">How Reverse Recruiting Works</p>
            <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-white leading-tight">
              We Do the Hard Work. <span className="text-brand-gold">You Get the Job.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-grid">
            {howItWorks.map((item, i) => (
              <div key={item.step} className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center text-2xl font-bold mx-auto">
                  {item.step}
                </div>
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-white/15" />
                )}
                <h3 className="text-lg font-semibold text-white mt-5">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== JOB CATEGORIES ===== */}
      <section className="bg-white section-padding animate-section">
        <div className="container-main">
          <SectionHeader
            eyebrow="Browse Opportunities"
            title="Explore Job Categories"
            subtitle="Search and apply to real openings across every major industry"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-grid">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to="/jobs"
                className="flex flex-col items-center text-center p-6 border border-brand-slate/15 rounded-xl bg-white hover:border-brand-gold hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <cat.icon size={36} className="text-brand-dark group-hover:text-brand-gold transition-colors" strokeWidth={1.5} />
                <span className="text-brand-dark font-semibold text-sm md:text-base mt-3">{cat.name}</span>
                <span className="text-brand-slate text-xs md:text-sm mt-1">{cat.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT TEASER ===== */}
      <section className="bg-white section-padding animate-section">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">Why Reverse Recruiting?</p>
              <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-brand-dark leading-tight">
                Stop Applying Into the Void. <br />
                <span className="text-brand-gold">Let a Pro Recruiter Work For You.</span>
              </h2>
              <p className="text-brand-slate leading-relaxed mt-6">
                The average job seeker applies to 100+ positions before getting a single interview. Why? Because online applications are filtered by AI before a human ever sees them. At JobLandingPro, we flip the script.
              </p>
              <p className="text-brand-slate leading-relaxed mt-4">
                Our reverse recruiters apply strategically, network directly with decision-makers, and use insider recruitment techniques to get your profile in front of the right people. You focus on nailing the interview. We handle everything else.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/about" className="btn-primary inline-flex">Learn More <ArrowRight size={18} /></Link>
                <Link to="/services" className="btn-outline inline-flex">Our Process</Link>
              </div>
            </div>
            <div className="relative">
              <img src="/assets/about-professional.jpg" alt="Reverse recruiting session" className="rounded-xl w-full object-cover" />
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-5 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-brand-gold">50+</p>
                    <p className="text-xs text-brand-slate">Apps/Week</p>
                  </div>
                  <div className="w-px h-10 bg-black/10" />
                  <div className="text-center">
                    <p className="text-2xl font-bold text-brand-gold">3x</p>
                    <p className="text-xs text-brand-slate">Faster Results</p>
                  </div>
                  <div className="w-px h-10 bg-black/10" />
                  <div className="text-center">
                    <p className="text-2xl font-bold text-brand-gold">98%</p>
                    <p className="text-xs text-brand-slate">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="bg-brand-light-grey section-padding animate-section">
        <div className="container-main">
          <SectionHeader
            eyebrow="What You Get"
            title="Your Full-Service Reverse Recruiting Team"
            subtitle="Everything you need to land your dream job, without lifting a finger"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-grid">
            {services.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUCCESS STORIES ===== */}
      <section className="bg-brand-light-grey section-padding animate-section">
        <div className="container-main">
          <SectionHeader
            eyebrow="Real Results"
            title="Success Stories: Before & After Reverse Recruiting"
            subtitle="See how real professionals transformed their careers by hiring a reverse recruiter"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-grid">
            {successStories.map((story) => (
              <SuccessStoryCard key={story.name} {...story} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/success-stories" className="btn-primary inline-flex">
              View All Success Stories <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURED JOBS ===== */}
      <section className="bg-white section-padding animate-section">
        <div className="container-main">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="eyebrow mb-2">Live Job Board</p>
              <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-brand-dark">
                Featured Opportunities
              </h2>
            </div>
            <Link to="/jobs" className="text-brand-gold font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              View All Jobs <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-grid">
            {featuredJobs.map((job) => (
              <JobCard key={job.title} {...job} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-brand-light-grey section-padding animate-section">
        <div className="container-main">
          <SectionHeader
            eyebrow="Real Results"
            title="Clients Who Landed Jobs Through Reverse Recruiting"
            subtitle="Real stories from professionals who stopped applying alone and started winning"
          />
          <div className="mb-8">
            <TestimonialCard
              quote="I was skeptical about reverse recruiting at first. But after 4 months of zero callbacks applying on my own, I gave JobLandingPro a shot. They applied to roles I never would have found, connected me with a VP directly, and I had an offer within 5 weeks. Unreal."
              author="Sarah Mitchell"
              title="Senior Product Manager at Fortune 500 Co"
              featured
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6 animate-grid">
            {testimonials.map((t) => (
              <TestimonialCard key={t.author} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOG PREVIEW ===== */}
      <section className="bg-white section-padding animate-section">
        <div className="container-main">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-brand-dark">
              Recruiting Insights
            </h2>
            <Link to="/blog" className="text-brand-gold font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              View All Articles <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-grid">
            {blogPosts.map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <CTABanner
        heading="Ready to Stop Applying Alone?"
        description="Hire your personal reverse recruiter today. We apply, network, and negotiate for you. You show up and nail the interview."
        buttonText="Hire Your Recruiter"
        buttonLink="/contact"
      />
    </>
  )
}
