import { Header } from "@/componentes/header"
import { HeroSection } from "@/componentes/hero-section"
import { ProblemSection } from "@/componentes/problem-section"
import { SolutionSection } from "@/componentes/solution-section"
import { HowItWorksSection } from "@/componentes/how-it-works-section"
import { FeaturesSection } from "@/componentes/features-section"
import { IntegrationsSection } from "@/componentes/integrations-section"
import { PricingSection } from "@/componentes/pricing-section"
import { FAQSection } from "@/componentes/faq-section"
import { Footer } from "@/componentes/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <IntegrationsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
