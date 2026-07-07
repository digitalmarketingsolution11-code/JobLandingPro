import { Link } from 'react-router-dom'

interface PageHeroProps {
  breadcrumb: { label: string; path: string }[]
  title: string
  subtitle: string
  height?: string
}

export default function PageHero({ breadcrumb, title, subtitle, height = '40vh' }: PageHeroProps) {
  return (
    <section
      className="bg-brand-dark flex items-center min-h-[300px]"
      style={{ height }}
    >
      <div className="container-main">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/60 mb-4">
          {breadcrumb.map((item, i) => (
            <span key={item.path} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              <Link
                to={item.path}
                className={`transition-colors hover:text-brand-gold ${
                  i === breadcrumb.length - 1 ? 'text-white/80' : ''
                }`}
              >
                {item.label}
              </Link>
            </span>
          ))}
        </nav>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/80 mt-3 max-w-2xl">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
