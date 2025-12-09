import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Clock, Users, Heart, ArrowRight } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Atelier poterie traditionnelle",
    location: "Marrakech, Maroc",
    host: "Ahmed",
    hostImage: "/moroccan-man-artisan-smiling-portrait.jpg",
    image: "/pottery-workshop-morocco-traditional-crafts.jpg",
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
    image: "/hiking-cinque-terre-italy-coastal-view-picnic.jpg",
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
    image: "/tango-dance-lesson-buenos-aires-argentina.jpg",
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
    image: "/bangkok-street-food-night-market-tour.jpg",
    price: 30,
    rating: 4.9,
    reviews: 156,
    duration: "4h",
    maxGuests: 8,
    category: "Gastronomie",
  },
]

export function FeaturedExperiences() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Expériences populaires</h2>
            <p className="mt-3 text-lg text-foreground/70">Des moments uniques sélectionnés par notre communauté.</p>
          </div>
          <Button
            asChild
            variant="ghost"
            className="text-coral hover:text-coral/80 font-semibold self-start md:self-auto"
          >
            <Link href="/activites-locales">
              Voir toutes les expériences
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={exp.image || "/placeholder.svg"}
                  alt={exp.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-foreground/70 hover:text-coral transition-colors" />
                </button>
                <span className="absolute top-3 left-3 bg-green text-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {exp.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={exp.hostImage || "/placeholder.svg"}
                    alt={exp.host}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-sm text-foreground/70">avec {exp.host}</span>
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-coral transition-colors">{exp.title}</h3>
                <p className="text-sm text-foreground/60 mt-1">{exp.location}</p>

                <div className="flex items-center gap-4 mt-3 text-sm text-foreground/70">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    Max {exp.maxGuests}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-pink/30">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-coral text-coral" />
                    <span className="font-semibold text-foreground">{exp.rating}</span>
                    <span className="text-sm text-foreground/60">({exp.reviews})</span>
                  </div>
                  <div>
                    <span className="font-bold text-coral text-lg">{exp.price}€</span>
                    <span className="text-sm text-foreground/60"> / pers.</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
