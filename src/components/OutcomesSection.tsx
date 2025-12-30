import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
const outcomes = [{
  text: "Getting Started with AI Course",
  description: "A foundational, step-by-step course to understand AI basics, core concepts, and how to start using AI confidently in real product and design workflows.",
  colors: ["#FF6B6B", "#FFD93D", "#FF8E53", "#FF6B9D"]
}, {
  text: "Cursor – Complete Course",
  description: "A practical, end-to-end guide to using Cursor for AI-assisted coding, prototyping, and shipping faster—no fluff, just real workflows.",
  colors: ["#4ECDC4", "#87CEEB", "#DA70D6", "#BA55D3"]
}, {
  text: "Prototyping iOS Apps with AI",
  description: "Learn how to design, prototype, and build iOS apps using AI tools, SwiftUI, and modern AI-native workflows—from idea to working prototype.",
  colors: ["#95E1D3", "#F38181", "#FCE38A", "#AAE3F0"]
}, {
  text: "Tools & Credits Hub",
  description: "A curated library of AI tools, platforms, and exclusive credits you can use to experiment, prototype, and build without wasting time or money.",
  colors: ["#00D4AA", "#00C9FF", "#5B8DEF", "#A855F7"]
}, {
  text: "AI Design Playbook",
  description: "A living playbook of frameworks, patterns, and best practices for designing AI-native and agentic products grounded in human-centered UX.",
  colors: ["#C44569", "#D68FD6", "#E3A0D3", "#FF8CC8"]
}, {
  text: "Productivity System Track",
  description: "Systems, workflows, and automations to help you work faster, think clearer, and leverage AI as a true productivity multiplier.",
  colors: ["#6C5CE7", "#A29BFE", "#74B9FF", "#0984E3"]
}, {
  text: "Figma Course",
  description: "A practical Figma course focused on real product design workflows, systems thinking, and collaboration—not just buttons and frames.",
  colors: ["#FF6B6B", "#FFD93D", "#FF8E53", "#FF6B9D"]
}, {
  text: "Onboards Included",
  description: "Get personalized onboarding sessions to help you get started and make the most of your membership from day one.",
  colors: ["#F59E0B", "#F97316", "#EF4444", "#DC2626"]
}, {
  text: "Monthly 30 Minutes Live Office Hours",
  description: "Join monthly live office hours for direct Q&A, personalized guidance, and real-time support from the community and instructors.",
  colors: ["#10B981", "#059669", "#047857", "#065F46"]
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollRef = useRef<number | null>(null);
  const isAutoScrollingRef = useRef(true);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      setIsAutoScrolling(false);
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
      
      const cardWidth = 400; // md:w-[400px]
      const gap = 24; // gap-6 = 24px
      const scrollAmount = cardWidth + gap;
      
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = direction === 'right' 
        ? currentScroll + scrollAmount 
        : currentScroll - scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
      
      setTimeout(checkScrollability, 300);
      
      // Resume auto-scroll after 3 seconds
      setTimeout(() => {
        setIsAutoScrolling(true);
      }, 3000);
    }
  };

  // Sync ref with state
  useEffect(() => {
    isAutoScrollingRef.current = isAutoScrolling;
  }, [isAutoScrolling]);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      checkScrollability();
      
      // Clean up any existing animation
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
        autoScrollRef.current = null;
      }
      
      // Auto-scroll functionality
      if (isAutoScrolling && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        
        // Only start scrolling if content actually overflows
        if (container.scrollWidth > container.clientWidth) {
          const scroll = () => {
            if (container && isAutoScrollingRef.current) {
              const currentScroll = container.scrollLeft;
              container.scrollLeft = currentScroll + 0.3;
              
              // Reset to beginning when reaching the end (for seamless loop)
              if (container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft = 0;
              }
              
              autoScrollRef.current = requestAnimationFrame(scroll);
            }
          };
          autoScrollRef.current = requestAnimationFrame(scroll);
        }
      }
    }, 200);

    return () => {
      clearTimeout(timer);
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
        autoScrollRef.current = null;
      }
    };
  }, [isAutoScrolling]);

  // Duplicate outcomes for seamless infinite scroll
  const duplicatedOutcomes = [...outcomes, ...outcomes];
  
  return <section className="py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="px-4 sm:px-6 md:px-10 lg:px-[120px] relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
              What's Included
            </h2>
          </div>
          
          {/* Horizontal Scrolling Container with Controls */}
          <div className="relative">
            {/* Left Arrow */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-black/90 backdrop-blur-sm border-white/30 hover:bg-black hover:border-white/50 h-12 w-12 rounded-full shadow-lg transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </Button>

            {/* Right Arrow */}
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-black/90 backdrop-blur-sm border-white/30 hover:bg-black hover:border-white/50 h-12 w-12 rounded-full shadow-lg transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </Button>

            {/* Scroll Container */}
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide"
              onScroll={checkScrollability}
              onMouseEnter={() => setIsAutoScrolling(false)}
              onMouseLeave={() => setIsAutoScrolling(true)}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div 
                className="flex gap-4 sm:gap-6 pb-4"
                style={{ width: 'max-content' }}
              >
                {duplicatedOutcomes.map((outcome, index) => <div key={index} className="relative rounded-xl border border-white/10 hover:border-white/30 transition-all overflow-hidden group bg-black flex flex-col flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px]">
                    {/* Content Section */}
                    <div className="flex items-start gap-3 sm:gap-4 p-6 sm:p-8 bg-black">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mt-1 border border-white/20 group-hover:bg-white/20 transition-colors">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <h3 className="text-lg sm:text-xl leading-tight text-white font-semibold">
                          {outcome.text}
                        </h3>
                        <p className="text-sm sm:text-base leading-relaxed text-white/70">
                          {outcome.description}
                        </p>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};