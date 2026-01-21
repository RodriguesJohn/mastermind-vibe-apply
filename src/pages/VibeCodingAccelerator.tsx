import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet";
import { CalendarDays, Clock, Users, Play, Sparkles, CheckCircle2, Video, BookmarkCheck, ShieldCheck, ArrowRight, BookOpen, Rocket, Code2, Hammer, Award } from "lucide-react";
import { DotScreenShader } from "@/components/DotScreenShader";
import { OutcomesSection } from "@/components/OutcomesSection";
import { CohortTestimonialsSection } from "@/components/CohortTestimonialsSection";
import { CohortModulesSection } from "@/components/CohortModulesSection";
import { CoursePricingSection } from "@/components/CoursePricingSection";
import { VideoSlider } from "@/components/VideoSlider";
import JohnImage from "@/assets/John.png";
import JohnImage2 from "@/assets/John-4.jpg";
import JPMorganLogo from "@/assets/Chase.png";
import IntercomLogo from "@/assets/intercom-1-logo-png-transparent.png";
import HubspotLogo from "@/assets/Hubspot.svg.png";
import MetaLogo from "@/assets/meta.png";
import GoogleLogo from "@/assets/Google.svg.png";
import AppleLogo from "@/assets/Apple.png";
import LovableLogo from "@/assets/logos/lovable.png";
import AGILogo from "@/assets/AGI.png";
// OpenAI logo moved to public folder for better compatibility
const OpenAILogo = "/openai-logo.png";
import LoveableLogoMain from "@/assets/Loveable.png";
import WorkshopImage1 from "@/assets/workshop-1.jpg";
import WorkshopImage2 from "@/assets/workshop-2.jpg";
import WorkshopImage3 from "@/assets/workshop-3.jpg";
import CursorLogo from "@/assets/logos/cursor.png";
const vibeCodingHighlights = [{
  title: "Learn what vibe coding is",
  description: "Discover the foundations of Vibe Coding learn what it is, how it works, and how to start building your first AI-powered interface.",
  icon: BookOpen
}, {
  title: "Learn tools and step by step how to get started",
  description: "Explore the essential tools that make Vibe Coding possible. Learn how to use platforms like Cursor, Lovable, React, and AI-powered assistants to design, code, and ship faster.",
  icon: Rocket
}, {
  title: "Learn Cursor",
  description: "Watch real Vibe Coding demos in action and see how ideas turn into interactive apps using AI and modern design tools.",
  icon: Code2
}, {
  title: "Build your first project",
  description: "Put your skills to the test with a hands-on Vibe Coding challenge. Apply what you've learned to build and ship your own mini AI-powered project.",
  icon: Hammer
}];
const whatsIncluded = [{
  title: "Live sessions",
  description: "Learn directly from John Rodrigues in a real-time, interactive format.",
  icon: Users
}, {
  title: "Lifetime access",
  description: "Go back to course content and recordings whenever you need to.",
  icon: BookmarkCheck
}, {
  title: "Community of peers",
  description: "Stay accountable and share insights with like-minded professionals.",
  icon: Sparkles
}, {
  title: "Certificate of completion",
  description: "Share your new skills with your employer or on LinkedIn.",
  icon: CheckCircle2
}, {
  title: "Maven Guarantee",
  description: "This course is backed by the Maven Guarantee. Students are eligible for a full refund up until the halfway point of the course.",
  icon: ShieldCheck
}];
const cohortModules = [{
  week: "Nov 14—Nov 15",
  title: "Welcome to Vibe Coding Bootcamp",
  items: []
}, {
  week: "Nov 14—Nov 15",
  title: "Things to Prep For the Live Session",
  items: []
}, {
  week: "Nov 14—Nov 15",
  title: "What is Vibe Coding",
  items: []
}, {
  week: "Nov 14—Nov 15",
  title: "What are the tools to use for Vibe Coding",
  items: []
}, {
  week: "Nov 14—Nov 15",
  title: "How to Leverage Vibe coding in your workflows",
  items: ["1 item"]
}, {
  week: "Nov 14—Nov 15",
  title: "Vibe Code Demos",
  items: []
}, {
  week: "Nov 15",
  title: "Vibe Coding Bootcamp Live Session",
  items: ["Sat 11/15 7:00 PM—8:30 PM (UTC)"]
}];
const faqs = [{
  question: "I'm not technical, is this right for me?",
  answer: "Absolutely! This course is designed for non-technical professionals. You don't need any coding background to get started. We'll guide you through everything step-by-step, from setting up Cursor to building your first apps with AI assistance."
}, {
  question: "Is it beginner-friendly?",
  answer: "Yes, 100% beginner-friendly! We start from the very basics and build up gradually. Whether you're completely new to coding or have some experience, our structured approach ensures you'll learn at your own pace with hands-on projects and clear guidance."
}, {
  question: "Is the course self-paced?",
  answer: "Yes! This course is completely self-paced. You have lifetime access to all course materials, so you can learn at your own speed and on your own schedule. You have full flexibility to work through the content whenever it's convenient for you."
}, {
  question: "Can I finish this course in one month? and cancel anytime?",
  answer: "The course is designed to be completed in approximately one month with consistent effort and dedication. However, completion time may vary based on individual learning pace, time availability, and commitment level. You can cancel your subscription anytime with no questions asked. There are no long-term commitments or cancellation fees. Please note that course completion depends on your individual effort and participation."
}, {
  question: "If you have any questions, how do I reach out?",
  answer: "If you have any questions, you reach out to us directly at hello@theaidesignacademy.com."
}, {
  question: "What's the best way to reach out?",
  answer: "The best way to reach out is via email at hello@theaidesignacademy.com. We typically respond within 24-48 hours. For urgent matters, please include 'URGENT' in your subject line."
}];
const companyLogos = [{
  src: JPMorganLogo,
  alt: "JPMorgan Chase & Co."
}, {
  src: IntercomLogo,
  alt: "Intercom"
}, {
  src: HubspotLogo,
  alt: "HubSpot"
}, {
  src: MetaLogo,
  alt: "Meta"
}, {
  src: GoogleLogo,
  alt: "Google"
}];
const galleryImages = [WorkshopImage1, WorkshopImage2, WorkshopImage3];
const VibeCodingAccelerator = () => {
  return <>
      <Helmet>
        <title>Vibe Coding with Cursor</title>
        <meta name="description" content="Master vibe coding and design engineering. Learn to ship AI-powered products, build a standout portfolio, and command top-tier roles." />
        <style>{`
          @keyframes blurEntrance {
            0% {
              filter: blur(10px);
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              filter: blur(0);
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes blurEntranceSubtle {
            0% {
              filter: blur(5px);
              opacity: 0;
              transform: translateY(5px);
            }
            100% {
              filter: blur(0);
              opacity: 1;
              transform: translateY(0);
            }
          }
          .blur-entrance {
            animation: blurEntrance 0.8s ease-out forwards;
          }
          .blur-entrance-subtle {
            animation: blurEntranceSubtle 0.6s ease-out 0.6s forwards;
            opacity: 0;
          }
          .blur-entrance-subtle-delayed {
            animation: blurEntranceSubtle 0.6s ease-out 0.3s forwards;
            opacity: 0;
          }
        `}</style>
      </Helmet>

      <div className="bg-[#0E0E10] text-white selection:bg-white/20">
        <Navigation />
        
        <main className="pb-20">
          {/* Hero */}
          <section className="relative overflow-hidden border-b border-white/5 bg-[#0E0E10] py-20 sm:py-32 md:py-40 lg:py-48">
            {/* Shader background */}
            <DotScreenShader />

            <style>{`
              @keyframes bounceAround {
                0%, 100% {
                  transform: translate(0, 0) rotate(0deg);
                }
                10% {
                  transform: translate(30px, -20px) rotate(5deg);
                }
                20% {
                  transform: translate(-20px, 30px) rotate(-5deg);
                }
                30% {
                  transform: translate(40px, 20px) rotate(3deg);
                }
                40% {
                  transform: translate(-30px, -40px) rotate(-3deg);
                }
                50% {
                  transform: translate(20px, 30px) rotate(5deg);
                }
                60% {
                  transform: translate(-40px, -20px) rotate(-5deg);
                }
                70% {
                  transform: translate(30px, 40px) rotate(3deg);
                }
                80% {
                  transform: translate(-20px, -30px) rotate(-3deg);
                }
                90% {
                  transform: translate(40px, -10px) rotate(5deg);
                }
              }
            `}</style>

            <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
              <div className="space-y-4 sm:space-y-6 text-center relative">
                <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.3] relative pt-8 sm:pt-0 blur-entrance">
                  Update on the Vibe Coding Course.
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-white/60 mx-auto max-w-2xl px-2 leading-relaxed font-medium blur-entrance-subtle-delayed">
                  <span className="text-white font-semibold">Note:</span> Vibe Coding Course has now been moved under the Cohort.<br />
                  If you've taken this course, you'll be given a seat in the cohort reach out to us at hello@theaidesignacademy.com.
                </p>
                {/* Login button removed */}
                </div>
                {/* Note */}
                <div className="mt-8 sm:mt-10 max-w-2xl mx-auto">
                  <div className="bg-white/20 rounded-lg border border-white/20 p-4 sm:p-6">
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed text-center">
                      <strong className="text-white">Note:</strong> This course is now moved under Cohort.{" "}
                      <a 
                        href="/" 
                        className="text-white hover:text-white/80 underline font-medium transition-colors inline-flex items-center gap-1"
                      >
                        Join the cohort here
                        <ArrowRight className="h-4 w-4" />
                      </a>
                      .
                    </p>
                  </div>
                </div>
                {/* Old Note - Hidden */}
                <div className="hidden mt-8 sm:mt-10 max-w-2xl mx-auto">
                  <div className="bg-white/100 rounded-lg border border-white/20 p-4 sm:p-6">
                    <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
                      <strong className="text-gray-900">Note:</strong> This course has now been moved to{" "}
                      AI Academy membership
                      . Join the membership to access this course and more. If you have already paid for the course, log in from{" "}
                      <a 
                        href="https://ai-design-academy-s-school.teachable.com/l/pdp/vibe-coding-101-course-build-your-first-ai-app-in-days" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 underline font-medium transition-colors"
                      >
                        here
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
          </section>
        </main>
      </div>
    </>;
};
export default VibeCodingAccelerator;
