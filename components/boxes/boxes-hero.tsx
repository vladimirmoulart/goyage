import Link from "next/link"
import { Gift, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BoxesHero() {
  return (
    <section className="pt-24 md:pt-32 pb-16 bg-gradient-to-b from-pink/30 to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-coral/10 text-coral px-4 py-2 rounded-full mb-6">
            <Gift className="w-5 h-5" />
            <span className="font-medium">Offrez des expériences uniques</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Les <span className="text-coral">Box GOYAGE</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed">
            Des expériences authentiques en Espagne, réunies dans une box simple à offrir et facile à réserver.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              className="bg-coral hover:bg-coral/90 text-white rounded-full px-8 py-6 text-lg font-semibold"
            >
              <Link href="#gift-section">
                <Gift className="w-5 h-5 mr-2" />
                Offrir une Box
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-coral text-coral hover:bg-coral hover:text-white rounded-full px-8 py-6 text-lg font-semibold bg-transparent"
            >
              <Link href="#boxes-destinations">
                <Sparkles className="w-5 h-5 mr-2" />
                Voir toutes les Box
              </Link>
            </Button>
          </div>
        </div>

        {/* Floating boxes preview */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-4 shadow-lg transform -rotate-3 hover:rotate-0 transition-transform">
            <img src="/travel-experience-adventure-colorful.jpg" alt="Flamenco à Séville" className="w-full h-32 object-cover rounded-xl mb-3" />
            <p className="font-semibold text-foreground text-sm">Séville</p>
            <p className="text-coral font-bold">Flamenco</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-xl transform scale-105 z-10">
            <img
              src="/happy-travelers-sharing-meal-with-local-host-famil.jpg"
              alt="Tapas à Barcelone"
              className="w-full h-32 object-cover rounded-xl mb-3"
            />
            <p className="font-semibold text-foreground text-sm">Barcelone</p>
            <p className="text-coral font-bold">Tapas</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-lg transform rotate-3 hover:rotate-0 transition-transform">
            <img
              src="/mediterranean-sea-coastal-village-sunset.jpg"
              alt="Côte méditerranéenne espagnole"
              className="w-full h-32 object-cover rounded-xl mb-3"
            />
            <p className="font-semibold text-foreground text-sm">Méditerranée</p>
            <p className="text-coral font-bold">Balade</p>
          </div>
        </div>
      </div>
    </section>
  )
}
