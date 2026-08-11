import {
  BuildingIcon,
  ClipboardIcon,
  HammerIcon,
  PlugIcon,
  RoadIcon,
  RulerIcon,
} from '../Icons/Icons'
import Reveal from '../Reveal/Reveal'
import { useLanguage } from '../../context/LanguageContext/useLanguage'

const services = [
  { id: 's1', icon: BuildingIcon },
  { id: 's2', icon: HammerIcon },
  { id: 's3', icon: RulerIcon },
  { id: 's4', icon: ClipboardIcon },
  { id: 's5', icon: RoadIcon },
  { id: 's6', icon: PlugIcon },
]

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-tag">{t('services.tag')}</span>
          <h2>{t('services.title')}</h2>
          <p>{t('services.subtitle')}</p>
        </Reveal>

        <div className="cards-grid">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal key={service.id} delay={index * 80}>
                <article className="card">
                  <div className="card-icon">
                    <Icon />
                  </div>
                  <h3>{t(`services.${service.id}.title`)}</h3>
                  <p>{t(`services.${service.id}.text`)}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
