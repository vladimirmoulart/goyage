import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DestinationDetailHero } from "@/components/destination-detail/destination-detail-hero"
import { DestinationAbout } from "@/components/destination-detail/destination-about"
import { DestinationExperiences } from "@/components/destination-detail/destination-experiences"
import { DestinationHosts } from "@/components/destination-detail/destination-hosts"
import { DestinationPractical } from "@/components/destination-detail/destination-practical"

// Mock destination data
const destinations: Record<
  string,
  {
    id: string
    name: string
    country: string
    continent: string
    heroImage: string
    description: string
    longDescription: string
    highlights: string[]
    experiences: number
    hosts: number
    rating: number
    bestTime: string
    language: string
    currency: string
    timezone: string
  }
> = {
  marrakech: {
    id: "marrakech",
    name: "Marrakech",
    country: "Maroc",
    continent: "Afrique",
    heroImage: "/placeholder.svg?height=800&width=1600",
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
  },
  kyoto: {
    id: "kyoto",
    name: "Kyoto",
    country: "Japon",
    continent: "Asie",
    heroImage: "/placeholder.svg?height=800&width=1600",
    description: "Temples ancestraux, jardins zen et cérémonies du thé vous attendent.",
    longDescription:
      "Ancienne capitale impériale du Japon, Kyoto est le cœur culturel et spirituel du pays. Avec ses 2000 temples et sanctuaires, ses geishas dans le quartier de Gion et ses jardins zen méditatifs, la ville offre un voyage dans le temps. Nos hôtes vous initieront aux traditions japonaises les plus raffinées.",
    highlights: [
      "Plus de 2000 temples et sanctuaires",
      "Cérémonie du thé traditionnelle",
      "Quartier des geishas de Gion",
      "Jardins zen contemplatifs",
    ],
    experiences: 38,
    hosts: 19,
    rating: 4.8,
    bestTime: "Avril (sakura), Nov (momiji)",
    language: "Japonais",
    currency: "Yen (JPY)",
    timezone: "UTC+9",
  },
  lisbonne: {
    id: "lisbonne",
    name: "Lisbonne",
    country: "Portugal",
    continent: "Europe",
    heroImage: "/placeholder.svg?height=800&width=1600",
    description: "Entre fado, azulejos et pastéis de nata, vivez l'âme portugaise.",
    longDescription:
      "Lisbonne, la ville aux sept collines, charme par sa lumière unique, ses ruelles pavées et son ambiance mélancolique. Du quartier historique d'Alfama aux soirées fado, en passant par les délicieux pastéis de nata, chaque moment est une invitation à la douceur de vivre portugaise.",
    highlights: [
      "Quartier historique d'Alfama",
      "Soirées fado authentiques",
      "Azulejos centenaires",
      "Gastronomie locale",
    ],
    experiences: 52,
    hosts: 28,
    rating: 4.9,
    bestTime: "Avril - Octobre",
    language: "Portugais",
    currency: "Euro (EUR)",
    timezone: "UTC+0/+1",
  },
  bali: {
    id: "bali",
    name: "Bali",
    country: "Indonésie",
    continent: "Asie",
    heroImage: "/placeholder.svg?height=800&width=1600",
    description: "Rizières en terrasses, temples hindous et spiritualité balinaise.",
    longDescription:
      "L'île des Dieux enchante par sa beauté naturelle et sa richesse spirituelle. Des rizières en terrasses d'Ubud aux temples majestueux, Bali offre une expérience unique où tradition et nature se mêlent harmonieusement. Nos hôtes balinais vous ouvriront les portes de leur culture millénaire.",
    highlights: [
      "Rizières en terrasses d'Ubud",
      "Temples hindous sacrés",
      "Cérémonies traditionnelles",
      "Yoga et bien-être",
    ],
    experiences: 67,
    hosts: 35,
    rating: 4.8,
    bestTime: "Avril - Octobre (saison sèche)",
    language: "Indonésien, Balinais",
    currency: "Roupie (IDR)",
    timezone: "UTC+8",
  },
}

export default async function DestinationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const destination = destinations[id] || destinations.marrakech

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
