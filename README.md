# DouniaCodes Portfolio 2025

![Preview](/public/preview.png)

Bienvenue sur le dépôt de mon portfolio personnel. C'est un projet moderne, performant et immersif conçu pour présenter mes projets de développement web et mes articles de blog.

Langues : Français, Anglais et Espagnol.

## Fonctionnalités

- **Design Immersif** : Arrière-plan animé avec des particules et des effets visuels cohérents.
- **Animations Haut de Gamme** : Utilisation intensive de **GSAP** et **ScrollTrigger** pour des transitions fluides au défilement.
- **Navigation Fluide** : Intégration de **Lenis** pour un défilement "smooth" optimisé.
- **Blog Dynamique** : Système de blog intégré avec support des métadonnées SEO, temps de lecture et partage social.
- **Responsive Design** : Entièrement optimisé pour mobile, tablette et desktop avec **Tailwind CSS**.
- **SEO & Performance** : Score optimal grâce au rendu côté serveur de **Next.js 14+**.

## Stack Technique

- **Framework** : Next.js (App Router)
- **Langage** : TypeScript
- **Stylisation** : Tailwind CSS
- **Animations** : GSAP (GreenSock Animation Platform)
- **Scroll** : Lenis Scroll
- **Déploiement** : Vercel

## Démarrage rapide

### Prérequis

- Node.js (version 18 ou supérieure)
- npm, yarn, pnpm ou bun

### Installation

1. Clonez le dépôt :
   ```bash
   git clone <https://github.com/votre-utilisateur/douniacodes-portfolio.git>
   cd douniacodes-portfolio
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

L'application sera disponible sur http://localhost:3000.

## Structure du Projet

- `/src/app` : Contient toutes les pages et routes (Blog, Projets, etc.).
- `/src/components` : Composants React réutilisables (Contexte de langue, UI, etc.).
- `/public` : Assets statiques (Images, icônes, preview.png).

## Blog

Les articles sont situés dans `src/app/blog/[slug]`. Chaque article bénéficie d'une configuration SEO spécifique via son fichier `metadata.ts`.

---

Développé avec passion par **DouniaCodes**

