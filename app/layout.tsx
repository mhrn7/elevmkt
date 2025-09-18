import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "MedAI Agency - Tráfego Pago + Automações IA para Clínicas Médicas",
  description:
    "Agência especializada em tráfego pago e automações com IA para clínicas médicas. Atraímos leads qualificados e convertemos automaticamente com agentes de IA 24/7. Resultados comprovados em mais de 200 clínicas.",
  keywords:
    "tráfego pago, paid ads, marketing médico, automações IA, agentes IA, CRM médico, leads médicos, marketing para clínicas, Google Ads médico, Meta Ads clínicas",
  authors: [{ name: "MedAI Agency" }],
  creator: "MedAI Agency",
  publisher: "MedAI Agency",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    url: "https://medaiagency.com",
    siteName: "MedAI Agency",
    title: "MedAI Agency - Tráfego Pago + Automações IA para Clínicas Médicas",
    description:
      "Transforme visitantes em pacientes com IA avançada. Especializados em clínicas médicas com resultados comprovados.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MedAI Agency - Marketing Digital para Clínicas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MedAI Agency - Tráfego Pago + Automações IA",
    description: "Transforme visitantes em pacientes com IA avançada",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#2563eb",
  generator: "Next.js",
  applicationName: "MedAI Agency",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/jpeg" sizes="16x16" href="/favicon-16x16.jpg" />
        <link rel="icon" type="image/jpeg" sizes="32x32" href="/favicon-32x32.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.jpg" />
        <link rel="canonical" href="https://medaiagency.com" />
        <link rel="alternate" hrefLang="pt-BR" href="https://medaiagency.com" />
        <link rel="alternate" hrefLang="en-US" href="https://medaiagency.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://medaiagency.com" />
        <meta name="geo.region" content="BR" />
        <meta name="geo.placename" content="São Paulo" />
        <meta name="ICBM" content="-23.5505,-46.6333" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MedAI Agency",
              description: "Agência especializada em tráfego pago e automações com IA para clínicas médicas",
              url: "https://medaiagency.com",
              logo: "https://medaiagency.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-11-99999-9999",
                contactType: "customer service",
                availableLanguage: ["Portuguese", "English"],
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
                addressRegion: "SP",
                addressLocality: "São Paulo",
              },
              sameAs: ["https://linkedin.com/company/medaiagency", "https://instagram.com/medaiagency"],
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
