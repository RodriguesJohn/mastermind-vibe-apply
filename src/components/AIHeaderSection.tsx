import { ParticleSphere } from "@/components/ParticleSphere";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ShaderBackground } from "@/components/AdvancedShaderBackground";
import { BlurFade } from "@/components/BlurFade";

export const AIHeaderSection = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden border-b border-border/40">
      {/* Advanced Shader Background */}
      <ShaderBackground />
      
      {/* Content */}
      <div className="relative z-10 px-4 md:px-10 lg:px-[120px] py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-6 animate-fade-in order-2 lg:order-1">
                <BlurFade delay={0.2} duration={0.8} yOffset={20} blur="8px">
                  <h2 className="text-4xl md:text-4.5xl font-semibold tracking-tight leading-[1.1]">
                    <span className="text-white block">
                      AI Mastery for Designers & Product Leaders 5-Week Cohort
                    </span>
                  </h2>
                </BlurFade>
                
                <BlurFade delay={0.4} duration={0.8} yOffset={15} blur="6px">
                  <p className="text-xl md:text-2xl text-white/75 max-w-2xl leading-relaxed">
                    Stay ahead and upskill today. Design AI products and systems through a structured learning program.
                  </p>
                </BlurFade>
                
                <BlurFade delay={0.6} duration={0.8} yOffset={10} blur="4px">
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-6">
                    <Button variant="default" size="xl" className="group bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 border border-white/10" asChild>
                      <a href="https://maven.com/productlearnio/aiproductdesignmasterycohort" target="_blank" rel="noopener noreferrer">
                        Enroll Today
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button variant="outline" size="xl" className="border-white/10 text-white/80 hover:bg-white/5" asChild>
                      <a href="https://cal.com/aidesignacademy/15min?overlayCalendar=true" target="_blank" rel="noopener noreferrer">
                        Book a Call
                      </a>
                    </Button>
                  </div>
                </BlurFade>
              </div>

          {/* Right Column - Particle Sphere */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <ParticleSphere />
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
};
