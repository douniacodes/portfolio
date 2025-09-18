import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Blog DouniaCodes',
    default: 'Blog DouniaCodes'
  },
  description: 'Découvrez mes articles sur le développement web, le design et les technologies modernes.',
  openGraph: {
    type: 'website',
    siteName: 'Blog DouniaCodes',
  }
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}