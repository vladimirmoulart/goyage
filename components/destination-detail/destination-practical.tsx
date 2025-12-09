import { Calendar, Globe, Banknote, Clock, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface DestinationPracticalProps {
  destination: {
    name: string
    bestTime: string
    language: string
    currency: string
    timezone: string
  }
}

export function DestinationPractical({ destination }: DestinationPracticalProps) {
  const practicalInfo = [
    { icon: Calendar, label: "Meilleure période", value: destination.bestTime },
    { icon: Globe, label: "Langue", value: destination.language },
    { icon: Banknote, label: "Monnaie", value: destination.currency },
    { icon: Clock, label: "Fuseau horaire", value: destination.timezone },
  ]

  return (
    <section className="py-12 md:py-16 bg-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Informations pratiques</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {practicalInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <div key={index} className="bg-white rounded-xl p-5">
                <div className="w-10 h-10 bg-green/20 rounded-full flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-green" />
                </div>
                <p className="text-sm text-foreground/60">{info.label}</p>
                <p className="font-semibold text-foreground mt-1">{info.value}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="bg-coral/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg">Prêt à partir pour {destination.name} ?</h3>
              <p className="text-foreground/70">Réservez votre première expérience dès maintenant.</p>
            </div>
          </div>
          <Button asChild className="bg-coral hover:bg-coral/90 text-white rounded-full px-8">
            <Link href={`/explorer?destination=${destination.name.toLowerCase()}`}>Explorer les expériences</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
