"use client";

import { cn } from "@/lib/utils";

import { BookOpen, Code2, Briefcase, TrendingUp } from "lucide-react";

import React, { useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

// The main props for the HowItWorks component
interface HowItWorksProps extends React.HTMLAttributes<HTMLElement> {}

// The props for a single step card
interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  colors: string[];
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  hasOtherHovered: boolean;
}

/**
 * A single step card within the "How It Works" section.
 * It displays an icon, title, description, and a list of benefits.
 */
const StepCard: React.FC<StepCardProps> = ({
  icon,
  title,
  description,
  benefits,
  colors,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  hasOtherHovered,
}) => (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={cn(
      "relative rounded-2xl border bg-card overflow-hidden text-card-foreground transition-all duration-300 ease-in-out",
      isHovered 
        ? "scale-105 shadow-lg border-primary/50 bg-muted" 
        : hasOtherHovered
        ? "blur-sm opacity-60"
        : ""
    )}
  >
    {/* Colorful Shader Background - Top Section Only */}
    <div className="relative h-32 w-full overflow-hidden rounded-t-2xl">
      <MeshGradient
        width={1200}
        height={200}
        colors={colors}
        distortion={0.8}
        swirl={0.6}
        speed={0.42}
        offsetX={0.08}
        className="absolute inset-0 w-full h-full"
      />
      {/* Title Overlay */}
      <div className="absolute inset-0 flex items-center justify-start px-6 z-10">
        <h3 className="text-2xl font-semibold text-white">
          {title}
        </h3>
      </div>
    </div>
    
    {/* Content */}
    <div className="p-8">
      {/* Description */}
      <p className="mb-6 text-lg text-muted-foreground">{description}</p>
      {/* Benefits List */}
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
            </div>
            <span className="text-base text-muted-foreground">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

/**
 * A responsive "How It Works" section that displays a 4-step process.
 * It is styled with shadcn/ui theme variables to support light and dark modes.
 */
export const HowItWorks: React.FC<HowItWorksProps> = ({
  className,
  ...props
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const stepsData = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Complete all the courses",
      description:
        "Work through all 13 modules at your own pace with lifetime access.",
      benefits: [
        "Access to all course materials",
        "Learn at your own pace",
        "Lifetime access to updates",
      ],
      colors: ["#FF6B6B", "#FFD93D", "#FF8E53", "#FF6B9D"],
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Complete the project",
      description:
        "Build real-world projects that showcase your skills and portfolio.",
      benefits: [
        "Hands-on project experience",
        "Build your portfolio",
        "Apply what you've learned",
      ],
      colors: ["#4ECDC4", "#87CEEB", "#DA70D6", "#BA55D3"],
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Prepare your portfolio",
      description:
        "Create a professional portfolio that stands out to employers and clients.",
      benefits: [
        "Professional portfolio design",
        "Showcase your best work",
        "Stand out to employers",
      ],
      colors: ["#95E1D3", "#F38181", "#FCE38A", "#AAE3F0"],
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Land high-paying clients and jobs",
      description:
        "Use your skills and portfolio to secure your dream role or client.",
      benefits: [
        "Access to high-paying opportunities",
        "Career support and guidance",
        "Ongoing mentorship",
      ],
      colors: ["#2ECC71", "#58D68D", "#A9DFBF", "#E8F8F5"],
    },
  ];

  return (
    <section
      id="how-it-works"
      className={cn("w-full bg-background py-16 sm:py-24", className)}
      {...props}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-4xl text-left">
          <h2 
            className="font-bold tracking-tight text-foreground"
            style={{ fontSize: '32px', lineHeight: '1.25' }}
          >
            How it works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A simple 4-step path to your design engineering career
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-6 top-12 bottom-12 w-0.5 bg-border/40 hidden md:block"
          ></div>
          
          <div className="flex flex-col gap-8">
            {stepsData.map((step, index) => (
              <div key={index} className="flex items-start gap-6 relative">
                {/* Step number - Improved Visual */}
                <div className="flex flex-col items-center gap-1 flex-shrink-0 z-10 relative">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Step</span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted/80 border-2 border-border font-bold text-lg text-foreground ring-4 ring-background shadow-lg">
                    {index + 1}
                  </div>
                </div>
                {/* Card */}
                <div className="flex-1">
                  <StepCard
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                    benefits={step.benefits}
                    colors={step.colors}
                    isHovered={hoveredIndex === index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    hasOtherHovered={hoveredIndex !== null && hoveredIndex !== index}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

