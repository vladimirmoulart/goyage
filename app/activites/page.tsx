import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ActivitiesHero } from "@/components/activities/activities-hero"
import { ActivitiesCategories } from "@/components/activities/activities-categories"
import { ActivitiesGrid } from "@/components/activities/activities-grid"
import { ActivitiesCta } from "@/components/activities/activities-cta"

export default function ActivitesPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <ActivitiesHero />
      <ActivitiesCategories />
      <ActivitiesGrid />
      <ActivitiesCta />
      <Footer />
    </main>
  )
}
