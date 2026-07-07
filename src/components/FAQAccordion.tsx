import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="divide-y divide-black/10">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between py-5 text-left group"
          >
            <span className={`text-base md:text-lg font-medium pr-8 transition-colors ${
              openIndex === index ? 'text-brand-gold' : 'text-brand-dark group-hover:text-brand-gold'
            }`}>
              {item.question}
            </span>
            <ChevronDown
              size={20}
              className={`shrink-0 text-brand-slate transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
            }`}
          >
            <p className="text-brand-slate leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
