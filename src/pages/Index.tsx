import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { OutcomesSection } from "@/components/OutcomesSection";
import { WhoIsThisFor } from "@/components/WhoIsThisFor";
import { CTASection } from "@/components/CTASection";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vibe Coding Mastermind - Elite Developer Community</title>
        <meta 
          name="description" 
          content="Join an elite community of developers. Transform your coding skills through hands-on projects, expert mentorship, and exclusive networking opportunities." 
        />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        <main>
          <HeroSection />
          <section id="benefits">
            <BenefitsSection />
          </section>
          <section id="outcomes">
            <OutcomesSection />
          </section>
          <section id="who-is-this-for">
            <WhoIsThisFor />
          </section>
          <CTASection />
        </main>
        
        <footer className="border-t border-border py-12 bg-card/30">
          <div className="container px-4 text-center text-sm text-muted-foreground">
            <p>© 2025 Vibe Coding Mastermind. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
