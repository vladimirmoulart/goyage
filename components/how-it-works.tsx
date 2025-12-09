import { Search, MessageCircle, Heart, Star } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Explorez",
    description: "Parcourez des centaines d'expériences authentiques proposées par des locaux passionnés.",
    color: "coral",
  },
  {
    icon: MessageCircle,
    title: "Connectez",
    description: "Échangez avec votre hôte pour personnaliser votre expérience selon vos envies.",
    color: "green",
  },
  {
    icon: Heart,
    title: "Vivez",
    description: "Immergez-vous dans la culture locale et créez des souvenirs inoubliables.",
    color: "coral",
  },
  {
    icon: Star,
    title: "Partagez",
    description: "Racontez votre aventure et inspirez d'autres voyageurs à vivre l'expérience.",
    color: "green",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-pink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Comment ça marche ?</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            GOYAGE simplifie la connexion entre voyageurs curieux et hôtes locaux passionnés.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative h-full">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-pink" />
              )}

              <div className="relative h-full bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div
                  className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                    step.color === "coral" ? "bg-coral/10" : "bg-green/20"
                  }`}
                >
                  <step.icon className={`w-8 h-8 ${step.color === "coral" ? "text-coral" : "text-green"}`} />
                </div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-coral text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-foreground/70 flex-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
