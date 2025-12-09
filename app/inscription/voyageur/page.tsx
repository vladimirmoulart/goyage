import { Plane, MessageSquare, Gift } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const travelerHighlights = [
  { icon: Plane, title: "Expériences vérifiées", text: "Chaque activité est vérifiée et évaluée par la communauté." },
  { icon: MessageSquare, title: "Support 7j/7", text: "Discutez avec notre équipe avant, pendant et après votre voyage." },
  { icon: Gift, title: "Avantages exclusifs", text: "Accès prioritaire aux nouveautés et tarifs préférentiels." },
]

export default function VoyagerSignupPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />

      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-green uppercase tracking-[0.3em]">Inscription voyageur</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Explorez le monde, <span className="text-green">à votre façon</span>
          </h1>
          <p className="mt-4 text-lg text-foreground/70">
            Créez votre profil GOYAGE pour réserver des expériences immersives, échanger avec vos hôtes favoris et
            recevoir des inspirations personnalisées.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {travelerHighlights.map((highlight) => {
              const Icon = highlight.icon
              return (
                <div key={highlight.title} className="rounded-2xl bg-white/80 border border-pink/40 p-4 shadow-sm">
                  <Icon className="w-5 h-5 text-green" />
                  <h3 className="mt-3 text-sm font-semibold text-foreground">{highlight.title}</h3>
                  <p className="text-sm text-foreground/70 mt-1">{highlight.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form className="grid gap-6 md:grid-cols-2 bg-white border border-pink/50 rounded-3xl p-6 sm:p-8 shadow-xl">
            <div>
              <label className="text-sm font-medium text-foreground/80">Nom et prénom</label>
              <input
                type="text"
                placeholder="Ex : Hugo Bernard"
                className="mt-2 w-full rounded-2xl border border-pink/40 bg-cream/70 px-4 py-3 text-foreground placeholder:text-foreground/40 outline-none focus:border-green focus:ring-2 focus:ring-green/20"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground/80">Email</label>
              <input
                type="email"
                placeholder="vous@email.com"
                className="mt-2 w-full rounded-2xl border border-pink/40 bg-cream/70 px-4 py-3 text-foreground placeholder:text-foreground/40 outline-none focus:border-green focus:ring-2 focus:ring-green/20"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground/80">Téléphone</label>
              <input
                type="tel"
                placeholder="+33 6 00 00 00 00"
                className="mt-2 w-full rounded-2xl border border-pink/40 bg-cream/70 px-4 py-3 text-foreground placeholder:text-foreground/40 outline-none focus:border-green focus:ring-2 focus:ring-green/20"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground/80">Préférences d'expérience</label>
              <select className="mt-2 w-full rounded-2xl border border-pink/40 bg-cream/70 px-4 py-3 text-foreground outline-none focus:border-green focus:ring-2 focus:ring-green/20">
                <option>Découvertes culinaires</option>
                <option>Aventures nature</option>
                <option>Immersions culturelles</option>
                <option>Bien-être</option>
                <option>Mix de tout</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground/80">Destination rêvée</label>
              <input
                type="text"
                placeholder="Ex : Kyoto, Bali..."
                className="mt-2 w-full rounded-2xl border border-pink/40 bg-cream/70 px-4 py-3 text-foreground placeholder:text-foreground/40 outline-none focus:border-green focus:ring-2 focus:ring-green/20"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-foreground/80">Parlez-nous de vous</label>
              <textarea
                rows={4}
                placeholder="Vos envies de voyage, votre style, vos attentes..."
                className="mt-2 w-full rounded-2xl border border-pink/40 bg-cream/70 px-4 py-3 text-foreground placeholder:text-foreground/40 outline-none focus:border-green focus:ring-2 focus:ring-green/20"
              />
            </div>
            <div className="md:col-span-2">
              <Button type="submit" className="w-full rounded-2xl bg-green hover:bg-green/90 text-foreground py-6 text-base font-semibold">
                Rejoindre GOYAGE en tant que voyageur
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
