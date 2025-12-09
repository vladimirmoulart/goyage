import { Users, ShieldCheck, Sparkles } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const hostHighlights = [
  { icon: Users, title: "Communauté engagée", text: "Rejoignez plus de 5 000 hôtes actifs dans 150 destinations." },
  { icon: ShieldCheck, title: "Assurance incluse", text: "Toutes vos expériences sont couvertes par GOYAGE." },
  { icon: Sparkles, title: "Accompagnement expert", text: "Nos équipes vous conseillent à chaque étape." },
]

export default function HostSignupPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />

      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-coral uppercase tracking-[0.3em]">Inscription hôte</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Partagez votre passion, <span className="text-coral">accueillez le monde</span>
          </h1>
          <p className="mt-4 text-lg text-foreground/70">
            Dites-nous en davantage sur l'expérience que vous souhaitez créer pour la communauté GOYAGE. Notre équipe vous
            recontactera sous 48h pour concrétiser votre projet.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {hostHighlights.map((highlight) => {
              const Icon = highlight.icon
              return (
                <div key={highlight.title} className="rounded-2xl bg-white/80 border border-pink/40 p-4 shadow-sm">
                  <Icon className="w-5 h-5 text-coral" />
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
                placeholder="Ex : Léa Martin"
                className="mt-2 w-full rounded-2xl border border-pink/40 bg-cream/70 px-4 py-3 text-foreground placeholder:text-foreground/40 outline-none focus:border-coral focus:ring-2 focus:ring-coral/20"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground/80">Email</label>
              <input
                type="email"
                placeholder="vous@email.com"
                className="mt-2 w-full rounded-2xl border border-pink/40 bg-cream/70 px-4 py-3 text-foreground placeholder:text-foreground/40 outline-none focus:border-coral focus:ring-2 focus:ring-coral/20"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground/80">Téléphone</label>
              <input
                type="tel"
                placeholder="+33 6 00 00 00 00"
                className="mt-2 w-full rounded-2xl border border-pink/40 bg-cream/70 px-4 py-3 text-foreground placeholder:text-foreground/40 outline-none focus:border-coral focus:ring-2 focus:ring-coral/20"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground/80">Lieu de l’expérience</label>
              <input
                type="text"
                placeholder="Ville, Pays"
                className="mt-2 w-full rounded-2xl border border-pink/40 bg-cream/70 px-4 py-3 text-foreground placeholder:text-foreground/40 outline-none focus:border-coral focus:ring-2 focus:ring-coral/20"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground/80">Type d’activité</label>
              <select className="mt-2 w-full rounded-2xl border border-pink/40 bg-cream/70 px-4 py-3 text-foreground outline-none focus:border-coral focus:ring-2 focus:ring-coral/20">
                <option>Gastronomie</option>
                <option>Artisanat</option>
                <option>Culture</option>
                <option>Nature</option>
                <option>Bien-être</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground/80">Expérience envisagée</label>
              <input
                type="text"
                placeholder="Titre ou concept"
                className="mt-2 w-full rounded-2xl border border-pink/40 bg-cream/70 px-4 py-3 text-foreground placeholder:text-foreground/40 outline-none focus:border-coral focus:ring-2 focus:ring-coral/20"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-foreground/80">Votre projet</label>
              <textarea
                rows={4}
                placeholder="Décrivez l'expérience que vous souhaitez proposer..."
                className="mt-2 w-full rounded-2xl border border-pink/40 bg-cream/70 px-4 py-3 text-foreground placeholder:text-foreground/40 outline-none focus:border-coral focus:ring-2 focus:ring-coral/20"
              />
            </div>
            <div className="md:col-span-2">
              <Button type="submit" className="w-full rounded-2xl bg-coral hover:bg-coral/90 text-white py-6 text-base font-semibold">
                Envoyer ma candidature d'hôte
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
