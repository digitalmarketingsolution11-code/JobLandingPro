import { Clock, Calendar } from 'lucide-react'

interface BlogCardProps {
  image: string
  category: string
  title: string
  excerpt: string
  readTime: string
  date: string
}

export default function BlogCard({ image, category, title, excerpt, readTime, date }: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl overflow-hidden group hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <span className="inline-block bg-brand-light-blue text-brand-dark text-xs font-semibold px-3 py-1 rounded-pill">
          {category}
        </span>
        <h3 className="text-lg font-semibold text-brand-dark mt-3 leading-snug group-hover:text-brand-gold transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        <p className="text-brand-slate text-sm mt-2 leading-relaxed line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between mt-4 text-brand-slate text-xs">
          <span className="flex items-center gap-1"><Clock size={12} /> {readTime}</span>
          <span className="flex items-center gap-1"><Calendar size={12} /> {date}</span>
        </div>
      </div>
    </article>
  )
}
