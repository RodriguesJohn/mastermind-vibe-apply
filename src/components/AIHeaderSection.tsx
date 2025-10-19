import { ParticleSphere } from "@/components/ParticleSphere";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const AIHeaderSection = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden border-b border-border/40">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-background" />
      
      {/* Content */}
      <div className="relative z-10 px-4 md:px-10 lg:px-[120px] py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-fade-in order-2 lg:order-1">
            <h2 className="text-4xl md:text-4.5xl font-semibold tracking-tight">
              <span className="text-white block">
                AI Mastery for Designers & Product Leaders 5-Week Cohort
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Stay ahead and upskill today. Design AI products and systems through a structured learning program.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-6">
              <Button variant="default" size="xl" className="group bg-blue-600 hover:bg-blue-700 text-white">
                Enroll Today
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-primary/30 hover:bg-primary/10">
                Login
              </Button>
            </div>
          </div>

          {/* Right Column - Particle Sphere */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <ParticleSphere />
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
