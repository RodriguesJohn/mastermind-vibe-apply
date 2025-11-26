import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const BlackFridayStickyBar = () => {

  return (
    <>
      <style>
        {`
          @keyframes slideUp {
            from {
              transform: translateY(100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          @keyframes subtleGlow {
            0%, 100% {
              box-shadow: 0 -4px 20px rgba(59, 130, 246, 0.3);
            }
            50% {
              box-shadow: 0 -4px 30px rgba(59, 130, 246, 0.5);
            }
          }
        `}
      </style>
      <div 
        className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-primary/90 via-primary to-primary/90 border-t border-primary/50"
        style={{
          animation: 'slideUp 0.5s ease-out, subtleGlow 3s ease-in-out infinite',
        }}
      >
        <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
          <div className="flex items-center justify-between gap-2 sm:gap-4 max-w-7xl mx-auto">
            {/* Sale Info */}
            <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
              <div className="bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full flex-shrink-0">
                <span className="text-white font-bold text-xs sm:text-sm whitespace-nowrap">BLACK FRIDAY SALE</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 sm:gap-3 text-white flex-shrink-0">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-xl sm:text-2xl font-bold">$299</span>
                  <span className="text-base sm:text-lg text-white/60 line-through">$499</span>
                </div>
                <span className="text-xs sm:text-sm opacity-80">•</span>
                <span className="text-xs sm:text-sm whitespace-nowrap">Limited time offer</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <Button
                variant="secondary"
                size="sm"
                className="bg-white text-primary hover:bg-white/90 font-semibold text-xs sm:text-sm px-3 sm:px-4"
                asChild
              >
                <a href="https://ai-design-academy-s-school.teachable.com/purchase?product_id=6550289" target="_blank" rel="noopener noreferrer">
                  <span className="hidden xs:inline">Enroll Now</span>
                  <span className="xs:hidden">Enroll</span>
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

