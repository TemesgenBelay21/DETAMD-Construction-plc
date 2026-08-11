import { useLanguage } from '../../context/LanguageContext/useLanguage'

export default function CtaBanner() {
  const { t } = useLanguage()

  return (
    <section className="cta-banner">
      <div className="container cta-inner">
        <h2>{t('cta.title')}</h2>
        <p>{t('cta.text')}</p>
        <a href="#contact" className="btn btn-gold">
          {t('cta.button')}
        </a>
      </div>
    </section>
  )
}
