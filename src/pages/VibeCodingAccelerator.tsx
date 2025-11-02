import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Code2, Zap, Users, Trophy, ArrowRight, Sparkles, Play, Rocket, Database, Globe, TrendingUp, Briefcase, DollarSign } from "lucide-react";
import { BlurFade } from "@/components/BlurFade";
import { Helmet } from "react-helmet";
import LindaImage from "@/assets/Linda.jpeg";
import SnehImage from "@/assets/Sneh.webp";
import SonaliImage from "@/assets/Sonali.jpeg";

const VibeCodingAccelerator = () => {
  const howItWorks = [
    {
      title: "Self-Paced Learning",
      description: "Binge the 8 modules anytime"
    },
    {
      title: "Weekly Live Q&As",
      description: "Real feedback and troubleshooting"
    },
    {
      title: "Community Access",
      description: "Private group for sharing builds and reviews"
    }
  ];

  const modules = [
    {
      number: "01",
      title: "Orientation + First Build",
      description: "Build your first AI mini-app"
    },
    {
      number: "02",
      title: "Lovable",
      description: "Visual AI builder, ship fast"
    },
    {
      number: "03-04",
      title: "Cursor",
      description: "Code with AI, web + mobile builds"
    },
    {
      number: "05",
      title: "Design Engineering",
      description: "React, Tailwind, Next.js foundations"
    },
    {
      number: "06",
      title: "Backend",
      description: "Supabase, APIs, data"
    },
    {
      number: "07",
      title: "Launch",
      description: "Deploy to Vercel, share live"
    },
    {
      number: "08",
      title: "Capstone",
      description: "Create and launch your own product"
    }
  ];

  const careerBenefits = [
    {
      icon: Briefcase,
      title: "Freelancers",
      description: "Deliver full $10K MVP projects"
    },
    {
      icon: TrendingUp,
      title: "Designers",
      description: "Move into high-value Design Engineer roles"
    },
    {
      icon: Rocket,
      title: "Founders",
      description: "Build prototypes 5× faster, raise sooner"
    }
  ];

  const outcomes = [
    "Build and deploy 2 real apps (guided + capstone)",
    "Master AI tools (Lovable, Cursor, Windsurf)",
    "Understand React, Tailwind, Next.js, Supabase",
    "Integrate APIs and databases",
    "Launch publicly with Vercel",
    "Present portfolio work that gets jobs and clients"
  ];

  const faqs = [
    {
      question: "Do I need coding experience?",
      answer: "No, we start from zero with AI tools. This accelerator is designed for designers who want to learn to build."
    },
    {
      question: "How much time weekly?",
      answer: "5–8 hours on average. The program is self-paced, so you can adjust based on your schedule."
    },
    {
      question: "When can I join?",
      answer: "Anytime — it's evergreen. You get immediate access upon enrollment."
    },
    {
      question: "Will I get feedback?",
      answer: "Yes, during weekly lives and community threads. You'll have plenty of opportunities to get your work reviewed."
    },
    {
      question: "Payment plans?",
      answer: "Yes, 3 × $1,900 option available for flexible monthly payments."
    }
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
        <title>Vibe Coding - 60-Day Design Engineering Accelerator</title>
        <meta name="description" content="A 60-day self-paced accelerator that turns designers into builders who launch real apps using AI tools like Lovable, Cursor, React, and Supabase." />
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
                    <span className="text-sm text-muted-foreground font-medium">Self-paced · Weekly live support · Lifetime access</span>
                  </div>
                </BlurFade>

                <BlurFade delay={0.3} duration={0.8}>
                  <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
                    Design. Code. Ship.
                    <span className="block text-primary">Launch Your Future.</span>
                  </h1>
                </BlurFade>

                <BlurFade delay={0.4} duration={0.8}>
                  <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                    A 60-day self-paced accelerator that turns designers into builders who launch real apps using AI tools like Lovable, Cursor, React, and Supabase.
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
                        Join Now
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="xl"
                      asChild
                    >
                      <a href="#problem">
                        Watch Overview Video
                        <Play className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </BlurFade>
              </div>
            </div>
          </section>

          {/* Problem / Opportunity Section */}
          <section id="problem" className="py-24 md:py-32">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <BlurFade delay={0.2} duration={0.8}>
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
                    Stop Handing Off Your Ideas — Start Shipping Them.
                  </h2>
                </BlurFade>

                <BlurFade delay={0.3} duration={0.8}>
                  <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                    Most designers can imagine great products. Few can build them.<br/>
                    Vibe Coding bridges that gap. Learn the modern design-engineering workflow so you can build, launch, and monetize your own ideas — without waiting on developers.
                  </p>
                </BlurFade>

                <BlurFade delay={0.4} duration={0.8}>
                  <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
                    <Card className="p-8 bg-muted/50">
                      <p className="text-lg font-semibold mb-2">Before</p>
                      <p className="text-muted-foreground">Figma handoff → Wait for developers → Compromised vision</p>
                    </Card>
                    <Card className="p-8 bg-primary/10 border-primary/20">
                      <p className="text-lg font-semibold mb-2">After</p>
                      <p className="text-muted-foreground">Design → Build → Launch → Live product in your hands</p>
                    </Card>
                  </div>
                </BlurFade>
              </div>
            </div>
          </section>

          {/* Outcomes Section */}
          <section className="py-24 md:py-32 bg-muted/30">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <BlurFade delay={0.2} duration={0.8}>
                  <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold">
                      In 60 Days, You'll Be Able To …
                    </h2>
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

          {/* How It Works Section */}
          <section className="py-24 md:py-32">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <BlurFade delay={0.2} duration={0.8}>
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    Learn at Your Own Pace — With Live Support.
                  </h2>
                </BlurFade>

                <div className="grid md:grid-cols-3 gap-8 mt-16">
                  {howItWorks.map((item, index) => (
                    <BlurFade key={index} delay={0.3 + (index * 0.1)} duration={0.8}>
                      <Card className="p-8 text-center bg-card border-border">
                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </Card>
                    </BlurFade>
                  ))}
                </div>

                <BlurFade delay={0.6} duration={0.8}>
                  <p className="text-center text-muted-foreground mt-8">
                    You learn independently — but never alone.
                  </p>
                </BlurFade>
              </div>
            </div>
          </section>

          {/* Curriculum Section */}
          <section className="py-24 md:py-32 bg-muted/30">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <BlurFade delay={0.2} duration={0.8}>
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    The 60-Day Roadmap
                  </h2>
                </BlurFade>

                <div className="grid md:grid-cols-2 gap-6 mt-16">
                  {modules.map((module, index) => (
                    <BlurFade key={index} delay={0.3 + (index * 0.05)} duration={0.8}>
                      <Card className={`p-8 ${index % 2 === 0 ? 'bg-card' : 'bg-muted/50'}`}>
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold">{module.number}</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                            <p className="text-muted-foreground">{module.description}</p>
                          </div>
                        </div>
                      </Card>
                    </BlurFade>
                  ))}
                </div>

                <BlurFade delay={0.8} duration={0.8}>
                  <div className="text-center mt-12">
                    <Button variant="outline" size="lg" asChild>
                      <a href="#curriculum-details">View Full Curriculum →</a>
                    </Button>
                  </div>
                </BlurFade>
              </div>
            </div>
          </section>

          {/* Career Benefits Section */}
          <section className="py-24 md:py-32">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <BlurFade delay={0.2} duration={0.8}>
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    How Vibe Coding Elevates Your Career
                  </h2>
                  <p className="text-center text-muted-foreground mb-16">
                    You're not learning syntax — you're learning freedom.
                  </p>
                </BlurFade>

                <div className="grid md:grid-cols-3 gap-8">
                  {careerBenefits.map((benefit, index) => (
                    <BlurFade key={index} delay={0.3 + (index * 0.1)} duration={0.8}>
                      <Card className="p-8 text-center bg-card border-border hover:border-primary/50 transition-all">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <benefit.icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </Card>
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

          {/* Pricing Section */}
          <section className="py-24 md:py-32">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <BlurFade delay={0.2} duration={0.8}>
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Choose Your Access Plan
                  </h2>
                </BlurFade>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <BlurFade delay={0.3} duration={0.8}>
                    <Card className="p-8 bg-card border-border">
                      <h3 className="text-2xl font-bold mb-4">Standard Access</h3>
                      <div className="mb-6">
                        <span className="text-4xl font-bold">$5,000</span>
                        <span className="text-muted-foreground"> USD (one-time)</span>
                      </div>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary mt-0.5" />
                          <span>Lifetime content access</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary mt-0.5" />
                          <span>60 days live support + community</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary mt-0.5" />
                          <span>Certificate upon completion</span>
                        </li>
                      </ul>
                      <Button className="w-full" variant="cta" size="lg" asChild>
                        <a 
                          href="https://maven.com/productlearnio/aiproductdesignmasterycohort"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Join Now
                        </a>
                      </Button>
                    </Card>
                  </BlurFade>

                  <BlurFade delay={0.4} duration={0.8}>
                    <Card className="p-8 bg-primary/5 border-primary/20">
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                        Flexible
                      </div>
                      <h3 className="text-2xl font-bold mb-4">3 Monthly Payments</h3>
                      <div className="mb-6">
                        <span className="text-4xl font-bold">$1,900</span>
                        <span className="text-muted-foreground"> × 3 months</span>
                      </div>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary mt-0.5" />
                          <span>Start instantly</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary mt-0.5" />
                          <span>Same benefits as Standard</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary mt-0.5" />
                          <span>Cancel before Month 2 if it's not for you</span>
                        </li>
                      </ul>
                      <Button className="w-full" variant="cta" size="lg" asChild>
                        <a 
                          href="https://maven.com/productlearnio/aiproductdesignmasterycohort"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Start With $1,900 →
                        </a>
                      </Button>
                    </Card>
                  </BlurFade>
                </div>
              </div>
            </div>
          </section>

          {/* About Creator Section */}
          <section className="py-24 md:py-32 bg-muted/30">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <BlurFade delay={0.2} duration={0.8}>
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    Meet John Rodrigues
                  </h2>
                </BlurFade>

                <BlurFade delay={0.3} duration={0.8}>
                  <div className="max-w-3xl mx-auto text-center space-y-6">
                    <p className="text-xl text-muted-foreground">
                      Design Engineer · Educator · Founder of AI Design Academy.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      John has guided thousands of designers into code and built AI products for leading startups. 
                      Vibe Coding distills his system for designing + shipping modern products fast.
                    </p>
                  </div>
                </BlurFade>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-24 md:py-32">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <BlurFade delay={0.2} duration={0.8}>
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Frequently Asked Questions
                  </h2>
                </BlurFade>

                <BlurFade delay={0.3} duration={0.8}>
                  <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                      {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </BlurFade>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-background">
            <div className="px-4 md:px-10 lg:px-[120px] relative z-10">
              <div className="max-w-[1200px] mx-auto text-center space-y-8">
                <BlurFade delay={0.2} duration={0.8}>
                  <h2 className="text-4xl md:text-6xl font-bold">
                    Start Building the Future
                  </h2>
                </BlurFade>
                
                <BlurFade delay={0.3} duration={0.8}>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                    You already have taste. Now gain the power to build with it.<br/>
                    Join Vibe Coding and ship your first full-stack product in 60 days.
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
                        Join Now
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="xl"
                      asChild
                    >
                      <a href="mailto:admissions@aidesignacademy.com">
                        Talk to Admissions
                      </a>
                    </Button>
                  </div>
                </BlurFade>
                
                <BlurFade delay={0.5} duration={0.8}>
                  <p className="text-sm text-muted-foreground pt-4">
                    Evergreen enrollment · Weekly live support · Lifetime access
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
