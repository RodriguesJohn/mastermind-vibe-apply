import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Home, Menu, ChevronDown, ChevronUp, ChevronRight, ChevronLeft, BookOpen, FileText, Newspaper, Wrench, Search, Sparkles, ExternalLink, GraduationCap, ArrowRight, MessageSquare, X, Send, Bot, User, Rss, Clock, Bookmark, FolderKanban } from "lucide-react";
import { ParticleSphere } from "@/components/ParticleSphere";
import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Helmet } from "react-helmet";
import { MeshGradient } from "@paper-design/shaders-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import JohnImage from "@/assets/John.png";

interface KnowledgeItem {
  id: number;
  title: string;
  description: string;
  category: string;
  type: "tool" | "news" | "research" | "article" | "course";
  url?: string;
  date?: string;
  subCategory?: string;
  colors?: string[];
  tag?: "Free" | "Premium" | "Pro";
  logo?: string; // URL or path to logo image (single logo)
  logos?: string[]; // Array of logo URLs for multiple logos
}

interface KnowledgeCategory {
  id: string;
  title: string;
  items: KnowledgeItem[];
  expanded: boolean;
  subCategories?: string[];
}

interface ChatMessage {
  id: number;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const KnowledgeHub = () => {
  const [searchParams] = useSearchParams();
  const [activeView, setActiveView] = useState<"home" | "category">("home");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  // Check URL parameter for category
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam === "tools") {
      setSelectedCategory("tools");
      setSelectedSubCategory(null);
      setActiveView("category");
    }
  }, [searchParams]);
  const [chatOpen, setChatOpen] = useState(true);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: "assistant",
      content: "We're currently working on the AI chatbot feature and will launch soon! In the meantime, feel free to explore the Knowledge Hub for tools, articles, research papers, and courses.",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [subscriptionModalOpen, setSubscriptionModalOpen] = useState(false);
  const [selectedProCourse, setSelectedProCourse] = useState<KnowledgeItem | null>(null);
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  });
  const chatEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [categories, setCategories] = useState<KnowledgeCategory[]>([
    {
      id: "tools",
      title: "Tools",
      expanded: false,
      subCategories: ["All Tools", "Vibe Coding", "Productivity", "Presentations", "Design", "Video", "Image Generation"],
      items: [
        // Vibe Coding Tools
        {
          id: 1,
          title: "Cursor",
          description: "AI-powered code editor built for pair programming with AI",
          category: "tools",
          type: "tool",
          url: "https://cursor.sh",
          subCategory: "Vibe Coding",
        },
        {
          id: 2,
          title: "Lovable",
          description: "Build full-stack web apps with AI in minutes",
          category: "tools",
          type: "tool",
          url: "https://lovable.dev",
          subCategory: "Vibe Coding",
        },
        {
          id: 3,
          title: "v0",
          description: "Generate UI with shadcn/ui from text prompts and images",
          category: "tools",
          type: "tool",
          url: "https://v0.dev",
          subCategory: "Vibe Coding",
        },
        {
          id: 4,
          title: "Bolt.new",
          description: "Prompt, run, edit, and deploy full-stack web apps",
          category: "tools",
          type: "tool",
          url: "https://bolt.new",
          subCategory: "Vibe Coding",
        },
        {
          id: 5,
          title: "Replit Agent",
          description: "Build and deploy software collaboratively with AI",
          category: "tools",
          type: "tool",
          url: "https://replit.com",
          subCategory: "Vibe Coding",
        },
        {
          id: 6,
          title: "GitHub Copilot",
          description: "AI pair programmer that helps you write code faster",
          category: "tools",
          type: "tool",
          url: "https://github.com/features/copilot",
          subCategory: "Vibe Coding",
        },
        // Productivity Tools
        {
          id: 7,
          title: "Claude",
          description: "Advanced AI assistant for analysis, writing, and coding",
          category: "tools",
          type: "tool",
          url: "https://claude.ai",
          subCategory: "Productivity",
        },
        {
          id: 8,
          title: "ChatGPT",
          description: "OpenAI's conversational AI for various tasks",
          category: "tools",
          type: "tool",
          url: "https://chat.openai.com",
          subCategory: "Productivity",
        },
        {
          id: 9,
          title: "Notion AI",
          description: "AI-powered workspace for notes, docs, and wikis",
          category: "tools",
          type: "tool",
          url: "https://notion.so",
          subCategory: "Productivity",
        },
        {
          id: 10,
          title: "Perplexity",
          description: "AI-powered search and answer engine",
          category: "tools",
          type: "tool",
          url: "https://perplexity.ai",
          subCategory: "Productivity",
        },
        {
          id: 11,
          title: "Superhuman",
          description: "AI-powered email client for productivity",
          category: "tools",
          type: "tool",
          url: "https://superhuman.com",
          subCategory: "Productivity",
        },
        {
          id: 12,
          title: "Mem",
          description: "AI-powered note-taking and knowledge management",
          category: "tools",
          type: "tool",
          url: "https://mem.ai",
          subCategory: "Productivity",
        },
        // Presentations Tools
        {
          id: 13,
          title: "Gamma",
          description: "Create beautiful presentations with AI",
          category: "tools",
          type: "tool",
          url: "https://gamma.app",
          subCategory: "Presentations",
        },
        {
          id: 14,
          title: "Beautiful.ai",
          description: "AI-powered presentation software",
          category: "tools",
          type: "tool",
          url: "https://beautiful.ai",
          subCategory: "Presentations",
        },
        {
          id: 15,
          title: "Pitch",
          description: "Collaborative presentation software for teams",
          category: "tools",
          type: "tool",
          url: "https://pitch.com",
          subCategory: "Presentations",
        },
        {
          id: 16,
          title: "Tome",
          description: "AI-native format for presentations and storytelling",
          category: "tools",
          type: "tool",
          url: "https://tome.app",
          subCategory: "Presentations",
        },
        // Design Tools
        {
          id: 17,
          title: "Figma",
          description: "Collaborative interface design tool",
          category: "tools",
          type: "tool",
          url: "https://figma.com",
          subCategory: "Design",
        },
        {
          id: 18,
          title: "Canva",
          description: "Design anything with AI-powered templates",
          category: "tools",
          type: "tool",
          url: "https://canva.com",
          subCategory: "Design",
        },
        {
          id: 19,
          title: "Framer",
          description: "Design and publish stunning websites",
          category: "tools",
          type: "tool",
          url: "https://framer.com",
          subCategory: "Design",
        },
        {
          id: 20,
          title: "Uizard",
          description: "AI-powered UI design tool",
          category: "tools",
          type: "tool",
          url: "https://uizard.io",
          subCategory: "Design",
        },
        {
          id: 21,
          title: "Relume",
          description: "AI website builder and design system",
          category: "tools",
          type: "tool",
          url: "https://relume.io",
          subCategory: "Design",
        },
        {
          id: 22,
          title: "Diagram",
          description: "AI-powered design tools for creative work",
          category: "tools",
          type: "tool",
          url: "https://diagram.com",
          subCategory: "Design",
        },
        // Video Tools
        {
          id: 23,
          title: "Descript",
          description: "Edit videos and podcasts like editing a document",
          category: "tools",
          type: "tool",
          url: "https://descript.com",
          subCategory: "Video",
        },
        {
          id: 24,
          title: "Runway",
          description: "AI-powered creative suite for video editing",
          category: "tools",
          type: "tool",
          url: "https://runwayml.com",
          subCategory: "Video",
        },
        {
          id: 25,
          title: "CapCut",
          description: "AI-powered video editing for everyone",
          category: "tools",
          type: "tool",
          url: "https://capcut.com",
          subCategory: "Video",
        },
        {
          id: 26,
          title: "Synthesia",
          description: "Create AI videos with avatars and voiceovers",
          category: "tools",
          type: "tool",
          url: "https://synthesia.io",
          subCategory: "Video",
        },
        {
          id: 27,
          title: "Pictory",
          description: "Turn text into engaging videos automatically",
          category: "tools",
          type: "tool",
          url: "https://pictory.ai",
          subCategory: "Video",
        },
        {
          id: 28,
          title: "HeyGen",
          description: "AI video generation platform for business",
          category: "tools",
          type: "tool",
          url: "https://heygen.com",
          subCategory: "Video",
        },
        // Image Generation Tools
        {
          id: 29,
          title: "Midjourney",
          description: "AI art generator creating stunning images",
          category: "tools",
          type: "tool",
          url: "https://midjourney.com",
          subCategory: "Image Generation",
        },
        {
          id: 30,
          title: "DALL-E 3",
          description: "OpenAI's advanced image generation model",
          category: "tools",
          type: "tool",
          url: "https://openai.com/dall-e-3",
          subCategory: "Image Generation",
        },
        {
          id: 31,
          title: "Stable Diffusion",
          description: "Open-source AI image generation",
          category: "tools",
          type: "tool",
          url: "https://stability.ai",
          subCategory: "Image Generation",
        },
        {
          id: 32,
          title: "Leonardo.ai",
          description: "AI-powered creative content generation",
          category: "tools",
          type: "tool",
          url: "https://leonardo.ai",
          subCategory: "Image Generation",
        },
        {
          id: 33,
          title: "Ideogram",
          description: "AI image generation with text rendering",
          category: "tools",
          type: "tool",
          url: "https://ideogram.ai",
          subCategory: "Image Generation",
        },
        {
          id: 34,
          title: "Adobe Firefly",
          description: "Adobe's generative AI for creative work",
          category: "tools",
          type: "tool",
          url: "https://firefly.adobe.com",
          subCategory: "Image Generation",
        },
      ],
    },
    {
      id: "news",
      title: "News",
      expanded: false,
      items: [
        {
          id: 4,
          title: "OpenAI Releases GPT-5 with Enhanced Multimodal Capabilities",
          description: "OpenAI announces GPT-5 with improved image and video understanding, revolutionizing how AI interacts with visual content.",
          category: "news",
          type: "news",
          date: "2024-01-15",
          url: "#",
        },
        {
          id: 5,
          title: "Figma Introduces AI-Powered Design Tools",
          description: "Figma rolls out new AI features that help designers generate components, layouts, and design variations automatically.",
          category: "news",
          type: "news",
          date: "2024-01-12",
          url: "#",
        },
        {
          id: 35,
          title: "Apple Announces New AI Integration Across Products",
          description: "Apple previews Siri improvements and new AI features integrated into iOS, macOS, and developer tools.",
          category: "news",
          type: "news",
          date: "2024-01-10",
          url: "#",
        },
        {
          id: 36,
          title: "Meta Launches Llama 3 with Advanced Reasoning",
          description: "Meta's latest open-source language model offers enhanced reasoning capabilities for developers and researchers.",
          category: "news",
          type: "news",
          date: "2024-01-08",
          url: "#",
        },
        {
          id: 37,
          title: "Google DeepMind Releases AlphaFold 3",
          description: "New protein structure prediction model achieves unprecedented accuracy, advancing drug discovery and biology research.",
          category: "news",
          type: "news",
          date: "2024-01-05",
          url: "#",
        },
        {
          id: 38,
          title: "Adobe Firefly 3 Adds Video Generation",
          description: "Adobe expands Firefly capabilities to include AI-generated video content, enabling new creative workflows.",
          category: "news",
          type: "news",
          date: "2024-01-03",
          url: "#",
        },
      ],
    },
    {
      id: "articles",
      title: "Articles",
      expanded: false,
      items: [
        {
          id: 9,
          title: "Getting Started with Vibe Coding",
          description: "A comprehensive guide to vibe coding workflows",
          category: "articles",
          type: "article",
        },
        {
          id: 10,
          title: "Design Engineering Best Practices",
          description: "Best practices for design engineers",
          category: "articles",
          type: "article",
        },
      ],
    },
    {
      id: "courses",
      title: "Courses",
      expanded: false,
      items: [
        {
          id: 11,
          title: "AI Design Masterclass",
          description: "Master AI design with our comprehensive masterclass designed for designers and product leaders",
          category: "courses",
          type: "course",
          url: "/ai-design-masterclass",
          colors: ["#FF6B6B", "#FFD93D", "#FF8E53", "#FF6B9D"],
          tag: "Free",
        },
        {
          id: 12,
          title: "AI Mastery Cohort",
          description: "AI Mastery For Designers and Product Leaders 4 Week Cohort",
          category: "courses",
          type: "course",
          url: "/",
          colors: ["#4ECDC4", "#87CEEB", "#DA70D6", "#BA55D3"],
          tag: "Premium",
        },
        {
          id: 13,
          title: "Design Engineering Course (Coming Soon)",
          description: "Master modern design engineering with React, SwiftUI, HTML/CSS, and JavaScript. Build beautiful interfaces and powerful applications.",
          category: "courses",
          type: "course",
          url: "/design-engineering",
          colors: ["#667EEA", "#764BA2", "#F093FB", "#4FACFE"],
          tag: "Pro",
          logos: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          ],
        },
        {
          id: 14,
          title: "Figma Course",
          description: "Master Figma from basics to advanced design systems and prototyping",
          category: "courses",
          type: "course",
          url: "/design-engineering",
          colors: ["#F24E1E", "#A259FF", "#1ABCFE", "#0ACF83"],
          tag: "Pro",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
      ],
    },
    {
      id: "research",
      title: "Research Papers",
      expanded: false,
      items: [
        {
          id: 6,
          title: "Human-Centered AI Design",
          description: "Research on designing AI interfaces with human needs in mind",
          category: "research",
          type: "research",
        },
        {
          id: 7,
          title: "Conversational UI Patterns",
          description: "Academic research on conversational interface design",
          category: "research",
          type: "research",
        },
        {
          id: 8,
          title: "AI Product Architecture",
          description: "Latest research on building AI product architectures",
          category: "research",
          type: "research",
        },
      ],
    },
    {
      id: "projects",
      title: "Cohort Member Projects",
      expanded: false,
      items: [
        {
          id: 9,
          title: "AI Design Tool",
          description: "A powerful design tool built by cohort members using AI to generate UI components",
          category: "projects",
          type: "article",
          url: "#",
        },
        {
          id: 10,
          title: "E-Commerce Dashboard",
          description: "Modern e-commerce admin dashboard created by cohort members",
          category: "projects",
          type: "article",
          url: "#",
        },
        {
          id: 11,
          title: "Meeting Scheduler App",
          description: "Smart meeting scheduler built with AI integration by cohort members",
          category: "projects",
          type: "article",
          url: "#",
        },
      ],
    },
  ]);

  const handleCategoryClick = (categoryId: string) => {
    setCategories(cats =>
      cats.map(cat => {
        if (cat.id === categoryId) {
          return { ...cat, expanded: !cat.expanded };
        } else {
          return { ...cat, expanded: false };
        }
      })
    );
    // Navigate to category view for any category with items
    const category = categories.find(cat => cat.id === categoryId);
    if (category && category.items.length > 0) {
      setSelectedCategory(categoryId);
      setSelectedSubCategory(null);
      setActiveView("category");
    }
  };

  const handleSubCategoryClick = (categoryId: string, subCategory: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubCategory(subCategory === "All Tools" ? null : subCategory);
    setActiveView("category");
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: chatMessages.length + 1,
      role: "user",
      content: inputMessage.trim(),
      timestamp: new Date(),
    };

    setChatMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Simulate AI response (replace with actual API call later)
    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: chatMessages.length + 2,
        role: "assistant",
        content: generateMockResponse(userMessage.content),
        timestamp: new Date(),
      };
      setChatMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const generateMockResponse = (userMessage: string): string => {
    return "We're currently working on the AI chatbot feature and will launch soon! In the meantime, feel free to explore the Knowledge Hub for tools, articles, research papers, and courses.";
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);
  
  const filteredTools = selectedCategoryData && selectedCategory === "tools"
    ? selectedSubCategory
      ? selectedCategoryData.items.filter(item => item.subCategory === selectedSubCategory)
      : selectedCategoryData.items
    : selectedCategoryData?.items || [];

  return (
    <>
      <Helmet>
        <title>AI Powered Knowledge Hub - AI Design Academy</title>
        <meta name="description" content="Stay updated with the latest trends, tools and research. Your go-to place for design leadership and design engineering resources." />
      </Helmet>

      <div className="min-h-screen bg-black flex">
        {/* Sidebar - Always Visible and Fixed */}
        <aside className={`${sidebarCollapsed ? 'w-20' : 'w-80'} border-r border-white/10 bg-black/50 backdrop-blur-sm flex-shrink-0 hidden md:block fixed top-0 left-0 h-screen overflow-y-auto transition-all duration-300`}>
          <div className="h-full flex flex-col">
            {/* Logo/Header */}
            <div className="p-6 border-b border-white/10 relative">
              {!sidebarCollapsed ? (
                <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <img src="/logo.png" alt="AI Design Academy" className="w-6 h-6" />
                  <span className="font-bold text-lg text-white">AI Design Academy</span>
                </a>
              ) : (
                <div className="flex justify-center">
                  <img src="/logo.png" alt="AI Design Academy" className="w-6 h-6" />
                </div>
              )}
              {/* Collapse Toggle Button */}
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="absolute top-6 right-3 w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 transition-colors"
                aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                {sidebarCollapsed ? (
                  <ChevronRight className="w-4 h-4 text-white/60" />
                ) : (
                  <ChevronLeft className="w-4 h-4 text-white/60" />
                )}
              </button>
            </div>
            
            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
              <button
                onClick={() => { setActiveView("home"); setSelectedCategory(null); setSelectedSubCategory(null); }}
                className={`w-full ${sidebarCollapsed ? 'p-3 justify-center' : 'p-3'} flex items-center gap-3 text-left transition-colors ${
                  activeView === "home" ? "bg-white/10 text-white font-medium" : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
                title={sidebarCollapsed ? "Home" : undefined}
              >
                {!sidebarCollapsed && <span className="text-sm">Home</span>}
              </button>

              {!sidebarCollapsed && (
                <>
                  <div className="pt-4">
                    <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider px-3 mb-4">CATEGORIES</h3>
                    <div className="space-y-1 mb-6">
                      {categories.map((category) => (
                        <div key={category.id} className="mb-1">
                          <button
                            onClick={() => handleCategoryClick(category.id)}
                            className={`w-full p-3 flex items-center justify-between transition-colors ${
                              category.expanded ? "bg-white/5 text-white font-medium" : "text-white/60 hover:bg-white/5 hover:text-white"
                            }`}
                          >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <span className="text-sm leading-tight text-left break-words">{category.title}</span>
                            </div>
                            {category.expanded ? (
                              <ChevronDown className="w-4 h-4 text-white/40 flex-shrink-0 ml-2" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-white/40 flex-shrink-0 ml-2" />
                            )}
                          </button>
                          
                          <AnimatePresence>
                            {category.expanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 30,
                                  mass: 0.5
                                }}
                                className="overflow-hidden relative"
                              >
                                <div className="absolute left-7 top-0 bottom-0 w-px bg-white/10"></div>
                                <div className="pl-8 py-1 space-y-1">
                                  {category.id === "tools" && category.subCategories ? (
                                    category.subCategories.map((subCat) => (
                                      <button
                                        key={subCat}
                                        onClick={() => handleSubCategoryClick(category.id, subCat)}
                                        className="w-full p-2 flex items-center text-left transition-colors text-white/60 hover:bg-white/5 hover:text-white"
                                      >
                                        <span className="text-sm">{subCat}</span>
                                      </button>
                                    ))
                                  ) : (
                                    category.items.map((item) => (
                                      <button
                                        key={item.id}
                                        onClick={() => {
                                          setSelectedCategory(category.id);
                                          setSelectedSubCategory(null);
                                          setActiveView("category");
                                        }}
                                        className="w-full p-2 flex items-center text-left transition-colors text-white/60 hover:bg-white/5 hover:text-white"
                                      >
                                        <span className="text-sm">{item.title}</span>
                                      </button>
                                    ))
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </nav>
          </div>
        </aside>

        {/* Mobile Menu Button - Bottom Footer Style */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-white/10">
          <div className="bg-black/80 backdrop-blur-xl">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="w-full h-16 bg-transparent hover:bg-white/5 text-white font-medium text-base rounded-none"
                >
                  <Menu className="h-5 w-5 mr-2" />
                  Menu
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="w-full h-[80vh] p-0 bg-black/95 backdrop-blur-xl border-t border-white/10 rounded-t-3xl">
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" onClick={() => setMobileMenuOpen(false)}>
                      <img src="/logo.png" alt="AI Design Academy" className="w-6 h-6" />
                      <span className="font-bold text-lg text-white">AI Design Academy</span>
                    </a>
                  </div>
                </div>
                
                <nav className="p-4 space-y-1 overflow-y-auto h-full pb-20">
                  <button 
                    onClick={() => { setActiveView("home"); setSelectedCategory(null); setSelectedSubCategory(null); setMobileMenuOpen(false); }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors bg-white/10 text-white hover:bg-white/5"
                  >
                    Home
                  </button>
                  {categories.map((category) => (
                    <div key={category.id}>
                      <button
                        onClick={() => handleCategoryClick(category.id)}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-white/60 hover:bg-white/5 hover:text-white"
                      >
                        {category.title}
                      </button>
                      {category.expanded && (
                        <div className="ml-8 mt-1 space-y-1">
                          {category.id === "tools" && category.subCategories ? (
                            category.subCategories.map((subCat) => (
                              <button
                                key={subCat}
                                onClick={() => { handleSubCategoryClick(category.id, subCat); setMobileMenuOpen(false); }}
                                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors text-white/60 hover:bg-white/5 hover:text-white"
                              >
                                {subCat}
                              </button>
                            ))
                          ) : (
                            category.items.map((item) => (
                              <button
                                key={item.id}
                                onClick={() => { setSelectedCategory(category.id); setSelectedSubCategory(null); setActiveView("category"); setMobileMenuOpen(false); }}
                                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors text-white/60 hover:bg-white/5 hover:text-white"
                              >
                                {item.title}
                              </button>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${sidebarCollapsed ? 'md:ml-20' : 'md:ml-80'} ${chatOpen ? 'md:mr-96' : ''}`}>
          <Navigation />
          
          <main className="flex-1 overflow-y-auto bg-black">
            {activeView === "home" ? (
              <>
                {/* Hero Section */}
                <section className="relative py-16 md:py-20 overflow-hidden bg-black text-white border-b border-white/10 w-full z-0">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/5 via-black to-black" />
                  
                  <div className="px-4 md:px-6 lg:px-8 relative z-10 w-full">
                    <div className="max-w-[1600px] mx-auto">
                      <div className="grid lg:grid-cols-[minmax(0,_1.1fr)_minmax(220px,_340px)] gap-10 items-center">
                        <div>
                          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 tracking-tight leading-relaxed">
                            AI Powered Knowledge Hub (Coming Soon)
                          </h1>
                          <p className="text-lg md:text-xl text-white/60 font-normal mb-4 leading-relaxed max-w-3xl">
                            Want to stay updated with the latest trends, tools and research? This is a go-to place for you.
                          </p>
                        </div>
                        <div className="hidden lg:flex justify-center relative">
                          <div className="absolute -inset-10 bg-[radial-gradient(circle,_rgba(255,255,255,0.12)_0%,_rgba(0,0,0,0)_70%)] blur-3xl" aria-hidden="true" />
                          <ParticleSphere size="sm" className="relative z-10 max-w-[320px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Categories Grid */}
                <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-black text-white border-t border-white/10">
                  <div className="px-4 md:px-6 lg:px-8">
                    <div className="max-w-[1600px] mx-auto">
                      <div className="grid md:grid-cols-2 gap-6">
                        {categories.map((category) => {
                          const icons = {
                            tools: Wrench,
                            news: Newspaper,
                            research: FileText,
                            articles: BookOpen,
                            courses: GraduationCap,
                            projects: FolderKanban,
                          };
                          const Icon = icons[category.id as keyof typeof icons] || Sparkles;
                          
                          // Define color palettes for each category
                          const categoryColors: Record<string, string[]> = {
                            tools: ["#FF6B6B", "#FFD93D", "#FF8E53", "#FF6B9D"],
                            news: ["#4ECDC4", "#87CEEB", "#DA70D6", "#BA55D3"],
                            research: ["#95E1D3", "#F38181", "#FCE38A", "#AAE3F0"],
                            articles: ["#9CA3AF", "#E5E7EB", "#D1D5DB", "#F3F4F6"],
                            courses: ["#FF6B6B", "#FFD93D", "#FF8E53", "#FF6B9D"],
                            projects: ["#8B5CF6", "#A78BFA", "#C4B5FD", "#DDD6FE"],
                          };
                          
                          const colors = categoryColors[category.id] || ["#FF6B6B", "#FFD93D", "#FF8E53", "#FF6B9D"];
                          
                          return (
                            <Card
                              key={category.id}
                              className="overflow-hidden border-white/10 hover:border-white/30 transition-all cursor-pointer group"
                              onClick={() => handleCategoryClick(category.id)}
                            >
                              {/* Shader Header */}
                              <div className="relative h-32 bg-black overflow-hidden">
                                <MeshGradient
                                  width={800}
                                  height={200}
                                  colors={colors}
                                  distortion={0.8}
                                  swirl={0.6}
                                  speed={0.42}
                                  offsetX={0.08}
                                  className="absolute inset-0 w-full h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                                    <Icon className="w-6 h-6 text-white" />
                                  </div>
                                  <h3 className="text-2xl font-semibold mt-3 text-white leading-[1.3]">{category.title}</h3>
                                </div>
                              </div>
                              {/* Content */}
                              <div className="p-6 bg-white/5">
                                <p className="text-white/70 leading-[1.5] mb-4">
                                  {category.items.length} {category.items.length === 1 ? 'item' : 'items'}
                                </p>
                                <Button variant="ghost" size="sm" className="text-white p-0 h-auto hover:underline leading-[1.5]">
                                  Explore <ChevronRight className="w-4 h-4 ml-1 inline text-white" />
                                </Button>
                              </div>
                            </Card>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </section>
              </>
            ) : (
              <>
                {/* Category View */}
                <section className="py-8">
                  <div className="px-4 md:px-6 lg:px-8">
                    <div className="max-w-[1600px] mx-auto">
                      <div className="mb-8">
                        <button
                          onClick={() => { setActiveView("home"); setSelectedCategory(null); setSelectedSubCategory(null); }}
                          className="text-white/60 hover:text-white mb-4 flex items-center gap-2"
                        >
                          <ChevronRight className="w-4 h-4 rotate-180" />
                          Back to Home
                        </button>
                        <div className="flex items-center gap-4 mb-4">
                          <h1 className="text-3xl md:text-4xl font-medium text-white">{selectedCategoryData?.title}</h1>
                          {selectedSubCategory && (
                            <span className="text-lg text-white/80">/ {selectedSubCategory}</span>
                          )}
                        </div>
                        <p className="text-lg text-white/60 mb-6">
                          {filteredTools.length} {filteredTools.length === 1 ? 'item' : 'items'}
                        </p>

                        {selectedCategory === "tools" && selectedCategoryData?.subCategories && (
                          <div className="flex flex-wrap gap-2 mb-8">
                            {selectedCategoryData.subCategories.map((subCat) => (
                              <button
                                key={subCat}
                                onClick={() => setSelectedSubCategory(subCat === "All Tools" ? null : subCat)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                  selectedSubCategory === (subCat === "All Tools" ? null : subCat)
                                    ? "bg-white/20 text-white"
                                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                                }`}
                              >
                                {subCat}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className={`${
                        selectedCategory === "courses" 
                          ? "grid md:grid-cols-2 gap-6 items-stretch"
                          : selectedCategory === "news"
                          ? "space-y-4"
                          : selectedCategory === "articles"
                          ? "grid gap-6 md:grid-cols-2 items-stretch"
                          : "grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch"
                      }`}>
                        {filteredTools.map((item) => {
                          // Special rendering for article items
                          if (item.type === "article") {
                            return (
                              <a
                                key={item.id}
                                href={item.url || "#"}
                                className="group block"
                              >
                                <Card className="p-6 bg-white/5 border-white/10 hover:border-white/30 transition-all cursor-pointer h-full flex flex-col">
                                  <div className="flex justify-end mb-4">
                                    <Bookmark className="w-5 h-5 text-white/60 fill-white/20" />
                                  </div>
                                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white/90 transition-colors leading-tight">
                                    {item.title}
                                  </h3>
                                  <p className="text-white/70 leading-relaxed mb-4 text-sm flex-1">
                                    {item.description}
                                  </p>
                                  <Button variant="ghost" size="sm" className="text-white p-0 h-auto hover:underline self-start">
                                    Read More <ChevronRight className="w-4 h-4 ml-1 inline text-white" />
                                  </Button>
                                </Card>
                              </a>
                            );
                          }
                          
                          // Special rendering for course items with shader
                          if (item.type === "course") {
                            const handleCourseClick = (e: React.MouseEvent) => {
                              if (item.tag === "Pro" && !item.url) {
                                e.preventDefault();
                                // Pro courses without URL are not clickable
                              }
                              // Allow navigation for Pro courses with URLs (like Figma course)
                            };

                            return (
                              <a
                                key={item.id}
                                href={item.url || "#"}
                                onClick={handleCourseClick}
                                className="group block"
                              >
                                <Card className="overflow-hidden border-white/10 hover:border-white/30 transition-all cursor-pointer group-hover:scale-[1.02] flex flex-col h-full">
                                  {/* Shader Header */}
                                  <div className="relative h-48 bg-black overflow-hidden flex-shrink-0">
                                    <MeshGradient
                                      width={800}
                                      height={300}
                                      colors={item.colors || ["#FF6B6B", "#FFD93D", "#FF8E53", "#FF6B9D"]}
                                      distortion={0.8}
                                      swirl={0.6}
                                      speed={0.42}
                                      offsetX={0.08}
                                      className="absolute inset-0 w-full h-full"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                      <div className="flex items-center gap-3 mb-2">
                                        {item.logos && item.logos.length > 0 ? (
                                          <div className="flex items-center gap-2 flex-wrap">
                                            {item.logos.map((logoUrl, idx) => (
                                              <div key={idx} className="relative w-9 h-9">
                                                <img 
                                                  src={logoUrl} 
                                                  alt={`${item.title} logo ${idx + 1}`} 
                                                  className="w-9 h-9 object-contain bg-white/10 rounded-lg p-1.5"
                                                />
                                              </div>
                                            ))}
                                          </div>
                                        ) : item.logo ? (
                                          <div className="relative w-10 h-10">
                                            <img 
                                              src={item.logo} 
                                              alt={`${item.title} logo`} 
                                              className="w-10 h-10 object-contain bg-white/10 rounded-lg p-2"
                                            />
                                          </div>
                                        ) : (
                                          <GraduationCap className="w-10 h-10 text-white" />
                                        )}
                                      </div>
                                      <h3 className="text-xl font-semibold text-white leading-[1.3]">{item.title}</h3>
                                    </div>
                                  </div>
                                  {/* Content */}
                                  <div className="p-6 bg-white/5 flex-1 flex flex-col">
                                    {item.tag && (
                                      <div className="mb-3">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                          item.tag === "Free" 
                                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                            : item.tag === "Premium"
                                            ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                                            : "bg-white/10 text-white/80 border border-white/20"
                                        }`}>
                                          {item.tag === "Pro" ? "Get Pro Membership" : item.tag}
                                        </span>
                                      </div>
                                    )}
                                    <p className="text-white/70 leading-[1.5] mb-3 flex-1">{item.description}</p>
                                    {item.id === 14 && (
                                      <p className="text-white/50 text-xs mb-3 italic">Accessing Figma course will also give you access to the design engineering course.</p>
                                    )}
                                    <Button variant="ghost" size="sm" className="text-white p-0 h-auto hover:underline hover:text-white/80 leading-[1.5] mt-auto self-start">
                                      {item.tag === "Pro" ? "Coming Soon" : "Learn More"} <ArrowRight className="w-4 h-4 ml-1 inline" />
                                    </Button>
                                  </div>
                                </Card>
                              </a>
                            );
                          }
                          
                          // RSS Feed style for news items
                          if (item.type === "news") {
                            const formatDate = (dateString: string) => {
                              const date = new Date(dateString);
                              return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                            };
                            
                            return (
                              <a
                                key={item.id}
                                href={item.url || "#"}
                                className="group block"
                              >
                                <Card className="p-6 bg-white/5 border-white/10 hover:border-white/30 transition-all cursor-pointer group-hover:bg-white/10">
                                  <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                      <Rss className="w-5 h-5 text-white/60" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-2 mb-2">
                                        <Clock className="w-4 h-4 text-white/40" />
                                        <span className="text-xs text-white/40">{formatDate(item.date || "")}</span>
                                      </div>
                                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white/90 transition-colors leading-tight">
                                        {item.title}
                                      </h3>
                                      <p className="text-sm text-white/70 leading-relaxed mb-3">
                                        {item.description}
                                      </p>
                                      <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                                        <span>Read more</span>
                                        <ArrowRight className="w-4 h-4" />
                                      </div>
                                    </div>
                                  </div>
                                </Card>
                              </a>
                            );
                          }
                          
                          // Regular item rendering
                          return (
                            <a
                              key={item.id}
                              href={item.url || "#"}
                              target={item.url ? "_blank" : "_self"}
                              rel={item.url ? "noopener noreferrer" : undefined}
                              className="group"
                            >
                              <Card className="p-6 bg-white/5 border-white/10 hover:border-white/30 transition-all cursor-pointer h-full group-hover:scale-[1.02]">
                                <div className="flex items-start justify-between mb-3">
                                  <h3 className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors pr-2">{item.title}</h3>
                                  {item.type === "research" && <FileText className="w-5 h-5 text-white/60 flex-shrink-0 ml-2" />}
                                  {item.type === "tool" && <Wrench className="w-5 h-5 text-white/60 flex-shrink-0 ml-2" />}
                                </div>
                                <p className="text-white/70 leading-relaxed mb-4 text-sm">{item.description}</p>
                                {item.date && (
                                  <p className="text-sm text-white/50 mb-4">Published: {item.date}</p>
                                )}
                                {item.url && (
                                  <Button variant="ghost" size="sm" className="text-white p-0 h-auto hover:underline">
                                    Visit Tool
                                  </Button>
                                )}
                                {!item.url && (
                                  <Button variant="ghost" size="sm" className="text-white p-0 h-auto hover:underline">
                                    Read More <ChevronRight className="w-4 h-4 ml-1 inline text-white" />
                                  </Button>
                                )}
                              </Card>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}
          </main>
        </div>

        {/* Chat Panel */}
        <AnimatePresence>
          {chatOpen && (
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="hidden md:block fixed top-0 right-0 w-96 h-screen border-l border-white/10 bg-black/95 backdrop-blur-sm z-40 overflow-hidden"
            >
              <div className="h-full flex flex-col">
                {/* Chat Header */}
                <div className="p-6 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                      <img src={JohnImage} alt="John" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">John.ai</h3>
                      <p className="text-xs text-white/60">Ask me anything</p>
                    </div>
                  </div>
                  {/* Chat remains open by default; toggle button removed */}
                </div>

                {/* Alert Banner */}
                <div className="px-6 pt-4">
                  <motion.div
                    animate={{
                      x: [0, -2, 2, -2, 2, -1, 1, 0],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                  >
                    <Alert className="bg-white/5 border-white/20">
                      <AlertDescription className="text-sm text-white/90">
                        We're currently working on the AI chatbot feature and will launch soon! In the meantime, feel free to explore the Knowledge Hub.
                      </AlertDescription>
                    </Alert>
                  </motion.div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {chatMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {message.role === "assistant" && (
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                          <img src={JohnImage} alt="John" className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] rounded-lg p-4 ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-white/5 text-white border border-white/10"
                        }`}
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                      </div>
                      {message.role === "user" && (
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                          <User className="w-4 h-4 text-white/60" />
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex gap-3 justify-start">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <img src={JohnImage} alt="John" className="w-full h-full object-cover" />
                      </div>
                      <div className="bg-white/5 text-white border border-white/10 rounded-lg p-4">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                {/* Chat Input */}
                <div className="p-6 border-t border-white/10">
                  <div className="flex gap-2">
                    <Textarea
                      ref={textareaRef}
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything about the Knowledge Hub..."
                      className="min-h-[60px] max-h-[120px] resize-none bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30"
                      rows={1}
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputMessage.trim() || isLoading}
                      variant="cta"
                      size="icon"
                      className="h-[60px] w-[60px] flex-shrink-0"
                    >
                      <Send className="w-5 h-5" />
                    </Button>
                  </div>
                  <p className="text-xs text-white/40 mt-2 text-center">
                    Press Enter to send, Shift+Enter for new line
                  </p>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Subscription Modal */}
        <Dialog open={subscriptionModalOpen} onOpenChange={setSubscriptionModalOpen}>
          <DialogContent className="sm:max-w-[600px] bg-card text-white border-border">
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold text-white">Subscribe to Pro Courses</DialogTitle>
              <DialogDescription className="text-sm mt-2 text-muted-foreground">
                Get access to all Pro courses and exclusive features
              </DialogDescription>
            </DialogHeader>
            
            <div className="py-6 space-y-6">
              {/* Benefits Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">What You'll Get:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                    <GraduationCap className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Access to Pro Courses</p>
                      <p className="text-sm text-white/60">Unlock all premium courses including Design Engineering Course (React, SwiftUI, HTML/CSS, JavaScript), Figma, and more</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                    <Bot className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Access to LLMs</p>
                      <p className="text-sm text-white/60">Ask any questions and get AI-powered assistance with your learning journey</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                    <ArrowRight className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">New Courses Added Regularly</p>
                      <p className="text-sm text-white/60">Stay updated with the latest courses and content</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Section */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="p-4 bg-card/50 border border-border/40 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Monthly Subscription</span>
                    <span className="text-2xl font-semibold text-white">$29.99/mo</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <Label htmlFor="card-number" className="text-sm font-medium text-white mb-2 block">Card Number</Label>
                    <Input
                      id="card-number"
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      value={paymentData.cardNumber}
                      onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
                      className="bg-background border-border/40 text-white placeholder:text-muted-foreground"
                      maxLength={19}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="expiry" className="text-sm font-medium text-white mb-2 block">Expiry Date</Label>
                      <Input
                        id="expiry"
                        type="text"
                        placeholder="MM/YY"
                        value={paymentData.expiryDate}
                        onChange={(e) => setPaymentData({ ...paymentData, expiryDate: e.target.value })}
                        className="bg-background border-border/40 text-white placeholder:text-muted-foreground"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv" className="text-sm font-medium text-white mb-2 block">CVV</Label>
                      <Input
                        id="cvv"
                        type="text"
                        placeholder="123"
                        value={paymentData.cvv}
                        onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
                        className="bg-background border-border/40 text-white placeholder:text-muted-foreground"
                        maxLength={4}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="card-name" className="text-sm font-medium text-white mb-2 block">Cardholder Name</Label>
                    <Input
                      id="card-name"
                      type="text"
                      placeholder="John Doe"
                      value={paymentData.cardholderName}
                      onChange={(e) => setPaymentData({ ...paymentData, cardholderName: e.target.value })}
                      className="bg-background border-border/40 text-white placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
              </div>
            </div>

            <DialogFooter className="flex-col sm:flex-row gap-3">
              <Button 
                variant="outline" 
                onClick={() => {
                  setSubscriptionModalOpen(false);
                  setSelectedProCourse(null);
                  setPaymentData({ cardNumber: "", expiryDate: "", cvv: "", cardholderName: "" });
                }}
                className="w-full sm:w-auto"
              >
                Cancel
              </Button>
              <Button 
                variant="cta" 
                className="w-full sm:w-auto"
                onClick={() => {
                  // Handle subscription payment
                  // Validate payment data
                  if (!paymentData.cardNumber || !paymentData.expiryDate || !paymentData.cvv || !paymentData.cardholderName) {
                    alert("Please fill in all payment fields");
                    return;
                  }
                  // Process payment (add your payment processing logic here)
                  alert("Payment processed! Access to Design Engineering Course has been unlocked.");
                  setSubscriptionModalOpen(false);
                  setSelectedProCourse(null);
                  setPaymentData({ cardNumber: "", expiryDate: "", cvv: "", cardholderName: "" });
                }}
              >
                Subscribe Now
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default KnowledgeHub;

