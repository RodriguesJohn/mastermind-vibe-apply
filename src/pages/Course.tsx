import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Clock, CheckCircle2, Lock } from "lucide-react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Course = () => {
  const [selectedModule, setSelectedModule] = useState(1);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [clickedModule, setClickedModule] = useState<number | null>(null);

  const modules = [
    {
      id: 1,
      title: "Welcome & Onboarding",
      description: "Introduction to the cohort and meet your fellow learners",
      duration: "30 min",
      videos: [
        { id: 1, title: "Welcome to the Cohort", duration: "10 min" },
        { id: 2, title: "Getting Started", duration: "10 min" },
        { id: 3, title: "Meet Your Cohort", duration: "10 min" },
      ],
      status: "current",
    },
    {
      id: 2,
      title: "AI Foundation Masterclass",
      description: "Understanding AI fundamentals, LLMs, and the agentic era",
      duration: "2 hours",
      videos: [
        { id: 1, title: "Introduction to AI", duration: "25 min" },
        { id: 2, title: "Understanding LLMs", duration: "30 min" },
        { id: 3, title: "The Agentic Era", duration: "20 min" },
        { id: 4, title: "AI Tools Overview", duration: "25 min" },
        { id: 5, title: "Q&A Session", duration: "20 min" },
      ],
      status: "locked",
    },
    {
      id: 3,
      title: "AI Product Design Strategy",
      description: "Strategic thinking for AI product design and implementation",
      duration: "1.5 hours",
      videos: [
        { id: 1, title: "Product Strategy Basics", duration: "25 min" },
        { id: 2, title: "AI Product Frameworks", duration: "30 min" },
        { id: 3, title: "Case Studies", duration: "20 min" },
        { id: 4, title: "Building Your Strategy", duration: "15 min" },
      ],
      status: "locked",
    },
    {
      id: 4,
      title: "AI Agent Experience Design",
      description: "Designing user experiences for AI agents and tools",
      duration: "2 hours",
      videos: [
        { id: 1, title: "Introduction to AI Agents", duration: "25 min" },
        { id: 2, title: "Agent UX Patterns", duration: "30 min" },
        { id: 3, title: "Conversational Design", duration: "25 min" },
        { id: 4, title: "Hands-on Workshop", duration: "40 min" },
        { id: 5, title: "Building Your Agent", duration: "30 min" },
        { id: 6, title: "Demo & Feedback", duration: "20 min" },
      ],
      status: "locked",
    },
    {
      id: 5,
      title: "Prototyping with AI Tools",
      description: "Master Lovable, Vibe Coding, and other AI prototyping tools",
      duration: "2 hours",
      videos: [
        { id: 1, title: "Lovable Tutorial", duration: "30 min" },
        { id: 2, title: "Vibe Coding Basics", duration: "25 min" },
        { id: 3, title: "Advanced Prototyping", duration: "35 min" },
        { id: 4, title: "Project Workshop", duration: "30 min" },
      ],
      status: "locked",
    },
    {
      id: 6,
      title: "AI Assisted Design Systems",
      description: "Building design systems with AI assistance",
      duration: "1.5 hours",
      videos: [
        { id: 1, title: "Design Systems Overview", duration: "25 min" },
        { id: 2, title: "AI-Assisted Components", duration: "30 min" },
        { id: 3, title: "Building Your System", duration: "25 min" },
      ],
      status: "locked",
    },
    {
      id: 7,
      title: "Storytelling & Demo Week",
      description: "Present your projects and tell compelling stories",
      duration: "1 hour",
      videos: [
        { id: 1, title: "Storytelling Basics", duration: "20 min" },
        { id: 2, title: "Project Presentations", duration: "30 min" },
        { id: 3, title: "Feedback Session", duration: "10 min" },
      ],
      status: "locked",
    },
    {
      id: 8,
      title: "Career Roadmap & Next Steps",
      description: "Plan your AI design career journey",
      duration: "45 min",
      videos: [
        { id: 1, title: "Career Planning", duration: "25 min" },
        { id: 2, title: "Networking & Resources", duration: "20 min" },
      ],
      status: "locked",
    },
  ];

  const selectedModuleData = modules.find(m => m.id === selectedModule);

  return (
    <>
      <Helmet>
        <title>Course Modules - AI Design Academy</title>
        <meta name="description" content="Access all course modules and video content" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="flex pt-16">
          {/* Sidebar - Modules Progress */}
          <aside className="w-80 border-r border-border bg-card/50 overflow-y-auto h-[calc(100vh-4rem)] sticky top-16">
            <div className="p-6">
              <h2 className="font-semibold text-lg mb-4">Course Progress</h2>
              
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Completed</span>
                  <span className="font-medium">12.5%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '12.5%' }}></div>
                </div>
              </div>

              {/* Modules List */}
              <div className="space-y-2">
                {modules.map((module) => (
                  <button
                    key={module.id}
                    onClick={() => {
                      if (module.status === "locked") {
                        setClickedModule(module.id);
                        setShowPaymentModal(true);
                      } else {
                        setSelectedModule(module.id);
                      }
                    }}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      selectedModule === module.id && module.status !== "locked"
                        ? "bg-primary text-primary-foreground"
                        : module.status === "locked"
                        ? "opacity-50 hover:opacity-70 cursor-pointer"
                        : "hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {module.status === "completed" ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : module.status === "current" ? (
                        <Play className="w-4 h-4 fill-current" />
                      ) : (
                        <Lock className="w-4 h-4" />
                      )}
                      <span className="font-medium text-sm">{module.title}</span>
                    </div>
                    <div className="text-xs opacity-75 ml-6">
                      {module.videos.length} videos • {module.duration}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content - Video Player & Description */}
          <div className="flex-1 overflow-y-auto h-[calc(100vh-4rem)]">
            {selectedModuleData && (
              <div className="max-w-5xl mx-auto p-8">
                {/* Module Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    {selectedModuleData.status === "completed" ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : selectedModuleData.status === "current" ? (
                      <Play className="w-5 h-5 text-primary fill-current" />
                    ) : (
                      <Lock className="w-5 h-5 text-muted-foreground" />
                    )}
                    <span className="text-sm text-muted-foreground">
                      Module {selectedModuleData.id} of {modules.length}
                    </span>
                  </div>
                  <h1 className="text-4xl font-bold mb-4">{selectedModuleData.title}</h1>
                  <p className="text-lg text-muted-foreground mb-6">{selectedModuleData.description}</p>
                </div>

                {/* Video Player Placeholder */}
                <div className="mb-8">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                    <div className="relative z-10 text-center">
                      <Play className="w-16 h-16 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Video Player</p>
                      <p className="text-xs text-muted-foreground mt-1">Select a video to start</p>
                    </div>
                  </div>
                </div>

                {/* Module Description */}
                <div className="mb-8">
                  <div className="p-6 bg-muted/30 rounded-lg border border-border">
                    <h3 className="font-semibold mb-3">About This Module</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedModuleData.id === 1 && "Get started with your learning journey! This module introduces you to the cohort structure, your fellow learners, and provides all the essential information you need to make the most of this course. We'll cover course expectations, how to navigate the platform, and how to connect with your peers."}
                      {selectedModuleData.id === 2 && "Deep dive into the foundations of AI — understand its core concepts, build your language and vocabulary, and strengthen your fundamentals so you can design intelligent systems and interfaces with confidence. Everything is explained in a simple, easy-to-understand way."}
                      {selectedModuleData.id === 3 && "Master the art of strategic thinking in AI product design. Learn how to develop comprehensive product strategies, understand user needs in the AI context, and create frameworks that guide successful AI product implementation. This module combines theory with practical case studies."}
                      {selectedModuleData.id === 4 && "Learn how to design exceptional user experiences for AI agents and conversational interfaces. This module covers UX patterns specific to AI tools, conversational design principles, and hands-on workshops where you'll build your own AI agent prototype."}
                      {selectedModuleData.id === 5 && "Master the latest AI prototyping tools including Lovable, Vibe Coding, and other cutting-edge platforms. Learn how to rapidly prototype AI-powered interfaces and bring your ideas to life without extensive coding knowledge."}
                      {selectedModuleData.id === 6 && "Discover how AI can accelerate your design system creation. Learn to build scalable design systems with AI assistance, create consistent component libraries, and maintain design consistency across complex AI products."}
                      {selectedModuleData.id === 7 && "Perfect your presentation skills and learn the art of storytelling in AI product design. This module helps you effectively communicate your ideas, present your projects to stakeholders, and receive constructive feedback from peers and mentors."}
                      {selectedModuleData.id === 8 && "Plan your next steps in the AI design field. This module provides career guidance, networking strategies, and resources to help you continue growing as an AI product designer. Get access to ongoing support and community resources."}
                    </p>
                  </div>
                </div>

                {/* Module Resources */}
                <div className="p-6 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold mb-4">Resources & Downloads</h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedModuleData.status === "locked" 
                      ? "Resources will be available when you unlock this module."
                      : "Download course materials, templates, and resources for this module."}
                  </p>
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Payment Modal */}
        <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Unlock Course Module</DialogTitle>
              <DialogDescription>
                Enter your payment details to unlock this module and continue your learning journey.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="1234 5678 9012 3456" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="card-name">Cardholder Name</Label>
                <Input id="card-name" placeholder="John Doe" />
              </div>
              
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Total Amount</span>
                  <span className="text-lg font-bold">$99</span>
                </div>
              </div>
              
              <Button className="w-full" size="lg">
                Pay $99 and Unlock Module
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                By continuing, you agree to our terms of service and privacy policy.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Course;


