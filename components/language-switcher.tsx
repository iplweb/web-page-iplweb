"use client"

import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n()

  const toggleLanguage = () => {
    setLanguage(language === "pl" ? "en" : "pl")
  }

  return (
    <Button variant="outline" size="sm" className="gap-2 bg-transparent" onClick={toggleLanguage}>
      {language === "pl" ? "🇺🇸" : "🇵🇱"}
      <span className="hidden sm:inline">{language === "pl" ? "English" : "Polish"}</span>
    </Button>
  )
}
