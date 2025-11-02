import { Card } from "@/components/ui/card";
import { Diamond, Target, Sparkles, Users } from "lucide-react";
import { BlurFade } from "@/components/BlurFade";
import { MeshGradient } from "@paper-design/shaders-react";
import { motion } from "framer-motion";

const modules = [
  {
    number: "1",
    week: "Week 1",
    icon: Diamond,
    title: "Master AI Foundation",
    description: "Deep dive into AI fundamentals – understand core concepts, build your vocabulary, and learn to design intelligent systems with clarity and confidence.",
    colors: ["#FF6B6B", "#FFD93D", "#FF8E53", "#FF6B9D"]
  },
  {
    number: "2",
    week: "Week 2",
    icon: Target,
    title: "AI Product Design Strategy",
    description: "Identify AI use cases and design human-centered solutions that drive business impact and value.",
    colors: ["#4ECDC4", "#87CEEB", "#DA70D6", "#BA55D3"]
  },
  {
    number: "3",
    week: "Week 3",
    icon: Sparkles,
    title: "Build AI Agents",
    description: "Learn how to design AI agent systems and workflows from a UX perspective. Get step-by-step frameworks and processes to create and prototype your own agents, and use tools like n8n to build AI agents that actually work.",
    colors: ["#95E1D3", "#F38181", "#FCE38A", "#AAE3F0"]
  },
  {
    number: "4",
    week: "Week 4",
    icon: Diamond,
    title: "Learn vibe coding and Prototyping with AI",
    description: "Learn how to create functional prototypes with Lovable and Cursor to effectively communicate your vision. Master efficient vibe-coding workflows and build AI apps using modern AI coding tools.",
    colors: ["#FF6B6B", "#FF8E53", "#FFD93D", "#FFA07A"]
  },
  {
    number: "5",
    week: "Bonus",
    icon: Target,
    title: "Get 1:1 Coaching and Consulting",
    description: "Get one-on-one coaching with John to overcome challenges, personalize your learning goals, ask any questions, and get clear guidance to unlock your next step.",
    colors: ["#C44569", "#D68FD6", "#E3A0D3", "#FF8CC8"]
  },
  {
    number: "6",
    week: "Bonus",
    icon: Users,
    title: "Guest Speakers From Top Companies",
    description: "Get the opportunity to ask questions to designers from top companies such as Meta, Amazon, and more. Learn from their expertise and experiences as AI product designers.",
    colors: ["#4F4F8C", "#5F7AAB", "#7FA8D5", "#87CEEB"]
  }
];

export const CohortModulesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <div className="px-4 md:px-10 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <BlurFade delay={0.2} duration={0.8} yOffset={20} blur="8px">
            <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 tracking-tight">
              What We Have for You
            </h2>
          </BlurFade>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <BlurFade key={index} delay={0.4 + (index * 0.1)} duration={0.8} yOffset={15} blur="6px">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="cursor-pointer"
                >
                  <Card className="border-white/10 h-full overflow-hidden transition-all duration-300 peer">
                    {/* Shader Section with Module Info Overlay */}
                    <div className="relative h-32 overflow-hidden">
                      <MeshGradient
                        width={800}
                        height={200}
                        colors={module.colors}
                        distortion={0.8}
                        swirl={0.6}
                        speed={0.42}
                        offsetX={0.08}
                      />
                      {/* Module number and week overlay on shader */}
                      <div className="absolute bottom-0 left-0 p-4 flex items-center gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30">
                          <span className="text-white font-bold text-sm">{module.number}</span>
                        </div>
                        <span className="text-xs text-white uppercase tracking-wide font-medium">{module.week}</span>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-8 bg-black -mt-6 pt-10">
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-white">{module.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed">{module.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </BlurFade>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
};
