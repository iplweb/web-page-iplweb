"use client"

import type React from "react"
import { useEffect } from "react"
import { I18nProvider, useI18n } from "@/lib/i18n"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { language, t } = useI18n()

  useEffect(() => {
    document.documentElement.lang = language
    document.title =
      language === "pl" ? "iplweb - Specjalistyczne oprogramowanie na zamówienie" : "iplweb - Custom Software Solutions"
  }, [language])

  return <>{children}</>
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
      <I18nProvider>
        <LayoutContent>{children}</LayoutContent>
      </I18nProvider>
    </body>
  )
}
