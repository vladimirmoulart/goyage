import Link from "next/link"
import { Gift, Star } from "lucide-react"
import { boxesList } from "@/lib/boxes"

export function BoxSimilar({ currentBoxId }: { currentBoxId: string }) {
  const similarBoxes = boxesList.filter((box) => box.id !== currentBoxId).slice(0, 3)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Box similaires</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {similarBoxes.map((box) => (
            <Link
              key={box.id}
              href={`/boxes/${box.id}`}
              className="group bg-cream rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={box.image || "/placeholder.svg"}
                  alt={box.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 right-3 text-2xl">{box.flag}</span>
                <div className="absolute bottom-3 left-3 bg-coral text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                  <Gift className="w-3 h-3" />
                  {box.experiencesCount} expériences
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg text-foreground group-hover:text-coral transition-colors">
                  {box.name}
                </h3>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-coral text-coral" />
                    <span className="font-semibold">{box.rating}</span>
                  </div>
                  <span className="text-xl font-bold text-coral">{box.price}€</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
