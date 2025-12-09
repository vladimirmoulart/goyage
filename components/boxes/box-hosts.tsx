import { Star, Award } from "lucide-react"

const hosts = [
  {
    id: 1,
    name: "Ahmed",
    role: "Maître potier",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.9,
    reviews: 127,
    experience: "15 ans",
    bio: "Potier depuis 3 générations, Ahmed perpétue la tradition familiale dans son atelier de la médina.",
    languages: ["Français", "Arabe", "Anglais"],
  },
  {
    id: 2,
    name: "Fatima",
    role: "Cheffe cuisinière",
    image: "/placeholder.svg?height=200&width=200",
    rating: 5.0,
    reviews: 89,
    experience: "20 ans",
    bio: "Fatima partage les secrets de la cuisine marocaine transmis par sa grand-mère.",
    languages: ["Français", "Arabe"],
  },
  {
    id: 3,
    name: "Youssef",
    role: "Guide local",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.8,
    reviews: 156,
    experience: "10 ans",
    bio: "Né et grandi dans la médina, Youssef connaît chaque ruelle et chaque artisan.",
    languages: ["Français", "Arabe", "Anglais", "Espagnol"],
  },
]

export function BoxHosts() {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Vos hôtes locaux</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {hosts.map((host) => (
          <div
            key={host.id}
            className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="relative inline-block mb-4">
              <img
                src={host.image || "/placeholder.svg"}
                alt={host.name}
                className="w-24 h-24 rounded-full object-cover mx-auto"
              />
              <span className="absolute -bottom-2 right-0 bg-green text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <Award className="w-3 h-3" />
                Vérifié
              </span>
            </div>

            <h3 className="font-bold text-lg text-foreground">{host.name}</h3>
            <p className="text-coral font-medium">{host.role}</p>

            <div className="flex items-center justify-center gap-2 mt-3">
              <Star className="w-4 h-4 fill-coral text-coral" />
              <span className="font-semibold">{host.rating}</span>
              <span className="text-foreground/60 text-sm">({host.reviews} avis)</span>
            </div>

            <p className="text-foreground/70 text-sm mt-4 leading-relaxed">{host.bio}</p>

            <div className="mt-4 pt-4 border-t border-pink/30">
              <p className="text-sm text-foreground/60">Parle : {host.languages.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
