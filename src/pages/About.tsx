import { useEffect } from 'react'
import { Heart, Eye, TrendingUp, Target, Linkedin, Twitter, Briefcase, Network, ShieldCheck, Award, Quote } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import CTABanner from '../components/CTABanner'
import { useCountUp } from '../hooks/useCountUp'

gsap.registerPlugin(ScrollTrigger)

const values = [
  { icon: Heart, title: 'Job Seekers First', description: 'Unlike traditional recruiters who work for employers, we work exclusively for YOU. Your success is our only metric.' },
  { icon: Eye, title: 'Radical Transparency', description: 'See every application we submit, every email we send, and every connection we make. Full visibility into your job search.' },
  { icon: TrendingUp, title: 'Data-Driven Strategy', description: 'We track what works. Which roles respond, which outreach converts, and optimize your campaign weekly for maximum results.' },
  { icon: Target, title: 'Results Guaranteed', description: 'We measure success by one thing: you getting hired. Our 98% success rate speaks for itself.' },
]

function CounterStat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(end, 2000)
  return (
    <div ref={ref} className="text-center">
      <span className="text-3xl md:text-5xl font-extrabold text-brand-gold">{count.toLocaleString()}{suffix}</span>
      <p className="text-white/70 text-sm md:text-base mt-2">{label}</p>
    </div>
  )
}

