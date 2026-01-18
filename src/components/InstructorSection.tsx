import { Award } from "lucide-react";
import JohnImage2 from "@/assets/John-4.jpg";
import JPMorganLogo from "@/assets/Chase.png";
import IntercomLogo from "@/assets/intercom-1-logo-png-transparent.png";
import HubspotLogo from "@/assets/Hubspot.svg.png";
import MetaLogo from "@/assets/meta.png";
import GoogleLogo from "@/assets/Google.svg.png";
import AppleLogo from "@/assets/Apple.png";
import AGILogo from "@/assets/AGI.png";
const OpenAILogo = "/openai-logo.png";
import LoveableLogoMain from "@/assets/Loveable.png";

export const InstructorSection = () => {
  return (
    <section className="relative border-b border-white/5 bg-[#0E0E10] py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Colorful shader effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(147,51,234,0.15)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" style={{
        animation: "glowMove 8s ease-in-out infinite"
      }} aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(34,197,94,0.1)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" style={{
        animation: "glowPulse 6s ease-in-out infinite"
      }} aria-hidden="true" />
      <div className="relative z-10 max-w-5xl sm:px-6 lg:px-10 mx-auto px-[24px]">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-[300px_1fr] md:items-start">
            {/* Instructor Image */}
            <div>
              <div className="relative w-full mx-auto max-w-[400px] sm:max-w-[300px] aspect-square rounded-xl border border-white/5 overflow-hidden bg-white/5">
                <img src={JohnImage2} alt="John Rodrigues" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">John Rodrigues</h3>
                <p className="text-lg text-white/60 font-medium leading-relaxed">
                  Senior Product Designer focused on AI Native Products
                </p>
              </div>
              
              <div className="space-y-4 text-white/60 text-base leading-relaxed">
                <p>
                  Author of <span className="text-white">The AI Design Playbook</span>, trusted by 1,500+ industry leaders. Founder of AI Design Academy.
                </p>
                <p>
                  With over a decade of experience, John holds a Master's in Interaction Design and an AI certification from Stanford. He's recognized as one of the Top 10 mentors on ADPList and has built a community of over 10,000 followers on LinkedIn.
                </p>
              </div>
              
              {/* Trusted By Section */}
              <div className="pt-6 border-t border-white/5">
                <p className="text-sm font-medium text-white/40 mb-4 uppercase tracking-wider">PLAYBOOK TRUSTED BY DESIGNERS AT</p>
                
                {/* Mobile: Scrolling ticker */}
                <div className="sm:hidden overflow-hidden relative">
                  <style>{`
                    @keyframes scroll-logos {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-50%); }
                    }
                    .logo-ticker {
                      animation: scroll-logos 10s linear infinite;
                    }
                    .logo-ticker:hover {
                      animation-play-state: paused;
                    }
                  `}</style>
                  <div className="logo-ticker flex items-center gap-8">
                    {/* First set of logos */}
                    <img src={AppleLogo} alt="Apple" className="h-6 w-auto object-contain opacity-70 flex-shrink-0" />
                    <img src={GoogleLogo} alt="Google" className="h-6 w-auto object-contain opacity-70 flex-shrink-0" />
                    <img src={MetaLogo} alt="Meta" className="h-6 w-auto object-contain opacity-70 flex-shrink-0" />
                    <img src={JPMorganLogo} alt="JPMorgan Chase" className="h-6 w-auto object-contain opacity-70 flex-shrink-0" />
                    <img src={IntercomLogo} alt="Intercom" className="h-6 w-auto object-contain opacity-70 flex-shrink-0" />
                    <img src={HubspotLogo} alt="HubSpot" className="h-6 w-auto object-contain opacity-70 flex-shrink-0" />
                    {/* Duplicate set for seamless loop */}
                    <img src={AppleLogo} alt="Apple" className="h-6 w-auto object-contain opacity-70 flex-shrink-0" />
                    <img src={GoogleLogo} alt="Google" className="h-6 w-auto object-contain opacity-70 flex-shrink-0" />
                    <img src={MetaLogo} alt="Meta" className="h-6 w-auto object-contain opacity-70 flex-shrink-0" />
                    <img src={JPMorganLogo} alt="JPMorgan Chase" className="h-6 w-auto object-contain opacity-70 flex-shrink-0" />
                    <img src={IntercomLogo} alt="Intercom" className="h-6 w-auto object-contain opacity-70 flex-shrink-0" />
                    <img src={HubspotLogo} alt="HubSpot" className="h-6 w-auto object-contain opacity-70 flex-shrink-0" />
                  </div>
                </div>
                
                {/* Desktop: Static layout */}
                <div className="hidden sm:flex items-center justify-start gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img src={AppleLogo} alt="Apple" className="h-6 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                  <img src={GoogleLogo} alt="Google" className="h-6 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                  <img src={MetaLogo} alt="Meta" className="h-5 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                  <img src={JPMorganLogo} alt="JPMorgan Chase" className="h-5 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                  <img src={IntercomLogo} alt="Intercom" className="h-6 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                  <img src={HubspotLogo} alt="HubSpot" className="h-6 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recent Accomplishment Section - Moved to bottom */}
        <div className="mt-12 sm:mt-16 md:mt-20 bg-white/5 rounded-lg p-6 md:p-8 border border-white/5">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h4 className="text-xl font-medium text-white mb-4 flex items-center gap-2 tracking-tight">
                <Award className="h-5 w-5 text-white/80" />
                Recent Accomplishment
              </h4>
              <p className="text-base text-white/60 mb-6 leading-relaxed">Hackathon Winner Built UX Agent, a AI app that analyzes websites and gives feedback & UX audits, with AI agents fixes the websites to constantly self improve websites.<span className="text-white font-medium">Hackathon Winner</span> Built <span className="text-white">UX Agent</span>, a web platform that analyzes websites and gives feedback, in just two days with Vibe coding.
              </p>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <span>Hosted by</span>
                <div className="flex items-center gap-4 ml-2">
                  <img src={AGILogo} alt="AGI" className="h-4 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
                  <img src={OpenAILogo} alt="OpenAI" className="h-5 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
                  <img src={LoveableLogoMain} alt="Loveable" className="h-5 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
