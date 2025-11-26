import { Card } from "@/components/ui/card";
import { MeshGradient } from "@paper-design/shaders-react";
import { motion } from "framer-motion";

const modules = [
  {
    number: "0",
    week: "Week 0",
    title: "Getting Started with Vibe Coding",
    description: "Learn what vibe coding is, set up your development environment, and get familiar with the tools you'll be using throughout the course.",
    colors: ["#FF6B6B", "#FFD93D", "#FF8E53", "#FF6B9D"]
  },
  {
    number: "1",
    week: "Week 1",
    title: "Master Cursor & Build Your First App",
    description: "Deep dive into Cursor IDE, learn AI-powered coding techniques, and build your first functional prototype with hands-on guidance.",
    colors: ["#4ECDC4", "#87CEEB", "#DA70D6", "#BA55D3"]
  },
  {
    number: "2",
    week: "Week 2",
    title: "Create AI Recipe Generator",
    description: "Put your skills to work by building a complete AI-powered recipe generator app as your portfolio project. Learn to integrate AI APIs and create production-ready applications.",
    colors: ["#95E1D3", "#F38181", "#FCE38A", "#AAE3F0"]
  }
];

export const CohortModulesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-black text-white overflow-hidden">
      <div className="px-4 sm:px-8 md:px-10 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 
            className="font-normal text-center mb-16 tracking-tight"
            style={{ fontSize: '32px', lineHeight: '1.25' }}
          >
            What We Have for You
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 group">
          {modules.map((module, index) => {
            return (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.08 }}
                transition={{ 
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                  mass: 0.5
                }}
                className="cursor-pointer transition-all duration-300 group-hover:blur-sm group-hover:opacity-60 hover:!blur-none hover:!opacity-100"
              >
                <Card className="border-white/10 h-full overflow-hidden">
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
                      <h3 className="text-xl font-semibold mb-2 text-white">{module.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{module.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
};
