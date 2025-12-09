import Link from "next/link"
import { MapPin, Users, Star } from "lucide-react"

const destinations = [
  {
    id: "marrakech",
    name: "Marrakech",
    country: "Maroc",
    image: "/marrakech-morocco-medina-colorful-market.jpg",
    experiences: 45,
    hosts: 23,
    rating: 4.9,
    continent: "Afrique",
    type: "Ville",
    description: "Laissez-vous envoûter par les souks, les riads et la magie de la médina.",
  },
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japon",
    image: "/kyoto-japan-temple-traditional-garden.jpg",
    experiences: 38,
    hosts: 19,
    rating: 4.8,
    continent: "Asie",
    type: "Ville",
    description: "Temples ancestraux, jardins zen et cérémonies du thé vous attendent.",
  },
  {
    id: "lisbonne",
    name: "Lisbonne",
    country: "Portugal",
    image: "/lisbon-portugal-colorful-tramway-alfama.jpg",
    experiences: 52,
    hosts: 28,
    rating: 4.9,
    continent: "Europe",
    type: "Ville",
    description: "Entre fado, azulejos et pastéis de nata, vivez l'âme portugaise.",
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonésie",
    image: "/bali-rice-temple.png",
    experiences: 67,
    hosts: 35,
    rating: 4.8,
    continent: "Asie",
    type: "Île",
    description: "Rizières en terrasses, temples hindous et spiritualité balinaise.",
  },
  {
    id: "buenos-aires",
    name: "Buenos Aires",
    country: "Argentine",
    image: "/buenos-aires-argentina-la-boca-colorful.jpg",
    experiences: 41,
    hosts: 22,
    rating: 4.7,
    continent: "Amérique",
    type: "Ville",
    description: "Tango, asado et passion argentine dans la Paris de l'Amérique du Sud.",
  },
  {
    id: "santorini",
    name: "Santorin",
    country: "Grèce",
    image: "/santorini-greece-white-blue-houses-sunset.jpg",
    experiences: 29,
    hosts: 15,
    rating: 4.9,
    continent: "Europe",
    type: "Île",
    description: "Maisons blanches, dômes bleus et couchers de soleil légendaires.",
  },
  {
    id: "cape-town",
    name: "Le Cap",
    country: "Afrique du Sud",
    image: "/cape-town-table-mountain.png",
    experiences: 33,
    hosts: 18,
    rating: 4.8,
    continent: "Afrique",
    type: "Ville",
    description: "Entre océan et montagne, une ville arc-en-ciel pleine de contrastes.",
  },
  {
    id: "cinque-terre",
    name: "Cinque Terre",
    country: "Italie",
    image: "/cinque-terre-italy-colorful-coastal-villages.jpg",
    experiences: 24,
    hosts: 12,
    rating: 4.9,
    continent: "Europe",
    type: "Plage",
    description: "Villages colorés accrochés aux falaises de la Riviera italienne.",
  },
]

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
              src={destination.image || "/placeholder.svg"}
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
