import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { FeaturedExperiences } from "@/components/featured-experiences"
import { Testimonials } from "@/components/testimonials"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <HeroSection />
      <HowItWorks />
      <FeaturedExperiences />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  )
}
