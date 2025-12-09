"use client"

import { useState } from "react"
import { Heart, Users, Sparkles, Sun, Mountain, Utensils, Palette } from "lucide-react"

const categories = [
  { id: "all", label: "Toutes les Box", icon: Sparkles },
  { id: "romantic", label: "Romantique", icon: Heart },
  { id: "adventure", label: "Aventure", icon: Mountain },
  { id: "gastronomy", label: "Gastronomie", icon: Utensils },
  { id: "culture", label: "Culture & Art", icon: Palette },
  { id: "family", label: "Famille", icon: Users },
  { id: "sun", label: "Soleil & Plage", icon: Sun },
]

export function BoxesCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section className="py-8 border-b border-pink/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? "bg-coral text-white shadow-lg"
                    : "bg-white text-foreground hover:bg-pink/50"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{category.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
