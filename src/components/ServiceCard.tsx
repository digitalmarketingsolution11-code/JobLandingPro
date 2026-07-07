import { Link } from 'react-router-dom'
import { ArrowRight, type LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  deliverables?: string[]
  showDeliverables?: boolean
}

export default function ServiceCard({ icon: Icon, title, description, deliverables, showDeliverables = false }: ServiceCardProps) {
  return (
    <div className="bg-white border border-black/10 rounded-xl p-8 md:p-10 group hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:border-brand-gold hover:-translate-y-1 transition-all duration-300">
      <div className="w-16 h-16 rounded-xl bg-brand-light-blue flex items-center justify-center mb-6">
        <Icon size={32} className="text-brand-gold" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold text-brand-dark">{title}</h3>
      <p className="text-brand-slate text-[15px] leading-relaxed mt-3">{description}</p>
      
      {showDeliverables && deliverables && (
        <ul className="mt-5 space-y-2">
          {deliverables.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-brand-dark">
              <span className="w-4 h-4 rounded-full bg-brand-success/20 flex items-center justify-center shrink-0">
                <CheckSmall />
              </span>
              {item}
            </li>
          ))}
        </ul>
      )}
      
      <Link
        to="/services"
        className="inline-flex items-center gap-1.5 text-brand-gold font-semibold text-sm mt-5 group-hover:gap-2.5 transition-all duration-300"
      >
        Learn More <ArrowRight size={16} />
      </Link>
    </div>
  )
}

function CheckSmall() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 5L4 7L8 3" stroke="#28A745" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
