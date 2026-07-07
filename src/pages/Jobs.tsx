import { useEffect, useState } from 'react'
import { Search, SlidersHorizontal, X, Upload, CheckCircle, MapPin, DollarSign, Clock, Building2, ChevronLeft, ChevronRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import JobCard from '../components/JobCard'
import { allJobs } from '../data/jobs'

gsap.registerPlugin(ScrollTrigger)

const categoryPills = ['All Jobs', 'Technology', 'Healthcare', 'Finance', 'Marketing', 'Engineering', 'HR', 'Operations', 'Creative', 'Remote']

export default function Jobs() {
  const [activeCategory, setActiveCategory] = useState('All Jobs')
  const [searchQuery, setSearchQuery] = useState('')
  const [locationQuery, setLocationQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [jobTypes, setJobTypes] = useState<string[]>([])
  const [experienceLevels, setExperienceLevels] = useState<string[]>([])
  const [jobAlertEmail, setJobAlertEmail] = useState('')
  const [alertSet, setAlertSet] = useState(false)
  const [applyModal, setApplyModal] = useState<{ open: boolean; job: typeof allJobs[0] | null }>({ open: false, job: null })
  const [applySubmitted, setApplySubmitted] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const jobsPerPage = 12

  const toggleFilter = (_arr: string[], setArr: React.Dispatch<React.SetStateAction<string[]>>, val: string) => {
    setArr(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val])
  }

  const filteredJobs = allJobs.filter((job) => {
    const matchCategory = activeCategory === 'All Jobs' || job.tags.some(t => t.toLowerCase().includes(activeCategory.toLowerCase()))
    const matchSearch = !searchQuery || job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.company.toLowerCase().includes(searchQuery.toLowerCase())
    const matchLocation = !locationQuery || job.location.toLowerCase().includes(locationQuery.toLowerCase())
    const matchType = jobTypes.length === 0 || jobTypes.includes(job.type)
    const matchExp = experienceLevels.length === 0 || experienceLevels.includes(job.experience)
    return matchCategory && matchSearch && matchLocation && matchType && matchExp
  })

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage)
  const paginatedJobs = filteredJobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage)

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory, searchQuery, locationQuery, jobTypes, experienceLevels])

  const handleApply = (job: typeof allJobs[0]) => {
    setApplyModal({ open: true, job })
    setApplySubmitted(false)
  }

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setApplySubmitted(true)
    setTimeout(() => {
      setApplyModal({ open: false, job: null })
    }, 2500)
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
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Jobs', path: '/jobs' }]}
        title="Find Your Next Opportunity"
        subtitle="Browse 72 curated positions from top employers. Apply directly or let us apply for you."
        height="50vh"
      />

      {/* Search Bar */}
      <section className="bg-white py-6 animate-section">
        <div className="container-main">
          <div className="flex bg-white rounded-pill shadow-[0_4px_20px_rgba(0,0,0,0.12)] overflow-hidden h-[60px]">
            <div className="flex-1 flex items-center px-6">
              <Search size={20} className="text-brand-slate shrink-0" />
              <input type="text" placeholder="Job title, keywords, or company" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full ml-3 outline-none text-brand-dark placeholder:text-brand-slate/60" />
            </div>
            <div className="w-px bg-brand-light-grey" />
            <div className="w-[250px] hidden md:flex items-center px-5">
              <input type="text" placeholder="City or remote" value={locationQuery} onChange={(e) => setLocationQuery(e.target.value)}
                className="w-full outline-none text-brand-dark placeholder:text-brand-slate/60" />
            </div>
            <button className="w-[60px] bg-brand-gold flex items-center justify-center hover:brightness-95 transition-all">
              <Search size={22} className="text-brand-dark" />
            </button>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="bg-white pb-6 animate-section">
        <div className="container-main">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categoryPills.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-pill text-sm font-medium transition-all duration-300 shrink-0 ${
                  activeCategory === cat ? 'bg-brand-dark text-white' : 'bg-brand-light-grey text-brand-slate hover:bg-brand-light-blue hover:text-brand-dark'
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="bg-brand-light-grey section-padding animate-section">
        <div className="container-main">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Filters Sidebar */}
            <aside className={`${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-white rounded-xl p-6 sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-brand-dark">Filters</h4>
                  <button onClick={() => { setJobTypes([]); setExperienceLevels([]); }} className="text-brand-error text-xs">Clear All</button>
                </div>
                <div className="mb-6">
                  <h5 className="text-sm font-medium text-brand-dark mb-3">Job Type</h5>
                  {['Full-time', 'Part-time', 'Contract', 'Freelance'].map((type) => (
                    <label key={type} className="flex items-center gap-2 py-1.5 cursor-pointer">
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${jobTypes.includes(type) ? 'bg-brand-gold border-brand-gold' : 'border-brand-slate/30'}`}>
                        {jobTypes.includes(type) && <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                      </div>
                      <input type="checkbox" className="sr-only" checked={jobTypes.includes(type)} onChange={() => toggleFilter(jobTypes, setJobTypes, type)} />
                      <span className="text-sm text-brand-dark">{type}</span>
                    </label>
                  ))}
                </div>
                <div>
                  <h5 className="text-sm font-medium text-brand-dark mb-3">Experience Level</h5>
                  {['Entry Level', 'Mid Level', 'Senior Level', 'Director', 'Executive'].map((level) => (
                    <label key={level} className="flex items-center gap-2 py-1.5 cursor-pointer">
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${experienceLevels.includes(level) ? 'bg-brand-gold border-brand-gold' : 'border-brand-slate/30'}`}>
                        {experienceLevels.includes(level) && <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                      </div>
                      <input type="checkbox" className="sr-only" checked={experienceLevels.includes(level)} onChange={() => toggleFilter(experienceLevels, setExperienceLevels, level)} />
                      <span className="text-sm text-brand-dark">{level}</span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Job List */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="text-brand-slate text-sm">Showing {paginatedJobs.length} of {filteredJobs.length} jobs</p>
                <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden flex items-center gap-2 text-sm text-brand-dark">
                  <SlidersHorizontal size={16} /> Filters
                </button>
              </div>
              <div className="space-y-4">
                {paginatedJobs.map((job) => (
                  <JobCard key={job.id} {...job} onApply={() => handleApply(job)} />
                ))}
              </div>
              {filteredJobs.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-brand-slate text-lg">No jobs match your filters.</p>
                  <button onClick={() => { setActiveCategory('All Jobs'); setSearchQuery(''); setLocationQuery(''); setJobTypes([]); setExperienceLevels([]); }} className="text-brand-gold font-semibold mt-2 hover:underline">Clear all filters</button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-10">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-brand-dark disabled:opacity-30 hover:border-brand-gold transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                        currentPage === page
                          ? 'bg-brand-dark text-white'
                          : 'bg-white border border-black/10 text-brand-dark hover:border-brand-gold'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-brand-dark disabled:opacity-30 hover:border-brand-gold transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Job Alert CTA */}
      <section className="bg-brand-dark py-20 animate-section">
        <div className="container-main max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Don't See the Right Role?</h2>
          <p className="text-white/70 mt-4">Set up a job alert and we'll notify you when new positions matching your criteria are posted. Or hire a reverse recruiter to find hidden opportunities for you.</p>
          {alertSet ? (
            <div className="mt-6 flex items-center justify-center gap-2 text-brand-success">
              <CheckCircle size={20} /> <span>Job alert created!</span>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (jobAlertEmail) setAlertSet(true); }} className="flex flex-col sm:flex-row gap-3 mt-6">
              <input type="email" placeholder="Enter your email" value={jobAlertEmail} onChange={(e) => setJobAlertEmail(e.target.value)}
                className="flex-1 h-14 px-6 bg-white/10 border border-white/20 rounded-pill text-white placeholder:text-white/40 focus:outline-none focus:border-brand-gold" required />
              <button type="submit" className="btn-primary h-14 px-8">Create Alert</button>
            </form>
          )}
        </div>
      </section>

      {/* ===== APPLY MODAL ===== */}
      {applyModal.open && applyModal.job && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setApplyModal({ open: false, job: null })} />
          <div className="relative bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-black/10 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
              <div>
                <h3 className="text-lg font-bold text-brand-dark">Apply for {applyModal.job.title}</h3>
                <p className="text-brand-slate text-sm flex items-center gap-1 mt-0.5">
                  <Building2 size={14} /> {applyModal.job.company} · {applyModal.job.location}
                </p>
              </div>
              <button onClick={() => setApplyModal({ open: false, job: null })} className="p-2 hover:bg-brand-light-grey rounded-full transition-colors">
                <X size={20} className="text-brand-slate" />
              </button>
            </div>
            <div className="px-6 py-4 bg-brand-light-grey/50 flex flex-wrap gap-3">
              <span className="flex items-center gap-1 text-sm text-brand-slate"><DollarSign size={14} className="text-brand-gold" /> {applyModal.job.salary}</span>
              <span className="flex items-center gap-1 text-sm text-brand-slate"><Clock size={14} className="text-brand-gold" /> {applyModal.job.type}</span>
              <span className="flex items-center gap-1 text-sm text-brand-slate"><MapPin size={14} className="text-brand-gold" /> {applyModal.job.location}</span>
            </div>
            {applySubmitted ? (
              <div className="px-6 py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-success/10 flex items-center justify-center mx-auto">
                  <CheckCircle size={32} className="text-brand-success" />
                </div>
                <h4 className="text-xl font-bold text-brand-dark mt-4">Application Submitted!</h4>
                <p className="text-brand-slate mt-2">Your application for <strong>{applyModal.job.title}</strong> at <strong>{applyModal.job.company}</strong> has been received. Good luck!</p>
                <p className="text-brand-gold text-sm mt-4 font-medium">Want a recruiter to apply to 50+ more roles like this for you? <a href="/contact" className="underline">Learn about Reverse Recruiting</a></p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="px-6 py-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1">First Name <span className="text-brand-error">*</span></label>
                    <input required type="text" placeholder="John" className="w-full h-12 px-4 border border-brand-slate/30 rounded-pill focus:outline-none focus:border-brand-gold text-brand-dark" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1">Last Name <span className="text-brand-error">*</span></label>
                    <input required type="text" placeholder="Doe" className="w-full h-12 px-4 border border-brand-slate/30 rounded-pill focus:outline-none focus:border-brand-gold text-brand-dark" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1">Email <span className="text-brand-error">*</span></label>
                  <input required type="email" placeholder="john@example.com" className="w-full h-12 px-4 border border-brand-slate/30 rounded-pill focus:outline-none focus:border-brand-gold text-brand-dark" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1">Phone</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full h-12 px-4 border border-brand-slate/30 rounded-pill focus:outline-none focus:border-brand-gold text-brand-dark" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1">Resume / CV <span className="text-brand-error">*</span></label>
                  <div className="border-2 border-dashed border-brand-slate/25 rounded-xl p-6 text-center hover:border-brand-gold transition-colors cursor-pointer">
                    <Upload size={24} className="text-brand-slate mx-auto mb-2" />
                    <p className="text-sm text-brand-slate">Drag & drop your resume here, or <span className="text-brand-gold font-medium">browse</span></p>
                    <p className="text-xs text-brand-slate/60 mt-1">PDF, DOC, DOCX up to 5MB</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1">Cover Letter (optional)</label>
                  <textarea rows={3} placeholder="Tell us why you're a great fit for this role..."
                    className="w-full px-4 py-3 border border-brand-slate/30 rounded-xl focus:outline-none focus:border-brand-gold text-brand-dark resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full py-4 text-base">Submit Application</button>
                <p className="text-xs text-brand-slate text-center">By applying, you agree to our <a href="#" className="text-brand-gold">Terms</a> and <a href="#" className="text-brand-gold">Privacy Policy</a>.</p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
