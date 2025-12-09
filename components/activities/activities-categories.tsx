"use client"

import { useState } from "react"
import { Palette, UtensilsCrossed, TreePine, Music, Camera, Bike, Compass, Heart } from "lucide-react"

const categories = [
  { id: "all", name: "Tout voir", icon: Compass, color: "bg-coral" },
  { id: "artisanat", name: "Artisanat", icon: Palette, color: "bg-pink" },
  { id: "gastronomie", name: "Gastronomie", icon: UtensilsCrossed, color: "bg-green" },
  { id: "nature", name: "Nature", icon: TreePine, color: "bg-green" },
  { id: "culture", name: "Culture", icon: Music, color: "bg-coral" },
  { id: "photo", name: "Photo", icon: Camera, color: "bg-pink" },
  { id: "aventure", name: "Aventure", icon: Bike, color: "bg-green" },
  { id: "bien-etre", name: "Bien-être", icon: Heart, color: "bg-pink" },
]

export function ActivitiesCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section className="py-8 border-b border-pink/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide justify-center">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? `${category.color} ${category.color === "bg-coral" ? "text-white" : "text-foreground"}`
                    : "bg-white text-foreground hover:bg-pink/30 border border-pink"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
