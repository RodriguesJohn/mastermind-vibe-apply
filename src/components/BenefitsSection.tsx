import { Code2, Users, Zap, Trophy } from "lucide-react";

const benefits = [
  {
    icon: Code2,
    title: "Advanced Curriculum",
    description: "Master cutting-edge technologies and frameworks through hands-on projects and real-world applications.",
  },
  {
    icon: Users,
    title: "Elite Community",
    description: "Connect with top developers, share knowledge, and build lasting relationships in an exclusive network.",
  },
  {
    icon: Zap,
    title: "Accelerated Growth",
    description: "Fast-track your development journey with personalized mentorship and weekly live sessions.",
  },
  {
    icon: Trophy,
    title: "Career Advancement",
    description: "Position yourself for premium opportunities and level up your career with industry-recognized skills.",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Join the Mastermind?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to become an exceptional developer
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
