import { useEffect, useState } from 'react'
import {
  ArrowUpRight, TrendingUp, Calendar, Briefcase, DollarSign, Clock,
  Target, Award, ChevronDown, ChevronUp, Star
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import { useCountUp } from '../hooks/useCountUp'

gsap.registerPlugin(ScrollTrigger)

interface Story {
  id: number
  name: string
  title: string
  previousRole: string
  previousCompany: string
  newRole: string
  newCompany: string
  timeline: string
  salaryFrom: string
  salaryTo: string
  salaryIncrease: string
  quote: string
  fullStory: string
  avatar: string
  tag: string
  industry: string
  appsSubmitted: string
  interviews: string
  offers: string
}

const stories: Story[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    title: 'Senior Product Manager',
    previousRole: 'Product Manager',
    previousCompany: 'Unknown Startup',
    newRole: 'Senior Product Manager',
    newCompany: 'Fortune 500 Tech Company',
    timeline: '5 weeks',
    salaryFrom: '$95,000',
    salaryTo: '$140,000',
    salaryIncrease: '+$45,000',
    quote: 'I applied to over 200 jobs on my own and got exactly zero responses. JobLandingPro connected me directly with a VP who was not even publicly hiring.',
    fullStory: 'Sarah had spent 6 months applying to every product management role she could find. Despite 8 years of experience, her applications disappeared into the void. Within 48 hours of signing up, her reverse recruiter had submitted 47 targeted applications and reached out to 12 hiring managers directly. A VP at a Fortune 500 company responded within days, impressed by the personalized outreach. Sarah had 3 interviews scheduled in week two, and by week five, she had accepted a $140K offer with full benefits and a $15K signing bonus.',
    avatar: '/assets/testimonial-avatar-4.jpg',
    tag: 'Career Upgrade',
    industry: 'Technology',
    appsSubmitted: '47',
    interviews: '5',
    offers: '2'
  },
  {
    id: 2,
    name: 'Marcus Thompson',
    title: 'Senior Data Engineer',
    previousRole: 'Unemployed',
    previousCompany: 'Laid off 8 months prior',
    newRole: 'Senior Data Engineer',
    newCompany: 'CloudScale Systems',
    timeline: '6 weeks',
    salaryFrom: '$0',
    salaryTo: '$155,000',
    salaryIncrease: '+$155,000',
    quote: 'Eight months of unemployment was destroying my confidence. They applied to 50+ roles in my first week, and I had 4 callbacks within 10 days.',
    fullStory: 'Marcus was laid off during a company restructure and spent 8 months sending applications into the abyss. His reverse recruiter took a different approach - targeting mid-size tech companies with recent funding rounds who were aggressively hiring. They crafted a narrative around his cloud infrastructure expertise and directly messaged 18 CTOs and VPs of Engineering. Within 10 days, Marcus had 4 screening calls. By week 6, he had 3 offers and chose a $155K role at CloudScale Systems with equity and remote flexibility.',
    avatar: '/assets/testimonial-avatar-9.jpg',
    tag: 'Breakthrough Hire',
    industry: 'Technology',
    appsSubmitted: '52',
    interviews: '6',
    offers: '3'
  },
  {
    id: 3,
    name: 'Jennifer Walsh',
    title: 'Director of Marketing',
    previousRole: 'Marketing Manager',
    previousCompany: 'Mid-size Retail Brand',
    newRole: 'Director of Marketing',
    newCompany: 'GrowthBrand Inc',
    timeline: '4 weeks',
    salaryFrom: '$105,000',
    salaryTo: '$140,000',
    salaryIncrease: '+$35,000',
    quote: 'Their direct outreach to a CMO who was quietly building a new team was the difference maker. The role never even hit a job board.',
    fullStory: 'Jennifer was ready for a director-level role but kept getting rejected for not having "director experience" - the classic catch-22. Her reverse recruiter identified CMOs at 25 companies who had recently received Series B funding (a strong signal they were building teams). Through warm introductions and strategic LinkedIn outreach, Jennifer connected with a CMO at GrowthBrand Inc who was assembling a marketing leadership team. She interviewed within a week and had an offer 3 weeks later - a role that was never publicly posted.',
    avatar: '/assets/testimonial-avatar-2.jpg',
    tag: 'Hidden Opportunity',
    industry: 'Marketing',
    appsSubmitted: '38',
    interviews: '3',
    offers: '1'
  },
  {
    id: 4,
    name: 'David Chen',
    title: 'Full-Stack Engineer',
    previousRole: 'Junior Developer',
    previousCompany: 'Small Web Agency',
    newRole: 'Full-Stack Engineer',
    newCompany: 'TechGiant',
    timeline: '7 weeks',
    salaryFrom: '$72,000',
    salaryTo: '$135,000',
    salaryIncrease: '+$63,000',
    quote: 'The dashboard showed every application, every outreach, every response. I could see my recruiter working for me in real-time. Complete transparency.',
    fullStory: 'David had only 2 years of experience and felt stuck at a small agency doing WordPress sites. He dreamed of working at a top tech company but knew his resume would not pass their ATS filters. His reverse recruiter repositioned his experience to highlight the scale and complexity of his projects, then applied to 200+ roles over 7 weeks while directly messaging engineering managers at target companies. A TechGiant hiring manager noticed his unique project portfolio and fast-tracked him through interviews. David received a $135K offer - nearly doubling his salary.',
    avatar: '/assets/testimonial-avatar-3.jpg',
    tag: 'Level Jump',
    industry: 'Technology',
    appsSubmitted: '56',
    interviews: '4',
    offers: '2'
  },
  {
    id: 5,
    name: 'Amanda Foster',
    title: 'Senior UX Designer',
    previousRole: 'High School Teacher',
    previousCompany: 'Public School District',
    newRole: 'Senior UX Designer',
    newCompany: 'CreativeLabs Agency',
    timeline: '8 weeks',
    salaryFrom: '$52,000',
    salaryTo: '$102,000',
    salaryIncrease: '+$50,000',
    quote: 'I was a teacher trying to break into UX design. They found companies that valued transferable skills and got me interviews for roles that were never posted.',
    fullStory: 'Amanda completed a UX bootcamp but struggled to land her first role. With no industry experience, her applications were consistently passed over. Her reverse recruiter took a unique approach - targeting companies that valued her teaching background (educational technology firms, training platforms, companies with strong mentorship cultures). They crafted a compelling narrative around her user research skills from years of understanding student needs. CreativeLabs Agency, impressed by her unique perspective, offered her a Senior UX Designer role that paid double her teaching salary.',
    avatar: '/assets/testimonial-avatar-6.jpg',
    tag: 'Career Change',
    industry: 'Design',
    appsSubmitted: '63',
    interviews: '5',
    offers: '2'
  },
  {
    id: 6,
    name: "Kevin O'Brien",
    title: 'Sales Director',
    previousRole: 'Sales Representative',
    previousCompany: 'B2B Software Co',
    newRole: 'Sales Director',
    newCompany: 'GrowthCo Enterprise',
    timeline: '5 weeks',
    salaryFrom: '$85,000',
    salaryTo: '$165,000',
    salaryIncrease: '+$80,000',
    quote: 'They did not just get me a job. They negotiated a $20K higher salary than the initial offer and secured a $25K signing bonus.',
    fullStory: 'Kevin was a top-performing sales rep ready for his first director role. He had the numbers but struggled to get conversations with decision-makers. His reverse recruiter identified 30 companies with new VP of Sales hires (a strong signal that director-level roles would follow). Through direct outreach to VPs and CROs, Kevin had 6 conversations in his first two weeks. When GrowthCo made an initial offer at $145K, his recruiter negotiated it to $165K base plus a $25K signing bonus and accelerators that could push total comp past $250K.',
    avatar: '/assets/testimonial-avatar-7.jpg',
    tag: 'Executive Placement',
    industry: 'Sales',
    appsSubmitted: '41',
    interviews: '6',
    offers: '2'
  },
  {
    id: 7,
    name: 'Lisa Park',
    title: 'HR Manager',
    previousRole: 'HR Generalist',
    previousCompany: 'Small Non-Profit',
    newRole: 'HR Manager',
    newCompany: 'TechStart Inc',
    timeline: '6 weeks',
    salaryFrom: '$58,000',
    salaryTo: '$98,000',
    salaryIncrease: '+$40,000',
    quote: 'Stuck in a dead-end job for 3 years. They rebranded my experience, found tech companies that valued non-profit HR skills, and I had 4 interviews in 2 weeks.',
    fullStory: 'Lisa felt invisible at her non-profit job, doing HR for a team of 12 with no growth path. Her reverse recruiter saw an opportunity - tech startups often struggle with HR infrastructure and value candidates who have built processes from scratch. They repositioned her experience as "scaling HR operations from the ground up" and targeted Series A tech startups. TechStart Inc, a rapidly growing startup with 50 employees and no formal HR function, saw Lisa as the perfect solution. She got a $98K offer with equity and the title she had been chasing for years.',
    avatar: '/assets/testimonial-avatar-4.jpg',
    tag: 'Industry Switch',
    industry: 'Human Resources',
    appsSubmitted: '44',
    interviews: '4',
    offers: '2'
  },
  {
    id: 8,
    name: 'Robert Hayes',
    title: 'Financial Analyst',
    previousRole: 'Junior Accountant',
    previousCompany: 'Local CPA Firm',
    newRole: 'Senior Financial Analyst',
    newCompany: 'Meridian Finance Group',
    timeline: '5 weeks',
    salaryFrom: '$55,000',
    salaryTo: '$95,000',
    salaryIncrease: '+$40,000',
    quote: 'The resume they positioned for me told a completely different story. One that made recruiters at top finance firms actually call me back.',
    fullStory: 'Robert was a CPA who wanted to transition into corporate finance, but every application was met with silence. His reverse recruiter repositioned his accounting background as "financial analysis expertise" and targeted companies that valued accounting fundamentals in their FP&A teams. They applied to 50+ analyst roles while directly messaging finance leaders at target companies. Meridian Finance Group, looking for someone with deep accounting knowledge for their financial planning team, scheduled an interview within days. Robert accepted a $95K offer with clear path to Manager.',
    avatar: '/assets/testimonial-avatar-5.jpg',
    tag: 'Role Transition',
    industry: 'Finance',
    appsSubmitted: '48',
    interviews: '5',
    offers: '2'
  },
  {
    id: 9,
    name: 'Nina Patel',
    title: 'Data Analyst',
    previousRole: 'Business Analyst',
    previousCompany: 'Retail Corporation',
    newRole: 'Senior Data Analyst',
    newCompany: 'InsightCorp Analytics',
    timeline: '4 weeks',
    salaryFrom: '$68,000',
    salaryTo: '$108,000',
    salaryIncrease: '+$40,000',
    quote: 'My LinkedIn went from 50 views a month to 500+ in the first week after their team optimized it. Recruiters started messaging ME.',
    fullStory: 'Nina had solid analytical skills but her online presence made her invisible to recruiters. Her reverse recruiter completely transformed her LinkedIn profile, optimized her resume with data-focused keywords, and directly contacted 20 hiring managers at analytics firms. The combination worked - her profile views exploded, and InsightCorp Analytics reached out proactively. She went from application to offer in just 4 weeks, landing a $108K role that she never would have found on her own.',
    avatar: '/assets/testimonial-avatar-8.jpg',
    tag: 'Visibility Boost',
    industry: 'Analytics',
    appsSubmitted: '42',
    interviews: '4',
    offers: '1'
  }
]

