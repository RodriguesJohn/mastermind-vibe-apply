import { Card } from "@/components/ui/card";
import { MeshGradient } from "@paper-design/shaders-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

// AI Cohort modules (original)
const aiCohortModules = [{
  number: "1",
  week: "Week 1",
  title: "Break Through the Fear and Build Strong Vibe Coding Foundations",
  description: "Build strong vibe coding foundations using Cursor. Overcome fear and build confidence as you create a web app from scratch. In a live workshop, build a vibe-coded AI web app together using Cursor.",
  colors: ["#FF6B6B", "#FFD93D", "#FF8E53", "#FF6B9D"]
}, {
  number: "2",
  week: "Week 2",
  title: "Learn advanced vibe coding techniques and launch your app",
  description: "Connect APIs and Supabase. Work with Cursor + Claude Code to build advanced features and launch your app in Vercel.",
  colors: ["#4ECDC4", "#87CEEB", "#DA70D6", "#BA55D3"]
}, {
  number: "3",
  week: "Format",
  title: "Live Workshop + Recorded Sessions",
  description: "Join live workshops where you build together with hands-on practice. Get real-time feedback and collaborate with peers to create working AI products.",
  colors: ["#95E1D3", "#F38181", "#FCE38A", "#AAE3F0"]
}, {
  number: "4",
  week: "Bonus",
  title: "1-Month Access to the AI Mastery Membership",
  description: "Includes AI Fluency, AI Strategy, and AI Agents-focused learning tracks. Case Studies & Community Support. Continuously learn and stay updated with new AI tools.",
  colors: ["#FF6B6B", "#FF8E53", "#FFD93D", "#FFA07A"]
  }, {
    number: "5",
    week: "Bonus",
    title: "Direct Access to Instructor",
    description: "Get direct access to the instructor for personalized guidance, support, and mentorship to overcome challenges and unlock your next steps.",
    colors: ["#C44569", "#D68FD6", "#E3A0D3", "#FF8CC8"]
  }, {
    number: "6",
    week: "Community",
    title: "Join the community of AI designers and product builders",
    description: "Connect with a community of AI designers, product builders, and leaders. Share experiences, get support, and grow together in your AI journey.",
    colors: ["#667EEA", "#764BA2", "#F093FB", "#4FACFE"]
  }];

// Vibe Coding Course modules
const vibeCodingModules = [{
  number: "0",
  week: "Week 0",
  title: "Cursor Setup and Environment Setup",
  description: "Set up Cursor IDE with our tested prompts and lessons. We'll make it simple so you can get started quickly.",
  colors: ["#4ECDC4", "#87CEEB", "#DA70D6", "#BA55D3"]
}, {
  number: "1",
  week: "Week 1",
  title: "Prototyping Mobile Apps with AI",
  description: "Prototype mobile apps with touch interactions and animations. Learn to design and build mobile interfaces.",
  colors: ["#95E1D3", "#F38181", "#FCE38A", "#AAE3F0"]
}, {
  number: "2",
  week: "Week 2",
    title: "Building Web Apps with GenAI Capabilities",
  description: "Build a web app with Gen-AI capabilities. Create an AI recipe generator using OpenAI API and translate Figma designs into functional prototypes.",
  colors: ["#FF6B6B", "#FF8E53", "#FFD93D", "#FFA07A"]
}];
const vibeCodingBonusModule = {
  number: "B",
  week: "Bonus",
  title: "Get Bonus and Resources",
  description: "Access exclusive bonus content, additional resources, templates, and extended learning materials to enhance your vibe coding journey and continue building your skills beyond the core curriculum.",
  colors: ["#C44569", "#D68FD6", "#E3A0D3", "#FF8CC8"]
};
export const CohortModulesSection = () => {
  const location = useLocation();
  // Cohort home page is at "/" - show AI Cohort curriculum
  // Vibe coding course page is at "/vibe-coding-course" - show vibe coding curriculum
  const isVibeCodingCourse = location.pathname === "/vibe-coding-course" || (location.pathname.includes("vibe-coding") && location.pathname !== "/");

  // Use different modules based on the page
  const modules = isVibeCodingCourse ? vibeCodingModules : aiCohortModules;
  const bonusModule = isVibeCodingCourse ? vibeCodingBonusModule : null;

  // Determine heading and description based on page
  const heading = isVibeCodingCourse ? "Your Learning Journey" : "What We Have for You";
  const description = null;

  // For AI Cohort, show all 6 modules in a 3-column grid
  // For Vibe Coding, show 4 modules (3 weeks + bonus) in a 2x2 grid
  const gridClass = isVibeCodingCourse ? "grid grid-cols-1 md:grid-cols-2 md:grid-rows-2" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  return <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-black text-white overflow-hidden">
      <div className="px-4 sm:px-6 md:px-10 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-normal mb-3 sm:mb-4 tracking-tight text-2xl sm:text-3xl md:text-4xl" style={{
            lineHeight: '1.25'
          }}>
              {heading}
          </h2>
            {description}
          </div>
          
          <div className={`${gridClass} gap-4 sm:gap-5 md:gap-6`}>
            {/* Render modules */}
            {modules.map((module, index) => <motion.div key={index} whileHover={{
            y: -8,
            scale: 1.08
          }} transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
            mass: 0.5
          }} className="cursor-pointer transition-all duration-300">
                <Card className="border-white/10 h-full overflow-hidden flex flex-col">
                  {/* Shader Section with Module Info Overlay */}
                  <div className="relative h-32 overflow-hidden flex-shrink-0">
                    <MeshGradient width={800} height={200} colors={module.colors} distortion={0.8} swirl={0.6} speed={0.42} offsetX={0.08} />
                    {/* Module number and week overlay on shader */}
                    <div className="absolute bottom-0 left-0 p-4 flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30">
                        <span className="text-white font-bold text-sm">{module.number}</span>
                      </div>
                      <span className="text-xs text-white uppercase tracking-wide font-medium">{module.week}</span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-5 sm:p-6 md:p-8 bg-black -mt-6 pt-8 sm:pt-10 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{module.title}</h3>
                      <p className="text-white/60 text-sm sm:text-base leading-relaxed">{module.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>)}
            
            {/* Bonus module (only for Vibe Coding Course) */}
            {bonusModule && <motion.div whileHover={{
            y: -8,
            scale: 1.08
          }} transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
            mass: 0.5
          }} className="cursor-pointer transition-all duration-300">
                <Card className="border-white/10 h-full overflow-hidden flex flex-col">
                  {/* Shader Section with Module Info Overlay */}
                  <div className="relative h-32 overflow-hidden flex-shrink-0">
                    <MeshGradient width={800} height={200} colors={bonusModule.colors} distortion={0.8} swirl={0.6} speed={0.42} offsetX={0.08} />
                    {/* Module number and week overlay on shader */}
                    <div className="absolute bottom-0 left-0 p-4 flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30">
                        <span className="text-white font-bold text-sm">{bonusModule.number}</span>
                      </div>
                      <span className="text-xs text-white uppercase tracking-wide font-medium">{bonusModule.week}</span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-5 sm:p-6 md:p-8 bg-black -mt-6 pt-8 sm:pt-10 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-white">{bonusModule.title}</h3>
                      <p className="text-white/60 text-sm sm:text-base leading-relaxed">{bonusModule.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>}
          </div>
        </div>
      </div>
    </section>;
};