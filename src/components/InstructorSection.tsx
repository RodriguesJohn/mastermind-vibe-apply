import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import instructorImage from "@/assets/John.png";
import appleLogo from "@/assets/Apple.png";
import googleLogo from "@/assets/Google.svg.png";
import citiLogo from "@/assets/Citi.svg.png";
import chaseLogo from "@/assets/Chase.png";

export const InstructorSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="px-4 md:px-10 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 
            className="font-normal text-center mb-16 tracking-tight"
            style={{ fontSize: '32px', lineHeight: '1.25' }}
          >
            Know Your Instructor
          </h2>
          
          <Card className="p-8 md:p-12 bg-card/50 border-border/40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 
                className="font-semibold tracking-tight"
                style={{ fontSize: '25.6px', lineHeight: '1.3' }}
              >
                Meet John Rodrigues
              </h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sr. Product Designer at JPMorgan | Founder of AI Design Academy. John Rodrigues is a Senior Product Designer, AI strategist, and author of The AI Design Playbook, a resource trusted by over 1,500 industry leaders.
                </p>

                <p>
                  With over a decade of experience in product design, he leads AI design initiatives at JPMorgan Chase and holds a Master's degree in Interaction Design, a Bachelor's in Engineering, and an AI certification from Stanford University.
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-4">
                  Publication trusted by companies
                </p>
                <div className="flex items-center gap-8 flex-wrap opacity-80">
                  <img className="h-6 w-fit opacity-80" src={appleLogo} alt="Apple" height="24" width="auto" />
                  <img className="h-6 w-fit opacity-80" src={googleLogo} alt="Google" height="24" width="auto" />
                  <img className="h-6 w-fit opacity-80" src={citiLogo} alt="Citi" height="24" width="auto" />
                  <img className="h-6 w-fit opacity-80" src={chaseLogo} alt="Chase" height="24" width="auto" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden">
                <img 
                  src={instructorImage} 
                  alt="John Rodrigues - Senior Product Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              </div>
            </div>
          
          {/* Profile Bar with Gradient */}
          <div className="mt-12 pt-8 border-t border-border/40 relative">
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <div className="flex items-center justify-start gap-6">
              {/* LinkedIn Icon in Circle */}
              <a 
                href="https://www.linkedin.com/in/john-rodrigues4/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 hover:bg-gray-300 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-gray-900 fill-current" />
              </a>
              
              {/* Connect on LinkedIn Text */}
              <span className="text-muted-foreground text-sm">Connect on LinkedIn</span>
            </div>
          </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
