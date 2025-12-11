import Link from "next/link"
import { Star, Clock, Users, Heart, ArrowRight, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DestinationExperiencesProps {
  destinationName: string
  locationLabel?: string
  destinationId?: string
}

type DestinationExperienceCard = {
  id: string
  title: string
  host: string
  hostImage: string
  image: string
  price: number
  rating: number
  reviews: number
  duration: string
  maxGuests: number
  bookedGuests: number
  date: string
  category: string
}

const moroccoExperiences: DestinationExperienceCard[] = [
  {
    id: "maroc-1",
    title: "Atelier poterie traditionnelle",
    host: "Ahmed",
    hostImage: "/moroccan-man-artisan-smiling-portrait.jpg",
    image: "/pottery-workshop-morocco-traditional-crafts-hands-.jpg",
    price: 35,
    rating: 4.9,
    reviews: 127,
    duration: "3h",
    maxGuests: 6,
    bookedGuests: 3,
    date: "Samedi 18 mai",
    category: "Artisanat",
  },
  {
    id: "maroc-2",
    title: "Tour culinaire dans la médina",
    host: "Fatima",
    hostImage: "/friendly-woman-portrait-smiling.jpg",
    image: "/maroc.png",
    price: 45,
    rating: 4.8,
    reviews: 89,
    duration: "4h",
    maxGuests: 8,
    bookedGuests: 5,
    date: "Dimanche 19 mai",
    category: "Gastronomie",
  },
  {
    id: "maroc-3",
    title: "Cours de calligraphie arabe",
    host: "Hassan",
    hostImage: "/german-man-backpacker-smiling-portrait.jpg",
    image: "/maroc.png",
    price: 30,
    rating: 5.0,
    reviews: 64,
    duration: "2h",
    maxGuests: 6,
    bookedGuests: 2,
    date: "Vendredi 24 mai",
    category: "Culture",
  },
]

const baliExperiences: DestinationExperienceCard[] = [
  {
    id: "bali-1",
    title: "Atelier cuisine balinaise",
    host: "Kadek",
    hostImage: "/friendly-woman-portrait-smiling.jpg",
    image: "/bali-rice-terraces-temple-spiritual.jpg",
    price: 58,
    rating: 4.9,
    reviews: 152,
    duration: "4h",
    maxGuests: 8,
    bookedGuests: 6,
    date: "Mardi 21 mai",
    category: "Gastronomie",
  },
  {
    id: "bali-2",
    title: "Yoga sunrise sur la plage",
    host: "Made",
    hostImage: "/friendly-woman-portrait-smiling.jpg",
    image: "/yoga.png",
    price: 25,
    rating: 4.9,
    reviews: 231,
    duration: "1h30",
    maxGuests: 12,
    bookedGuests: 7,
    date: "Chaque matin à 6h",
    category: "Bien-être",
  },
  {
    id: "bali-3",
    title: "Cérémonie de purification à Tirta Empul",
    host: "Gusti",
    hostImage: "/friendly-woman-portrait-smiling.jpg",
    image: "/bali-rice-temple.png",
    price: 42,
    rating: 4.8,
    reviews: 118,
    duration: "3h",
    maxGuests: 10,
    bookedGuests: 5,
    date: "Jeudi 23 mai",
    category: "Culture",
  },
]

const italyExperiences: DestinationExperienceCard[] = [
  {
    id: "italie-1",
    title: "Randonnée panoramique Cinque Terre",
    host: "Lucia",
    hostImage: "/italian-woman-hiking-guide-smiling.jpg",
    image: "/hiking-cinque-terre-italy-coastal-view-picnic-natu.jpg",
    price: 55,
    rating: 4.8,
    reviews: 89,
    duration: "5h",
    maxGuests: 8,
    bookedGuests: 5,
    date: "Dimanche 19 mai",
    category: "Nature",
  },
  {
    id: "italie-2",
    title: "Atelier pasta & mercato Testaccio",
    host: "Giulia",
    hostImage: "/friendly-woman-portrait-smiling.jpg",
    image: "/italy-tuscany-vineyard-sunset-romantic.jpg",
    price: 62,
    rating: 4.8,
    reviews: 134,
    duration: "4h",
    maxGuests: 10,
    bookedGuests: 4,
    date: "Mercredi 22 mai",
    category: "Gastronomie",
  },
  {
    id: "italie-3",
    title: "Dégustation de vins toscans en domaine",
    host: "Marco",
    hostImage: "/german-man-backpacker-smiling-portrait.jpg",
    image: "/italy-tuscany-vineyard-sunset-romantic.jpg",
    price: 48,
    rating: 4.9,
    reviews: 76,
    duration: "3h",
    maxGuests: 12,
    bookedGuests: 6,
    date: "Samedi 25 mai",
    category: "Art de vivre",
  },
]

const spainExperiences: DestinationExperienceCard[] = [
  {
    id: "espagne-1",
    title: "Tapas & marché de la Boqueria",
    host: "Javier",
    hostImage: "/german-man-backpacker-smiling-portrait.jpg",
    image: "/happy-travelers-sharing-meal-with-local-host-famil.jpg",
    price: 48,
    rating: 4.8,
    reviews: 168,
    duration: "3h30",
    maxGuests: 10,
    bookedGuests: 4,
    date: "Jeudi 23 mai",
    category: "Gastronomie",
  },
  {
    id: "espagne-2",
    title: "Cours de flamenco intimiste",
    host: "Isabel",
    hostImage: "/friendly-woman-portrait-smiling.jpg",
    image: "/travel-experience-adventure-colorful.jpg",
    price: 60,
    rating: 4.9,
    reviews: 142,
    duration: "2h30",
    maxGuests: 8,
    bookedGuests: 2,
    date: "Vendredi 24 mai",
    category: "Culture",
  },
  {
    id: "espagne-3",
    title: "Coucher de soleil en voilier sur Palma",
    host: "Raul",
    hostImage: "/german-man-backpacker-smiling-portrait.jpg",
    image: "/mediterranean-sea-coastal-village-sunset.jpg",
    price: 70,
    rating: 4.9,
    reviews: 95,
    duration: "3h",
    maxGuests: 6,
    bookedGuests: 3,
    date: "Samedi 25 mai",
    category: "Nature",
  },
]

const seychellesExperiences: DestinationExperienceCard[] = [
  {
    id: "seychelles-1",
    title: "Snorkeling tortues & coraux",
    host: "Aline",
    hostImage: "/friendly-woman-portrait-smiling.jpg",
    image: "/tortue.png",
    price: 75,
    rating: 4.9,
    reviews: 101,
    duration: "3h30",
    maxGuests: 6,
    bookedGuests: 2,
    date: "Lundi 27 mai",
    category: "Nature",
  },
  {
    id: "seychelles-2",
    title: "Atelier cuisine créole à Mahé",
    host: "Vanessa",
    hostImage: "/friendly-woman-portrait-smiling.jpg",
    image: "/seychelles.png",
    price: 58,
    rating: 4.8,
    reviews: 64,
    duration: "3h",
    maxGuests: 10,
    bookedGuests: 4,
    date: "Mercredi 22 mai",
    category: "Gastronomie",
  },
  {
    id: "seychelles-3",
    title: "Croisière coucher de soleil en catamaran",
    host: "David",
    hostImage: "/german-man-backpacker-smiling-portrait.jpg",
    image: "/seychelles.png",
    price: 95,
    rating: 4.9,
    reviews: 83,
    duration: "2h30",
    maxGuests: 12,
    bookedGuests: 5,
    date: "Samedi 25 mai",
    category: "Aventure",
  },
]

const portugalExperiences: DestinationExperienceCard[] = [
  {
    id: "portugal-1",
    title: "Balade en tramway & pastel de nata",
    host: "Miguel",
    hostImage: "/german-man-backpacker-smiling-portrait.jpg",
    image: "/lisbon-portugal-colorful-tramway-alfama.jpg",
    price: 40,
    rating: 4.8,
    reviews: 102,
    duration: "3h",
    maxGuests: 8,
    bookedGuests: 4,
    date: "Samedi 18 mai",
    category: "Culture",
  },
  {
    id: "portugal-2",
    title: "Atelier azulejos & broderie",
    host: "Maria",
    hostImage: "/friendly-woman-portrait-smiling.jpg",
    image: "/portugal-lisbon-tiles-azulejos-colorful.jpg",
    price: 55,
    rating: 4.9,
    reviews: 78,
    duration: "4h",
    maxGuests: 6,
    bookedGuests: 3,
    date: "Dimanche 19 mai",
    category: "Artisanat",
  },
  {
    id: "portugal-3",
    title: "Cours de cuisine lisboète",
    host: "Joao",
    hostImage: "/friendly-woman-portrait-smiling.jpg",
    image: "/happy-travelers-sharing-meal-with-local-host-famil.jpg",
    price: 60,
    rating: 4.8,
    reviews: 91,
    duration: "3h30",
    maxGuests: 10,
    bookedGuests: 5,
    date: "Mardi 21 mai",
    category: "Gastronomie",
  },
]

const argentinaExperiences: DestinationExperienceCard[] = [
  {
    id: "argentine-1",
    title: "Cours de tango argentin",
    host: "Carlos",
    hostImage: "/argentine-man-tango-dancer-portrait.jpg",
    image: "/tango-dance-lesson-buenos-aires-argentina.jpg",
    price: 40,
    rating: 5.0,
    reviews: 203,
    duration: "2h",
    maxGuests: 10,
    bookedGuests: 6,
    date: "Vendredi 24 mai",
    category: "Culture",
  },
  {
    id: "argentine-2",
    title: "Asado et vins porteños",
    host: "Lucia",
    hostImage: "/friendly-woman-portrait-smiling.jpg",
    image: "/happy-travelers-sharing-meal-with-local-host-famil.jpg",
    price: 55,
    rating: 4.9,
    reviews: 110,
    duration: "4h",
    maxGuests: 8,
    bookedGuests: 5,
    date: "Samedi 25 mai",
    category: "Gastronomie",
  },
  {
    id: "argentine-3",
    title: "Street art tour à La Boca",
    host: "Sofia",
    hostImage: "/friendly-woman-portrait-smiling.jpg",
    image: "/buenos-aires-argentina-la-boca-colorful.jpg",
    price: 35,
    rating: 4.8,
    reviews: 87,
    duration: "2h30",
    maxGuests: 12,
    bookedGuests: 7,
    date: "Dimanche 26 mai",
    category: "Culture",
  },
]

const southAfricaExperiences: DestinationExperienceCard[] = [
  {
    id: "afrique-1",
    title: "Safari photo à l'aube",
    host: "David",
    hostImage: "/friendly-woman-portrait-smiling.jpg",
    image: "/cape-town-table-mountain.png",
    price: 85,
    rating: 4.8,
    reviews: 94,
    duration: "6h",
    maxGuests: 4,
    bookedGuests: 3,
    date: "Lundi 27 mai",
    category: "Nature",
  },
  {
    id: "afrique-2",
    title: "Atelier braai chez Nomsa",
    host: "Nomsa",
    hostImage: "/friendly-woman-portrait-smiling.jpg",
    image: "/happy-travelers-sharing-meal-with-local-host-famil.jpg",
    price: 60,
    rating: 4.9,
    reviews: 76,
    duration: "3h30",
    maxGuests: 8,
    bookedGuests: 4,
    date: "Mercredi 22 mai",
    category: "Gastronomie",
  },
  {
    id: "afrique-3",
    title: "Session surf à Muizenberg",
    host: "Liam",
    hostImage: "/german-man-backpacker-smiling-portrait.jpg",
    image: "/travel-experience-adventure-colorful.jpg",
    price: 45,
    rating: 4.7,
    reviews: 58,
    duration: "2h",
    maxGuests: 6,
    bookedGuests: 2,
    date: "Jeudi 23 mai",
    category: "Aventure",
  },
]

const greeceExperiences: DestinationExperienceCard[] = [
  {
    id: "grece-1",
    title: "Cours de cuisine cycladique",
    host: "Eleni",
    hostImage: "/friendly-woman-portrait-smiling.jpg",
    image: "/santorini-greece-white-blue-houses-sunset.jpg",
    price: 65,
    rating: 4.9,
    reviews: 88,
    duration: "4h",
    maxGuests: 8,
    bookedGuests: 4,
    date: "Dimanche 19 mai",
    category: "Gastronomie",
  },
  {
    id: "grece-2",
    title: "Croisière sunset en catamaran",
    host: "Nikos",
    hostImage: "/german-man-backpacker-smiling-portrait.jpg",
    image: "/greece-santorini-blue-white-mediterranean.jpg",
    price: 90,
    rating: 4.9,
    reviews: 120,
    duration: "3h",
    maxGuests: 10,
    bookedGuests: 5,
    date: "Mardi 21 mai",
    category: "Nature",
  },
  {
    id: "grece-3",
    title: "Atelier poterie cycladique",
    host: "Maria",
    hostImage: "/friendly-woman-portrait-smiling.jpg",
    image: "/travel-experience-adventure-colorful.jpg",
    price: 52,
    rating: 4.8,
    reviews: 64,
    duration: "2h30",
    maxGuests: 6,
    bookedGuests: 3,
    date: "Jeudi 23 mai",
    category: "Artisanat",
  },
]

const experiencesByDestination: Record<string, DestinationExperienceCard[]> = {
  maroc: moroccoExperiences,
  marrakech: moroccoExperiences,
  bali: baliExperiences,
  italie: italyExperiences,
  "cinque-terre": italyExperiences,
  espagne: spainExperiences,
  lisbonne: portugalExperiences,
  "buenos-aires": argentinaExperiences,
  seychelles: seychellesExperiences,
  "cape-town": southAfricaExperiences,
  santorini: greeceExperiences,
}

const FALLBACK_DESTINATION = "maroc"

export function DestinationExperiences({ destinationName, locationLabel, destinationId }: DestinationExperiencesProps) {
  const highlightedLocation = locationLabel || `à ${destinationName}`
  const experiences =
    experiencesByDestination[destinationId || FALLBACK_DESTINATION] || experiencesByDestination[FALLBACK_DESTINATION]

  return (
    <section className="py-12 md:py-16 bg-pink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Expériences {highlightedLocation}</h2>
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
                <p className="text-xs text-foreground/60 mt-1 flex items-center gap-1">
                  <CalendarDays className="w-3 h-3" />
                  {exp.date}
                </p>

                <div className="flex items-center gap-4 mt-3 text-sm text-foreground/70">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {exp.bookedGuests}/{exp.maxGuests} personnes
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
