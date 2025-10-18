import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight } from "lucide-react";
import playbookCover from "@/assets/ai-playbook-cover.jpg";

export const PlaybookSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <Card className="max-w-6xl mx-auto p-8 md:p-12 bg-card/50 border-border/40">
          <div className="flex items-start gap-2 mb-8">
            <Users className="w-6 h-6 text-muted-foreground" />
            <div className="flex-1 flex gap-2 justify-end">
              <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                  Get Free AI Design Playbook
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Join 1,000+ design leaders and frontiers staying ahead in the age of AI. Each week, you'll get access to curated insights.
                </p>
                <Button variant="cta" size="lg" className="group">
                  Get the Playbook
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 bg-card/30 border-border/40 text-center">
                  <div className="text-4xl font-bold mb-2">1,400</div>
                  <div className="text-sm text-muted-foreground">Ready by</div>
                </Card>
                <Card className="p-6 bg-card/30 border-border/40 text-center">
                  <div className="text-4xl font-bold mb-2">5,000</div>
                  <div className="text-sm text-muted-foreground">Views</div>
                </Card>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-6">
                  Read by designers from top companies
                </p>
                <div className="flex items-center gap-8 flex-wrap opacity-60">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                  <span className="font-bold text-xl">Google</span>
                  <span className="font-bold text-xl text-primary">citi</span>
                  <span className="font-bold text-xl">J.P.Morgan</span>
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
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
    </section>
  );
};
