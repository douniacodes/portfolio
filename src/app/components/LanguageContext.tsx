'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export type Language = 'en' | 'fr' | 'es' 

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    home: 'Home',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    creative: 'Creative',
    developer: 'Developer',
    portfolio: 'Portfolio',
    scrollToExplore: 'Scroll to explore',
    featuredProjects: 'Featured Projects',
    hiIm: "Hi, I'm",
    aboutIntro: "I craft digital experiences with purpose and a drive to make an impact.",
    aboutSpecialty: "With frontend as my tool, I bring ideas to life with energy, meaning, and motion.",    
    connect: 'Connect',
    linkedinMe: 'LinkedIn',
    contactForm: 'Get in Touch',
    projectGhcTitle: "GHC Computing",
    projectGhcDescription: "Showcase website developed with React/Next.js",
    projectGhcTech: "React · Next.js · TailwindCSS · SEO Google",
    projectObavocatTitle: "Obavocat",
    projectObavocatDescription: "Professional website developed with Wix",
    projectObavocatTech: "Wix · Design · SEO",
    projectSubconsiaTitle:"Subconsia",
    projectSubconsiaDescription:"Scientific and psychological blog developed with Astro",
    projectSubconsiaTech:"Astro · TailwindCSS · SEO Google",
    projectPlacementsTitle: "Investments For All",
    projectPlacementsDescription: "Financial blog on WordPress",
    projectPlacementsTech: "WordPress · Elementor · SEO",
    visitSite: "Visit website",
    pageNotFound: "Page Not Found",
    pageNotFoundDescription: "The page you're looking for doesn't exist or has been moved.",
    returnHome: "Return Home",
    viewProjects: "View Projects"
  },
  fr: {
    home: 'Accueil',
    projects: 'Projets',
    about: 'À propos',
    contact: 'Contact',
    creative: 'Créative',
    developer: 'Développeuse',
    portfolio: 'Portfolio',
    scrollToExplore: 'Faites défiler pour explorer',
    featuredProjects: 'Projets clés',
    hiIm: 'Coucou, je suis',
    aboutIntro: "Je construis des expériences numériques avec intention et envie d'impact.",
    aboutSpecialty: "Front en main, je donne vie aux idées avec énergie, sens et mouvement.",    
    connect: 'Contact',
    linkedinMe: 'LinkedIn',
    contactForm: 'Être rappelé(e)',
    projectGhcTitle: "GHC Computing",
    projectGhcDescription: "Site vitrine développé avec React/Next.js",
    projectGhcTech: "React · Next.js · TailwindCSS · SEO Google",
    projectObavocatTitle: "Obavocat",
    projectObavocatDescription: "Site professionnel développé avec Wix",
    projectObavocatTech: "Wix · Design · SEO",
    projectSubconsiaTitle:"Subconsia",
    projectSubconsiaDescription:"Blog scientifique et psychologique développé avec Astro",
    projectSubconsiaTech:"Astro · TailwindCSS · SEO Google",
    projectPlacementsTitle: "Placements Pour Tous",
    projectPlacementsDescription: "Blog financier sous WordPress",
    projectPlacementsTech: "WordPress · Elementor · Référencement",
    visitSite: "Visiter le site",
    pageNotFound: "Page Non Trouvée",
    pageNotFoundDescription: "La page que vous recherchez n'existe pas ou a été déplacée.",
    returnHome: "Retour à l'accueil",
    viewProjects: "Voir les projets"
  },
  es: {
    home: 'Inicio',
    projects: 'Proyectos',
    about: 'Acerca de',
    contact: 'Contacto',
    creative: 'Creativa',
    developer: 'Desarrolladora',
    portfolio: 'Portafolio',
    scrollToExplore: 'Desplázate para explorar',
    featuredProjects: 'Proyectos Destacados',
    hiIm: 'Hola, soy',
    aboutIntro: "Diseño experiencias digitales con intención y ganas de generar impacto.",
    aboutSpecialty: "Con el frontend como herramienta, doy vida a las ideas con energía, sentido y movimiento.",    
    connect: 'Conectar',
    linkedinMe: 'LinkedIn',
    contactForm: 'Enviar solicitud',
    projectGhcTitle: "GHC Computing",
    projectGhcDescription: "Sitio web desarrollado con React/Next.js",
    projectGhcTech: "React · Next.js · TailwindCSS · SEO Google",
    projectObavocatTitle: "Obavocat",
    projectObavocatDescription: "Sitio profesional desarrollado con Wix",
    projectObavocatTech: "Wix · Diseño · SEO",
    projectSubconsiaTitle:"Subconsia",
    projectSubconsiaDescription:"Blog científico y psicológico desarrollado con Astro",
    projectSubconsiaTech:"Astro · TailwindCSS · SEO Google",
    projectPlacementsTitle: "Inversiones Para Todos",
    projectPlacementsDescription: "Blog financiero en WordPress",
    projectPlacementsTech: "WordPress · Elementor · SEO",
    visitSite: "Visitar sitio",
    pageNotFound: "Página No Encontrada",
    pageNotFoundDescription: "La página que buscas no existe o ha sido movida.",
    returnHome: "Volver al Inicio",
    viewProjects: "Ver Proyectos"
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const toggleLanguage = () => {
    setLanguage(prev => {
      if (prev === 'en') return 'es'
      if (prev === 'es') return 'fr'
      return 'en'
    })
  }

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
