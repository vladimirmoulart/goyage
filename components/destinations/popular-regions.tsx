import Link from "next/link"
import { ArrowRight } from "lucide-react"

const regions = [
  {
    name: "Méditerranée",
    countries: ["Espagne", "Italie", "Grèce", "Croatie"],
    image: "/mediterranean-sea-coastal-village-sunset.jpg",
    color: "from-coral/80",
  },
  {
    name: "Asie du Sud-Est",
    countries: ["Thaïlande", "Vietnam", "Indonésie", "Cambodge"],
    image: "/southeast-asia-temple-rice-fields-tropical.jpg",
    color: "from-green/80",
  },
  {
    name: "Amérique Latine",
    countries: ["Mexique", "Pérou", "Argentine", "Colombie"],
    image: "/latin-america-colorful-streets-culture.jpg",
    color: "from-coral/80",
  },
  {
    name: "Afrique du Nord",
    countries: ["Maroc", "Tunisie", "Égypte"],
    image: "/north-africa-morocco-desert-medina.jpg",
    color: "from-green/80",
  },
]

export function PopularRegions() {
  return (
    <section className="py-16 md:py-24 bg-pink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Régions populaires</h2>
            <p className="mt-3 text-lg text-foreground/70">
              Explorez nos destinations par région et trouvez votre prochaine aventure.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region) => (
            <Link
              key={region.name}
              href={`/destinations?region=${region.name.toLowerCase().replace(/ /g, "-")}`}
              className="group relative rounded-2xl overflow-hidden h-64"
            >
              <img
                src={region.image || "/placeholder.svg"}
                alt={region.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${region.color} to-transparent`} />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">{region.name}</h3>
                <p className="text-white/80 text-sm mt-1">{region.countries.join(" • ")}</p>
                <div className="flex items-center gap-1 text-white mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Explorer</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
