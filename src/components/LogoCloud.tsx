import lovableLogo from "@/assets/logos/lovable.png";
import cursorLogo from "@/assets/logos/cursor.png";

export default function LogoCloud() {
  const logos: Array<{ src?: string; alt?: string; className?: string; label?: string }> = [
    { src: cursorLogo, alt: "Cursor", className: "h-6 w-fit brightness-0 invert" },
    { src: lovableLogo, alt: "Lovable", className: "h-6 w-fit brightness-0 invert" },
    { src: "https://cdn.simpleicons.org/figma/FFFFFF", alt: "Figma", className: "h-6 w-fit brightness-0 invert" },
    // Use GitHub org avatar for Voiceflow and keep native colors
    { src: "https://github.com/voiceflow.png", alt: "Voiceflow", className: "h-6 w-fit opacity-60 hover:opacity-90" },
    { src: "https://cdn.simpleicons.org/n8n/FFFFFF", alt: "n8n", className: "h-6 w-fit brightness-0 invert" },
    { src: "https://cdn.simpleicons.org/elevenlabs/FFFFFF", alt: "ElevenLabs", className: "h-6 w-fit brightness-0 invert" },
    // Text fallbacks where official icons may not be available
    { label: "NotebookLM" },
    { label: "V0" },
    { label: "Vapi" },
    { label: "Gamma AI" },
  ];

  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="px-4 md:px-10 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
            <h2 className="text-sm font-medium text-white/60 min-w-fit">Learn Best AI Tools<br />In The Industry</h2>
            <div className="h-px w-px bg-white/20 hidden md:block flex-shrink-0" />
            
            <div className="relative flex-1 overflow-hidden">
              <div className="flex gap-x-8 gap-y-4 animate-scroll-left hover:[animation-play-state:paused] items-center">
                {logos.concat(logos).map((item, index) => (
                  item.src ? (
                    <img
                      key={`img-${index}`}
                      className={`${item.className ?? "h-6"} flex-shrink-0 opacity-40 hover:opacity-90 transition-opacity`}
                      src={item.src}
                      alt={item.alt ?? "Logo"}
                    />
                  ) : (
                    <span
                      key={`label-${index}`}
                      className="text-white/60 hover:text-white/90 transition-colors text-sm md:text-base font-medium whitespace-nowrap"
                    >
                      {item.label}
                    </span>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
