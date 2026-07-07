interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeader({ eyebrow, title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-14 ${centered ? 'text-center' : ''}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-brand-dark leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-brand-slate text-base md:text-lg mt-4 max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
