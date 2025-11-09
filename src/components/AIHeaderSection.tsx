import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ParticleSphere } from "./ParticleSphere";

export const AIHeaderSection = () => {
  const stars = Array.from({ length: 5 });

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-black text-white border-b border-white/10 w-full z-0">
      {/* Subtle glow/shader effect with motion */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.25)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" 
        style={{ animation: "glowMove 8s ease-in-out infinite" }}
        aria-hidden="true" 
      />
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.2)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" 
        style={{ animation: "glowPulse 6s ease-in-out infinite" }}
        aria-hidden="true" 
      />
      
      <div className="px-4 md:px-10 lg:px-[120px] relative z-10 w-full">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-[minmax(0,_1fr)_minmax(280px,_420px)] gap-12 items-center">
            <div>
            {/* Local keyframes for subtle star wave */}
            <style>
              {`
                @keyframes starWave { 
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-2px); }
                }
                @keyframes iconPulse { 
                  0%, 100% { transform: scale(1); opacity: 0.6; }
                  50% { transform: scale(1.1); opacity: 0.8; }
                }
                @keyframes blurEntrance {
                  0% {
                    opacity: 0;
                    filter: blur(10px);
                    transform: translateY(10px);
                  }
                  100% {
                    opacity: 1;
                    filter: blur(0);
                    transform: translateY(0);
                  }
                }
                @keyframes glowMove {
                  0%, 100% {
                    transform: translate(0, 0) scale(1);
                    opacity: 0.25;
                  }
                  50% {
                    transform: translate(20px, -30px) scale(1.1);
                    opacity: 0.35;
                  }
                }
                @keyframes glowPulse {
                  0%, 100% {
                    transform: scale(1);
                    opacity: 0.2;
                  }
                  50% {
                    transform: scale(1.15);
                    opacity: 0.3;
                  }
                }
              `}
            </style>

            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-medium tracking-wider uppercase flex items-center gap-1">
                {stars.map((_, i) => (
                  <span
                    key={i}
                    className="text-yellow-400 inline-block"
                    style={{ animation: "starWave 1.6s ease-in-out infinite", animationDelay: `${i * 0.12}s` }}
                  >
                    ★
                  </span>
                ))}
                <span className="text-white/60 ml-1">on Maven</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-[40px] font-medium mb-4 tracking-tight leading-tight">
              AI Mastery For Designers
              <span className="block">and Product Leaders Cohort</span>
            </h1>

            <p className="text-lg md:text-medium text-white/60 font-light mb-14 leading-relaxed max-w-3xl">
              Stay ahead and upskill today. Learn how to design AI apps and systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="cta" 
                size="lg"
                className="group"
                asChild
              >
                <a 
                  href="https://maven.com/productlearnio/aiproductdesignmasterycohort"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enroll in the cohort
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <a 
                  href="https://cal.com/aidesignacademy/15min?overlayCalendar=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book an info call
                </a>
              </Button>
            </div>

            {/* KPIs */}
            <div className="flex justify-start mt-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                <div 
                  className="flex flex-col items-start text-left"
                  style={{ animation: "blurEntrance 0.8s ease-out forwards", animationDelay: "0.1s", opacity: 0 }}
                >
                  <div className="mb-1">
                    <span className="text-lg md:text-xl font-semibold text-white/70">6+</span>
                  </div>
                  <span className="text-xs text-white/60">
                    Completed<br />Design Projects
                  </span>
                </div>
                
                <div 
                  className="flex flex-col items-start text-left"
                  style={{ animation: "blurEntrance 0.8s ease-out forwards", animationDelay: "0.2s", opacity: 0 }}
                >
                  <div className="mb-1">
                    <span className="text-lg md:text-xl font-semibold text-white/70">3</span>
                  </div>
                  <span className="text-xs text-white/60">Cohorts Ran</span>
                </div>
                
                <div 
                  className="flex flex-col items-start text-left"
                  style={{ animation: "blurEntrance 0.8s ease-out forwards", animationDelay: "0.3s", opacity: 0 }}
                >
                  <div className="mb-1">
                    <span className="text-lg md:text-xl font-semibold text-white/70">22</span>
                  </div>
                  <span className="text-xs text-white/60">Community<br />Members</span>
                </div>
                
                <div 
                  className="flex flex-col items-start text-left"
                  style={{ animation: "blurEntrance 0.8s ease-out forwards", animationDelay: "0.4s", opacity: 0 }}
                >
                  <div className="mb-1">
                    <span className="text-lg md:text-xl font-semibold text-white/70">5/5</span>
                  </div>
                  <span className="text-xs text-white/60">
                    Cohort Rating<br />on Maven
                  </span>
                </div>
              </div>
            </div>
            </div>

            <div className="hidden lg:flex justify-center relative">
              <div className="absolute -inset-8 bg-[radial-gradient(circle,_rgba(46,114,255,0.18)_0%,_rgba(0,0,0,0)_70%)] blur-3xl" aria-hidden="true" />
              <ParticleSphere size="sm" className="relative z-10 max-w-[320px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
