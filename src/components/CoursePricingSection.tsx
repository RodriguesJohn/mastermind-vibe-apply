import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export const CoursePricingSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
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
              <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Black Friday Sale
              </div>
              
              <CardHeader className="text-center pb-8 pt-12">
                <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                  AI Mastery Course
                </CardTitle>
                <CardDescription className="text-lg">
                  Everything you need to master AI-powered development
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
                      "Complete course curriculum with video lessons",
                      "Build 2 real-world projects (Mobile app + AI Recipe Generator)",
                      "Learn Cursor and AI development tools",
                      "Lifetime access to course materials",
                      "Certificate of completion",
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
                >
                  Enroll Now - $299
                </Button>
                
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
