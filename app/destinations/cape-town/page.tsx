import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DestinationDetailHero } from "@/components/destination-detail/destination-detail-hero"
import { DestinationAbout } from "@/components/destination-detail/destination-about"
import { DestinationExperiences } from "@/components/destination-detail/destination-experiences"
import { DestinationHosts } from "@/components/destination-detail/destination-hosts"
import { DestinationPractical } from "@/components/destination-detail/destination-practical"

const destination = {
  id: "cape-town",
  name: "Le Cap",
  country: "Afrique du Sud",
  continent: "Afrique",
  heroImage: "/cape-town-table-mountain.png",
  description: "Entre océan et montagne, une ville arc-en-ciel pleine de contrastes.",
  longDescription:
    "La Mother City mêle culture urbaine, héritage viticole et nature sauvage. GOYAGE vous propose des expériences aux côtés d'hôtes qui vous emmènent surfer à Muizenberg, cuisiner un braai dans les townships, explorer les vignobles ou randonner sur la Table Mountain.",
  highlights: [
    "Randonnées privées sur la Table Mountain au lever du soleil",
    "Ateliers cuisine-braai dans les communautés locales",
    "Dégustations de vins bio dans les vignobles de Stellenbosch",
    "Sorties surf ou kayak avec des instructeurs passionnés",
  ],
  experiences: 33,
  hosts: 18,
  rating: 4.8,
  bestTime: "Novembre - Mars",
  language: "Anglais, Afrikaans",
  currency: "Rand (ZAR)",
  timezone: "UTC+2",
}

export default function DestinationCapeTownPage() {
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
