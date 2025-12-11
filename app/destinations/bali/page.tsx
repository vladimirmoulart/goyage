import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DestinationDetailHero } from "@/components/destination-detail/destination-detail-hero"
import { DestinationAbout } from "@/components/destination-detail/destination-about"
import { DestinationExperiences } from "@/components/destination-detail/destination-experiences"
import { DestinationHosts } from "@/components/destination-detail/destination-hosts"
import { DestinationPractical } from "@/components/destination-detail/destination-practical"
import { destinationDetailData } from "@/lib/destinations"

const destination = destinationDetailData.bali

export default function DestinationBaliPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <DestinationDetailHero destination={destination} />
      <DestinationAbout destination={destination} />
      <DestinationExperiences
        destinationName={destination.name}
        locationLabel={destination.locationLabel}
        destinationId={destination.id}
      />
      <DestinationHosts destinationName={destination.name} locationLabel={destination.locationLabel} />
      <DestinationPractical destination={destination} />
      <Footer />
    </main>
  )
}
