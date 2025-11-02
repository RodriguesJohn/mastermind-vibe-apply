import { BlurFade } from "./BlurFade";
import lovableLogo from "@/assets/logos/lovable.png";
import cursorLogo from "@/assets/logos/cursor.png";

export default function LogoCloud() {
  const logos = [
    { src: cursorLogo, alt: "Cursor Logo", className: "h-6 w-fit brightness-0 invert" },
    { src: "https://cdn.simpleicons.org/figma/F24E1E", alt: "Figma Logo", className: "h-6 w-fit brightness-0 invert" },
    { src: "https://cdn.simpleicons.org/figma/F24E1E", alt: "Figma Make Logo", className: "h-6 w-fit brightness-0 invert" },
    { src: "https://cdn.simpleicons.org/swiftui/FA7343", alt: "SwiftUI Logo", className: "h-6 w-fit brightness-0 invert" },
    { src: "https://html.tailus.io/blocks/customers/openai.svg", alt: "OpenAI Logo", className: "h-6 w-fit brightness-0 invert" },
    { src: lovableLogo, alt: "Lovable Logo", className: "h-6 w-fit brightness-0 invert" },
    { src: "https://cdn.simpleicons.org/react/F61DAF", alt: "React Native Logo", className: "h-6 w-fit brightness-0 invert" },
    { src: "https://html.tailus.io/blocks/customers/tailwindcss.svg", alt: "Tailwind Logo", className: "h-4 w-fit brightness-0 invert" },
    { src: "https://cdn.simpleicons.org/supabase/3ECF8E", alt: "Supabase Logo", className: "h-6 w-fit brightness-0 invert" },
    { src: "https://cdn.simpleicons.org/nextdotjs/000000", alt: "Next.js Logo", className: "h-6 w-fit brightness-0 invert" },
    { src: "https://html.tailus.io/blocks/customers/vercel.svg", alt: "Vercel Logo", className: "h-4 w-fit brightness-0 invert" },
  ];

  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
          <h2 className="text-lg font-medium text-white min-w-fit">Learn Best AI Tools<br />In The Industry</h2>
          <div className="h-px w-px bg-white/20 hidden md:block flex-shrink-0" />
          
          <div className="relative flex-1 overflow-hidden">
            <div className="flex gap-x-8 gap-y-4 animate-scroll-left hover:[animation-play-state:paused]">
              {logos.concat(logos).map((logo, index) => (
                <img 
                  key={index}
                  className={`${logo.className} flex-shrink-0`}
                  src={logo.src}
                  alt={logo.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
