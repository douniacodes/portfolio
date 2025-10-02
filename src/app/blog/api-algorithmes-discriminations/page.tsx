'use client'

import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
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

export default function BiaisAlgorithmiques() {
  const contentRef = useRef<HTMLDivElement>(null)
  const [videoPlaying, setVideoPlaying] = useState<number | null>(null)
  
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
            <span>Éthique & Tech</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            API et Biais Algorithmiques : L'Amplification des Discriminations
          </h1>
          
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-4 text-sm opacity-80">
              <time>02 octobre 2025</time>
              <span className="w-1 h-1 bg-white/40 rounded-full"></span>
              <span>15 min de lecture</span>
            </div>
            
            <div className="flex gap-2">
              {['IA', 'Éthique', 'Algorithmes', 'Discriminations', 'Tech'].map((tag, index) => (
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
            Les API (Interfaces de Programmation Applicatives) sont des outils essentiels permettant aux développeurs d’accéder aux données des plateformes numériques. Cependant, ces interfaces ne sont pas neutres : elles exposent des contenus filtrés et classés par des algorithmes qui peuvent refléter des biais sociaux et culturels. Ce phénomène, étudié par des chercheurs comme Safiya Umoja Noble dans son ouvrage « Algorithms of Oppression », soulève des questions cruciales sur la manière dont les technologies numériques peuvent reproduire et amplifier des discriminations raciales.
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-6 text-white border-l-4 border-orange-400 pl-4">
            API et algorithmes : des amplificateurs de biais sociaux
          </h2>
          
          <p className="opacity-90 mb-6">
            Les API offrent un accès direct aux données des plateformes, permettant d'extraire des informations telles que des tweets, des posts ou des images. Cependant, ces données sont filtrées et classées par des algorithmes qui privilégient certains contenus en fonction de critères tels que l'engagement des utilisateurs. Ainsi, les contenus qui suscitent davantage de réactions (likes, partages, commentaires) sont mis en avant, ce qui peut entraîner une amplification des stéréotypes et des discours discriminatoires.
          </p>

          <p className="opacity-90 mb-6">
            Les algorithmes de recommandation et de classement sont conçus pour maximiser l'engagement des utilisateurs. Cependant, cette logique peut avoir des conséquences inattendues : des contenus stéréotypés ou discriminatoires peuvent générer plus d'interactions et, par conséquent, être davantage mis en avant. Ce phénomène a été observé sur diverses plateformes, y compris Twitter, où des contenus islamophobes ou stigmatisants envers certains groupes peuvent être amplifiés par les algorithmes de recommandation.
          </p>

          <div className="my-10 p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl border border-red-400/20">
            <h3 className="text-xl font-semibold mb-4 text-red-400">⚠️ Exemples de Types de biais</h3>
            <div className="space-y-3">
              {[
                "Biais dans la reconnaissance vocale",
                "Biais dans les systèmes de recrutement automatisés",
                "Biais dans les décisions administratives automatisées",
                "Biais dans les systèmes de police prédictive"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400 mr-3 mt-1 flex-shrink-0">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <span className="opacity-90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-12 mb-6 text-white">
            Biais dans les systèmes d'IA
          </h3>

          <p className="opacity-90 mb-6">
            En effet, il est juste de souligner que les biais ont pris le contrôle des données et que les domaines de l'intelligence artificielle et du machine learning en sont maintenant envahis. Ces determinations injustes sont retrouvées partout dans les systèmes d'IA comme dans : 
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            <div className="p-4 bg-zinc-900 rounded-lg border border-white/10">
              <h4 className="font-semibold text-orange-400 mb-2">Vision par ordinateur - (Machine vision systems)</h4>
              <p className="text-sm opacity-80">
                Par exemple, les jeux de données sont souvent saturés d'images de personnes blanches, jeunes, occidentales. Ainsi, un profil différent pourrait créer un dysfonctionnement lors de l'analyse.
              </p>
            </div>
            
            <div className="p-4 bg-zinc-900 rounded-lg border border-white/10">
              <h4 className="font-semibold text-orange-400 mb-2">Reconnaissance d'objets - (Object recognition)</h4>
              <p className="text-sm opacity-80">
                En effet, les objets courants sont mieux identifiés que les objets rares. Ceci peut engendrer la marginalisation de certains groupes sociaux.
              </p>
            </div>

            <div className="p-4 bg-zinc-900 rounded-lg border border-white/10">
              <h4 className="font-semibold text-orange-400 mb-2">Traitement du langage naturel - (Natural language processing)</h4>
              <p className="text-sm opacity-80">
                Les langues dominantes sont bien mieux traitées que les langues minoritaires.
              </p>
            </div>

            <div className="p-4 bg-zinc-900 rounded-lg border border-white/10">
              <h4 className="font-semibold text-orange-400 mb-2">Plongements lexicaux - (Word embedding)</h4>
              <p className="text-sm opacity-80">
                Par exemple, dans des modèles classiques, certains noms associés à des minorités sont rapprochés de mots négatifs (« crime », « pauvreté »), pendant que les autres noms s'alignent sur des termes plus positifs (« succès », « intelligence »).
              </p>
            </div>
          </div>

          <p className="opacity-90 mb-6">
            Ces biais ont un impact majeur sur notre société. Les combattre n'est pas qu'un défi technique : c'est d'abord un enjeu sociétal, presque une lutte révolutionnaire face à une société gangrenée depuis trop longtemps par des préjugés.
          </p>    

          {/* Première vidéo YouTube */}
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-3">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
              À regarder : Les biais dans l'IA et ses difficultés
            </h3>
            <div className="relative aspect-video bg-zinc-900 rounded-lg overflow-hidden border border-white/10 group">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/fMym_BKWQzk"
                title="Les biais dans l'IA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-sm opacity-60 mt-3 text-center">
              Documentaire sur l'impact des biais algorithmiques dans notre société
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-6 text-white border-l-4 border-orange-400 pl-4">
            Études de cas : Twitter et les biais raciaux
          </h2>
          
          <p className="opacity-90 mb-6">
            Une étude menée par Huszár et ses collègues (2021) a mesuré l'amplification algorithmique de Twitter sur la visibilité du contenu politique dans sept pays. Les résultats ont montré que les partis ou contenus de droite bénéficient systématiquement d'une plus grande amplification par l'algorithme que les partis de gauche.
          </p>

          <div className="my-8 p-5 bg-zinc-900/50 rounded-lg border border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Étude Huszár et al. (2021)</h4>
                <p className="text-sm opacity-80 mb-2">
                  Analyse de l'amplification algorithmique sur Twitter dans 7 pays (États-Unis, Japon, Royaume-Uni, France, Espagne, Canada, Allemagne).
                </p>
                <a 
                  href="https://www.pnas.org/doi/10.1073/pnas.2025334119" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-orange-400 hover:text-orange-300 underline"
                >
                  Lire l'étude complète →
                </a>
              </div>
            </div>
          </div>

          <p className="opacity-90 mb-6">
            Plus récemment encore, une étude de Fonseca et ses collègues (2024) a analysé la dynamique des discours haineux sur le Twitter Portugais désormais appelé X. Les résultats démontrent que le discours de haine sur X (anciennement Twitter) se propage rapidement, surtout au début des conversations. Aussi, ils démontrent que la structure des interactions sociales et le profil des utilisateurs influencent sa diffusion. En d'autres termes, plus il y a de discours de haine dans une conversation, moins les interactions sont transitoires et moins les utilisateurs expriment librement leurs opinions. 
          </p>

          <div className="my-8 p-5 bg-zinc-900/50 rounded-lg border border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Étude Fonseca et al. (2024)</h4>
                <p className="text-sm opacity-80 mb-2">
                  Analyse de la dynamique des discours haineux sur le Twitter Portugais (X).
                </p>
                <a 
                  href="https://www.sciencedirect.com/science/article/pii/S240584402408277X" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-orange-400 hover:text-orange-300 underline"
                >
                  Lire l'étude complète →
                </a>
              </div>
            </div>
          </div>

          <p className="opacity-90 mb-6">
            Pour limiter ce phénomène, il faut viser un plan de restructuration global en améliorant les algorithmes de détection, mettant en place des politiques plus strictes et en éduquant et sensibilisant le publique. 
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-6 text-white border-l-4 border-orange-400 pl-4">
            Vers des pratiques plus responsables
          </h2>

          <p className="opacity-90 mb-6">
            L'amplification de contenus discriminatoires par les algorithmes des plateformes numériques peut avoir des conséquences sociales profondes. Elle peut renforcer les stéréotypes raciaux, ethniques ou religieux, marginaliser certaines communautés et favoriser la polarisation des opinions. De plus, les développeurs qui utilisent les API peuvent, sans le vouloir, reproduire et amplifier ces biais dans leurs propres applications ou analyses. Ainsi, il est nécessaire de trouver le moyen de diminuer ces discriminations.
          </p>

          <p className="opacity-90 mb-6">
            Pour limiter les effets négatifs des biais algorithmiques, il ne suffit pas d'invoquer la bonne volonté des développeurs. Il faut des pratiques concrètes et contraignantes à chaque étape :
          </p>

          <div className="space-y-6 my-10">
            {[
              {
                title: "Sensibiliser et former les développeurs",
                desc: "Comprendre que les biais ne sont pas une « anomalie rare » mais une conséquence normale des données et des modèles. Cela inclut la mise en place de modules obligatoires d’éthique et de sociologie des données dans les formations en informatique."
              },
              {
                title: "Auditer et classifier les données",
                desc: "Au lieu de se contenter de nettoyer les jeux de données a posteriori, il faut classifier les sources en fonction de leur fiabilité, de leur diversité et de leurs potentiels biais. Par exemple, distinguer les contenus générés par des communautés homogènes des sources plus représentatives. Cette classification permet d’équilibrer les corpus d’entraînement."
              },
              {
                title: "Mettre en place des audits indépendants",
                desc: "Les flux de données et les algorithmes de classification doivent être testés par des équipes extérieures, capables d’identifier les effets discriminatoires qu’une équipe interne aurait tendance à ignorer ou minimiser."
              },
              {
                title: "Encourager la transparence algorithmique",
                desc: "Publier des fiches de modèles (model cards, datasheets) qui détaillent les choix de classification, les limites connues et les contextes dans lesquels l’algorithme risque de produire des résultats biaisés."
              },
              {
                title: "Promouvoir la diversité dans la conception",
                desc: "Intégrer des profils variés (genre, origine, disciplines) dans les équipes de développement pour limiter la reproduction automatique des angles morts sociaux."
              },
              {
                title: "Surveiller les décisions automatiques",
                desc: "Lorsqu’un algorithme de classification est utilisé pour filtrer des candidats à l’emploi, recommander des contenus ou détecter des comportements « à risque », les résultats doivent toujours être interprétés par un humain formé aux biais, plutôt que pris comme vérité absolue."
              }
            ].map((practice, index) => (
              <div key={index} className="flex items-start p-5 bg-zinc-900/50 rounded-lg border border-white/10 hover:border-orange-400/30 transition-all">
                <div>
                  <h4 className="font-semibold text-white mb-2">{practice.title}</h4>
                  <p className="text-sm opacity-80">{practice.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Document PDF à télécharger */}
          <div className="my-12 p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-400/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-1">
                  Rapport de l'Agence des Droits Fondamentaux de l'UE (2022)
                </h3>
                <p className="text-sm opacity-70">
                  « Bias in Algorithms - Artificial Intelligence and Discrimination »
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => window.open(' https://fra.europa.eu/sites/default/files/fra_uploads/fra-2022-bias-in-algorithms_en.pdf', '_blank')}
                className="flex-1 px-6 py-3 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/30 rounded-lg transition-all flex items-center justify-center gap-2 font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                Lire le PDF
              </button>
            </div>
          </div>

          {/* Deuxième vidéo YouTube */}
          <div className="my-12">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-3">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
              Sommes-nous tous racistes ?
            </h3>
            <div className="relative aspect-video bg-zinc-900 rounded-lg overflow-hidden border border-white/10 group">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ujcjYJnzZbU"
                title="Sommes-nous tous racistes ?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-sm opacity-60 mt-3 text-center">
              Documentaire France TV Slash (Juin 2025) illustrant l'impact des biais inconscients sur notre société
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-6 text-white border-l-4 border-orange-400 pl-4">
            Conclusion
          </h2>

          <p className="opacity-90 mb-6">
            Les API et les algorithmes des plateformes numériques ne sont pas neutres. Ils reflètent et amplifient les biais présents dans la société. Comprendre ces mécanismes est essentiel pour développer des technologies plus inclusives et responsables, et pour éviter de reproduire les discriminations raciales dans le monde numérique.
          </p>

          <div className="my-10 p-6 bg-gradient-to-r from-orange-400/10 to-pink-500/10 rounded-xl border border-orange-400/20">
            <h3 className="text-xl font-semibold mb-3 text-orange-400">💡 Pour aller plus loin</h3>
            <p className="opacity-90 mb-4">
              Je vous recommande vivement de consulter les ressources partagées dans cet article, notamment les documentaires et études scientifiques, pour approfondir votre compréhension de ces enjeux cruciaux.
            </p>
            <p className="text-sm opacity-70 italic mb-0">
              La technologie est un miroir de notre société. À nous de décider quelle image nous voulons refléter.
            </p>
          </div>
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
                      const title = "API et Biais Algorithmiques - DouniaCodes";
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