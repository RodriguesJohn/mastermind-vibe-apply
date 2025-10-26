import { BlurFade } from "@/components/BlurFade";
import boltLogo from "@/assets/logos/bolt.png";
import claudeLogo from "@/assets/logos/claude.png";
import cursorLogo from "@/assets/logos/cursor.png";
import lovableLogo from "@/assets/logos/lovable.png";
import v0Logo from "@/assets/logos/v0.png";
import hubspotLogo from "@/assets/logos/hubspot.png";
import intercomLogo from "@/assets/logos/intercom.png";
import jpmorganLogo from "@/assets/logos/jpmorgan.png";
import kingfisherLogo from "@/assets/logos/kingfisher.png";

export const CompanyLogosSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background border-b border-border/40">
      <div className="px-5 sm:px-8 md:px-12 lg:px-20 max-w-5xl mx-auto">
        <BlurFade delay={0.1} duration={0.8} yOffset={10} blur="4px">
          <div className="text-center space-y-6 sm:space-y-8">
            <p className="text-sm sm:text-base text-muted-foreground uppercase tracking-wide font-medium">
              People from these companies have joined
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
              <img 
                src={hubspotLogo} 
                alt="HubSpot" 
                className="h-6 sm:h-8 w-auto opacity-60 hover:opacity-100 transition-opacity" 
              />
              <img 
                src={intercomLogo} 
                alt="Intercom" 
                className="h-6 sm:h-8 w-auto opacity-60 hover:opacity-100 transition-opacity" 
              />
              <img 
                src={jpmorganLogo} 
                alt="JPMorgan Chase" 
                className="h-6 sm:h-8 w-auto opacity-60 hover:opacity-100 transition-opacity" 
              />
              <img 
                src={kingfisherLogo} 
                alt="Kingfisher" 
                className="h-6 sm:h-8 w-auto opacity-60 hover:opacity-100 transition-opacity" 
              />
              <img 
                src={boltLogo} 
                alt="Bolt" 
                className="h-6 sm:h-8 w-auto opacity-60 hover:opacity-100 transition-opacity" 
              />
              <img 
                src={claudeLogo} 
                alt="Claude" 
                className="h-6 sm:h-8 w-auto opacity-60 hover:opacity-100 transition-opacity" 
              />
              <img 
                src={cursorLogo} 
                alt="Cursor" 
                className="h-6 sm:h-8 w-auto opacity-60 hover:opacity-100 transition-opacity" 
              />
              <img 
                src={lovableLogo} 
                alt="Lovable" 
                className="h-6 sm:h-8 w-auto opacity-60 hover:opacity-100 transition-opacity" 
              />
              <img 
                src={v0Logo} 
                alt="V0" 
                className="h-6 sm:h-8 w-auto opacity-60 hover:opacity-100 transition-opacity" 
              />
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};
