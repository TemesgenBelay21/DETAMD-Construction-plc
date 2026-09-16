import { useEffect, useState } from 'react'
import './App.css'
import LanguageProvider from './context/LanguageContext/LanguageProvider'
import { useLanguage } from './context/LanguageContext/useLanguage'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import CtaBanner from './components/CtaBanner/CtaBanner'
import Contact from './components/Contact/Contact'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import BackToTop from './components/BackToTop/BackToTop'

function AppContent() {
  const { lang } = useLanguage()

  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('detamd-theme')
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('detamd-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  const toggleTheme = () =>
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))

  return (
    <>
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <Projects />
        <CtaBanner />
        <Contact />
        <Testimonials />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}
