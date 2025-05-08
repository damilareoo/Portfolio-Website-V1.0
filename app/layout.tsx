import type React from "react"
import type { Metadata } from "next"
import { Geist as Geist_Sans } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

// Load Geist Sans
const geistSans = Geist_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

export const metadata: Metadata = {
  title: "Damilare Osofisan | Designer & Developer",
  description: "Portfolio of Damilare Osofisan, a designer and developer creating digital experiences.",
  openGraph: {
    title: "Damilare Osofisan | Designer & Developer",
    description: "Portfolio of Damilare Osofisan, a designer and developer creating digital experiences.",
    url: "https://damilareosofisan.com",
    siteName: "Damilare Osofisan",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Damilare Osofisan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damilare Osofisan | Designer & Developer",
    description: "Portfolio of Damilare Osofisan, a designer and developer creating digital experiences.",
    images: ["/api/og"],
    creator: "@damilare_oo",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
