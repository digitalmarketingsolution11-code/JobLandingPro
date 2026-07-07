import { ArrowUpRight, TrendingUp, Calendar, Briefcase } from 'lucide-react'

interface SuccessStoryCardProps {
  name: string
  title: string
  previousRole: string
  newRole: string
  company: string
  timeline: string
  salaryIncrease: string
  quote: string
  avatar: string
  tag: string
}

export default function SuccessStoryCard({
  name, title, previousRole, newRole, company, timeline, salaryIncrease, quote, avatar, tag
}: SuccessStoryCardProps) {
  return (
    <div className="bg-white border border-black/10 rounded-xl overflow-hidden group hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:border-brand-gold transition-all duration-300">
      {/* Top Tag */}
      <div className="px-6 pt-5 flex items-center justify-between">
        <span className="bg-brand-gold/10 text-brand-gold text-xs font-semibold px-3 py-1 rounded-pill">{tag}</span>
        <span className="flex items-center gap-1 text-xs text-brand-success font-medium">
          <TrendingUp size={14} /> {salaryIncrease}
        </span>
      </div>

      {/* Quote */}
      <div className="px-6 pt-4 pb-5">
        <p className="text-brand-dark text-[15px] leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
      </div>

      {/* Before / After */}
      <div className="mx-6 bg-brand-light-grey rounded-lg p-4">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-xs text-brand-slate">Before</p>
            <p className="text-sm text-brand-dark font-medium">{previousRole}</p>
          </div>
          <ArrowUpRight size={18} className="text-brand-gold shrink-0" />
          <div className="flex-1">
            <p className="text-xs text-brand-slate">After</p>
            <p className="text-sm text-brand-gold font-semibold">{newRole}</p>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="px-6 py-4 flex items-center gap-4 border-b border-black/5">
        <span className="flex items-center gap-1 text-xs text-brand-slate"><Briefcase size={12} /> {company}</span>
        <span className="flex items-center gap-1 text-xs text-brand-slate"><Calendar size={12} /> {timeline}</span>
      </div>

      {/* Author */}
      <div className="px-6 py-4 flex items-center gap-3">
        <img src={avatar} alt={name} className="w-11 h-11 rounded-full object-cover" />
        <div>
          <p className="text-sm font-semibold text-brand-dark">{name}</p>
          <p className="text-xs text-brand-slate">{title}</p>
        </div>
      </div>
    </div>
  )
}
