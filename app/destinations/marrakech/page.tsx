import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DestinationDetailHero } from "@/components/destination-detail/destination-detail-hero"
import { DestinationAbout } from "@/components/destination-detail/destination-about"
import { DestinationExperiences } from "@/components/destination-detail/destination-experiences"
import { DestinationHosts } from "@/components/destination-detail/destination-hosts"
import { DestinationPractical } from "@/components/destination-detail/destination-practical"

const destination = {
  id: "marrakech",
  name: "Marrakech",
  country: "Maroc",
  continent: "Afrique",
  heroImage: "/maroc.png",
  description: "Laissez-vous envoûter par les souks, les riads et la magie de la médina.",
  longDescription:
    "Marrakech, la ville rouge, est une destination qui éveille tous les sens. Des ruelles sinueuses de la médina aux jardins luxuriants, en passant par la célèbre place Jemaa el-Fna, chaque coin de rue révèle une nouvelle surprise. Nos hôtes locaux vous feront découvrir les secrets les mieux gardés de cette ville millénaire.",
  highlights: [
    "Médina historique classée UNESCO",
    "Artisanat traditionnel dans les souks",
    "Cuisine marocaine authentique",
    "Architecture des riads",
  ],
  experiences: 45,
  hosts: 23,
  rating: 4.9,
  bestTime: "Mars - Mai, Sept - Nov",
  language: "Arabe, Français",
  currency: "Dirham (MAD)",
  timezone: "UTC+1",
}

export default function DestinationMarrakechPage() {
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
