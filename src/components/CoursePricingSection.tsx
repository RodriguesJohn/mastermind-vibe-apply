import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export const CoursePricingSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <style>
        {`
          @keyframes checkmarkPulse {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.15);
              opacity: 0.9;
            }
          }
          @keyframes checkmarkBounce {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            50% {
              transform: scale(1.3);
            }
            70% {
              transform: scale(0.9);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          .checkmark-animated {
            animation: checkmarkBounce 0.6s ease-out, checkmarkPulse 2s ease-in-out 0.6s infinite;
          }
        `}
      </style>
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      
      <div className="px-4 md:px-10 lg:px-[120px] relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Course Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Limited time Black Friday offer
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="border-primary/50 shadow-2xl relative overflow-hidden">
              <div className="flex justify-center pt-4">
                <div className="bg-destructive text-destructive-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Black Friday Sale
                </div>
              </div>
              
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                  Master Vibe Coding with Cursor today
                </CardTitle>
                <CardDescription className="text-lg">
                  Everything you need to get started to prototype<br />and vibe code your apps with AI
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8">
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-3xl md:text-4xl font-bold text-primary">
                      $299
                    </span>
                    <span className="text-2xl text-muted-foreground line-through">
                      $499
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Original price: $499 • Save $200
                  </p>
                </div>

                <div className="space-y-4 pt-6">
                  <p className="font-semibold text-lg">What's included:</p>
                  <ul className="space-y-3">
                    {[
                      "Proven and tested curriculum",
                      "Build 2 projects (Mobile app and AI recipe generator)",
                      "Learn Cursor, one of the most highly adapted vibe coding tool",
                      "Watch courses anytime, self-paced learning",
                      "Future proof your career",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  size="xl" 
                  className="w-full mt-8"
                  variant="cta"
                  asChild
                >
                  <a href="https://ai-design-academy-s-school.teachable.com/purchase?product_id=6550289" target="_blank" rel="noopener noreferrer">
                    Enroll Now - $299
                  </a>
                </Button>
                
                <div className="flex items-center justify-center gap-2 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-500 checkmark-animated" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Secure payment via Teachable
                    </p>
                  </div>
                </div>
                
                <p className="text-center text-sm text-muted-foreground">
                  Black Friday pricing ends soon!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
