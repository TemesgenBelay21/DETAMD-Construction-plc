import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext/useLanguage'

const faqIds = ['q1', 'q2', 'q3', 'q4']

export default function FAQ() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(0)

  return (
    <div className="faq">
      <div className="faq-head">
        <span className="section-tag">{t('faq.tag')}</span>
        <h3>{t('faq.title')}</h3>
        <p>{t('faq.subtitle')}</p>
      </div>
      <div className="faq-list">
        {faqIds.map((id, index) => (
          <div className={open === index ? 'faq-item open' : 'faq-item'} key={id}>
            <button
              type="button"
              className="faq-question"
              onClick={() => setOpen(open === index ? -1 : index)}
              aria-expanded={open === index}
            >
              <span>{t(`faq.${id}`)}</span>
              <span className="faq-icon" aria-hidden="true" />
            </button>
            <div className="faq-answer">
              <p>{t(`faq.a${id.slice(1)}`)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
