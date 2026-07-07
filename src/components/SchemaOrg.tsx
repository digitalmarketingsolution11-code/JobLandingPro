export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://joblandingpro.com/#organization",
        name: "JobLandingPro",
        url: "https://joblandingpro.com",
        logo: {
          "@type": "ImageObject",
          url: "https://joblandingpro.com/assets/logo.png",
        },
        description: "The #1 reverse recruiting service. We apply to jobs, network with hiring managers, and negotiate offers on your behalf.",
        email: "support@joblandingpro.com",
        sameAs: [
          "https://twitter.com/joblandingpro",
          "https://facebook.com/joblandingpro",
          "https://instagram.com/joblandingpro",
        ],
        founder: {
          "@type": "Person",
          name: "Atolagbe Abdulazeez",
          jobTitle: "Founder & CEO",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "5000",
          bestRating: "5",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://joblandingpro.com/#website",
        url: "https://joblandingpro.com",
        name: "JobLandingPro",
        publisher: { "@id": "https://joblandingpro.com/#organization" },
      },
      {
        "@type": "Service",
        name: "Reverse Recruiting",
        provider: { "@id": "https://joblandingpro.com/#organization" },
        description: "Full-service reverse recruiting where we apply to jobs, network with hiring managers, and negotiate offers on your behalf.",
        areaServed: "Worldwide",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Reverse Recruiting Packages",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Starter Package",
                description: "Entry-level reverse recruiting for recent graduates",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Professional Package",
                description: "Reverse recruiting for experienced professionals",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Executive Package",
                description: "Premium reverse recruiting for senior leaders and C-suite",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is reverse recruiting?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Reverse recruiting flips the traditional recruiting model. Instead of a recruiter working for an employer, a reverse recruiter works for YOU, the job seeker. We apply to jobs on your behalf, network with hiring managers, source hidden opportunities, and negotiate offers.",
            },
          },
          {
            "@type": "Question",
            name: "How much does reverse recruiting cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer customized Job Landing Packages based on your experience level and goals. Contact us for a free personalized quote with no obligation.",
            },
          },
          {
            "@type": "Question",
            name: "What is your success rate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We have a 98% client satisfaction rate. Most clients land interviews within 2-3 weeks and receive job offers within 4-8 weeks.",
            },
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
