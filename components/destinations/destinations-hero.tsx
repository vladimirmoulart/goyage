"use client"

import { useState } from "react"
import { MapPin, Globe2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const mapPins = [
  { label: "Marrakech", top: "35%", left: "40%" },
  { label: "Lisbonne", top: "30%", left: "30%" },
  { label: "Kyoto", top: "35%", left: "70%" },
  { label: "Bali", top: "55%", left: "75%" },
]

export default function DestinationsHero() {
  const [isMapOpen, setIsMapOpen] = useState(false)

  return (
    <section className="pt-24 md:pt-32 pb-16 bg-gradient-to-b from-pink/30 to-cream text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 bg-coral/10 text-coral px-4 py-2 rounded-full mb-6">
          <MapPin className="w-5 h-5" />
          <span className="font-medium">150+ destinations vérifiées</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Explorez les destinations <span className="text-coral">GOYAGE</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-foreground/70">
          Des expériences authentiques partout dans le monde, sélectionnées par nos équipes locales.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="rounded-full px-8 py-6 text-lg font-semibold bg-coral hover:bg-coral/90">
            <a href="#destinations-grid">Découvrir les régions</a>
          </Button>
          <Dialog open={isMapOpen} onOpenChange={setIsMapOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-lg font-semibold border-coral text-coral hover:bg-coral hover:text-white bg-transparent"
              >
                <Globe2 className="w-5 h-5 mr-2" />
                Voir la carte
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>Carte des régions GOYAGE</DialogTitle>
              </DialogHeader>
              <div className="relative h-80 rounded-2xl bg-gradient-to-br from-cream via-white to-pink/30 overflow-hidden border border-pink/30">
                <div className="absolute inset-6 border border-pink/30 rounded-[40%] opacity-60" />
                <div className="absolute inset-10 border border-green/30 rounded-[35%] opacity-50" />
                {mapPins.map((pin) => (
                  <div
                    key={pin.label}
                    className="absolute flex flex-col items-center text-xs font-semibold text-foreground"
                    style={{ top: pin.top, left: pin.left }}
                  >
                    <div className="bg-white rounded-full p-2 shadow-lg border border-pink/30">
                      <MapPin className="w-4 h-4 text-coral" />
                    </div>
                    <span className="mt-2 bg-white/80 text-coral px-2 py-1 rounded-full shadow-sm">{pin.label}</span>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}
