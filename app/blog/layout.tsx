import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <div className={`${inter.className} bg-zinc-100 flex flex-col`}>
        <Container>
        <Header/>
        {children}
        <Footer/>
        </Container>
        </div>
  )
}