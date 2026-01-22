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
      
      <div className="px-4 md:px-10 lg:px-[120px] relative z-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center gap-8 md:gap-12">
            <h2 className="text-sm font-medium text-white/60 text-center">Learn Best AI Tools In The Industry</h2>
            
            <div className="relative w-full flex justify-center">
              <div className="flex gap-x-3 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-4 items-center flex-wrap justify-center w-full max-w-full px-2">
                {logos.map((item, index) => (
                  <img
                    key={`img-${index}`}
                    className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto max-w-[80px] sm:max-w-[100px] md:max-w-none flex-shrink-0 object-contain"
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
