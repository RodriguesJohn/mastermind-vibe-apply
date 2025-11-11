import { StaggerTestimonials } from "@/components/StaggerTestimonials";

export const CohortTestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="px-4 md:px-10 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 
            className="font-normal text-center mb-16 tracking-tight"
            style={{ fontSize: '32px', lineHeight: '1.25' }}
          >
            Stories From Cohort Members
          </h2>
          
          <StaggerTestimonials />
        </div>
      </div>
    </section>
  );
};
