import AnimatedHero from "@/components/animated-hero"
import Navbar from "@/components/navbar"
import TrustedBySection from "@/components/trusted-by-section"
import ServicesSection from "@/components/services-section"
import WorkSection from "@/components/work-section"
import WhyBitMaNSection from "@/components/why-bitmaN-section"
import CTABanner from "@/components/cta-banner"
import { ClientOnly } from "@/components/client-only"
import ResponsiveTestimonials from "@/components/responsive-testimonials"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <div className="flex flex-col">
        <AnimatedHero />
        <TrustedBySection />
        <ServicesSection />
        <WorkSection />
        <WhyBitMaNSection />
        <ClientOnly>
          <ResponsiveTestimonials />
        </ClientOnly>
        <CTABanner />
        <Footer />
      </div>
    </main>
  )
}
