'use client'
import { useRef, useEffect } from 'react'
import { useLanguage } from './components/LanguageContext'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { title } from 'process'

export default function Home() {
  const { t } = useLanguage()
  const projectsContainerRef = useRef<HTMLDivElement>(null)
  const projectsContentRef = useRef<HTMLDivElement>(null)
  
  const refs = {
    title: useRef<HTMLHeadingElement>(null),
    particles: useRef<HTMLDivElement>(null),
  }

  // Projects data
  const projects = [
    {
      titleKey: 'projectGhcTitle',
      descriptionKey: 'projectGhcDescription',
      techKey: 'projectGhcTech',
      url: "https://ghc-computing.com",
      github: "https://github.com/douniacodes",
      color: "from-indigo-800/30 to-blue-700/20",
      image: "/ghc-preview.jpg"
    },
    {
      titleKey: 'projectObavocatTitle',
      descriptionKey: 'projectObavocatDescription',
      techKey: 'projectObavocatTech',
      url: "https://www.obavocat.com",
      github: "https://github.com/douniacodes",
      color: "from-fuchsia-700/40 to-red-500/30",
      image: "/obavocat-preview.jpg"
    },
    {
      titleKey: 'projectSubconsiaTitle',
      descriptionKey: 'projectSubconsiaDescription',
      techKey: 'projectSubconsiaTech',
      url: "https://subconsia.com",
      github: "https://github.com/douniacodes",
      image: "/subconsia-preview.jpg"
    },
    {
      titleKey: 'projectPlacementsTitle',
      descriptionKey: 'projectPlacementsDescription',
      techKey: 'projectPlacementsTech',
      url: "https://placementspourtous.fr",
      github: "https://github.com/douniacodes",
      color: "from-yellow-500/20 to-green-600/30",
      image: "/placements-preview.jpg"
    }, 
    {
      titleKey: 'projectMeteorTitle', 
      descriptionKey: 'projectMeteorDescription',
      techKey: 'projectMeteorTech',
      url: "https://meteor-chi.vercel.app/",
      github: "https://github.com/douniacodes/Meteor",
      color: "from-cyan-700/30 to-blue-800/30",
      image: "/meteor-preview.jpg"
    },
    {
      titleKey: 'projectLunarTitle',
      descriptionKey: 'projectLunarDescription',
      techKey: 'projectLunarTech',
      url: "https://lunar-mystica.vercel.app/",
      github: "https://github.com/douniacodes/lunar_mystica",
      color: "from-purple-700/30 to-pink-600/30",
      image: "/lunar-preview.jpg"
    },
    {
      titleKey: 'projectAnalyzerTitle',
      descriptionKey: 'projectAnalyzerDescription',
      techKey: 'projectAnalyzerTech',
      url: "https://analysedecouleurs.vercel.app/",
      github: "https://github.com/douniacodes/Analysedecouleurs",
      color: "from-green-700/30 to-blue-800/30",
      image: "/analyzer-preview.jpg"
    },
    {
      titleKey: 'projectIdeasGeneratorTitle',
      descriptionKey: 'projectIdeasGeneratorDescription',
      techKey: 'projectIdeasGeneratorTech',
      url: "https://ideasgenerator-gamma.vercel.app/",
      github: "https://github.com/douniacodes/IdeasGenerator",
      color: "from-yellow-600/30 to-orange-500/30",
      image: "/ideas-preview.jpg"
    }
  ]

  useEffect(() => {
    // Nettoyer l'instance précédente si elle existe
    if ((window as any).lenis) {
      (window as any).lenis.destroy()
      delete (window as any).lenis
    }

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1.2,
      gestureOrientation: 'vertical',
      autoRaf: false,
      anchors: {
        offset: 0,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }
    })
  
    // Stockez Lenis dans window pour y accéder depuis le Header
    ;(window as any).lenis = lenis
  
    gsap.registerPlugin(ScrollTrigger)
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
  
    let horizontalTrigger: ScrollTrigger
    let isInHorizontalSection = false
  
    const setupHorizontalScroll = () => {
      if (!projectsContainerRef.current || !projectsContentRef.current) return
  
      const container = projectsContainerRef.current
      const content = projectsContentRef.current
      const projectWidth = container.offsetWidth
      const totalWidth = projectWidth * projects.length
  
      content.style.width = `${totalWidth}px`
  
      if (horizontalTrigger) horizontalTrigger.kill()
  
      horizontalTrigger = ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        pin: true,
        scrub: 1.2,
        animation: gsap.to(content, {
          x: -totalWidth + projectWidth,
          ease: 'power2.inOut',
        }),
        onEnter: () => {
          isInHorizontalSection = true
          lenis.options.gestureOrientation = 'horizontal'
          lenis.options.touchMultiplier = 1.2
        },
        onLeave: () => {
          isInHorizontalSection = false
          lenis.options.gestureOrientation = 'vertical'
          lenis.options.touchMultiplier = 1
        },
        onLeaveBack: () => {
          isInHorizontalSection = false
          lenis.options.gestureOrientation = 'vertical'
        }
      })
  
      // Gestion tactile
      let touchStartX = 0
      let isHorizontalScroll = false
  
      container.addEventListener('touchstart', (e) => {
        if (!isInHorizontalSection) return
        touchStartX = e.touches[0].clientX
        isHorizontalScroll = false
      }, { passive: true })
  
      container.addEventListener('touchmove', (e) => {
        if (!isInHorizontalSection || !horizontalTrigger.isActive) return
        
        const xDiff = e.touches[0].clientX - touchStartX
        if (Math.abs(xDiff) > 25) { 
          isHorizontalScroll = true
          e.preventDefault()
        }
      }, { passive: false })
  
      container.addEventListener('touchend', () => {
        isHorizontalScroll = false
      }, { passive: true })
    }
  
    setupHorizontalScroll()
  
    const handleResize = () => {
      setupHorizontalScroll()
      ScrollTrigger.refresh()
    }
  
    window.addEventListener('resize', handleResize)
  
    return () => {
      window.removeEventListener('resize', handleResize)
      if (horizontalTrigger) horizontalTrigger.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      lenis.destroy()
      delete (window as any).lenis
    }
  }, [projects, t])

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('section')
    if (sections[index]) {
      new Lenis().scrollTo(sections[index], {
        offset: 0,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      })
    }
  }


  return (
      <div className="overflow-hidden text-white bg-black">
 {/* Background Particles */}
 <div ref={refs.particles} className="fixed inset-0 pointer-events-none z-0">
    {/* Subtle grid pattern */}
    <div className="absolute inset-0 opacity-[3%] bg-[size:50px_50px] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]" />
    
    {/* Animated center focus */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] opacity-3">
      <div className="absolute inset-0 rounded-full border border-white animate-pulse-slow" style={{
        animationDuration: '15s'
      }} />
    </div>
  </div>

  {/* Hero Section */}
  <section id="home" className="h-screen flex flex-col justify-center px-10 relative overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center pt-[4vh]">
      <div className="w-[80vmin] h-[80vmin] relative">
        <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow" />
        <div className="absolute inset-0 rounded-full opacity-[0.5%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_0%,transparent_60%)] animate-pulse" style={{
          animationDuration: '12s'
        }} />
      </div>
    </div>


        <h1
          ref={refs.title}
          className="text-[12vw] sm:text-[15vw] md:text-[13vw] lg:text-[11vw] font-bold leading-[0.8] tracking-tighter mix-blend-difference z-10 space-y-2"
        >
          <span className="block opacity-60 hover:opacity-100 transition-opacity w-full break-words">
            {t('creative')}
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 hover:from-pink-500 hover:to-orange-500 transition-all duration-500 w-full break-words">
            {t('developer')}
          </span>
          <span className="block opacity-40 hover:opacity-80 transition-opacity w-full break-words">
            {t('portfolio')}
          </span>
        </h1>

        <p className="mt-20 text-lg max-w-md opacity-30 hover:opacity-60 transition-opacity z-10">
          {t('scrollToExplore')} <span className="animate-pulse">↓</span>
        </p>

        <div className="absolute bottom-15 left-10 text-sm opacity-60 hover:opacity-100 transition-opacity">
          © {new Date().getFullYear()} — DOUNIACODES
        </div>
      </section>

    {/* Projects Section - Horizontal Scroll */}
<section 
  id="work" 
  ref={projectsContainerRef}
  className="h-screen w-full sticky top-0 overflow-hidden"
>
  <div className="h-full w-full flex flex-col justify-start pt-20">
    <h2 className="text-[8vw] md:text-[6vw] font-bold px-6 md:px-10 mb-4 z-20"> 
      {t('featuredProjects')}
    </h2>
    
    <div className="relative h-[75vh] md:h-[80vh] overflow-visible">
      <div 
        ref={projectsContentRef}
        className="absolute top-0 left-0 h-full flex will-change-transform" 
      >
        {projects.map((project, index) => (
          <div 
            key={index}
            className="w-screen h-full flex-shrink-0 px-6 md:px-10" 
          >
            <div className="h-full w-full flex flex-col lg:flex-row items-center gap-6 md:gap-10">

              {/* Text Part */}
              <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 px-2 md:px-5">
                <span className="text-lg md:text-xl opacity-60">0{index + 1}</span>
                <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                  {t(project.titleKey)}
                </h3>
                <p className="text-base md:text-xl opacity-80 max-w-2xl">
                  {t(project.descriptionKey)}
                </p>
                <p className="text-xs md:text-base opacity-60">
                  {t(project.techKey)}
                </p>
                <div className="flex gap-3 mt-4 md:mt-6">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 md:px-6 md:py-3 hover:bg-white hover:text-black transition-all text-sm md:text-base"
                  >
                    {t('visitSite')}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Image Part */}
              <div className="w-full lg:w-1/2 h-[40vh] md:h-[50vh] relative">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full w-full"
                >
                  <div className={`absolute inset-0 rounded-xl md:rounded-2xl overflow-hidden ${project.color}`}>
                    <img 
                      src={project.image} 
                      alt={t(project.titleKey)}
                      className="w-full h-full object-cover rounded-lg md:rounded-xl"
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-10 bg-gradient-to-b from-zinc-900 via-black to-zinc-950 text-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[10vw] md:text-[6vw] font-bold mb-12 leading-tight">
            <span className="block">{t('hiIm')}</span> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 hover:from-pink-500 hover:to-orange-500 transition-all duration-500">
              DOUNIA
            </span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed opacity-80">
            {t('aboutIntro')}
          </p>
          <p className="mt-6 text-md md:text-lg italic opacity-60">
            {t('aboutSpecialty')}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen flex items-center justify-center px-10 bg-gradient-to-br from-black to-zinc-900 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-[80vmin] h-[80vmin] rounded-full border border-white/10 animate-pulse" />
        </div>

        <div className="text-center max-w-2xl mx-auto z-10">
          <h2 className="text-[15vw] md:text-[10vw] font-bold mb-10 leading-[0.9]">
            {t('connect')}
          </h2>

          <div className="grid grid-cols-2 gap-4 mt-20">
            <a href="https://linkedin.com/in/dounia-b-353b72367" className="border border-white/20 rounded-lg py-4 px-6 hover:bg-white hover:text-black transition-all">
              {t('linkedinMe')}
            </a>
            <a href="https://tally.so/r/wQazqp" className="bg-white text-black rounded-lg py-4 px-6 hover:bg-transparent hover:text-white hover:border hover:border-white/20 transition-all">
              {t('contactForm')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}