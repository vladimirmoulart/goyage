import { MapPin, Star, Gift, Clock, Users, Shield } from "lucide-react"
import { boxesData, BoxData } from "@/lib/boxes"

const defaultBox: BoxData = {
  id: "default",
  name: "Box GOYAGE",
  country: "Destination",
  flag: "🌍",
  image: "/travel-experience-adventure-colorful.jpg",
  rating: 4.8,
  reviews: 150,
  experiencesCount: 4,
  description: "Une aventure authentique",
  longDescription:
    "Découvrez une destination à travers les yeux des locaux avec plusieurs expériences uniques incluses dans cette box.",
  price: 149,
  originalPrice: 189,
  experiences: [],
  hosts: [],
}

export function BoxDetailHero({ boxId }: { boxId: string }) {
  const box = boxesData[boxId] || defaultBox

  return (
    <section className="pt-20">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <img src={box.image || "/placeholder.svg"} alt={box.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{box.flag}</span>
              <span className="bg-coral text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                <Gift className="w-4 h-4" />
                {box.experiencesCount} expériences incluses
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">{box.name}</h1>

            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {box.country}
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-coral text-coral" />
                {box.rating} ({box.reviews} avis)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Description bar */}
      <div className="bg-white border-b border-pink/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl">{box.longDescription}</p>

          <div className="flex flex-wrap gap-6 mt-6">
            <div className="flex items-center gap-2 text-foreground/70">
              <Clock className="w-5 h-5 text-coral" />
              <span>Validité 18 mois</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <Users className="w-5 h-5 text-coral" />
              <span>Pour 1-2 personnes</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <Shield className="w-5 h-5 text-coral" />
              <span>Annulation gratuite</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
