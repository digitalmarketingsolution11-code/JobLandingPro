import { Star } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  author: string
  title: string
  stars?: number
  avatar?: string
  featured?: boolean
}

export default function TestimonialCard({ quote, author, title, stars = 5, avatar, featured = false }: TestimonialCardProps) {
  if (featured) {
    return (
      <div className="bg-brand-dark rounded-xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-video md:aspect-auto">
            <img
              src="/assets/testimonial-video-thumbnail.jpg"
              alt="Video testimonial"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 rounded-full bg-brand-gold/90 flex items-center justify-center hover:scale-110 transition-transform duration-300" aria-label="Play video">
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
                  <path d="M20 12L0 24V0L20 12Z" fill="white" />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="text-brand-gold text-6xl font-display leading-none opacity-30">&ldquo;</span>
            <p className="text-white text-lg md:text-xl font-medium italic leading-relaxed -mt-4">
              {quote}
            </p>
            <div className="flex items-center gap-1 mt-5">
              {Array.from({ length: stars }).map((_, i) => (
                <Star key={i} size={16} className="text-brand-gold fill-brand-gold" />
              ))}
            </div>
            <div className="mt-5">
              <p className="text-white font-semibold">{author}</p>
              <p className="text-white/60 text-sm">{title}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white border border-black/10 rounded-xl p-8">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} size={16} className="text-brand-gold fill-brand-gold" />
        ))}
      </div>
      <p className="text-brand-dark text-[15px] leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3 mt-6">
        {avatar && (
          <img src={avatar} alt={author} className="w-12 h-12 rounded-full object-cover" />
        )}
        <div>
          <p className="text-brand-dark font-semibold text-sm">{author}</p>
          <p className="text-brand-slate text-xs">{title}</p>
        </div>
      </div>
    </div>
  )
}
