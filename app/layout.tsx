
import Header from '@/components/layouts/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ScrollProgress from '@/components/utils/ScrollProgress'
import Main from '@/components/layouts/Main'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Win Zaw Oo',
  description: 'portfolio site',
}

const themeInitScript = `
(function () {
  try {
    var theme = new URLSearchParams(window.location.search).get('theme');
    var isDark = theme
      ? theme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', isDark);
  } catch (e) {}
})();
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ScrollProgress />
        <Header />
        <Main>
          {children}
        </Main>
      </body>
    </html>
  )
}
