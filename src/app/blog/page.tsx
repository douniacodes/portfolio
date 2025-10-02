'use client'

import { useRef, useEffect } from 'react'
import { useLanguage } from '../components/LanguageContext'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Link from 'next/link'

// Type pour vos articles de blog
interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags?: string[]
  readingTime?: string
}

export default function BlogPage() {
  const { t } = useLanguage()
  const blogContainerRef = useRef<HTMLDivElement>(null)
  const blogContentRef = useRef<HTMLDivElement>(null)
  
  const refs = {
    title: useRef<HTMLHeadingElement>(null),
    particles: useRef<HTMLDivElement>(null),
  }

  // Données des articles de blog (à remplacer par vos propres données)
  const blogPosts: BlogPost[] = [
    {
      slug: "premier-article",
      title: "Mon Premier Article",
      description: "Découvrez comment j'ai créé mon portfolio avec Next.js et les défis que j'ai rencontrés.",
      date: "2025-09-10",
      tags: ["Next.js", "React", "TypeScript"],
      readingTime: "5 min"
    },
    {
      slug: "animations-gsap",
      title: "Animations avec GSAP",
      description: "Un guide complet pour implémenter des animations fluides avec GSAP dans vos projets React.",
      date: "2025-09-15",
      tags: ["GSAP", "Animations", "React"],
      readingTime: "8 min"
    },
    {
      slug: "design-responsive",
      title: "Design Responsive Moderne",
      description: "Les meilleures pratiques pour créer des designs responsive qui fonctionnent sur tous les appareils.",
      date: "2025-09-17",
      tags: ["CSS", "Responsive Design", "UI/UX"],
      readingTime: "6 min"
    }, 
    {
      slug: "creation-mockup",
      title: "Maîtriser l'Art du Mockup",
      description: "Découvrez comment créer des mockups qui marquent les esprits.",
      date: "2025-09-18",
      tags: ["Mockup", "Design", "Canva"],
      readingTime: "7 min"
    }, 
    {
      slug: "api-algorithmes-discriminations",
      title: "API et Biais Algorithmiques : L'Amplification des Discriminations",
      description: "Découvrez comment les API et les algorithmes peuvent amplifier les discriminations et les biais sociaux dans le monde numérique.",
      date: "2025-09-25",
      tags: ["IA", "Éthique", "Algorithmes", "Discriminations", "Tech"],
      readingTime: "15 min"
    }
  ]

  // Trier les articles par date (du plus récent au plus ancien)
  const sortedPosts = blogPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

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
  
    ;(window as any).lenis = lenis
  
    gsap.registerPlugin(ScrollTrigger)
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
  
    // Animation d'entrée pour les articles
    gsap.fromTo('.blog-article', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.blog-articles',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )
  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      lenis.destroy()
      delete (window as any).lenis
    }
  }, [t])

  // Fonction pour formater la date
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date)
  }

  return (
    <div className="overflow-hidden text-white bg-black">
      {/* Blog Header */}
      <section className="relative h-screen flex flex-col justify-center px-10 z-10">
        <h1
          ref={refs.title}
          className="text-[22vw] sm:text-[25vw] md:text-[23vw] lg:text-[21vw] font-bold leading-[0.8] tracking-tighter mix-blend-difference z-10 text-center"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 hover:from-pink-500 hover:to-orange-500 transition-all duration-500 w-full break-words">
            BLOG
          </span>
        </h1>
        <p className="mt-15 text-xl max-w-2xl mx-auto sopacity-30 hover:opacity-60 transition-opacity text-center">
          Découvrez mes réflexions sur le développement web, le design et les technologies modernes.
        </p>
      </section>

      {/* Blog Articles Section */}
      <section className="min-h-screen py-20 px-10 relative blog-articles z-10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {sortedPosts.map((post, index) => (
              <article 
                key={post.slug}
                className="blog-article group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-zinc-900/50 to-black/50 border border-white/10 hover:border-white/20 transition-all duration-500"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Content */}
                    <div className="flex-1">
                      <span className="text-lg opacity-60">0{index + 1}</span>
                      <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4 group-hover:text-orange-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-lg opacity-80 mb-6">
                        {post.description}
                      </p>
                      
                      {/* Meta information */}
                      <div className="flex flex-wrap items-center gap-4 text-sm opacity-60">
                        <time>{formatDate(post.date)}</time>
                        {post.readingTime && (
                          <>
                            <span>•</span>
                            <span>{post.readingTime} de lecture</span>
                          </>
                        )}
                      </div>
                      
                      {/* Tags */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-6">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs bg-white/10 rounded-full border border-white/10 group-hover:border-orange-400/30 group-hover:bg-orange-400/10 transition-all"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {/* Read more */}
                      <div className="mt-8">
                        <span className="inline-flex items-center gap-2 text-orange-400 group-hover:gap-3 transition-all">
                          Lire l'article
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    
                    {/* Visual element */}
                    <div className="w-full md:w-1/3 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-orange-400/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-orange-400/30 to-pink-500/30 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Empty state */}
          {sortedPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-zinc-800 to-zinc-900 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Aucun article pour le moment</h3>
              <p className="text-lg opacity-60">Revenez bientôt pour découvrir mes premiers articles !</p>
            </div>
          )}
        </div>
      </section>

      {/* Back to home */}
      <section className="py-20 px-10">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-3 text-lg opacity-60 hover:opacity-100 hover:gap-4 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
            Retour à l'accueil
          </Link>
        </div>
      </section>
    </div>
  )
}