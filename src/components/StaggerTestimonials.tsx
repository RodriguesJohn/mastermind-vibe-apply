import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import LindaImage from "@/assets/Linda.jpeg";
import SnehImage from "@/assets/Sneh.webp";
import SonaliImage from "@/assets/Sonali.jpeg";
import KennyImage from "@/assets/Kenny.jpeg";
import AviadImage from "@/assets/Avaid.jpeg";
import IniImage from "@/assets/Indi.jpeg";
// Import profile pictures for Dana, Dan, Brett, and Sam
// Adjust import paths if your image files have different names/extensions
import DanaImage from "@/assets/Dana.jpeg";
import DanImage from "@/assets/Dan.jpeg";
import BrettImage from "@/assets/Brett.jpeg";
import SamImage from "@/assets/Sam.jpeg";

const testimonials = [
  {
    tempId: 8,
    testimonial: "I'm leaving this course feeling truly confident in my AI fluency, and my AI tool belt feels up-to-date. I joined to upskill, build confidence, and understand how AI will shape my workflow and the industry, and the course delivered. I'm now ready to build a new portfolio quickly and effectively, and I genuinely feel more competitive in the market.",
    by: "Dana, Lead Product Designer, ex Rite Aid",
    imgSrc: DanaImage
  },
  {
    tempId: 7,
    testimonial: "The biggest takeaway has been how much this course pushed me to explore and grow. Every session has been engaging, interactive, and deeply impactful. I've gone from not knowing how to code to building my own AI agent.",
    by: "ÌníOlúwa, Senior Product Designer at Intercom",
    imgSrc: IniImage
  },
  {
    tempId: 9,
    testimonial: "I gained valuable experience building an A.I. product using all A.I. tools, from strategy and wireframes to a functional prototype. The course served as a crash course in A.I. tools including Relume, Lovable, Figma Make, n8n, and more. John was available, accessible and extremely knowledgeable. Highly recommend.",
    by: "Dan, UX Designer at RTI International",
    imgSrc: DanImage
  },
  {
    tempId: 10,
    testimonial: "John equipped me with understanding the AI possibility space to take my initial ideas and turn them into working POCs that I can use for my portfolio, bring to my employer, or even use to start something of my own. He's also doing the work to connect with people in the industry, building a network we can all draw from.",
    by: "Brett, Product Designer at Simpson Strong Tie",
    imgSrc: BrettImage
  },
  {
    tempId: 0,
    testimonial: "John's course is practical, with demos and real encouragement to explore AI tools specifically for designers. His enthusiasm for AI design feels authentic, and it's contagious.",
    by: "Linda, Principal Product Designer, Accessibility Specialist JPMorgan Chase",
    imgSrc: LindaImage
  },
  {
    tempId: 3,
    testimonial: "The sessions were completely hands-on from the get go, which made it a learning opportunity to debug live and watch others debug too. If you're looking to quickly learn the basics of orchestrating design and prototyping tools in a single fast paced workshop, I would recommend this course.",
    by: "Tanya Elizabeth Kuruvilla, Product Designer at Moloco"
  },
  {
    tempId: 4,
    testimonial: "The most valuable part of this cohort was the hands-on experience with new AI tools. John emphasizes practical application over lectures, which made the material immediately useful.",
    by: "Sonali, Sr.Product Designer at JPMorgan Chase"
  },
  {
    tempId: 5,
    testimonial: "This cohort has given me the foundation to understand AI at a high level. I've learned about more tools to leverage in my design process and how to design human-centered AI experiences.",
    by: "Kenneth (Ken) Hargrove, Product Designer @CoStar",
    imgSrc: KennyImage
  },
  {
    tempId: 6,
    testimonial: "John delivered everything he listed and more. Always accessible, he creates additional tutorials on demand and is ready to help, explain, and mentor with patience and care.",
    by: "Aviad, Product Designer",
    imgSrc: AviadImage
  },
  {
    tempId: 11,
    testimonial: "In a world where AI is rapidly reshaping how we work, John is an exceptional guide through the new landscape of possibilities and intelligent workflows. This course takes you from foundational AI concepts to more technical, yet designer-friendly, platform builds using a wide range of tools. My only wish was for more time to dive deeper into each tool.",
    by: "Sam, Senior Product Designer at Kingfisher PLC",
    imgSrc: SamImage
  },
  {
    tempId: 1,
    testimonial: "John is calm, insightful, and deeply attuned to emerging design trends. His strategic frameworks and live sessions helped me think like both a strategist and a solutionist.",
    by: "Sneh, UX Designer",
    imgSrc: SnehImage
  },
  {
    tempId: 2,
    testimonial: "I really enjoyed this class it offered a hands-on, practical learning experience that pushed me in all the right ways. The challenges made the problem-solving process engaging, especially as we explored different approaches to reach the end goal. Learning to use vibe coding in Cursor was both enjoyable and incredibly rewarding. I highly recommend this course to anyone curious about AI tools and excited to explore their possibilities.",
    by: "Sonali Mookim, Lead Designer at JPMorgan Chase",
    imgSrc: SonaliImage
  }
];

export const StaggerTestimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isManualScrolling, setIsManualScrolling] = useState(false);
  // Use all testimonials without duplication for visibility
  const cardWidth = 320; // Mobile
  const cardWidthMd = 380; // Desktop
  const gap = 24; // 6 * 4px (gap-6)
  const scrollAmount = cardWidth + gap;
  const scrollAmountMd = cardWidthMd + gap;

  const scrollLeft = () => {
    if (scrollRef.current) {
      setIsManualScrolling(true);
      setIsPaused(true);
      const isMobile = window.innerWidth < 768;
      const amount = isMobile ? scrollAmount : scrollAmountMd;
      scrollRef.current.scrollBy({ left: -amount, behavior: 'smooth' });
      setTimeout(() => setIsManualScrolling(false), 1000);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      setIsManualScrolling(true);
      setIsPaused(true);
      const isMobile = window.innerWidth < 768;
      const amount = isMobile ? scrollAmount : scrollAmountMd;
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
      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.tempId}
              className="min-w-[320px] max-w-[320px] md:min-w-[380px] md:max-w-[380px] p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col flex-shrink-0"
            >
              {testimonial.imgSrc && (
                <img
                  src={testimonial.imgSrc}
                  alt={`${testimonial.by.split(',')[0]}`}
                  className="mb-4 h-16 w-16 rounded-full object-cover object-top flex-shrink-0"
                />
              )}
              <p className="text-base leading-relaxed text-foreground mb-4 flex-1">
                "{testimonial.testimonial}"
              </p>
              <p className="text-sm text-muted-foreground italic mt-auto">
                {testimonial.by}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={scrollLeft}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={scrollRight}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5" />
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

