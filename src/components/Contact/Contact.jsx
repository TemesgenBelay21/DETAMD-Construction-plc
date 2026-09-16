import { useState } from 'react'
import { MailIcon, MapPinIcon, PhoneIcon } from '../Icons/Icons'
import Reveal from '../Reveal/Reveal'
import FAQ from '../FAQ/FAQ'
import { useLanguage } from '../../context/LanguageContext/useLanguage'

const contactInfo = [
  { id: 'visit', icon: MapPinIcon, valueKey: 'contact.address' },
  { id: 'call', icon: PhoneIcon, valueKey: 'contact.phone' },
  { id: 'email', icon: MailIcon, valueKey: 'contact.mail' },
]

const subjectOptions = ['opt1', 'opt2', 'opt3', 'opt4', 'opt5']

export default function Contact() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-tag">{t('contact.tag')}</span>
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.subtitle')}</p>
        </Reveal>

        <Reveal delay={80} className="faq-wrap">
          <FAQ />
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-info">
            <h3>{t('contact.heading')}</h3>
            <p>{t('contact.text')}</p>
            <ul className="contact-list">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.id}>
                    <div className="contact-icon">
                      <Icon />
                    </div>
                    <div>
                      <strong>{t(`contact.${item.id}`)}</strong>
                      <span>{t(item.valueKey)}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Reveal>

          <Reveal delay={120} className="contact-form">
            {submitted ? (
              <div className="form-success">
                <strong>{t('contact.successTitle')}</strong>
                <p>{t('contact.successText')}</p>
              </div>
            ) : (
              <form className="form-body" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="name">{t('contact.name')}</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder={t('contact.namePh')}
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="email">{t('contact.emailLabel')}</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t('contact.emailPh')}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="subject">{t('contact.subject')}</label>
                  <select id="subject" name="subject" defaultValue="">
                    <option value="" disabled>
                      {t('contact.subjectPh')}
                    </option>
                    {subjectOptions.map((option) => (
                      <option key={option}>{t(`contact.${option}`)}</option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">{t('contact.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder={t('contact.messagePh')}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  {t('contact.submit')}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
