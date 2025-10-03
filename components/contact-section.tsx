"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Calendar } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function ContactSection() {
  const { t } = useI18n()

  const contactInfo = [
    {
      icon: Mail,
      titleKey: "contact.info.email",
      content: "m+ipl@iplweb.pl",
      isLink: true,
      href: "mailto:m+ipl@iplweb.pl",
    },
    {
      icon: Phone,
      titleKey: "contact.info.phone",
      content: "+48 793 66 87 33",
      isLink: true,
      href: "tel:+48793668733",
    },
    {
      icon: Calendar,
      titleKey: "contact.info.meeting",
      contentKey: "contact.info.meeting_link",
      isLink: true,
      href: "https://calendly.com/mpasternak/",
      external: true,
    },
  ]

  return (
    <section id="kontakt" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">{t("contact.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{t("contact.subtitle")}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">{t("contact.info.title")}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="block"
                    target={info.external ? "_blank" : undefined}
                    rel={info.external ? "noopener noreferrer" : undefined}
                  >
                    <Card className="group hover:shadow-lg transition-all duration-300 h-full cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <div className="flex flex-col items-center space-y-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <info.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">{t(info.titleKey)}</h4>
                            <p className="text-primary font-medium">
                              {info.contentKey ? t(info.contentKey) : info.content}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">{t("contact.why.title")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">{t("about.why.experience_desc")}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">{t("about.why.reliability_desc")}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">{t("about.why.support_desc")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
