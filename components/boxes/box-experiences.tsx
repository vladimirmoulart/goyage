import { Clock, Users, MapPin, Star } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Atelier poterie traditionnelle",
    description:
      "Apprenez l'art ancestral de la poterie marocaine avec un maître artisan dans son atelier de la médina. Repartez avec votre création.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "3h",
    maxGuests: 6,
    location: "Médina de Marrakech",
    host: "Ahmed",
    hostImage: "/placeholder.svg?height=100&width=100",
    rating: 4.9,
  },
  {
    id: 2,
    title: "Cours de cuisine marocaine",
    description:
      "Préparez un tajine authentique et d'autres spécialités marocaines avec une famille locale. Déjeuner inclus avec votre création.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "4h",
    maxGuests: 8,
    location: "Riad familial",
    host: "Fatima",
    hostImage: "/placeholder.svg?height=100&width=100",
    rating: 5.0,
  },
  {
    id: 3,
    title: "Balade guidée dans les souks",
    description:
      "Explorez les souks labyrinthiques avec un guide local. Découvrez les secrets des artisans et les meilleures adresses cachées.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "2h30",
    maxGuests: 10,
    location: "Souks de Marrakech",
    host: "Youssef",
    hostImage: "/placeholder.svg?height=100&width=100",
    rating: 4.8,
  },
  {
    id: 4,
    title: "Thé et pâtisseries chez l'habitant",
    description:
      "Partagez un moment de convivialité autour du thé à la menthe et de pâtisseries maison chez une famille marocaine.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "1h30",
    maxGuests: 6,
    location: "Maison traditionnelle",
    host: "Khadija",
    hostImage: "/placeholder.svg?height=100&width=100",
    rating: 5.0,
  },
]

export function BoxExperiences() {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
        Les {experiences.length} expériences incluses
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="md:w-1/3 relative">
                <img
                  src={exp.image || "/placeholder.svg"}
                  alt={exp.title}
                  className="w-full h-48 md:h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-coral text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                  {index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={exp.hostImage || "/placeholder.svg"}
                    alt={exp.host}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm text-foreground/60">Avec</p>
                    <p className="font-semibold text-foreground">{exp.host}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    <Star className="w-4 h-4 fill-coral text-coral" />
                    <span className="font-semibold">{exp.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{exp.title}</h3>
                <p className="text-foreground/70 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    Max {exp.maxGuests} pers.
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
