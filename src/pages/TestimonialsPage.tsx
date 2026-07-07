import { useEffect, useState } from 'react'
import { Play } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import TestimonialCard from '../components/TestimonialCard'
import CTABanner from '../components/CTABanner'

gsap.registerPlugin(ScrollTrigger)

const trustMetrics = [
  { number: '5,000+', label: 'Clients Placed' },
  { number: '150K+', label: 'Applications Sent' },
  { number: '98%', label: 'Interview Rate' },
  { number: '4.9/5', label: 'Client Rating' },
]

const videoTestimonials = [
  { name: 'Sarah Mitchell', title: 'Senior Product Manager', quote: 'From zero callbacks to 3 offers in 6 weeks with reverse recruiting...', thumb: '/assets/testimonial-video-thumbnail.jpg' },
  { name: 'James Rodriguez', title: 'Marketing Director', quote: 'The direct hiring manager outreach was a game changer for me...', thumb: '/assets/testimonial-avatar-1.jpg' },
  { name: 'Emily Chang', title: 'Software Engineer', quote: 'Best investment I ever made. They found me a role I never saw posted...', thumb: '/assets/testimonial-avatar-3.jpg' },
]

const allTestimonials = [
  { quote: 'I was stuck in a dead-end job for 3 years. I applied to everything myself and nothing worked. JobLandingPro applied for me, connected me directly with a VP at my dream company, and I had an offer in 5 weeks paying 40% more.', author: 'Lisa Park', title: 'HR Manager at TechStart', avatar: '/assets/testimonial-avatar-4.jpg' },
  { quote: 'The concept of reverse recruiting sounded too good to be true. But seeing my dashboard fill up with applications and watching hiring managers actually respond to their outreach proved it works. 10/10 would recommend.', author: 'Robert Hayes', title: 'Financial Analyst at Meridian Bank', avatar: '/assets/testimonial-avatar-5.jpg' },
  { quote: 'As a career changer from teaching to UX design, I was invisible to recruiters. JobLandingPro not only found companies open to career changers, but their hiring manager outreach got me interviews at places that never posted the roles publicly.', author: 'Amanda Foster', title: 'UX Designer at CreativeLabs', avatar: '/assets/testimonial-avatar-6.jpg' },
  { quote: 'I had been job searching for 8 months with zero success. Within 3 weeks of hiring JobLandingPro, I had 4 interviews. Their direct outreach to hiring managers was the difference maker. Landed a director role.', author: "Kevin O'Brien", title: 'Sales Director at GrowthCo', avatar: '/assets/testimonial-avatar-7.jpg' },
  { quote: 'My reverse recruiter found a role at a company that was not even publicly hiring yet. They connected me with the hiring manager directly, and I got the job before it ever hit a job board. That alone was worth every penny.', author: 'Nina Patel', title: 'Data Analyst at InsightCorp', avatar: '/assets/testimonial-avatar-8.jpg' },
  { quote: 'The salary negotiation was incredible. My initial offer was $90K. They negotiated it up to $115K with a $10K signing bonus. I never would have had the confidence to ask for that on my own.', author: 'Thomas Wright', title: 'Engineering Manager at BuildTech', avatar: '/assets/testimonial-avatar-9.jpg' },
  { quote: 'I loved being able to see every single application they submitted on my dashboard. Complete transparency. No wondering if they were actually doing the work. It was all right there in real-time.', author: 'Rachel Kim', title: 'Marketing Manager at BrandFirst', avatar: '/assets/testimonial-avatar-2.jpg' },
  { quote: 'I was applying to 20 jobs a week on my own with zero responses. JobLandingPro applied to 50+ roles in my first week, reached out to 15 hiring managers, and I got 3 callbacks. The volume and strategy made all the difference.', author: 'Daniel Martinez', title: 'Product Owner at InnovateTech', avatar: '/assets/testimonial-avatar-1.jpg' },
  { quote: 'If you are applying to jobs alone, you are doing it wrong. Reverse recruiting is the future of job searching. JobLandingPro changed my entire career trajectory in under 2 months.', author: 'Sophia Anderson', title: 'Operations Lead at Streamline Inc', avatar: '/assets/testimonial-avatar-3.jpg' },
]

