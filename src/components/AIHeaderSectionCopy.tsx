import { StardustButton } from "@/components/ui/stardust-button";
import SphereImageGrid, { ImageData } from "./SphereImageGrid";
import headerCircleImages from "@/assets/HeaderCircle";

// Convert the imported images to ImageData array
const headerCircleImageData: ImageData[] = headerCircleImages.map((src, index) => {
  const filename = src.split('/').pop() || `image-${index}`;
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, '');
  return {
    id: `header-circle-${index}`,
    src: src,
    alt: nameWithoutExt,
    title: nameWithoutExt,
    description: 'Community member'
  };
});

// Create baseImages from HeaderCircle images
const baseImages: ImageData[] = headerCircleImageData;

const headerImages: ImageData[] = [
  ...baseImages,
  ...baseImages.map((img, idx) => ({ ...img, id: `${img.id}-dup1-${idx}` })),
  ...baseImages.map((img, idx) => ({ ...img, id: `${img.id}-dup2-${idx}` })),
  ...baseImages.map((img, idx) => ({ ...img, id: `${img.id}-dup3-${idx}` })),
  ...baseImages.slice(0, 12).map((img, idx) => ({ ...img, id: `${img.id}-dup4-${idx}` })),
  ...baseImages.slice(0, 8).map((img, idx) => ({ ...img, id: `${img.id}-dup5-${idx}` }))
];

export const AIHeaderSectionCopy = () => {
  return (
    <>
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
              .ai-header-h1 {
                line-height: 1.2 !important;
                letter-spacing: -0.01em;
              }
              @media (min-width: 640px) {
                .ai-header-h1 {
                  line-height: 1.2 !important;
                }
              }
              @media (min-width: 768px) {
                .ai-header-h1 {
                  line-height: 1.15 !important;
                }
              }
              @media (min-width: 1024px) {
                .ai-header-h1 {
                  line-height: 1.1 !important;
                }
              }
            `}
          </style>

          {/* Centered Content */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-8 md:mb-10">
              <span className="text-xs font-medium tracking-wider uppercase flex items-center gap-1">
                {/* 4 full stars */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <span
                    key={i}
                    className="text-yellow-400 inline-block"
                    style={{ animation: "starWave 1.6s ease-in-out infinite", animationDelay: `${i * 0.12}s` }}
                  >
                    ★
                  </span>
                ))}
                {/* Half-filled star (4.7 = 4 full + 0.7 of the 5th star) */}
                <span
                  className="inline-block relative"
                  style={{ animation: "starWave 1.6s ease-in-out infinite", animationDelay: `${4 * 0.12}s` }}
                >
                  <span className="text-yellow-400/30">★</span>
                  <span
                    className="absolute left-0 top-0 text-yellow-400"
                    style={{
                      width: '70%',
                      overflow: 'hidden',
                      display: 'inline-block'
                    }}
                  >
                    ★
                  </span>
                </span>
              </span>
              <span className="text-xs font-medium tracking-wider uppercase whitespace-nowrap">
                <span className="text-white/60">Based on</span>
                <span className="text-white ml-1 font-semibold">4.7/5</span>
                <span className="text-white/60 ml-1">rated cohort on Maven</span>
              </span>
            </div>

            <h1 className="ai-header-h1 text-3xl md:text-4xl lg:text-5xl font-medium mb-5 md:mb-6 tracking-normal text-center leading-tight">
              <span className="block">Master AI Tools, Workflows, Techniques</span>
              <span className="block mt-2 md:mt-3">& Become an AI Native Designer</span>
            </h1>

            <p className="text-base md:text-lg text-white/60 font-light mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
              Go from overwhelmed to confident. Learn through structured courses, frameworks and resources with a curated community.
            </p>

            <div className="flex flex-col gap-3 justify-center items-center">
              <StardustButton href="#pricing">
                Get Started Today
              </StardustButton>
              <a
                href="/newsletter"
                className="text-white/60 text-sm hover:text-white transition-colors duration-200 underline underline-offset-4"
              >
                Get daily AI briefings →
              </a>
            </div>
          </div>

          {/* SphereImageGrid at bottom, top half visible */}
          <div className="relative w-full flex justify-center overflow-hidden h-[250px] md:h-[400px]">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 md:translate-y-[55%] translate-y-[45%]">
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
                    containerSize={500}
                    sphereRadius={200}
                    autoRotate={true}
                    autoRotateSpeed={0.2}
                    dragSensitivity={0.8}
                    baseImageScale={0.11}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
};
