import { Navigation } from "@/components/Navigation";
import { AIHeaderSection } from "@/components/AIHeaderSection";
import { CohortOverviewSection } from "@/components/CohortOverviewSection";
import { CohortOutcomesSection } from "@/components/CohortOutcomesSection";
import { CohortModulesSection } from "@/components/CohortModulesSection";
import { CohortTestimonialsSection } from "@/components/CohortTestimonialsSection";
import { InstructorSection } from "@/components/InstructorSection";
import { PlaybookSection } from "@/components/PlaybookSection";
import { WorkshopGallerySection } from "@/components/WorkshopGallerySection";
import { Helmet } from "react-helmet";

const Cohort = () => {
  return (
    <>
      <Helmet>
        <title>Become a Design Engineer - Design Engineering Course</title>
        <meta name="description" content="Master HTML, CSS, JavaScript, React, Tailwind, and Next.js to become a design engineer. Build your portfolio and accelerate your career." />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main>
          <AIHeaderSection />
          <CohortOverviewSection />
          <CohortOutcomesSection />
          <CohortModulesSection />
          <InstructorSection />
          <PlaybookSection />
          <WorkshopGallerySection />
        </main>
      </div>
    </>
  );
};

export default Cohort;
