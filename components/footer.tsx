"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, Twitter } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Footer() {
  const { t } = useI18n()

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/images/ipl-logo-poziome-small.png"
              alt="iplweb Logo"
              width={160}
              height={50}
              className="h-8 w-auto"
            />
            <p className="text-sm text-muted-foreground">{t("hero.subtitle")}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#uslugi" className="hover:text-primary transition-colors" onClick={(e) => scrollToSection(e, "uslugi")}>
                  {t("services.custom.title")}
                </Link>
              </li>
              <li>
                <a
                  href="https://dspace.iplweb.pl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {t("services.dspace.title")}
                </a>
              </li>
              <li>
                <Link href="#uslugi" className="hover:text-primary transition-colors" onClick={(e) => scrollToSection(e, "uslugi")}>
                  {t("services.integration.title")}
                </Link>
              </li>
              <li>
                <Link href="#uslugi" className="hover:text-primary transition-colors" onClick={(e) => scrollToSection(e, "uslugi")}>
                  {t("services.ai.title")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.company")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#portfolio" className="hover:text-primary transition-colors" onClick={(e) => scrollToSection(e, "portfolio")}>
                  {t("nav.portfolio")}
                </Link>
              </li>
              <li>
                <Link href="#prezentacje" className="hover:text-primary transition-colors" onClick={(e) => scrollToSection(e, "prezentacje")}>
                  {t("nav.presentations")}
                </Link>
              </li>
              <li>
                <Link href="#kontakt" className="hover:text-primary transition-colors" onClick={(e) => scrollToSection(e, "kontakt")}>
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link href="#o-mnie" className="hover:text-primary transition-colors" onClick={(e) => scrollToSection(e, "o-mnie")}>
                  {t("nav.about")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>michal.dtz@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+48 793 66 87 33</span>
              </li>
              <li className="flex items-center space-x-2">
                <Twitter className="h-4 w-4" />
                <a href="https://twitter.com/mpasternak79" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  @mpasternak79
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 iplweb. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
