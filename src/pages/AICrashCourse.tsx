import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { Sparkles, Zap, BookOpen, Award } from "lucide-react";

const AICrashCourse = () => {
  return (
    <>
      <Helmet>
        <title>AI Crash Course - Vibe Coding Mastermind</title>
        <meta 
          name="description" 
          content="Master AI development with our comprehensive crash course. Learn to build AI-powered applications from scratch." 
        />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="min-h-screen flex items-center px-4 md:px-10 lg:px-[120px] py-20">
            <div className="container mx-auto max-w-[1200px] w-full">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">AI Crash Course</span>
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Start Here! AI Crash Course with 8 modules
                  </h1>
                  
                  <p className="text-xl text-muted-foreground">
                    Learn to build powerful AI applications with cutting-edge tools and frameworks. 
                    From fundamentals to deployment, we've got you covered.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="cta" size="lg">
                      Enroll Now
                    </Button>
                    <Button variant="outline" size="lg">
                      View Curriculum
                    </Button>
                  </div>
                </div>

                {/* Right Column - Video */}
                <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-card border border-border max-w-md mx-auto lg:mx-0">
                  {/* Video placeholder - replace with actual video */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1" />
                      </div>
                      <p className="text-muted-foreground">Video Coming Soon</p>
                    </div>
                  </div>
                  
                  {/* Uncomment and add your video source */}
                  {/* <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src="/video/crash-course.mp4" type="video/mp4" />
                  </video> */}
                  
                  {/* Or use an embedded video */}
                  {/* <iframe
                    className="w-full h-full"
                    src="YOUR_VIDEO_URL"
                    title="AI Crash Course Preview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  /> */}
                </div>
              </div>
            </div>
          </section>

          {/* What You'll Learn */}
          <section className="py-20 px-4 bg-card/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                What You'll Learn
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <div 
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
                  >
                    <item.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your AI Journey?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join hundreds of developers who are already building the future with AI.
              </p>
              <Button variant="cta" size="lg">
                Enroll in AI Crash Course
              </Button>
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
