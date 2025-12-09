import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, MapPin, Calendar, Users } from "lucide-react"
import { HeroVisual } from "@/components/hero-visual"
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
                asChild
                size="lg"
                className="bg-coral hover:bg-coral/90 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-coral/30"
              >
                <Link href="/connexion">Je veux explorer</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-green bg-green/10 text-foreground hover:bg-green hover:text-foreground rounded-full px-8 py-6 text-lg font-semibold"
              >
                <Link href="/connexion">Je veux accueillir</Link>
              </Button>
            </div>

            {/* Store badges */}
            <div className="mt-8 lg:mt-12 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="#"
                className="inline-flex items-center gap-3 bg-black text-white rounded-2xl px-5 py-3 hover:opacity-90 transition-opacity"
              >
                <span className="text-4xl"></span>
                <div className="text-left leading-tight">
                  <p className="text-[9px] uppercase tracking-wide">Disponible sur</p>
                  <p className="text-lg font-semibold">App Store</p>
                </div>
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-3 bg-black text-white rounded-2xl px-5 py-3 hover:opacity-90 transition-opacity"
              >
                <img src="/play-store.webp" alt="Disponible sur Google Play" className="h-8 w-auto" />
                <div className="text-left leading-tight">
                  <p className="text-[9px] uppercase tracking-wide">Disponible sur</p>
                  <p className="text-lg font-semibold">Google Play</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className="relative hidden lg:block">
            <HeroVisual />
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-10 lg:mt-16 bg-white rounded-2xl shadow-xl p-4 md:p-6 max-w-4xl mx-auto">
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
