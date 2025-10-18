import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ParticleSphere } from "@/components/ParticleSphere";
import cursorLogo from "@/assets/logos/cursor.png";
import lovableLogo from "@/assets/logos/lovable.png";
import v0Logo from "@/assets/logos/v0.png";
import boltLogo from "@/assets/logos/bolt.png";
import claudeLogo from "@/assets/logos/claude.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-background" />
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
                Invite only
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
              Vibe Coding
              <span className="block bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                Mastermind
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              Don't just create static products, create functional prototypes, demos and delightful interactions while learning coding with AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-6">
              <Button variant="cta" size="xl" className="group">
                Request Invite
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-primary/30 hover:bg-primary/10">
                Learn More
              </Button>
            </div>
            
            {/* AI Coding Tools */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-sm text-muted-foreground">Learn tools like</span>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-sm text-foreground/70">
                  <img src={cursorLogo} alt="Cursor" className="w-5 h-5" />
                  <span>Cursor</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-foreground/70">
                  <img src={lovableLogo} alt="Lovable" className="w-5 h-5" />
                  <span>Lovable</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-foreground/70">
                  <img src={v0Logo} alt="v0" className="w-5 h-5" />
                  <span>v0</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-foreground/70">
                  <img src={boltLogo} alt="Bolt" className="w-5 h-5" />
                  <span>Bolt</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-foreground/70">
                  <img src={claudeLogo} alt="Claude" className="w-5 h-5" />
                  <span>Claude</span>
                </div>
              </div>
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