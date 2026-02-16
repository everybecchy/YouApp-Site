import React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "YouApp - Crie aplicativos PWA sem código e sem IA",
  description:
    "Crie aplicativos profissionais para seu negócio em minutos. Sem código, sem IA, sem complicação. Plataforma visual para PWA.",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  themeColor: "#000000",

  applicationName: "YouApp",

  metadataBase: new URL("https://seusite.com"), // 🔥 troque pelo seu domínio real
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
