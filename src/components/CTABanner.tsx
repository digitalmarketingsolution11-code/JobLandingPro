import { Link } from 'react-router-dom'
import { Shield, Users, CheckCircle } from 'lucide-react'

interface CTABannerProps {
  heading: string
  description: string
  buttonText: string
  buttonLink: string
  showTrustIndicators?: boolean
  secondaryButton?: { text: string; link: string }
}

const trustItems = [
  { icon: Shield, number: '15+', label: 'Years Experience' },
  { icon: Users, number: '5,000+', label: 'Clients Helped' },
  { icon: CheckCircle, number: '98%', label: 'Success Rate' },
]

export default function CTABanner({
  heading,
  description,
  buttonText,
  buttonLink,
  showTrustIndicators = true,
  secondaryButton,
}: CTABannerProps) {
  return (
    <section className="bg-brand-dark relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="container-main section-padding relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-white leading-tight">
            {heading}
          </h2>
          <p className="text-white/80 text-base md:text-lg mt-5 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link to={buttonLink} className="btn-primary text-base px-8 py-4">
              {buttonText}
            </Link>
            {secondaryButton && (
              <Link to={secondaryButton.link} className="btn-outline-white text-base px-8 py-4">
                {secondaryButton.text}
              </Link>
            )}
          </div>

          {showTrustIndicators && (
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-12">
              {trustItems.map((item) => (
                <div key={item.label} className="flex flex-col items-center text-center">
                  <item.icon size={24} className="text-brand-gold mb-2" />
                  <span className="text-2xl font-bold text-brand-gold">{item.number}</span>
                  <span className="text-white/60 text-sm mt-1">{item.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
