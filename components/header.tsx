"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useI18n } from "@/lib/i18n"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const { t } = useI18n()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToContact = () => {
    const contactSection = document.getElementById("kontakt")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/ipl-logo-poziome-large.png"
                alt="iplweb Logo"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#uslugi" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.services")}
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.portfolio")}
            </Link>
            <Link href="#prezentacje" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.presentations")}
            </Link>
            <Link href="#o-mnie" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.about")}
            </Link>
            <Link href="#kontakt" className="text-sm font-medium hover:text-primary transition-colors">
              {t("nav.contact")}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button onClick={scrollToContact} className="hidden md:inline-flex">
              {t("nav.contact")}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              <Link
                href="#uslugi"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={handleNavClick}
              >
                {t("nav.services")}
              </Link>
              <Link
                href="#portfolio"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={handleNavClick}
              >
                {t("nav.portfolio")}
              </Link>
              <Link
                href="#prezentacje"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={handleNavClick}
              >
                {t("nav.presentations")}
              </Link>
              <Link
                href="#o-mnie"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={handleNavClick}
              >
                {t("nav.about")}
              </Link>
              <Link
                href="#kontakt"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={handleNavClick}
              >
                {t("nav.contact")}
              </Link>
              <Button onClick={scrollToContact} className="w-full mt-4">
                {t("nav.contact")}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
