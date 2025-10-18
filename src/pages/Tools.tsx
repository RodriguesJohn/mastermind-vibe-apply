import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles, Bot, Cpu, Zap, Check } from "lucide-react";
import { Helmet } from "react-helmet";
import cursorLogo from "@/assets/logos/cursor.png";
import lovableLogo from "@/assets/logos/lovable.png";
import v0Logo from "@/assets/logos/v0.png";
import boltLogo from "@/assets/logos/bolt.png";

const tools = [
  {
    name: "Cursor",
    logo: cursorLogo,
    icon: Sparkles,
    tagline: "The AI-first Code Editor",
    description: "Cursor is a powerful AI-powered code editor built for pair programming with AI. Write, edit, and refactor code with natural language commands.",
    features: [
      "AI-powered code completion",
      "Natural language code editing",
      "Multi-file editing",
      "Built on VS Code",
      "Privacy-focused",
    ],
    url: "https://cursor.com",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    name: "Lovable",
    logo: lovableLogo,
    icon: Bot,
    tagline: "Build Full-Stack Apps with AI",
    description: "Lovable lets you build complete web applications through conversation. From design to deployment, create production-ready apps in minutes.",
    features: [
      "Visual editor with AI chat",
      "Full-stack capabilities",
      "Instant deployment",
      "Real-time preview",
      "Export code anytime",
    ],
    url: "https://lovable.dev",
    gradient: "from-pink-500/20 to-orange-500/20",
  },
  {
    name: "v0",
    logo: v0Logo,
    icon: Cpu,
    tagline: "Generate UI with AI",
    description: "v0 by Vercel generates beautiful UI components from text descriptions. Get production-ready React code instantly.",
    features: [
      "Text to UI generation",
      "shadcn/ui components",
      "Tailwind CSS styling",
      "Copy-paste ready code",
      "Customizable outputs",
    ],
    url: "https://v0.dev",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    name: "Bolt",
    logo: boltLogo,
    icon: Zap,
    tagline: "Prompt, Run, Edit, Deploy",
    description: "Bolt.new lets you prompt, run, edit, and deploy full-stack applications directly from your browser. Built by StackBlitz.",
    features: [
      "In-browser development",
      "Full-stack support",
      "Instant deployment",
      "Node.js environment",
      "Package management",
    ],
    url: "https://bolt.new",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
];

const Tools = () => {
  return (
    <>
      <Helmet>
        <title>AI Coding Tools - Vibe Coding Mastermind</title>
        <meta 
          name="description" 
          content="Discover and master the best AI coding tools: Cursor, Lovable, v0, and Bolt. Build faster with AI-powered development." 
        />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="inline-block">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
                    AI-Powered Development
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
                  AI Coding
                  <span className="block bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                    Tools
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Master the tools that are revolutionizing software development. Build faster, smarter, and better with AI.
                </p>
              </div>
            </div>
          </section>

          {/* Tools Section */}
          <section className="py-24 md:py-32 relative">
            <div className="container px-4">
              <div className="space-y-16">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className={`group relative p-8 md:p-12 rounded-3xl bg-gradient-to-br ${tool.gradient} border border-border hover:border-primary/50 transition-all duration-300`}
                  >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Content */}
                      <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                        <div className="flex items-center gap-4">
                          <img 
                            src={tool.logo} 
                            alt={tool.name}
                            className="w-16 h-16 rounded-xl"
                          />
                          <div>
                            <h2 className="text-3xl md:text-4xl font-bold">{tool.name}</h2>
                            <p className="text-muted-foreground">{tool.tagline}</p>
                          </div>
                        </div>
                        
                        <p className="text-lg leading-relaxed text-foreground/80">
                          {tool.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-3">
                          {tool.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                                <Check className="w-3 h-3 text-primary" />
                              </div>
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <Button 
                          variant="outline" 
                          size="lg"
                          className="group/btn hover:bg-primary/10"
                          asChild
                        >
                          <a href={tool.url} target="_blank" rel="noopener noreferrer">
                            Visit {tool.name}
                            <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </a>
                        </Button>
                      </div>

                      {/* Icon Visualization */}
                      <div className={`flex items-center justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
                          <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border border-primary/20">
                            <tool.icon className="w-24 h-24 text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Comparison Section */}
          <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-hero opacity-50" />
            
            <div className="container px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Which Tool Is Right for You?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Each tool excels in different areas. Learn them all in our mastermind program.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 text-left mt-12">
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <h3 className="text-xl font-semibold mb-3">Best for Code Editing</h3>
                    <p className="text-muted-foreground mb-4">Use <span className="text-primary font-medium">Cursor</span> for AI-powered code completion, refactoring, and working with existing codebases.</p>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <h3 className="text-xl font-semibold mb-3">Best for Full Apps</h3>
                    <p className="text-muted-foreground mb-4">Use <span className="text-primary font-medium">Lovable</span> to build complete web applications from scratch with visual editing and instant deployment.</p>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <h3 className="text-xl font-semibold mb-3">Best for UI Components</h3>
                    <p className="text-muted-foreground mb-4">Use <span className="text-primary font-medium">v0</span> to generate beautiful, production-ready UI components with shadcn and Tailwind CSS.</p>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <h3 className="text-xl font-semibold mb-3">Best for Prototypes</h3>
                    <p className="text-muted-foreground mb-4">Use <span className="text-primary font-medium">Bolt</span> for rapid prototyping and full-stack development directly in your browser.</p>
                  </div>
                </div>

                <Button variant="cta" size="xl" className="mt-8">
                  Learn All Tools in Mastermind
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

export default Tools;