"use client"

import { useState, useEffect, useLayoutEffect, createContext, useContext, type ReactNode } from "react"

export type Language = "pl" | "en"

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export const translations = {
  pl: {
    // Navigation
    "nav.home": "Strona główna",
    "nav.services": "Usługi",
    "nav.portfolio": "Portfolio",
    "nav.presentations": "Prezentacje",
    "nav.about": "O mnie",
    "nav.contact": "Kontakt",

    // Hero Section
    "hero.title": "Specjalistyczne oprogramowanie na zamówienie",
    "hero.subtitle":
      "Tworzę zaawansowane rozwiązania informatyczne dla instytucji naukowych, bibliotek i firm. Ponad 30 lat doświadczenia w programowaniu.",
    "hero.cta": "Poznaj moje usługi",

    // Services
    "services.title": "Moje usługi",
    "services.subtitle":
      "Specjalizuję się w tworzeniu oprogramowania na zamówienie oraz wsparciu systemów informatycznych",
    "services.bpp.title": "Bibliografia Publikacji Pracowników",
    "services.bpp.description":
      "Kompleksowy system do zarządzania bibliografią publikacji naukowych pracowników instytucji. Rozwój i wsparcie oprogramowania Bibliografia Publikacji Pracowników oraz wsparcie w ewaluacji.",
    "services.bpp.tech": "Python, Django, PostgreSQL, Foundation",
    "services.dspace.title": "Systemy DSpace",
    "services.dspace.description":
      "Instalacja, konfiguracja i aktualizacja platform DSpace dla repozytoriów cyfrowych. Dostosowanie do specyficznych potrzeb instytucji.",
    "services.dspace.tech": "Java, DSpace, Solr, PostgreSQL",
    "services.ai.title": "Sztuczna inteligencja w medycynie",
    "services.ai.description":
      "Konsultacje i rozwój rozwiązań AI dla projektów medycznych, ze szczególnym naciskiem na anestezjologię i intensywną terapię.",
    "services.ai.tech": "Python, TensorFlow, PyTorch, ChatGPT, Claude",
    "services.custom.title": "Oprogramowanie na zamówienie",
    "services.custom.description":
      "Projektowanie i implementacja dedykowanych aplikacji webowych dostosowanych do specyficznych wymagań biznesowych.",
    "services.custom.tech": "Python, Django, JavaScript, PostgreSQL",
    "services.integration.title": "Integracje systemów",
    "services.integration.description":
      "Łączenie różnych systemów informatycznych, API, migracja danych oraz automatyzacja procesów biznesowych.",
    "services.integration.tech": "REST API, Python, Twisted, PostgreSQL",
    "services.consulting.title": "Konsultacje IT",
    "services.consulting.description":
      "Doradztwo w zakresie architektury systemów, wyboru technologii i strategii digitalizacji.",
    "services.consulting.tech": "Audyt systemów, Planowanie IT, Strategia cyfrowa",
    "services.learn_more": "Dowiedz się więcej",

    // Portfolio
    "portfolio.title": "Moje portfolio",
    "portfolio.subtitle": "Przykłady zrealizowanych projektów i rozwiązań",
    "portfolio.bpp.title": "Bibliografia Publikacji Pracowników",
    "portfolio.bpp.description":
      "System do zarządzania bibliografią publikacji naukowych z zaawansowanymi funkcjami raportowania i ewaluacji.",
    "portfolio.bpp.tech": "Python, Django, PostgreSQL",
    "portfolio.github_iplweb.title": "GitHub - iplweb",
    "portfolio.github_iplweb.description":
      "Repozytorium firmowe z projektami open source i narzędziami dla społeczności naukowej.",
    "portfolio.github_iplweb.tech": "Python, Django, JavaScript",
    "portfolio.github_personal.title": "GitHub - mpasternak",
    "portfolio.github_personal.description":
      "Osobiste repozytorium z eksperymentami, prototypami i projektami badawczymi.",
    "portfolio.github_personal.tech": "Python, AI/ML, Research",
    "portfolio.visit": "Odwiedź stronę",

    // Presentations
    "presentations.title": "Moje prezentacje",
    "presentations.subtitle": "Wystąpienia i prezentacje na konferencjach technicznych",
    "presentations.python_django.title": "10 lat z Pythonem i Django",
    "presentations.python_django.description":
      "Prezentacja o tym, jakie technologie umożliwiają nieprzerwany rozwój systemu BPP od lat.",
    "presentations.ai_medicine.title": "Praktyczne zastosowanie dużych modeli językowych",
    "presentations.ai_medicine.description": "w medycynie i w anestezjologii",
    "presentations.duration": "~60 min",
    "presentations.watch": "Obejrzyj na YouTube",

    // About
    "about.title": "O iplweb",
    "about.intro.name": "Michał Pasternak",
    "about.intro.description":
      "Programuję z pasją od wielu lat. Fascynuje mnie rozwój technologii, która zwiększa ludzkie możliwości - od systemów wspierających naukę po sztuczną inteligencję w medycynie. Każda linia kodu to krok w kierunku lepszej przyszłości dla ludzkości.",
    "about.company.description":
      "Nazywam się Michał Pasternak i pod marką iplweb prowadzę moją działalność informatyczną. Specjalizuję się w tworzeniu oprogramowania na zamówienie dla instytucji naukowych, bibliotek i firm potrzebujących zaawansowanych rozwiązań informatycznych.",
    "about.experience.description":
      "Moje doświadczenie obejmuje szczególnie systemy repozytoryjne, platformy DSpace, integracje bibliotecznych systemów informatycznych oraz rozwiązania IT dla sektora medycznego, w tym anestezjologii. Tworzę rozwiązania, które wspierają zarządzanie informacją naukową, badam możliwości użycia technologii w celu podniesienia bezpieczeństwa w medycynie.",
    "about.stats.experience": "30+ lat doświadczenia",
    "about.stats.experience_hover": "Kawał czasu",
    "about.stats.experience_hover_subtitle": "Mój pierwszy komputer to Timex 2048!",
    "about.stats.experience_desc": "w tworzeniu oprogramowania",
    "about.stats.clients": "50+ zadowolonych klientów",
    "about.stats.clients_hover": "i ta liczba nadal rośnie",
    "about.stats.clients_desc": "instytucji i firm",
    "about.stats.code": "∞ Linii kodu napisanych z pasją",
    "about.stats.code_hover": "Przestałem liczyć",
    "about.stats.code_desc": "napisanych z pasją",
    "about.technologies.title": "Technologie z którymi pracuję",
    "about.why.title": "Dlaczego warto ze mną współpracować?",
    "about.why.reliability": "Solidność i niezawodność",
    "about.why.reliability_desc": "Każdy projekt traktuję z pełnym zaangażowaniem",
    "about.why.experience": "Bogate doświadczenie",
    "about.why.experience_desc": "30+ lat w branży IT i setki zrealizowanych projektów",
    "about.why.support": "Kompleksowe wsparcie",
    "about.why.support_desc": "Od analizy przez implementację po długoterminowe wsparcie",

    // Contact
    "contact.title": "Zapraszam do kontaktu",
    "contact.why.title": "Dlaczego warto ze mną współpracować?",
    "contact.subtitle":
      "Masz projekt do realizacji? Potrzebujesz konsultacji? Napisz do mnie - chętnie omówimy Twoje potrzeby.",
    "contact.form.name": "Imię i nazwisko",
    "contact.form.email": "Adres e-mail",
    "contact.form.message": "Wiadomość",
    "contact.form.send": "Wyślij wiadomość",
    "contact.info.phone": "Telefon",
    "contact.info.email": "E-mail",
    "contact.info.meeting": "Spotkanie",
    "contact.info.meeting_link": "Umów spotkanie",
    "contact.info.address": "Adres",
    "contact.info.title": "Dane kontaktowe",

    // Footer
    "footer.company": "Firma",
    "footer.services": "Usługi",
    "footer.contact": "Kontakt",
    "footer.rights": "Wszystkie prawa zastrzeżone.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.presentations": "Presentations",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Custom Software Solutions",
    "hero.subtitle":
      "I create advanced IT solutions for scientific institutions, libraries, and companies. Over 30 years of programming experience.",
    "hero.cta": "Explore My Services",

    // Services
    "services.title": "My Services",
    "services.subtitle": "I specialize in custom software development and IT systems support",
    "services.bpp.title": "Employee Publications Bibliography",
    "services.bpp.description":
      "Comprehensive system for managing scientific publications bibliography of institutional employees. Development and support of the Employee Publications Bibliography software and evaluation support.",
    "services.bpp.tech": "Python, Django, PostgreSQL, Foundation",
    "services.dspace.title": "DSpace Systems",
    "services.dspace.description":
      "Installation, configuration, and updates of DSpace platforms for digital repositories. Customization to specific institutional needs.",
    "services.dspace.tech": "Java, DSpace, Solr, PostgreSQL",
    "services.ai.title": "Artificial Intelligence in Medicine",
    "services.ai.description":
      "Consulting and development of AI solutions for medical projects, with particular emphasis on anesthesiology and intensive care.",
    "services.ai.tech": "Python, TensorFlow, PyTorch, ChatGPT, Claude",
    "services.custom.title": "Custom Software",
    "services.custom.description":
      "Design and implementation of dedicated web applications tailored to specific business requirements.",
    "services.custom.tech": "Python, Django, JavaScript, PostgreSQL",
    "services.integration.title": "System Integrations",
    "services.integration.description":
      "Connecting various IT systems, APIs, data migration, and business process automation.",
    "services.integration.tech": "REST API, Python, Twisted, PostgreSQL",
    "services.consulting.title": "IT Consulting",
    "services.consulting.description":
      "Consulting in system architecture, technology selection, and digitization strategy.",
    "services.consulting.tech": "System Audit, IT Planning, Digital Strategy",
    "services.learn_more": "Learn More",

    // Portfolio
    "portfolio.title": "My Portfolio",
    "portfolio.subtitle": "Examples of completed projects and solutions",
    "portfolio.bpp.title": "Employee Publications Bibliography",
    "portfolio.bpp.description":
      "System for managing scientific publications bibliography with advanced reporting and evaluation features.",
    "portfolio.bpp.tech": "Python, Django, PostgreSQL",
    "portfolio.github_iplweb.title": "GitHub - iplweb",
    "portfolio.github_iplweb.description":
      "Company repository with open source projects and tools for the scientific community.",
    "portfolio.github_iplweb.tech": "Python, Django, JavaScript",
    "portfolio.github_personal.title": "GitHub - mpasternak",
    "portfolio.github_personal.description": "Personal repository with experiments, prototypes, and research projects.",
    "portfolio.github_personal.tech": "Python, AI/ML, Research",
    "portfolio.visit": "Visit Site",

    // Presentations
    "presentations.title": "My Presentations",
    "presentations.subtitle": "Talks and presentations at technical conferences",
    "presentations.python_django.title": "10 Years with Python and Django",
    "presentations.python_django.description":
      "Presentation about technologies that enable continuous development of the BPP system over the years.",
    "presentations.ai_medicine.title": "Practical Application of Large Language Models",
    "presentations.ai_medicine.description": "in medicine and anesthesiology",
    "presentations.duration": "~60 min",
    "presentations.watch": "Watch on YouTube",

    // About
    "about.title": "About iplweb",
    "about.intro.name": "Michał Pasternak",
    "about.intro.description":
      "I have been programming with passion for many years. I am fascinated by the development of technology that increases human capabilities - from systems supporting science to artificial intelligence in medicine. Every line of code is a step towards a better future for humanity.",
    "about.company.description":
      "My name is Michał Pasternak and I run my IT business under the iplweb brand. I specialize in creating custom software for scientific institutions, libraries, and companies that need advanced IT solutions.",
    "about.experience.description":
      "My experience particularly includes repository systems, DSpace platforms, library information system integrations, and IT solutions for the medical sector, including anesthesiology. I create solutions that support scientific information management and research the possibilities of using technology to improve safety in medicine.",
    "about.stats.experience": "30+ years of experience",
    "about.stats.experience_hover": "Quite a while",
    "about.stats.experience_hover_subtitle": "My first computer was Timex 2048!",
    "about.stats.experience_desc": "in software development",
    "about.stats.clients": "50+ satisfied clients",
    "about.stats.clients_hover": "and this number keeps growing",
    "about.stats.clients_desc": "institutions and companies",
    "about.stats.code": "∞ Lines of code written with passion",
    "about.stats.code_hover": "I stopped counting",
    "about.stats.code_desc": "written with passion",
    "about.technologies.title": "Technologies I work with",
    "about.why.title": "Why work with me?",
    "about.why.reliability": "Reliability and dependability",
    "about.why.reliability_desc": "I treat every project with full commitment",
    "about.why.experience": "Rich experience",
    "about.why.experience_desc": "30+ years in IT industry and hundreds of completed projects",
    "about.why.support": "Comprehensive support",
    "about.why.support_desc": "From analysis through implementation to long-term support",

    // Contact
    "contact.title": "Get in Touch",
    "contact.why.title": "Why work with me?",
    "contact.subtitle":
      "Have a project to implement? Need consultation? Write to me - I'd be happy to discuss your needs.",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.meeting": "Meeting",
    "contact.info.meeting_link": "Book a meeting",
    "contact.info.address": "Address",
    "contact.info.title": "Contact Information",

    // Footer
    "footer.company": "Company",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
  },
}

function detectBrowserLanguage(): Language {
  if (typeof window === "undefined") return "pl"

  const browserLang = navigator.language.toLowerCase()
  if (browserLang.startsWith("en")) return "en"
  return "pl" // Default to Polish
}

export function I18nProvider({ children }: { children: ReactNode }) {
  // Always start with "pl" to avoid hydration mismatch
  const [language, setLanguage] = useState<Language>("pl")
  const [isInitialized, setIsInitialized] = useState(false)

  // Use useLayoutEffect to check language before paint
  useLayoutEffect(() => {
    // Check localStorage for saved language preference
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && (savedLang === "pl" || savedLang === "en")) {
      setLanguage(savedLang)
    } else {
      // Detect browser language
      const detectedLang = detectBrowserLanguage()
      setLanguage(detectedLang)
      localStorage.setItem("language", detectedLang)
    }
    setIsInitialized(true)
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      <div style={{
        opacity: isInitialized ? 1 : 0,
        transition: 'opacity 0.1s ease-in-out'
      }}>
        {children}
      </div>
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}

export function getTranslation(lang: Language, key: string): string {
  return translations[lang][key as keyof (typeof translations)[typeof lang]] || key
}
