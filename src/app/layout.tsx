import './globals.css'
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import LenisProvider from './components/LenisProvider'
import { LanguageProvider } from "./components/LanguageContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DouniaCodes | Développeuse Frontend Créative - Paris, Lille",
  description: "Portfolio de DouniaCodes, développeuse frontend spécialisée en animations web modernes, React et expériences utilisateur innovantes. Découvrez mes projets et collaborations.",
  keywords: [
    "développeuse frontend",
    "portfolio développeur",
    "React Paris",
    "animations web",
    "UI/UX designer",
    "Next.js expert",
    "GSAP animations",
    "développement web créatif",
    "DouniaCodes",
    "freelance frontend"
  ].join(', '),
  authors: [{ name: 'DouniaCodes', url: 'https://douniacodes.com' }],
  creator: 'DouniaCodes',
  publisher: 'DouniaCodes',
  metadataBase: new URL('https://douniacodes.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "DouniaCodes | Développeuse Frontend Créative",
    description: "Portfolio professionnel - Spécialiste en développement frontend innovant et expériences web interactives",
    url: 'https://douniacodes.com',
    siteName: 'Portfolio DouniaCodes',
    images: [
      {
        url: '/myportfolio-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'DouniaCodes - Développeuse Frontend',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DouniaCodes | Développeuse Frontend Créative',
    description: 'Portfolio professionnel - Spécialiste en développement frontend innovant',
    images: ['https://douniacodes.com/myportfolio-preview.jpg'],
    creator: '@douniacodes',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
}

// Ajoutez une interface pour les props
interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="!scroll-smooth">
       <head>
        <meta name="apple-mobile-web-app-title" content="DB Portfolio" />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <LenisProvider>
          <LanguageProvider>
            <div className="fixed inset-0 pointer-events-none bg-grid-white/[0.03] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <Header />
            {children}    
          </LanguageProvider>             
        </LenisProvider>
      </body>
    </html>
  )
}