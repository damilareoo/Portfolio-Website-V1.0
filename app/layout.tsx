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
  metadataBase: new URL("https://damilareoo.xyz"),
  openGraph: {
    title: "Damilare Osofisan | Designer & Developer",
    description: "Portfolio of Damilare Osofisan, a designer and developer creating digital experiences.",
    url: "https://damilareoo.xyz",
    siteName: "Damilare Osofisan | damilareoo.xyz",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 1200,
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
    images: ["/images/og-image.png"],
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
      <head>
        {/* Force refresh of social media cache */}
        <meta property="og:image" content="https://damilareoo.xyz/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:alt" content="Damilare Osofisan" />
        <meta property="og:image:type" content="image/png" />

        <meta name="twitter:image" content="https://damilareoo.xyz/images/og-image.png" />
        <meta name="twitter:image:alt" content="Damilare Osofisan" />

        {/* Facebook specific */}
        <meta property="fb:app_id" content="your-fb-app-id-if-you-have-one" />

        {/* Additional social media tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://damilareoo.xyz" />
        <meta property="og:title" content="Damilare Osofisan | Designer & Developer" />
        <meta
          property="og:description"
          content="Portfolio of Damilare Osofisan, a designer and developer creating digital experiences."
        />
        <meta property="og:site_name" content="Damilare Osofisan | damilareoo.xyz" />

        {/* Cache control for better refreshing - fixed attribute name */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
