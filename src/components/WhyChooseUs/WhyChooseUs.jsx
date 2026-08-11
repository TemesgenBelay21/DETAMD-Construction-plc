import {
  AwardIcon,
  ClockIcon,
  HeadsetIcon,
  ShieldIcon,
  TagIcon,
  UsersIcon,
} from '../Icons/Icons'
import Reveal from '../Reveal/Reveal'
import { useLanguage } from '../../context/LanguageContext/useLanguage'

const reasons = [
  { id: 'r1', icon: AwardIcon },
  { id: 'r2', icon: ClockIcon },
  { id: 'r3', icon: ShieldIcon },
  { id: 'r4', icon: UsersIcon },
  { id: 'r5', icon: TagIcon },
  { id: 'r6', icon: HeadsetIcon },
]

export default function WhyChooseUs() {
  const { t } = useLanguage()

  return (
    <section id="why-us" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-tag">{t('why.tag')}</span>
          <h2>{t('why.title')}</h2>
          <p>{t('why.subtitle')}</p>
        </Reveal>

        <div className="cards-grid">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Reveal key={reason.id} delay={index * 80}>
                <article className="card">
                  <div className="card-icon">
                    <Icon />
                  </div>
                  <h3>{t(`why.${reason.id}.title`)}</h3>
                  <p>{t(`why.${reason.id}.text`)}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
