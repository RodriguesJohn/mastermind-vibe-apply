import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { Sparkles, Zap, BookOpen, Award, Code, Database, Cpu, Globe, Shield, Settings, Rocket, Play, Clock } from "lucide-react";
import { SparklesText } from "@/components/SparklesText";
import { RainbowButton } from "@/components/RainbowButton";

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
      duration: "2-3 hours",
      description: "Build a solid foundation in artificial intelligence and large language models",
      topics: [
        "Understanding AI vs Traditional Programming",
        "Introduction to Large Language Models (GPT, Claude, Gemini)",
        "Tokenization and Model Architecture",
        "Prompt Engineering Fundamentals",
        "AI Ethics and Responsible Development",
        "Setting up your AI development environment"
      ],
      project: "Build your first AI-powered chatbot",
      price: "FREE",
      isFree: true
    },
    {
      module: "Module 2",
      title: "AI Development Tools Mastery",
      icon: Code,
      duration: "3-4 hours",
      description: "Master the essential tools that will accelerate your AI development workflow",
      topics: [
        "Cursor IDE: AI-powered code editor",
        "Lovable: Rapid AI application prototyping",
        "GitHub Copilot and AI pair programming",
        "Claude Desktop and advanced prompting",
        "AI code review and optimization",
        "Version control with AI assistance"
      ],
      project: "Create a full-stack app using AI tools in under 2 hours",
      price: "$99",
      isFree: false
    },
    {
      module: "Module 3",
      title: "Vector Databases & Embeddings",
      icon: Database,
      duration: "2-3 hours",
      description: "Learn to work with embeddings and vector databases for intelligent data retrieval",
      topics: [
        "Understanding embeddings and vector similarity",
        "Pinecone, Weaviate, and ChromaDB setup",
        "Text chunking and preprocessing strategies",
        "Semantic search implementation",
        "RAG (Retrieval-Augmented Generation) patterns",
        "Vector database optimization and scaling"
      ],
      project: "Build a semantic search engine with RAG",
      price: "$99",
      isFree: false
    },
    {
      module: "Module 4",
      title: "AI API Integration & Management",
      icon: Globe,
      duration: "2-3 hours",
      description: "Integrate multiple AI services and manage API costs effectively",
      topics: [
        "OpenAI API integration and best practices",
        "Anthropic Claude API setup",
        "Google Gemini and Vertex AI",
        "API rate limiting and error handling",
        "Cost optimization strategies",
        "Multi-provider fallback systems"
      ],
      project: "Create a multi-provider AI service with failover",
      price: "$99",
      isFree: false
    },
    {
      module: "Module 5",
      title: "Security & Production Best Practices",
      icon: Shield,
      duration: "2-3 hours",
      description: "Ensure your AI applications are secure, reliable, and production-ready",
      topics: [
        "AI security vulnerabilities and mitigation",
        "Input validation and sanitization",
        "API key management and environment variables",
        "Rate limiting and abuse prevention",
        "Monitoring and logging for AI applications",
        "GDPR compliance and data privacy"
      ],
      project: "Implement security measures in your AI app",
      price: "$99",
      isFree: false
    },
    {
      module: "Module 6",
      title: "Performance Optimization & Scaling",
      icon: Settings,
      duration: "2-3 hours",
      description: "Optimize your AI applications for performance and scale them effectively",
      topics: [
        "Caching strategies for AI responses",
        "Async processing and queue management",
        "Database optimization for AI workloads",
        "CDN integration for AI assets",
        "Load balancing and horizontal scaling",
        "Performance monitoring and analytics"
      ],
      project: "Optimize and scale your AI application",
      price: "$99",
      isFree: false
    },
    {
      module: "Module 7",
      title: "Deployment & DevOps for AI",
      icon: Rocket,
      duration: "3-4 hours",
      description: "Deploy your AI applications with confidence using modern DevOps practices",
      topics: [
        "Containerization with Docker for AI apps",
        "Kubernetes deployment strategies",
        "CI/CD pipelines for AI applications",
        "Cloud deployment (AWS, GCP, Azure)",
        "Serverless AI applications",
        "Monitoring and maintenance in production"
      ],
      project: "Deploy your AI application to production",
      price: "$99",
      isFree: false
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
              <section className="py-32 px-4 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">AI for Designers & Product Leaders</span>
                </div>
                
                    <div className="mb-12">
                      <SparklesText
                        text="AI for Designers 101"
                        className="text-4xl md:text-5xl font-bold text-white"
                        sparklesCount={15}
                        colors={{
                          first: "#3B82F6", // Blue
                          second: "#8B5CF6" // Purple
                        }}
                      />
                    </div>
                
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
                      Master AI development with our comprehensive course designed for designers and product leaders.
                      Learn to build AI-powered applications from scratch.
                    </p>

                    {/* CTA Button */}
                    <div className="text-center mb-20">
                      <RainbowButton className="text-lg">
                        Enroll Today for $99
                      </RainbowButton>
                    </div>

                    {/* YouTube Video */}
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
              </div>
            </div>
          </section>


          {/* What You'll Learn */}
          <section className="py-24 px-4 bg-card/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
                What You'll Learn
              </h2>
              
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
                  <div 
                    key={index}
                    className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors animate-in fade-in slide-in-from-bottom-8 duration-1000"
                    style={{ animationDelay: `${800 + index * 100}ms` }}
                  >
                    <item.icon className="w-10 h-10 text-primary mb-6" />
                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Modules Section */}
          <section className="py-24 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-800">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Course Modules
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Master AI development through our comprehensive, hands-on modules designed to take you from beginner to expert.
                </p>
              </div>

              <div className="space-y-8">
                {modules.map((module, index) => {
                  const moduleNumber = index + 1;

                  return (
                    <div 
                      key={index}
                      className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer animate-in fade-in slide-in-from-bottom-8 duration-1000"
                      style={{ animationDelay: `${1000 + index * 100}ms` }}
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
                  );
                })}
              </div>

              {/* Course Benefits */}
              <div className="mt-20 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1800">
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
            </div>
          </section>

              {/* CTA Section */}
              <section className="py-24 px-4">
                <div className="container mx-auto max-w-3xl text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Ready to Start Your AI Journey?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-12">
                    Join hundreds of developers who are already building the future with AI.
                  </p>
                  
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
