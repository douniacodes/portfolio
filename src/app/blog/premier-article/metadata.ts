import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = 'https://douniacodes.com'
  const imageUrl = `${baseUrl}/assets/blog/premier-article-preview.jpg`

  return {
    title: "Mon Premier Article de Blog | Blog DouniaCodes",
    description: "Bienvenue sur mon premier article de blog où je partage mes idées et expériences en développement web.",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: '/blog/premier-article',
    },
    openGraph: {
      title: "Mon Premier Article de Blog",
      description: "Découvrez le premier article de DouniaCodes et ses idées sur le développement web",
      url: `${baseUrl}/blog/premier-article`,
      siteName: 'Blog DouniaCodes',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: 'Premier article de blog DouniaCodes',
        },
      ],
      type: 'article',
      publishedTime: '2025-09-20T00:00:00.000Z',
      authors: ['DouniaCodes'],
      tags: ['Blog', 'Développement Web', 'Frontend'],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Mon Premier Article de Blog",
      description: "Découvrez les débuts de DouniaCodes dans le blogging",
      images: [imageUrl],
      creator: '@douniacodes',
    },
  }
}