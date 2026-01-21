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
          <div className="space-y-6">
            <div 
              className="max-w-3xl mx-auto font-medium text-white space-y-4"
              style={{
                letterSpacing: '0',
                fontSize: '16px',
                lineHeight: '1.6'
              }}
            >
              <p>
                The shift to AI-native product design is moving fast, and many designers lack the structure, guidance, and feedback needed to keep up. Most AI learning is either too theoretical or too fragmented to apply to real work. Understanding AI is one thing. Building real AI-powered products is another. That's where vibe coding bridges the gap between static screens and functional products.
              </p>
              <p>
                Product managers and developers are already vibing. Designers need to catch up so you don't become the bottleneck and instead drive impact.
              </p>
              <p>
                This 2-week focused cohort gives you a clear, end-to-end framework, live feedback, and hands-on practice to design and ship real AI products. In two weeks, you'll publish a web app, build a mobile app prototype, and gain a repeatable system for AI-native product design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
