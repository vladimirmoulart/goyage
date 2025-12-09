import { MapPin, Star, Users, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DestinationDetailHeroProps {
  destination: {
    name: string
    country: string
    heroImage: string
    description: string
    experiences: number
    hosts: number
    rating: number
  }
}

export function DestinationDetailHero({ destination }: DestinationDetailHeroProps) {
  return (
    <section className="relative pt-16 md:pt-20">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <img
          src={destination.heroImage || "/placeholder.svg"}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Actions */}
        <div className="absolute top-24 md:top-28 right-4 md:right-8 flex gap-2">
          <Button size="icon" variant="ghost" className="bg-white/90 hover:bg-white rounded-full">
            <Heart className="w-5 h-5 text-foreground" />
          </Button>
          <Button size="icon" variant="ghost" className="bg-white/90 hover:bg-white rounded-full">
            <Share2 className="w-5 h-5 text-foreground" />
          </Button>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <p className="text-white/80 flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4" />
              {destination.country}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{destination.name}</h1>
            <p className="text-xl text-white/90 max-w-2xl mb-6">{destination.description}</p>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-5 h-5 fill-coral text-coral" />
                <span className="text-white font-semibold">{destination.rating}</span>
                <span className="text-white/70">Note moyenne</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-green" />
                <span className="text-white font-semibold">{destination.hosts}</span>
                <span className="text-white/70">Hôtes locaux</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white font-semibold">{destination.experiences}</span>
                <span className="text-white/70">Expériences</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
