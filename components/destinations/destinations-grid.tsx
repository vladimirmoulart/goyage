import Link from "next/link"
import { MapPin, Users, Star } from "lucide-react"
import { destinationDetailData } from "@/lib/destinations"

const featuredDestinations = ["seychelles", "maroc", "bali", "italie", "espagne"] as const
const destinations = featuredDestinations.map((id) => destinationDetailData[id])

export function DestinationsGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {destinations.map((destination) => (
        <Link
          key={destination.id}
          href={`/destinations/${destination.id}`}
          className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={destination.heroImage || "/placeholder.svg"}
              alt={destination.name}
              className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-xl font-bold text-white">{destination.name}</h3>
              <p className="text-white/90 text-sm flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3" />
                {destination.country}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <p className="text-sm text-foreground/70 line-clamp-2 mb-4">{destination.description}</p>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4 text-foreground/70">
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-green" />
                  {destination.hosts} hôtes
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-coral text-coral" />
                  {destination.rating}
                </span>
              </div>
              <span className="text-coral font-semibold">{destination.experiences} exp.</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
