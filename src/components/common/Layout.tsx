import { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Xuehan Huang</title>
        <meta name="description" content="Personal website showcasing works, writings, and about me." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Your Name - Portfolio" />
        <meta property="og:description" content="Personal website showcasing works, writings, and about me." />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen flex flex-col bg-snow-texture">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
