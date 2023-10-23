import React from 'react'
import Nav from './nav'
import "./layout.css"
export default function RootLayout({
    children,
}:{
    children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body>
          <header>
          <Nav />
          </header>
          <main>
          {children}
          </main>
        </body>
    </html>
  )
}
