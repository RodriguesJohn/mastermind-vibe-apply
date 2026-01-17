import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Calendar, ArrowRight, Gift, Book, ShieldCheck, Video, CalendarDays } from "lucide-react";
import { Helmet } from "react-helmet";
import { DotScreenShader } from "@/components/DotScreenShader";
import { MeshGradient } from "@paper-design/shaders-react";

const CohortResourceHub = () => {
  return (
    <>
      <Helmet>
        <title>Cohort Resource Hub - AI Design Academy</title>
        <meta name="description" content="Access cohort resources, lessons, and tools for AI Mastery Cohort members." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          {/* Header Section */}
          <section className="relative py-16 md:py-24 bg-gradient-to-b from-background to-muted/20 border-b border-border overflow-hidden">
            <DotScreenShader />
            <div className="relative z-10 px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 tracking-tight">
                  Cohort Resource Hub
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                  Access your cohort resources, lessons, and tools to maximize your learning experience.
                </p>
              </div>
            </div>
          </section>

          {/* Resources Grid */}
          <section className="relative py-16 md:py-24 overflow-hidden">
            {/* Shader effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(147,51,234,0.15)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" style={{
              animation: "glowMove 8s ease-in-out infinite"
            }} aria-hidden="true" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(34,197,94,0.1)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" style={{
              animation: "glowPulse 6s ease-in-out infinite"
            }} aria-hidden="true" />
            <style>{`
              @keyframes glowMove {
                0%, 100% {
                  transform: translate(0, 0) scale(1);
                  opacity: 0.15;
                }
                50% {
                  transform: translate(20px, -30px) scale(1.1);
                  opacity: 0.25;
                }
              }
              @keyframes glowPulse {
                0%, 100% {
                  transform: scale(1);
                  opacity: 0.1;
                }
                50% {
                  transform: scale(1.15);
                  opacity: 0.2;
                }
              }
            `}</style>
            <div className="relative z-10 px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                {/* Three Column Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Membership Login Card with Shader */}
                  <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl bg-black flex flex-col">
                    {/* Colorful Shader Background */}
                    <div className="absolute inset-0 overflow-hidden">
                      <MeshGradient 
                        width={1200} 
                        height={400} 
                        colors={["#3B82F6", "#8B5CF6", "#EC4899", "#F59E0B"]} 
                        distortion={0.8} 
                        swirl={0.6} 
                        speed={0.42} 
                        offsetX={0.08} 
                      />
                    </div>
                    <CardHeader className="relative z-10 flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-xl text-white">Membership Login</CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed text-white/80">
                        Exclusive for Cohort Members Only. Access continuous courses, monthly live sessions, behind-the-scenes content, and community support.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10 mt-auto space-y-2">
                      <Button className="w-full group/btn" variant="default" size="lg">
                        Member Login
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                      <Button className="w-full group/btn bg-white/5 border-white/20 text-white hover:bg-white/10" variant="outline" size="lg">
                        Request Invite
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Invite-only 1:1 Call Card */}
                  <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-background to-primary/5 flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardHeader className="relative z-10 flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:scale-110 transition-transform duration-300">
                          <Calendar className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">Invite-only 1:1 Call</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        Schedule a personalized one-on-one session with your instructor for focused guidance.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10 mt-auto">
                      <Button className="w-full group/btn" variant="default" size="lg" asChild>
                        <a href="https://calendly.com/john-john-rodrigues/30min" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Book 1:1 Call
                          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Refer Others Card */}
                  <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-background to-accent/5 flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardHeader className="relative z-10 flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 group-hover:scale-110 transition-transform duration-300">
                          <Gift className="h-6 w-6 text-accent-foreground" />
                        </div>
                        <CardTitle className="text-xl">Refer Others</CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        How to refer: Recommend the cohort to others. Once someone you've recommended enrolls, please submit their name and LinkedIn URL to us. You will be compensated for each successful referral.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10 mt-auto">
                      <Button className="w-full group/btn" variant="default" size="lg" asChild>
                        <a href="https://tally.so/r/eqDO1Q" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                          <Users className="h-4 w-4" />
                          Refer Others
                          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default CohortResourceHub;

