import Link from "next/link"
import { Star, Clock, Users, Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DestinationExperiencesProps {
  destinationName: string
}

const experiences = [
  {
    id: 1,
    title: "Atelier poterie traditionnelle",
    host: "Ahmed",
    hostImage: "/placeholder.svg?height=100&width=100",
    image: "/placeholder.svg?height=400&width=600",
    price: 35,
    rating: 4.9,
    reviews: 127,
    duration: "3h",
    maxGuests: 6,
    category: "Artisanat",
  },
  {
    id: 2,
    title: "Tour culinaire dans la médina",
    host: "Fatima",
    hostImage: "/placeholder.svg?height=100&width=100",
    image: "/placeholder.svg?height=400&width=600",
    price: 45,
    rating: 4.8,
    reviews: 89,
    duration: "4h",
    maxGuests: 8,
    category: "Gastronomie",
  },
  {
    id: 3,
    title: "Cours de calligraphie arabe",
    host: "Hassan",
    hostImage: "/placeholder.svg?height=100&width=100",
    image: "/placeholder.svg?height=400&width=600",
    price: 30,
    rating: 5.0,
    reviews: 64,
    duration: "2h",
    maxGuests: 6,
    category: "Culture",
  },
]

export function DestinationExperiences({ destinationName }: DestinationExperiencesProps) {
  return (
    <section className="py-12 md:py-16 bg-pink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Expériences à {destinationName}</h2>
            <p className="mt-2 text-foreground/70">Découvrez les activités proposées par nos hôtes locaux.</p>
          </div>
          <Button variant="ghost" className="text-coral hover:text-coral/80 font-semibold self-start md:self-auto">
            Voir toutes les expériences
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <Link
              key={exp.id}
              href={`/activites/${exp.id}`}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
