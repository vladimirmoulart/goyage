import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DestinationDetailHero } from "@/components/destination-detail/destination-detail-hero"
import { DestinationAbout } from "@/components/destination-detail/destination-about"
import { DestinationExperiences } from "@/components/destination-detail/destination-experiences"
import { DestinationHosts } from "@/components/destination-detail/destination-hosts"
import { DestinationPractical } from "@/components/destination-detail/destination-practical"

const destination = {
  id: "cinque-terre",
  name: "Cinque Terre",
  country: "Italie",
  continent: "Europe",
  heroImage: "/cinque-terre-italy-colorful-coastal-villages.jpg",
  description: "Villages colorés accrochés aux falaises de la Riviera italienne.",
  longDescription:
    "Entre mer et vignobles en terrasses, les Cinque Terre offrent un terrain de jeu idyllique pour les amoureux de nature et de gastronomie. Avec GOYAGE, partez en randonnée guidée, initiez-vous à la pesto classico, découvrez la pêche artisanale et dégustez les vins sciachetrà en compagnie d'habitants.",
  highlights: [
    "Randonnées guidées entre Monterosso et Vernazza",
    "Ateliers pesto et focaccia dans des trattorias familiales",
    "Sorties pêche au lever du jour",
    "Dégustations de vins sciachetrà face à la mer",
  ],
  experiences: 24,
  hosts: 12,
  rating: 4.9,
  bestTime: "Mai - Septembre",
  language: "Italien, Anglais",
  currency: "Euro (EUR)",
  timezone: "UTC+1/+2",
}

export default function DestinationCinqueTerrePage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <DestinationDetailHero destination={destination} />
      <DestinationAbout destination={destination} />
      <DestinationExperiences destinationName={destination.name} destinationId={destination.id} />
      <DestinationHosts destinationName={destination.name} />
      <DestinationPractical destination={destination} />
      <Footer />
    </main>
  )
}
