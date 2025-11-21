import { Navigation } from "@/components/Navigation";
import { AIHeaderSection } from "@/components/AIHeaderSection";
import { CohortOverviewSection } from "@/components/CohortOverviewSection";
import { CohortModulesSection } from "@/components/CohortModulesSection";
import { CohortTestimonialsSection } from "@/components/CohortTestimonialsSection";
import { CohortStatsSection } from "@/components/CohortStatsSection";
import { InstructorSection } from "@/components/InstructorSection";
import { PlaybookSection } from "@/components/PlaybookSection";
import { Helmet } from "react-helmet";
import LogoCloud from "@/components/LogoCloud";
import CohortCompanyLogos from "@/components/CohortCompanyLogos";
import { TestimonialSection } from "@/components/CustomerTestimonialSection";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import LindaImage from "@/assets/Linda.jpeg";
import SnehImage from "@/assets/Sneh.webp";
import SonaliImage from "@/assets/Sonali.jpeg";
import SethImage from "@/assets/Seth.png";
const Cohort = () => {
  const customerTestimonials = [{
    id: 1,
    quote: "This cohort gave me the practical, hands-on approach I needed to actually use AI tools in my design work.",
    name: "Elaine Anzaldo",
    role: "Senior Product Designer at Meta",
    description: "Design AI products for wearables with human-centered experiences.",
    imageSrc: "https://media.licdn.com/dms/image/v2/D5603AQHVwM0T15wsng/profile-displayphoto-shrink_800_800/B56ZOxeYKhG8Ao-/0/1733849351352?e=1763596800&v=beta&t=WVCx8mbXSMSLcterbsI5QaIwjVrkopIIhGCxSFz8uUY"
  }, {
    id: 2,
    quote: "John's strategic frameworks and demos helped me think like a strategist and a solutionist.",
    name: "Seth Jenks",
    role: "Director of Design at SecurityScorecard",
    description: "Use vibe coding to create value more quickly for internal product teams and external stakeholders.",
    imageSrc: SethImage
  }];
  return <>
      <Helmet>
        <title>AI Mastery for Designers & Product Leaders 5-Week Cohort</title>
        <meta name="description" content="Join our coding cohort and learn with a community of developers." />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main>
          <AIHeaderSection />
          <CohortCompanyLogos />
          <CohortTestimonialsSection />

          <LogoCloud />

          <CohortOverviewSection />
          <CohortStatsSection />
          <TestimonialSection 
            title="What Our Members Are Saying"
            subtitle="Discover how our cohort has helped designers and product leaders master AI"
            testimonials={customerTestimonials}
          />
          <CohortModulesSection />
          <InstructorSection />
          
          {/* Pricing Section */}
          <section className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Path</h2>
                <p className="text-xl text-muted-foreground">Select the learning experience that fits your goals</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Self-Paced Course */}
                <Card className="relative">
                  <CardHeader>
                    <CardTitle className="text-2xl">Self-Paced Course</CardTitle>
                    <CardDescription>Learn at your own pace with lifetime access</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="text-4xl font-bold mb-2">$899</div>
                      <p className="text-muted-foreground">One-time payment</p>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Lifetime access to all course materials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Self-paced learning modules</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Access to course community</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Certificate of completion</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" size="lg">Get Started</Button>
                  </CardFooter>
                </Card>

                {/* Live Cohort */}
                <Card className="relative border-primary shadow-lg">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">Live Cohort</CardTitle>
                    <CardDescription>Interactive learning with expert guidance</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="text-4xl font-bold mb-2">$1,499</div>
                      <p className="text-muted-foreground">5-week program</p>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Everything in Self-Paced Course</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Hands-on workshop</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Direct access to John Rodrigues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Live interactive sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>1-on-1 feedback</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" size="lg" variant="default">Join Cohort</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>

          <PlaybookSection />
          
        </main>
      </div>
    </>;
};
export default Cohort;