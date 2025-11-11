import { Star } from "lucide-react";
import goldenGateBridge from "@/assets/golden-gate-bridge.jpg";

export const CohortOverviewSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${goldenGateBridge})` }}
      />
      <div className="absolute inset-0 z-0 bg-black/85" />
      
      {/* Content */}
      <div className="relative z-10 px-4 md:px-10 lg:px-[120px] py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto text-center space-y-8">
          {/* Stat Badge */}
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-6 py-2 text-sm font-medium text-white border border-white/20">
            <Star className="w-4 h-4 fill-white flex-shrink-0" />
            <span>80% of Organizations Are Adapting to AI</span>
          </div>
          
          {/* Main Content */}
          <div className="space-y-6">
            <p 
              className="max-w-3xl mx-auto font-medium text-white"
              style={{
                letterSpacing: '0',
                fontSize: '16px',
                lineHeight: '1.6'
              }}
            >
              Many designers and product leaders are overwhelmed by the rapid changes in AI and product design, often lacking the structured, hands-on learning and community support needed to keep up. This 4-week cohort is designed to provide the guidance, expert feedback, and real project experience essential to confidently create AI products. With demand for AI product designers and product leaders rising and the market booming, this program helps designers and product leaders stay ahead by mastering in-demand skills and connecting with a leading design community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
