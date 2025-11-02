import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, Code2, Zap, Users, Trophy, ArrowRight, Sparkles } from "lucide-react";
import { BlurFade } from "@/components/BlurFade";
import { Helmet } from "react-helmet";
import LindaImage from "@/assets/Linda.jpeg";
import SnehImage from "@/assets/Sneh.webp";
import SonaliImage from "@/assets/Sonali.jpeg";

const VibeCodingAccelerator = () => {
  const features = [
    {
      icon: Code2,
      title: "Hands-On Coding",
      description: "Build real projects using cutting-edge AI tools and modern frameworks"
    },
    {
      icon: Zap,
      title: "Fast-Track Learning",
      description: "Accelerate your development skills with intensive, focused sessions"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a vibrant community of developers and get continuous support"
    },
    {
      icon: Trophy,
      title: "Portfolio Projects",
      description: "Create impressive projects that showcase your skills to employers"
    }
  ];

  const outcomes = [
    "Build AI mobile and web apps",
    "Develop advanced problem-solving and architectural thinking",
    "Learn vibe coding techniques",
    "Create an impressive portfolio that stands out",
    "Gain exclusive access to job opportunities and projects",
    "Receive personalized code reviews and mentorship"
  ];

  const testimonials = [
    {
      name: "Linda Eliasen",
      role: "Product Designer",
      content: "John is an incredible mentor. He taught me to build a prototype in 2 hours—something that used to take 2 weeks. His guidance transformed how I approach design and development.",
      initials: "LE",
      image: LindaImage
    },
    {
      name: "Sneh",
      role: "UX Designer",
      content: "John is calm, insightful, and deeply attuned to emerging design trends. His strategic frameworks and coaching helped me think like both a strategist and a solutionist.",
      initials: "S",
      image: SnehImage
    },
    {
      name: "Sonali",
      role: "Sr. Product Designer at JPMorgan Chase",
      content: "John emphasizes practical application over lectures, which made the material immediately useful. I'm more confident in the subject and excited to apply this foundation to my career.",
      initials: "So",
      image: SonaliImage
    }
  ];

  return (
    <>
      <Helmet>
        <title>Vibe Coding Accelerator - Master AI-Powered Development</title>
        <meta name="description" content="Join the Vibe Coding Accelerator and learn to build AI-powered applications with hands-on mentorship and real-world projects." />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background" />
            
            <div className="px-4 md:px-10 lg:px-[120px] relative z-10 w-full">
              <div className="max-w-[1200px] mx-auto">
                <BlurFade delay={0.2} duration={0.8}>
                  <div className="flex items-center gap-2 mb-6 justify-center">
                    <Sparkles className="w-5 h-5 text-accent" />
                    <span className="text-accent font-medium">Transform Your Coding Journey</span>
                  </div>
                </BlurFade>

                <BlurFade delay={0.3} duration={0.8}>
                  <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
                    Vibe Coding
                    <span className="block text-primary">Accelerator</span>
                  </h1>
                </BlurFade>

                <BlurFade delay={0.4} duration={0.8}>
                  <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                    Master AI-powered development through intensive hands-on learning. Build real projects, ship fast, and level up your skills.
                  </p>
                </BlurFade>

                <BlurFade delay={0.5} duration={0.8}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button 
                      variant="cta" 
                      size="xl"
                      className="group"
                      asChild
                    >
                      <a 
                        href="https://maven.com/productlearnio/aiproductdesignmasterycohort"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply Now
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="xl"
                      asChild
                    >
                      <a href="#features">
                        Learn More
                      </a>
                    </Button>
                  </div>
                </BlurFade>

                <BlurFade delay={0.6} duration={0.8}>
                  <p className="text-center text-sm text-muted-foreground mt-8">
                    Limited spots available • Next cohort starts soon
                  </p>
                </BlurFade>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-24 md:py-32 bg-muted/30">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <BlurFade delay={0.2} duration={0.8}>
                  <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold">
                      Why Vibe Coding?
                    </h2>
                    <p className="text-xl text-muted-foreground">
                      Learn to code with AI at your fingertips
                    </p>
                  </div>
                </BlurFade>

                <div className="grid md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <BlurFade key={index} delay={0.3 + (index * 0.1)} duration={0.8}>
                      <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <feature.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                          </div>
                        </div>
                      </Card>
                    </BlurFade>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Outcomes Section */}
          <section className="py-24 md:py-32">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <BlurFade delay={0.2} duration={0.8}>
                  <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold">
                      What You'll Achieve
                    </h2>
                    <p className="text-xl text-muted-foreground">
                      Transform your skills and career trajectory
                    </p>
                  </div>
                </BlurFade>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {outcomes.map((outcome, index) => (
                    <BlurFade key={index} delay={0.3 + (index * 0.1)} duration={0.8}>
                      <div className="flex items-start gap-4 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-lg leading-relaxed">
                          {outcome}
                        </p>
                      </div>
                    </BlurFade>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-24 md:py-32 bg-muted/30">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <BlurFade delay={0.2} duration={0.8}>
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    What People Say
                  </h2>
                </BlurFade>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <BlurFade key={index} delay={0.3 + (index * 0.1)} duration={0.8}>
                      <Card className="p-8 bg-card/50 border-border/40 hover:border-border transition-all duration-300">
                        <div className="flex items-start gap-4 mb-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          "{testimonial.content}"
                        </p>
                      </Card>
                    </BlurFade>
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
                <BlurFade delay={0.2} duration={0.8}>
                  <h2 className="text-4xl md:text-6xl font-bold">
                    Ready to Level Up?
                  </h2>
                </BlurFade>
                
                <BlurFade delay={0.3} duration={0.8}>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                    Join the next cohort of exceptional developers. Applications are
                    reviewed on a rolling basis. Apply today.
                  </p>
                </BlurFade>
                
                <BlurFade delay={0.4} duration={0.8}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                    <Button 
                      variant="cta" 
                      size="xl"
                      className="group"
                      asChild
                    >
                      <a 
                        href="https://maven.com/productlearnio/aiproductdesignmasterycohort"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply to Join
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </BlurFade>
                
                <BlurFade delay={0.5} duration={0.8}>
                  <p className="text-sm text-muted-foreground pt-4">
                    Limited spots available • Next cohort starts soon
                  </p>
                </BlurFade>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default VibeCodingAccelerator;
