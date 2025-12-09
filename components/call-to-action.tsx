import { Button } from "@/components/ui/button"
import { Users, Globe } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* For Travelers */}
          <div className="relative bg-coral rounded-3xl p-8 md:p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Prêt à explorer ?</h3>
              <p className="text-white/90 text-lg mb-8 max-w-md">
                Découvrez des milliers d'expériences uniques créées par des passionnés locaux à travers le monde.
              </p>
              <Button size="lg" className="bg-white text-coral hover:bg-white/90 rounded-full px-8 font-semibold">
                Trouver une expérience
              </Button>
            </div>
          </div>

          {/* For Hosts */}
          <div className="relative bg-green rounded-3xl p-8 md:p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Partagez votre passion</h3>
              <p className="text-foreground/80 text-lg mb-8 max-w-md">
                Devenez hôte GOYAGE et faites découvrir votre culture à des voyageurs du monde entier.
              </p>
              <Button
                size="lg"
                className="bg-foreground text-white hover:bg-foreground/90 rounded-full px-8 font-semibold"
              >
                Devenir hôte
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
