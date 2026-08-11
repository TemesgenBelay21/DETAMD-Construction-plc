import { useState } from 'react'
import { LanguageContext } from './LanguageContext.js'
import { translations } from '../../i18n'

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  const t = (key) => translations[lang]?.[key] ?? translations.en[key] ?? key

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
