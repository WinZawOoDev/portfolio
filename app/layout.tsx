
import Header from '@/components/layouts/header'
import './globals.css'
import type { Metadata } from 'next'
import ScrollProgress from '@/components/utils/scroll-progress'
import Main from '@/components/layouts/main'
import { inter } from '@/lib/fonts'
import { siteConfig } from '@/lib/site'

const fullTitle = `${siteConfig.name} — ${siteConfig.role}`

export const metadata: Metadata = {
  title: {
    default: fullTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: fullTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: siteConfig.twitterHandle,
    title: fullTitle,
    description: siteConfig.description,
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
