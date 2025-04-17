import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Adopta Huellitas - Encuentra el hogar perfecto para cada mascota",
  description:
    "Adopta Huellitas conecta a personas amorosas con mascotas que necesitan un hogar. Nuestra aplicación facilita el proceso de adopción, haciendo que sea simple y gratificante encontrar a tu compañero perfecto.",
    generator: 'ImaaValenzuela'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
