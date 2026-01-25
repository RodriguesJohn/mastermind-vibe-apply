import { Star } from "lucide-react";
import goldenGateBridge from "@/assets/golden-gate-bridge.jpg";
import TextType from "./TextType";

export const CohortOverviewSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${goldenGateBridge})` }}
      />
      <div 
        className="absolute inset-0 z-0 bg-black/85"
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: '24px',
          fontWeight: 500,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 px-4 md:px-10 lg:px-[120px] py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto text-center space-y-8">
          {/* Stat Badge */}
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-6 py-2 text-sm font-medium text-white border border-white/20">
            <Star className="w-4 h-4 fill-white flex-shrink-0" />
            <TextType 
              texts={["Over 80% of teams are already adopting AI"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />
          </div>
          
          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-white">
              The world is splitting into designers who can build and designers who can't.
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-white">
              Which one will you be?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
