"use client"

import { useState } from "react"
import { MapPin, Compass, Clock, Users } from "lucide-react"

const regions = ["Séville", "Barcelone", "Andalousie", "Catalogne"]
const types = ["Gastronomie", "Culture", "Nature", "Bien-être"]
const durations = ["Moins de 2h", "2h à 4h", "Demi-journée", "Journée complète"]
const profiles = ["Solo", "Couple", "Famille", "Groupe d'amis"]

export function DestinationsFilters() {
  const [activeRegion, setActiveRegion] = useState("Séville")
  const [activeType, setActiveType] = useState("Gastronomie")
  const [activeDuration, setActiveDuration] = useState("2h à 4h")
  const [activeProfile, setActiveProfile] = useState("Couple")

  return (
    <div className="mb-10 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Explorer l'Espagne</h2>
          <p className="text-foreground/70 mt-2">
            Affinez votre recherche avec les critères les plus utiles pour trouver une expérience locale.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-5 border border-pink/30">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-coral" />
            <p className="text-sm font-semibold text-foreground/70">Ville / région</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeRegion === region
                    ? "bg-coral text-white shadow-lg shadow-coral/30"
                    : "bg-white text-foreground hover:bg-pink/30 border border-pink/30"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 border border-pink/30">
          <div className="flex items-center gap-2 mb-3">
            <Compass className="w-4 h-4 text-green" />
            <p className="text-sm font-semibold text-foreground/70">Type d'expérience</p>
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

        <div className="rounded-2xl bg-white p-5 border border-pink/30">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4 text-coral" />
            <p className="text-sm font-semibold text-foreground/70">Durée</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {durations.map((duration) => (
              <button
                key={duration}
                onClick={() => setActiveDuration(duration)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeDuration === duration
                    ? "bg-coral text-white shadow-lg shadow-coral/30"
                    : "bg-white text-foreground hover:bg-pink/30 border border-pink/30"
                }`}
              >
                {duration}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 border border-pink/30">
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-4 h-4 text-green" />
            <p className="text-sm font-semibold text-foreground/70">Profil voyageur</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {profiles.map((profile) => (
              <button
                key={profile}
                onClick={() => setActiveProfile(profile)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeProfile === profile
                    ? "bg-green text-foreground shadow-lg shadow-green/20"
                    : "bg-white text-foreground hover:bg-pink/30 border border-pink/30"
                }`}
              >
                {profile}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
