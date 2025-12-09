import Link from "next/link"
import { Star, Clock, Users, Heart, MapPin } from "lucide-react"

const activities = [
  {
    id: 1,
    title: "Atelier poterie traditionnelle",
    location: "Marrakech, Maroc",
    host: "Ahmed",
    hostImage: "/moroccan-man-artisan-smiling-portrait.jpg",
    image: "/pottery-workshop-morocco-traditional-crafts-hands-.jpg",
    price: 35,
    rating: 4.9,
    reviews: 127,
    duration: "3h",
    maxGuests: 6,
    category: "Artisanat",
  },
  {
    id: 2,
    title: "Randonnée et pique-nique local",
    location: "Cinque Terre, Italie",
    host: "Lucia",
    hostImage: "/italian-woman-hiking-guide-smiling.jpg",
    image: "/hiking-cinque-terre-italy-coastal-view-picnic-natu.jpg",
    price: 55,
    rating: 4.8,
    reviews: 89,
    duration: "5h",
    maxGuests: 8,
    category: "Nature",
  },
  {
    id: 3,
    title: "Cours de tango argentin",
    location: "Buenos Aires, Argentine",
    host: "Carlos",
    hostImage: "/argentine-man-tango-dancer-portrait.jpg",
    image: "/tango-dance-lesson-buenos-aires-argentina-couple.jpg",
    price: 40,
    rating: 5.0,
    reviews: 203,
    duration: "2h",
    maxGuests: 10,
    category: "Culture",
  },
  {
    id: 4,
    title: "Street food tour nocturne",
    location: "Bangkok, Thaïlande",
    host: "Niran",
    hostImage: "/thai-man-chef-smiling-portrait.jpg",
    image: "/bangkok-street-food-night-market-tour-thailand.jpg",
    price: 30,
    rating: 4.9,
    reviews: 156,
    duration: "4h",
    maxGuests: 8,
    category: "Gastronomie",
  },
  {
    id: 5,
    title: "Cours de cuisine japonaise",
    location: "Kyoto, Japon",
    host: "Yuki",
    hostImage: "/japanese-woman-chef-traditional-smiling.jpg",
    image: "/placeholder.svg?height=400&width=600",
    price: 65,
    rating: 4.9,
    reviews: 178,
    duration: "4h",
    maxGuests: 6,
    category: "Gastronomie",
  },
  {
    id: 6,
    title: "Safari photo au lever du soleil",
    location: "Le Cap, Afrique du Sud",
    host: "David",
    hostImage: "/placeholder.svg?height=100&width=100",
    image: "/placeholder.svg?height=400&width=600",
    price: 85,
    rating: 4.8,
    reviews: 94,
    duration: "6h",
    maxGuests: 4,
    category: "Photo",
  },
  {
    id: 7,
    title: "Yoga sur la plage",
    location: "Bali, Indonésie",
    host: "Made",
    hostImage: "/placeholder.svg?height=100&width=100",
    image: "/placeholder.svg?height=400&width=600",
    price: 25,
    rating: 4.9,
    reviews: 231,
    duration: "1h30",
    maxGuests: 12,
    category: "Bien-être",
  },
  {
    id: 8,
    title: "Tour en vélo vintage",
    location: "Lisbonne, Portugal",
    host: "Miguel",
    hostImage: "/placeholder.svg?height=100&width=100",
    image: "/placeholder.svg?height=400&width=600",
    price: 45,
    rating: 4.7,
    reviews: 112,
    duration: "3h",
    maxGuests: 8,
    category: "Aventure",
  },
]

export function ActivitiesGrid() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <p className="text-foreground/70">
            <span className="font-semibold text-foreground">{activities.length} activités</span> disponibles
          </p>
          <select className="px-4 py-2 rounded-full border border-pink bg-white text-foreground text-sm outline-none focus:border-coral">
            <option>Les plus populaires</option>
            <option>Prix croissant</option>
            <option>Prix décroissant</option>
            <option>Mieux notées</option>
          </select>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activities.map((activity) => (
            <Link
              key={activity.id}
              href={`/activites/${activity.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-foreground/70 hover:text-coral transition-colors" />
                </button>
                <span className="absolute top-3 left-3 bg-green text-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {activity.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={activity.hostImage || "/placeholder.svg"}
                    alt={activity.host}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-sm text-foreground/70">avec {activity.host}</span>
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-coral transition-colors line-clamp-1">
                  {activity.title}
                </h3>
                <p className="text-sm text-foreground/60 mt-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {activity.location}
                </p>

                <div className="flex items-center gap-4 mt-3 text-sm text-foreground/70">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {activity.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    Max {activity.maxGuests}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-pink/30">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-coral text-coral" />
                    <span className="font-semibold text-foreground">{activity.rating}</span>
                    <span className="text-sm text-foreground/60">({activity.reviews})</span>
                  </div>
                  <div>
                    <span className="font-bold text-coral text-lg">{activity.price}€</span>
                    <span className="text-sm text-foreground/60"> / pers.</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
