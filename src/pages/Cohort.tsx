import { Navigation } from "@/components/Navigation";
import { AIHeaderSection } from "@/components/AIHeaderSection";
import { CohortOverviewSection } from "@/components/CohortOverviewSection";
import { CohortModulesSection } from "@/components/CohortModulesSection";
import { CohortTestimonialsSection } from "@/components/CohortTestimonialsSection";
import { CohortStatsSection } from "@/components/CohortStatsSection";
import { InstructorSection } from "@/components/InstructorSection";
import { PlaybookSection } from "@/components/PlaybookSection";
import { Helmet } from "react-helmet";
import LogoCloud from "@/components/LogoCloud";
import CohortCompanyLogos from "@/components/CohortCompanyLogos";
const Cohort = () => {
  return <>
      <Helmet>
        <title>AI Mastery for Designers & Product Leaders 3-Week Cohort</title>
        <meta name="description" content="Join our coding cohort and learn with a community of developers." />
      </Helmet>

      <div className="min-h-screen">
        {/* Top Banner */}
        <div className="bg-primary/10 border-b border-primary/20 py-2 px-4">
          <div className="max-w-[1200px] mx-auto text-center">
            <p className="text-sm md:text-base text-foreground font-medium">
              The next cohort starts on Jan 9, 2026
            </p>
          </div>
        </div>
        <Navigation />
        <main>
          <AIHeaderSection />
          <CohortCompanyLogos />
          <CohortTestimonialsSection />

          <LogoCloud />

          <CohortOverviewSection />
          <CohortStatsSection />
          <CohortModulesSection />
          <InstructorSection />
          
          <PlaybookSection />
          
        </main>
      </div>
    </>;
};
export default Cohort;