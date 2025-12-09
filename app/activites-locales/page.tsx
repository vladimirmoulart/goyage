import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ActivitiesCategories } from "@/components/activities/activities-categories"
import { ActivitiesGrid } from "@/components/activities/activities-grid"
import { ActivitiesCta } from "@/components/activities/activities-cta"
import { Button } from "@/components/ui/button"
import { MapPin, Sparkles, Users, Heart } from "lucide-react"

const immersionHighlights = [
  {
    icon: MapPin,
    title: "Guide local dédié",
    description: "Chaque activité est animée par un hôte qui connaît son quartier par cœur.",
  },
  {
    icon: Sparkles,
    title: "Micro-groupes",
    description: "Des formats intimistes pour profiter pleinement des échanges humains.",
  },
  {
    icon: Users,
    title: "Rencontres authentiques",
    description: "Partagez un repas, un atelier, un moment de vie avec des passionnés.",
  },
  {
    icon: Heart,
    title: "Impact positif",
    description: "Vos réservations soutiennent directement les communautés locales.",
  },
]

export default function ActivitesLocalesPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />

      <section className="pt-24 md:pt-32 pb-16 bg-gradient-to-b from-pink/30 to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-coral/10 text-coral px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Immersions locales garanties</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Activités locales <span className="text-coral">GOYAGE</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/70">
            Ateliers, balades, repas partagés, immersions culturelles... Vivez la ville avec ceux qui y vivent.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="rounded-full px-8 py-6 text-lg font-semibold bg-coral hover:bg-coral/90">
              <a href="#activites-locales-grid">Voir les activités</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full px-8 py-6 text-lg font-semibold border-coral text-coral hover:bg-coral hover:text-white bg-transparent"
            >
              <a href="/connexion">Proposer la vôtre</a>
            </Button>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            {immersionHighlights.map((highlight) => {
              const Icon = highlight.icon
              return (
                <div key={highlight.title} className="rounded-2xl bg-white/80 p-4 border border-pink/30 shadow-sm flex gap-3 text-left">
                  <Icon className="w-5 h-5 text-coral flex-shrink-0" />
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

      <ActivitiesCategories />
      <div id="activites-locales-grid">
        <ActivitiesGrid />
      </div>

      <section className="py-16 md:py-24 bg-white/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground">Comment ça marche ?</h2>
          <p className="mt-3 text-lg text-foreground/70">
            Choisissez l'activité qui vous inspire, échangez avec l'hôte et confirmez en quelques secondes.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {["Sélection", "Conversation", "Immersion"].map((title, index) => (
              <div key={title} className="rounded-2xl bg-cream/70 border border-pink/30 p-6">
                <p className="text-sm font-semibold text-coral">Étape {index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-foreground/70">
                  {index === 0 && "Filtrez par destination ou thématique pour voir les activités disponibles."}
                  {index === 1 && "Échangez directement avec l'hôte pour personnaliser l'expérience selon vos envies."}
                  {index === 2 && "Réservez et vivez un moment unique, en toute sérénité, grâce à GOYAGE."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ActivitiesCta />
      <Footer />
    </main>
  )
}
