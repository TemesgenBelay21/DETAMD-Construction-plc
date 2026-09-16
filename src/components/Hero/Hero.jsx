import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext/useLanguage'

function useCountUp(target, active, duration = 1600) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let frame
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target, duration])

  return value
}

function StatItem({ target, suffix, label, active }) {
  const value = useCountUp(target, active)
  return (
    <div className="hero-stat">
      <strong>
        {value}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  )
}

export default function Hero() {
  const { t } = useLanguage()
  const statsRef = useRef(null)
  const [statsVisible, setStatsVisible] = useState(false)

  const stats = [
    { target: 25, suffix: '+', label: t('hero.stat1') },
    { target: 180, suffix: '+', label: t('hero.stat2') },
    { target: 60, suffix: '+', label: t('hero.stat3') },
    { target: 98, suffix: '%', label: t('hero.stat4') },
  ]

  const avatars = ['DA', 'MT', 'KB', 'SY']

  useEffect(() => {
    const element = statsRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg" role="img" aria-label={t('hero.eyebrow')}>
        <div className="hero-overlay" />
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
      </div>

      <div className="hero-content">
        <span className="hero-eyebrow">{t('hero.eyebrow')}</span>
        <h1>
          {t('hero.title1')}
          <span> {t('hero.title2')}</span>
        </h1>
        <p>{t('hero.subtitle')}</p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            {t('hero.cta1')}
          </a>
          <a href="#contact" className="btn btn-outline">
            {t('hero.cta2')}
          </a>
        </div>
        <div className="hero-trust">
          <div className="avatar-stack">
            {avatars.map((initials) => (
              <span key={initials}>{initials}</span>
            ))}
          </div>
          <span>{t('hero.trust')}</span>
        </div>
      </div>

      <div className="hero-stats" ref={statsRef}>
        {stats.map((stat) => (
          <StatItem
            key={stat.label}
            target={stat.target}
            suffix={stat.suffix}
            label={stat.label}
            active={statsVisible}
          />
        ))}
      </div>
    </section>
  )
}
