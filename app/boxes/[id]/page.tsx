import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BoxDetailHero } from "@/components/boxes/box-detail-hero"
import { BoxExperiences } from "@/components/boxes/box-experiences"
import { BoxHosts } from "@/components/boxes/box-hosts"
import { BoxReviews } from "@/components/boxes/box-reviews"
import { BoxFaq } from "@/components/boxes/box-faq"
import { BoxSimilar } from "@/components/boxes/box-similar"
import { BoxBookingCard } from "@/components/boxes/box-booking-card"

export default async function BoxDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <BoxDetailHero boxId={id} />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[minmax(0,1fr)_360px] gap-10">
          <div className="space-y-12">
            <BoxExperiences boxId={id} />
            <BoxHosts boxId={id} />
            <BoxReviews />
            <BoxFaq />
          </div>
          <div className="lg:sticky lg:top-28">
            <BoxBookingCard boxId={id} />
          </div>
        </div>
      </section>

      <BoxSimilar currentBoxId={id} />
      <Footer />
    </main>
  )
}
