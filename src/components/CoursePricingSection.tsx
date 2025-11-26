import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export const CoursePricingSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
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
      
      <div className="px-4 sm:px-6 md:px-10 lg:px-[120px] relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Course Pricing
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Limited time Black Friday offer
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="border-primary/50 shadow-2xl relative overflow-hidden">
              <div className="flex justify-center pt-3 sm:pt-4">
                <div className="bg-destructive text-destructive-foreground px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  Black Friday Sale
                </div>
              </div>
              
              <CardHeader className="text-center pb-6 sm:pb-8 pt-6 sm:pt-8 px-4 sm:px-6">
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                  Master Vibe Coding with Cursor today
                </CardTitle>
                <CardDescription className="text-base sm:text-lg">
                  Everything you need to get started to prototype<br />and vibe code your apps with AI
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6 sm:space-y-8 px-4 sm:px-6">
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-3 sm:gap-4">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                      $299
                    </span>
                    <span className="text-xl sm:text-2xl text-muted-foreground line-through">
                      $499
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Original price: $499 • Save $200
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6">
                  <p className="font-semibold text-base sm:text-lg">What's included:</p>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      "Proven and tested curriculum",
                      "Build 2 projects (Mobile app and AI recipe generator)",
                      "Learn Cursor, one of the most highly adapted vibe coding tool",
                      "Watch courses anytime, self-paced learning",
                      "Future proof your career",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 sm:gap-3">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  size="xl" 
                  className="w-full mt-6 sm:mt-8 text-base sm:text-lg"
                  variant="cta"
                  asChild
                >
                  <a href="https://ai-design-academy-s-school.teachable.com/purchase?product_id=6550289" target="_blank" rel="noopener noreferrer">
                    Enroll Now - $299
                  </a>
                </Button>
                
                <div className="flex items-center justify-center gap-2 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500 checkmark-animated" />
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Secure payment via Teachable
                    </p>
                  </div>
                </div>
                
                <p className="text-center text-xs sm:text-sm text-muted-foreground">
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
