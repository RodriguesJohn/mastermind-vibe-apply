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
        "Direct access to instructor",
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
          <section className="py-24 md:py-32 px-4 md:px-10 lg:px-[120px]">
            <div className="max-w-[1200px] mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                AI Consulting & Coaching
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Personalized guidance to accelerate your AI journey, from individual coaching to enterprise consulting
              </p>
            </div>
          </section>

          {/* Consulting Section */}
          <section className="py-16 px-4 md:px-10 lg:px-[120px]">
            <div className="max-w-[1200px] mx-auto">
              <div className="max-w-3xl mx-auto">
                <Card className="p-12 bg-card/50 border-border/40 hover:border-border transition-all duration-300 rounded-2xl">
                  <div className="space-y-8 text-center">
                    <div className="space-y-4">
                      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        AI Product Design Consulting
                      </h2>
                      <p className="text-xl text-muted-foreground">
                        Work directly with John Rodrigues to design, prototype, and launch AI-powered products — from zero to one.
                      </p>
                    </div>

                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed pt-4">
                      <p>
                        I collaborate with founders, product managers, and startup teams to turn ideas into investor-ready MVPs.
                      </p>
                      <p>
                        From product strategy and UX design to interactive prototypes and AI integration — we'll move fast and build something remarkable.
                      </p>
                    </div>

                    <div className="pt-6">
                      <Button 
                        variant="default"
                        size="lg"
                        className="w-full sm:w-auto px-12 bg-accent text-accent-foreground hover:bg-accent/90 transition-all hover:scale-105"
                        asChild
                      >
                        <a 
                          href="https://cal.com/aidesignacademy/business-consulting?overlayCalendar=true"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Book a Call
                        </a>
                      </Button>
                    </div>

                    <p className="text-sm text-muted-foreground/60 italic pt-2">
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
