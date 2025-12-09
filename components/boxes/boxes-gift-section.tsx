import { Gift, Heart, Sparkles, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BoxesGiftSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-coral to-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Gift className="w-5 h-5" />
              <span className="font-medium">Le cadeau parfait</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Offrez plus qu'un voyage, offrez une aventure humaine
            </h2>

            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Les Box GOYAGE sont le cadeau idéal pour les anniversaires, mariages, départs à la retraite ou simplement
              pour faire plaisir. Chaque box est une promesse de rencontres authentiques et de découvertes culturelles.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-white/90">Validité 18 mois - Dates flexibles</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-white/90">Message personnalisé inclus</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-white/90">Coffret digital ou physique</span>
              </div>
            </div>

            <Button className="bg-white text-coral hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold">
              Offrir une Box GOYAGE
            </Button>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform">
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl">🎁</span>
                <span className="text-coral font-bold">GOYAGE</span>
              </div>

              <div className="space-y-4">
                <img
                  src="/gift-box-travel-experience-colorful.jpg"
                  alt="Box GOYAGE"
                  className="w-full h-40 object-cover rounded-xl"
                />

                <div className="text-center">
                  <p className="text-foreground/60 text-sm">Carte cadeau pour</p>
                  <p className="text-2xl font-bold text-foreground">Marie & Pierre</p>
                </div>

                <div className="bg-cream rounded-xl p-4 text-center">
                  <p className="text-foreground/70 italic">
                    "Pour votre voyage de noces, vivez des moments magiques au Japon !"
                  </p>
                  <p className="text-coral font-semibold mt-2">- De la part de vos amis</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-pink/30">
                  <span className="text-foreground/60">Box Japon Zen</span>
                  <span className="text-2xl font-bold text-coral">199€</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-green/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
