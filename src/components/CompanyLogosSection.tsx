import boltLogo from "@/assets/logos/bolt.png";
import claudeLogo from "@/assets/logos/claude.png";
import cursorLogo from "@/assets/logos/cursor.png";
import lovableLogo from "@/assets/logos/lovable.png";
import v0Logo from "@/assets/logos/v0.png";
import intercomLogo from "@/assets/logos/intercom.png";
import chaseLogo from "@/assets/Chase.png";
import kingfisherLogo from "@/assets/logos/kingfisher.png";

interface CompanyLogosSectionProps {
  variant?: "light" | "dark";
}

export const CompanyLogosSection = ({ variant = "light" }: CompanyLogosSectionProps) => {
  const isDark = variant === "dark";
  
  return (
    <section className={`py-12 sm:py-16 md:py-20 ${isDark ? "bg-black border-b border-white/10" : "bg-background border-b border-border/40"}`}>
      <div className="px-5 sm:px-8 md:px-12 lg:px-20 max-w-5xl mx-auto">
        <div className="text-center">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
            <img 
              src="HubSpot_Logo.svg"
              alt="HubSpot" 
              className={`h-6 sm:h-8 w-auto ${isDark ? "brightness-0 invert opacity-40 hover:opacity-90" : "opacity-60 hover:opacity-100"} transition-opacity`}
            />
            <img 
              src={intercomLogo} 
              alt="Intercom" 
              className={`h-6 sm:h-8 w-auto ${isDark ? "brightness-0 invert opacity-40 hover:opacity-90" : "opacity-60 hover:opacity-100"} transition-opacity`}
            />
           
            <img 
              src={kingfisherLogo} 
              alt="Kingfisher" 
              className={`h-6 sm:h-8 w-auto ${isDark ? "brightness-0 invert opacity-40 hover:opacity-90" : "opacity-60 hover:opacity-100"} transition-opacity`}
            />
            <img 
              src={chaseLogo}
              alt="Chase" 
              className={`h-6 sm:h-8 w-auto ${isDark ? "brightness-0 invert opacity-40 hover:opacity-90" : "opacity-60 hover:opacity-100"} transition-opacity`}
            />
           
           
            
           
            
          </div>
        </div>
      </div>
    </section>
  );
};
