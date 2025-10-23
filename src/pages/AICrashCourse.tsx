import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { Sparkles, Zap, BookOpen, Award, Code, Database, Cpu, Globe, Shield, Settings, Rocket, Play, Clock } from "lucide-react";
import { SparklesText } from "@/components/SparklesText";
import { BlurFade } from "@/components/BlurFade";
import BookImage from "@/assets/Book.png";

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
      description: "Get a clear 5-step roadmap to start your AI journey. Learn exactly where to begin, what to focus on, and how to build momentum fast."
    },
    {
      module: "Part 2",
      title: "What Skills Do You Need to Learn?",
      icon: Code,
      description: "Get a clear 5-step roadmap to start your AI journey. Learn exactly where to begin, what to focus on, and how to build momentum fast."
    },
    {
      module: "Part 3",
      title: "Learn from Jouney Learning AI",
      icon: Database,
      description: "Learn from my journey of mastering AI , how I stay updated with the latest advancements and how you can apply the same approach to level up your own skills."
    },
    {
      module: "Part 4",
      title: "Core Area of AI to Master",
      icon: Globe,
      description: "Understand the four core areas of AI you need to master. Gain a clear framework to cut through the overwhelm and focus on what truly matters."
    },
    {
      module: "Part 5",
      title: "What is vibe coding and how to use it?",
      icon: Shield,
      description: "Learn how to communicate your ideas through code-based prototyping and build real products. Discover how to make this a core part of your product and design process."
    },
    {
      module: "Part 6",
      title: "What are AI Agents",
      icon: Settings,
      description: "Understand what AI agents are, how they’re shaping modern products and tools, and how you can start building your own."
    },
    {
      module: "Part 7",
      title: "Industry trends and resources to stay updated",
      icon: Rocket,
      description: "Stay ahead by keeping up with the industry’s constant evolution. Learn where to find reliable resources, how to track emerging trends, and how to stay informed as AI and product design rapidly change, so you can adapt, innovate, and lead with confidence."
    },
    {
      module: "Part 8",
      title: "Industry Product Designers Podcast",
      icon: Play,
      description: "Hear directly from industry experts as they share how they’re designing real-world AI products, tackling challenges, and shaping the future of intelligent experiences."
    },
    {
      module: "Part 9",
      title: "What's Next and Further Resources",
      icon: Clock,
      description: "Learn about the next steps and discover future resources to keep growing your AI skills and continue leveling up in your journey."
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
              <section className="py-8 sm:py-20 md:py-24 lg:py-28 px-2 sm:px-6 md:px-8 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                <BlurFade delay={0.1} duration={0.8} yOffset={10} blur="8px">
                  <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-2 sm:px-4 sm:py-2 mb-4 sm:mb-6">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    <span className="text-xs sm:text-sm font-medium text-primary">AI for Designers & Product Leaders</span>
                  </div>
                </BlurFade>
                
                    <BlurFade delay={0.2} duration={0.8} yOffset={14} blur="10px">
                      <div className="mb-4 sm:mb-6">
                        <SparklesText
                          text="AI for Designers 101"
                          className="text-[40px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium text-white"
                          sparklesCount={14}
                          colors={{
                            first: "#3B82F6", // Blue
                            second: "#8B5CF6" // Purple
                          }}
                        />
                      </div>
                    </BlurFade>
                
                    <BlurFade delay={0.3} duration={0.8} yOffset={12} blur="8px">
                      <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
                       Don't know where to start with AI? This course is for you. Provide a clear path to get started with AI, through 
                       well researched and practical insights.
                      </p>
                    </BlurFade>

                    {/* CTA Buttons */}
                    <BlurFade delay={0.4} duration={0.8} yOffset={10} blur="6px">
                      <div className="text-center mb-8 sm:mb-12">
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
                          <Button variant="default" size="lg" className="w-full sm:w-auto text-base sm:text-lg">
                            Enroll Today for $99
                          </Button>
                          <Button variant="outline" size="lg" className="w-full sm:w-auto text-base sm:text-lg">
                            Login
                          </Button>
                        </div>
                      </div>
                    </BlurFade>

                    {/* YouTube Video */}
                    <BlurFade delay={0.5} duration={0.8} yOffset={8} blur="6px">
                      <div className="max-w-4xl mx-auto px-4">
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-card border border-border">
                          <iframe
                            src="https://www.youtube.com/embed/6vnUzMOrAPw"
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
          <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-card/30">
            <div className="container mx-auto max-w-6xl">
              <BlurFade delay={0.1} duration={0.8} yOffset={10} blur="8px">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
                  What You'll Learn
                </h2>
              </BlurFade>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {[
                  {
                    icon: Sparkles,
                    title: "Know where to start",
                    description: "Get insights on how to get started with AI and discover 5 steps to future-proof your career."
                
                  },
                  {
                    icon: Zap,
                    title: "Learn about the must-have skills.",
                    description: "Learn about the must-have skills to become an AI product designer"
                  },
                  {
                    icon: BookOpen,
                    title: "Learn from Journey Learning AI",
                    description: "Learn about John’s journey to becoming an AI product designer and how he built his career in AI design."
                  },
                  {
                    icon: Award,
                    title: "How to Go from Theory to Application ",
                    description: "Learn how to apply the theories you've learned to real-world projects and build your own AI products."
                  }
                ].map((item, index) => (
                  <BlurFade key={index} delay={0.2 + index * 0.1} duration={0.8} yOffset={10} blur="6px">
                    <div 
                      className="bg-card border border-border rounded-lg p-4 sm:p-6 md:p-8 hover:border-primary/50 transition-colors h-full flex flex-col"
                    >
                      <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-4 sm:mb-6" />
                      <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Modules Section */}
          <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
            <div className="container mx-auto max-w-6xl">
              <BlurFade delay={0.1} duration={0.8} yOffset={10} blur="8px">
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                    Course Modules
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
                    Master AI development through our comprehensive, hands-on modules designed to take you from beginner to expert.
                  </p>
                </div>
              </BlurFade>

              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {modules.map((module, index) => {
                  const moduleNumber = index + 1;

                  return (
                    <BlurFade key={index} delay={0.2 + index * 0.1} duration={0.8} yOffset={10} blur="6px">
                      <div 
                        className="bg-card border border-border rounded-xl p-4 sm:p-6 md:p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
                        onClick={() => handleModuleClick(moduleNumber)}
                      >
                      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                        {/* Module Icon */}
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <module.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                        </div>

                        {/* Module Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2 sm:mb-3">
                            <span className="text-sm sm:text-base font-medium text-muted-foreground">
                              {module.module}
                            </span>
                          </div>
                          
                          <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3 text-foreground">
                            {module.title}
                          </h3>
                          
                          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                            {module.description}
                          </p>
                        </div>
                      </div>
                      </div>
                    </BlurFade>
                  );
                })}
              </div>

              {/* Get AI Foundation Ebook */}
              <BlurFade delay={0.3} duration={0.8} yOffset={10} blur="8px">
              <div className="mt-12 sm:mt-16 md:mt-20 bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Ebook Image */}
                  <div className="bg-white p-6 sm:p-8 md:p-12 flex items-center justify-center">
                    <div className="w-full max-w-xs aspect-[3/4] bg-white rounded-lg shadow-2xl flex items-center justify-center border-2 border-gray-200 overflow-hidden">
                      <img src={BookImage} alt="AI Foundation Ebook" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Bonus: Get an AI Foundation Ebook</h3>
                    <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                    Included in the course, you'll get a comprehensive AI Foundations eBook that simplifies the complex world of AI and helps you build the vocabulary to understand the latest advancements written in simple, relatable terms.
                    </p>
                  
                  </div>
                </div>
              </div>
              </BlurFade>
            </div>
          </section>

              {/* CTA Section */}
              <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
                <div className="container mx-auto max-w-3xl text-center">
                  <BlurFade delay={0.1} duration={0.8} yOffset={10} blur="8px">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8">
                      Ready to Start Your AI Journey?
                    </h2>
                  </BlurFade>
                  <BlurFade delay={0.2} duration={0.8} yOffset={10} blur="8px">
                    <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 px-4">
                     Enroll today and get started with your AI journey today
                    </p>
                  </BlurFade>
                  
                  <BlurFade delay={0.3} duration={0.8} yOffset={10} blur="6px">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
                      {/* Primary CTA */}
                      <Button variant="cta" size="lg" className="w-full sm:w-auto text-base sm:text-lg">
                        Enroll Today for $99
                      </Button>
                      
                      {/* Secondary CTA */}
                      
                    </div>
                  </BlurFade>
                </div>
              </section>
        </main>
        
        <footer className="border-t border-border py-12 bg-card/30">
          <div className="container px-4 text-center text-sm text-muted-foreground">
            <p>© AI Design Academy. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AICrashCourse;
