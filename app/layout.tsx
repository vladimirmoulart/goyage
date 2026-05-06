import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { ChatWidget } from "@/components/chat/chat-widget"
import "./globals.css"

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
      <body className="font-sans antialiased">
        {children}
        <ChatWidget />
        {process.env.NODE_ENV === "production" ? <Analytics /> : null}
      </body>
    </html>
  )
}
