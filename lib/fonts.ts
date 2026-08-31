import { Inter, Spectral, Instrument_Serif, JetBrains_Mono } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'], display: 'swap', preload: true })
export const interLight = Inter({ subsets: ['latin'], weight: '300', display: 'swap' })
export const interRegular = Inter({ subsets: ['latin'], weight: '400', display: 'swap' })
export const interMedium = Inter({ subsets: ['latin'], weight: '500', display: 'swap' })
export const interSemibold = Inter({ subsets: ['latin'], weight: '600', display: 'swap' })
export const interBold = Inter({ subsets: ['latin'], weight: '800', display: 'swap' })
export const spectral = Spectral({ subsets: ['latin'], weight: '800', display: 'swap' })
export const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', display: 'swap' })
export const mono = JetBrains_Mono({ subsets: ['latin'], weight: '400', display: 'swap' })
