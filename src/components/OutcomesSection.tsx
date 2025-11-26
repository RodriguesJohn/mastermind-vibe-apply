import { Check } from "lucide-react";
import { MeshGradient } from "@paper-design/shaders-react";

const outcomes = [
  {
    text: "Learn Cursor",
    description: "Master the most popular AI development tool. Perfect for designers who want to prototype their ideas quickly.",
    colors: ["#FF6B6B", "#FFD93D", "#FF8E53", "#FF6B9D"]
  },
  {
    text: "Build a mobile app prototype",
    description: "Hands-on mobile app design and prototyping with rich animations and API integration. Design interfaces you can touch and feel.",
    colors: ["#4ECDC4", "#87CEEB", "#DA70D6", "#BA55D3"]
  },
  {
    text: "Create an AI recipe app with the power of Gen AI",
    description: "Finally, create an AI recipe generator app using OpenAI's API within Cursor, and don't just design static interfaces but design interfaces that are generative in nature.",
    colors: ["#95E1D3", "#F38181", "#FCE38A", "#AAE3F0"]
  },
  {
    text: "Learn the workflows",
    description: "Unique workflows that save money and speed up your prototyping process. Build your ideas quickly without deep technical knowledge.",
    colors: ["#C44569", "#D68FD6", "#E3A0D3", "#FF8CC8"]
  },
];

const headerCards = [
  {
    title: "Getting Started Master Prompt",
    action: "Start your journey"
  },
  {
    title: "Learn About Different Techniques and Trips",
    action: "Discover advanced techniques"
  },
  {
    title: "Learn How to Orchestrate Workflows",
    action: "Streamline your workflow"
  },
];

export const OutcomesSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="px-4 md:px-10 lg:px-[120px] relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              What You'll Achieve
            </h2>
            <p className="text-xl text-muted-foreground">
              Transform your skills and career trajectory
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="relative rounded-xl border border-white/10 hover:border-white/30 transition-all overflow-hidden group bg-black flex flex-col"
              >
                {/* Top Section - Gradient Shader */}
                <div className="relative h-32 overflow-hidden">
                  <MeshGradient
                    width={800}
                    height={200}
                    colors={outcome.colors}
                    distortion={0.8}
                    swirl={0.6}
                    speed={0.42}
                    offsetX={0.08}
                  />
                  {/* Faded black gradient overlay for smooth transition */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60" />
                </div>
                
                {/* Transition overlay for smoother blend */}
                <div className="absolute top-24 left-0 right-0 h-12 bg-gradient-to-b from-black/60 via-black/80 to-black pointer-events-none z-10" />
                
                {/* Bottom Section - Text Content */}
                <div className="relative flex items-start gap-4 p-6 bg-black -mt-6 pt-10 z-20">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mt-0.5 border border-white/30">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg leading-relaxed text-white font-semibold mb-2">
                      {outcome.text}
                    </p>
                    <p className="text-sm leading-relaxed text-white/70 font-light">
                      {outcome.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
