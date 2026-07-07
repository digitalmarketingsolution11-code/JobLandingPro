import PageHero from '../components/PageHero'

export default function TermsOfUse() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Terms of Use', path: '/terms' }]}
        title="Terms of Use"
        subtitle="The rules and regulations for using JobLandingPro"
      />
      <section className="bg-white py-16">
        <div className="container-main max-w-3xl">
          <p className="text-brand-slate mb-6">Last updated: January 1, 2026</p>

          <div className="space-y-8 text-brand-slate leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using JobLandingPro.com (&quot;the Website&quot;) and our services, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">2. Our Services</h2>
              <p>JobLandingPro provides reverse recruiting services, including but not limited to: strategic job application submission, hiring manager outreach, interview coordination, salary negotiation support, and career consulting. We act as your representative in the job search process.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">3. User Responsibilities</h2>
              <p className="mb-2">By using our services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide accurate, current, and complete information about yourself</li>
                <li>Maintain the accuracy of your information and update it as needed</li>
                <li>Provide a truthful and accurate resume/CV</li>
                <li>Respond to interview requests and communications in a timely manner</li>
                <li>Inform us of any job offers received independently</li>
                <li>Not use our services for any unlawful purpose</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">4. Resume and Application Accuracy</h2>
              <p>You are solely responsible for the accuracy of the information in your resume, cover letters, and any other materials we submit on your behalf. We will present your information professionally, but we rely on you to ensure all claims about your experience, education, and qualifications are truthful.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">5. Service Fees and Payments</h2>
              <p>Fees for our services are outlined in your custom Job Landing Package. Payment terms are specified in your service agreement. All fees are non-refundable except as specified in our refund policy or required by law.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">6. No Guarantee of Employment</h2>
              <p>While we are committed to providing high-quality reverse recruiting services and have a strong track record of success, we cannot guarantee that you will receive job offers or employment. Results depend on various factors including market conditions, your qualifications, and interview performance.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">7. Confidentiality</h2>
              <p>We treat all client information as strictly confidential. We will not disclose your personal information or job search activities to third parties without your consent, except as necessary to perform our services (e.g., submitting applications to employers).</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">8. Intellectual Property</h2>
              <p>All content on the Website, including text, graphics, logos, and images, is the property of JobLandingPro and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">9. Limitation of Liability</h2>
              <p>JobLandingPro shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount you paid for our services in the 12 months preceding the claim.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">10. Modifications to Terms</h2>
              <p>We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the Website. Your continued use of our services constitutes acceptance of the modified terms.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">11. Contact Information</h2>
              <p>For questions about these Terms of Use, please contact us at <a href="mailto:support@joblandingpro.com" className="text-brand-gold">support@joblandingpro.com</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
