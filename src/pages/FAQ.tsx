import { useEffect, useState } from 'react'
import { Mail } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import FAQAccordion from '../components/FAQAccordion'

gsap.registerPlugin(ScrollTrigger)

const categoryTabs = ['All Questions', 'Reverse Recruiting', 'Pricing', 'Process', 'Results', 'Policies']

const faqData: Record<string, { question: string; answer: string }[]> = {
  'Reverse Recruiting': [
    { question: 'What exactly is reverse recruiting?', answer: 'Reverse recruiting flips the traditional recruiting model. Instead of a recruiter working for an employer to fill a role, a reverse recruiter works for YOU, the job seeker. We apply to jobs on your behalf, network with hiring managers, source hidden opportunities, and negotiate offers - all with your best interests as our priority.' },
    { question: 'How is this different from a resume writer or career coach?', answer: 'Resume writers format your documents. Career coaches give you advice. Reverse recruiters actually DO the work. We submit 50+ applications per week, reach out directly to hiring managers, find hidden opportunities, coordinate your interviews, and negotiate your offer. We are your active job search execution team.' },
    { question: 'Who are the recruiters that work for me?', answer: 'Your reverse recruiter is a former hiring manager, corporate recruiter, or sourcing specialist with 5+ years of experience. They know exactly how ATS systems work, what hiring managers look for, and how to get your profile noticed. You get a dedicated recruiter for your entire campaign.' },
    { question: 'Can reverse recruiting work for any industry?', answer: 'Yes! We have successfully placed clients in technology, healthcare, finance, marketing, engineering, operations, creative, legal, and executive roles. Our sourcing team specializes in finding opportunities across every major industry.' },
  ],
  'Pricing': [
    { question: 'How much does reverse recruiting cost?', answer: 'Our Starter package is $499 for a 4-week program, Professional is $999 for 8 weeks, and Executive is $2,499 for 12 weeks. Compare that to 6+ months of lost salary from job searching alone, and the ROI is clear. Most clients see a 15-25% higher offer than they would have negotiated themselves.' },
    { question: 'Do you offer payment plans?', answer: 'Yes! All packages can be split into monthly payments with no interest or fees. The Starter plan can be split into 2 payments, Professional into 2-3, and Executive into 3. We want this accessible to everyone who needs it.' },
    { question: 'Is there a money-back guarantee?', answer: 'Absolutely. If you are not satisfied after the first 2 weeks, we offer a full refund, no questions asked. After that period, we offer prorated refunds based on services rendered. We are confident in our results.' },
  ],
  'Process': [
    { question: 'How does the process start?', answer: 'It begins with a free 30-minute discovery call where we learn about your goals, experience, target roles, and ideal companies. Within 48 hours of signing up, your dedicated reverse recruiter launches your campaign - submitting applications, reaching out to hiring managers, and sourcing hidden opportunities.' },
    { question: 'How many jobs do you apply to per week?', answer: 'Starter clients get 30 targeted applications/week. Professional clients get 50+/week. Executive clients get unlimited applications. Every application is customized for the specific role - no mass spam. We target quality over quantity.' },
    { question: 'How do I track what you are doing?', answer: 'You get access to a live dashboard where you can see every application submitted, every hiring manager contacted, every response received, and every interview scheduled. We also send weekly progress reports and hold strategy calls (on Professional and Executive plans).' },
    { question: 'What happens when I get an interview?', answer: 'We coordinate all the scheduling logistics. Then we prepare you with company-specific research, predicted interview questions, and coaching on how to close. After the interview, we help with follow-up strategy. You focus on performing; we handle everything else.' },
  ],
  'Results': [
    { question: 'How long does it take to get results?', answer: 'Most Professional and Executive clients see their first interview within 2-3 weeks. The average time to job offer is 4-8 weeks. Some clients land in as little as 3 weeks. Results vary based on your industry, experience level, and job market conditions.' },
    { question: 'What is your success rate?', answer: 'We have a 98% client satisfaction rate. The vast majority of clients who complete our program land interviews and receive job offers. Clients who do not see results typically have unrealistic expectations (like wanting a $300K role with 1 year of experience) or fail to engage with interview prep.' },
    { question: 'Will you negotiate my salary?', answer: 'Yes, on Professional and Executive plans. Our recruiters use market data and proven negotiation strategies to secure the best possible compensation. On average, our clients see 15-25% higher offers than the initial proposal. We also negotiate signing bonuses, benefits, and start dates.' },
  ],
  'Policies': [
    { question: 'Is my information kept confidential?', answer: 'Absolutely. We have strict confidentiality policies. Your personal information, job search details, and all communications are never shared with third parties. All recruiters sign NDAs. We use secure, encrypted systems for everything.' },
    { question: 'Can I cancel or pause my service?', answer: 'Yes. You can pause your campaign for up to 30 days if you need a break. You can also cancel with a prorated refund based on unused weeks. We are flexible because we know life happens.' },
    { question: 'Do you work with international clients?', answer: 'Yes! We work with clients worldwide. Our recruiters are familiar with job markets in the US, Canada, UK, Australia, and many other countries. All communication is via video call, email, and your dashboard.' },
  ],
}

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('All Questions')

  const currentFAQs = activeTab === 'All Questions'
    ? Object.values(faqData).flat()
    : faqData[activeTab] || []

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
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'FAQ', path: '/faq' }]}
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about reverse recruiting"
      />

      <section className="bg-white pt-12 animate-section">
        <div className="container-main max-w-3xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {categoryTabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-pill text-sm font-medium transition-all duration-300 ${activeTab === tab ? 'bg-brand-dark text-white' : 'bg-brand-light-grey text-brand-slate hover:bg-brand-light-blue hover:text-brand-dark'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding animate-section">
        <div className="container-main max-w-3xl">
          {activeTab === 'All Questions' ? (
            Object.entries(faqData).map(([category, items]) => (
              <div key={category} className="mb-10">
                <h3 className="text-lg font-semibold text-brand-dark mb-4 pb-3 border-b border-black/10">{category}</h3>
                <FAQAccordion items={items} />
              </div>
            ))
          ) : (
            <FAQAccordion items={currentFAQs} />
          )}
        </div>
      </section>

      <section className="bg-brand-light-grey py-20 animate-section">
        <div className="container-main max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">Still Have Questions?</h2>
          <p className="text-brand-slate mt-4">Book a free discovery call and we will answer everything personally.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a href="mailto:support@joblandingpro.com" className="btn-primary flex items-center gap-2">
              <Mail size={18} /> support@joblandingpro.com
            </a>
          </div>
          <p className="text-brand-slate text-sm text-center mt-4">
            For instant replies, use the WhatsApp chat button at the bottom of the page.
          </p>
        </div>
      </section>
    </>
  )
}
