import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import PlaybookImage from "@/assets/Playbook.webp";
import { ArrowRight, Check } from "lucide-react";

const GetGuide = () => {
  return (
    <>
      <Helmet>
        <title>Get the AI Design Playbook - AI Design Academy</title>
        <meta name="description" content="Download the ultimate guide to mastering AI design workflows. Join 1,500+ designers staying ahead of the curve." />
      </Helmet>

      <div className="min-h-screen bg-[#0E0E10] text-white selection:bg-white/20 flex flex-col">
        <Navigation />

        <main className="flex-1 flex flex-col justify-center items-center px-6 md:px-12 py-20 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(168,85,247,0.1)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" />
          
          <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
            {/* Left Column: Content */}
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.1]">
                  The AI Design Playbook
                </h1>
                <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Stop guessing. Start building. The comprehensive guide to integrating AI into your product design workflow. 
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col gap-3">
                  {["Multimodal Design Patterns", "AI-First Prototyping Workflows", "Future of Design Roles"].map((item) => (
                    <div key={item} className="flex items-center gap-3 justify-center lg:justify-start text-white/80">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 max-w-md mx-auto lg:mx-0">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-white/20 transition-colors"
                    required
                  />
                  <Button size="lg" className="h-12 px-8 bg-white text-black hover:bg-white/90 font-medium whitespace-nowrap">
                    Get the Guide
                  </Button>
                </form>
                <p className="text-xs text-white/40 mt-4 text-center lg:text-left">
                  Join 1,500+ designers. Unsubscribe at any time.
                </p>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-md aspect-[3/4] lg:aspect-square bg-white/5 rounded-xl border border-white/10 p-2 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={PlaybookImage} 
                  alt="AI Design Playbook Cover" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default GetGuide;