const clientLogos = ['Google', 'Microsoft', 'Amazon', 'Salesforce', 'Deloitte', 'JP Morgan', 'Mayo Clinic', 'Adobe']

export default function TestimonialsPage() {
  const [visibleCount, setVisibleCount] = useState(9)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.animate-section').forEach((el) => {
        gsap.fromTo(el as Element, { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: el as Element, start: 'top 85%' } })
      })
      gsap.utils.toArray('.animate-grid').forEach((el) => {
        gsap.fromTo((el as Element).children, { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: el as Element, start: 'top 85%' } })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Testimonials', path: '/testimonials' }]}
        title="Success Stories"
        subtitle="Real professionals who landed dream roles through reverse recruiting"
      />

      {/* Trust Banner */}
      <section className="bg-brand-dark py-16 animate-section">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustMetrics.map((m) => (
              <div key={m.label} className="text-center">
                <span className="text-2xl md:text-4xl font-extrabold text-brand-gold">{m.number}</span>
                <p className="text-white/70 text-sm md:text-base mt-2">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="bg-white section-padding animate-section">
        <div className="container-main">
          <SectionHeader
            eyebrow="Video Stories"
            title="Hear From Our Clients"
            subtitle="Watch how reverse recruiting changed their job search"
          />
          <div className="grid md:grid-cols-3 gap-6 animate-grid">
            {videoTestimonials.map((v) => (
              <div key={v.name} className="group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <img src={v.thumb} alt={v.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-brand-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={20} className="text-brand-dark ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-brand-dark">{v.name}</h4>
                  <p className="text-brand-slate text-sm">{v.title}</p>
                  <p className="text-brand-slate text-sm italic mt-1 line-clamp-2">&ldquo;{v.quote}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="bg-brand-light-grey section-padding animate-section">
        <div className="container-main">
          <TestimonialCard
            quote="I spent 6 months applying to over 200 jobs on my own and got exactly zero interviews. I was ready to give up. Then I discovered reverse recruiting. JobLandingPro applied to 47 roles in my first week, connected me with 3 hiring managers directly, and I had my first interview 10 days later. Within 6 weeks, I had 3 offers and accepted a $135K role - $40K more than my previous job. The ROI was insane."
            author="Marcus Thompson"
            title="Senior Data Engineer at CloudScale Systems"
            featured
          />
        </div>
      </section>

      {/* Written Testimonials Grid */}
      <section className="bg-white section-padding animate-section">
        <div className="container-main">
          <SectionHeader title="What Our Clients Are Saying" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-grid">
            {allTestimonials.slice(0, visibleCount).map((t) => (
              <TestimonialCard key={t.author} {...t} />
            ))}
          </div>
          {visibleCount < allTestimonials.length + 6 && (
            <div className="text-center mt-12">
              <button onClick={() => setVisibleCount(visibleCount + 6)} className="btn-outline">
                Load More Testimonials
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Client Logos */}
      <section className="bg-brand-light-grey py-16 animate-section">
        <div className="container-main">
          <h3 className="text-xl md:text-2xl font-bold text-brand-dark text-center mb-10">
            Our Clients Get Hired At Leading Companies
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clientLogos.map((logo) => (
              <span key={logo} className="text-xl md:text-2xl font-bold text-brand-slate/40 hover:text-brand-dark transition-colors duration-300 cursor-default select-none">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Add Your Success Story?"
        description="Join 5,000+ professionals who landed their dream roles through reverse recruiting."
        buttonText="Hire Your Recruiter"
        buttonLink="/contact"
      />
    </>
  )
}
