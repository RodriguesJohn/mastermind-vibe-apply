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
          <div className="mt-16 grid grid-cols-3 md:flex md:flex-wrap items-center justify-center gap-x-4 gap-y-6 md:gap-x-12 md:gap-y-8 sm:gap-x-16 sm:gap-y-12">
            <img className="h-12 md:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" src={metaLogo} alt="Meta Logo" height="64" width="auto" />
            <img className="h-8 md:h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" src={hubspotLogo} alt="HubSpot Logo" height="40" width="auto" />
            <img className="h-8 md:h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" src={intercomLogo} alt="Intercom Logo" height="40" width="auto" />
            <img className="h-8 md:h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" src={chaseLogo} alt="Chase Logo" height="40" width="auto" />
            <img className="h-8 md:h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" src={kingfisherLogo} alt="Kingfisher Logo" height="40" width="auto" />
            <img className="h-8 md:h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" src={amazonLogo} alt="Amazon Logo" height="40" width="auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
