
import Header from '@/components/layouts/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ScrollProgress from '@/components/utils/ScrollProgress'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WinZawOo',
  description: 'portfolio site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ScrollProgress/>
        <Header />
        {children}
      </body>
    </html>
  )
}
