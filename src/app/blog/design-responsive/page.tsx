'use client'

import Link from 'next/link'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const shareLinks = {
  Twitter: (url: string, title: string) => 
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  LinkedIn: (url: string) => 
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  Facebook: (url: string, title: string) => 
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
}


export default function DesignResponsive() {
  const contentRef = useRef<HTMLDivElement>(null)
  
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
            Design Responsive Moderne
          </h1>
          
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-4 text-sm opacity-80">
              <time>17 septembre 2025</time>
              <span className="w-1 h-1 bg-white/40 rounded-full"></span>
              <span>6 min de lecture</span>
            </div>
            
            <div className="flex gap-2">
              {['CSS', 'Responsive Design', 'UI/UX'].map((tag, index) => (
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
            Le design responsive n'est plus une option mais une nécessité. Avec la multiplication des devices et des tailles d'écran, créer des expériences adaptatives est crucial pour engager votre audience.
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-6 text-white border-l-4 border-orange-400 pl-4">
            Les fondamentaux du responsive design
          </h2>
          
          <p className="opacity-90 mb-6">
            Un bon design responsive repose sur plusieurs principes clés :
          </p>
          
          <ul className="space-y-3 mb-10">
            {[
              "Grids fluides et flexibles",
              "Media queries adaptées aux breakpoints modernes",
              "Images et médias responsives",
              "Typographie scalable",
              "Touch targets adaptés aux mobiles"
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
            Approche mobile-first
          </h2>
          
          <p className="opacity-90 mb-6">
            L'approche mobile-first consiste à concevoir d'abord pour les petits écrans, puis à ajouter des améliorations progressives pour les écrans plus larges. Cette méthode offre plusieurs avantages :
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="p-4 bg-zinc-900 rounded-lg border border-white/10">
              <h4 className="font-semibold text-orange-400 mb-2">Avantages</h4>
              <ul className="text-sm space-y-1">
                <li>• Performance améliorée</li>
                <li>• Contenu priorisé</li>
                <li>• Expérience mobile optimisée</li>
                <li>• Code plus maintenable</li>
              </ul>
            </div>
            
            <div className="p-4 bg-zinc-900 rounded-lg border border-white/10">
              <h4 className="font-semibold text-orange-400 mb-2">Implémentation</h4>
              <ul className="text-sm space-y-1">
                <li>• Media queries min-width</li>
                <li>• Unités relatives (rem, em, %)</li>
                <li>• Flexbox/Grid pour la mise en page</li>
                <li>• Images responsives avec srcset</li>
              </ul>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-6 text-white border-l-4 border-orange-400 pl-4">
            Techniques modernes avec Tailwind CSS
          </h2>
          
          <p className="opacity-90 mb-6">
            Tailwind CSS facilite grandement la création de designs responsive grâce à sa syntaxe intuitive et ses breakpoints prédéfinis.
          </p>
          
          <div className="my-8 bg-zinc-900 rounded-lg overflow-hidden">
            <div className="bg-zinc-800 px-4 py-2 text-sm font-mono border-b border-zinc-700">
              Exemple Tailwind
            </div>
            <pre className="p-4 text-sm font-mono overflow-x-auto">
              {`<div className="flex flex-col md:flex-row">
  <div className="w-full md:w-1/2 p-4">
    <!-- Contenu pour mobile -->
  </div>
  <div className="w-full md:w-1/2 p-4">
    <!-- Contenu pour desktop -->
  </div>
</div>`}
            </pre>
          </div>
          
          <div className="my-12 p-6 bg-gradient-to-r from-orange-400/10 to-pink-500/10 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-orange-400">Conseil Pro</h3>
            <p className="opacity-90 mb-0">
              Testez toujours votre design sur de vrais appareils. Les émulateurs ne capturent pas toutes les nuances de l'expérience utilisateur réelle.
            </p>
          </div>
          
          <p className="opacity-90">
            Le design responsive moderne va au-delà de simples media queries. Il s'agit de créer des expériences véritablement adaptatives qui offrent la meilleure version possible de votre site, quel que soit l'appareil utilisé.
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
                      const url = window.location.href;
                      const title = "Design Responsive Moderne - DouniaCodes";
                      const link = platform === "LinkedIn"
                        ? (getLink as (url: string) => string)(url)
                        : (getLink as (url: string, title: string) => string)(url, title);
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