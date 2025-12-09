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

      <section className="pt-20 pb-10 md:pt-28 md:pb-16 bg-white/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-semibold text-coral uppercase tracking-[0.35em]">Activités locales</p>
              <h1 className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-snug">
                Vivez la ville <span className="text-coral">avec ceux qui y vivent</span>
              </h1>
              <p className="mt-3 text-base md:text-lg text-foreground/70">
                Ateliers, balades, repas partagés, immersions culturelles... Sélectionnez une activité créée par un hôte
                GOYAGE et découvrez les coulisses d'une destination.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Button className="rounded-full px-6 py-4 h-auto text-sm md:text-base font-semibold bg-coral hover:bg-coral/90">
                  Voir les activités proches
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-4 h-auto text-sm md:text-base font-semibold border-coral text-coral hover:bg-coral hover:text-white bg-transparent"
                >
                  Proposer la vôtre
                </Button>
              </div>
            </div>
            <div className="rounded-3xl bg-white/80 p-4 md:p-5 border border-pink/40 shadow-xl grid gap-3 sm:grid-cols-2">
              {immersionHighlights.map((highlight) => {
                const Icon = highlight.icon
                return (
                  <div key={highlight.title} className="rounded-2xl bg-cream/70 p-3">
                    <Icon className="w-5 h-5 text-coral" />
                    <h3 className="mt-2 text-sm font-semibold text-foreground">{highlight.title}</h3>
                    <p className="text-xs text-foreground/70 mt-1">{highlight.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <ActivitiesCategories />
      <ActivitiesGrid />

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
