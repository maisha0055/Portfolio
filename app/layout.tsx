import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { GlobalEffects } from '@/components/GlobalEffects'
import { StructuredData } from '@/components/StructuredData'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Jannatul Bushra Maisha | Full Stack Developer & ML Enthusiast',
  description: 'Computer Science student passionate about full-stack development, machine learning, and cybersecurity. Building secure and intelligent applications.',
  keywords: 'Full Stack Developer, Machine Learning, Web Development, Cybersecurity, MERN Stack, React, Node.js, Python, Next.js',
  generator: 'v0.app',
  metadataBase: new URL('https://jannatul-bushra-maisha.vercel.app'),
  openGraph: {
    title: 'Jannatul Bushra Maisha | Full Stack Developer & ML Enthusiast',
    description: 'Explore my portfolio of web development and machine learning projects.',
    url: 'https://jannatul-bushra-maisha.vercel.app',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jannatul Bushra Maisha Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jannatul Bushra Maisha | Full Stack Developer',
    description: 'Portfolio of a Full Stack Developer and ML Enthusiast',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FFFCF7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background scroll-smooth`}>
      <head>
        <StructuredData />
      </head>
      <body className="antialiased font-sans">
        <GlobalEffects />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
