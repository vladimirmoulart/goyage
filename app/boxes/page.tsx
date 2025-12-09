import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BoxesHero } from "@/components/boxes/boxes-hero"
import { BoxesCategories } from "@/components/boxes/boxes-categories"
import { BoxesGrid } from "@/components/boxes/boxes-grid"
import { BoxesHowItWorks } from "@/components/boxes/boxes-how-it-works"
import { BoxesGiftSection } from "@/components/boxes/boxes-gift-section"

export default function BoxesPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <BoxesHero />
      <BoxesCategories />
      <BoxesGrid />
      <BoxesHowItWorks />
      <BoxesGiftSection />
      <Footer />
    </main>
  )
}
