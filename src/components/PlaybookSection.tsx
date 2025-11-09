import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight } from "lucide-react";
import appleLogo from "@/assets/Apple.png";
import googleLogo from "@/assets/Google.svg.png";
import citiLogo from "@/assets/Citi.svg.png";
import playbookCover from "@/assets/Playbook.webp";
import chaseLogo from "@/assets/Chase.png";

export const PlaybookSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="px-4 md:px-10 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <Card className="p-8 md:p-12 bg-card/50 border-border/40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight mb-4">
                  Get Free AI Design Playbook
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Join 1,500+ design leaders and frontiers staying ahead in the age of AI. Each week, you'll get access to curated insights.
                </p>
                <Button variant="cta" size="lg" className="group" asChild>
                  <a href="https://johnrodrigues.substack.com/" target="_blank" rel="noopener noreferrer">
                    Get the Playbook
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 bg-card/30 border-border/40 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                  <div className="text-2xl font-bold mb-2">1,400</div>
                  <div className="text-sm text-muted-foreground">Ready by</div>
                </Card>
                <Card className="p-6 bg-card/30 border-border/40 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                  <div className="text-2xl font-bold mb-2">5,000</div>
                  <div className="text-sm text-muted-foreground">Views</div>
                </Card>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-6">
                  Read by designers from top companies
                </p>
                <div className="flex items-center gap-8 flex-wrap opacity-80">
                  <img className="h-6 w-fit opacity-80" src={appleLogo} alt="Apple" height="24" width="auto" />
                  <img className="h-6 w-fit opacity-80" src={googleLogo} alt="Google" height="24" width="auto" />
                  <img className="h-6 w-fit opacity-80" src={citiLogo} alt="Citi" height="24" width="auto" />
                  <img className="h-6 w-fit opacity-80" src={chaseLogo} alt="Chase" height="24" width="auto" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <img 
                  src={playbookCover} 
                  alt="AI Design Playbook Book Cover"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
