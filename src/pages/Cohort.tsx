import { Navigation } from "@/components/Navigation";
import { AIHeaderSection } from "@/components/AIHeaderSection";
import { CohortOverviewSection } from "@/components/CohortOverviewSection";
import { CohortModulesSection } from "@/components/CohortModulesSection";
import { CohortTestimonialsSection } from "@/components/CohortTestimonialsSection";
import { InstructorSection } from "@/components/InstructorSection";
import { PlaybookSection } from "@/components/PlaybookSection";
import { Helmet } from "react-helmet";

const Cohort = () => {
  return (
    <>
      <Helmet>
        <title>Cohort - Vibe Coding Mastermind</title>
        <meta 
          name="description" 
          content="Join our coding cohort and learn with a community of developers." 
        />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        <main>
          <AIHeaderSection />
          <CohortOverviewSection />
          <CohortTestimonialsSection />
          <CohortModulesSection />
          <InstructorSection />
          <PlaybookSection />
        </main>
      </div>
    </>
  );
};

export default Cohort;
