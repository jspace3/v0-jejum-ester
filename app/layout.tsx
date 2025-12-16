import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jejum de Ester | Transformação Espiritual em 3 Dias",
  description:
    "Uma jornada espiritual de 3 dias que transformará sua vida através da oração e do jejum. Experimente o poder do Jejum de Ester.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          src="https://otimizey-cdn.s3.us-east-1.amazonaws.com/scripts-utm-otimizey.js"
          strategy="afterInteractive"
          async
          defer
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
