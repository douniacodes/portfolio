import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = 'https://douniacodes.com'
  const imageUrl = `${baseUrl}/assets/blog/biais-algorithmiques-preview.jpg`

  return {
    title: "API et Biais Algorithmiques : L'Amplification des Discriminations | Blog DouniaCodes",
    description: "Découvrez comment les API et les algorithmes peuvent amplifier les discriminations et les biais sociaux dans le monde numérique.",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: '/blog/api-algorithmes-discriminations',
    },
    openGraph: {
      title: "API et Biais Algorithmiques : L'Amplification des Discriminations",
      description: "Une analyse approfondie des biais algorithmiques et leur impact sur les discriminations sociales",
      url: `${baseUrl}/blog/api-algorithmes-discriminations`,
      siteName: 'Blog DouniaCodes',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: 'Biais Algorithmiques et Discriminations',
        },
      ],
      type: 'article',
      publishedTime: '2025-09-25T00:00:00.000Z',
      authors: ['DouniaCodes'],
      tags: ['IA', 'Éthique', 'Algorithmes', 'Discriminations', 'Tech'],
    },
    twitter: {
      card: 'summary_large_image',
      title: "API et Biais Algorithmiques : L'Amplification des Discriminations",
      description: "Une analyse approfondie des biais algorithmiques et leur impact sur les discriminations sociales",
      images: [imageUrl],
      creator: '@douniacodes',
    },
  }
}