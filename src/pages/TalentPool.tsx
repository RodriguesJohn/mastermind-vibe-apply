import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { Users, Briefcase, ArrowRight, Star, CheckCircle } from "lucide-react";
import { BlurFade } from "@/components/BlurFade";

const TalentPool = () => {
  return (
    <>
      <Helmet>
        <title>Talent Hub - Vibe Coding Mastermind</title>
        <meta 
          name="description" 
          content="Join our talent hub or submit role requests. Connect top AI and design talent with innovative companies." 
        />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center">
                <BlurFade delay={0.1} duration={0.8} yOffset={10} blur="8px">
                  <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Talent Hub</span>
                  </div>
                </BlurFade>
                
                <BlurFade delay={0.2} duration={0.8} yOffset={14} blur="10px">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
                    Join the Talent Hub
                  </h1>
                </BlurFade>
                
                <BlurFade delay={0.3} duration={0.8} yOffset={12} blur="8px">
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Whether you're looking for your next opportunity or seeking top talent for your team, 
                    our talent pool connects AI and design professionals with innovative companies.
                  </p>
                </BlurFade>
              </div>
            </div>
          </section>

          {/* Actions Section */}
          <section className="py-12 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Join Talent Pool */}
                <BlurFade delay={0.1} duration={0.8} yOffset={10} blur="8px">
                  <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Join the Talent Hub</h2>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">
                      Share your portfolio and get connected with top companies looking for AI and design talent. 
                      Join our curated talent hub and unlock new career opportunities.
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Curated opportunities from innovative companies</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Get introduced to top companies and founders</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">Join a trusted network of professionals</span>
                      </div>
                    </div>
                    
                    <Button variant="default" size="lg" className="w-full group" asChild>
                      <a href="https://tally.so/r/3E478A" target="_blank" rel="noopener noreferrer">
                        Join the Talent Hub
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </BlurFade>

                {/* Submit Role Request */}
                <BlurFade delay={0.2} duration={0.8} yOffset={10} blur="8px">
                  <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-accent" />
                      </div>
                      <h2 className="text-2xl font-bold">Submit a Role Request</h2>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">
                      Looking for exceptional AI and design talent? Submit your role requirements and we'll 
                      connect you with pre-vetted professionals from our talent pool.
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <Star className="w-4 h-4 text-accent" />
                        <span className="text-sm">Access to vetted AI and design professionals</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Star className="w-4 h-4 text-accent" />
                        <span className="text-sm">Streamlined hiring process with quality matches</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Star className="w-4 h-4 text-accent" />
                        <span className="text-sm">Dedicated support throughout the hiring process</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="lg" className="w-full group" asChild>
                      <a href="https://tally.so/r/mBPWA4" target="_blank" rel="noopener noreferrer">
                        Submit Role Request
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </BlurFade>
              </div>
            </div>
          </section>
        </main>
        
        <footer className="border-t border-border py-12 bg-card/30">
          <div className="container px-4 text-center text-sm text-muted-foreground">
            <p>© 2025 Vibe Coding Mastermind. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TalentPool;
