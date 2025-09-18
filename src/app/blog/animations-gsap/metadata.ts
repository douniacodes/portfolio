import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = 'https://douniacodes.com'
  const imageUrl = `${baseUrl}/assets/blog/animation-preview.jpg`

  return {
  title: "Animations avec GSAP | Blog DouniaCodes",
  description: "Guide complet pour implémenter des animations fluides avec GSAP dans vos projets React.",
  metadataBase: new URL(baseUrl),
  alternates: {
      canonical: '/blog/animations-gsap',
  },
  openGraph: {
    title: "Animations avec GSAP - Guide Complet",
    description: "Découvrez comment créer des animations web fluides et performantes avec GSAP et React",
    url: `${baseUrl}/blog/animations-gsap`,
    siteName: 'Blog DouniaCodes',
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: 'Animations GSAP Tutorial',
      },
    ],
    type: 'article',
    publishedTime: '2025-09-15T00:00:00.000Z',
    authors: ['DouniaCodes'],
    tags: ['GSAP', 'Animations', 'React', 'JavaScript'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Animations avec GSAP - Guide Complet",
    description: "Découvrez comment créer des animations web fluides avec GSAP",
    images: [imageUrl],
    creator: '@douniacodes',
    },
  }
}