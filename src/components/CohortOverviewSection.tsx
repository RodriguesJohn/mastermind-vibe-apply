import { Star } from "lucide-react";
import goldenGateBridge from "@/assets/golden-gate-bridge.jpg";
import { BlurFade } from "@/components/BlurFade";

export const CohortOverviewSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${goldenGateBridge})` }}
      />
      <div className="absolute inset-0 z-0 bg-black/85" />
      
      {/* Content */}
      <div className="relative z-10 px-4 md:px-10 lg:px-[120px] py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto text-center space-y-8">
          {/* Stat Badge */}
          <BlurFade delay={0.2} duration={0.8} yOffset={15} blur="6px">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-6 py-2 text-sm font-medium text-white border border-white/20">
              <Star className="w-4 h-4 fill-white" />
              80% of Organizations Are Adapting to AI
            </div>
          </BlurFade>
          
          {/* Main Content */}
          <BlurFade delay={0.4} duration={0.8} yOffset={20} blur="8px">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed line-height-1.4">
                Many designers are overwhelmed by the rapid changes in AI and product design, often lacking the structured, hands-on learning and community support needed to keep up. This 5-week cohort is designed to provide the guidance, expert feedback, and real project experience essential to confidently create AI products and build a strong portfolio. With demand for AI product designers rising and the market booming, this program helps designers stay ahead by mastering in-demand skills and connecting with a leading design community.
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};
