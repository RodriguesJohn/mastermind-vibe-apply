import workshop1 from "@/assets/workshop-1.jpg";
import workshop2 from "@/assets/workshop-2.jpg";
import workshop3 from "@/assets/workshop-3.jpg";
import { BlurFade } from "@/components/BlurFade";

const images = [workshop1, workshop2, workshop3, workshop1, workshop2];

export const WorkshopGallerySection = () => {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <BlurFade delay={0.2} duration={0.8} yOffset={20} blur="8px">
        <div className="relative">
          <div className="flex gap-6 animate-scroll-left hover:[animation-play-state:paused]">
            {images.concat(images).map((image, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[600px] h-[400px] rounded-xl overflow-hidden grayscale"
              >
                <img 
                  src={image} 
                  alt={`Workshop session ${(index % images.length) + 1}`}
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
