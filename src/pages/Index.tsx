import React from "react";
import { Navigation } from "../components/Navigation";
import { AIHeaderSection } from "../components/AIHeaderSection";
import { CohortOverviewSection } from "../components/CohortOverviewSection";
import { CohortModulesSection } from "../components/CohortModulesSection";
import { CohortTestimonialsSection } from "../components/CohortTestimonialsSection";
import { InstructorSection } from "../components/InstructorSection";
import { PlaybookSection } from "../components/PlaybookSection";
import { WorkshopGallerySection } from "../components/WorkshopGallerySection";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AI Design Academy - AI Mastery for Designers & Product Leaders</title>
        <meta name="description" content="Master AI development with our comprehensive course designed for designers and product leaders. Learn to build AI-powered applications from scratch." />
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
          <WorkshopGallerySection />
        </main>
        
        <footer className="border-t border-border py-12 bg-card/30">
          <div className="px-4 md:px-10 lg:px-[120px] text-center text-sm text-muted-foreground">
            <div className="max-w-[1200px] mx-auto">
            <p>© 2025 AI Design Academy. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
