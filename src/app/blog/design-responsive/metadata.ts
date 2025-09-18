import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = 'https://douniacodes.com'
  const imageUrl = `${baseUrl}/assets/blog/design-responsive-preview.jpg`

  return {
  title: "Design Responsive Moderne | Blog DouniaCodes",
  description: "Les meilleures pratiques pour créer des designs responsive qui fonctionnent sur tous les appareils.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/blog/design-responsive',
  },
  openGraph: {
    title: "Design Responsive Moderne - Guide des bonnes pratiques",
    description: "Apprenez à créer des designs web adaptatifs modernes et performants",
    url: `${baseUrl}/blog/design-responsive`,
    siteName: 'Blog DouniaCodes',
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: 'Guide Design Responsive',
      },
    ],
    type: 'article',
    publishedTime: '2025-09-17T00:00:00.000Z',
    authors: ['DouniaCodes'],
    tags: ['CSS', 'Responsive Design', 'UI/UX', 'Frontend'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Design Responsive Moderne - Guide Complet",
    description: "Créez des designs web adaptatifs modernes et performants",
    images: [imageUrl],
    creator: '@douniacodes',
  },
}
}