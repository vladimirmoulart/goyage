import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ActivityDetailHero } from "@/components/activities/activity-detail-hero"
import { ActivityHighlights } from "@/components/activities/activity-highlights"
import { ActivitySchedule } from "@/components/activities/activity-schedule"
import { ActivityIncludes } from "@/components/activities/activity-includes"
import { ActivityHostCard } from "@/components/activities/activity-host-card"
import { activitiesData } from "@/lib/activities"

export default async function ActivityDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const activity = activitiesData[id] || activitiesData["1"]

  return (
    <main className="min-h-screen bg-cream">
      <Header />

      <ActivityDetailHero activity={activity} />

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <ActivityHighlights activity={activity} />
            <ActivitySchedule activity={activity} />
            <ActivityIncludes activity={activity} />
          </div>
          <ActivityHostCard activity={activity} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
