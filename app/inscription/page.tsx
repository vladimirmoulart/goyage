import Link from "next/link"
import { ArrowRight, Home, Compass, Heart } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const membershipOptions = [
  {
    id: "host",
    title: "Je veux devenir hôte",
    description: "Partagez votre passion, accueillez des voyageurs et créez des expériences uniques.",
    icon: Home,
    color: "bg-coral",
    benefits: ["Accompagnement personnalisé", "Assurance incluse", "Gestion des paiements par GOYAGE"],
    cta: "Commencer en tant qu'hôte",
    href: "/inscription/hote",
  },
  {
    id: "traveler",
    title: "Je suis voyageur",
    description: "Rejoignez la communauté et accédez à des expériences immersives près ou loin de chez vous.",
    icon: Compass,
    color: "bg-green",
    benefits: ["Expériences vérifiées", "Service client 7j/7", "Avantages membres exclusifs"],
    cta: "Commencer en tant que voyageur",
    href: "/inscription/voyageur",
  },
]

export default function InscriptionPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />

      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-coral uppercase tracking-[0.2em]">Devenir membre GOYAGE</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Choisissez votre façon de <span className="text-coral">partager</span> ou de <span className="text-green">voyager</span>
            </h1>
            <p className="mt-4 text-lg text-foreground/70">
              Que vous souhaitiez accueillir des voyageurs ou vivre des expériences authentiques, complétez le formulaire
              correspondant pour commencer l’aventure.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {membershipOptions.map((option) => {
              const Icon = option.icon
              return (
                <div
                  key={option.id}
                  className="relative rounded-3xl bg-white p-6 sm:p-8 border border-pink/40 shadow-lg overflow-hidden"
                >
                  <div className="absolute right-0 top-0 w-40 h-40 bg-white/30 rounded-full blur-3xl translate-x-10 -translate-y-4" />
                  <div className="relative">
                    <span className={`inline-flex items-center justify-center rounded-2xl ${option.color} px-4 py-2 text-sm font-semibold text-white`}>
                      <Icon className="w-4 h-4 mr-2" />
                      {option.title}
                    </span>
                    <p className="mt-4 text-foreground text-lg font-semibold">{option.description}</p>
                    <ul className="mt-6 space-y-3">
                      {option.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-foreground/70">
                          <Heart className="w-4 h-4 text-coral" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="mt-8 rounded-full bg-coral hover:bg-coral/90 w-full text-base font-semibold py-6">
                      <Link href={option.href}>
                        {option.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
