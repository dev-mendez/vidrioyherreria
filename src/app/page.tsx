import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { TrustBadges } from "@/components/site/trust-badges";
import { CatalogSection } from "@/components/site/catalog-section";
import { GlassSimulator } from "@/components/site/glass-simulator";
import { BeforeAfterSection } from "@/components/site/before-after-section";
import { InteractiveEstimator } from "@/components/site/interactive-estimator";
import { ProcessSection } from "@/components/site/process-section";
import { TestimonialsSection } from "@/components/site/testimonials-section";
import { QuoteForm } from "@/components/site/quote-form";
import { Footer } from "@/components/site/footer";
import { WhatsappFab } from "@/components/site/whatsapp-fab";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBadges />
        <CatalogSection />
        <GlassSimulator />
        <BeforeAfterSection />
        <InteractiveEstimator />
        <ProcessSection />
        <TestimonialsSection />
        <QuoteForm />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
