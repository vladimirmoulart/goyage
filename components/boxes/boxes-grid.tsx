import Link from "next/link"
import { Gift, MapPin, Star, Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const boxes = [
  {
    id: "maroc-authentique",
    name: "Box Maroc Authentique",
    country: "Maroc",
    flag: "🇲🇦",
    image: "/morocco-travel-souks-desert-colorful.jpg",
    price: 149,
    originalPrice: 189,
    rating: 4.9,
    reviews: 234,
    experiencesCount: 4,
    experiences: ["Atelier poterie", "Cours de cuisine", "Balade en souk", "Thé chez l'habitant"],
    tag: "Best-seller",
    tagColor: "bg-coral",
    description: "Plongez dans la magie du Maroc avec 4 expériences authentiques",
  },
  {
    id: "japon-zen",
    name: "Box Japon Zen",
    country: "Japon",
    flag: "🇯🇵",
    image: "/japan-zen-garden-temple-kyoto.jpg",
    price: 199,
    originalPrice: 249,
    rating: 5.0,
    reviews: 187,
    experiencesCount: 5,
    experiences: ["Cérémonie du thé", "Calligraphie", "Cuisine kaiseki", "Méditation zen", "Ikebana"],
    tag: "Premium",
    tagColor: "bg-green",
    description: "Une immersion dans l'art de vivre japonais",
  },
  {
    id: "italie-dolce-vita",
    name: "Box Italie Dolce Vita",
    country: "Italie",
    flag: "🇮🇹",
    image: "/italy-tuscany-vineyard-sunset-romantic.jpg",
    price: 179,
    originalPrice: 219,
    rating: 4.8,
    reviews: 312,
    experiencesCount: 4,
    experiences: ["Cours de pasta", "Dégustation vins", "Tour en vespa", "Gelato artisanal"],
    tag: "Romantique",
    tagColor: "bg-pink",
    description: "La dolce vita italienne en 4 expériences inoubliables",
  },
  {
    id: "bali-spirituel",
    name: "Box Bali Spirituel",
    country: "Indonésie",
    flag: "🇮🇩",
    image: "/bali-rice-terraces-temple-spiritual.jpg",
    price: 159,
    originalPrice: 199,
    rating: 4.9,
    reviews: 156,
    experiencesCount: 5,
    experiences: ["Yoga au lever", "Offrandes balinaises", "Cours de cuisine", "Massage traditionnel", "Temple tour"],
    tag: "Bien-être",
    tagColor: "bg-green",
    description: "Reconnectez-vous avec vous-même à Bali",
  },
  {
    id: "mexique-fiesta",
    name: "Box Mexique Fiesta",
    country: "Mexique",
    flag: "🇲🇽",
    image: "/mexico-colorful-oaxaca-markets-fiesta.jpg",
    price: 139,
    originalPrice: 179,
    rating: 4.7,
    reviews: 98,
    experiencesCount: 4,
    experiences: ["Tacos authentiques", "Mezcal tasting", "Artisanat local", "Danse folklorique"],
    tag: "Nouveau",
    tagColor: "bg-coral",
    description: "Vivez la fiesta mexicaine avec passion",
  },
  {
    id: "grece-antique",
    name: "Box Grèce Antique",
    country: "Grèce",
    flag: "🇬🇷",
    image: "/greece-santorini-blue-white-mediterranean.jpg",
    price: 169,
    originalPrice: 209,
    rating: 4.8,
    reviews: 145,
    experiencesCount: 4,
    experiences: ["Cuisine grecque", "Visite historique", "Dégustation ouzo", "Poterie antique"],
    tag: "Culturel",
    tagColor: "bg-pink",
    description: "Sur les traces des dieux grecs",
  },
  {
    id: "portugal-saudade",
    name: "Box Portugal Saudade",
    country: "Portugal",
    flag: "🇵🇹",
    image: "/portugal-lisbon-tiles-azulejos-colorful.jpg",
    price: 149,
    originalPrice: 189,
    rating: 4.9,
    reviews: 178,
    experiencesCount: 4,
    experiences: ["Pastel de nata", "Fado authentique", "Azulejos tour", "Porto wine tasting"],
    tag: "Coup de coeur",
    tagColor: "bg-coral",
    description: "L'âme portugaise en 4 expériences",
  },
  {
    id: "thailande-sourire",
    name: "Box Thaïlande Sourire",
    country: "Thaïlande",
    flag: "🇹🇭",
    image: "/thailand-temples-bangkok-street-food.jpg",
    price: 129,
    originalPrice: 169,
    rating: 4.8,
    reviews: 203,
    experiencesCount: 5,
    experiences: ["Street food tour", "Temple bouddhiste", "Massage thaï", "Cours de cuisine", "Marché flottant"],
    tag: "Aventure",
    tagColor: "bg-green",
    description: "Le pays du sourire vous attend",
  },
]

export function BoxesGrid() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Nos Box par Destination</h2>
            <p className="text-foreground/70 mt-2">{boxes.length} coffrets disponibles</p>
          </div>
          <div className="relative w-full sm:w-auto">
            <select className="w-full appearance-none px-5 py-3 rounded-full border border-pink text-foreground text-sm bg-white outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 pr-10">
              <option>Les plus populaires</option>
              <option>Prix croissant</option>
              <option>Prix décroissant</option>
              <option>Nouveautés</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/60 w-4 h-4 pointer-events-none" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {boxes.map((box) => (
            <Link
              key={box.id}
              href={`/boxes/${box.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={box.image || "/placeholder.svg"}
                  alt={box.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span
                  className={`absolute top-3 left-3 ${box.tagColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                >
                  {box.tag}
                </span>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <span className="text-lg">{box.flag}</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-coral text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                  <Gift className="w-3 h-3" />
                  {box.experiencesCount} expériences
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-1 text-sm text-foreground/60 mb-2">
                  <MapPin className="w-3 h-3" />
                  {box.country}
                </div>

                <h3 className="font-bold text-lg text-foreground group-hover:text-coral transition-colors">
                  {box.name}
                </h3>

                <p className="text-sm text-foreground/70 mt-2 line-clamp-2">{box.description}</p>

                {/* Experiences list */}
                <div className="mt-4 space-y-1">
                  {box.experiences.slice(0, 3).map((exp, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                      <Check className="w-3 h-3 text-green" />
                      {exp}
                    </div>
                  ))}
                  {box.experiences.length > 3 && (
                    <p className="text-sm text-coral font-medium">+{box.experiences.length - 3} autres expériences</p>
                  )}
                </div>

                {/* Rating & Price */}
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-pink/30">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-coral text-coral" />
                    <span className="font-semibold text-foreground">{box.rating}</span>
                    <span className="text-sm text-foreground/60">({box.reviews})</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-foreground/50 line-through">{box.originalPrice}€</span>
                    <span className="font-bold text-coral text-xl ml-2">{box.price}€</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-coral hover:bg-coral/90 text-white rounded-full px-8 py-6 text-lg">
            Voir toutes les Box
          </Button>
        </div>
      </div>
    </section>
  )
}
