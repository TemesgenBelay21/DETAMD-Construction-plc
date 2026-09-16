import { useEffect, useState } from 'react'
import { ArrowIcon } from '../Icons/Icons'
import { useLanguage } from '../../context/LanguageContext/useLanguage'

export default function BackToTop() {
  const { t } = useLanguage()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      className={show ? 'back-to-top visible' : 'back-to-top'}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={t('nav.backToTop')}
    >
      <ArrowIcon />
    </button>
  )
}
