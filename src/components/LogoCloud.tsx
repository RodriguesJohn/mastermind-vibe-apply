import cursorLogo from "@/assets/Tools/cursor.png";
import claudeLogo from "@/assets/Tools/Claude.png";
import supabaseLogo from "@/assets/Tools/Superbase.png";
import vercelLogo from "@/assets/Tools/Vercel.png";

const defaultLogos: Array<{ src: string; alt: string }> = [
  { src: cursorLogo, alt: "Cursor" },
  { src: supabaseLogo, alt: "Supabase" },
  { src: claudeLogo, alt: "Claude" },
  { src: vercelLogo, alt: "Vercel" },
];

interface LogoCloudProps {
  logos?: Array<{ src: string; alt: string }>;
  title?: string;
}

export default function LogoCloud({ logos = defaultLogos, title = "Learn Best AI Tools In The Industry" }: LogoCloudProps) {

  return (
    <section className="py-16 bg-black relative overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .logo-marquee {
          animation: marquee 60s linear infinite;
        }
        .logo-marquee:hover {
          animation-play-state: paused;
        }
        .logo-cloud-img {
          height: 40px;
          width: auto;
          object-fit: contain;
          flex-shrink: 0;
          opacity: 0.9;
          transition: opacity 0.3s ease;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }
        .logo-cloud-img:hover {
          opacity: 1;
        }
        @media (min-width: 640px) {
          .logo-cloud-img {
            height: 48px;
          }
        }
        @media (min-width: 768px) {
          .logo-cloud-img {
            height: 56px;
          }
        }
        @media (min-width: 1024px) {
          .logo-cloud-img {
            height: 64px;
          }
        }
      `}</style>

      <div className="relative z-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-[120px] mb-8 md:mb-12">
          <h2 className="text-sm font-medium text-white/60 text-center">{title}</h2>
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-black to-transparent z-30 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-black to-transparent z-30 pointer-events-none" />

        {/* Scrolling container */}
        <div className="relative w-full overflow-hidden px-4 md:px-10 lg:px-[120px]">
          <div className="max-w-[1200px] mx-auto overflow-hidden">
            <div className="logo-marquee flex items-center gap-8 md:gap-12 lg:gap-16 w-max">
            {/* First set of logos */}
            {logos.map((item, index) => (
              <img
                key={`img-1-${index}`}
                className="logo-cloud-img"
                src={item.src}
                alt={item.alt}
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((item, index) => (
              <img
                key={`img-2-${index}`}
                className="logo-cloud-img"
                src={item.src}
                alt={item.alt}
              />
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
