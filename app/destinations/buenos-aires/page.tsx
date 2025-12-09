import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DestinationDetailHero } from "@/components/destination-detail/destination-detail-hero"
import { DestinationAbout } from "@/components/destination-detail/destination-about"
import { DestinationExperiences } from "@/components/destination-detail/destination-experiences"
import { DestinationHosts } from "@/components/destination-detail/destination-hosts"
import { DestinationPractical } from "@/components/destination-detail/destination-practical"

const destination = {
  id: "buenos-aires",
  name: "Buenos Aires",
  country: "Argentine",
  continent: "Amérique",
  heroImage: "/buenos-aires-argentina-la-boca-colorful.jpg",
  description: "Tango, asado et passion argentine dans la Paris de l'Amérique du Sud.",
  longDescription:
    "Buenos Aires mélange énergie européenne et chaleur latine. Découvrez ses quartiers mythiques, apprenez le tango auprès de maîtres réputés, goûtez aux secrets d'une parrilla familiale et explorez la scène artistique bohème de La Boca avec nos hôtes GOYAGE.",
  highlights: [
    "Cours de tango privés avec des maestros",
    "Ateliers d'asado et dégustations de vins argentins",
    "Street art tour dans La Boca et Palermo",
    "Rencontres avec des artisans du cuir et des luthiers",
  ],
  experiences: 41,
  hosts: 22,
  rating: 4.7,
  bestTime: "Septembre - Décembre",
  language: "Espagnol, Anglais",
  currency: "Peso argentin (ARS)",
  timezone: "UTC-3",
}

export default function DestinationBuenosAiresPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <DestinationDetailHero destination={destination} />
      <DestinationAbout destination={destination} />
      <DestinationExperiences destinationName={destination.name} />
      <DestinationHosts destinationName={destination.name} />
      <DestinationPractical destination={destination} />
      <Footer />
    </main>
  )
}
