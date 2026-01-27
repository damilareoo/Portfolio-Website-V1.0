import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Damilare Osofisan – Designer & Product Builder",
  description: "Crafting digital experiences and building products that matter. Designer and builder focused on creating 0–1 experiences with thoughtful design.",
  metadataBase: new URL("https://damilareoo.xyz"),
  icons: {
    icon: "/images/favicon.jpeg",
    shortcut: "/images/favicon.jpeg",
    apple: "/images/favicon.jpeg",
  },
  openGraph: {
    title: "Damilare Osofisan – Designer & Product Builder",
    description: "Crafting digital experiences and building products that matter. Designer and builder focused on creating 0–1 experiences with thoughtful design.",
    url: "https://damilareoo.xyz",
    siteName: "Damilare Osofisan",
    images: [
      {
        url: "https://damilareoo.xyz/images/000.png",
        width: 1200,
        height: 630,
        alt: "Damilare Osofisan - Designer and Product Builder",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damilare Osofisan – Designer & Product Builder",
    description: "Crafting digital experiences and building products that matter. Designer and builder focused on creating 0–1 experiences with thoughtful design.",
    images: ["https://damilareoo.xyz/images/000.png"],
    creator: "@damilareoo",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.jpeg" sizes="any" />

        <meta property="og:image" content="https://damilareoo.xyz/images/000.png" />
        <meta property="og:image:url" content="https://damilareoo.xyz/images/000.png" />
        <meta property="og:image:secure_url" content="https://damilareoo.xyz/images/000.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Damilare Osofisan - Designer and builder" />
        <meta property="og:image:type" content="image/png" />

        <meta name="twitter:image" content="https://damilareoo.xyz/images/000.png" />
        <meta name="twitter:image:alt" content="Damilare Osofisan - Designer and builder" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://damilareoo.xyz" />
        <meta property="og:title" content="Damilare Osofisan – Designer & Product Builder" />
        <meta property="og:description" content="Crafting digital experiences and building products that matter. Designer and builder focused on creating 0–1 experiences with thoughtful design." />
        <meta property="og:site_name" content="Damilare Osofisan" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Damilare" />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
