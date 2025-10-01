"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Play } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function PresentationsSection() {
  const { t } = useI18n()

  const presentations = [
    {
      titleKey: "presentations.python_django.title",
      descriptionKey: "presentations.python_django.description",
      url: "https://www.youtube.com/watch?v=qh13aUh-EEs&t=1s",
    },
    {
      titleKey: "presentations.ai_medicine.title",
      descriptionKey: "presentations.ai_medicine.description",
      url: "https://www.youtube.com/watch?v=8o6_JiRYMw0&pp=ygUfTWljaGHFgiBwYXN0ZXJuYWsgcHl0ZWNoIHN1bW1pdA%3D%3D",
    },
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById("kontakt")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="prezentacje" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">{t("presentations.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{t("presentations.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {presentations.map((presentation, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Play className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {t(presentation.titleKey)}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {t("presentations.duration")}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {t(presentation.descriptionKey)}
                </CardDescription>

                <div className="pt-4">
                  <Button asChild className="w-full">
                    <a href={presentation.url} target="_blank" rel="noopener noreferrer">
                      {t("presentations.watch")}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
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
