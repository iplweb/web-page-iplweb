"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Database, Settings } from "lucide-react"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"

export function HeroSection() {
  const { t } = useI18n()

  const scrollToServices = () => {
    const servicesSection = document.getElementById("uslugi")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio")
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">{t("hero.title")}</h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">{t("hero.subtitle")}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8" onClick={scrollToServices}>
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" onClick={scrollToPortfolio}>
                {t("portfolio.title")}
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <Code className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">{t("services.custom.title")}</p>
              </div>
              <div className="text-center">
                <Database className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">{t("services.dspace.title")}</p>
              </div>
              <div className="text-center">
                <Settings className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">{t("services.integration.title")}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-card rounded-2xl p-8 shadow-2xl min-h-[400px] flex items-center justify-center">
              <Image src="/images/ipl-logo-large.png" alt="iplweb Logo" width={350} height={233} className="mx-auto" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl transform rotate-6"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
