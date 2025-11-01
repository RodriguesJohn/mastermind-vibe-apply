import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Helmet } from "react-helmet";
import { BlurFade } from "@/components/BlurFade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LindaImage from "@/assets/Linda.jpeg";
import JohnImage from "@/assets/John.png";

const Consulting = () => {
  const testimonials = [
    {
      name: "Linda",
      role: "Principal Product Designer, JPMorgan Chase",
      content: "John's coaching has been invaluable in helping me understand how to practically apply AI tools in my design work. His one-on-one sessions are focused, actionable, and genuinely supportive.",
      initials: "L",
      image: LindaImage
    },
    {
      name: "John Rodrigues",
      role: "AI Design Expert & Instructor",
      content: "I've had the privilege of working with numerous designers and businesses, helping them navigate the AI landscape. Seeing my clients successfully integrate AI into their workflows and achieve their goals is what drives my coaching practice.",
      initials: "JR",
      image: JohnImage
    }
  ];

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
      name: "Individual Coaching",
      description: "Personalized coaching for professionals looking to master AI",
      price: "$2,000",
      priceSubtext: "",
      features: [
        "GetCareer101 mentorship and coaching",
        "Landing design job support and guidance",
        "Project consultation and strategy",
        "Portfolio reviews and interview preparation",
      ],
      cta: "Book a Session",
      ctaSubtext: null,
      highlighted: true,
    },
    {
      name: "Business Consulting",
      description: "Strategic AI consulting for teams and organizations",
      price: "$10,000",
      priceSubtext: "starting price",
      features: [
        "AI strategy and integration",
        "Team training and workshops",
        "Prototyping with AI",
        "MVP development",
        "Design Direction & Strategy",
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
                        
                        <div className="pt-4">
                          <div className="text-4xl font-bold">{tier.price}</div>
                          <div className="text-sm text-muted-foreground">{tier.priceSubtext}</div>
                        </div>
                        
                        <ul className="space-y-3 pt-6">
                          {tier.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8 space-y-2">
                        {tier.name === "Cohort Member Coaching" ? (
                          <Button 
                            variant={tier.highlighted ? "default" : "outline"}
                            className="w-full"
                            size="lg"
                            asChild
                          >
                            <a 
                              href="https://cal.com/aidesignacademy/cohort-member-1-1-coaching?overlayCalendar=true"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {tier.cta}
                            </a>
                          </Button>
                        ) : tier.name === "Individual Coaching" ? (
                          <Button 
                            variant={tier.highlighted ? "default" : "outline"}
                            className="w-full"
                            size="lg"
                            asChild
                          >
                            <a 
                              href="https://cal.com/aidesignacademy/1-1-coaching-call?overlayCalendar=true"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {tier.cta}
                            </a>
                          </Button>
                        ) : tier.name === "Business Consulting" ? (
                          <Button 
                            variant={tier.highlighted ? "default" : "outline"}
                            className="w-full"
                            size="lg"
                            asChild
                          >
                            <a 
                              href="https://cal.com/aidesignacademy/business-consulting?overlayCalendar=true"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {tier.cta}
                            </a>
                          </Button>
                        ) : (
                          <Button 
                            variant={tier.highlighted ? "default" : "outline"}
                            className="w-full"
                            size="lg"
                          >
                            {tier.cta}
                          </Button>
                        )}
                        {tier.ctaSubtext && (
                          <a 
                            href="https://cal.com/aidesignacademy/discovery-call?overlayCalendar=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground text-center underline hover:text-primary transition-colors block"
                          >
                            {tier.ctaSubtext}
                          </a>
                        )}
                      </div>
                    </Card>
                  </BlurFade>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-24 md:py-32 bg-background/50">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <BlurFade delay={0.2} duration={0.8} yOffset={20} blur="8px">
                  <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 tracking-tight">
                    What People Say
                  </h2>
                </BlurFade>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <BlurFade key={index} delay={0.4 + (index * 0.1)} duration={0.8} yOffset={15} blur="6px">
                      <Card className="p-8 bg-card/50 border-border/40 hover:border-border transition-all duration-300">
                        <p className="text-foreground leading-relaxed mb-6">
                          "{testimonial.content}"
                        </p>
                        
                        <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                          <Avatar className="w-16 h-16">
                            {testimonial.image ? (
                              <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            ) : null}
                            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                              {testimonial.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </Card>
                    </BlurFade>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Consulting;
