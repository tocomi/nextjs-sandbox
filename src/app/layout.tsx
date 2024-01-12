import type { Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Providers from './providers'

const font = Instrument_Sans({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Nextjs Sandbox',
  description: 'Nextjs Sandbox',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${font.className} p-4`}>
        <header className="flex flex-row gap-4">
          <CustomLink href="/">Home</CustomLink>
          <CustomLink href="/nested-suspense">Nested Suspense</CustomLink>
        </header>
        <Providers>
          <main className="mt-4">{children}</main>
        </Providers>
      </body>
    </html>
  )
}

const CustomLink = ({ href, children }: { href: string; children: string }) => {
  return (
    <Link href={href} className="border-b-2 text-cyan-800">
      {children}
    </Link>
  )
}
