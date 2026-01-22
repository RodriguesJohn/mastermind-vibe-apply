import cursorLogo from "@/assets/logos/cursor.png";
import claudeLogo from "@/assets/Claude.png";
import openaiLogo from "@/assets/openai-logo.png";
import supabaseLogo from "@/assets/Superbase.png";
import vercelLogo from "@/assets/Vercel.png";

export default function LogoCloud() {
  const logos: Array<{ src: string; alt: string }> = [
    { src: cursorLogo, alt: "Cursor" },
    { src: claudeLogo, alt: "Claude" },
    { src: openaiLogo, alt: "OpenAI" },
    { src: supabaseLogo, alt: "Supabase" },
    { src: vercelLogo, alt: "Vercel" },
  ];

  return (
    <section className="py-16 bg-black relative">
      {/* Black fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none z-10" />
      
      <style>{`
        .logo-cloud-img {
          height: auto !important;
          width: auto !important;
          max-width: none !important;
          object-fit: contain !important;
          flex-shrink: 0 !important;
        }
        @media (max-width: 640px) {
          .logo-cloud-img {
            height: 40px !important;
          }
        }
        @media (min-width: 640px) {
          .logo-cloud-img {
            height: 48px !important;
          }
        }
        @media (min-width: 768px) {
          .logo-cloud-img {
            height: 56px !important;
          }
        }
        @media (min-width: 1024px) {
          .logo-cloud-img {
            height: 64px !important;
          }
        }
      `}</style>
      
      <div className="px-4 md:px-10 lg:px-[120px] relative z-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center gap-8 md:gap-12">
            <h2 className="text-sm font-medium text-white/60 text-center">Learn Best AI Tools In The Industry</h2>
            
            <div className="relative w-full">
              <div className="flex gap-x-2 sm:gap-x-3 md:gap-x-6 lg:gap-x-8 gap-y-4 items-center justify-center flex-wrap px-2">
                {logos.map((item, index) => (
                  <img
                    key={`img-${index}`}
                    className="logo-cloud-img"
                    src={item.src}
                    alt={item.alt}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
