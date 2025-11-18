import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SetupSteps from "@/components/SetupSteps";
import Features from "@/components/Features";
import PrintAnywhere from "@/components/PrintAnywhere";
import Pricing from "@/components/Pricing";
import Guide from "@/components/Support";
import TrustBadges from "@/components/TrustBadges";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Disc from "@/components/Disc";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SetupSteps />
        <Features />
        <PrintAnywhere />
        <Pricing />
        <Guide />
        <TrustBadges />
        <Testimonials />
      </main>
      <Footer />
      <Disc />
    </div>
  );
};

export default Index;
