import { BlurFade } from "./BlurFade";

export default function LogoCloud() {
  const logos = [
    { src: "https://html.tailus.io/blocks/customers/nvidia.svg", alt: "Nvidia Logo", className: "h-5 w-fit" },
    { src: "https://html.tailus.io/blocks/customers/column.svg", alt: "Column Logo", className: "h-4 w-fit" },
    { src: "https://html.tailus.io/blocks/customers/github.svg", alt: "GitHub Logo", className: "h-4 w-fit" },
    { src: "https://html.tailus.io/blocks/customers/nike.svg", alt: "Nike Logo", className: "h-5 w-fit" },
    { src: "https://html.tailus.io/blocks/customers/laravel.svg", alt: "Laravel Logo", className: "h-4 w-fit" },
    { src: "https://html.tailus.io/blocks/customers/lilly.svg", alt: "Lilly Logo", className: "h-7 w-fit" },
    { src: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg", alt: "Lemon Squeezy Logo", className: "h-5 w-fit" },
    { src: "https://html.tailus.io/blocks/customers/openai.svg", alt: "OpenAI Logo", className: "h-6 w-fit" },
    { src: "https://html.tailus.io/blocks/customers/tailwindcss.svg", alt: "Tailwind CSS Logo", className: "h-4 w-fit" },
    { src: "https://html.tailus.io/blocks/customers/vercel.svg", alt: "Vercel Logo", className: "h-5 w-fit" },
    { src: "https://html.tailus.io/blocks/customers/zapier.svg", alt: "Zapier Logo", className: "h-5 w-fit" },
  ];

  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
          <h2 className="text-lg font-medium text-white min-w-fit">Learn Best AI tools<br />in the industry</h2>
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
