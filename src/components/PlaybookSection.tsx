import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileText } from "lucide-react";

export const PlaybookSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <style>
        {`
          @keyframes paperFloat {
            0%, 100% {
              transform: translateY(0px) rotate(-1deg);
            }
            50% {
              transform: translateY(-8px) rotate(-0.5deg);
            }
          }
          @keyframes paperFloatBack {
            0%, 100% {
              transform: translateY(8px) rotate(-2deg);
            }
            50% {
              transform: translateY(4px) rotate(-1.5deg);
            }
          }
          @keyframes paperFloatMiddle {
            0%, 100% {
              transform: translateY(4px) rotate(1deg);
            }
            50% {
              transform: translateY(0px) rotate(1.5deg);
            }
          }
        `}
      </style>
      <div className="px-4 md:px-10 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <Card className="p-8 md:p-12 bg-card/50 border-border/40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight mb-4">
                  Getting Started Guide
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A step-by-step guide to help you navigate and learn AI design. Learn the foundations, key terminologies, and practical applications.
                </p>
                <Button variant="cta" size="lg" className="group" asChild>
                  <a href="/guide">
                    View the Guide
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

            </div>

            <div className="flex items-center justify-center mt-8 lg:mt-0">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                {/* Stacked Paper */}
                <div className="relative w-full aspect-[3/4] flex items-center justify-center">
                  {/* Paper 1 - Back */}
                  <div 
                    className="absolute w-[85%] h-[90%] bg-white rounded-sm shadow-lg"
                    style={{
                      animation: 'paperFloatBack 4s ease-in-out infinite',
                      backgroundImage: `
                        repeating-linear-gradient(
                          0deg,
                          rgba(0,0,0,0.02) 0px,
                          rgba(0,0,0,0.02) 1px,
                          transparent 1px,
                          transparent 2px
                        ),
                        repeating-linear-gradient(
                          90deg,
                          rgba(0,0,0,0.02) 0px,
                          rgba(0,0,0,0.02) 1px,
                          transparent 1px,
                          transparent 2px
                        )
                      `
                    }}
                  />
                  {/* Paper 2 - Middle */}
                  <div 
                    className="absolute w-[90%] h-[92%] bg-white rounded-sm shadow-xl z-10"
                    style={{
                      animation: 'paperFloatMiddle 3.5s ease-in-out infinite',
                      backgroundImage: `
                        repeating-linear-gradient(
                          0deg,
                          rgba(0,0,0,0.02) 0px,
                          rgba(0,0,0,0.02) 1px,
                          transparent 1px,
                          transparent 2px
                        ),
                        repeating-linear-gradient(
                          90deg,
                          rgba(0,0,0,0.02) 0px,
                          rgba(0,0,0,0.02) 1px,
                          transparent 1px,
                          transparent 2px
                        )
                      `
                    }}
                  />
                  {/* Paper 3 - Front */}
                  <div 
                    className="absolute w-[95%] h-[94%] bg-white rounded-sm shadow-2xl z-20 overflow-hidden"
                    style={{
                      animation: 'paperFloat 3s ease-in-out infinite',
                      backgroundImage: `
                        repeating-linear-gradient(
                          0deg,
                          rgba(0,0,0,0.02) 0px,
                          rgba(0,0,0,0.02) 1px,
                          transparent 1px,
                          transparent 2px
                        ),
                        repeating-linear-gradient(
                          90deg,
                          rgba(0,0,0,0.02) 0px,
                          rgba(0,0,0,0.02) 1px,
                          transparent 1px,
                          transparent 2px
                        )
                      `
                    }}
                  >
                    {/* Curled Corner */}
                    <div 
                      className="absolute top-0 right-0 w-16 h-16"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 50%, transparent 100%)',
                        clipPath: 'polygon(100% 0%, 100% 50%, 50% 100%, 0% 100%, 0% 0%)',
                        boxShadow: '-2px 2px 4px rgba(0,0,0,0.1)'
                      }}
                    />
                    
                    {/* Content */}
                    <div className="p-4 sm:p-5 md:p-6 h-full flex flex-col">
                      <div className="mb-3 sm:mb-4">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Getting Started Guide</h3>
                        <div className="h-0.5 w-10 sm:w-12 bg-gray-300 mb-3 sm:mb-4"></div>
                      </div>
                      
                      <div className="flex-1 space-y-2 sm:space-y-3 text-left">
                        <div>
                          <div className="text-xs font-semibold text-gray-700 mb-1">Step 1: Foundation</div>
                          <div className="text-xs text-gray-600 leading-relaxed">
                            Learn the core concepts of AI and understand key terminologies that will help you navigate...
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-xs font-semibold text-gray-700 mb-1">Step 2: Tools & Methods</div>
                          <div className="text-xs text-gray-600 leading-relaxed">
                            Explore practical tools and methodologies used in AI product design. Hands-on exercises...
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-xs font-semibold text-gray-700 mb-1">Step 3: Application</div>
                          <div className="text-xs text-gray-600 leading-relaxed">
                            Apply your knowledge to real-world scenarios. Build projects and create AI-powered...
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
                        <div className="text-xs text-gray-500 italic">Continue reading →</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
