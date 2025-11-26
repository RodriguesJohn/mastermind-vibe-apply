import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

// Testimonials from CSV data for Vibe Coding course + AI cohort testimonials
const vibeCodingTestimonials = [
  {
    tempId: 0,
    testimonial: "I really enjoyed this class — it offered a hands-on, practical learning experience that pushed me in all the right ways. The challenges made the problem-solving process engaging, especially as we explored different approaches to reach the end goal. Learning to use vibe coding in Cursor was both enjoyable and incredibly rewarding. I highly recommend this course to anyone curious about AI tools and excited to explore their possibilities.",
    by: "Sonali Mookim, Lead Designer at JPMorgan Chase",
    rating: 10
  },
  {
    tempId: 1,
    testimonial: "The sessions were completely hands-on from the get go, which made it a learning opportunity to debug live and watch others debug too. If you're looking to quickly learn the basics of orchestrating design and prototyping tools in a single fast paced workshop, I would recommend this course.",
    by: "Tanya Elizabeth Kuruvilla, Product Designer at Moloco",
    rating: 10
  },
  {
    tempId: 2,
    testimonial: "The most valuable part of this cohort was the hands-on experience with new AI tools. John emphasizes practical application over lectures, which made the material immediately useful.",
    by: "Sonali, Sr.Product Designer at JPMorgan Chase",
    rating: 10
  },
  {
    tempId: 3,
    testimonial: "John's course is practical, with demos and real encouragement to explore AI tools specifically for designers. His enthusiasm for AI design feels authentic, and it's contagious.",
    by: "Linda, Principal Product Designer, Accessibility Specialist JPMorgan Chase",
    rating: 10
  },
  {
    tempId: 4,
    testimonial: "The biggest takeaway has been how much this course pushed me to explore and grow. Every session has been engaging, interactive, and deeply impactful. I've gone from not knowing how to code to building my own AI agent.",
    by: "ÌníOlúwa, Senior Product Designer at Intercom",
    rating: 10
  },
  {
    tempId: 5,
    testimonial: "John delivered everything he listed and more. Always accessible, he creates additional tutorials on demand and is ready to help, explain, and mentor with patience and care.",
    by: "Aviad, Product Designer",
    rating: 10
  },
  {
    tempId: 6,
    testimonial: "This cohort has given me the foundation to understand AI at a high level. I've learned about more tools to leverage in my design process and how to design human-centered AI experiences.",
    by: "Kenneth (Ken) Hargrove, Product Designer @CoStar",
    rating: 10
  },
  {
    tempId: 7,
    testimonial: "John is calm, insightful, and deeply attuned to emerging design trends. His strategic frameworks and live sessions helped me think like both a strategist and a solutionist.",
    by: "Sneh, UX Designer",
    rating: 10
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof vibeCodingTestimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-primary text-primary-foreground border-primary" 
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <div className="flex flex-col h-full">
        <h3 className={cn(
          "text-base sm:text-xl font-medium flex-1 overflow-hidden",
          isCenter ? "text-primary-foreground" : "text-foreground"
        )}
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 5,
          WebkitBoxOrient: 'vertical',
          lineHeight: '1.5',
          marginBottom: '60px',
          paddingRight: '8px'
        }}>
          "{testimonial.testimonial}"
        </h3>
        <p className={cn(
          "absolute bottom-8 left-8 right-8 text-sm italic flex-shrink-0",
          isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
        )}>
          - {testimonial.by}
        </p>
      </div>
    </div>
  );
};

export const VibeCodingTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(vibeCodingTestimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-muted/30 h-[400px] md:h-[500px] lg:h-[600px]"
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

