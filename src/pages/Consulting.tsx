import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Helmet } from "react-helmet";
import { BlurFade } from "@/components/BlurFade";

const Consulting = () => {
  const tiers = [
    {
      name: "Cohort Member Coaching",
      description: "One-to-one consulting and coaching exclusively for cohort members",
      features: [
        "Personalized AI strategy sessions",
        "Direct access to instructor",
        "Portfolio review and feedback",
        "Career guidance and mentorship",
        "Priority support",
      ],
      cta: "Book Session",
      highlighted: false,
    },
    {
      name: "Individual Coaching",
      description: "Personalized coaching for professionals looking to master AI",
      features: [
        "Custom learning roadmap",
        "One-on-one mentorship sessions",
        "Project guidance and code reviews",
        "Skill assessment and growth tracking",
        "Flexible scheduling",
      ],
      cta: "Get Started",
      highlighted: true,
    },
    {
      name: "Business Consulting",
      description: "Strategic AI consulting for teams and organizations",
      features: [
        "AI strategy and implementation",
        "Team training and workshops",
        "Custom solution development",
        "Ongoing support and guidance",
        "ROI optimization",
      ],
      cta: "Contact Us",
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
              <BlurFade delay={0.1}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                  AI Consulting & Coaching
                </h1>
              </BlurFade>
              <BlurFade delay={0.2}>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                  Personalized guidance to accelerate your AI journey, from individual coaching to enterprise consulting
                </p>
              </BlurFade>
            </div>
          </section>

          {/* Tiers Section */}
          <section className="py-16 px-4 md:px-10 lg:px-[120px]">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {tiers.map((tier, index) => (
                  <BlurFade key={tier.name} delay={0.1 * (index + 1)}>
                    <Card 
                      className={`p-8 h-full flex flex-col ${
                        tier.highlighted 
                          ? "border-primary shadow-lg scale-105" 
                          : ""
                      }`}
                    >
                      <div className="space-y-4 flex-grow">
                        <h3 className="text-2xl font-bold">{tier.name}</h3>
                        <p className="text-muted-foreground">{tier.description}</p>
                        
                        <ul className="space-y-3 pt-6">
                          {tier.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button 
                        variant={tier.highlighted ? "default" : "outline"}
                        className="w-full mt-8"
                        size="lg"
                      >
                        {tier.cta}
                      </Button>
                    </Card>
                  </BlurFade>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Consulting;
