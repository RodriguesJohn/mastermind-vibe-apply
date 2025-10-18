import { Navigation } from "@/components/Navigation";
import { AIHeaderSection } from "@/components/AIHeaderSection";
import { CohortOverviewSection } from "@/components/CohortOverviewSection";
import { CohortTestimonialsSection } from "@/components/CohortTestimonialsSection";
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
        </main>
      </div>
    </>
  );
};

export default Cohort;
