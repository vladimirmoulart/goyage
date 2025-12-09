import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "GOYAGE - Voyagez autrement, vivez vraiment",
  description:
    "Connectez-vous avec des hôtes locaux pour des expériences authentiques et inoubliables à travers le monde.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans antialiased ${poppins.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
