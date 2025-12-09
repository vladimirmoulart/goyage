import { Button } from "@/components/ui/button"
import { Search, MapPin, Calendar, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-pink/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
              Voyagez autrement, <span className="text-coral">vivez vraiment</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-xl mx-auto lg:mx-0 text-pretty">
              Découvrez des expériences authentiques avec des hôtes locaux passionnés. Plus qu'un voyage, une connexion
              humaine.
            </p>

            {/* Dual CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-coral hover:bg-coral/90 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-coral/30"
              >
                Je veux explorer
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green bg-green/10 text-foreground hover:bg-green hover:text-foreground rounded-full px-8 py-6 text-lg font-semibold"
              >
                Je veux accueillir
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <p className="text-3xl font-bold text-coral">2,500+</p>
                <p className="text-sm text-foreground/70">Expériences uniques</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green">150+</p>
                <p className="text-sm text-foreground/70">Destinations</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-coral">50,000+</p>
                <p className="text-sm text-foreground/70">Voyageurs heureux</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/happy-travelers-sharing-meal-with-local-host-famil.jpg"
                alt="Voyageurs partageant un repas avec une famille locale"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              {/* Floating Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <img src="/friendly-woman-portrait-smiling.jpg" alt="Maria" className="w-12 h-12 rounded-full object-cover" />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">Cours de cuisine avec Maria</p>
                    <p className="text-sm text-foreground/70">Lisbonne, Portugal</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-coral">45€</p>
                    <p className="text-xs text-foreground/70">par personne</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative badges */}
            <div className="absolute -top-4 -right-4 bg-green text-foreground px-4 py-2 rounded-full font-semibold shadow-lg">
              Vérifié GOYAGE
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-4 md:p-6 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-cream/50">
              <MapPin className="w-5 h-5 text-coral" />
              <div>
                <p className="text-xs text-foreground/60 font-medium">Où</p>
                <input
                  type="text"
                  placeholder="Destination"
                  className="bg-transparent text-foreground placeholder:text-foreground/50 outline-none w-full"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-cream/50">
              <Calendar className="w-5 h-5 text-coral" />
              <div>
                <p className="text-xs text-foreground/60 font-medium">Quand</p>
                <input
                  type="text"
                  placeholder="Dates"
                  className="bg-transparent text-foreground placeholder:text-foreground/50 outline-none w-full"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-cream/50">
              <Users className="w-5 h-5 text-coral" />
              <div>
                <p className="text-xs text-foreground/60 font-medium">Qui</p>
                <input
                  type="text"
                  placeholder="Voyageurs"
                  className="bg-transparent text-foreground placeholder:text-foreground/50 outline-none w-full"
                />
              </div>
            </div>
            <Button className="bg-coral hover:bg-coral/90 text-white rounded-xl h-full min-h-[56px] text-lg font-semibold">
              <Search className="w-5 h-5 mr-2" />
              Rechercher
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
