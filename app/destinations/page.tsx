import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DestinationsHero } from "@/components/destinations/destinations-hero"
import { DestinationsGrid } from "@/components/destinations/destinations-grid"
import { DestinationsFilters } from "@/components/destinations/destinations-filters"
import { PopularRegions } from "@/components/destinations/popular-regions"

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <DestinationsHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <DestinationsFilters />
        <DestinationsGrid />
      </div>
      <PopularRegions />
      <Footer />
    </main>
  )
}
