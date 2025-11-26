import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export const BlackFridayStickyBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

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
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto">
            {/* Sale Info */}
            <div className="flex items-center gap-4 flex-1">
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-white font-bold text-sm">BLACK FRIDAY SALE</span>
              </div>
              <div className="hidden sm:flex items-center gap-3 text-white">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">$299</span>
                  <span className="text-lg text-white/60 line-through">$499</span>
                </div>
                <span className="text-sm opacity-80">•</span>
                <span className="text-sm">Limited time offer</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-3">
              <Button
                variant="secondary"
                size="sm"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                asChild
              >
                <a href="https://maven.com/productlearnio/aiproductdesignmasterycohort" target="_blank" rel="noopener noreferrer">
                  Enroll Now
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

