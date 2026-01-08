import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Damilare Osofisan | Designer & Builder",
  description: "Designer and builder creating 0–1 experiences.",
  metadataBase: new URL("https://damilareoo.xyz"),
  icons: {
    icon: "/images/avatar.png",
    shortcut: "/images/avatar.png",
    apple: "/images/avatar.png",
  },
  openGraph: {
    title: "Damilare Osofisan | Designer & Builder",
    description: "Designer and builder creating 0–1 experiences.",
    url: "https://damilareoo.xyz",
    siteName: "Damilare Osofisan",
    images: [
      {
        url: "https://damilareoo.xyz/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Damilare Osofisan - Designer and builder",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damilare Osofisan | Designer & Builder",
    description: "Designer and builder creating 0–1 experiences.",
    images: ["https://damilareoo.xyz/images/og-image.png"],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/avatar.png" sizes="any" />

        <meta property="og:image" content="https://damilareoo.xyz/images/og-image.png" />
        <meta property="og:image:url" content="https://damilareoo.xyz/images/og-image.png" />
        <meta property="og:image:secure_url" content="https://damilareoo.xyz/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Damilare Osofisan - Designer and builder" />
        <meta property="og:image:type" content="image/png" />

        <meta name="twitter:image" content="https://damilareoo.xyz/images/og-image.png" />
        <meta name="twitter:image:alt" content="Damilare Osofisan - Designer and builder" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://damilareoo.xyz" />
        <meta property="og:title" content="Damilare Osofisan | Designer & Builder" />
        <meta property="og:description" content="Designer and builder creating 0–1 experiences." />
        <meta property="og:site_name" content="Damilare Osofisan" />

        {/* Apple-specific meta tags for iMessage/Messages app preview */}
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
