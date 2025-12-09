import { Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DestinationsHero() {
  return (
    <section className="pt-20 pb-10 md:pt-28 md:pb-16 bg-white/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-semibold text-coral uppercase tracking-[0.35em]">Destinations</p>
            <h1 className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-snug">
              Explorez le <span className="text-coral">monde</span> autrement
            </h1>
            <p className="mt-3 text-base md:text-lg text-foreground/70">
              Découvrez des destinations authentiques où nos hôtes locaux vous attendent pour partager leur culture et
              leurs traditions.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <Button className="rounded-full px-6 py-4 h-auto text-sm md:text-base font-semibold bg-coral hover:bg-coral/90">
                Découvrir les régions
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 py-4 h-auto text-sm md:text-base font-semibold border-coral text-coral hover:bg-coral hover:text-white bg-transparent"
              >
                Voir la carte
              </Button>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-foreground/70">
              <div className="rounded-2xl bg-cream/70 p-4">
                <p className="text-2xl font-bold text-coral">150+</p>
                <p>Destinations vérifiées</p>
              </div>
              <div className="rounded-2xl bg-cream/70 p-4">
                <p className="text-2xl font-bold text-green">5000+</p>
                <p>Hôtes locaux actifs</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-5 border border-pink/40 shadow-xl space-y-5">
            <div>
              <p className="text-sm font-semibold text-foreground">Rechercher une destination</p>
              <p className="text-sm text-foreground/70">Filtrez par ville, pays ou thématique en un clic.</p>
            </div>
            <div className="space-y-3">
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                <input
                  type="text"
                  placeholder="Ville, pays..."
                  className="w-full rounded-2xl border border-pink/40 bg-cream/50 py-3 pl-12 pr-4 text-foreground placeholder:text-foreground/40 outline-none focus:border-coral focus:ring-2 focus:ring-coral/20"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {["Europe", "Asie", "Afrique", "Amérique"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-coral/10 text-coral border border-coral/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button className="w-full rounded-2xl bg-coral hover:bg-coral/90 text-white py-4 text-base font-semibold">
                <Search className="w-4 h-4 mr-2" />
                Rechercher
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
