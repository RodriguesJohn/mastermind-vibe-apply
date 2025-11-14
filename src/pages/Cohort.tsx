import { Navigation } from "@/components/Navigation";
import { AIHeaderSection } from "@/components/AIHeaderSection";
import { CohortOverviewSection } from "@/components/CohortOverviewSection";
import { CohortModulesSection } from "@/components/CohortModulesSection";
import { CohortTestimonialsSection } from "@/components/CohortTestimonialsSection";
import { CohortStatsSection } from "@/components/CohortStatsSection";
import { InstructorSection } from "@/components/InstructorSection";
import { PlaybookSection } from "@/components/PlaybookSection";
import { WorkshopGallerySection } from "@/components/WorkshopGallerySection";
import { Helmet } from "react-helmet";
import LogoCloud from "@/components/LogoCloud";
import CohortCompanyLogos from "@/components/CohortCompanyLogos";
import { TestimonialSection } from "@/components/CustomerTestimonialSection";
import LindaImage from "@/assets/Linda.jpeg";
import SnehImage from "@/assets/Sneh.webp";
import SonaliImage from "@/assets/Sonali.jpeg";
import SethImage from "@/assets/Seth.png";
const Cohort = () => {
  const customerTestimonials = [{
    id: 1,
    quote: "This cohort gave me the practical, hands-on approach I needed to actually use AI tools in my design work.",
    name: "Elaine Anzaldo",
    role: "Senior Product Designer at Meta",
    description: "Design AI products for wearables with human-centered experiences.",
    imageSrc: "https://media.licdn.com/dms/image/v2/D5603AQHVwM0T15wsng/profile-displayphoto-shrink_800_800/B56ZOxeYKhG8Ao-/0/1733849351352?e=1763596800&v=beta&t=WVCx8mbXSMSLcterbsI5QaIwjVrkopIIhGCxSFz8uUY"
  }, {
    id: 2,
    quote: "John's strategic frameworks and demos helped me think like a strategist and a solutionist.",
    name: "Seth Jenks",
    role: "Director of Design at SecurityScorecard",
    description: "Use vibe coding to create value more quickly for internal product teams and external stakeholders.",
    imageSrc: SethImage
  }];
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

          {/* Video Section */}
          <section className="relative py-12 md:py-16 overflow-hidden bg-black text-white border-b border-white/10">
            <div className="px-4 md:px-10 lg:px-[120px] relative z-10 w-full">
              <div className="max-w-[1200px] mx-auto">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                  <iframe src="https://www.youtube.com/embed/aNNaVhnJdYc?rel=0&modestbranding=1" title="AI Design Academy Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading="lazy" frameBorder="0" className="absolute inset-0 w-full h-full" />
                </div>
              </div>
            </div>
          </section>

          <LogoCloud />

          <CohortOverviewSection />
          <CohortStatsSection />
          
          
          

          <PlaybookSection />
          
        </main>
      </div>
    </>;
};
export default Cohort;