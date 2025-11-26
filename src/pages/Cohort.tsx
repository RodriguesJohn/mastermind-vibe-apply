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
        <title>AI Mastery for Designers & Product Leaders 5-Week Cohort</title>
        <meta name="description" content="Join our coding cohort and learn with a community of developers." />
      </Helmet>

      <div className="min-h-screen">
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