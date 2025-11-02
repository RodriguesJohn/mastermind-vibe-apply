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
      <div className="relative z-10 px-4 md:px-10 lg:px-[120px] py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
                Invite only
              </span>
            </div>
            
            <h1 className="text-2xl md:text-4xl font-semibold tracking-tight">
              AI Academy
              <span className="block bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                Membership.
              </span>
            </h1>
            
            <ul className="text-lg text-foreground max-w-2xl space-y-3">
              <li>✅ Live sessions with industry experts & access recorded library.</li>
              <li>✅ Bi-weekly live Q&A and office hours. See behind the scenes and unlock your next steps</li>
              <li>✅ Showcase your projects, get feedback, and learn from peers.</li>
              <li>✅ Join a community building the next wave of AI-powered services & products.</li>
              <li>✅ Briefing on the latest tools, updates, and industry trends</li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-6">
              <Button variant="cta" size="xl" className="group" asChild>
                <a href="https://tally.so/r/wLQokj" target="_blank" rel="noopener noreferrer">
                  Request Invite
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
            
          </div>

          {/* Right Column - Particle Sphere */}
          <div className="flex items-center justify-center">
            <ParticleSphere />
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};