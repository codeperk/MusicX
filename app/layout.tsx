import Sidebar from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import SupabaseProvider from '@/providers/SupabaseProvider'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MusicX',
  description: 'MusicX - Where Music, Connection, and Love Converge!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <SupabaseProvider>
        <Sidebar>
          {children}
        </Sidebar>
      </SupabaseProvider>
      </body>
    </html>
  )
}