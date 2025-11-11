import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SphereImageGrid, { ImageData } from "./SphereImageGrid";
import slide1 from "@/assets/Slide1.png";
import slide2 from "@/assets/Slide2.png";
import slide3 from "@/assets/Slide3.png";
import workshop1 from "@/assets/workshop-1.jpg";
import workshop2 from "@/assets/workshop-2.jpg";
import workshop3 from "@/assets/workshop-3.jpg";
import LindaImage from "@/assets/Linda.jpeg";
import SnehImage from "@/assets/Sneh.webp";
import SonaliImage from "@/assets/Sonali.jpeg";
import KennyImage from "@/assets/Kenny.jpeg";
import AviadImage from "@/assets/Avaid.jpeg";
import IniImage from "@/assets/Indi.jpeg";
import SethImage from "@/assets/Seth.png";
import JohnImage from "@/assets/John.png";

// Create images array for the sphere
const baseImages: ImageData[] = [
  { id: 'slide1', src: slide1, alt: 'Workshop Slide 1', title: 'Workshop Session', description: 'Interactive workshop session' },
  { id: 'slide2', src: slide2, alt: 'Workshop Slide 2', title: 'Design Workshop', description: 'Hands-on design activities' },
  { id: 'slide3', src: slide3, alt: 'Workshop Slide 3', title: 'Learning Session', description: 'Collaborative learning' },
  { id: 'workshop1', src: workshop1, alt: 'Workshop Photo 1', title: 'Workshop Gallery', description: 'Participants working together' },
  { id: 'workshop2', src: workshop2, alt: 'Workshop Photo 2', title: 'Workshop Gallery', description: 'Design activities in progress' },
  { id: 'workshop3', src: workshop3, alt: 'Workshop Photo 3', title: 'Workshop Gallery', description: 'Team collaboration' },
  { id: 'linda', src: LindaImage, alt: 'Linda', title: 'Linda', description: 'Principal Product Designer, JPMorgan Chase' },
  { id: 'sneh', src: SnehImage, alt: 'Sneh', title: 'Sneh', description: 'UX Designer' },
  { id: 'sonali', src: SonaliImage, alt: 'Sonali', title: 'Sonali', description: 'Sr. Product Designer, JPMorgan Chase' },
  { id: 'kenny', src: KennyImage, alt: 'Kenneth Hargrove', title: 'Kenneth Hargrove', description: 'Product Designer @CoStar' },
  { id: 'aviad', src: AviadImage, alt: 'Aviad', title: 'Aviad', description: 'Product Designer' },
  { id: 'ini', src: IniImage, alt: 'ÌníOlúwa', title: 'ÌníOlúwa', description: 'Senior Product Designer, Intercom' },
  { id: 'seth', src: SethImage, alt: 'Seth', title: 'Seth', description: 'Guest Speaker' },
  { id: 'john', src: JohnImage, alt: 'John Rodrigues', title: 'John Rodrigues', description: 'Sr. Product Designer, Founder' },
];

const headerImages: ImageData[] = [
  ...baseImages,
  ...baseImages.map((img, idx) => ({ ...img, id: `${img.id}-dup1-${idx}` })),
  ...baseImages.map((img, idx) => ({ ...img, id: `${img.id}-dup2-${idx}` })),
  ...baseImages.map((img, idx) => ({ ...img, id: `${img.id}-dup3-${idx}` })),
  ...baseImages.slice(0, 12).map((img, idx) => ({ ...img, id: `${img.id}-dup4-${idx}` })),
  ...baseImages.slice(0, 8).map((img, idx) => ({ ...img, id: `${img.id}-dup5-${idx}` }))
];

export const AIHeaderSection = () => {
  const stars = Array.from({ length: 5 });

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-black text-white border-b border-white/10 w-full z-0">
      {/* Subtle glow/shader effect with motion */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.25)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" 
        style={{ animation: "glowMove 8s ease-in-out infinite" }}
        aria-hidden="true" 
      />
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.2)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" 
        style={{ animation: "glowPulse 6s ease-in-out infinite" }}
        aria-hidden="true" 
      />
      
      <div className="px-4 md:px-10 lg:px-[120px] relative z-10 w-full">
        <div className="max-w-[1200px] mx-auto">
          {/* Local keyframes for subtle star wave */}
          <style>
            {`
              @keyframes starWave { 
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-2px); }
              }
              @keyframes iconPulse { 
                0%, 100% { transform: scale(1); opacity: 0.6; }
                50% { transform: scale(1.1); opacity: 0.8; }
              }
              @keyframes blurEntrance {
                0% {
                  opacity: 0;
                  filter: blur(10px);
                  transform: translateY(10px);
                }
                100% {
                  opacity: 1;
                  filter: blur(0);
                  transform: translateY(0);
                }
              }
              @keyframes glowMove {
                0%, 100% {
                  transform: translate(0, 0) scale(1);
                  opacity: 0.25;
                }
                50% {
                  transform: translate(20px, -30px) scale(1.1);
                  opacity: 0.35;
                }
              }
              @keyframes glowPulse {
                0%, 100% {
                  transform: scale(1);
                  opacity: 0.2;
                }
                50% {
                  transform: scale(1.15);
                  opacity: 0.3;
                }
              }
            `}
          </style>

          {/* Centered Content */}
          <div className="text-center mb-6 md:mb-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-xs font-medium tracking-wider uppercase flex items-center gap-1">
                {stars.map((_, i) => (
                  <span
                    key={i}
                    className="text-yellow-400 inline-block"
                    style={{ animation: "starWave 1.6s ease-in-out infinite", animationDelay: `${i * 0.12}s` }}
                  >
                    ★
                  </span>
                ))}
                <span className="text-white/60 ml-1">on Maven</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 tracking-tight leading-tight text-center">
              AI Mastery For Designers
              <span className="block">and Product Leaders Cohort</span>
            </h1>

            <p className="text-lg md:text-medium text-white/60 font-light mb-8 leading-relaxed max-w-3xl mx-auto">
              Stay ahead and upskill today. Learn how to design AI apps and systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="cta" 
                size="lg"
                className="group"
                asChild
              >
                <a 
                  href="https://maven.com/productlearnio/aiproductdesignmasterycohort"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enroll in the cohort
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <a 
                  href="https://cal.com/aidesignacademy/15min?overlayCalendar=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book an info call
                </a>
              </Button>
            </div>
          </div>

          {/* SphereImageGrid at bottom, top half visible */}
          <div className="relative w-full flex justify-center overflow-hidden h-[300px] md:h-[400px]">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2" style={{ transform: 'translateX(-50%) translateY(55%)' }}>
              <div className="absolute -inset-8 bg-[radial-gradient(circle,_rgba(46,114,255,0.18)_0%,_rgba(0,0,0,0)_70%)] blur-3xl" aria-hidden="true" />
              <div className="relative z-10">
                <div className="hidden md:block">
                  <SphereImageGrid
                    images={headerImages}
                    containerSize={800}
                    sphereRadius={320}
                    autoRotate={true}
                    autoRotateSpeed={0.2}
                    dragSensitivity={0.8}
                    baseImageScale={0.12}
                  />
                </div>
                <div className="block md:hidden">
                  <SphereImageGrid
                    images={headerImages}
                    containerSize={400}
                    sphereRadius={160}
                    autoRotate={true}
                    autoRotateSpeed={0.2}
                    dragSensitivity={0.8}
                    baseImageScale={0.1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
