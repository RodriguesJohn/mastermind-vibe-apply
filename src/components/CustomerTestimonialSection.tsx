import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// TypeScript interface for a single testimonial object
export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  description?: string; // optional description
  imageSrc?: string; // optional image
}

// TypeScript interface for the component's props
export interface TestimonialSectionProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

/**
 * A responsive section component to display customer testimonials.
 * It features a title, subtitle, and a grid of animated testimonial cards.
 */
export const TestimonialSection = ({
  title,
  subtitle,
  testimonials,
}: TestimonialSectionProps) => {
  // Animation variants for the container to orchestrate staggered children animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for each testimonial card
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 text-center">
        {/* Section Header */}
        <h2 
          className="font-normal text-center mb-16 tracking-tight"
          style={{ fontSize: '32px', lineHeight: '1.25' }}
        >
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {subtitle}
        </p>

        {/* Testimonials Grid */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial) => (
            <motion.figure
              key={testimonial.id}
              className="relative overflow-hidden rounded-lg bg-card shadow-sm border border-border/40"
              variants={itemVariants}
            >
              {/* Visual: either an image (if provided) or a placeholder */}
              {testimonial.imageSrc ? (
                <div className="relative h-[520px] w-full">
                  <img
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    className="h-[520px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                </div>
              ) : (
                <div className="relative h-[520px] w-full">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.05),transparent_40%)]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                </div>
              )}

              {/* Content within the card */}
              <figcaption className="absolute bottom-0 left-0 right-0 p-6 text-left text-white">
                {testimonial.description ? (
                  <>
                    <p className="text-base font-medium leading-tight text-white/90 line-clamp-2">
                      {testimonial.description}
                    </p>
                    <p className="mt-4 font-semibold">
                      &mdash; {testimonial.name}
                      {testimonial.role && (
                        <span className="ml-1 text-white/60">{testimonial.role}</span>
                      )}
                    </p>
                  </>
                ) : (
                  <>
                    <Quote className="mb-4 h-8 w-8 text-white/40" aria-hidden="true" />
                    <blockquote className="text-base font-medium leading-relaxed text-white/80">
                      {testimonial.quote}
                    </blockquote>
                    <p className="mt-4 font-semibold">
                      &mdash; {testimonial.name}
                      {testimonial.role && (
                        <span className="ml-1 text-white/60">{testimonial.role}</span>
                      )}
                    </p>
                  </>
                )}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
