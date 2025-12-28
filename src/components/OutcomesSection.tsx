import { Check } from "lucide-react";
import { MeshGradient } from "@paper-design/shaders-react";
const outcomes = [{
  text: "Behind-the-scenes builds & resources",
  description: "Get exclusive access to behind-the-scenes builds, resources, and insights from real AI product development.",
  colors: ["#FF6B6B", "#FFD93D", "#FF8E53", "#FF6B9D"]
}, {
  text: "Cursor Complete course",
  description: "Full access to the complete Cursor course. Master vibe coding and learn to build AI-powered products with Cursor.",
  colors: ["#4ECDC4", "#87CEEB", "#DA70D6", "#BA55D3"]
}, {
  text: "Native App Prototyping course",
  description: "Learn to prototype native apps and bring your AI product ideas to life across platforms with our comprehensive course.",
  colors: ["#95E1D3", "#F38181", "#FCE38A", "#AAE3F0"]
}, {
  text: "Getting Started course and resources",
  description: "Access the getting started course and essential resources to kickstart your AI product building journey.",
  colors: ["#00D4AA", "#00C9FF", "#5B8DEF", "#A855F7"]
}, {
  text: "Access to community of product builders",
  description: "Connect with a community of AI product builders. Share projects, get feedback, and collaborate with fellow creators.",
  colors: ["#C44569", "#D68FD6", "#E3A0D3", "#FF8CC8"]
}, {
  text: "Stay updated with latest AI tools & updates",
  description: "Help you stay updated with the latest tools and updates on AI. Get curated insights on new tools, techniques, and industry trends.",
  colors: ["#6C5CE7", "#A29BFE", "#74B9FF", "#0984E3"]
}];
const headerCards = [{
  title: "Getting Started Master Prompt",
  action: "Start your journey"
}, {
  title: "Learn About Different Techniques and Trips",
  action: "Discover advanced techniques"
}, {
  title: "Learn How to Orchestrate Workflows",
  action: "Streamline your workflow"
}];
export const OutcomesSection = () => {
  return <section className="py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="px-4 sm:px-6 md:px-10 lg:px-[120px] relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
              What You'll Achieve
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {outcomes.map((outcome, index) => <div key={index} className="relative rounded-xl border border-white/10 hover:border-white/30 transition-all overflow-hidden group bg-black flex flex-col">
                {/* Top Section - Gradient Shader */}
                <div className="relative h-32 overflow-hidden">
                  <MeshGradient width={800} height={200} colors={outcome.colors} distortion={0.8} swirl={0.6} speed={0.42} offsetX={0.08} />
                  {/* Faded black gradient overlay for smooth transition */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60" />
                </div>
                
                {/* Transition overlay for smoother blend */}
                <div className="absolute top-24 left-0 right-0 h-12 bg-gradient-to-b from-black/60 via-black/80 to-black pointer-events-none z-10" />
                
                {/* Bottom Section - Text Content */}
                <div className="relative flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-black -mt-6 pt-8 sm:pt-10 z-20">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mt-0.5 border border-white/30">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg leading-relaxed text-white font-semibold mb-1 sm:mb-2">
                      {outcome.text}
                </p>
                    <p className="sm:text-sm leading-relaxed text-white/70 font-light text-base">
                      {outcome.description}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};