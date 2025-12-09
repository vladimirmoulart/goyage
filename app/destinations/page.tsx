import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DestinationsFilters } from "@/components/destinations/destinations-filters"
import { DestinationsGrid } from "@/components/destinations/destinations-grid"
import { PopularRegions } from "@/components/destinations/popular-regions"
import DestinationsHero from "@/components/destinations/destinations-hero"

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <DestinationsHero />
      <div id="destinations-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <DestinationsFilters />
        <DestinationsGrid />
      </div>
      <PopularRegions />
      <Footer />
    </main>
  )
}
