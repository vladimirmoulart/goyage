import { Star, Award } from "lucide-react"
import { boxesData } from "@/lib/boxes"

export function BoxHosts({ boxId }: { boxId: string }) {
  const hosts = boxesData[boxId]?.hosts ?? []

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Vos hôtes locaux</h2>

      {hosts.length === 0 ? (
        <p className="text-foreground/70">Les hôtes seront annoncés prochainement.</p>
      ) : (
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
      )}
    </section>
  )
}
