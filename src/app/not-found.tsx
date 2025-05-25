'use client'
import Link from 'next/link'
import { useLanguage } from './components/LanguageContext'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background minimaliste similaire à votre style */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute inset-0 opacity-[3%] bg-[size:50px_50px] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]" />
      </div>

      <div className="text-center max-w-2xl mx-auto z-10">
        <h1 className="text-[20vw] md:text-[15vw] font-bold leading-none mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
            404
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          {t('pageNotFound')}
        </h2>
        
        <p className="text-lg md:text-xl opacity-80 mb-10">
          {t('pageNotFoundDescription')}
        </p>

        <div className="flex justify-center">
          <Link 
            href="/" 
            className="bg-gradient-to-r from-orange-400/80 to-pink-500/80 rounded-full py-3 px-8 hover:opacity-90 transition-all text-center"
          >
            {t('returnHome')}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 text-sm opacity-60">
        © {new Date().getFullYear()} — DOUNIACODES
      </div>
    </div>
  )
}