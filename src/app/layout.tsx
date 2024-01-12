import type { Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'
import './globals.css'

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
      <body className={font.className}>{children}</body>
    </html>
  )
}
