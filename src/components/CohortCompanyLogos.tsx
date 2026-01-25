import hubspotLogo from "@/assets/Hubspot.svg.png";
import intercomLogo from "@/assets/intercom-1-logo-png-transparent.png";
import chaseLogo from "@/assets/Chase.png";
import kingfisherLogo from "@/assets/Kingfisher_logo.png";
import metaLogo from "@/assets/meta.png";
import amazonLogo from "@/assets/Amazon.png";

export default function CohortCompanyLogos() {
  return (
    <section className="py-16 bg-black text-white border-b border-white/10">
      <div className="px-4 md:px-10 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center text-sm font-medium text-white/30">
            Our Mentors, designers and community members come from
          </h2>
          <div className="mt-16 overflow-hidden relative">
            <style>{`
              @keyframes scroll-logos-horizontal {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-100% - 2rem)); }
              }
              .logo-carousel-mobile {
                display: flex;
                gap: 2rem;
                animation: scroll-logos-horizontal 20s linear infinite;
                width: fit-content;
              }
              .logo-carousel-mobile:hover {
                animation-play-state: paused;
              }
              @media (min-width: 768px) {
                .logo-carousel-mobile {
                  animation: none;
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: center;
                  gap: 3rem 4rem;
                }
              }
            `}</style>
            <div className="logo-carousel-mobile">
              {/* First set of logos */}
              <img className="h-12 md:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity flex-shrink-0" src={metaLogo} alt="Meta Logo" height="64" width="auto" />
              <img className="h-8 md:h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity flex-shrink-0" src={hubspotLogo} alt="HubSpot Logo" height="40" width="auto" />
              <img className="h-8 md:h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity flex-shrink-0" src={intercomLogo} alt="Intercom Logo" height="40" width="auto" />
              <img className="h-8 md:h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity flex-shrink-0" src={chaseLogo} alt="Chase Logo" height="40" width="auto" />
              <img className="h-8 md:h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity flex-shrink-0" src={kingfisherLogo} alt="Kingfisher Logo" height="40" width="auto" />
              <img className="h-8 md:h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity flex-shrink-0" src={amazonLogo} alt="Amazon Logo" height="40" width="auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
