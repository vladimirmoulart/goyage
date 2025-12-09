import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DestinationDetailHero } from "@/components/destination-detail/destination-detail-hero"
import { DestinationAbout } from "@/components/destination-detail/destination-about"
import { DestinationExperiences } from "@/components/destination-detail/destination-experiences"
import { DestinationHosts } from "@/components/destination-detail/destination-hosts"
import { DestinationPractical } from "@/components/destination-detail/destination-practical"

const destination = {
  id: "santorini",
  name: "Santorin",
  country: "Grèce",
  continent: "Europe",
  heroImage: "/santorini-greece-white-blue-houses-sunset.jpg",
  description: "Maisons blanches, dômes bleus et couchers de soleil légendaires.",
  longDescription:
    "Santorin est l'île des panoramas à couper le souffle. Derrière les cartes postales se cache une culture cycladique riche : viticulture sur sols volcaniques, cuisine méditerranéenne fraîche et traditions maritimes. Nos hôtes vous accueillent pour des expériences intimistes au cœur des villages perchés.",
  highlights: [
    "Cours de cuisine grecque et dégustations de vins volcaniques",
    "Balades en bateau au coucher du soleil avec un capitaine local",
    "Ateliers de poterie et de mosaïque cycladique",
    "Exploration des villages d'Oia et Pyrgos avec un guide",
  ],
  experiences: 29,
  hosts: 15,
  rating: 4.9,
  bestTime: "Avril - Octobre",
  language: "Grec, Anglais",
  currency: "Euro (EUR)",
  timezone: "UTC+2/+3",
}

export default function DestinationSantoriniPage() {
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
