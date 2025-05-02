'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function LenisProvider({ children }) {
  useEffect(() => {
    // 1. Initialisation Lenis avec config recommandée
    const lenis = new Lenis({
      lerp: 0.1,       // Fluidité du scroll (0.05 à 0.2 pour un effet doux)
      smoothWheel: true, // Active le scroll smooth
      autoRaf: false,   // Gère manuellement la RAF pour GSAP
    });

    // 2. Setup GSAP + ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // 3. Synchronisation Lenis ↔ GSAP (ESSENTIEL)
    lenis.on('scroll', ScrollTrigger.update);
    
    // 4. Boucle d'animation optimisée pour GSAP
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convertit en ms
    });
    gsap.ticker.lagSmoothing(0);

    // 5. Debug (optionnel)
    lenis.on('scroll', (e) => {
      console.log(e); // Supprime en production
    });

    // Cleanup
    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  return children;
}