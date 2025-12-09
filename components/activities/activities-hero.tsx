import { Sparkles } from "lucide-react"

export function ActivitiesHero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-foreground mb-6">
            <Sparkles className="w-4 h-4 text-coral" />
            Plus de 500 expériences authentiques
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Activités <span className="text-coral">locales</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/70">
            Des expériences uniques créées par des passionnés locaux. Artisanat, gastronomie, nature, culture... trouvez
            l'activité qui vous ressemble.
          </p>
        </div>
      </div>
    </section>
  )
}
