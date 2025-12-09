import { Check } from "lucide-react"

interface DestinationAboutProps {
  destination: {
    name: string
    longDescription: string
    highlights: string[]
  }
}

export function DestinationAbout({ destination }: DestinationAboutProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Description */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">À propos de {destination.name}</h2>
            <p className="text-foreground/70 text-lg leading-relaxed">{destination.longDescription}</p>
          </div>

          {/* Highlights */}
          <div className="bg-pink/30 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Points forts</h3>
            <ul className="space-y-4">
              {destination.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-foreground" />
                  </span>
                  <span className="text-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
