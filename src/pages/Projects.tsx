import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code2, Sparkles, Palette, ShoppingCart, Calendar, MessageSquare } from "lucide-react";
import { Helmet } from "react-helmet";

const projects = [
  {
    title: "AI Design Tool",
    description: "A powerful design tool that uses AI to generate UI components and layouts. Built with Lovable and integrated with GPT-4.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    tags: ["Lovable", "React", "AI"],
    icon: Palette,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Code Snippet Manager",
    description: "Organize and share your favorite code snippets with the community. Features syntax highlighting and AI-powered search.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    tags: ["Cursor", "TypeScript", "Firebase"],
    icon: Code2,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "E-Commerce Dashboard",
    description: "Modern e-commerce admin dashboard with real-time analytics, inventory management, and sales tracking.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["v0", "Next.js", "Stripe"],
    icon: ShoppingCart,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Meeting Scheduler",
    description: "Smart meeting scheduler that integrates with multiple calendar services and uses AI to find optimal meeting times.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    tags: ["Bolt", "React", "Calendar API"],
    icon: Calendar,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Chat Platform",
    description: "Real-time chat application with AI-powered message suggestions and smart replies. Supports multiple channels.",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
    tags: ["Lovable", "WebSocket", "OpenAI"],
    icon: MessageSquare,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Content Generator",
    description: "Generate high-quality content for blogs, social media, and marketing with AI. Features templates and customization.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
    tags: ["Cursor", "AI", "React"],
    icon: Sparkles,
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects - Vibe Coding Mastermind</title>
        <meta 
          name="description" 
          content="Explore amazing projects built by our community using AI coding tools like Cursor, Lovable, v0, and Bolt." 
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
                    Community Showcase
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
                  Projects
                  <span className="block bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                    Built with AI
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Discover amazing projects created by our community using cutting-edge AI coding tools.
                </p>
              </div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-24 md:py-32 relative">
            <div className="container px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="group relative rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 overflow-hidden"
                  >
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                          <project.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3 pt-4">
                        <Button variant="outline" size="sm" className="flex-1 group/btn">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          Live Demo
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 group/btn">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-hero opacity-50" />
            
            <div className="container px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Ready to Build Your Own Project?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Join our community and start creating amazing projects with AI coding tools.
                </p>
                <Button variant="cta" size="xl">
                  Join the Mastermind
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

export default Projects;