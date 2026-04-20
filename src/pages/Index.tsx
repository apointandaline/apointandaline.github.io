import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyCTA } from "@/components/StickyCTA";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Approach } from "@/components/sections/Approach";
import { HowItWorks } from "@/components/sections/HowItWorks";

import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
      <StickyCTA />
    </div>
  );
};

export default Index;
