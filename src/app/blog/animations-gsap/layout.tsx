import { generateMetadata } from './metadata'

export { generateMetadata }

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className="article-container">
      {children}
    </article>
  )
}