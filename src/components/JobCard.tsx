import { MapPin, DollarSign, Clock, Bookmark, ArrowRight } from 'lucide-react'
import { useState } from 'react'

interface JobCardProps {
  title: string
  company: string
  location: string
  salary: string
  type: string
  tags: string[]
  description?: string
  postedDate?: string
  experience?: string
  onApply?: () => void
}

export default function JobCard({ title, company, location, salary, type, tags, description, postedDate, onApply }: JobCardProps) {
  const [saved, setSaved] = useState(false)

  return (
    <div className="bg-white border border-black/10 rounded-xl p-6 group hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:border-brand-gold transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-brand-light-grey flex items-center justify-center text-brand-dark font-bold text-lg shrink-0">
            {company.charAt(0)}
          </div>
          <div>
            <h3 className="text-base font-semibold text-brand-dark group-hover:text-brand-gold transition-colors">{title}</h3>
            <p className="text-sm text-brand-slate">{company}</p>
          </div>
        </div>
        <button
          onClick={() => setSaved(!saved)}
          className={`p-1.5 transition-colors ${saved ? 'text-brand-gold' : 'text-brand-slate hover:text-brand-gold'}`}
          aria-label={saved ? 'Remove from saved' : 'Save job'}
        >
          <Bookmark size={18} className={saved ? 'fill-brand-gold' : ''} />
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-brand-slate">
        <span className="flex items-center gap-1"><MapPin size={14} /> {location}</span>
        <span className="flex items-center gap-1"><DollarSign size={14} /> {salary}</span>
        <span className="flex items-center gap-1"><Clock size={14} /> {type}</span>
      </div>

      {description && (
        <p className="text-sm text-brand-slate mt-3 line-clamp-2">{description}</p>
      )}

      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag) => (
          <span key={tag} className="bg-brand-light-blue text-brand-dark text-xs font-medium px-3 py-1 rounded-pill">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-black/5">
        {postedDate && <span className="text-xs text-brand-slate">{postedDate}</span>}
        <button
          onClick={onApply}
          className="btn-primary text-sm px-5 py-2.5 ml-auto flex items-center gap-1"
        >
          Apply Now <ArrowRight size={14} />
        </button>
      </div>
    </div>
  )
}
