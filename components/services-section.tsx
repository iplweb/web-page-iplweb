"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Database, Cog, Puzzle, Brain } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"

export function ServicesSection() {
  const { t } = useI18n()

  const services = [
    {
      icon: null,
      customIcon: "/images/logo-bpp-element-small.png",
      titleKey: "services.bpp.title",
      descriptionKey: "services.bpp.description",
      techKey: "services.bpp.tech",
      isExternal: true,
      externalUrl: "https://bpp.iplweb.pl/",
    },
    {
      icon: Database,
      titleKey: "services.dspace.title",
      descriptionKey: "services.dspace.description",
      techKey: "services.dspace.tech",
      isExternal: true,
      externalUrl: "https://dspace.iplweb.pl/",
    },
    {
      icon: Brain,
      titleKey: "services.ai.title",
      descriptionKey: "services.ai.description",
      techKey: "services.ai.tech",
      isExternal: true,
      externalUrl: "https://ai.iplweb.pl/",
    },
    {
      icon: Code2,
      titleKey: "services.custom.title",
      descriptionKey: "services.custom.description",
      techKey: "services.custom.tech",
      isExternal: false,
    },
    {
      icon: Puzzle,
      titleKey: "services.integration.title",
      descriptionKey: "services.integration.description",
      techKey: "services.integration.tech",
      isExternal: false,
    },
    {
      icon: Cog,
      titleKey: "services.consulting.title",
      descriptionKey: "services.consulting.description",
      techKey: "services.consulting.tech",
      isExternal: false,
    },
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById("kontakt")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="uslugi" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">{t("services.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{t("services.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const cardContent = (
              <>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    {service.customIcon ? (
                      <Image
                        src={service.customIcon || "/placeholder.svg"}
                        alt={t(service.titleKey)}
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    ) : (
                      <service.icon className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <CardTitle className="text-xl">{t(service.titleKey)}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{t(service.descriptionKey)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">{t("about.technologies.title")}: </span>
                      {t(service.techKey)}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    asChild
                  >
                    <span>{t("services.learn_more")}</span>
                  </Button>
                </CardContent>
              </>
            )

            if (service.isExternal) {
              return (
                <Link
                  key={index}
                  href={service.externalUrl || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                    {cardContent}
                  </Card>
                </Link>
              )
            }

            return (
              <Card
                key={index}
                onClick={scrollToContact}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {cardContent}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
