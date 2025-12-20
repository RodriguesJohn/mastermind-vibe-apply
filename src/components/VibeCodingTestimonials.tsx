import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Testimonials from CSV data for Vibe Coding course + AI cohort testimonials
const vibeCodingTestimonials = [
  {
    tempId: 0,
    testimonial: "I really enjoyed this class it offered a hands-on, practical learning experience that pushed me in all the right ways. The challenges made the problem-solving process engaging, especially as we explored different approaches to reach the end goal. Learning to use vibe coding in Cursor was both enjoyable and incredibly rewarding. I highly recommend this course to anyone curious about AI tools and excited to explore their possibilities.",
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
  },
  {
    tempId: 8,
    testimonial: "I'm leaving this course feeling truly confident in my AI fluency, and my AI tool belt feels up-to-date. I joined to upskill, build confidence, and understand how AI will shape my workflow and the industry, and the course delivered. I'm now ready to build a new portfolio quickly and effectively, and I genuinely feel more competitive in the market.",
    by: "Dana, Lead Product Designer, ex Rite Aid",
    rating: 10
  },
  {
    tempId: 9,
    testimonial: "I gained valuable experience building an A.I. product using all A.I. tools, from strategy and wireframes to a functional prototype. The course served as a crash course in A.I. tools including Relume, Lovable, Figma Make, n8n, and more. John was available, accessible and extremely knowledgeable. Highly recommend.",
    by: "Dan, UX Designer at RTI International",
    rating: 10
  },
  {
    tempId: 10,
    testimonial: "John equipped me with understanding the AI possibility space to take my initial ideas and turn them into working POCs that I can use for my portfolio, bring to my employer, or even use to start something of my own. He's also doing the work to connect with people in the industry, building a network we can all draw from.",
    by: "Brett, Product Designer at Simpson Strong Tie",
    rating: 10
  },
  {
    tempId: 11,
    testimonial: "In a world where AI is rapidly reshaping how we work, John is an exceptional guide through the new landscape of possibilities and intelligent workflows. This course takes you from foundational AI concepts to more technical, yet designer-friendly, platform builds using a wide range of tools. My only wish was for more time to dive deeper into each tool.",
    by: "Sam, Senior Product Designer at Kingfisher PLC",
    rating: 10
  }
];

export const VibeCodingTestimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isManualScrolling, setIsManualScrolling] = useState(false);
  // Use all testimonials without duplication for visibility
  const cardWidth = 280; // Mobile small
  const cardWidthSm = 320; // Mobile large
  const cardWidthMd = 380; // Desktop
  const gapMobile = 16; // 4 * 4px (gap-4) on mobile
  const gapDesktop = 24; // 6 * 4px (gap-6) on desktop
  const scrollAmount = cardWidth + gapMobile;
  const scrollAmountSm = cardWidthSm + gapMobile;
  const scrollAmountMd = cardWidthMd + gapDesktop;

  const scrollLeft = () => {
    if (scrollRef.current) {
      setIsManualScrolling(true);
      setIsPaused(true);
      const width = window.innerWidth;
      let amount;
      if (width < 640) {
        amount = scrollAmount;
      } else if (width < 768) {
        amount = scrollAmountSm;
      } else {
        amount = scrollAmountMd;
      }
      scrollRef.current.scrollBy({ left: -amount, behavior: 'smooth' });
      setTimeout(() => setIsManualScrolling(false), 1000);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      setIsManualScrolling(true);
      setIsPaused(true);
      const width = window.innerWidth;
      let amount;
      if (width < 640) {
        amount = scrollAmount;
      } else if (width < 768) {
        amount = scrollAmountSm;
      } else {
        amount = scrollAmountMd;
      }
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
      setTimeout(() => setIsManualScrolling(false), 1000);
    }
  };

  useEffect(() => {
    if (!isManualScrolling && !isPaused && scrollRef.current) {
      const scrollContainer = scrollRef.current;
      let scrollPosition = 0;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      
      const scrollInterval = setInterval(() => {
        scrollPosition += 1;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }, 50);

      return () => clearInterval(scrollInterval);
    }
  }, [isManualScrolling, isPaused]);

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden -mx-4 sm:mx-0">
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-0"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {vibeCodingTestimonials.map((testimonial) => (
            <div
              key={testimonial.tempId}
              className="min-w-[280px] max-w-[280px] sm:min-w-[320px] sm:max-w-[320px] md:min-w-[380px] md:max-w-[380px] p-4 sm:p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col flex-shrink-0"
            >
              <p className="text-sm sm:text-base leading-relaxed text-foreground mb-3 sm:mb-4 flex-1">
                "{testimonial.testimonial}"
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground italic mt-auto">
                {testimonial.by}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
        <button
          onClick={scrollLeft}
          className={cn(
            "flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <button
          onClick={scrollRight}
          className={cn(
            "flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Scroll right"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

