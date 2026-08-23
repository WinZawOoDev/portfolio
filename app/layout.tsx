
import Header from '@/components/layouts/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ScrollProgress from '@/components/utils/ScrollProgress'
import Main from '@/components/layouts/Main'

const inter = Inter({ subsets: ['latin'], display: 'swap', preload: true })

export const metadata: Metadata = {
  title: {
    default: 'Win Zaw Oo — Full-Stack Developer',
    template: '%s | Win Zaw Oo',
  },
  description: 'Full-Stack Developer specializing in backend systems, Next.js, Nest.js and PostgreSQL. Based in Myanmar.',
  metadataBase: new URL('https://winzawoo.dev'),
  openGraph: {
    title: 'Win Zaw Oo — Full-Stack Developer',
    description: 'Full-Stack Developer specializing in backend systems, Next.js, Nest.js and PostgreSQL.',
    url: 'https://winzawoo.dev',
    siteName: 'Win Zaw Oo Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@WinZaw00',
    title: 'Win Zaw Oo — Full-Stack Developer',
    description: 'Full-Stack Developer specializing in backend systems, Next.js, Nest.js and PostgreSQL.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const themeInitScript = `
(function () {
  try {
    var param = new URLSearchParams(window.location.search).get('theme');
    var isDark = param === 'dark';
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
