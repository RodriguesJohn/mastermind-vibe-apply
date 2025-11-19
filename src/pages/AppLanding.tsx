// TEMPORARY PAGE - Mobile App Landing for Bite-Size AI Learning

import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Smartphone, Zap, BookOpen, Clock, Star, Download } from "lucide-react";

const AppLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
        
        <div className="px-4 md:px-10 lg:px-[120px] relative z-10">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Coming Soon</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  Learn AI in
                  <span className="block text-primary">Bite-Size Moments</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Master artificial intelligence with daily micro-lessons. 5 minutes a day is all it takes to transform your understanding of AI.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="cta" size="xl" className="group">
                    <Download className="w-5 h-5 mr-2" />
                    Get Early Access
                  </Button>
                  <Button variant="outline" size="xl">
                    Watch Demo
                  </Button>
                </div>
                
                <div className="flex items-center gap-8 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">2.5k+ waitlist</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">5.0 rating</span>
                  </div>
                </div>
              </div>
              
              {/* Right: Phone Mockup */}
              <div className="relative">
                <div className="relative mx-auto w-[300px] h-[600px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-[3rem] border-8 border-foreground/10 shadow-2xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground/10 rounded-b-3xl" />
                  <div className="p-6 pt-12 h-full overflow-hidden">
                    <div className="space-y-4">
                      <div className="h-12 bg-card rounded-xl animate-pulse" />
                      <div className="h-32 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl" />
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-24 bg-card rounded-xl animate-pulse" />
                        <div className="h-24 bg-card rounded-xl animate-pulse" />
                      </div>
                      <div className="h-16 bg-card rounded-xl animate-pulse" />
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 md:py-32">
        <div className="px-4 md:px-10 lg:px-[120px]">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Why Bite-Size Learning Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Science-backed approach to mastering AI concepts without overwhelming your schedule
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: "5-Minute Lessons",
                  description: "Perfectly timed lessons that fit into your coffee break, commute, or downtime."
                },
                {
                  icon: Zap,
                  title: "Instant Apply",
                  description: "Learn concepts you can immediately use in your work or projects today."
                },
                {
                  icon: BookOpen,
                  title: "Progressive Path",
                  description: "Structured curriculum that builds from basics to advanced AI mastery."
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent" />
        
        <div className="px-4 md:px-10 lg:px-[120px] relative z-10">
          <div className="max-w-[1200px] mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Start Your AI Journey Today
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands on the waitlist. Be the first to know when we launch.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button variant="cta" size="xl" className="group">
                <Smartphone className="w-5 h-5 mr-2" />
                Get Early Access
                <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground pt-4">
              Available on iOS and Android • Launching Q1 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppLanding;
