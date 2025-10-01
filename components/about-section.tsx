"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Calendar, Award } from "lucide-react"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"

const technologies = [
  "Python",
  "Django",
  "PostgreSQL",
  "MySQL",
  "JavaScript",
  "Twisted",
  "Node.js",
  "DSpace",
  "Solr",
  "Elasticsearch",
  "Docker",
  "Linux",
  "ChatGPT",
  "Claude",
]

export function AboutSection() {
  const { t } = useI18n()

  const stats = [
    {
      icon: Calendar,
      labelKey: "about.stats.experience",
      value: "30+",
      hoverValueKey: "about.stats.experience_hover",
      hoverSubtitleKey: "about.stats.experience_hover_subtitle",
      descriptionKey: "about.stats.experience_desc",
    },
    {
      icon: Users,
      labelKey: "about.stats.clients",
      value: "50+",
      hoverValueKey: "about.stats.clients_hover",
      descriptionKey: "about.stats.clients_desc",
    },
    {
      icon: Award,
      labelKey: "about.stats.code",
      value: "∞",
      hoverValueKey: "about.stats.code_hover",
      descriptionKey: "about.stats.code_desc",
    },
  ]

  return (
    <section id="o-mnie" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">{t("about.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            {t("about.company.description")}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16 max-w-4xl mx-auto">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/images/michal-pasternak-photo.jpg"
                alt={t("about.intro.name")}
                width={128}
                height={128}
                className="w-full h-full object-cover brightness-115"
              />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-4">{t("about.intro.name")}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("about.intro.description")}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Lublin, Polska</span>
            </div>

            <h3 className="text-2xl font-bold">Oddychamy internetem</h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("about.company.description")}</p>
              <p>{t("about.experience.description")}</p>
            </div>
          </div>

          <div className="grid gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="flex items-center space-x-4 p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {stat.hoverValueKey ? (
                        <>
                          <span className="group-hover:hidden">{stat.value}</span>
                          <span className="hidden group-hover:inline">{t(stat.hoverValueKey)}</span>
                        </>
                      ) : (
                        stat.value
                      )}
                    </div>
                    <div className="font-medium">
                      {stat.hoverSubtitleKey ? (
                        <>
                          <span className="group-hover:hidden">{t(stat.labelKey)}</span>
                          <span className="hidden group-hover:inline">{t(stat.hoverSubtitleKey)}</span>
                        </>
                      ) : (
                        t(stat.labelKey)
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">{t(stat.descriptionKey || "")}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">{t("about.technologies.title")}</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
