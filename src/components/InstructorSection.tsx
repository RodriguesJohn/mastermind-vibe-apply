import { Card } from "@/components/ui/card";
import instructorImage from "@/assets/John.png";
import { BlurFade } from "@/components/BlurFade";

export const InstructorSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="px-4 md:px-10 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <BlurFade delay={0.2} duration={0.8} yOffset={20} blur="8px">
            <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 tracking-tight">
              Know Your Instructor
            </h2>
          </BlurFade>
          
          <BlurFade delay={0.4} duration={0.8} yOffset={15} blur="6px">
            <Card className="p-8 md:p-12 bg-card/50 border-border/40">
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
              </div>
              </div>
            </div>
            </Card>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};
