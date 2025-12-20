import { StaggerTestimonials } from "@/components/StaggerTestimonials";
import { VibeCodingTestimonials } from "@/components/VibeCodingTestimonials";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import LindaImage from "@/assets/Linda.jpeg";
import SnehImage from "@/assets/Sneh.webp";
import SonaliImage from "@/assets/Sonali.jpeg";
import KennyImage from "@/assets/Kenny.jpeg";
import AviadImage from "@/assets/Avaid.jpeg";
import IniImage from "@/assets/Indi.jpeg";
// Import profile pictures for Dana, Dan, Brett, and Sam
import DanaImage from "@/assets/Dana.jpeg";
import DanImage from "@/assets/Dan.jpeg";
import BrettImage from "@/assets/Brett.jpeg";
import SamImage from "@/assets/Sam.jpeg";

const allCohortTestimonials = [
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

const allVibeCodingTestimonials = [
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

export const CohortTestimonialsSection = () => {
  const location = useLocation();
  const isVibeCodingPage = location.pathname === "/vibe-coding-course" || location.pathname.includes("vibe-coding");
  const [showAll, setShowAll] = useState(false);
  
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
      <div className="px-4 sm:px-6 md:px-10 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal">What Cohort Members Are Saying</h2>
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm font-medium text-white hover:text-white/80 transition-colors bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg border border-white/20 w-full sm:w-auto self-start sm:self-auto"
            >
              {showAll ? "You can view all the testimonials" : "View all"}
            </button>
          </div>
          {showAll ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {(isVibeCodingPage ? allVibeCodingTestimonials : allCohortTestimonials).map((testimonial) => (
                <div
                  key={testimonial.tempId}
                  className="p-4 sm:p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col"
                >
                  {'imgSrc' in testimonial && testimonial.imgSrc && (
                    <img
                      src={testimonial.imgSrc}
                      alt={`${testimonial.by.split(',')[0]}`}
                      className="mb-3 sm:mb-4 h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover object-top flex-shrink-0"
                    />
                  )}
                  <p className="text-sm sm:text-base leading-relaxed text-foreground mb-3 sm:mb-4 flex-1">
                    "{testimonial.testimonial}"
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground italic mt-auto">
                    {testimonial.by}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            isVibeCodingPage ? <VibeCodingTestimonials /> : <StaggerTestimonials />
          )}
        </div>
      </div>
    </section>
  );
};
