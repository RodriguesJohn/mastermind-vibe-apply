import { ParticleSphere } from "./ParticleSphere";

export const WorkshopGallerySection = () => {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden relative">
      <div className="px-4 md:px-10 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 
            className="font-normal text-center mb-16 tracking-tight"
            style={{ fontSize: '32px', lineHeight: '1.25' }}
          >
            Join the community and level up your AI skills today.
          </h2>
        </div>
      </div>
      
      {/* ParticleSphere at footer, top half visible, bottom half cut */}
      <div className="relative w-full flex justify-center overflow-hidden" style={{ height: '400px' }}>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2" style={{ transform: 'translateX(-50%) translateY(0%)' }}>
          <div className="absolute -inset-8 bg-[radial-gradient(circle,_rgba(46,114,255,0.18)_0%,_rgba(0,0,0,0)_70%)] blur-3xl" aria-hidden="true" />
          <div className="relative z-10" style={{ width: '1200px', height: '1200px', maxWidth: '100%' }}>
            <ParticleSphere size="lg" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
