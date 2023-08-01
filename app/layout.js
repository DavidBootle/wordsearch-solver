import './globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wordsearch Solver',
  description: 'Solve wordsearches!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Wordsearch Solver</title>
      </head>
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
