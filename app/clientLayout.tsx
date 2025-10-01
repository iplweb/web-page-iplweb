"use client"

import type React from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { useI18n } from "@/lib/i18n"
import { useEffect } from "react"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { language, t } = useI18n()

  useEffect(() => {
    // <CHANGE> Update document language and title dynamically
    document.documentElement.lang = language
    document.title =
      language === "pl" ? "iplweb - Specjalistyczne oprogramowanie na zamówienie" : "iplweb - Custom Software Solutions"
  }, [language])

  return (
    <html lang={language}>
      <head>
        <title>
          {language === "pl"
            ? "iplweb - Specjalistyczne oprogramowanie na zamówienie"
            : "iplweb - Custom Software Solutions"}
        </title>
        <meta name="description" content={t("hero.subtitle")} />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>{children}</body>
    </html>
  )
}
