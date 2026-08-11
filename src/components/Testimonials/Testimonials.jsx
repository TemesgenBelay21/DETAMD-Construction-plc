import { QuoteIcon, StarIcon } from '../Icons/Icons'
import Reveal from '../Reveal/Reveal'
import { useLanguage } from '../../context/LanguageContext/useLanguage'

const testimonials = [
  { id: 't1', initials: 'ST' },
  { id: 't2', initials: 'HB' },
  { id: 't3', initials: 'DM' },
]

export default function Testimonials() {
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-tag">{t('testimonials.tag')}</span>
          <h2>{t('testimonials.title')}</h2>
          <p>{t('testimonials.subtitle')}</p>
        </Reveal>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 80}>
              <article className="testimonial-card">
                <QuoteIcon />
                <p>{t(`testimonials.${testimonial.id}.text`)}</p>
                <div
                  className="testimonial-stars"
                  role="img"
                  aria-label="5 out of 5 stars"
                >
                  {[0, 1, 2, 3, 4].map((star) => (
                    <StarIcon key={star} />
                  ))}
                </div>
                <div className="testimonial-person">
                  <span className="testimonial-avatar">
                    {testimonial.initials}
                  </span>
                  <div>
                    <strong>{t(`testimonials.${testimonial.id}.name`)}</strong>
                    <span>{t(`testimonials.${testimonial.id}.role`)}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
