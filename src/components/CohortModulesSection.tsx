import { Card } from "@/components/ui/card";
import { MeshGradient } from "@paper-design/shaders-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

// AI Cohort modules (original)
const aiCohortModules = [{
  number: "1",
  week: "Week 1",
  title: "Master AI Foundation",
  description: "Deep dive into AI fundamentals – understand core concepts, build your vocabulary, and learn to design intelligent systems with clarity and confidence.",
  colors: ["#FF6B6B", "#FFD93D", "#FF8E53", "#FF6B9D"]
}, {
  number: "2",
  week: "Week 2",
  title: "AI Product Design Strategy",
  description: "Identify AI use cases and design human-centered solutions that drive business impact and value.",
  colors: ["#4ECDC4", "#87CEEB", "#DA70D6", "#BA55D3"]
}, {
  number: "3",
  week: "Week 3",
  title: "Build AI Agents",
  description: "Learn how to design AI agent systems and workflows from a UX perspective. Get step-by-step frameworks and processes to create and prototype your own agents, and use tools like n8n to build AI agents that actually work.",
  colors: ["#95E1D3", "#F38181", "#FCE38A", "#AAE3F0"]
}, {
  number: "4",
  week: "Week 4",
  title: "Learn vibe coding and Prototyping with AI",
  description: "Learn how to create functional prototypes with Lovable and Cursor to effectively communicate your vision. Master efficient vibe-coding workflows and build AI apps using modern AI coding tools.",
  colors: ["#FF6B6B", "#FF8E53", "#FFD93D", "#FFA07A"]
}, {
  number: "5",
  week: "Bonus",
  title: "Get 1:1 Coaching and Consulting",
  description: "Get one-on-one coaching with John to overcome challenges, personalize your learning goals, ask any questions, and get clear guidance to unlock your next step.",
  colors: ["#C44569", "#D68FD6", "#E3A0D3", "#FF8CC8"]
}, {
  number: "6",
  week: "Bonus",
  title: "Guest Speakers From Top Companies",
  description: "Get the opportunity to ask questions to designers from top companies such as Meta, Amazon, and more. Learn from their expertise and experiences as AI product designers.",
  colors: ["#4F4F8C", "#5F7AAB", "#7FA8D5", "#87CEEB"]
}];

// Vibe Coding Course modules
const vibeCodingModules = [{
  number: "0",
  week: "Week 0",
  title: "Cursor Setup and Environment Setup",
  description: "An IDE can be unfamiliar territory for non-technical folks and designers, but we'll make it easy for you to set up with our tested getting started prompts and lessons. Starting is always a challenge, but we'll make it simple so you can get up and running quickly.",
  colors: ["#4ECDC4", "#87CEEB", "#DA70D6", "#BA55D3"]
}, {
  number: "1",
  week: "Week 1",
  title: "Prototyping Mobile Apps with AI",
  description: "Prototype mobile apps and interfaces with interactions on touch interfaces and everything. They open up more opportunities for you to design and prototype mobile apps.",
  colors: ["#95E1D3", "#F38181", "#FCE38A", "#AAE3F0"]
}, {
  number: "2",
  week: "Week 2",
  title: "Building Web Apps with Gen AI Capabilities",
  description: "Build your first web app powered by Gen-AI capabilities and create an AI recipe generator powered by OpenAI LLM and OpenAI API using Cursor and translate your Figma design into a functional prototype with AI.",
  colors: ["#FF6B6B", "#FF8E53", "#FFD93D", "#FFA07A"]
}];
const vibeCodingBonusModule = {
  number: "B",
  week: "Bonus",
  title: "The first 20 would get a 1:1 with 30 minutes with John",
  description: "The first 20 get a 1:1 with John for AI journey guidance and mentorship.",
  colors: ["#C44569", "#D68FD6", "#E3A0D3", "#FF8CC8"]
};
export const CohortModulesSection = () => {
  const location = useLocation();
  const isVibeCodingCourse = location.pathname === "/";

  // Use different modules based on the page
  const modules = isVibeCodingCourse ? vibeCodingModules : aiCohortModules;
  const bonusModule = isVibeCodingCourse ? vibeCodingBonusModule : null;

  // Determine heading and description based on page
  const heading = isVibeCodingCourse ? "This Is How Your Journey Will Look After Enrolling" : "What We Have for You";
  const description = isVibeCodingCourse ? "Modules are released weekly over four weeks, giving you time to complete each milestone without feeling overwhelmed." : null;

  // For AI Cohort, show all 6 modules in a 3-column grid
  // For Vibe Coding, show 4 modules (3 weeks + bonus) in a 2x2 grid
  const gridClass = isVibeCodingCourse ? "grid grid-cols-1 md:grid-cols-2 md:grid-rows-2" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  return <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-black text-white overflow-hidden">
      
    </section>;
};