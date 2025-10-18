import { Check } from "lucide-react";

const outcomes = [
  "Build AI mobile and web apps",
  "Develop advanced problem-solving and architectural thinking",
  "Learn vibe coding techniques",
  "Create an impressive portfolio that stands out",
  "Gain exclusive access to job opportunities and projects",
  "Receive personalized code reviews and mentorship",
];

export const OutcomesSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="px-4 md:px-10 lg:px-[120px] relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              What You'll Achieve
            </h2>
            <p className="text-xl text-muted-foreground">
              Transform your skills and career trajectory
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-lg leading-relaxed">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
