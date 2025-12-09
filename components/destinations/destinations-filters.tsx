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
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-foreground">Toutes les destinations</h2>
        <Button variant="outline" className="border-pink bg-white text-foreground rounded-full">
          <Filter className="w-4 h-4 mr-2" />
          Plus de filtres
          <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Continent Filter */}
      <div className="flex flex-wrap gap-2 mb-4">
        {continents.map((continent) => (
          <button
            key={continent}
            onClick={() => setActiveContinent(continent)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeContinent === continent
                ? "bg-coral text-white"
                : "bg-white text-foreground hover:bg-pink/50 border border-pink"
            }`}
          >
            {continent}
          </button>
        ))}
      </div>

      {/* Type Filter */}
      <div className="flex flex-wrap gap-2">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeType === type
                ? "bg-green text-foreground"
                : "bg-white text-foreground hover:bg-pink/50 border border-pink"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  )
}
