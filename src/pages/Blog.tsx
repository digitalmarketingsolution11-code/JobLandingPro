import { useEffect, useState } from 'react'
import { Search, Clock, Calendar, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import BlogCard from '../components/BlogCard'

gsap.registerPlugin(ScrollTrigger)

const categories = ['All', 'Reverse Recruiting', 'Job Search', 'Career Strategy', 'Salary', 'Interview Prep', 'Industry News']

const allPosts = [
  { image: '/assets/blog-resume-ats.jpg', category: 'Reverse Recruiting', title: 'What Is Reverse Recruiting and Why It Works in 2026', excerpt: 'Discover why top professionals are hiring reverse recruiters to land jobs faster than ever before...', readTime: '6 min read', date: 'Dec 15, 2025' },
  { image: '/assets/blog-salary-negotiation.jpg', category: 'Career Strategy', title: 'How to Negotiate a $20K Higher Salary', excerpt: 'Expert negotiation tactics from recruiters who close compensation deals every single day...', readTime: '8 min read', date: 'Dec 12, 2025' },
  { image: '/assets/blog-linkedin-mistakes.jpg', category: 'Job Search', title: 'Why Your Job Applications Are Being Ignored', excerpt: 'The hidden reasons 95% of online applications never get seen by a human being...', readTime: '5 min read', date: 'Dec 8, 2025' },
  { image: '/assets/blog-resume-ats.jpg', category: 'Reverse Recruiting', title: 'Reverse Recruiting vs. Career Coaches: What Gets You Hired?', excerpt: 'We compared reverse recruiting services to career coaches. The results were shocking...', readTime: '7 min read', date: 'Dec 5, 2025' },
  { image: '/assets/blog-salary-negotiation.jpg', category: 'Salary', title: 'The Real Cost of Job Searching Alone for 6 Months', excerpt: 'The hidden financial and emotional toll of extended job searches that nobody talks about...', readTime: '6 min read', date: 'Dec 1, 2025' },
  { image: '/assets/blog-linkedin-mistakes.jpg', category: 'Interview Prep', title: 'How Hiring Managers Actually Choose Candidates', excerpt: 'Insider secrets from a former recruiter on what really happens behind closed doors...', readTime: '4 min read', date: 'Nov 28, 2025' },
  { image: '/assets/blog-resume-ats.jpg', category: 'Job Search', title: 'The Hidden Job Market: 80% of Roles Never Get Posted', excerpt: 'How to access the invisible job market where the best opportunities actually live...', readTime: '7 min read', date: 'Nov 25, 2025' },
  { image: '/assets/blog-salary-negotiation.jpg', category: 'Reverse Recruiting', title: 'Is Reverse Recruiting Worth the Investment?', excerpt: 'A detailed ROI analysis showing why hiring a reverse recruiter pays for itself...', readTime: '5 min read', date: 'Nov 20, 2025' },
  { image: '/assets/blog-linkedin-mistakes.jpg', category: 'Career Strategy', title: 'Why Networking Alone Is Not Enough Anymore', excerpt: 'The evolution of job searching and why you need a multi-channel approach in 2026...', readTime: '4 min read', date: 'Nov 15, 2025' },
]

const sidebarCategories = [
  { name: 'Reverse Recruiting', count: 18 },
  { name: 'Job Search', count: 15 },
  { name: 'Career Strategy', count: 12 },
  { name: 'Salary', count: 10 },
  { name: 'Interview Prep', count: 8 },
  { name: 'Industry News', count: 6 },
]

const popularPosts = allPosts.slice(0, 5)

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const filteredPosts = allPosts.filter((post) => {
    const matchCategory = activeCategory === 'All' || post.category === activeCategory
    const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

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
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Blog', path: '/blog' }]}
        title="Career Insights & Resources"
        subtitle="Expert advice on reverse recruiting, job searching, and career advancement"
      />

      {/* Featured Article */}
      <section className="bg-white pt-16 pb-8 animate-section">
        <div className="container-main">
          <div className="bg-brand-light-grey rounded-xl overflow-hidden">
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-3 aspect-video lg:aspect-auto">
                <img src="/assets/blog-featured.jpg" alt="Featured article" className="w-full h-full object-cover" />
              </div>
              <div className="lg:col-span-2 p-8 md:p-10 flex flex-col justify-center">
                <span className="inline-block bg-brand-light-blue text-brand-dark text-xs font-semibold px-3 py-1 rounded-pill w-fit">Reverse Recruiting</span>
                <h2 className="text-xl md:text-2xl font-bold text-brand-dark mt-4 leading-snug">
                  The Complete Guide to Reverse Recruiting: How to Hire Your Own Recruiter
                </h2>
                <p className="text-brand-slate text-sm leading-relaxed mt-3">
                  Everything you need to know about reverse recruiting in 2026. From how it works to what it costs to whether it is right for your career situation.
                </p>
                <div className="flex items-center gap-4 mt-4 text-brand-slate text-xs">
                  <span className="flex items-center gap-1"><Clock size={12} /> 12 min read</span>
                  <span className="flex items-center gap-1"><Calendar size={12} /> Dec 18, 2025</span>
                </div>
                <Link to="/blog" className="text-brand-gold font-semibold text-sm mt-5 flex items-center gap-1 hover:gap-2 transition-all">
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid with Sidebar */}
      <section className="bg-white section-padding animate-section">
        <div className="container-main">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <div>
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((cat) => (
                  <button key={cat} onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-pill text-sm font-medium transition-all duration-300 ${activeCategory === cat ? 'bg-brand-dark text-white' : 'bg-brand-light-grey text-brand-slate hover:bg-brand-light-blue hover:text-brand-dark'}`}>
                    {cat}
                  </button>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.title} {...post} />
                ))}
              </div>
              {filteredPosts.length === 0 && <p className="text-center text-brand-slate py-12">No articles found matching your criteria.</p>}
            </div>

            <aside className="space-y-8">
              <div>
                <h4 className="font-semibold text-brand-dark mb-4">Search Articles</h4>
                <div className="relative">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-slate" />
                  <input type="text" placeholder="Search topics..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-12 pl-11 pr-4 border border-brand-slate/30 rounded-pill focus:outline-none focus:border-brand-gold text-sm" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-brand-dark mb-4">Categories</h4>
                <ul className="space-y-0">
                  {sidebarCategories.map((cat) => (
                    <li key={cat.name} className="border-b border-black/5">
                      <button onClick={() => setActiveCategory(cat.name)} className="w-full flex items-center justify-between py-3 text-sm text-brand-dark hover:text-brand-gold transition-colors">
                        <span>{cat.name}</span><span className="text-brand-slate text-xs">({cat.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-brand-dark mb-4">Popular Reads</h4>
                <div className="space-y-4">
                  {popularPosts.map((post) => (
                    <div key={post.title} className="flex gap-3 group cursor-pointer">
                      <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-brand-dark line-clamp-2 group-hover:text-brand-gold transition-colors">{post.title}</h5>
                        <span className="text-xs text-brand-slate mt-1">{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-brand-light-grey rounded-xl p-6">
                <h4 className="font-semibold text-brand-dark mb-2">Get Career Tips</h4>
                <p className="text-brand-slate text-sm mb-4">Weekly reverse recruiting insights</p>
                {subscribed ? <p className="text-brand-success text-sm">Thanks for subscribing!</p> : (
                  <form onSubmit={(e) => { e.preventDefault(); if (email) { setSubscribed(true); setEmail(''); } }}>
                    <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-12 px-4 border border-brand-slate/30 rounded-pill focus:outline-none focus:border-brand-gold text-sm mb-3" required />
                    <button type="submit" className="btn-primary w-full text-sm py-3">Subscribe</button>
                  </form>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark section-padding">
        <div className="container-main max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Want Personalized Career Advice?</h2>
          <p className="text-white/70 mt-4">Our reverse recruiters can analyze your situation and recommend the best strategy.</p>
          <Link to="/contact" className="btn-primary mt-8 inline-flex">Book a Free Strategy Call</Link>
        </div>
      </section>
    </>
  )
}
