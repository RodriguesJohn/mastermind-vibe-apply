import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
export const CoursePricingSection = () => {
  return <section className="py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
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
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Join the AI Product Builder Club
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="border-white/5 shadow-2xl relative overflow-hidden bg-black">
              <CardHeader className="text-left pb-6 sm:pb-8 pt-4 sm:pt-6 px-4 sm:px-6">
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-3 sm:mb-4">
                  Access to the AI Product Builder Club
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6 sm:space-y-8 px-4 sm:px-6">
                <div className="text-left space-y-2">
                  <div className="flex items-center justify-start gap-3 sm:gap-4">
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                      $99
                    </span>
                    <span className="text-sm uppercase tracking-wider text-muted-foreground">
                      per month
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground italic pt-2">
                    Join a community of AI product builders • Cancel anytime
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6">
                  <p className="font-semibold text-base sm:text-lg">What's included:</p>
                  <ul className="space-y-2 sm:space-y-3">
                    {["Behind-the-scenes builds & resources", "Cursor Complete course", "Native App Prototyping course", "Access to community of product builders", "Stay updated with latest AI tools & updates"].map((feature, index) => <li key={index} className="flex items-start gap-2 sm:gap-3">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-foreground/90">{feature}</span>
                      </li>)}
                  </ul>
                </div>

                <Button size="xl" className="w-full mt-6 sm:mt-8 text-base sm:text-lg" variant="cta" asChild>
                  <a href="https://www.skool.com/ai-design-academy-6114/about?ref=8d68f8fa4bf2422c8318d51d5f9fcadc" target="_blank" rel="noopener noreferrer">
                    Join the Club - $99/month
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};