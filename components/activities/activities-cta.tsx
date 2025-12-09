import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function ActivitiesCta() {
  return (
    <section className="py-16 md:py-24 bg-coral/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-foreground mb-6">
          <Sparkles className="w-4 h-4 text-coral" />
          Vous êtes passionné ?
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Partagez votre passion avec des voyageurs du monde entier
        </h2>
        <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
          Créez votre propre expérience et rejoignez notre communauté d'hôtes locaux. C'est gratuit et ça prend moins de
          10 minutes.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-coral hover:bg-coral/90 text-white rounded-full px-8 py-6 text-lg h-auto">
            <Link href="/devenir-hote">
              Devenir hôte
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-coral text-coral hover:bg-coral hover:text-white rounded-full px-8 py-6 text-lg h-auto bg-transparent"
          >
            <Link href="/comment-ca-marche">En savoir plus</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
