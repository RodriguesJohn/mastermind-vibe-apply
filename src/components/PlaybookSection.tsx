import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const PlaybookSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(168,85,247,0.1)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" />
      
      <div className="px-4 md:px-10 lg:px-[120px] relative z-10">
        <div className="max-w-6xl mx-auto">
          <Card className="p-8 md:p-12 bg-card/50 border-border/40">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
              {/* Left Column: Content */}
              <div className="space-y-8 text-left">
                <div className="space-y-6">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.1]">
                    Watch the Lightning Lesson
                  </h2>
                  <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                    Learn where to get started with AI, how AI is changing product design, and the skills you need to stay relevant in the agentic world.
                  </p>
                </div>

                <div className="pt-4 max-w-md w-full">
                  <Button 
                    size="lg" 
                    variant="cta" 
                    className="w-full h-12 px-8 font-medium" 
                    asChild
                  >
                    <a href="https://maven.com/p/9022e6/ai-product-design-masterclass" target="_blank" rel="noopener noreferrer">
                      Watch Lightning Lesson
                      <Play className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Column: Stylized Book Cover */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-[2/3] lg:aspect-[3/4] min-h-[500px] bg-[#1A1A1A] dark:bg-card rounded-xl border border-border/40 p-2 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 flex items-center justify-center overflow-hidden group">
                  {/* Book Spine Effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white/10 to-transparent z-20 pointer-events-none" />
                  
                  {/* Book Cover Content */}
                  <div className="absolute inset-2 bg-background rounded-lg flex flex-col items-center justify-center text-center p-8 border border-border/40 min-h-[calc(100%-1rem)]">
                    <div className="uppercase tracking-[0.2em] text-muted-foreground text-sm mb-4 font-medium">Maven</div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-[0.9] tracking-tighter mb-2">
                      LIGHTNING<br />LESSON
                    </h2>
                    <div className="mt-8 w-12 h-1 bg-muted-foreground/20 rounded-full" />
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
