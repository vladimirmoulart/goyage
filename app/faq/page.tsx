import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { HelpCircle, MessageCircle, Shield, Users, Mail, PhoneCall, Sparkles } from "lucide-react"

const heroHighlights = [
  {
    icon: HelpCircle,
    title: "Réponses rapides",
    description: "Nous avons regroupé les questions les plus courantes de la communauté.",
  },
  {
    icon: Shield,
    title: "Processus transparent",
    description: "Découvrez comment GOYAGE protège voyageurs et hôtes à chaque étape.",
  },
  {
    icon: MessageCircle,
    title: "Support humain",
    description: "Besoin d'aller plus loin ? Notre équipe vous répond 7j/7.",
  },
]

const faqSections = [
  {
    title: "Avant de réserver",
    description: "Tout savoir pour choisir l'expérience parfaite.",
    items: [
      {
        question: "Comment sont sélectionnées les expériences GOYAGE ?",
        answer:
          "Chaque expérience est vérifiée par notre équipe locale. Nous évaluons le sérieux de l'hôte, la qualité du contenu proposé et les retours des voyageurs précédents.",
      },
      {
        question: "Puis-je échanger avec l'hôte avant de réserver ?",
        answer:
          "Oui, un espace de messagerie vous permet de poser vos questions, d'ajuster le programme ou de partager vos contraintes avant de confirmer.",
      },
      {
        question: "Y a-t-il un nombre minimum ou maximum de participants ?",
        answer:
          "Chaque activité précise sa capacité. La plupart se vivent en micro-groupe (2 à 8 personnes) afin de préserver l'aspect intimiste.",
      },
    ],
  },
  {
    title: "Paiements & sécurité",
    description: "Ce qu'il faut savoir pour régler en toute confiance.",
    items: [
      {
        question: "Quels moyens de paiement acceptez-vous ?",
        answer:
          "Les paiements se font en ligne via carte bancaire ou Apple/Google Pay. Toutes les transactions sont sécurisées et chiffrées.",
      },
      {
        question: "Que se passe-t-il en cas d'annulation ?",
        answer:
          "Vous pouvez annuler sans frais jusqu'à 48h avant l'expérience. Passé ce délai, les frais sont partagés entre l'hôte et GOYAGE.",
      },
      {
        question: "L'assurance est-elle incluse ?",
        answer:
          "Oui, une couverture responsabilité civile est incluse pour toutes les activités validées par GOYAGE.",
      },
    ],
  },
  {
    title: "Devenir hôte",
    description: "Informations clés pour rejoindre la communauté.",
    items: [
      {
        question: "Quelles sont les étapes pour proposer une activité ?",
        answer:
          "Complétez le formulaire d'inscription hôte. Nous organisons ensuite un échange pour comprendre votre projet et vous accompagner.",
      },
      {
        question: "Dois-je fixer moi-même le prix ?",
        answer:
          "Nous vous aidons à définir un tarif juste selon la durée, les frais engagés et la valeur apportée. Le prix final reste votre décision.",
      },
      {
        question: "Quels outils GOYAGE fournit aux hôtes ?",
        answer:
          "Vous disposez d'un tableau de bord pour gérer vos disponibilités, vos messages et vos paiements. Notre équipe reste disponible pour des conseils personnalisés.",
      },
    ],
  },
]

const contactOptions = [
  {
    icon: Mail,
    title: "Écrire au support",
    text: "Réponse sous 24h par email.",
    cta: "support@goyage.com",
    href: "mailto:support@goyage.com",
  },
  {
    icon: PhoneCall,
    title: "Assistant voyageur",
    text: "Disponible de 9h à 20h CET.",
    cta: "+33 1 84 80 12 34",
    href: "tel:+33184801234",
  },
]

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />

      <section className="pt-24 md:pt-32 pb-16 bg-gradient-to-b from-pink/30 to-cream text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-coral/10 text-coral px-4 py-2 rounded-full mb-6 mx-auto">
            <HelpCircle className="w-5 h-5" />
            <span className="font-medium">FAQ GOYAGE</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Toutes les réponses pour <span className="text-coral">voyager sereinement</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/70">
            Trouvez rapidement l’information qu’il vous faut ou contactez notre équipe, disponible 7j/7.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              className="rounded-full bg-coral hover:bg-coral/90 px-8 py-6 text-lg font-semibold"
            >
              <a href="#faq-sections">Explorer les questions</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-coral text-coral hover:bg-coral hover:text-white px-8 py-6 text-lg font-semibold bg-transparent"
            >
              <a href="mailto:hello@goyage.com">Contacter l’équipe</a>
            </Button>
          </div>
          <div className="mt-10 grid sm:grid-cols-3 gap-4 text-left">
            {heroHighlights.map((highlight) => {
              const Icon = highlight.icon
              return (
                <div key={highlight.title} className="rounded-2xl bg-white/80 p-5 border border-pink/30 shadow-sm flex gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-coral/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{highlight.title}</p>
                    <p className="text-sm text-foreground/70">{highlight.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="faq-sections" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {faqSections.map((section) => (
            <div key={section.title} className="bg-white rounded-3xl p-6 md:p-10 border border-pink/40 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm font-semibold text-coral uppercase">{section.title}</p>
                  <h2 className="text-2xl font-bold text-foreground mt-1">{section.description}</h2>
                </div>
                <Button variant="ghost" className="text-coral hover:text-coral/80 font-semibold self-start md:self-auto">
                  Voir plus
                </Button>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <div key={item.question} className="rounded-2xl bg-cream/60 p-4 border border-pink/30">
                    <h3 className="font-semibold text-foreground">{item.question}</h3>
                    <p className="text-sm text-foreground/70 mt-2">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold text-green uppercase">Toujours besoin d'aide ?</p>
            <h2 className="text-3xl font-bold text-foreground mt-2">Nos conseillers sont disponibles 7j/7</h2>
            <p className="mt-3 text-foreground/70">
              Profitez d'un accompagnement personnalisé avant, pendant et après votre expérience.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {contactOptions.map((option) => {
              const Icon = option.icon
              return (
                <a
                  key={option.title}
                  href={option.href}
                  className="rounded-3xl bg-cream/80 border border-pink/30 p-6 flex flex-col gap-3 hover:border-coral transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center">
                    <Icon className="w-5 h-5 text-coral" />
                  </div>
                  <h3 className="font-semibold text-foreground">{option.title}</h3>
                  <p className="text-sm text-foreground/70">{option.text}</p>
                  <span className="text-coral font-semibold">{option.cta}</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
