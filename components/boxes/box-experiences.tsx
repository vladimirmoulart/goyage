import { Clock, MapPin, Star } from "lucide-react"
import { boxesData } from "@/lib/boxes"

export function BoxExperiences({ boxId }: { boxId: string }) {
  const box = boxesData[boxId]
  const experiences = box?.experiences ?? []

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
        Les {experiences.length} expériences incluses
      </h2>

      {experiences.length === 0 ? (
        <p className="text-foreground/70">Les expériences seront annoncées bientôt.</p>
      ) : (
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
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      )}
    </section>
  )
}
