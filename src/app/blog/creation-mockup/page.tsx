'use client'

import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image';
import MOCKUP_IMAGES from './mockupImages';

const shareLinks = {
  Twitter: (url: string, title: string) => 
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  LinkedIn: (url: string) => 
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  Facebook: (url: string, title: string) => 
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
}

export default function CreateMockups() {
  const contentRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Animation d'entrée pour le contenu
    gsap.fromTo('.article-content > *', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.article-content',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )
    
    // Animation pour les titres
    gsap.fromTo('h2', 
      { opacity: 0, x: -30 },
      { 
        opacity: 1, 
        x: 0, 
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: 'h2',
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    )
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === MOCKUP_IMAGES.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? MOCKUP_IMAGES.length - 1 : prev - 1))
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-10 py-30 relative overflow-hidden">
      {/* Background Particles similaire à votre portfolio */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[3%] bg-[size:50px_50px] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] opacity-3">
          <div className="absolute inset-0 rounded-full border border-white animate-pulse-slow" style={{
            animationDuration: '15s'
          }} />
        </div>
      </div>

      <article className="max-w-3xl mx-auto relative z-10">
        {/* Navigation */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-3 text-orange-400 mb-16 hover:gap-4 transition-all group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          Retour aux articles
        </Link>

        {/* Article header avec style cohérent */}
        <header className="mb-16 border-b border-white/10 pb-12">
          <div className="inline-flex items-center gap-2 text-sm text-orange-400 mb-6 px-4 py-2 bg-orange-400/10 rounded-full border border-orange-400/20">
            <span>UI/UX Design</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            Maîtriser l'Art du Mockup
          </h1>
          
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-4 text-sm opacity-80">
              <time>18 septembre 2025</time>
              <span className="w-1 h-1 bg-white/40 rounded-full"></span>
              <span>7 min de lecture</span>
            </div>
            
            <div className="flex gap-2">
              {['Mockup', 'Design', 'Canva'].map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs bg-white/10 rounded-full border border-white/10 hover:border-orange-400/30 hover:bg-orange-400/10 transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Article content avec animations */}
        <div ref={contentRef} className="article-content prose prose-invert prose-lg max-w-none">
          <p className="text-xl opacity-90 leading-relaxed mb-8">
            Les mockups sont bien plus qu'une simple présentation : ils transforment vos créations en expériences visuelles captivantes qui séduisent clients et utilisateurs. Découvrez comment créer des mockups qui marquent les esprits.
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-6 text-white border-l-4 border-orange-400 pl-4">
            Pourquoi les mockups sont essentiels
          </h2>
          
          <p className="opacity-90 mb-6">
            Un mockup efficace sert plusieurs objectifs cruciaux dans le processus de design :
          </p>
          
          <ul className="space-y-3 mb-10">
            {[
              "Contextualiser votre design dans un environnement réel",
              "Améliorer la présentation client et augmenter les conversions",
              "Tester visuellement l'impact de votre création",
              "Créer un portfolio professionnel et attractif",
              "Faciliter la communication avec les équipes de développement"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400 mr-3 mt-1 flex-shrink-0">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-6 text-white border-l-4 border-orange-400 pl-4">
            Types de mockups et leurs usages
          </h2>
          
          <p className="opacity-90 mb-6">
            Chaque type de mockup répond à des besoins spécifiques. Voici les principales catégories :
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="p-4 bg-zinc-900 rounded-lg border border-white/10">
              <h4 className="font-semibold text-orange-400 mb-2">Mockups Digitaux</h4>
              <ul className="text-sm space-y-1">
                <li>• Écrans d'ordinateur et laptops</li>
                <li>• Smartphones et tablets</li>
                <li>• Smartwatches et objets connectés</li>
                <li>• Interfaces web et applications</li>
              </ul>
            </div>
            
            <div className="p-4 bg-zinc-900 rounded-lg border border-white/10">
              <h4 className="font-semibold text-orange-400 mb-2">Mockups Print</h4>
              <ul className="text-sm space-y-1">
                <li>• Cartes de visite et papeterie</li>
                <li>• Affiches et flyers</li>
                <li>• Livres et magazines</li>
                <li>• Packaging et étiquettes</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-6 text-white border-l-4 border-orange-400 pl-4">
            Outils et techniques de création
          </h2>
          
          <p className="opacity-90 mb-6">
            Pour créer des mockups professionnels, vous avez plusieurs options selon votre niveau et vos besoins :
          </p>
          
          <div className="space-y-6 my-8">
            <div className="p-6 bg-zinc-900 rounded-lg border border-white/10">
              <h4 className="font-semibold text-orange-400 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  <circle cx="9" cy="9" r="2"></circle>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                </svg>
                Photoshop - Le standard professionnel
              </h4>
              <p className="text-sm opacity-80 mb-3">
                Idéal pour créer des mockups personnalisés avec un contrôle total sur les détails, les ombres et les reflets.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded">Smart Objects</span>
                <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded">Calques d'effets</span>
                <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded">Masques</span>
              </div>
            </div>

            <div className="p-6 bg-zinc-900 rounded-lg border border-white/10">
              <h4 className="font-semibold text-orange-400 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="m8 3 4 8 5-5v11H3V6l5 5Z"></path>
                </svg>
                Figma - Collaboration en temps réel
              </h4>
              <p className="text-sm opacity-80 mb-3">
                Parfait pour les équipes avec ses fonctionnalités de partage et ses ressources communautaires.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded">Auto Layout</span>
                <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded">Composants</span>
                <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded">Prototypage</span>
              </div>
            </div>

            <div className="p-6 bg-zinc-900 rounded-lg border border-white/10">
              <h4 className="font-semibold text-orange-400 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M12 2v20M2 12h20"></path>
                </svg>
                Canva - La solution budget
              </h4>
              <p className="text-sm opacity-80 mb-3">
                Interface intuitive avec des milliers de templates de mockups prêts à l'emploi. Parfait pour débuter sans courbe d'apprentissage.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-purple-500/20 text-purple-400 rounded">Templates</span>
                <span className="px-2 py-1 text-xs bg-purple-500/20 text-purple-400 rounded">Smart Resize</span>
                <span className="px-2 py-1 text-xs bg-purple-500/20 text-purple-400 rounded">Drag & Drop</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-6 text-white border-l-4 border-orange-400 pl-4">
            Solutions pour petits budgets avec Canva
          </h2>
          
          <p className="opacity-90 mb-6">
            Pas besoin d'investir dans des logiciels coûteux pour créer des mockups de qualité. Canva révolutionne l'accès au design professionnel :
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="p-4 bg-zinc-900 rounded-lg border border-white/10">
              <h4 className="font-semibold text-purple-400 mb-2">✅ Avantages Canva</h4>
              <ul className="text-sm space-y-1">
                <li>• Interface drag & drop intuitive</li>
                <li>• Bibliothèque énorme de templates</li>
                <li>• Version gratuite très complète</li>
                <li>• Collaboration en temps réel</li>
                <li>• Export en haute qualité</li>
                <li>• Pas d'installation requise</li>
              </ul>
            </div>
            
            <div className="p-4 bg-zinc-900 rounded-lg border border-white/10">
              <h4 className="font-semibold text-purple-400 mb-2">⚠️ Limitations</h4>
              <ul className="text-sm space-y-1">
                <li>• Moins de contrôle sur les détails</li>
                <li>• Templates parfois génériques</li>
                <li>• Dépendance à internet</li>
                <li>• Fonctionnalités avancées payantes</li>
                <li>• Moins de formats d'export</li>
              </ul>
            </div>
          </div>

            {/* Slideshow des mockups Canva */}
            <div className="my-12 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20">
              <h3 className="text-xl font-semibold mb-6 text-center">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Exemple de Création Mockup avec Canva
                </span>
              </h3>
              
              <div className="relative max-w-2xl mx-auto">
                <div className="mockup-slideshow overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
                  <div className="slideshow-container relative aspect-[16/9] md:aspect-[16/10]">
                    {MOCKUP_IMAGES.map((mockup, index) => (
                      <div 
                        key={mockup.id}
                        className={`slide absolute inset-0 transition-all duration-500 ease-in-out ${
                          index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                        }`}
                        style={{ display: index === currentSlide ? 'block' : 'none' }}
                      >
                        <Image
                          src={mockup.src}
                          alt={mockup.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                          className="object-contain w-full h-full p-4"
                          priority={index === 0}
                        />
                      </div>
                    ))}
                  </div>
                
                {/* Navigation dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {MOCKUP_IMAGES.map((_, index) => (
                    <button 
                      key={index}
                      className={`dot w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-purple-400 scale-125' : 'bg-white/30 hover:bg-white/50'
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>

                {/* Flèches de navigation */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all text-white/70 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all text-white/70 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
              </div>
              
              <p className="text-center mt-4 text-sm opacity-60">
                Mockup pour le Blog Subconsia réalisé avec Canva - Interface simple, résultats professionnels
              </p>
            </div>
          </div>

          <div className="my-8 bg-zinc-900 rounded-lg overflow-hidden">
            <div className="bg-zinc-800 px-4 py-2 text-sm font-mono border-b border-zinc-700">
              Workflow Canva pour mockups efficaces
            </div>
            <div className="p-4 text-sm space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <span>Choisir un template de mockup dans la catégorie "Présentation"</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <span>Remplacer les placeholders par vos designs (drag & drop)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span>Ajuster les couleurs de fond et l'ambiance générale</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <span>Ajouter du texte descriptif et des éléments graphiques</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">5</span>
                <span>Exporter en haute qualité (PNG/JPG) pour usage professionnel</span>
              </div>
            </div>
          </div>

          <div className="my-8 bg-zinc-900 rounded-lg overflow-hidden">
            <div className="bg-zinc-800 px-4 py-2 text-sm font-mono border-b border-zinc-700">
              Exemple de structure PSD pour mockup
            </div>
            <pre className="p-4 text-sm font-mono overflow-x-auto">
              {`📁 Mockup_iPhone.psd
├── 📂 Background
│   ├── 🎨 Gradient
│   └── 🎨 Texture
├── 📂 Device
│   ├── 🎨 iPhone_Frame
│   ├── 🎨 Screen_Bezel
│   └── 📱 Smart_Object_Screen
├── 📂 Effects
│   ├── ✨ Drop_Shadow
│   ├── ✨ Reflection
│   └── ✨ Highlights
└── 📂 Adjustments
    ├── 🎛️ Color_Lookup
    └── 🎛️ Curves`}
            </pre>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-6 text-white border-l-4 border-orange-400 pl-4">
            Bonnes pratiques pour des mockups percutants
          </h2>
          
          <p className="opacity-90 mb-6">
            Un mockup réussi respecte certaines règles fondamentales :
          </p>

          <div className="space-y-4 my-8">
            {[
              {
                title: "Choix du contexte approprié",
                desc: "Sélectionnez un environnement qui correspond à votre audience cible et au message à véhiculer.",
                icon: "🎯"
              },
              {
                title: "Qualité et résolution optimales",
                desc: "Utilisez des images haute définition (minimum 300 DPI pour le print, 72 DPI pour le web).",
                icon: "🔍"
              },
              {
                title: "Éclairage et ombres réalistes",
                desc: "Créez une cohérence lumineuse entre tous les éléments pour un rendu naturel.",
                icon: "💡"
              },
              {
                title: "Perspective et proportions justes",
                desc: "Respectez les lois de la perspective pour maintenir le réalisme du mockup.",
                icon: "📐"
              }
            ].map((practice, index) => (
              <div key={index} className="flex items-start p-4 bg-zinc-900/50 rounded-lg border border-white/5">
                <span className="text-2xl mr-4 mt-1">{practice.icon}</span>
                <div>
                  <h4 className="font-semibold text-white mb-2">{practice.title}</h4>
                  <p className="text-sm opacity-80">{practice.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="my-12 p-6 bg-gradient-to-r from-orange-400/10 to-pink-500/10 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-orange-400">Conseil Pro</h3>
            <p className="opacity-90 mb-0">
              Créez une bibliothèque de mockups personnalisée avec vos propres templates. Cela vous fera gagner un temps précieux et garantira une cohérence visuelle dans tous vos projets.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-6 text-white border-l-4 border-orange-400 pl-4">
            Ressources et inspiration
          </h2>
          
          <p className="opacity-90 mb-6">
            Pour enrichir votre arsenal de mockups, voici quelques ressources incontournables :
          </p>

          <div className="grid md:grid-cols-3 gap-4 my-8">
            {[
              { name: "MockupWorld", type: "Gratuit", desc: "Large collection de mockups PSD gratuits" },
              { name: "Placeit", type: "Freemium", desc: "Générateur de mockups en ligne instantané" },
              { name: "Creative Market", type: "Premium", desc: "Mockups haut de gamme par des designers pros" },
              { name: "Figma Community", type: "Gratuit", desc: "Templates et ressources partagées" },
              { name: "Dribbble", type: "Inspiration", desc: "Showcase de mockups créatifs" },
              { name: "Behance", type: "Inspiration", desc: "Projets complets avec mockups" }
            ].map((resource, index) => (
              <div key={index} className="p-3 bg-zinc-900 rounded border border-white/10 text-sm">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-white">{resource.name}</h5>
                  <span className="px-2 py-1 text-xs bg-orange-400/20 text-orange-400 rounded">
                    {resource.type}
                  </span>
                </div>
                <p className="opacity-70 text-xs">{resource.desc}</p>
              </div>
            ))}
          </div>
          
          <p className="opacity-90">
            Maîtriser l'art du mockup, c'est transformer vos créations en présentations irrésistibles. Que ce soit pour convaincre un client, enrichir votre portfolio ou simplement mieux visualiser vos idées, un bon mockup fait toute la différence entre un design qui passe inaperçu et un projet qui marque les esprits.
          </p>
        </div>

        {/* Partage et navigation */}
        <footer className="mt-20 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Partager cet article</h3>
              <div className="flex gap-3">
                {Object.entries(shareLinks).map(([platform, getLink]) => (
                  <button
                    key={platform}
                    onClick={() => {
                      if (typeof window === 'undefined') return;
                      const baseUrl = 'https://www.douniacodes.com';
                      const path = '/blog/creation-mockup';
                      const fullUrl = `${baseUrl}${path}`;
                      
                      const title = "Maîtriser l'Art du Mockup - DouniaCodes";
                      const link = platform === "LinkedIn"
                        ? (getLink as (url: string) => string)(fullUrl)
                        : (getLink as (url: string, title: string) => string)(fullUrl, title);
                      
                      window.open(link, '_blank', 'noopener,noreferrer');
                    }}
                    className="px-4 py-2 text-sm bg-white/10 rounded-lg border border-white/10 
                               hover:bg-orange-400/10 hover:border-orange-400/30 transition-all"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
            
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-orange-400 hover:gap-3 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"></path>
              </svg>
              Voir tous les articles
            </Link>
          </div>
        </footer>
      </article>
    </div>
  )
}