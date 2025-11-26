import { Card } from "@/components/ui/card";
import { MeshGradient } from "@paper-design/shaders-react";
import { motion } from "framer-motion";

const modules = [
  {
    number: "0",
    week: "Week 0",
    title: "Cursor Setup and Environment Setup",
    description: "Learn how to set up Cursor IDE and configure your development environment for AI-powered coding. Get familiar with the tools, extensions, and workflows that will accelerate your development process.",
    colors: ["#4ECDC4", "#87CEEB", "#DA70D6", "#BA55D3"]
  },
  {
    number: "2",
    week: "Week 2",
    title: "Prototyping Mobile Apps with AI",
    description: "Build your first functional mobile app prototype from scratch using AI assistance. Learn to design, code, and iterate on mobile interfaces with modern development tools.",
    colors: ["#95E1D3", "#F38181", "#FCE38A", "#AAE3F0"]
  },
  {
    number: "3",
    week: "Week 3",
    title: "Building Web Apps with Gen AI Capabilities",
    description: "Develop complete web applications with generative AI features. Integrate AI capabilities into your web apps and create intelligent, interactive user experiences.",
    colors: ["#FF6B6B", "#FF8E53", "#FFD93D", "#FFA07A"]
  }
];

const bonusModule = {
  number: "B",
  week: "Bonus",
  title: "Advanced Figma Course",
  description: "Get a free Figma course with 50+ lessons on us. Master Figma fundamentals and advanced techniques to enhance your design skills.",
  colors: ["#C44569", "#D68FD6", "#E3A0D3", "#FF8CC8"]
};

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 group">
            {/* Left column - Week 0, Week 1 */}
            <div className="flex flex-col gap-4 md:gap-6">
              {modules.slice(0, 2).map((module, index) => {
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
                    className="cursor-pointer transition-all duration-300 group-hover:blur-sm group-hover:opacity-60 hover:!blur-none hover:!opacity-100 h-full"
                  >
                    <Card className="border-white/10 h-full overflow-hidden flex flex-col">
                      {/* Shader Section with Module Info Overlay */}
                      <div className="relative h-32 overflow-hidden flex-shrink-0">
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
                      <div className="p-8 bg-black -mt-6 pt-10 flex-1 flex flex-col">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2 text-white">{module.title}</h3>
                          <p className="text-white/60 text-sm leading-relaxed">{module.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Right column - Week 3, Bonus */}
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Week 3 */}
              <motion.div
                whileHover={{ y: -8, scale: 1.08 }}
                transition={{ 
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                  mass: 0.5
                }}
                className="cursor-pointer transition-all duration-300 group-hover:blur-sm group-hover:opacity-60 hover:!blur-none hover:!opacity-100 h-full"
              >
                <Card className="border-white/10 h-full overflow-hidden flex flex-col">
                  {/* Shader Section with Module Info Overlay */}
                  <div className="relative h-32 overflow-hidden flex-shrink-0">
                    <MeshGradient
                      width={800}
                      height={200}
                      colors={modules[2].colors}
                      distortion={0.8}
                      swirl={0.6}
                      speed={0.42}
                      offsetX={0.08}
                    />
                    {/* Module number and week overlay on shader */}
                    <div className="absolute bottom-0 left-0 p-4 flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30">
                        <span className="text-white font-bold text-sm">{modules[2].number}</span>
                      </div>
                      <span className="text-xs text-white uppercase tracking-wide font-medium">{modules[2].week}</span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 bg-black -mt-6 pt-10 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-white">{modules[2].title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{modules[2].description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
              
              {/* Bonus module */}
              <motion.div
                whileHover={{ y: -8, scale: 1.08 }}
                transition={{ 
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                  mass: 0.5
                }}
                className="cursor-pointer transition-all duration-300 group-hover:blur-sm group-hover:opacity-60 hover:!blur-none hover:!opacity-100 h-full"
              >
                <Card className="border-white/10 h-full overflow-hidden flex flex-col">
                  {/* Shader Section with Module Info Overlay */}
                  <div className="relative h-32 overflow-hidden flex-shrink-0">
                    <MeshGradient
                      width={800}
                      height={200}
                      colors={bonusModule.colors}
                      distortion={0.8}
                      swirl={0.6}
                      speed={0.42}
                      offsetX={0.08}
                    />
                    {/* Module number and week overlay on shader */}
                    <div className="absolute bottom-0 left-0 p-4 flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30">
                        <span className="text-white font-bold text-sm">{bonusModule.number}</span>
                      </div>
                      <span className="text-xs text-white uppercase tracking-wide font-medium">{bonusModule.week}</span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 bg-black -mt-6 pt-10 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-white">{bonusModule.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{bonusModule.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
