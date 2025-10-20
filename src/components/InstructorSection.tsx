import { Card } from "@/components/ui/card";
import { UserCheck } from "lucide-react";
import instructorImage from "@/assets/John.png";

export const InstructorSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="px-4 md:px-10 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 tracking-tight">
            Know Your Instructor
          </h2>
          
          <Card className="p-8 md:p-12 bg-card/50 border-border/40">
          <div className="flex items-start gap-2 mb-8">
            <UserCheck className="w-6 h-6 text-muted-foreground" />
            <div className="flex-1 flex gap-2 justify-end">
              <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                John Rodrigues
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sr.Product Designer at JPMorgan | Founder of AI Design Academy.John Rodrigues is a Senior Product Designer, AI strategist, and author of The AI Design Playbook, a resource trusted by over 1,500 industry leaders. He is the founder of AI Design Academy
                </p>

                <p>
                  John currently leads AI design initiatives at JPMorgan Chase and has previously worked with Citi Bank. With over a decade of experience in product design, he holds a Master's degree in Interaction Design, a Bachelor's in Engineering, and an AI certification from Stanford University.
                </p>

                <p>
                  Recognized as one of the Top 10 mentors on ADPList, John has built a loyal community of over 10,000 followers on LinkedIn and authored book on design career. His work bridges design, technology, and AI helping the next generation of designers stay ahead in a rapidly evolving industry.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden">
                <img 
                  src={instructorImage} 
                  alt="John Rodrigues - Senior Product Designer"
                  className="w-full h-full object-cover"
                />
                {/* Edge blur and fade overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
                <div className="absolute inset-0 backdrop-blur-[0.5px]" />
              </div>
            </div>
          </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
