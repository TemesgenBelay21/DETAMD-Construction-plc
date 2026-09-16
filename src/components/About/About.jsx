import Reveal from '../Reveal/Reveal'
import { useLanguage } from '../../context/LanguageContext/useLanguage'

const pointKeys = [
  'about.point1',
  'about.point2',
  'about.point3',
  'about.point4',
]

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="two-col">
          <Reveal className="about-visual">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
              alt={t('about.title')}
            />
            <div className="badge">
              <strong>25+</strong>
              <span>{t('about.badge')}</span>
            </div>
          </Reveal>

          <Reveal delay={120} className="about-text">
            <span className="section-tag">{t('about.tag')}</span>
            <h2>{t('about.title')}</h2>
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <ul className="check-list">
              {pointKeys.map((key) => (
                <li key={key}>{t(key)}</li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-primary">
              {t('about.cta')}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
