import { Card } from "@/components/ui/card";
import { Code2, Briefcase, TrendingUp } from "lucide-react";
import { BlurFade } from "@/components/BlurFade";

export const CohortOutcomesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-black text-white border-t border-white/10">
      <div className="px-4 md:px-10 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <BlurFade delay={0.1} duration={0.8}>
              <Card className="p-8 bg-white/5 border-white/10 hover:border-primary/50 transition-colors h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Bridge Design & Engineering</h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  Master the technical skills to translate designs into code. Become the bridge between design and engineering teams.
                </p>
                <p className="text-white/50 text-sm">
                  Build real projects using HTML, CSS, JavaScript, React, Tailwind, and Next.js.
                </p>
              </Card>
            </BlurFade>
            <BlurFade delay={0.2} duration={0.8}>
              <Card className="p-8 bg-white/5 border-white/10 hover:border-primary/50 transition-colors h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Build Your Portfolio</h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  Create a professional AI design engineering portfolio that showcases your skills and attracts top opportunities.
                </p>
                <p className="text-white/50 text-sm">
                  Deploy your projects and portfolio to showcase your work to potential employers and clients.
                </p>
              </Card>
            </BlurFade>
            <BlurFade delay={0.3} duration={0.8}>
              <Card className="p-8 bg-white/5 border-white/10 hover:border-primary/50 transition-colors h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Accelerate Your Career</h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  Unlock new career opportunities as a design engineer. Stand out in the job market with both design and technical skills.
                </p>
                <p className="text-white/50 text-sm">
                  Become a sought-after professional who can both design and build products.
                </p>
              </Card>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
};

