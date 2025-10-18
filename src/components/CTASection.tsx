import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent" />
      
      <div className="px-4 md:px-10 lg:px-[120px] relative z-10">
        <div className="max-w-[1200px] mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold">
            Ready to Level Up?
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Join the next cohort of exceptional developers. Applications are
            reviewed on a rolling basis. Apply today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              variant="cta" 
              size="xl"
              className="group"
            >
              Apply to Join
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground pt-4">
            Limited spots available • Next cohort starts soon
          </p>
        </div>
      </div>
    </section>
  );
};
