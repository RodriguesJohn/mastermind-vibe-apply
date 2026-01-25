import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Helmet } from "react-helmet";

const Consulting = () => {
  const tiers = [
    {
      name: "Cohort Member Coaching",
      description: "One-to-one consulting and coaching exclusively for cohort members",
      price: "Included",
      priceSubtext: "For active cohort members",
      features: [
        "Personalized AI strategy sessions",
        "Direct access to mentor",
        "Project feedback and guidance",
        "Career guidance and mentorship",
        "Priority support",
      ],
      cta: "Book a Call",
      ctaSubtext: null,
      highlighted: false,
    },
    {
      name: "AI Consulting",
      description: "Strategic AI consulting for teams and organizations",
      price: "$10,000",
      priceSubtext: "starting price",
      features: [
        "Team Training and Workshops",
        "AI Integration Strategy Workshop",
        "0 to 1 MVP Development",
        "AI Product Design Direction",
        "Scaling Your AI Business Consultation",
      ],
      cta: "Book a Session",
      ctaSubtext: "Schedule a discovery call",
      highlighted: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Consulting & Coaching Services</title>
        <meta name="description" content="Professional AI consulting and coaching services for individuals and businesses." />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main>
          {/* Hero Section */}
          <section className="relative pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden bg-black text-white border-b border-white/10 w-full z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-black to-black" />
            
            <div className="px-4 md:px-10 lg:px-[120px] relative z-10 w-full">
              <div className="max-w-[1200px] mx-auto">
                <div>
                  <h1 
                    className="font-medium mb-4 tracking-tight"
                    style={{ fontSize: '40px', lineHeight: '1.2' }}
                  >
                AI Consulting & Coaching
              </h1>

                  <p className="text-lg md:text-medium text-white/60 font-light mb-7 leading-relaxed whitespace-nowrap">
                Personalized guidance to accelerate your AI journey, from individual coaching to enterprise consulting
              </p>
                </div>
              </div>
            </div>
          </section>

          {/* Two Column Consulting Cards */}
          <section className="pt-8 md:pt-12 pb-16 px-4 md:px-10 lg:px-[120px]">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-stretch">
                {/* Cohort Member Coaching Card */}
                <Card className="p-8 bg-card/50 border-border/40 hover:border-border transition-all duration-300 rounded-2xl flex flex-col">
                  <div className="space-y-6 flex-grow">
                    <div className="space-y-3">
                      <h2 className="text-2xl font-medium tracking-tight">
                        Cohort Member Coaching
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        One-to-one consulting and coaching exclusively for cohort members
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold">Included</span>
                        <span className="text-sm text-muted-foreground">For active cohort members</span>
                      </div>
                      
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Personalized AI strategy sessions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Direct access to mentor</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Project feedback and guidance</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Career guidance and mentorship</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">Priority support</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-auto pt-6">
                  <Button 
                    variant="default"
                    size="lg"
                      className="w-full"
                    asChild
                  >
                    <a 
                        href="https://cal.com/aidesignacademy/cohort-member-1-1-coaching?overlayCalendar=true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        Schedule a call
                    </a>
                  </Button>
                  </div>
                </Card>

                {/* AI Product Design Consulting Card */}
                <Card className="p-8 bg-card/50 border-border/40 hover:border-border transition-all duration-300 rounded-2xl flex flex-col">
                  <div className="space-y-6 flex-grow">
                    <div className="space-y-3">
                      <h2 className="text-2xl font-medium tracking-tight">
                        AI Product Design Consulting
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        Work directly with John Rodrigues to design, prototype, and launch AI-powered products — from zero to one.
                      </p>
                    </div>

                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Work directly with John Rodrigues to design, prototype, and launch AI-powered products — from zero to one</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">I collaborate with founders, product managers, and startup teams to turn ideas into investor-ready MVPs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">From product strategy and UX design to interactive prototypes and AI integration — we'll move fast and build something remarkable</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-auto pt-6">
                    <Button 
                      variant="secondary"
                      size="lg"
                      className="w-full hover:scale-105 transition-all"
                      asChild
                    >
                      <a 
                        href="https://john-rodrigues.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get in touch
                      </a>
                    </Button>

                    <p className="text-sm text-muted-foreground/60 italic mt-4">
                      Past collaborations include AI startups, innovation labs, and enterprise product teams.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
};

export default Consulting;
