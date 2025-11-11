import { ParticleSphere } from "./ParticleSphere";

export const WorkshopGallerySection = () => {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden relative">
      <div className="px-4 md:px-10 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 
            className="font-normal text-center mb-12 md:mb-16 tracking-tight text-2xl sm:text-3xl md:text-4xl"
            style={{ lineHeight: '1.25' }}
          >
            Join the community and level up your AI skills today.
          </h2>
        </div>
      </div>
      
      {/* ParticleSphere at footer, top half visible, bottom half cut */}
      <div className="relative w-full flex justify-center overflow-hidden h-[300px] md:h-[400px]">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2" style={{ transform: 'translateX(-50%) translateY(0%)' }}>
          <div className="absolute -inset-8 bg-[radial-gradient(circle,_rgba(46,114,255,0.18)_0%,_rgba(0,0,0,0)_70%)] blur-3xl" aria-hidden="true" />
          <div className="relative z-10 w-full max-w-[600px] md:max-w-[1200px] h-full max-h-[600px] md:max-h-[1200px]" style={{ aspectRatio: '1/1' }}>
            <ParticleSphere size="lg" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
