import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import ClientLayout from "./client-layout"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: {
    default: "iplweb - Custom Software Solutions | Python, Django, DSpace",
    template: "%s | iplweb",
  },
  description:
    "Professional software development services specializing in Python, Django, DSpace repositories, and custom web applications. Expert solutions for libraries, universities, and research institutions.",
  keywords: [
    "Python development",
    "Django",
    "DSpace",
    "custom software",
    "web development",
    "repository systems",
    "BPP",
    "software consulting",
    "Lublin",
    "Poland",
  ],
  authors: [{ name: "Michał Pasternak" }],
  creator: "Michał Pasternak",
  publisher: "iplweb",
  metadataBase: new URL("https://iplweb.pl"),
  alternates: {
    canonical: "/",
    languages: {
      pl: "/",
      en: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    alternateLocale: ["en_US"],
    url: "https://iplweb.pl",
    siteName: "iplweb",
    title: "iplweb - Custom Software Solutions",
    description:
      "Professional software development services specializing in Python, Django, DSpace repositories, and custom web applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "iplweb - Custom Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iplweb - Custom Software Solutions",
    description:
      "Professional software development services specializing in Python, Django, DSpace repositories, and custom web applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <head>
        <Script
          defer
          data-domain="iplweb.pl"
          src="https://plausible.io/js/script.hash.outbound-links.js"
          strategy="afterInteractive"
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "iplweb",
              description:
                "Professional software development services specializing in Python, Django, DSpace repositories, and custom web applications.",
              url: "https://iplweb.pl",
              logo: "https://iplweb.pl/logo.png",
              image: "https://iplweb.pl/og-image.png",
              telephone: "+48-81-5375575",
              email: "m+ipl@iplweb.pl",
              address: {
                "@type": "PostalAddress",
                addressCountry: "PL",
                addressLocality: "Lublin",
              },
              founder: {
                "@type": "Person",
                name: "Michał Pasternak",
              },
              areaServed: {
                "@type": "Country",
                name: "Poland",
              },
              serviceType: [
                "Software Development",
                "Web Development",
                "Python Development",
                "Django Development",
                "DSpace Implementation",
                "Custom Software Solutions",
              ],
            }),
          }}
        />
      </head>
      <Suspense fallback={null}>
        <ClientLayout>
          {children}
          <Analytics />
        </ClientLayout>
      </Suspense>
    </html>
  )
}
