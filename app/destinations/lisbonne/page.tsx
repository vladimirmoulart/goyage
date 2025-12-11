import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DestinationDetailHero } from "@/components/destination-detail/destination-detail-hero"
import { DestinationAbout } from "@/components/destination-detail/destination-about"
import { DestinationExperiences } from "@/components/destination-detail/destination-experiences"
import { DestinationHosts } from "@/components/destination-detail/destination-hosts"
import { DestinationPractical } from "@/components/destination-detail/destination-practical"

const destination = {
  id: "lisbonne",
  name: "Lisbonne",
  country: "Portugal",
  continent: "Europe",
  heroImage: "/lisbon-portugal-colorful-tramway-alfama.jpg",
  description: "Entre fado, azulejos et pastéis de nata, vivez l'âme portugaise.",
  longDescription:
    "Lisbonne charme par sa lumière unique, ses collines et ses façades recouvertes d'azulejos. Avec GOYAGE, explorez la capitale portugaise aux côtés d'hôtes qui vous emmènent dans leurs ateliers cachés, sur les toits pour écouter du fado ou dans les cuisines familiales pour apprendre les secrets des pastéis.",
  highlights: [
    "Balade tramway & fado intimiste dans l'Alfama",
    "Ateliers d'azulejos et de broderie traditionnelle",
    "Cours de cuisine autour des recettes lisboètes",
    "Dégustations de vins et pastelarias emblématiques",
  ],
  experiences: 52,
  hosts: 28,
  rating: 4.9,
  bestTime: "Avril - Octobre",
  language: "Portugais, Anglais",
  currency: "Euro (EUR)",
  timezone: "UTC+0/+1",
}

export default function DestinationLisbonnePage() {
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
