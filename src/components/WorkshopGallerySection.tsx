import slide1 from "@/assets/Slide1.png";
import slide2 from "@/assets/Slide2.png";
import slide3 from "@/assets/Slide3.png";
import { BlurFade } from "@/components/BlurFade";

const images = [slide1, slide2, slide3, slide1, slide2];

export const WorkshopGallerySection = () => {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <BlurFade delay={0.2} duration={0.8} yOffset={20} blur="8px">
        <div className="relative">
          {/* Left fade with blur */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none backdrop-blur-sm" />
          
          {/* Right fade with blur */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none backdrop-blur-sm" />
          
          <div className="flex gap-6 animate-scroll-left hover:[animation-play-state:paused]">
            {images.concat(images).map((image, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[600px] h-[400px] rounded-xl overflow-hidden grayscale"
              >
                    <img 
                      src={image} 
                      alt={`Slide ${(index % 3) + 1}`}
                      className="w-full h-full object-cover"
                    />
              </div>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
};
