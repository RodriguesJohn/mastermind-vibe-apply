import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ParticleSphere } from "@/components/ParticleSphere";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-background" />
      
      {/* Particle Sphere */}
      <ParticleSphere />
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl text-left space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
              Invite Only
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Vibe Coding
            <span className="block bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Mastermind
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            Elevate your coding skills and join an elite community of developers
            building the future. Transform your potential into mastery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center pt-6">
            <Button 
              variant="cta" 
              size="xl"
              className="group"
            >
              Apply Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-primary/30 hover:bg-primary/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
