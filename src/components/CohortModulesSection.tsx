import { Card } from "@/components/ui/card";
import { Diamond, Target, Sparkles, Users } from "lucide-react";

const modules = [
  {
    icon: Diamond,
    title: "Week 1 : Master AI Foundation",
    description: "Get the opportunity to ask questions to designers from top companies such as Meta, Amazon, and more. Learn from their expertise and experiences as AI product designers."
  },
  {
    icon: Target,
    title: "Week 2: AI Product Design Strategy",
    description: "Identify AI use cases and design human-centered solutions that drive business impact and value."
  },
  {
    icon: Sparkles,
    title: "Week 3: Build AI Agents",
    description: "Learn how to design AI agent systems and workflows from a UX perspective. Get step-by-step frameworks and processes to create and prototype your own agents, and use tools like Make.com to build AI agents that actually work."
  },
  {
    icon: Diamond,
    title: "Week 4 : Learn vibe coding and Prototyping with AI",
    description: "Learn how to create functional prototypes with tools like Loveable and Vibe, and code your product idea so you can effectively communicate your vision."
  },
  {
    icon: Target,
    title: "Get 1:1 Coaching and Consulting",
    description: "Master storytelling to effectively communicate your ideas, and use AI presentation tools to complement your storytelling."
  },
  {
    icon: Users,
    title: "Bonus : Guest Speakers From Top Companies",
    description: "Get the opportunity to ask questions to designers from top companies such as Meta, Amazon, and more. Learn from their expertise and experiences as AI product designers."
  }
];

export const CohortModulesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="px-4 md:px-10 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 tracking-tight">
            What We Have for You
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-card/50 border-border/40 hover:border-primary/30 transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-full border-2 border-border/40 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <IconComponent className="w-6 h-6 text-foreground" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {module.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {module.description}
                </p>
              </Card>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
};
