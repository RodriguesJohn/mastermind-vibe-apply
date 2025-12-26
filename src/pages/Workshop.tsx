import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { CheckCircle2, ArrowRight, Users, Target, Lightbulb, BookOpen, Calendar, MessageSquare, Clock, CalendarDays, Repeat } from "lucide-react";
import { DotScreenShader } from "@/components/DotScreenShader";
import WorkshopImage1 from "@/assets/Workshop1.png";
import WorkshopImage2 from "@/assets/Workshop2.png";
import WorkshopImage3 from "@/assets/Workshop 3.png";
import WorkshopHeaderImage from "@/assets/HeaderWorkshop.jpg";

const Workshop = () => {
  return (
    <>
      <Helmet>
        <title>AI Integration and Upskilling Workshops - AI Design Academy</title>
        <meta name="description" content="Personalized workshops for product and design teams to upskill in AI, build confidence, and integrate AI into real work." />
      </Helmet>

      <div className="bg-[#0E0E10] text-white selection:bg-white/20">
        <Navigation />
        
        <main className="pb-20">
          {/* Hero Section */}
          <section className="relative overflow-hidden border-b border-white/5 bg-[#0E0E10] py-20 sm:py-32 md:py-40 lg:py-48">
            <DotScreenShader />
            
            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Column: Text Content */}
                <div className="space-y-6 sm:space-y-8 text-left">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold tracking-tight" style={{ lineHeight: '61px' }}>
                    AI Integration and Upskilling Workshops
                  </h1>
                  <p className="text-lg sm:text-xl md:text-[20px] text-white/80 leading-relaxed">
                    Personalized for Product & Design Teams
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row pt-6">
                    <Button variant="cta" size="lg" className="w-full sm:w-auto sm:min-w-[200px]" asChild>
                      <a href="#apply">
                        Apply to book the workshop
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto sm:min-w-[200px] border-white/30 text-white hover:bg-white/10" asChild>
                      <a href="#sponsor">
                        Sponsor Workshop
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                {/* Right Column: Workshop Image */}
                <div className="relative">
                  <img 
                    src={WorkshopHeaderImage} 
                    alt="Workshop session" 
                    className="w-full h-auto rounded-lg border border-white/10 shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Introduction Section */}
          <section className="relative border-b border-white/5 bg-[#0E0E10] py-12 sm:py-16 md:py-20 overflow-hidden">
            <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                  These workshops are designed for product and design teams who want to upskill their people, build AI confidence, and integrate AI into real work, not just experiment with tools.
                </p>
                <div className="space-y-4 pt-2">
                  <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                    This is not a generic AI training or a one-size-fits-all workshop. Each engagement is customized to your team's skill level, workflows, and product context.
                  </p>
                  <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                    Workshops are offered on a limited, application-only basis.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Who this is for */}
          <section className="relative border-b border-white/5 bg-[#0E0E10] py-12 sm:py-16 md:py-20 overflow-hidden">
            <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-8">Who this is for</h2>
              
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                  These workshops are for teams that:
                </p>
                <ul className="space-y-3">
                  {[
                    "Want to upskill designers and product teams in AI",
                    "Feel overwhelmed by AI tools and shifting expectations",
                    "Need a shared foundation across design, product, and engineering",
                    "Want practical guidance, not hype or replacement narratives"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-lg md:text-xl text-white/70 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* What your team will gain */}
          <section className="relative border-b border-white/5 bg-[#0E0E10] py-12 sm:py-16 md:py-20 overflow-hidden">
            <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-8">What your team will gain</h2>
              
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                  Every workshop is tailored, but teams typically gain:
                </p>
                <ul className="space-y-3">
                  {[
                    "A shared understanding of AI fundamentals and agentic workflows",
                    "Confidence in using AI as a collaborator, not a crutch",
                    "Practical frameworks for AI-enabled design and product decisions",
                    "Hands-on experience applying AI to real team workflows",
                    "Clear pathways for upskilling without burnout",
                    "Alignment across roles and disciplines"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-lg md:text-xl text-white/70 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg md:text-xl text-white/60 italic leading-relaxed pt-2">
                  The focus is not speed alone, it's capability, clarity, and confidence.
                </p>
              </div>
            </div>
          </section>

          {/* What to expect */}
          <section className="relative border-b border-white/5 bg-[#0E0E10] py-12 sm:py-16 md:py-20 overflow-hidden">
            <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-8">What to expect</h2>
              
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                  These are live, hands-on, and highly interactive workshops. Workshops can be delivered both in-person or virtually online.
                </p>
                <ul className="space-y-3">
                  {[
                    "Pre-work to assess team maturity and goals",
                    "Guided sessions with real exercises and discussion",
                    "Content adjusted in real time to your team's needs",
                    "Emphasis on learning by doing, not passive training"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-lg md:text-xl text-white/70 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-4">
                    Workshops can be structured as:
                  </p>
                  <div className="grid gap-4 md:grid-cols-3">
                    {[
                      {
                        title: "Single sessions",
                        icon: Clock
                      },
                      {
                        title: "Multi-session upskilling programs",
                        icon: CalendarDays
                      },
                      {
                        title: "Ongoing enablement engagements",
                        icon: Repeat
                      }
                    ].map((item, index) => (
                      <Card key={index} className="border-white/10 bg-black/50">
                        <CardContent className="p-6 text-left">
                          <div className="flex items-start gap-3">
                            <item.icon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <p className="text-lg text-white/70">{item.title}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How it works */}
          <section className="relative border-b border-white/5 bg-[#0E0E10] py-12 sm:py-16 md:py-20 overflow-hidden">
            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-10">How it works</h2>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    step: "1",
                    title: "Apply to request a workshop",
                    description: "Share your team context, skill level, and goals."
                  },
                  {
                    step: "2",
                    title: "Review & alignment",
                    description: "Not all requests are accepted. If there's a fit, we'll define scope and outcomes."
                  },
                  {
                    step: "3",
                    title: "Custom workshop delivery",
                    description: "A personalized workshop focused on upskilling and enablement."
                  },
                  {
                    step: "4",
                    title: "Clear next steps",
                    description: "Your team leaves with shared understanding and a path forward."
                  }
                ].map((item, index) => (
                  <Card key={index} className="border-white/10 bg-black/50 flex flex-col">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-lg flex-shrink-0" aria-label={`Step ${item.step}`}>
                          {item.step}
                        </div>
                        <CardTitle className="text-xl leading-tight pt-1">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-base text-white/60 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>


          {/* CTA Section */}
          <section className="relative bg-[#0E0E10] py-16 sm:py-20 md:py-24 overflow-hidden border-t border-white/5">
            <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-10 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 tracking-tight">Apply to request a workshop</h2>
              <p className="text-base text-white/70 mb-8 max-w-2xl mx-auto px-2 leading-relaxed">
                If your team is ready to upskill, enable, and confidently work with AI, you can apply below.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-center">
                <Button variant="cta" size="lg" className="w-full sm:w-auto sm:min-w-[200px]" asChild>
                  <a href="#apply">
                    Apply to book the workshop
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto sm:min-w-[200px] border-white/30 text-white hover:bg-white/10" asChild>
                  <a href="#sponsor">
                    Sponsor a workshop
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Workshop;
