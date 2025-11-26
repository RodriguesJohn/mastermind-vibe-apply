import { Check } from "lucide-react";

const outcomes = [
  "Learn Cursor and feel confident using AI-powered development tools",
  "Prototype a mobile app from scratch with hands-on guidance",
  "Create an AI recipe generator app as your portfolio project",
];

export const OutcomesSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-black border-b border-white/10">
      {/* Shader effects */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(34,84,246,0.3)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" 
        style={{ animation: "glowMove 8s ease-in-out infinite" }}
        aria-hidden="true" 
      />
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(147,51,234,0.25)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none" 
        style={{ animation: "glowPulse 6s ease-in-out infinite" }}
        aria-hidden="true" 
      />
      
      <div className="px-4 md:px-10 lg:px-[120px] relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What You'll Achieve
            </h2>
            <p className="text-xl text-white/60">
              Transform your skills and career trajectory
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Card glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 relative z-10">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <p className="text-lg leading-relaxed text-white relative z-10">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes glowMove {
          0%, 100% { opacity: 0.3; transform: translate(0, 0) scale(1); }
          50% { opacity: 0.5; transform: translate(30px, 30px) scale(1.1); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
};
