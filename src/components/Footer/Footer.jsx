import { useLanguage } from '../../context/LanguageContext/useLanguage'

const quickLinks = [
  { href: '#home', key: 'nav.home' },
  { href: '#about', key: 'nav.about' },
  { href: '#services', key: 'nav.services' },
  { href: '#projects', key: 'nav.projects' },
  { href: '#contact', key: 'nav.contact' },
]

const serviceKeys = ['s1', 's2', 's3', 's4', 's5']

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#home" className="brand">
            <span className="brand-mark">D</span>
            <span className="brand-text">
              {t('brand.main')}
              <span>{t('brand.sub')}</span>
            </span>
          </a>
          <p>{t('footer.about')}</p>
        </div>

        <div>
          <h4>{t('footer.links')}</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{t(link.key)}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>{t('footer.services')}</h4>
          <ul>
            {serviceKeys.map((key) => (
              <li key={key}>
                <a href="#services">{t(`services.${key}.title`)}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>{t('footer.contact')}</h4>
          <ul className="footer-contact">
            <li>{t('contact.address')}</li>
            <li>{t('contact.phone')}</li>
            <li>{t('contact.mail')}</li>
            <li>{t('footer.hours')}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} {t('brand.main')} {t('brand.sub')}.{' '}
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
