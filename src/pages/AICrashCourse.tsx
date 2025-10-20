import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { Sparkles, Zap, BookOpen, Award, Code, Database, Cpu, Globe, Shield, Settings, Rocket, Play, Clock } from "lucide-react";
import { SparklesText } from "@/components/SparklesText";
import { BlurFade } from "@/components/BlurFade";

const AICrashCourse = () => {
  const handleModuleClick = (moduleNumber: number) => {
    // Module click handler - will be connected to external platform later
    console.log(`Opening Module ${moduleNumber}`);
  };

  const modules = [
    {
      module: "Part 1",
      title: "How to get started with AI",
      icon: Cpu,
      description: "Build a solid foundation in artificial intelligence and large language models"
    },
    {
      module: "Part 2",
      title: "What Skills Do You Need to Learn?",
      icon: Code,
      description: "Master the essential tools that will accelerate your AI development workflow"
    },
    {
      module: "Part 3",
      title: "Learn from Jouney Learning AI",
      icon: Database,
      description: "Learn to work with embeddings and vector databases for intelligent data retrieval"
    },
    {
      module: "Part 4",
      title: "Core Area of AI to Master",
      icon: Globe,
      description: "Integrate multiple AI services and manage API costs effectively"
    },
    {
      module: "Part 5",
      title: "What is vibe coding and how to use it?",
      icon: Shield,
      description: "Ensure your AI applications are secure, reliable, and production-ready"
    },
    {
      module: "Part 6",
      title: "What are AI Agents",
      icon: Settings,
      description: "Optimize your AI applications for performance and scale them effectively"
    },
    {
      module: "Part 7",
      title: "Industry trends and resources to stay updated",
      icon: Rocket,
      description: "Deploy your AI applications with confidence using modern DevOps practices"
    },
    {
      module: "Part 8",
      title: "Industry Product Designers Podcast",
      icon: Play,
      description: "Listen to insights from leading product designers and AI practitioners in the industry"
    },
    {
      module: "Part 9",
      title: "What's Next and Further Resources",
      icon: Clock,
      description: "Plan your continued learning journey with curated resources and next steps"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI for Designers and Product Leaders 101 - Vibe Coding Mastermind</title>
        <meta 
          name="description" 
          content="Master AI development with our comprehensive course designed for designers and product leaders. Learn to build AI-powered applications from scratch." 
        />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        
        <main>
              {/* Course Header */}
              <section className="py-28 px-4 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                <BlurFade delay={0.1} duration={0.8} yOffset={10} blur="8px">
                  <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">AI for Designers & Product Leaders</span>
                  </div>
                </BlurFade>
                
                    <BlurFade delay={0.2} duration={0.8} yOffset={14} blur="10px">
                      <div className="mb-6">
                        <SparklesText
                          text="AI for Designers 101"
                          className="text-4xl md:text-6xl font-medium  text-white"
                          sparklesCount={14}
                          colors={{
                            first: "#3B82F6", // Blue
                            second: "#8B5CF6" // Purple
                          }}
                        />
                      </div>
                    </BlurFade>
                
                    <BlurFade delay={0.3} duration={0.8} yOffset={12} blur="8px">
                      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                       Don't know where to start with AI? This course is for you.Provide a clear path to get started with AI, through 
                       well researched and practical insights.
                      </p>
                    </BlurFade>

                    {/* CTA Button */}
                    <BlurFade delay={0.4} duration={0.8} yOffset={10} blur="6px">
                      <div className="text-center mb-12">
                        <Button variant="default" size="lg" className="text-lg">
                          Enroll Today for $99
                        </Button>
                      </div>
                    </BlurFade>

                    {/* YouTube Video */}
                    <BlurFade delay={0.5} duration={0.8} yOffset={8} blur="6px">
                      <div className="max-w-4xl mx-auto">
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-card border border-border">
                          <iframe
                            src="https://www.youtube.com/embed/8UwrcVIyvWA"
                            title="AI for Designers 101 - Course Introduction"
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    </BlurFade>
              </div>
            </div>
          </section>


          {/* What You'll Learn */}
          <section className="py-24 px-4 bg-card/30">
            <div className="container mx-auto max-w-6xl">
              <BlurFade delay={0.1} duration={0.8} yOffset={10} blur="8px">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                  What You'll Learn
                </h2>
              </BlurFade>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Sparkles,
                    title: "AI Fundamentals",
                    description: "Understanding LLMs, embeddings, and vector databases"
                  },
                  {
                    icon: Zap,
                    title: "Practical Tools",
                    description: "Master Cursor, Lovable, and other AI-powered development tools"
                  },
                  {
                    icon: BookOpen,
                    title: "Real Projects",
                    description: "Build production-ready AI applications from scratch"
                  },
                  {
                    icon: Award,
                    title: "Best Practices",
                    description: "Learn prompt engineering, security, and optimization"
                  }
                ].map((item, index) => (
                  <BlurFade key={index} delay={0.2 + index * 0.1} duration={0.8} yOffset={10} blur="6px">
                    <div 
                      className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors h-full flex flex-col"
                    >
                      <item.icon className="w-10 h-10 text-primary mb-6" />
                      <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Modules Section */}
          <section className="py-24 px-4">
            <div className="container mx-auto max-w-6xl">
              <BlurFade delay={0.1} duration={0.8} yOffset={10} blur="8px">
                <div className="text-center mb-20">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Course Modules
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Master AI development through our comprehensive, hands-on modules designed to take you from beginner to expert.
                  </p>
                </div>
              </BlurFade>

              <div className="space-y-8">
                {modules.map((module, index) => {
                  const moduleNumber = index + 1;

                  return (
                    <BlurFade key={index} delay={0.2 + index * 0.1} duration={0.8} yOffset={10} blur="6px">
                      <div 
                        className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
                        onClick={() => handleModuleClick(moduleNumber)}
                      >
                      <div className="flex items-start gap-6">
                        {/* Module Icon */}
                        <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                          <module.icon className="w-7 h-7 text-primary" />
                        </div>

                        {/* Module Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-sm font-medium text-muted-foreground">
                              {module.module}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold mb-3 text-foreground">
                            {module.title}
                          </h3>
                          
                          <p className="text-sm mb-4 text-muted-foreground">
                            {module.description}
                          </p>
                        </div>
                      </div>
                      </div>
                    </BlurFade>
                  );
                })}
              </div>

              {/* Course Benefits */}
              <BlurFade delay={0.3} duration={0.8} yOffset={10} blur="8px">
              <div className="mt-20 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-10">
                <h3 className="text-2xl font-bold text-center mb-10">Why This Course Works</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                      <BookOpen className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-3">Progressive Learning</h4>
                    <p className="text-sm text-muted-foreground">Each module builds on the previous one, ensuring steady skill development</p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                      <Zap className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-3">Hands-on Projects</h4>
                    <p className="text-sm text-muted-foreground">Real-world projects in every module to reinforce learning</p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                      <Award className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-3">Industry Ready</h4>
                    <p className="text-sm text-muted-foreground">Skills that directly apply to professional AI development</p>
                  </div>
                </div>
              </div>
              </BlurFade>
            </div>
          </section>

              {/* CTA Section */}
              <section className="py-24 px-4">
                <div className="container mx-auto max-w-3xl text-center">
                  <BlurFade delay={0.1} duration={0.8} yOffset={10} blur="8px">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                      Ready to Start Your AI Journey?
                    </h2>
                  </BlurFade>
                  <BlurFade delay={0.2} duration={0.8} yOffset={10} blur="8px">
                    <p className="text-lg text-muted-foreground mb-12">
                      Join hundreds of developers who are already building the future with AI.
                    </p>
                  </BlurFade>
                  
                  <BlurFade delay={0.3} duration={0.8} yOffset={10} blur="6px">
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                      {/* Primary CTA */}
                      <Button variant="cta" size="lg" className="w-full sm:w-auto">
                        Enroll Now - $99
                      </Button>
                      
                      {/* Secondary CTA */}
                      <Button variant="outline" size="lg" className="w-full sm:w-auto">
                        Learn More
                      </Button>
                    </div>
                  </BlurFade>
                </div>
              </section>
        </main>
        
        <footer className="border-t border-border py-12 bg-card/30">
          <div className="container px-4 text-center text-sm text-muted-foreground">
            <p>© 2025 Vibe Coding Mastermind. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AICrashCourse;
