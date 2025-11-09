import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Code2, Zap, Users, Trophy, ArrowRight, Sparkles, Play, Rocket, Database, Globe, TrendingUp, Briefcase, DollarSign, Home, Menu, GraduationCap, ChevronDown, ChevronUp, Lock, Star, Bookmark, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HowItWorks } from "@/components/HowItWorks";
import { CallToAction } from "@/components/CallToAction";
import { Helmet } from "react-helmet";
import LindaImage from "@/assets/Linda.jpeg";
import SnehImage from "@/assets/Sneh.webp";
import SonaliImage from "@/assets/Sonali.jpeg";
import { CompanyLogosSection } from "@/components/CompanyLogosSection";
import { MeshGradient } from "@paper-design/shaders-react";

interface Lesson {
  id: number;
  title: string;
  videoId: string;
  unlocked: boolean;
  thumbnail?: string;
  progress?: number; // Progress percentage (0-100)
}

interface SubTopic {
  id: number;
  title: string;
  lessons: Lesson[];
}

interface CourseModule {
  id: number;
  number: string;
  title: string;
  description: string;
  week: string;
  colors: string[];
  topics: string[];
  project: string;
  subTopics: SubTopic[];
  expanded: boolean;
}

const VibeCodingAccelerator = () => {
  const [activeView, setActiveView] = useState<"home" | "course">("home");
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [selectedSubTopic, setSelectedSubTopic] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const howItWorks = [
    {
      title: "Self-Paced Learning",
      description: "Binge the 8 modules anytime"
    },
    {
      title: "Weekly Live Q&As",
      description: "Real feedback and troubleshooting"
    },
    {
      title: "Community Access",
      description: "Private group for sharing builds and reviews"
    }
  ];

  const [courseModules, setCourseModules] = useState<CourseModule[]>([
    {
      id: 1,
      number: "01",
      title: "HTML, CSS, and JavaScript Foundation",
      description: "Learn the fundamentals of web development",
      week: "Week 1",
      colors: ["#FF6B6B", "#FFD93D", "#FF8E53", "#FF6B9D"],
      topics: [
        "HTML structure and semantic markup",
        "CSS styling, layout, and responsive design",
        "JavaScript fundamentals: variables, functions, and DOM manipulation",
        "Building interactive web pages",
        "Understanding how the web works"
      ],
      project: "Weather App: Build a weather application using HTML, CSS, and JavaScript",
      expanded: false,
      subTopics: [
        {
          id: 1,
          title: "HTML",
          lessons: [
            { id: 1, title: "HTML Fundamentals", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg`, progress: 0 },
            { id: 2, title: "HTML Structure & Semantics", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg`, progress: 0 },
            { id: 3, title: "Forms & Inputs", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg`, progress: 0 },
            { id: 72, title: "HTML5 Features", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg`, progress: 0 },
            { id: 73, title: "Accessibility Basics", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg`, progress: 0 },
          ]
        },
        {
          id: 2,
          title: "CSS",
          lessons: [
            { id: 4, title: "CSS Basics", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 5, title: "Layout & Flexbox", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 6, title: "Responsive Design", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 74, title: "CSS Grid", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 75, title: "Animations & Transitions", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 76, title: "CSS Variables", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        },
        {
          id: 3,
          title: "JavaScript",
          lessons: [
            { id: 7, title: "JavaScript Basics", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 8, title: "DOM Manipulation", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 9, title: "Functions & Events", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 77, title: "Async JavaScript", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 78, title: "ES6+ Features", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        }
      ]
    },
    {
      id: 2,
      number: "02",
      title: "Learn the Foundation of React",
      description: "Master component-based development",
      week: "Week 2",
      colors: ["#4ECDC4", "#87CEEB", "#DA70D6", "#BA55D3"],
      topics: [
        "React fundamentals: components, props, and state",
        "React hooks: useState, useEffect, and custom hooks",
        "Building reusable UI components",
        "Component architecture and composition",
        "Handling user interactions and events"
      ],
      project: "E-commerce Product Page: Build a dynamic product page with React",
      expanded: false,
      subTopics: [
        {
          id: 4,
          title: "React",
          lessons: [
            { id: 10, title: "React Components", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 11, title: "React Hooks", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 12, title: "State Management", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 13, title: "Props & Composition", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 79, title: "Custom Hooks", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 80, title: "Context API", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        }
      ]
    },
    {
      id: 3,
      number: "03",
      title: "UI Animation with React Motion",
      description: "Master animations and motion design in React",
      week: "Week 3",
      colors: ["#95E1D3", "#F38181", "#FCE38A", "#AAE3F0"],
      topics: [
        "Framer Motion fundamentals and animation principles",
        "Creating smooth transitions and animations",
        "Page transitions and layout animations",
        "Gesture-based interactions and drag controls",
        "Performance optimization for animations"
      ],
      project: "Chat Interface Animations: Build UI animations for chat interfaces to communicate feedback and emotions using React Motion",
      expanded: false,
      subTopics: [
        {
          id: 5,
          title: "Framer Motion Basics",
          lessons: [
            { id: 14, title: "Introduction to Framer Motion", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 15, title: "Basic Animations", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        },
        {
          id: 6,
          title: "Advanced Animations",
          lessons: [
            { id: 16, title: "Complex Transitions", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 17, title: "Gesture Controls", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        }
      ]
    },
    {
      id: 4,
      number: "04",
      title: "Advanced Tailwind and Styling",
      description: "Deepen your Tailwind skills with advanced patterns",
      week: "Week 4",
      colors: ["#FF6B6B", "#FF8E53", "#FFD93D", "#FFA07A"],
      topics: [
        "Advanced Tailwind patterns and techniques",
        "Custom configurations and plugins",
        "Animations and transitions",
        "Dark mode and theming",
        "Building production-ready, polished designs"
      ],
      project: "Apple Website Recreation: Recreate the Apple website with Tailwind CSS",
      expanded: false,
      subTopics: [
        {
          id: 7,
          title: "Tailwind Fundamentals",
          lessons: [
            { id: 18, title: "Tailwind Basics", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 19, title: "Utility Classes", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        },
        {
          id: 8,
          title: "Advanced Tailwind",
          lessons: [
            { id: 20, title: "Custom Configurations", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 21, title: "Responsive Design", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        },
        {
          id: 9,
          title: "Styling Patterns",
          lessons: [
            { id: 22, title: "Component Patterns", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 23, title: "Dark Mode", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        }
      ]
    },
    {
      id: 5,
      number: "05",
      title: "Learning Next.js",
      description: "Build full-stack applications with Next.js",
      week: "Week 5",
      colors: ["#C44569", "#D68FD6", "#E3A0D3", "#FF8CC8"],
      topics: [
        "Next.js fundamentals: pages, routing, and layouts",
        "Server-side rendering and static site generation",
        "API routes and data fetching",
        "Image optimization and performance",
        "Deployment and production optimization"
      ],
      project: "Image Generation App: Build an image generation app powered by OpenAI's API using Next.js",
      expanded: false,
      subTopics: [
        {
          id: 10,
          title: "Next.js Basics",
          lessons: [
            { id: 24, title: "Getting Started with Next.js", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 25, title: "Pages & Routing", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        },
        {
          id: 11,
          title: "Server-Side Rendering",
          lessons: [
            { id: 26, title: "SSR Fundamentals", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 27, title: "Static Site Generation", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        },
        {
          id: 12,
          title: "API Routes",
          lessons: [
            { id: 28, title: "Creating API Routes", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 29, title: "Data Fetching", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        }
      ]
    },
    {
      id: 6,
      number: "06",
      title: "TypeScript",
      description: "Master TypeScript for type-safe development",
      week: "Week 6",
      colors: ["#4F4F8C", "#5F7AAB", "#7FA8D5", "#87CEEB"],
      topics: [
        "TypeScript fundamentals and type system",
        "Interfaces, types, and type annotations",
        "Type safety with React and Next.js",
        "Advanced TypeScript features and patterns",
        "Building type-safe applications"
      ],
      project: "Minimal Note-Taking App: Build a minimal note-taking application using TypeScript",
      expanded: false,
      subTopics: [
        {
          id: 13,
          title: "TypeScript Basics",
          lessons: [
            { id: 30, title: "Introduction to TypeScript", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 31, title: "Types & Interfaces", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        },
        {
          id: 14,
          title: "Advanced TypeScript",
          lessons: [
            { id: 32, title: "Generics", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 33, title: "Type Utilities", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        },
        {
          id: 15,
          title: "TypeScript with React",
          lessons: [
            { id: 34, title: "React + TypeScript", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 35, title: "Typing Components", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        }
      ]
    },
    {
      id: 7,
      number: "07",
      title: "Visual Design and UI Design Principles",
      description: "Master design fundamentals and visual principles",
      week: "Week 7",
      colors: ["#E74C3C", "#EC9281", "#F5C5BA", "#FDF0ED"],
      topics: [
        "Design fundamentals and principles",
        "UI/UX best practices and patterns",
        "Visual hierarchy and composition",
        "Typography, color theory, and spacing",
        "Creating cohesive design systems"
      ],
      project: "UI Redesign Challenge: Identify and audit UI mistakes, and redesign them based on the best design principles",
      expanded: false,
      subTopics: [
        {
          id: 16,
          title: "Design Fundamentals",
          lessons: [
            { id: 36, title: "Visual Hierarchy", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 37, title: "Color Theory", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        },
        {
          id: 17,
          title: "UI/UX Principles",
          lessons: [
            { id: 38, title: "User Experience Design", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 39, title: "Interface Patterns", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        },
        {
          id: 18,
          title: "Typography & Spacing",
          lessons: [
            { id: 40, title: "Typography Basics", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 41, title: "Spacing Systems", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        }
      ]
    },
    {
      id: 8,
      number: "08",
      title: "Vibe Coding Session",
      description: "Master vibe coding with Lovable and Cursor",
      week: "Week 8",
      colors: ["#9B59B6", "#BB8FCE", "#D7BDE2", "#F4ECF7"],
      topics: [
        "Vibe coding fundamentals",
        "Building with Lovable",
        "Productivity with Cursor",
        "AI-powered development workflows",
        "Rapid prototyping and iteration"
      ],
      project: "Vibe Coding Project: Build a complete application using Lovable and Cursor",
      expanded: false,
      subTopics: [
        {
          id: 23,
          title: "Lovable",
          lessons: [
            { id: 82, title: "Getting Started with Lovable", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg`, progress: 0 },
            { id: 83, title: "Building Components", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg`, progress: 0 },
            { id: 84, title: "Advanced Lovable Features", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg`, progress: 0 },
          ]
        },
        {
          id: 24,
          title: "Cursor",
          lessons: [
            { id: 85, title: "Introduction to Cursor", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg`, progress: 0 },
            { id: 86, title: "AI-Assisted Coding", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg`, progress: 0 },
            { id: 87, title: "Workflow Optimization", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg`, progress: 0 },
          ]
        }
      ]
    },
    {
      id: 9,
      number: "09",
      title: "Figma Course",
      description: "Master design tools and prototyping",
      week: "Week 9",
      colors: ["#FF6B6B", "#FFD93D", "#FF8E53", "#FF6B9D"],
      topics: [
        "Figma interface and tools",
        "Creating designs and components",
        "Prototyping and interactions",
        "Design handoff and collaboration",
        "Advanced Figma techniques"
      ],
      project: "Figma Project: Design and prototype a complete interface using Figma",
      expanded: false,
      subTopics: [
        {
          id: 19,
          title: "Figma Basic",
          lessons: [
            { id: 42, title: "Figma Interface", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 43, title: "Creating Designs", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        },
        {
          id: 20,
          title: "Figma 3D",
          lessons: [
            { id: 44, title: "Component Library", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 45, title: "Design Systems", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        },
        {
          id: 21,
          title: "Figma Course",
          lessons: [
            { id: 46, title: "Prototyping Basics", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 47, title: "Interactive Prototypes", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        }
      ]
    },
    {
      id: 10,
      number: "10",
      title: "Shift UI Course",
      description: "Convert designs to code efficiently",
      week: "Week 10",
      colors: ["#4ECDC4", "#87CEEB", "#DA70D6", "#BA55D3"],
      topics: [
        "Shift UI fundamentals",
        "Converting Figma designs to code",
        "Design-to-code workflows",
        "Component generation and optimization",
        "Streamlining the design handoff process"
      ],
      project: "Shift UI Project: Convert Figma designs to production-ready React code using Shift UI",
      expanded: false,
      subTopics: [
        {
          id: 22,
          title: "Shift UI Introduction",
          lessons: [
            { id: 48, title: "Getting Started", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 49, title: "Basic Workflow", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        },
        {
          id: 23,
          title: "Design to Code",
          lessons: [
            { id: 50, title: "Converting Designs", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 51, title: "Code Optimization", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        },
        {
          id: 24,
          title: "Advanced Techniques",
          lessons: [
            { id: 52, title: "Component Generation", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 53, title: "Best Practices", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        }
      ]
    },
    {
      id: 11,
      number: "11",
      title: "Build Your Project & Create Your Portfolio",
      description: "Apply everything you've learned to build your portfolio",
      week: "Week 11",
      colors: ["#2ECC71", "#58D68D", "#A9DFBF", "#E8F8F5"],
      topics: [
        "Portfolio design and structure",
        "Showcasing your projects effectively",
        "Deployment to Vercel",
        "Optimizing for performance and SEO",
        "Presenting your work professionally"
      ],
      project: "Design Engineering Portfolio: Create and deploy your professional portfolio showcasing all your work",
      expanded: false,
      subTopics: [
        {
          id: 25,
          title: "Portfolio Design",
          lessons: [
            { id: 54, title: "Portfolio Structure", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 55, title: "Showcasing Projects", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        },
        {
          id: 26,
          title: "Deployment",
          lessons: [
            { id: 56, title: "Deploying to Vercel", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 57, title: "Performance Optimization", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        },
        {
          id: 27,
          title: "SEO & Presentation",
          lessons: [
            { id: 58, title: "SEO Best Practices", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 59, title: "Professional Presentation", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        }
      ]
    },
    {
      id: 12,
      number: "12",
      title: "Career Roadmap",
      description: "Plan your design engineering career path",
      week: "Week 12",
      colors: ["#F39C12", "#F7C869", "#FDE4B7", "#FEF9E7"],
      topics: [
        "Design engineering career paths and opportunities",
        "Identifying your career goals and direction",
        "Understanding the design engineering job market",
        "Skill development and career progression",
        "Building a strategic career plan"
      ],
      project: "Career Plan: Develop your comprehensive career roadmap",
      expanded: false,
      subTopics: [
        {
          id: 28,
          title: "Career Planning",
          lessons: [
            { id: 60, title: "Career Paths", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 61, title: "Goal Setting", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        },
        {
          id: 29,
          title: "Job Market",
          lessons: [
            { id: 62, title: "Understanding the Market", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 63, title: "Skill Development", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        }
      ]
    },
    {
      id: 12,
      number: "12",
      title: "Building Your Personal Brand",
      description: "Establish your professional presence and online identity",
      week: "Week 12",
      colors: ["#F39C12", "#F7C869", "#FDE4B7", "#FEF9E7"],
      topics: [
        "Building a strong personal brand and online presence",
        "Networking strategies and community building",
        "Portfolio optimization and showcasing your work",
        "Content creation and thought leadership",
        "Landing your dream role or starting your own practice"
      ],
      project: "Personal Brand Strategy: Create and execute your personal branding plan",
      expanded: false,
      subTopics: [
        {
          id: 30,
          title: "Personal Branding",
          lessons: [
            { id: 64, title: "Building Your Brand", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 65, title: "Online Presence", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        },
        {
          id: 31,
          title: "Networking & Content",
          lessons: [
            { id: 66, title: "Networking Strategies", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 67, title: "Content Creation", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        }
      ]
    },
    {
      id: 13,
      number: "13",
      title: "Final Project Challenge",
      description: "Build your final project and share it with the world",
      week: "Week 13",
      colors: ["#9B59B6", "#BB9DCC", "#DCD2E3", "#F3EEF8"],
      topics: [
        "Reviewing project demos and gathering inspiration",
        "Ideating and planning your final project",
        "Building your project from concept to completion",
        "Optimizing and polishing your work",
        "Sharing your project on social media and building your presence"
      ],
      project: "Final Project: Build, deploy, and share your showcase project on social media",
      expanded: false,
      subTopics: [
        {
          id: 32,
          title: "Project Planning",
          lessons: [
            { id: 68, title: "Ideation & Planning", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 69, title: "Project Structure", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        },
        {
          id: 33,
          title: "Building & Deployment",
          lessons: [
            { id: 70, title: "Building Your Project", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
            { id: 71, title: "Deployment & Sharing", videoId: "6vnUzMOrAPw", unlocked: false, thumbnail: `https://img.youtube.com/vi/6vnUzMOrAPw/maxresdefault.jpg` },
          ]
        }
      ]
    }
  ]);

  // Memoize course modules with unlocked status based on enrollment
  const modulesWithEnrollmentStatus = useMemo(() => {
    if (!courseModules || courseModules.length === 0) {
      return [];
    }
    return courseModules.map(module => ({
      ...module,
      subTopics: module.subTopics.map(subTopic => ({
        ...subTopic,
        lessons: subTopic.lessons.map(lesson => ({
          ...lesson,
          unlocked: isEnrolled ? true : false
        }))
      }))
    }));
  }, [courseModules, isEnrolled]);

  // Use the computed modules instead of courseModules throughout
  const displayModules = modulesWithEnrollmentStatus || [];

  // Keep modules for the landing page display
  const modules = displayModules;

  const allLessons = displayModules.flatMap(module => 
    module.subTopics.flatMap(subTopic => subTopic.lessons)
  ) || [];

  const currentModule = selectedModule ? displayModules.find(m => m.id === selectedModule) : null;
  const currentSubTopic = currentModule && selectedSubTopic 
    ? currentModule.subTopics.find(st => st.id === selectedSubTopic) 
    : null;

  const selectedVideo = allLessons.find(lesson => lesson.id === selectedLesson);

  const handleLessonClick = (lesson: Lesson) => {
    if (lesson.unlocked) {
      setSelectedLesson(lesson.id);
      setActiveView("course");
    }
  };

  const handleModuleClick = (moduleId: number) => {
    setCourseModules(modules =>
      modules.map(module => {
        if (module.id === moduleId) {
          return { ...module, expanded: !module.expanded };
        } else {
          return { ...module, expanded: false };
        }
      })
    );
  };

  const handleSubTopicClick = (moduleId: number, subTopicId: number) => {
    setSelectedModule(moduleId);
    setSelectedSubTopic(subTopicId);
    setSelectedLesson(null); // Clear lesson selection to show sub-topic cards
    setActiveView("course");
  };

  const careerBenefits = [
    {
      icon: Sparkles,
      title: "1️⃣ Creative Freedom",
      description: "Turn your ideas into real products — fast. No more waiting on developers. No more static mockups. You'll learn to design, code, and ship your own apps — and finally build the ideas sitting in your Figma files."
    },
    {
      icon: TrendingUp,
      title: "2️⃣ Career Leverage",
      description: "Design Engineers get paid more — and get noticed faster. Many earn $200K–$400K+. You'll instantly stand out as someone who bridges design and engineering. Whether you want to land a dream job, freelance for top startups, or launch your own thing — this skillset puts you in the top 1%."
    },
    {
      icon: Rocket,
      title: "3️⃣ Future-Proof Advantage",
      description: "AI is changing everything — learn the skills that won't get replaced. You'll master the foundations that make new tools work for you, not against you. Design Engineers don't fear AI — they use it to ship faster and smarter."
    }
  ];

  const outcomes = [
    "Master HTML, CSS, and JavaScript fundamentals",
    "Build dynamic applications with React",
    "Create beautiful UIs with Tailwind CSS",
    "Develop full-stack apps with Next.js",
    "Deploy your projects to production",
    "Create a professional design engineering portfolio"
  ];

  const faqs = [
    {
      question: "Do I need coding experience?",
      answer: "No. We start from the basics and build up. This is designed for designers who want to learn to build real products."
    },
    {
      question: "How much time weekly?",
      answer: "Plan for 5–8 hours per week. It's self‑paced, so you can move faster or slower based on your schedule."
    },
    {
      question: "When can I join?",
      answer: "Anytime — it's evergreen. You get instant access to all modules when you enroll."
    },
    {
      question: "Will I get feedback?",
      answer: "Yes. Share work in the private community for instructor and peer feedback. We also run periodic review sessions."
    },
    {
      question: "Payment plans?",
      answer: "Yes. A flexible plan is available: 3 × $249."
    }
  ];

  const testimonials = [
    {
      name: "Linda Eliasen",
      role: "Product Designer",
      content: "John is an incredible mentor. He taught me to build a prototype in 2 hours—something that used to take 2 weeks. His guidance transformed how I approach design and development.",
      initials: "LE",
      image: LindaImage
    },
    {
      name: "Sneh",
      role: "UX Designer",
      content: "John is calm, insightful, and deeply attuned to emerging design trends. His strategic frameworks and coaching helped me think like both a strategist and a solutionist.",
      initials: "S",
      image: SnehImage
    },
    {
      name: "Sonali",
      role: "Sr. Product Designer at JPMorgan Chase",
      content: "John emphasizes practical application over lectures, which made the material immediately useful. I'm more confident in the subject and excited to apply this foundation to my career.",
      initials: "So",
      image: SonaliImage
    }
  ];

  return (
    <>
      <Helmet>
        <title>Become a Design Engineer - Design Engineering Course</title>
        <meta name="description" content="Master HTML, CSS, JavaScript, React, Tailwind, and Next.js to become a design engineer. Build your portfolio and accelerate your career." />
      </Helmet>

      <div className="min-h-screen bg-black flex">
        {/* Sidebar - Always Visible and Fixed */}
        <aside className={`${sidebarCollapsed ? 'w-20' : 'w-80'} border-r border-white/10 bg-black/50 backdrop-blur-sm flex-shrink-0 hidden md:block fixed top-0 left-0 h-screen overflow-y-auto transition-all duration-300`}>
          <div className="h-full flex flex-col">
            {/* Logo/Header */}
            <div className="p-6 border-b border-white/10 relative">
              {!sidebarCollapsed ? (
                <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <img src="/logo.png" alt="AI Design Academy" className="w-6 h-6" />
                  <span className="font-bold text-lg text-white">AI Design Academy</span>
                </a>
              ) : (
                <div className="flex justify-center">
                  <img src="/logo.png" alt="AI Design Academy" className="w-6 h-6" />
                </div>
              )}
              {/* Collapse Toggle Button */}
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="absolute top-6 right-3 w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 transition-colors"
                aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                {sidebarCollapsed ? (
                  <ChevronRight className="w-4 h-4 text-white/60" />
                ) : (
                  <ChevronLeft className="w-4 h-4 text-white/60" />
                )}
              </button>
            </div>
            
            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
              <button
                onClick={() => setActiveView("home")}
                className={`w-full ${sidebarCollapsed ? 'p-3 justify-center' : 'p-3'} flex items-center gap-3 text-left transition-colors ${
                  activeView === "home" ? "bg-primary/20 text-primary font-medium" : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
                title={sidebarCollapsed ? "Home" : undefined}
              >
                {!sidebarCollapsed && <span className="text-sm">Home</span>}
              </button>

              {!sidebarCollapsed && (
                <>
              <div className="pt-4">
                <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider px-3 mb-4">CORE SKILLS</h3>
                <div className="space-y-1 mb-6">
                  {displayModules.slice(0, 6).map((module) => (
                    <div key={module.id} className="mb-1">
                      <button
                        onClick={() => handleModuleClick(module.id)}
                          className={`w-full p-3 flex items-center justify-between transition-colors ${
                          module.expanded ? "bg-white/5 text-white font-medium" : "text-white/60 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <span className="text-sm leading-tight text-left break-words">{module.number}: {module.title}</span>
                        </div>
                          {module.expanded ? (
                          <ChevronDown className="w-4 h-4 text-white/40 flex-shrink-0 ml-2" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-white/40 flex-shrink-0 ml-2" />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {module.expanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                              mass: 0.5
                            }}
                            className="overflow-hidden relative"
                          >
                            {/* Vertical line */}
                            <div className="absolute left-7 top-0 bottom-0 w-px bg-white/10"></div>
                            <div className="pl-8 py-1 space-y-1">
                              {module.subTopics.map((subTopic) => (
                                <button
                                  key={subTopic.id}
                                  onClick={() => handleSubTopicClick(module.id, subTopic.id)}
                                  className={`w-full p-2 flex items-center text-left transition-colors ${
                                    selectedModule === module.id && selectedSubTopic === subTopic.id ? "bg-primary/10 text-primary font-medium" : "text-white/60 hover:bg-white/5 hover:text-white"
                                  }`}
                                >
                                  <span className="text-sm">{subTopic.title}</span>
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider px-3 mb-4">DESIGN</h3>
                <div className="space-y-1 mb-6">
                  {/* Visual Design (module 7 at index 6) and Figma Course (module 9 at index 8) */}
                  {displayModules.filter((module, index) => index === 6 || index === 8).map((module) => (
                    <div key={module.id} className="mb-1">
                      <button
                        onClick={() => handleModuleClick(module.id)}
                          className={`w-full p-3 flex items-center justify-between transition-colors ${
                          module.expanded ? "bg-white/5 text-white font-medium" : "text-white/60 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <span className="text-sm leading-tight text-left break-words">{module.number}: {module.title}</span>
                        </div>
                          {module.expanded ? (
                          <ChevronDown className="w-4 h-4 text-white/40 flex-shrink-0 ml-2" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-white/40 flex-shrink-0 ml-2" />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {module.expanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                              mass: 0.5
                            }}
                            className="overflow-hidden relative"
                          >
                            {/* Vertical line */}
                            <div className="absolute left-7 top-0 bottom-0 w-px bg-white/10"></div>
                            <div className="pl-8 py-1 space-y-1">
                              {module.subTopics.map((subTopic) => (
                                <button
                                  key={subTopic.id}
                                  onClick={() => handleSubTopicClick(module.id, subTopic.id)}
                                  className={`w-full p-2 flex items-center text-left transition-colors ${
                                    selectedModule === module.id && selectedSubTopic === subTopic.id ? "bg-primary/10 text-primary font-medium" : "text-white/60 hover:bg-white/5 hover:text-white"
                                  }`}
                                >
                                  <span className="text-sm">{subTopic.title}</span>
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider px-3 mb-4">VIBE CODING</h3>
                <div className="space-y-1 mb-6">
                  {displayModules.slice(7, 8).map((module) => (
                    <div key={module.id} className="mb-1">
                      <button
                        onClick={() => handleModuleClick(module.id)}
                          className={`w-full p-3 flex items-center justify-between transition-colors ${
                          module.expanded ? "bg-white/5 text-white font-medium" : "text-white/60 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <span className="text-sm leading-tight text-left break-words">{module.number}: {module.title}</span>
                        </div>
                          {module.expanded ? (
                          <ChevronDown className="w-4 h-4 text-white/40 flex-shrink-0 ml-2" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-white/40 flex-shrink-0 ml-2" />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {module.expanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                              mass: 0.5
                            }}
                            className="overflow-hidden relative"
                          >
                            {/* Vertical line */}
                            <div className="absolute left-7 top-0 bottom-0 w-px bg-white/10"></div>
                            <div className="pl-8 py-1 space-y-1">
                              {module.subTopics.map((subTopic) => (
                                <button
                                  key={subTopic.id}
                                  onClick={() => handleSubTopicClick(module.id, subTopic.id)}
                                  className={`w-full p-2 flex items-center text-left transition-colors ${
                                    selectedModule === module.id && selectedSubTopic === subTopic.id ? "bg-primary/10 text-primary font-medium" : "text-white/60 hover:bg-white/5 hover:text-white"
                                  }`}
                                >
                                  <span className="text-sm">{subTopic.title}</span>
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider px-3 mb-4">DESIGN TOOLS</h3>
                <div className="space-y-1 mb-6">
                  {displayModules.slice(8, 9).map((module) => (
                    <div key={module.id} className="mb-1">
                      <button
                        onClick={() => handleModuleClick(module.id)}
                          className={`w-full p-3 flex items-center justify-between transition-colors ${
                          module.expanded ? "bg-white/5 text-white font-medium" : "text-white/60 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <span className="text-sm leading-tight text-left break-words">{module.number}: {module.title}</span>
                        </div>
                          {module.expanded ? (
                          <ChevronDown className="w-4 h-4 text-white/40 flex-shrink-0 ml-2" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-white/40 flex-shrink-0 ml-2" />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {module.expanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                              mass: 0.5
                            }}
                            className="overflow-hidden relative"
                          >
                            {/* Vertical line */}
                            <div className="absolute left-7 top-0 bottom-0 w-px bg-white/10"></div>
                            <div className="pl-8 py-1 space-y-1">
                              {module.subTopics.map((subTopic) => (
                                <button
                                  key={subTopic.id}
                                  onClick={() => handleSubTopicClick(module.id, subTopic.id)}
                                  className={`w-full p-2 flex items-center text-left transition-colors ${
                                    selectedModule === module.id && selectedSubTopic === subTopic.id ? "bg-primary/10 text-primary font-medium" : "text-white/60 hover:bg-white/5 hover:text-white"
                                  }`}
                                >
                                  <span className="text-sm">{subTopic.title}</span>
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider px-3 mb-4">CAREER</h3>
                <div className="space-y-1 mb-6">
                  {displayModules.slice(10, 13).map((module) => (
                    <div key={module.id} className="mb-1">
                      <button
                        onClick={() => handleModuleClick(module.id)}
                          className={`w-full p-3 flex items-center justify-between transition-colors ${
                          module.expanded ? "bg-white/5 text-white font-medium" : "text-white/60 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <span className="text-sm leading-tight text-left break-words">{module.number}: {module.title}</span>
                        </div>
                          {module.expanded ? (
                          <ChevronDown className="w-4 h-4 text-white/40 flex-shrink-0 ml-2" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-white/40 flex-shrink-0 ml-2" />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {module.expanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                              mass: 0.5
                            }}
                            className="overflow-hidden relative"
                          >
                            {/* Vertical line */}
                            <div className="absolute left-7 top-0 bottom-0 w-px bg-white/10"></div>
                            <div className="pl-8 py-1 space-y-1">
                              {module.subTopics.map((subTopic) => (
                                <button
                                  key={subTopic.id}
                                  onClick={() => handleSubTopicClick(module.id, subTopic.id)}
                                  className={`w-full p-2 flex items-center text-left transition-colors ${
                                    selectedModule === module.id && selectedSubTopic === subTopic.id ? "bg-primary/10 text-primary font-medium" : "text-white/60 hover:bg-white/5 hover:text-white"
                                  }`}
                                >
                                  <span className="text-sm">{subTopic.title}</span>
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
              </>
              )}
            </nav>
          </div>
        </aside>

        {/* Mobile Menu Button - Bottom Footer Style */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-white/10">
          <div className="bg-black/80 backdrop-blur-xl">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="w-full h-16 bg-transparent hover:bg-white/5 text-white font-medium text-base rounded-none"
                >
                  <Menu className="h-5 w-5 mr-2" />
                  Menu
                </Button>
              </SheetTrigger>
            <SheetContent side="bottom" className="w-full h-[80vh] p-0 bg-black/95 backdrop-blur-xl border-t border-white/10 rounded-t-3xl">
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" onClick={() => setMobileMenuOpen(false)}>
                    <img src="/logo.png" alt="AI Design Academy" className="w-6 h-6" />
                    <span className="font-bold text-lg text-white">AI Design Academy</span>
                  </a>
                </div>
              </div>
              
              <nav className="p-4 space-y-1 overflow-y-auto h-full pb-20">
                <button 
                  onClick={() => { setActiveView("home"); setMobileMenuOpen(false); }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors bg-primary/20 text-primary hover:bg-white/5"
                >
                  Home
                </button>
                {displayModules.map((module) => (
                  <div key={module.id}>
                    <button
                      onClick={() => handleModuleClick(module.id)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-white/60 hover:bg-white/5 hover:text-white"
                    >
                      {module.number}: {module.title}
                    </button>
                    {module.expanded && (
                      <div className="ml-8 mt-1 space-y-1">
                        {module.subTopics.map((subTopic) => (
                          <button
                            key={subTopic.id}
                            onClick={() => { handleSubTopicClick(module.id, subTopic.id); setMobileMenuOpen(false); }}
                            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors text-white/60 hover:bg-white/5 hover:text-white"
                          >
                            {subTopic.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          </div>
        </div>

        <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${sidebarCollapsed ? 'md:ml-20' : 'md:ml-80'}`}>
        <Navigation />
        
          <main className="flex-1 overflow-y-auto bg-black">
            {activeView === "home" ? (
              <>
          {/* Hero Section - removed BlurFade wrappers */}
          <section className="relative py-16 md:py-24 overflow-hidden bg-black text-white border-b border-white/10 w-full z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-black to-black" />
            
            <div className="px-4 md:px-10 lg:px-[120px] relative z-10 w-full">
              <div className="max-w-[1200px] mx-auto">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-xs text-white/60 font-medium tracking-wider uppercase"></span>
                  </div>

                        <div className="col-span-1">
                          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 tracking-tight leading-relaxed">
                            <span className="whitespace-nowrap">Design Engineering & Vibe Coding Mastermind</span>
                            <span className="text-lg md:text-xl lg:text-2xl text-white/60 font-normal ml-2 whitespace-nowrap">
                              Master AI-powered design engineering, build real projects, and attract high-paying jobs and clients.
                            </span>
                          </h1>
                        </div>

                  {/* Enrollment Toggle for Testing */}
                  <div className="flex items-center gap-3 mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                    <Label htmlFor="enrollment-toggle" className="text-white/80 cursor-pointer">
                      Test Mode: 
                    </Label>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm ${!isEnrolled ? 'text-white' : 'text-white/60'}`}>
                        Non-Enrolled
                      </span>
                      <Switch
                        id="enrollment-toggle"
                        checked={isEnrolled}
                        onCheckedChange={setIsEnrolled}
                      />
                      <span className={`text-sm ${isEnrolled ? 'text-white' : 'text-white/60'}`}>
                        Enrolled
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="cta" 
                      size="lg"
                      className="group"
                      asChild
                    >
                      <a 
                        href="https://maven.com/productlearnio/aiproductdesignmasterycohort"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                              Apply Now
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-white/20 hover:bg-white/5 text-white"
                      asChild
                    >
                      <a href="/login">Log In</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

                {/* How It Works Section */}
                <div className="bg-black text-white border-t border-white/10">
                  <HowItWorks className="bg-black" />
                </div>

          {/* Guarantee Banner */}
          <section className="bg-black text-white border-t border-white/10 border-b border-white/10 py-6">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto flex justify-center">
                <div className="flex items-center space-x-2.5 border border-white/30 rounded-full bg-white/10 p-1 text-sm text-white">
                  <div className="bg-primary border border-primary/50 rounded-2xl px-4 py-2 text-primary-foreground flex-shrink-0">
                    <p className="font-normal">Guarantee</p>
                  </div>
                  <p className="pr-4 text-base md:text-lg font-normal">
                    If you don't land a job or a client, we work with you for free till you do.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What's Included Section */}
          <section className="py-24 md:py-32 bg-black text-white border-t border-white/10">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <div className="text-left mb-16 space-y-4">
                  <h2 
                    className="font-medium leading-[1.1] tracking-tight"
                    style={{ fontSize: '32px', lineHeight: '1.25' }}
                  >
                    What's Included
                  </h2>
                  <p className="text-xl text-white/60 max-w-2xl">
                    Everything you need to become a design engineer and land high-paying opportunities
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Card 1: Design Engineering, Design Vibe Coding and Career Courses */}
                  <Card className="p-8 bg-white/5 border-white/10 hover:border-primary/50 transition-all overflow-hidden">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      Design Engineering, Design Vibe Coding and Career Courses
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Comprehensive curriculum covering all essential skills for design engineering, vibe coding, and career development.
                    </p>
                  </Card>

                  {/* Card 2: Monthly Live Office Hours and Support */}
                  <Card className="p-8 bg-white/5 border-white/10 hover:border-primary/50 transition-all overflow-hidden">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      Monthly Live Office Hours and Support to Land the Next Opportunity
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Get personalized guidance, feedback, and support every month to help you land your next job or client opportunity.
                    </p>
                  </Card>

                  {/* Card 3: Private Community Access */}
                  <Card className="p-8 bg-white/5 border-white/10 hover:border-primary/50 transition-all overflow-hidden">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                      <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      Private Community Access
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Join a private community of design engineers, share builds, get feedback, and network with peers and mentors.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Video Section */}
          <section className="relative py-12 md:py-16 overflow-hidden bg-black text-white border-b border-white/10">
            <div className="px-4 md:px-10 lg:px-[120px] relative z-10 w-full">
              <div className="max-w-[1200px] mx-auto">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </section>

          {/* Benefits of Becoming a Design Engineer */}
          <section className="py-24 md:py-32 bg-black text-white border-t border-white/10">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16 space-y-4">
                        <h2 
                          className="font-medium leading-[1.1] tracking-tight"
                          style={{ fontSize: '32px', lineHeight: '1.25' }}
                        >
                    Benefits of Becoming a Design Engineer
                  </h2>
                  <p className="text-xl text-white/60 max-w-2xl mx-auto">
                    Unlock high earning potential and build the career you want
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {careerBenefits.map((benefit, index) => (
                    <Card key={index} className="p-8 bg-white/5 border-white/10 hover:border-primary/50 transition-all overflow-hidden">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                        <benefit.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                      <p className="text-white/70 leading-relaxed">
                        {benefit.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-24 md:py-32 bg-black text-white border-t border-white/10">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <h2 className="text-[48px] font-medium leading-[1.1] tracking-tight text-center mb-16">
                  What People Say
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index} className="p-8 bg-white/5 border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="flex items-start gap-4 mb-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-white">{testimonial.name}</p>
                          <p className="text-sm text-white/60">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-white/70 leading-relaxed">
                        "{testimonial.content}"
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="relative py-24 md:py-32 bg-black text-white border-t border-white/10">
            <div className="mx-auto max-w-5xl px-4 md:px-10 lg:px-[120px]">
              <div className="mx-auto max-w-2xl text-center mb-8 md:mb-16">
                <h2 className="text-[48px] font-medium leading-[1.1] tracking-tight text-white">
                  Join the Mastermind
                </h2>
                <p className="text-white/60 mx-auto mt-4 max-w-md text-balance text-lg">
                  One simple price. Lifetime access, weekly live support, and a private community.
                </p>
              </div>

              <div className="mt-8 md:mt-16">
                <Card className="relative bg-white/5 border-white/10">
                  <div className="grid items-start gap-12 divide-y divide-white/10 p-8 md:p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
                    <div className="pb-12 text-left md:pb-0 md:pr-12">
                      <h3 className="text-2xl font-semibold text-white">Join the Mastermind</h3>
                      <p className="mt-2 text-lg text-white/70">Start building real products in 90 days</p>
                      <span className="mb-6 mt-12 inline-block text-6xl font-semibold text-white">
                        <span className="text-4xl">$</span>4,999
                      </span>

                      <div className="flex justify-start">
                        <Button
                          asChild
                          size="lg"
                          variant="cta"
                        >
                          <a href="#">Enroll now</a>
                        </Button>
                      </div>

                      <p className="text-white/60 mt-12 text-sm">Includes: curriculum, templates, project briefs, and lifetime updates</p>
                    </div>
                    <div className="relative pt-0 md:pt-4 md:pl-12">
                      <ul
                        role="list"
                        className="space-y-4"
                      >
                        {[
                          '90-day structured curriculum with 12+ projects',
                          'Lifetime access to all lessons and updates',
                          'Private community and accountability'
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3"
                          >
                            <Check
                              className="text-primary size-4 flex-shrink-0 mt-0.5"
                              strokeWidth={3.5}
                            />
                            <span className="text-white break-words">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-white/60 mt-6 text-sm break-words">You learn independently — with lifetime access.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-24 md:py-32 bg-black text-white border-t border-white/10">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <h2 className="text-[48px] font-medium leading-[1.1] tracking-tight text-center mb-16">
                  Frequently Asked Questions
                </h2>

                <div className="max-w-3xl mx-auto">
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                        <AccordionTrigger className="text-left text-white hover:text-white/80">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-white/70">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-24 md:py-32 relative overflow-hidden bg-black text-white border-t border-white/10">
            <div className="px-4 md:px-10 lg:px-[120px] relative z-10">
                    <CallToAction />
                  </div>
                </section>
          </>
            ) : (
              // Course View
              <section className="py-8">
                <div className="px-5 sm:px-8 md:px-12 lg:px-20 max-w-[1800px] mx-auto">
                  {selectedLesson ? (
                    // Video Player View
                    <div className="w-full space-y-6">
                      {/* Video Player */}
                      <Card className="overflow-hidden border-white/10 bg-white/5">
                        <div className="relative aspect-video bg-black">
                          {(() => {
                            const lesson = currentSubTopic?.lessons.find(l => l.id === selectedLesson);
                            if (lesson && lesson.unlocked) {
                              return (
                                <iframe
                                  src={`https://www.youtube.com/embed/${lesson.videoId}`}
                                  title={lesson.title}
                                  className="w-full h-full"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowFullScreen
                                />
                              );
                            } else {
                              return (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="text-center">
                                    <Lock className="w-16 h-16 text-white/40 mx-auto mb-4" />
                                    <p className="text-white/60">This lesson is locked</p>
                                  </div>
                                </div>
                              );
                            }
                          })()}
                        </div>
                      </Card>

                      {/* Video Title */}
                      <div>
                        <h2 className="text-xl font-semibold text-white">
                          {(() => {
                            const displayLesson = currentSubTopic?.lessons.find(l => l.id === selectedLesson);
                            return displayLesson ? displayLesson.title : "Select a lesson";
                          })()}
                </h2>
                      </div>

                      {/* Tabs */}
                      <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <TabsList className="grid w-full grid-cols-2 bg-white/5 border-white/10">
                          <TabsTrigger value="description" className="text-white data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                            Description
                          </TabsTrigger>
                          <TabsTrigger value="resources" className="text-white data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                            Resources
                          </TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="description" className="space-y-4 py-6">
                          <div>
                            <h3 className="text-xl font-semibold mb-3 text-white">About This Lesson</h3>
                            <p className="text-white/70 leading-relaxed">
                              {(() => {
                                const displayLesson = currentSubTopic?.lessons.find(l => l.id === selectedLesson);
                                return displayLesson 
                                  ? `Learn about ${displayLesson.title.toLowerCase()} and apply these concepts to your design engineering journey.`
                                  : "Select a lesson to view its content.";
                              })()}
                            </p>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="resources" className="space-y-4 py-6">
                          <div>
                            <h3 className="text-xl font-semibold mb-3 text-white">Resources</h3>
                            <p className="text-white/70">Additional resources will be available here.</p>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  ) : currentSubTopic ? (
                    // Show lesson cards grid when no lesson is selected
                    <div className="w-full">
                      <div className="mb-6">
                        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-2">{currentSubTopic.title} Course</h1>
                        {currentModule && (
                          <p className="text-white/60 text-lg">{currentModule.title}</p>
                        )}
                      </div>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentSubTopic.lessons.map((lesson) => {
                          // Generate random colors for each lesson based on lesson ID
                          const colorPalettes = [
                            ["#FF6B6B", "#FFD93D", "#FF8E53", "#FF6B9D"],
                            ["#4ECDC4", "#87CEEB", "#DA70D6", "#BA55D3"],
                            ["#95E1D3", "#F38181", "#FCE38A", "#AAE3F0"],
                            ["#FF6B6B", "#FF8E53", "#FFD93D", "#FFA07A"],
                            ["#C44569", "#D68FD6", "#E3A0D3", "#FF8CC8"],
                            ["#4F4F8C", "#5F7AAB", "#7FA8D5", "#87CEEB"],
                            ["#E74C3C", "#EC9281", "#F5C5BA", "#FDF0ED"],
                            ["#9B59B6", "#BB8FCE", "#D7BDE2", "#F4ECF7"],
                            ["#2ECC71", "#58D68D", "#A9DFBF", "#E8F8F5"],
                            ["#F39C12", "#F7C869", "#FDE4B7", "#FEF9E7"],
                            ["#3498DB", "#5DADE2", "#85C1E9", "#AED6F1"],
                            ["#E67E22", "#EB984E", "#F0B27A", "#F8C471"],
                          ];
                          const randomColors = colorPalettes[lesson.id % colorPalettes.length];
                          
                          return (
                          <Card
                            key={lesson.id}
                            onClick={() => handleLessonClick(lesson)}
                            className={`overflow-hidden border-white/10 bg-white/5 hover:border-primary/50 transition-all cursor-pointer group ${
                              !lesson.unlocked ? "opacity-75" : ""
                            }`}
                          >
                            {/* Thumbnail Shader */}
                            <div className="relative aspect-video bg-black overflow-hidden">
                              <MeshGradient
                                width={800}
                                height={450}
                                colors={randomColors}
                                distortion={0.8}
                                swirl={0.6}
                                speed={0.42}
                                offsetX={0.08}
                                className="absolute inset-0 w-full h-full"
                              />
                              {/* Play Icon Overlay */}
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                                  <Play className="w-8 h-8 text-white ml-1 fill-white" />
                                </div>
                              </div>
                              {/* Lock Icon Overlay */}
                              {!lesson.unlocked && (
                                <div className="absolute top-4 right-4">
                                  <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                                    <Lock className="w-5 h-5 text-white/80" />
                                  </div>
                                </div>
                              )}
                </div>
                
                            {/* Content */}
                            <div className="p-4">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                  <Play className="w-3 h-3 text-white ml-0.5 fill-white" />
              </div>
                                <h3 className="text-base font-medium text-white flex-1">{lesson.title}</h3>
                              </div>
                              
                              {/* Progress Bar */}
                              {lesson.unlocked && (
                                <div className="w-full">
                                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-primary rounded-full transition-all duration-300"
                                      style={{ width: `${lesson.progress || 0}%` }}
                                    />
                                  </div>
                                  <p className="text-xs text-white/40 mt-1">{lesson.progress || 0}% Complete</p>
                                </div>
                              )}
                            </div>
                          </Card>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="w-full flex items-center justify-center min-h-[400px]">
                      <p className="text-white/60">Select a module from the sidebar to view lessons</p>
                    </div>
                  )}
            </div>
          </section>
            )}
        </main>
        </div>
      </div>
    </>
  );
};

export default VibeCodingAccelerator;