export default function About() {
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
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }]}
        title="About JobLandingPro"
        subtitle="The reverse recruiting agency that puts job seekers first"
      />

      {/* Our Story */}
      <section className="bg-white section-padding animate-section">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">Our Story</p>
              <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-brand-dark leading-tight">
                We Flipped the Recruiting Model. <span className="text-brand-gold">You Win.</span>
              </h2>
              <p className="text-brand-slate leading-relaxed mt-6">
                Traditional recruiters work for employers. They get paid by companies to fill roles. That is why your application sits in a black hole for weeks. We saw this broken system and decided to fix it.
              </p>
              <p className="text-brand-slate leading-relaxed mt-4">
                JobLandingPro is the first reverse recruiting agency built exclusively for job seekers. We work FOR you, not for employers. We apply to jobs on your behalf, network directly with hiring managers, and use insider recruitment strategies to get you interviews that others never even know about.
              </p>
              <p className="text-brand-slate leading-relaxed mt-4">
                Since 2018, we have placed over 5,000 professionals in roles they love. Founded by a former recruiter who saw the system was rigged against job seekers, we have made it our mission to put the power back where it belongs: in your hands.
              </p>
            </div>
            <div>
              <img src="/assets/about-story.jpg" alt="JobLandingPro team at work" className="rounded-xl w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Reverse Recruiting */}
      <section className="bg-brand-dark section-padding animate-section">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">The Problem</p>
              <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-white leading-tight">
                The Job Market Is Broken. <br />
                <span className="text-brand-gold">We Fixed It.</span>
              </h2>
              <div className="space-y-5 mt-8">
                {[
                  { icon: Briefcase, title: 'ATS Filters Reject 75% of Resumes', desc: 'Before a human sees your application, AI scans and rejects it for missing keywords.' },
                  { icon: Network, title: 'Networking Is Everything', desc: '80% of jobs are filled through referrals and direct connections, not job boards.' },
                  { icon: ShieldCheck, title: 'You Compete With 250+ Applicants', desc: 'Every posted role gets hundreds of applications. Standing out is nearly impossible alone.' },
                  { icon: Award, title: 'Recruiters Know the Insider Game', desc: 'We know which hiring managers are actually hiring, what they want, and how to get you in front of them.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-gold/20 flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                      <p className="text-white/60 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Traditional vs. Reverse Recruiting</h3>
              <div className="space-y-4">
                {[
                  { label: 'Who They Work For', trad: 'Employers', rev: 'YOU (The Job Seeker)' },
                  { label: 'Who Pays Them', trad: 'The Company', rev: 'You (Affordable Fee)' },
                  { label: 'How Jobs Are Found', trad: 'You apply alone', rev: 'Recruiter finds + applies for you' },
                  { label: 'Networking', trad: 'None', rev: 'Direct hiring manager outreach' },
                  { label: 'Success Rate', trad: '~2% get interviews', rev: '98% land interviews' },
                  { label: 'Time to Hire', trad: '6-9 months average', rev: '4-8 weeks average' },
                ].map((row) => (
                  <div key={row.label} className="grid grid-cols-[1fr_1fr_1fr] gap-2 text-sm">
                    <span className="text-white/50">{row.label}</span>
                    <span className="text-brand-error">{row.trad}</span>
                    <span className="text-brand-success font-medium">{row.rev}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-brand-light-grey section-padding animate-section">
        <div className="container-main">
          <SectionHeader
            eyebrow="Our Principles"
            title="What Drives Us"
            subtitle="The principles that guide every decision we make"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-grid">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-8 md:p-10">
                <div className="w-14 h-14 rounded-full bg-brand-light-blue flex items-center justify-center">
                  <v.icon size={28} className="text-brand-gold" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mt-5">{v.title}</h3>
                <p className="text-brand-slate text-sm leading-relaxed mt-2">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-brand-dark py-20 animate-section">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CounterStat end={5000} suffix="+" label="Clients Placed" />
            <CounterStat end={150} suffix="K+" label="Applications Submitted" />
            <CounterStat end={98} suffix="%" label="Interview Rate" />
            <CounterStat end={49} suffix="/5" label="Client Rating" />
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-white section-padding animate-section">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="eyebrow mb-4">Meet the Founder</p>
              <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-brand-dark leading-tight">
                Atolagbe Abdulazeez
              </h2>
              <p className="text-brand-gold font-semibold text-lg mt-2">Founder & CEO, JobLandingPro</p>

              <div className="mt-6 relative">
                <Quote size={32} className="text-brand-gold/20 absolute -top-2 -left-2" />
                <p className="text-brand-slate leading-relaxed pl-4">
                  I started JobLandingPro because I was tired of seeing talented people struggle to get noticed. As a recruiter, I watched amazing candidates get rejected by AI filters while mediocre ones got through because they knew the tricks. I built this company to level the playing field.
                </p>
              </div>

              <p className="text-brand-slate leading-relaxed mt-4">
                With years of experience in recruitment and talent acquisition, I have seen both sides of the hiring process. I know what hiring managers really look for, how ATS systems filter candidates, and most importantly, how to get your profile in front of the right people at the right time.
              </p>
              <p className="text-brand-slate leading-relaxed mt-4">
                At JobLandingPro, we do not just write resumes or give advice. We roll up our sleeves and do the work. We apply for you. We network for you. We negotiate for you. Our mission is simple: help you land the job you deserve, faster.
              </p>

              <div className="flex items-center gap-4 mt-8">
                <a href="#" className="w-11 h-11 rounded-full border border-brand-slate/20 flex items-center justify-center text-brand-slate hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark transition-all" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-11 h-11 rounded-full border border-brand-slate/20 flex items-center justify-center text-brand-slate hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark transition-all" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img src="/assets/founder-ceo.jpg" alt="Atolagbe Abdulazeez - Founder & CEO of JobLandingPro" className="rounded-xl w-full object-cover" />
                <div className="absolute -bottom-4 -right-4 bg-brand-gold rounded-xl px-5 py-3 shadow-lg hidden md:block">
                  <p className="text-brand-dark font-bold text-sm">5,000+ Clients Placed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Quote Banner */}
      <section className="bg-brand-dark section-padding animate-section">
        <div className="container-main max-w-4xl text-center">
          <Quote size={48} className="text-brand-gold/30 mx-auto mb-4" />
          <blockquote className="text-xl md:text-2xl text-white font-medium italic leading-relaxed">
            Every job seeker deserves a recruiter in their corner. Not the company's recruiter. THEIR recruiter. That is what we built at JobLandingPro.
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <img src="/assets/founder-ceo.jpg" alt="Atolagbe Abdulazeez" className="w-14 h-14 rounded-full object-cover border-2 border-brand-gold" />
            <div className="text-left">
              <p className="text-white font-semibold">Atolagbe Abdulazeez</p>
              <p className="text-white/60 text-sm">Founder & CEO, JobLandingPro</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Put a Professional Recruiter to Work For You?"
        description="Stop applying alone. Hire your reverse recruiter today and start landing interviews within weeks."
        buttonText="Hire Your Recruiter"
        buttonLink="/contact"
      />
    </>
  )
}
