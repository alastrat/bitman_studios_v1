import type React from "react"
import "./globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
})

export const metadata = {
  title: "BitMaN Studio | AI-Powered Video Production for DTC Brands",
  description:
    "We create high-converting video content for e-commerce brands using AI technology. Faster delivery, lower costs, better results.",
  openGraph: {
    title: "BitMaN Studios | AI Video Ads Studio for eCommerce Brands",
    description:
      "We turn eCommerce products into scroll-stopping visuals with AI-powered animations that boost engagement, sales, and brands love.",
    url: "https://bitmanstudios.com",
    siteName: "BitMaN Studios",
    images: [
      {
        url: "/images/bitman-og.png",
        width: 1200,
        height: 630,
        alt: "BitMaN Studios - AI Video Ads Studio for eCommerce Brands",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BitMaN Studios | AI Video Ads Studio for eCommerce Brands",
    description:
      "We turn eCommerce products into scroll-stopping visuals with AI-powered animations that boost engagement, sales, and brands love.",
    images: ["/images/bitman-og.png"],
    creator: "@bitmanstudios",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable}`}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
