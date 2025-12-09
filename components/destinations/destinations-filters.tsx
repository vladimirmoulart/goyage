"use client"

import { useState } from "react"
import { Filter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const continents = ["Tous", "Europe", "Asie", "Afrique", "Amérique", "Océanie"]
const types = ["Tous", "Ville", "Plage", "Montagne", "Campagne", "Île"]

export function DestinationsFilters() {
  const [activeContinent, setActiveContinent] = useState("Tous")
  const [activeType, setActiveType] = useState("Tous")

  return (
    <div className="mb-10 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-coral uppercase tracking-[0.3em]">Filtrer</p>
          <h2 className="text-2xl font-bold text-foreground">Toutes les destinations</h2>
        </div>
        <div className="relative w-full sm:w-auto ml-auto">
          <button className="w-full px-5 py-3 rounded-full border border-pink text-foreground text-sm font-medium bg-white hover:bg-pink/10 transition-colors flex items-center justify-center gap-2">
            <Filter className="w-4 h-4" />
            Plus de filtres
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-coral" />
            <p className="text-sm font-semibold text-foreground/70">Continents</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {continents.map((continent) => (
              <button
                key={continent}
                onClick={() => setActiveContinent(continent)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeContinent === continent
                    ? "bg-coral text-white shadow-lg shadow-coral/30"
                    : "bg-white text-foreground hover:bg-pink/30 border border-pink/30"
                }`}
              >
                {continent}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-green" />
            <p className="text-sm font-semibold text-foreground/70">Types d'escapades</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeType === type
                    ? "bg-green text-foreground shadow-lg shadow-green/20"
                    : "bg-white text-foreground hover:bg-pink/30 border border-pink/30"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
