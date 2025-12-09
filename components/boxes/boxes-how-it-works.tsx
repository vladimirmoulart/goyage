import { Gift, Mail, Plane, Heart } from "lucide-react"

const steps = [
  {
    icon: Gift,
    title: "Choisissez votre Box",
    description:
      "Sélectionnez la destination et le type d'expériences qui correspondent à vos envies ou à ceux de la personne à qui vous offrez.",
  },
  {
    icon: Mail,
    title: "Recevez votre coffret",
    description:
      "Coffret digital ou physique avec un code unique, une carte cadeau personnalisée et le guide des expériences incluses.",
  },
  {
    icon: Plane,
    title: "Réservez vos dates",
    description:
      "Le bénéficiaire choisit ses dates parmi les créneaux disponibles des hôtes locaux. Validité de 18 mois.",
  },
  {
    icon: Heart,
    title: "Vivez l'aventure",
    description: "Profitez de chaque expérience avec des hôtes passionnés et créez des souvenirs inoubliables.",
  },
]

export function BoxesHowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comment ça marche ?</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Offrir une Box GOYAGE, c'est simple et magique</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="text-center relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-pink/50" />
                )}

                <div className="w-20 h-20 bg-pink rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <Icon className="w-8 h-8 text-coral" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-coral text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-foreground mb-3">{step.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
