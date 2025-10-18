import { Target, Briefcase, Palette, Rocket } from "lucide-react";

const targetAudience = [
  {
    icon: Palette,
    title: "Designers",
    description: "Transform your designs into functional prototypes. Learn to code your own ideas and bring them to life without depending on developers.",
  },
  {
    icon: Briefcase,
    title: "Product Managers",
    description: "Understand the technical side of product development. Build working demos faster and communicate more effectively with engineering teams.",
  },
  {
    icon: Rocket,
    title: "Agency Owners",
    description: "Expand your service offerings and reduce dependency on external developers. Deliver AI-powered solutions to your clients faster.",
  },
  {
    icon: Target,
    title: "Aspiring Design Engineers",
    description: "Fast-track your coding journey with AI tools. Learn modern development practices and build real projects from day one.",
  },
];

export const WhoIsThisFor = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="px-4 md:px-10 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Who Is This For?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Perfect for anyone ready to build with AI coding tools
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {targetAudience.map((audience, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <audience.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">
                {audience.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};