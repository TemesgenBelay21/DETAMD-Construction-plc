import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '../Icons/Icons'
import { useLanguage } from '../../context/LanguageContext/useLanguage'

const links = [
  { href: '#home', key: 'nav.home' },
  { href: '#about', key: 'nav.about' },
  { href: '#why-us', key: 'nav.why' },
  { href: '#services', key: 'nav.services' },
  { href: '#projects', key: 'nav.projects' },
  { href: '#contact', key: 'nav.contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -60% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="brand" aria-label={t('brand.main')}>
          <span className="brand-mark">D</span>
          <span className="brand-text">
            {t('brand.main')}
            <span>{t('brand.sub')}</span>
          </span>
        </a>

        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href.slice(1) ? 'active' : undefined}
              onClick={() => setOpen(false)}
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="lang-switch" role="group" aria-label={t('nav.language')}>
            <button
              type="button"
              className={lang === 'en' ? 'lang-btn active' : 'lang-btn'}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              className={lang === 'am' ? 'lang-btn active' : 'lang-btn'}
              onClick={() => setLang('am')}
              aria-pressed={lang === 'am'}
            >
              አማ
            </button>
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === 'light' ? t('nav.themeDark') : t('nav.themeLight')}
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
          <button
            type="button"
            className={open ? 'nav-burger open' : 'nav-burger'}
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
