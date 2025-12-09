import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HowItWorks } from "@/components/how-it-works"
import { Button } from "@/components/ui/button"
import { Users, CheckCircle, MessageCircle, Calendar, Shield } from "lucide-react"

const heroHighlights = [
  {
    icon: CheckCircle,
    title: "Processus transparent",
    description: "4 étapes claires pour réserver en toute sérénité.",
  },
  {
    icon: MessageCircle,
    title: "Échanges humains",
    description: "Discutez avec l'hôte avant même de confirmer.",
  },
  {
    icon: Users,
    title: "Hôtes accompagnés",
    description: "Une communauté formée et suivie par nos équipes.",
  },
]

const highlights = [
  {
    icon: Users,
    title: "Communauté sélectionnée",
    description: "Hôtes passionnés, vérifiés et accompagnés par nos équipes locales.",
  },
  {
    icon: MessageCircle,
    title: "Échanges authentiques",
    description: "Discutez avec l'hôte avant de réserver pour personnaliser votre expérience.",
  },
  {
    icon: Calendar,
    title: "Flexibilité totale",
    description: "Dates, durée, taille du groupe : tout est ajustable selon vos envies.",
  },
  {
    icon: Shield,
    title: "Sécurité garantie",
    description: "Paiements sécurisés, assistance 7j/7 et assurance incluse sur chaque expérience.",
  },
]

const timeline = [
  {
    step: "01",
    title: "Choisissez l'expérience",
    text: "Filtrez par destination, thématique ou disponibilités et trouvez l'activité qui vous correspond.",
  },
  {
    step: "02",
    title: "Parlez avec l'hôte",
    text: "Posez vos questions, adaptez le programme, organisez les détails pratiques directement dans la messagerie.",
  },
  {
    step: "03",
    title: "Réservez en confiance",
    text: "Confirmez la date, payez en ligne de manière sécurisée et recevez toutes les informations utiles.",
  },
  {
    step: "04",
    title: "Vivez & partagez",
    text: "Profitez de l'expérience puis laissez votre avis pour aider la communauté GOYAGE.",
  },
]

export default function CommentCaMarchePage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />

      <section className="pt-20 pb-10 md:pt-28 md:pb-16 bg-white/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-semibold text-coral uppercase tracking-[0.35em]">Comment ça marche</p>
              <h1 className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-snug">
                La plateforme où chaque voyage <span className="text-coral">commence par une rencontre</span>
              </h1>
              <p className="mt-3 text-base md:text-lg text-foreground/70">
                GOYAGE connecte des voyageurs curieux à des hôtes locaux passionnés. Découvrez notre fonctionnement en 4
                étapes simples et transparentes.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Button className="rounded-full bg-coral hover:bg-coral/90 px-6 py-4 h-auto text-sm md:text-base font-semibold">
                  Explorer les expériences
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-coral text-coral hover:bg-coral hover:text-white px-6 py-4 h-auto text-sm md:text-base font-semibold bg-transparent"
                >
                  Devenir hôte
                </Button>
              </div>
            </div>
            <div className="rounded-3xl bg-white/80 p-5 border border-pink/40 shadow-xl grid gap-3">
              {heroHighlights.map((highlight) => {
                const Icon = highlight.icon
                return (
                  <div key={highlight.title} className="rounded-2xl bg-cream/70 p-4 flex gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center">
                      <Icon className="w-5 h-5 text-coral" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{highlight.title}</p>
                      <p className="text-xs text-foreground/70 mt-1">{highlight.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Pourquoi choisir GOYAGE ?</h2>
            <p className="mt-3 text-foreground/70">
              Un écosystème pensé pour les voyageurs immersifs et les hôtes amoureux de leur culture.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {highlights.map((highlight) => {
              const Icon = highlight.icon
              return (
                <div key={highlight.title} className="rounded-3xl bg-white p-6 border border-pink/40 shadow-sm flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-coral/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{highlight.title}</h3>
                    <p className="mt-2 text-foreground/70">{highlight.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-green uppercase">Étapes détaillées</p>
            <h2 className="text-3xl font-bold text-foreground">Votre parcours en toute simplicité</h2>
            <p className="mt-3 text-foreground/70">On vous guide du premier clic jusqu’au souvenir inoubliable.</p>
          </div>

          <div className="space-y-6">
            {timeline.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl bg-cream/70 border border-pink/30 p-6 flex flex-col md:flex-row gap-4 md:items-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-2xl font-bold text-coral">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-foreground/70">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-coral p-8 md:p-10 text-white flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold">Prêt à vivre l'expérience GOYAGE ?</h2>
              <p className="mt-3 text-white/80">
                Rejoignez des milliers de voyageurs et d'hôtes qui construisent une nouvelle façon de découvrir le monde.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Button asChild className="bg-white text-coral rounded-full px-6 py-5 h-auto font-semibold flex-1">
                <a href="/explorer">Explorer les expériences</a>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="rounded-full px-6 py-5 h-auto font-semibold text-foreground bg-white/20 border border-white/30 flex-1"
              >
                <a href="/inscription">Devenir membre</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
