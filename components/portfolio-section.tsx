"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, BookOpen, Github } from "lucide-react"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"

export function PortfolioSection() {
  const { t } = useI18n()

  const portfolioItems = [
    {
      titleKey: "portfolio.bpp.title",
      descriptionKey: "portfolio.bpp.description",
      techKey: "portfolio.bpp.tech",
      url: "https://bpp.iplweb.pl/",
      icon: BookOpen,
      customLogo: "/images/logo-bpp-element-small.png",
    },
    {
      titleKey: "portfolio.github_iplweb.title",
      descriptionKey: "portfolio.github_iplweb.description",
      techKey: "portfolio.github_iplweb.tech",
      url: "https://github.com/iplweb",
      icon: Github,
    },
    {
      titleKey: "portfolio.github_personal.title",
      descriptionKey: "portfolio.github_personal.description",
      techKey: "portfolio.github_personal.tech",
      url: "https://github.com/mpasternak",
      icon: Github,
    },
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById("kontakt")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">{t("portfolio.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{t("portfolio.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      {item.customLogo ? (
                        <Image
                          src={item.customLogo || "/placeholder.svg"}
                          alt={`${t(item.titleKey)} logo`}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      ) : (
                        <item.icon className="h-6 w-6 text-primary" />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {t(item.titleKey)}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {t(item.techKey)
                          .split(", ")
                          .map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <CardDescription className="text-base leading-relaxed">{t(item.descriptionKey)}</CardDescription>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <div className="flex justify-center">
                    <Button asChild className="w-auto px-8">
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        {t("portfolio.visit")}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" onClick={scrollToContact}>
            {t("contact.title")}
          </Button>
        </div>
      </div>
    </section>
  )
}
