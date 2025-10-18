import { Star } from "lucide-react";
import goldenGateBridge from "@/assets/golden-gate-bridge.jpg";

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
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Stat Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-medium text-white border border-white/20">
            <Star className="w-4 h-4 fill-white" />
            80% of Organizations Are Adapting to AI
          </div>
          
          {/* Main Content */}
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Many designers are overwhelmed by the rapid changes in AI and product design, often lacking the structured, hands-on learning and community support needed to keep up. This 4-week cohort is designed to provide the guidance, expert feedback, and real project experience essential to confidently create AI products and build a strong portfolio. With demand for AI product designers rising and the market booming, this program helps designers stay ahead by mastering in-demand skills and connecting with a leading design community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
