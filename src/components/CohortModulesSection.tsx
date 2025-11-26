import { Card } from "@/components/ui/card";
import { MeshGradient } from "@paper-design/shaders-react";
import { motion } from "framer-motion";

const modules = [
  {
    number: "0",
    week: "Week 0",
    title: "Cursor Setup and Environment Setup",
    description: "An IDE can be unfamiliar territory for non-technical folks and designers, but we'll make it easy for you to set up with our tested getting started prompts and lessons. Starting is always a challenge, but we'll make it simple so you can get up and running quickly.",
    colors: ["#4ECDC4", "#87CEEB", "#DA70D6", "#BA55D3"]
  },
  {
    number: "1",
    week: "Week 1",
    title: "Prototyping Mobile Apps with AI",
    description: "Prototype mobile apps and interfaces with interactions on touch interfaces and everything. They open up more opportunities for you to design and prototype mobile apps.",
    colors: ["#95E1D3", "#F38181", "#FCE38A", "#AAE3F0"]
  },
  {
    number: "2",
    week: "Week 2",
    title: "Building Web Apps with Gen AI Capabilities",
    description: "Build your first web app powered by Gen-AI capabilities and create an AI recipe generator powered by OpenAI LLM and OpenAI API using Cursor and translate your Figma design into a functional prototype with AI.",
    colors: ["#FF6B6B", "#FF8E53", "#FFD93D", "#FFA07A"]
  }
];

const bonusModule = {
  number: "B",
  week: "Bonus",
  title: "The first 20 would get a 1:1 with 30 minutes with John",
  description: "The first 20 get a 1:1 with John for AI journey guidance and mentorship.",
  colors: ["#C44569", "#D68FD6", "#E3A0D3", "#FF8CC8"]
};

export const CohortModulesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-black text-white overflow-hidden">
      <div className="px-4 sm:px-8 md:px-10 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="font-normal mb-4 tracking-tight"
              style={{ fontSize: '32px', lineHeight: '1.25' }}
            >
              This Is How Your Journey Will Look After Enrolling
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Modules are released weekly over four weeks, giving you time to complete each milestone without feeling overwhelmed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 md:gap-6">
            {/* Week 0 */}
            <motion.div
              whileHover={{ y: -8, scale: 1.08 }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 30,
                mass: 0.5
              }}
              className="cursor-pointer transition-all duration-300"
            >
              <Card className="border-white/10 h-full overflow-hidden flex flex-col">
                {/* Shader Section with Module Info Overlay */}
                <div className="relative h-32 overflow-hidden flex-shrink-0">
                  <MeshGradient
                    width={800}
                    height={200}
                    colors={modules[0].colors}
                    distortion={0.8}
                    swirl={0.6}
                    speed={0.42}
                    offsetX={0.08}
                  />
                  {/* Module number and week overlay on shader */}
                  <div className="absolute bottom-0 left-0 p-4 flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30">
                      <span className="text-white font-bold text-sm">{modules[0].number}</span>
                    </div>
                    <span className="text-xs text-white uppercase tracking-wide font-medium">{modules[0].week}</span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-8 bg-black -mt-6 pt-10 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">{modules[0].title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{modules[0].description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Week 1 */}
            <motion.div
              whileHover={{ y: -8, scale: 1.08 }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 30,
                mass: 0.5
              }}
              className="cursor-pointer transition-all duration-300"
            >
              <Card className="border-white/10 h-full overflow-hidden flex flex-col">
                {/* Shader Section with Module Info Overlay */}
                <div className="relative h-32 overflow-hidden flex-shrink-0">
                  <MeshGradient
                    width={800}
                    height={200}
                    colors={modules[1].colors}
                    distortion={0.8}
                    swirl={0.6}
                    speed={0.42}
                    offsetX={0.08}
                  />
                  {/* Module number and week overlay on shader */}
                  <div className="absolute bottom-0 left-0 p-4 flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30">
                      <span className="text-white font-bold text-sm">{modules[1].number}</span>
                    </div>
                    <span className="text-xs text-white uppercase tracking-wide font-medium">{modules[1].week}</span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-8 bg-black -mt-6 pt-10 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white">{modules[1].title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{modules[1].description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
            
            {/* Week 2 */}
            <motion.div
              whileHover={{ y: -8, scale: 1.08 }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 30,
                mass: 0.5
              }}
              className="cursor-pointer transition-all duration-300"
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
              className="cursor-pointer transition-all duration-300"
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
    </section>
  );
};
