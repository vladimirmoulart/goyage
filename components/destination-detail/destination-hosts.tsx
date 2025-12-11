import Link from "next/link"
import { Star, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DestinationHostsProps {
  destinationName: string
  locationLabel?: string
}

const hosts = [
  {
    id: 1,
    name: "Ahmed",
    image: "/moroccan-man-artisan-smiling-portrait.jpg",
    specialty: "Artisan potier",
    rating: 4.9,
    reviews: 127,
    experiences: 3,
    bio: "Potier depuis 25 ans, je perpétue les traditions de ma famille dans mon atelier au cœur de la médina.",
  },
  {
    id: 2,
    name: "Fatima",
    image: "/friendly-woman-portrait-smiling.jpg",
    specialty: "Cuisinière passionnée",
    rating: 4.8,
    reviews: 89,
    experiences: 2,
    bio: "Je partage les recettes de ma grand-mère et les secrets de la cuisine marocaine authentique.",
  },
  {
    id: 3,
    name: "Hassan",
    image: "/german-man-backpacker-smiling-portrait.jpg",
    specialty: "Maître calligraphe",
    rating: 5.0,
    reviews: 64,
    experiences: 2,
    bio: "L'art de la calligraphie arabe est une méditation. Je vous initie à cette pratique millénaire.",
  },
]

export function DestinationHosts({ destinationName, locationLabel }: DestinationHostsProps) {
  const highlightedLocation = locationLabel || `à ${destinationName}`

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Nos hôtes {highlightedLocation}</h2>
            <p className="mt-2 text-foreground/70">Des passionnés prêts à partager leur culture et leurs traditions.</p>
          </div>
          <Button variant="ghost" className="text-coral hover:text-coral/80 font-semibold self-start md:self-auto">
            Voir tous les hôtes
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hosts.map((host) => (
            <div key={host.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <img
                  src={host.image || "/placeholder.svg"}
                  alt={host.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-foreground text-lg">{host.name}</h3>
                  <p className="text-coral text-sm font-medium">{host.specialty}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Star className="w-4 h-4 fill-coral text-coral" />
                    <span className="font-semibold text-foreground">{host.rating}</span>
                    <span className="text-sm text-foreground/60">({host.reviews} avis)</span>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-foreground/70 text-sm leading-relaxed">{host.bio}</p>

              <div className="mt-4 pt-4 border-t border-pink/30 flex items-center justify-between">
                <span className="text-sm text-foreground/60">{host.experiences} expériences</span>
                <Link
                  href={`/hotes/${host.id}`}
                  className="flex items-center gap-1 text-coral font-medium text-sm hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  Voir le profil
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
