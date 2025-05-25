'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useLanguage } from './LanguageContext'

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage() 

  const navItems = language === 'en'
    ? [
        { label: 'Home', href: '#home' },
        { label: 'Work', href: '#work' },
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
      ]
    : language === 'es' 
    ? [
        { label: 'Inicio', href: '#home' },
        { label: 'Proyectos', href: '#work' },
        { label: 'Acerca de', href: '#about' },
        { label: 'Contacto', href: '#contact' },
      ]
    : [
        { label: 'Accueil', href: '#home' },
        { label: 'Projets', href: '#work' },
        { label: 'À propos', href: '#about' },
        { label: 'Contact', href: '#contact' },
      ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/60 backdrop-blur-md border-b border-white/10">
      {/* Logo */}
      <div className="w-13 h-13">
        <Link href="/" aria-label={language === 'en' ? 'Home' : language === 'es' ? 'Inicio' : 'Accueil'}>
          <img src="/LogoDB.svg" alt="Logo DB" className="w-full h-full" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-8 items-center">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={{
              pathname: '/',
              hash: item.href,
            }}
            className="text-white/80 hover:text-white transition-colors"
          >
            {item.label}
          </Link>
        ))}
        <button
          onClick={toggleLanguage}
          className="text-sm uppercase border px-2 py-1 rounded text-white/80 hover:bg-white hover:text-black transition"
        >
          {language === 'en' ? 'ES' : language === 'es' ? 'FR' : 'EN'}
        </button>
      </nav>

      {/* Mobile Burger */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black/90 text-white flex flex-col gap-4 px-6 py-4 md:hidden items-end text-right">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={{
                pathname: '/',
                hash: item.href,
              }}
              className="text-white/80 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => {
              toggleLanguage()
              setOpen(false)
            }}
            className="text-sm uppercase border px-2 py-1 rounded hover:bg-white hover:text-black transition w-fit"
          >
            {language === 'en' ? 'ES' : language === 'es' ? 'FR' : 'EN'}
          </button>
        </div>
      )}
    </header>
  )
}
