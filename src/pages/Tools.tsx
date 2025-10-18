import { Navigation } from "@/components/Navigation";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";

interface Tool {
  name: string;
  description: string;
  url: string;
  category: string;
}

const tools: Tool[] = [
  // Vibe Coding Tools
  {
    name: "Cursor",
    description: "AI-powered code editor built for pair programming with AI",
    url: "https://cursor.sh",
    category: "vibe-coding",
  },
  {
    name: "Lovable",
    description: "Build full-stack web apps with AI in minutes",
    url: "https://lovable.dev",
    category: "vibe-coding",
  },
  {
    name: "v0",
    description: "Generate UI with shadcn/ui from text prompts and images",
    url: "https://v0.dev",
    category: "vibe-coding",
  },
  {
    name: "Bolt.new",
    description: "Prompt, run, edit, and deploy full-stack web apps",
    url: "https://bolt.new",
    category: "vibe-coding",
  },
  {
    name: "Replit Agent",
    description: "Build and deploy software collaboratively with AI",
    url: "https://replit.com",
    category: "vibe-coding",
  },
  {
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write code faster",
    url: "https://github.com/features/copilot",
    category: "vibe-coding",
  },
  
  // Productivity
  {
    name: "Claude",
    description: "Advanced AI assistant for analysis, writing, and coding",
    url: "https://claude.ai",
    category: "productivity",
  },
  {
    name: "ChatGPT",
    description: "OpenAI's conversational AI for various tasks",
    url: "https://chat.openai.com",
    category: "productivity",
  },
  {
    name: "Notion AI",
    description: "AI-powered workspace for notes, docs, and wikis",
    url: "https://notion.so",
    category: "productivity",
  },
  {
    name: "Perplexity",
    description: "AI-powered search and answer engine",
    url: "https://perplexity.ai",
    category: "productivity",
  },
  {
    name: "Superhuman",
    description: "AI-powered email client for productivity",
    url: "https://superhuman.com",
    category: "productivity",
  },
  {
    name: "Mem",
    description: "AI-powered note-taking and knowledge management",
    url: "https://mem.ai",
    category: "productivity",
  },
  
  // Presentations
  {
    name: "Gamma",
    description: "Create beautiful presentations with AI",
    url: "https://gamma.app",
    category: "presentations",
  },
  {
    name: "Beautiful.ai",
    description: "AI-powered presentation software",
    url: "https://beautiful.ai",
    category: "presentations",
  },
  {
    name: "Pitch",
    description: "Collaborative presentation software for teams",
    url: "https://pitch.com",
    category: "presentations",
  },
  {
    name: "Tome",
    description: "AI-native format for presentations and storytelling",
    url: "https://tome.app",
    category: "presentations",
  },
  
  // Design Tools
  {
    name: "Figma",
    description: "Collaborative interface design tool",
    url: "https://figma.com",
    category: "design",
  },
  {
    name: "Canva",
    description: "Design anything with AI-powered templates",
    url: "https://canva.com",
    category: "design",
  },
  {
    name: "Framer",
    description: "Design and publish stunning websites",
    url: "https://framer.com",
    category: "design",
  },
  {
    name: "Uizard",
    description: "AI-powered UI design tool",
    url: "https://uizard.io",
    category: "design",
  },
  {
    name: "Relume",
    description: "AI website builder and design system",
    url: "https://relume.io",
    category: "design",
  },
  {
    name: "Diagram",
    description: "AI-powered design tools for creative work",
    url: "https://diagram.com",
    category: "design",
  },
  
  // Video Tools
  {
    name: "Descript",
    description: "Edit videos and podcasts like editing a document",
    url: "https://descript.com",
    category: "video",
  },
  {
    name: "Runway",
    description: "AI-powered creative suite for video editing",
    url: "https://runwayml.com",
    category: "video",
  },
  {
    name: "CapCut",
    description: "AI-powered video editing for everyone",
    url: "https://capcut.com",
    category: "video",
  },
  {
    name: "Synthesia",
    description: "Create AI videos with avatars and voiceovers",
    url: "https://synthesia.io",
    category: "video",
  },
  {
    name: "Pictory",
    description: "Turn text into engaging videos automatically",
    url: "https://pictory.ai",
    category: "video",
  },
  {
    name: "HeyGen",
    description: "AI video generation platform for business",
    url: "https://heygen.com",
    category: "video",
  },
  
  // Image Generation
  {
    name: "Midjourney",
    description: "AI art generator creating stunning images",
    url: "https://midjourney.com",
    category: "image-generation",
  },
  {
    name: "DALL-E 3",
    description: "OpenAI's advanced image generation model",
    url: "https://openai.com/dall-e-3",
    category: "image-generation",
  },
  {
    name: "Stable Diffusion",
    description: "Open-source AI image generation",
    url: "https://stability.ai",
    category: "image-generation",
  },
  {
    name: "Leonardo.ai",
    description: "AI-powered creative content generation",
    url: "https://leonardo.ai",
    category: "image-generation",
  },
  {
    name: "Ideogram",
    description: "AI image generation with text rendering",
    url: "https://ideogram.ai",
    category: "image-generation",
  },
  {
    name: "Adobe Firefly",
    description: "Adobe's generative AI for creative work",
    url: "https://firefly.adobe.com",
    category: "image-generation",
  },
];

const categories = [
  { id: "all", label: "All Tools" },
  { id: "vibe-coding", label: "Vibe Coding" },
  { id: "productivity", label: "Productivity" },
  { id: "presentations", label: "Presentations" },
  { id: "design", label: "Design" },
  { id: "video", label: "Video" },
  { id: "image-generation", label: "Image Generation" },
];

const Tools = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTools = activeCategory === "all" 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>AI Tools Directory - Vibe Coding Mastermind</title>
        <meta 
          name="description" 
          content="Discover the best AI tools for coding, design, productivity, presentations, video editing, and image generation." 
        />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        
        <main className="px-4 md:px-10 lg:px-[120px] py-16 md:py-24">
          <div className="max-w-[1200px] mx-auto">
            {/* Header */}
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl md:text-6xl font-bold">
                AI Tools Directory
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Curated collection of the best AI tools to supercharge your workflow
              </p>
            </div>

            {/* Filter Tabs */}
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-12">
              <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto gap-2 bg-transparent">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 group-hover:scale-[1.02]">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {tool.name}
                        </CardTitle>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {tool.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            {filteredTools.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No tools found in this category.
                </p>
              </div>
            )}
          </div>
        </main>

        <footer className="border-t border-border py-12 bg-card/30">
          <div className="px-4 md:px-10 lg:px-[120px] text-center text-sm text-muted-foreground">
            <div className="max-w-[1200px] mx-auto">
              <p>© 2025 Vibe Coding Mastermind. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Tools;
