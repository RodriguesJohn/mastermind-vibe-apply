import { StardustButton } from "@/components/ui/stardust-button";

export const PricingSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-black text-white">
      <div className="px-4 md:px-10 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto flex justify-center">
          <div className="relative w-full max-w-md bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-10">
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
                  <span className="text-white/80">Weekly live sessions & workshops</span>
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
                  <span className="text-white/80">1-on-1 feedback & portfolio reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">Real-world projects & case studies</span>
                </li>
              </ul>

              {/* CTA */}
              <div className="flex justify-center">
                <StardustButton href="https://maven.com/productlearnio/aiproductdesignmasterycohort">
                  Get Access Now
                </StardustButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
