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
  testimonials
}: TestimonialSectionProps) => {
  // Animation variants for the container to orchestrate staggered children animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Animation variants for each testimonial card
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return <section className="w-full bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 text-center">
        {/* Section Header */}
        <h2 className="font-normal text-center mb-16 tracking-tight" style={{
        fontSize: '32px',
        lineHeight: '1.25'
      }}>
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {subtitle}
        </p>

        {/* Testimonials Grid */}
        
      </div>
    </section>;
};