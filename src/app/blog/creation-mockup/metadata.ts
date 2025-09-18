import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = 'https://douniacodes.com'
  const imageUrl = `${baseUrl}/assets/blog/mockup-preview.jpg`

  return {
  title: "Maîtriser l'Art du Mockup | Blog DouniaCodes",
  description: "Découvrez comment créer des mockups professionnels qui marquent les esprits avec Canva et d'autres outils.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/blog/creation-mockup',
  },
  openGraph: {
    title: "Maîtriser l'Art du Mockup",
    description: "Guide complet sur la création de mockups professionnels",
    url: `${baseUrl}/blog/creation-mockup`,
    siteName: 'Blog DouniaCodes',
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: 'Article sur la création de mockups',
      },
    ],
    type: 'article',
    publishedTime: '2025-09-18T00:00:00.000Z',
    authors: ['DouniaCodes'],
    tags: ['Mockup', 'Design', 'Canva', 'UI/UX'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Maîtriser l'Art du Mockup",
    description: "Guide complet sur la création de mockups professionnels",
    images: [imageUrl],
    creator: '@douniacodes',
    },
  }
}