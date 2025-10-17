import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Developer at Tech Corp",
    content: "This mastermind completely transformed my approach to coding. The community support and expert guidance are unmatched.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Full Stack Engineer",
    content: "Best investment in my career. I went from struggling with basics to building complex applications with confidence.",
    rating: 5,
  },
  {
    name: "Emily Thompson",
    role: "Product Engineer at Startup",
    content: "The personalized mentorship and real-world projects helped me land my dream job. Forever grateful!",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground">
            Hear from developers who leveled up
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-lg mb-6 leading-relaxed text-foreground/90">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border pt-6">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