function CounterStat({ end, suffix, prefix, label, icon: Icon }: { end: number; suffix: string; prefix?: string; label: string; icon: typeof DollarSign }) {
  const { count, ref } = useCountUp(end, 2000)
  return (
    <div ref={ref} className="text-center">
      <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center mx-auto mb-3">
        <Icon size={22} className="text-brand-gold" />
      </div>
      <p className="text-2xl md:text-3xl font-extrabold text-brand-gold">{prefix}{count.toLocaleString()}{suffix}</p>
      <p className="text-white/60 text-sm mt-1">{label}</p>
    </div>
  )
}

function StoryCard({ story }: { story: Story }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white border border-black/10 rounded-xl overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:border-brand-gold transition-all duration-300">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="bg-brand-gold/10 text-brand-gold text-xs font-semibold px-3 py-1 rounded-pill">{story.tag}</span>
          <span className="flex items-center gap-1 text-xs text-brand-success font-medium">
            <TrendingUp size={14} /> {story.salaryIncrease}
          </span>
        </div>

        <p className="text-brand-dark text-[15px] leading-relaxed italic">&ldquo;{story.quote}&rdquo;</p>
      </div>

      {/* Before / After */}
      <div className="mx-6 bg-brand-light-grey rounded-lg p-4">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center">
          <div>
            <p className="text-[11px] text-brand-slate uppercase tracking-wide">Before</p>
            <p className="text-sm text-brand-dark font-medium">{story.previousRole}</p>
            <p className="text-xs text-brand-slate">{story.previousCompany}</p>
          </div>
          <ArrowUpRight size={20} className="text-brand-gold shrink-0" />
          <div>
            <p className="text-[11px] text-brand-slate uppercase tracking-wide">After</p>
            <p className="text-sm text-brand-gold font-semibold">{story.newRole}</p>
            <p className="text-xs text-brand-dark">{story.newCompany}</p>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="px-6 py-4 flex flex-wrap items-center gap-4 border-b border-black/5">
        <span className="flex items-center gap-1 text-xs text-brand-slate"><Briefcase size={12} /> {story.industry}</span>
        <span className="flex items-center gap-1 text-xs text-brand-slate"><Calendar size={12} /> {story.timeline}</span>
        <span className="flex items-center gap-1 text-xs text-brand-slate"><DollarSign size={12} /> {story.salaryFrom} → {story.salaryTo}</span>
      </div>

      {/* Expandable Full Story */}
      {expanded && (
        <div className="px-6 py-4 bg-brand-light-grey/30 border-b border-black/5">
          <p className="text-sm text-brand-slate leading-relaxed">{story.fullStory}</p>
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="text-center bg-white rounded-lg p-3">
              <p className="text-lg font-bold text-brand-dark">{story.appsSubmitted}</p>
              <p className="text-[10px] text-brand-slate">Applications</p>
            </div>
            <div className="text-center bg-white rounded-lg p-3">
              <p className="text-lg font-bold text-brand-gold">{story.interviews}</p>
              <p className="text-[10px] text-brand-slate">Interviews</p>
            </div>
            <div className="text-center bg-white rounded-lg p-3">
              <p className="text-lg font-bold text-brand-success">{story.offers}</p>
              <p className="text-[10px] text-brand-slate">Offers</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={story.avatar} alt={story.name} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="text-sm font-semibold text-brand-dark">{story.name}</p>
            <p className="text-xs text-brand-slate">{story.title} at {story.newCompany}</p>
          </div>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-brand-gold text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
        >
          {expanded ? <>Less <ChevronUp size={14} /></> : <>Full Story <ChevronDown size={14} /></>}
        </button>
      </div>
    </div>
  )
}

export default function SuccessStories() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Career Upgrade', 'Career Change', 'Executive Placement', 'Breakthrough Hire', 'Level Jump']

  const filtered = activeFilter === 'All' ? stories : stories.filter(s => s.tag === activeFilter)

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
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Success Stories', path: '/success-stories' }]}
        title="Client Success Stories"
        subtitle="Real transformations. Real results. See how reverse recruiting changed these careers."
        height="45vh"
      />

      {/* Stats Banner */}
      <section className="bg-brand-dark py-16 animate-section">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CounterStat end={433} suffix="K+" prefix="$" label="Total Salary Increases" icon={DollarSign} />
            <CounterStat end={5} suffix=".3 weeks" label="Average Timeline" icon={Clock} />
            <CounterStat end={98} suffix="%" label="Success Rate" icon={Target} />
            <CounterStat end={49} suffix="/5" label="Client Satisfaction" icon={Star} />
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white pt-12 animate-section">
        <div className="container-main">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((f) => (
              <button key={f} onClick={() => setActiveFilter(f)}
                className={`px-5 py-2.5 rounded-pill text-sm font-medium transition-all duration-300 ${
                  activeFilter === f ? 'bg-brand-dark text-white' : 'bg-brand-light-grey text-brand-slate hover:bg-brand-light-blue hover:text-brand-dark'
                }`}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="bg-white section-padding animate-section">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-grid">
            {filtered.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-brand-slate py-12">No stories match this filter.</p>
          )}
        </div>
      </section>

      {/* Featured Deep Story */}
      <section className="bg-brand-light-grey section-padding animate-section">
        <div className="container-main">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="grid lg:grid-cols-2">
              <div className="bg-brand-dark p-10 md:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Award size={20} className="text-brand-gold" />
                  <span className="text-brand-gold text-sm font-semibold uppercase tracking-wide">Featured Transformation</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  From Unemployed to $155K in 6 Weeks
                </h3>
                <p className="text-white/70 mt-4 leading-relaxed">
                  Marcus Thompson was laid off and spent 8 months with zero callbacks. His reverse recruiter targeted mid-size tech companies with fresh funding, directly messaged 18 CTOs, and got him 6 interviews in 2 weeks. Final result: 3 offers, $155K salary, equity, and remote work.
                </p>
                <div className="flex flex-wrap gap-6 mt-8">
                  <div>
                    <p className="text-2xl font-bold text-brand-gold">$155K</p>
                    <p className="text-white/50 text-xs">Final Salary</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-brand-gold">6 weeks</p>
                    <p className="text-white/50 text-xs">Time to Hire</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-brand-gold">3 offers</p>
                    <p className="text-white/50 text-xs">Total Offers</p>
                  </div>
                </div>
              </div>
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <blockquote className="text-brand-dark text-lg leading-relaxed italic">
                  &ldquo;I had lost all hope after 8 months. My reverse recruiter treated my job search like a campaign - strategic, aggressive, and smart. Within 10 days I had callbacks. Within 6 weeks I had 3 offers. I chose the one that changed my life. Worth every single penny.&rdquo;
                </blockquote>
                <div className="flex items-center gap-4 mt-6">
                  <img src="/assets/testimonial-avatar-9.jpg" alt="Marcus Thompson" className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-brand-dark">Marcus Thompson</p>
                    <p className="text-brand-slate text-sm">Senior Data Engineer at CloudScale Systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Write Your Own Success Story?"
        description="Every story here started with one decision: stop applying alone and hire a professional recruiter to work for you."
        buttonText="Start Your Transformation"
        buttonLink="/pricing"
      />
    </>
  )
}
