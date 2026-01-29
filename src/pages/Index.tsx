import React from "react";
import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { CohortTestimonialsSection } from "../components/CohortTestimonialsSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import CohortCompanyLogos from "../components/CohortCompanyLogos";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AI Design Academy Membership | Join Our Community</title>
        <meta 
          name="description" 
          content="Join an elite community of developers. Transform your coding skills through hands-on projects, expert mentorship, and exclusive networking opportunities." 
        />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        <main>
          <HeroSection />
          
          <CohortCompanyLogos />
          
          <CohortTestimonialsSection />
          
          <TestimonialsSection />
          
          {/* Pricing Section */}
          <section className="py-24 px-4 md:px-10 lg:px-[120px]">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Choose Your Learning Path
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Select the format that fits your schedule and learning style
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Self-Paced Course */}
                <Card className="relative border-2 hover:border-primary/50 transition-all">
                  <CardHeader className="space-y-4">
                    <CardTitle className="text-3xl">Self-Paced Course</CardTitle>
                    <CardDescription className="text-base">
                      Learn at your own pace with lifetime access
                    </CardDescription>
                    <div className="pt-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold">$299</span>
                        <span className="text-muted-foreground">one-time</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-4">
                      {[
                        "Lifetime access to all content",
                        "50+ bite-size video lessons",
                        "Interactive exercises & quizzes",
                        "Downloadable resources",
                        "Community forum access",
                        "Self-paced learning"
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="lg" className="w-full">
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
                
                {/* Live Cohort */}
                <Card className="relative border-2 border-primary shadow-lg shadow-primary/20">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    Popular
                  </div>
                  <CardHeader className="space-y-4">
                    <CardTitle className="text-3xl">Live Cohort</CardTitle>
                    <CardDescription className="text-base">
                      Join a guided cohort with live sessions
                    </CardDescription>
                    <div className="pt-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold">$999</span>
                        <span className="text-muted-foreground">8 weeks</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-4">
                      {[
                        "Everything in Self-Paced",
                        "16 live sessions with experts",
                        "Weekly group coaching",
                        "Real-world AI projects",
                        "1-on-1 mentorship sessions",
                        "Certificate of completion",
                        "Exclusive alumni network"
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="cta" size="lg" className="w-full">
                      Join Next Cohort
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>
          
          {/* Who is this for? Section */}
          <section className="py-24 px-4 md:px-10 lg:px-[120px] bg-card/30">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Who is this for?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Our membership is designed for professionals at different stages of their AI journey
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 items-stretch">
                {/* AI Consultants */}
                <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors h-full flex flex-col">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">AI Consultants</h3>
                  <p className="text-muted-foreground leading-relaxed">
                  Independent consultants looking to expand their AI expertise, stay updated, and offer cutting-edge solutions to their stakeholders and clients. Perfect for staying ahead of industry trends.
                  </p>
                </div>
                
                {/* Cohort Members */}
                <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors h-full flex flex-col">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Cohort Members</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cohort members who want continued access to live sessions,office hours, and ongoing support.
                  </p>
                </div>
                
                {/* Business Product & Business Status */}
                <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors h-full flex flex-col">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Business Owners</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Product managers, business leaders, and entrepreneurs who need to understand AI capabilities to make informed decisions and drive innovation in their organizations.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <footer className="border-t border-border py-12 bg-card/30">
          <div className="px-4 md:px-10 lg:px-[120px] text-center text-sm text-muted-foreground">
            <div className="max-w-[1200px] mx-auto">
            <p>© 2025 AI Academy membership. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
