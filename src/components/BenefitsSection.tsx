import { Code2, Users, Zap, Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Users,
    title: "Guest Speakers",
    description: "Get exclusive access to industry leaders and experts who share real-world insights and experiences.",
  },
  {
    icon: Zap,
    title: "Saturday Live Sessions",
    description: "Meet every Saturday for 1.5 hour live interactive sessions. Bi-weekly sessions where we build, learn, and problem-solve together in real-time.",
  },
  {
    icon: Code2,
    title: "Learn Latest AI Tools",
    description: "Master cutting-edge AI tools like Cursor, Lovable, v0, and Bolt to future proof your career and stay ahead in the industry.",
  },
  {
    icon: Trophy,
    title: "Join the Community",
    description: "Join the Community of AI Product Designers and Leaders.",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="px-4 md:px-10 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            What Will You Get
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to become an exceptional developer
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 ${index === 3 ? 'md:col-span-2' : ''}`}
            >
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-white leading-relaxed">
                {benefit.description}
              </p>
              
              {/* Join Membership Button below Join the Community card */}
              {index === 3 && (
                <div className="mt-8 flex justify-center">
                  <Button size="xl" className="text-base sm:text-lg" variant="cta" asChild>
                    <a href="https://www.skool.com/ai-design-academy-6114/about?ref=8d68f8fa4bf2422c8318d51d5f9fcadc" target="_blank" rel="noopener noreferrer">
                      Join Membership - $149/month
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </a>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};
