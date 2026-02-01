import { Card } from "@/components/ui/card";
import { MeshGradient } from "@paper-design/shaders-react";
import { motion } from "framer-motion";

const bonusResources = [
  { title: "Design\nEngineering\nTrack", subtitle: "Design Engineering Track" },
  { title: "Complete\nFigma Course", subtitle: "Figma Complete Course" },
  { title: "AI Design\nPlaybook", subtitle: "AI Design Playbook" },
  { title: "Tools\n& Credits", subtitle: "AI Tools & Credits Hub" },
  { title: "Productivity\nWorkflows", subtitle: "AI Productivity Systems" },
  { title: "Project\nDemos", subtitle: "Projects Demos" },
];

const tracks = [
  {
    number: "1",
    week: "Track",
    title: "Getting Started Track",
    description: "Getting Started With AI Course - Learn the fundamentals of AI tools and set up your environment for success.",
    colors: ["#FF6B6B", "#FFD93D", "#FF8E53", "#FF6B9D"],
  },
  {
    number: "2",
    week: "Track",
    title: "AI Foundation Track",
    description: "Build a strong foundation in AI concepts, workflows, and best practices for designers.",
    colors: ["#4ECDC4", "#87CEEB", "#DA70D6", "#BA55D3"],
  },
  {
    number: "3",
    week: "Track",
    title: "AI Strategy Track",
    description: "Learn strategic thinking for AI implementation in design projects and product development.",
    colors: ["#95E1D3", "#F38181", "#FCE38A", "#AAE3F0"],
  },
  {
    number: "4",
    week: "Track",
    title: "Vibe Coding Track",
    description: "Master vibe coding techniques to build functional prototypes and AI apps.",
    colors: ["#FF6B6B", "#FF8E53", "#FFD93D", "#FFA07A"],
  },
  {
    number: "5",
    week: "Track",
    title: "AI Agents Track",
    description: "Explore AI agents and automation to supercharge your design and development workflow.",
    colors: ["#C44569", "#D68FD6", "#E3A0D3", "#FF8CC8"],
  },
  {
    number: "6",
    week: "Track",
    title: "Design Systems Track",
    description: "Create scalable design systems powered by AI for consistent and efficient product design.",
    colors: ["#667EEA", "#764BA2", "#F093FB", "#4FACFE"],
  },
];

export const CohortModulesSectionCopy = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-black text-white overflow-hidden">
      <div className="px-4 sm:px-6 md:px-10 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2
              className="font-normal mb-3 sm:mb-4 tracking-tight text-2xl sm:text-3xl md:text-4xl"
              style={{
                lineHeight: "1.25",
              }}
            >
              What We Have for You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.08,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                  mass: 0.5,
                }}
                className="cursor-pointer transition-all duration-300"
              >
                <Card className="border-white/10 h-full overflow-hidden flex flex-col">
                  {/* Shader Section with Module Info Overlay */}
                  <div className="relative h-32 overflow-hidden flex-shrink-0">
                    <MeshGradient
                      width={800}
                      height={200}
                      colors={track.colors}
                      distortion={0.8}
                      swirl={0.6}
                      speed={0.42}
                      offsetX={0.08}
                    />
                    {/* Module number and week overlay on shader */}
                    <div className="absolute bottom-0 left-0 p-4 flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30">
                        <span className="text-white font-bold text-sm">
                          {track.number}
                        </span>
                      </div>
                      <span className="text-xs text-white uppercase tracking-wide font-medium">
                        {track.week}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5 sm:p-6 md:p-8 bg-black -mt-6 pt-8 sm:pt-10 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                        {track.title}
                      </h3>
                      <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                        {track.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bonus Resources - Horizontal Scrolling Marquee */}
          <div className="mt-12 sm:mt-16 md:mt-20">
            <p className="text-center text-white/60 text-sm mb-6">Plus bonus resources included</p>
            <div className="relative overflow-hidden">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

              {/* Scrolling container */}
              <div className="flex animate-marquee">
                {[...bonusResources, ...bonusResources].map((resource, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[200px] sm:w-[240px] mx-2 sm:mx-3"
                  >
                    <Card className="border-white/10 bg-white/5 backdrop-blur-sm h-full p-4 sm:p-5">
                      <h4 className="text-base sm:text-lg font-bold text-white whitespace-pre-line leading-tight mb-2">
                        {resource.title}
                      </h4>
                      <p className="text-white/50 text-xs sm:text-sm">
                        {resource.subtitle}
                      </p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};
