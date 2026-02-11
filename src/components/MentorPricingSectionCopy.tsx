import { StardustButton } from "@/components/ui/stardust-button";
import JohnImage2 from "@/assets/John-4.jpg";
import JPMorganLogo from "@/assets/Chase.png";
import IntercomLogo from "@/assets/intercom-1-logo-png-transparent.png";
import HubspotLogo from "@/assets/Hubspot.svg.png";
import MetaLogo from "@/assets/meta.png";
import GoogleLogo from "@/assets/Google.svg.png";
import AppleLogo from "@/assets/Apple.png";

export const MentorPricingSectionCopy = () => {
  return (
    <section id="pricing" className="relative py-16 md:py-24 bg-black text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(147,51,234,0.15)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(46,114,255,0.1)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" />

      <div className="px-4 md:px-10 lg:px-[120px] relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Column 1 - Mentor Message */}
            <div className="space-y-6">
              {/* Mentor Card */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/20">
                  <img src={JohnImage2} alt="John Rodrigues" className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">John Rodrigues</h3>
                  <p className="text-white/60 text-sm">Sr. Product Designer, AI-native products</p>
                </div>
              </div>

              {/* Personalized Message */}
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  I've seen too many talented designers feeling overwhelmed by AI, unsure where to start, which tools actually matter, or how to integrate them without losing their creative edge.
                </p>
                <p>
                  That's why I created this mastery hub and community. As the creator of AI Design Academy, I've helped 300+ designers navigate this shift.
                </p>
              </div>

              {/* Trusted By Section */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs font-medium text-white/40 mb-3 uppercase tracking-wider">Playbook trusted by designers at</p>
                <div className="flex items-center flex-wrap gap-6 opacity-60">
                  <img src={AppleLogo} alt="Apple" className="h-5 w-auto object-contain" />
                  <img src={GoogleLogo} alt="Google" className="h-5 w-auto object-contain" />
                  <img src={MetaLogo} alt="Meta" className="h-4 w-auto object-contain" />
                  <img src={JPMorganLogo} alt="JPMorgan Chase" className="h-4 w-auto object-contain" />
                  <img src={IntercomLogo} alt="Intercom" className="h-5 w-auto object-contain" />
                  <img src={HubspotLogo} alt="HubSpot" className="h-5 w-auto object-contain" />
                </div>
              </div>

              {/* Ready to get started */}
              <p className="text-white font-medium pt-2">
                Ready to get started? Let's do this together.
              </p>

              {/* Signature */}
              <p className="text-white/50 italic">- John Rodrigues</p>
            </div>

            {/* Column 2 - Pricing Card */}
            <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-10">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-50" />

              <div className="relative z-10">
                {/* Badge */}
                <div className="flex justify-center mb-6">
                  <span className="px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium">
                    Full Access
                  </span>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl md:text-6xl font-bold text-white">$149</span>
                    <span className="text-white/60 text-lg">/month</span>
                  </div>
                </div>

                {/* Benefits */}
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">Access to all structured AI courses & frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">Private community of AI-native designers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">AI tools, templates & resources library</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">Case studies and project demos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">Async Q&A to unblock your next steps building with AI</span>
                  </li>
                </ul>

                {/* CTA */}
                <div className="flex justify-center">
                  <StardustButton href="https://www.skool.com/ai-design-academy-6114">
                    Get Access Now
                  </StardustButton>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
