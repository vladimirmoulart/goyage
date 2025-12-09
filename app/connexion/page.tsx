import Link from "next/link"
import { Mail, Lock, Check, ArrowRight } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const benefits = [
  "Des expériences vérifiées et assurées",
  "Un accompagnement personnalisé par nos équipes",
  "Une communauté d'hôtes passionnés à portée de main",
]

const safetyNotes = [
  { title: "Protection de vos données", text: "Vos informations sont chiffrées et jamais partagées." },
  { title: "Support 7j/7", text: "Notre équipe vous accompagne avant, pendant et après vos voyages." },
]

export default function ConnexionPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Brand promise */}
            <div className="flex flex-col justify-center">
              <p className="inline-flex items-center gap-2 bg-white/60 text-coral font-semibold px-4 py-2 rounded-full w-fit text-sm">
                <span className="w-2 h-2 rounded-full bg-coral" />
                Bienvenue chez GOYAGE
              </p>
              <h1 className="mt-6 text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Connectez-vous pour <span className="text-coral">vivre</span> vos prochaines aventures
              </h1>
              <p className="mt-4 text-lg text-foreground/70">
                Gérer vos réservations, discuter avec vos hôtes favoris et accéder à des offres exclusives de la
                communauté GOYAGE.
              </p>

              <div className="mt-10 space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-2xl bg-green/30 flex items-center justify-center text-foreground">
                      <Check className="w-4 h-4" />
                    </span>
                    <p className="text-foreground font-medium">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {safetyNotes.map((note) => (
                  <div key={note.title} className="rounded-2xl border border-white/60 bg-white/70 p-4 shadow-sm">
                    <p className="text-sm font-semibold text-foreground">{note.title}</p>
                    <p className="text-sm text-foreground/70 mt-1">{note.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-pink/40">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Se connecter</h2>
                <p className="text-foreground/70 mt-2">Ravi de vous revoir ! Accédez à votre espace en quelques secondes.</p>
              </div>

              <form className="mt-8 space-y-6">
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                    Adresse email
                  </label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40 w-5 h-5" />
                    <input
                      id="email"
                      type="email"
                      placeholder="vous@email.com"
                      required
                      className="w-full rounded-2xl border border-pink/40 bg-cream/50 py-3 pl-12 pr-4 text-foreground placeholder:text-foreground/40 outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="text-sm font-medium text-foreground/80">
                    Mot de passe
                  </label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40 w-5 h-5" />
                    <input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      required
                      className="w-full rounded-2xl border border-pink/40 bg-cream/50 py-3 pl-12 pr-4 text-foreground placeholder:text-foreground/40 outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-foreground/70 cursor-pointer select-none">
                    <input type="checkbox" className="size-4 rounded border-pink/50 text-coral focus:ring-coral focus:ring-offset-0" />
                    Se souvenir de moi
                  </label>
                  <Link href="/mot-de-passe-oublie" className="text-coral font-semibold hover:underline">
                    Mot de passe oublié ?
                  </Link>
                </div>

                <Button type="submit" className="w-full rounded-2xl bg-coral hover:bg-coral/90 text-white py-6 text-base font-semibold">
                  Se connecter
                </Button>

                <div className="relative text-center">
                  <span className="text-xs uppercase tracking-widest text-foreground/40 bg-white px-3 relative z-10">ou</span>
                  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-pink/40" />
                </div>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full rounded-2xl border-pink/50 bg-white text-foreground py-6 text-base font-semibold"
                >
                  Continuer avec Google
                </Button>
              </form>

              <div className="mt-8 rounded-2xl bg-cream/70 p-5 text-center">
                <p className="text-sm text-foreground/70">
                  Nouveau sur GOYAGE ?
                  <Link href="/devenir-hote" className="text-coral font-semibold ml-1 hover:underline">
                    Créez votre compte hôte
                  </Link>
                </p>
                <Button asChild variant="ghost" className="mt-4 text-coral font-semibold hover:text-coral/80">
                  <Link href="/inscription">
                    <ArrowRight className="w-4 h-4 mr-1" />
                    Voir les options d'inscription
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
