import { Navigation } from "@/components/Navigation";
import { AIHeaderSectionCopy } from "@/components/AIHeaderSectionCopy";
import { CohortOverviewSection } from "@/components/CohortOverviewSection";
import { CohortModulesSectionCopy } from "@/components/CohortModulesSectionCopy";
import { CohortTestimonialsSection } from "@/components/CohortTestimonialsSection";
import { CohortStatsSectionCopy } from "@/components/CohortStatsSectionCopy";
import { PlaybookSection } from "@/components/PlaybookSection";
import { MentorPricingSectionCopy } from "@/components/MentorPricingSectionCopy";
import { Helmet } from "react-helmet";
import LogoCloud from "@/components/LogoCloud";
import CohortCompanyLogos from "@/components/CohortCompanyLogos";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { StardustButton } from "@/components/ui/stardust-button";

// Import all Tools logos
import cursorLogo from "@/assets/Tools/cursor.png";
import claudeLogo from "@/assets/Tools/Claude.png";
import googleAILogo from "@/assets/Tools/GoogleAI.png";
import loveableLogo from "@/assets/Tools/Loveable.png";
import supabaseLogo from "@/assets/Tools/Superbase.png";
import vercelLogo from "@/assets/Tools/Vercel.png";
import image2 from "@/assets/Tools/image 2.png";
import image4 from "@/assets/Tools/image 4.png";
import image5 from "@/assets/Tools/image 5.png";
import image7 from "@/assets/Tools/image 7.png";
import image13 from "@/assets/Tools/image 13.png";

const toolsLogos = [
  { src: cursorLogo, alt: "Cursor" },
  { src: claudeLogo, alt: "Claude" },
  { src: googleAILogo, alt: "Google AI" },
  { src: loveableLogo, alt: "Loveable" },
  { src: supabaseLogo, alt: "Supabase" },
  { src: vercelLogo, alt: "Vercel" },
  { src: image2, alt: "Tool" },
  { src: image4, alt: "Tool" },
  { src: image5, alt: "Tool" },
  { src: image7, alt: "Tool" },
  { src: image13, alt: "Tool" },
];

const CohortCopy = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return <>
      <Helmet>
        <title>AI Mastery for Designers & Product Leaders 3-Week Cohort</title>
        <meta name="description" content="Join our coding cohort and learn with a community of developers." />
      </Helmet>

      <div className="min-h-screen">
        {/* Top Banner - Hidden */}
        <Navigation />
        <main>
          <AIHeaderSectionCopy />
          <CohortCompanyLogos />
          <CohortTestimonialsSection title="Kind Words" />
          <MentorPricingSectionCopy />

          <LogoCloud logos={toolsLogos} />

          <CohortOverviewSection />
          <CohortStatsSectionCopy />
          <CohortModulesSectionCopy />

          <PlaybookSection />

        </main>

        {/* Sticky Bottom Bar */}
        <div className="fixed bottom-0 left-0 right-0 z-50 py-3 px-4 sm:px-6 bg-black/80 backdrop-blur-xl border-t border-white/10">
          <div className="container mx-auto flex items-center justify-center sm:justify-between">
            <p className="text-white/60 text-sm hidden sm:block">
              Ready to master AI design workflows?
            </p>
            <div className="scale-[0.65] sm:scale-75 origin-center sm:origin-right">
              <StardustButton href="https://www.skool.com/ai-design-academy-6114">
                Join the Academy
              </StardustButton>
            </div>
          </div>
        </div>

{/* Floating Chat Button - Hidden
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
        */}
      </div>
    </>;
};

export default CohortCopy;
