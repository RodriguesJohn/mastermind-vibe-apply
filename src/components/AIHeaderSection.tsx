import { ParticleSphere } from "@/components/ParticleSphere";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const AIHeaderSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-border/40">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-background" />
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                AI Mastery
              </span>
              <span className="block mt-2 text-4xl md:text-5xl">
                for Product Designers
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Stay ahead and upskill today. Design AI products and systems through a structured learning program.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-6">
              <Button variant="cta" size="xl" className="group">
                Enroll Today
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-primary/30 hover:bg-primary/10">
                Talk to our AI Agent
              </Button>
            </div>
          </div>

          {/* Right Column - Particle Sphere */}
          <div className="hidden lg:flex items-center justify-center">
            <ParticleSphere />
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
