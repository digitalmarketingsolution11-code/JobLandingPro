import PageHero from '../components/PageHero'

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Privacy Policy', path: '/privacy' }]}
        title="Privacy Policy"
        subtitle="How we protect your personal information"
      />
      <section className="bg-white py-16">
        <div className="container-main max-w-3xl">
          <p className="text-brand-slate mb-6">Last updated: January 1, 2026</p>

          <div className="space-y-8 text-brand-slate leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">1. Introduction</h2>
              <p>JobLandingPro (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services. By accessing or using JobLandingPro, you agree to the terms of this Privacy Policy.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">2. Information We Collect</h2>
              <p className="mb-2">We collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Personal Information:</strong> Name, email address, phone number, mailing address, and other contact details you provide.</li>
                <li><strong>Professional Information:</strong> Resume/CV, work history, education, skills, certifications, and career goals.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and features used.</li>
                <li><strong>Communication Data:</strong> Records of your communications with us, including emails, WhatsApp messages, and consultation calls.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">3. How We Use Your Information</h2>
              <p className="mb-2">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide and improve our reverse recruiting services</li>
                <li>Submit job applications on your behalf</li>
                <li>Communicate with hiring managers and recruiters</li>
                <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                <li>Analyze and improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">4. Information Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong>Potential Employers:</strong> When applying for jobs on your behalf, we share your resume and professional information as directed by you.</li>
                <li><strong>Service Providers:</strong> Trusted third-party vendors who assist us in operating our website and providing our services.</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">5. Data Security</h2>
              <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data is transmitted using SSL encryption.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">6. Your Rights</h2>
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">7. Cookies</h2>
              <p>We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookies through your browser settings.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">8. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@joblandingpro.com" className="text-brand-gold">support@joblandingpro.com</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
