import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Check, Calendar, Zap, Target, Code2 } from "lucide-react";
import { Helmet } from "react-helmet";

const consultingServices = [
  {
    icon: Code2,
    title: "AI Tool Mastery",
    description: "Get personalized guidance on mastering AI coding tools like Cursor, Lovable, v0, and Bolt for your specific needs.",
  },
  {
    icon: Target,
    title: "Project Strategy",
    description: "Define your project goals and create a roadmap to build functional prototypes and demos efficiently.",
  },
  {
    icon: Zap,
    title: "Technical Review",
    description: "Get expert feedback on your code, designs, and implementation strategies to improve quality and speed.",
  },
  {
    icon: Calendar,
    title: "Ongoing Support",
    description: "Regular check-ins and support as you build your projects and grow your AI coding skills.",
  },
];

const benefits = [
  "Personalized learning path tailored to your goals",
  "Direct access to expert guidance and mentorship",
  "Accelerate your project development timeline",
  "Learn best practices and avoid common pitfalls",
  "Get unstuck faster with real-time problem solving",
  "Build confidence in using AI coding tools",
];

const Consulting = () => {
  return (
    <>
      <Helmet>
        <title>1:1 Consulting - Vibe Coding Mastermind</title>
        <meta 
          name="description" 
          content="Get personalized 1:1 consulting to master AI coding tools and accelerate your project development. Expert guidance tailored to your needs." 
        />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="inline-block">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
                    Expert Guidance
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
                  1:1 Consulting
                  <span className="block bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                    Personalized Support
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Get dedicated expert guidance to master AI coding tools and accelerate your project development.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-6">
                  <Button variant="cta" size="xl" className="group">
                    Book a Session
                  </Button>
                  <Button variant="outline" size="xl" className="border-primary/30 hover:bg-primary/10">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-24 md:py-32 relative">
            <div className="container px-4">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">
                  What You Get
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive support tailored to your needs
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {consultingServices.map((service, index) => (
                  <div
                    key={index}
                    className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                  >
                    <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-hero opacity-50" />
            
            <div className="container px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold">
                    Why Choose 1:1 Consulting?
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Accelerate your learning and project development
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-lg leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 md:py-32 relative">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-3xl bg-gradient-cta">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Book your first 1:1 consulting session and start building with AI tools today.
                </p>
                <Button 
                  size="xl" 
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Book Your Session Now
                </Button>
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

export default Consulting;