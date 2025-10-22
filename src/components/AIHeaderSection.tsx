import { ParticleSphere } from "@/components/ParticleSphere";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ShaderBackground } from "@/components/AdvancedShaderBackground";
import { BlurFade } from "@/components/BlurFade";

export const AIHeaderSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-border/40 w-full">
      {/* Advanced Shader Background */}
      <ShaderBackground />

      {/* Content */}
      <div className="relative z-5 px-6 sm:px-8 md:px-12 lg:px-5 py-4 sm:py-6 md:py-8 lg:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden">
            <div className="text-left sm:text-center space-y-6 sm:space-y-8">
              {/* Sphere - Mobile: top-left */}
              <div className="flex justify-start sm:justify-center pb-1 sm:hidden">
                <div className="w-[250px] h-[250px]">
                  <ParticleSphere />
                </div>
              </div>

              {/* Date Badge */}
              <BlurFade delay={0.1} duration={0.8} yOffset={10} blur="4px">
                <div className="inline-block">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm font-medium uppercase tracking-wide">
                    Next cohort starting on November 8th
                  </span>
                </div>
              </BlurFade>

              {/* Title */}
              <BlurFade delay={0.2} duration={0.8} yOffset={20} blur="8px">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight text-left sm:text-center">
                  <span className="text-white block">AI Mastery for Designers</span>
                  <span className="text-white block">& Product Leaders 5-Week Cohort</span>
                  <span className="text-white block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-2 opacity-90"></span>
                </h1>
              </BlurFade>

              {/* Description */}
              <BlurFade delay={0.4} duration={0.8} yOffset={15} blur="6px">
                <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto sm:mx-auto px-4 text-left sm:text-center">
                  Stay ahead and upskill today. Design AI products and systems through a structured learning program.
                </p>
              </BlurFade>

              {/* Buttons */}
              <BlurFade delay={0.6} duration={0.8} yOffset={10} blur="4px">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-start sm:justify-center pt-4">
                  <Button
                    variant="default"
                    size="lg"
                    className="group bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 border border-white/20 w-full sm:w-auto min-w-[200px]"
                    asChild
                  >
                    <a
                      href="https://maven.com/productlearnio/aiproductdesignmasterycohort"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enroll Today
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white/90 hover:bg-white/10 w-full sm:w-auto min-w-[200px]"
                    asChild
                  >
                    <a
                      href="https://cal.com/aidesignacademy/15min?overlayCalendar=true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a Call
                    </a>
                  </Button>
                </div>
              </BlurFade>

              {/* Sphere - Tablet: centered below content */}
              <div className="hidden sm:flex sm:justify-center pt-8 md:pt-12">
                <div className="w-[320px] h-[320px]">
                  <ParticleSphere />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-4 animate-fade-in">
              <BlurFade delay={0.1} duration={0.8} yOffset={10} blur="4px">
                <p className="text-sm text-white/60 uppercase tracking-wide font-medium">
                  Next cohort starting on November 8th.
                </p>
              </BlurFade>

              <BlurFade delay={0.2} duration={0.8} yOffset={20} blur="8px">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold tracking-tight leading-[1.2] lg:leading-[1.3]">
                  <span className="text-white block">AI Mastery for Designers & Product Leaders</span>
                  <span className="text-white block text-xl lg:text-2xl xl:text-3xl font-semibold mt-2 opacity-90">
                    5-Week Cohort
                  </span>
                </h1>
              </BlurFade>

              <BlurFade delay={0.4} duration={0.8} yOffset={15} blur="6px">
                <p className="text-xl xl:text-2xl text-white/75 max-w-2xl leading-relaxed">
                  Stay ahead and upskill today. Design AI products and systems through a structured learning program.
                </p>
              </BlurFade>

              <BlurFade delay={0.6} duration={0.8} yOffset={10} blur="4px">
                <div className="flex flex-row gap-6 items-center pt-6">
                  <Button
                    variant="default"
                    size="xl"
                    className="group bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 border border-white/10"
                    asChild
                  >
                    <a
                      href="https://maven.com/productlearnio/aiproductdesignmasterycohort"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enroll Today
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-white/10 text-white/80 hover:bg-white/5"
                    asChild
                  >
                    <a
                      href="https://cal.com/aidesignacademy/15min?overlayCalendar=true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a Call
                    </a>
                  </Button>
                </div>
              </BlurFade>
            </div>

            {/* Right Column - Particle Sphere */}
            <div className="flex items-center justify-center">
              <ParticleSphere />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
};
