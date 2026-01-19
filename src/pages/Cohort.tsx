import { Navigation } from "@/components/Navigation";
import { AIHeaderSection } from "@/components/AIHeaderSection";
import { CohortOverviewSection } from "@/components/CohortOverviewSection";
import { CohortModulesSection } from "@/components/CohortModulesSection";
import { CohortTestimonialsSection } from "@/components/CohortTestimonialsSection";
import { CohortStatsSection } from "@/components/CohortStatsSection";
import { InstructorSection } from "@/components/InstructorSection";
import { PlaybookSection } from "@/components/PlaybookSection";
import { Helmet } from "react-helmet";
import LogoCloud from "@/components/LogoCloud";
import CohortCompanyLogos from "@/components/CohortCompanyLogos";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
const Cohort = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return <>
      <Helmet>
        <title>AI Mastery for Designers & Product Leaders 3-Week Cohort</title>
        <meta name="description" content="Join our coding cohort and learn with a community of developers." />
      </Helmet>

      <div className="min-h-screen">
        {/* Top Banner */}
        <div className="bg-primary/10 border-b border-primary/20 py-2 px-4">
          <div className="max-w-[1200px] mx-auto text-center">
            <p className="text-sm md:text-base text-foreground font-medium">
              The next cohort starts on February 7th, 2026
            </p>
          </div>
        </div>
        <Navigation />
        <main>
          <AIHeaderSection />
          <CohortCompanyLogos />
          <CohortTestimonialsSection />

          <LogoCloud />

          <CohortOverviewSection />
          <CohortStatsSection />
          <CohortModulesSection />
          <InstructorSection />
          
          <PlaybookSection />
          
        </main>

        {/* Floating Chat Button */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button 
              className="fixed bottom-6 right-6 z-50 rounded-lg px-6 py-3 shadow-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              size="lg"
              variant="ghost"
            >
              <MessageCircle className="h-5 w-5 text-white" />
              <span className="text-white font-medium">Talk to John.ai</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl w-[95vw] h-[85vh] sm:h-[80vh] p-0 bg-black border-white/20 rounded-lg overflow-hidden">
            <div className="w-full h-full relative">
              <iframe
                src="https://www.delphi.ai/john-rodrigues"
                className="w-full h-full border-0 rounded-lg"
                title="Chat with John.ai"
                allow="clipboard-read; clipboard-write"
                loading="lazy"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>;
};
export default Cohort;