import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Code2, Zap, Users, Trophy, ArrowRight, Sparkles, Play, Rocket, Database, Globe, TrendingUp, Briefcase, DollarSign } from "lucide-react";
import { Helmet } from "react-helmet";
import LindaImage from "@/assets/Linda.jpeg";
import SnehImage from "@/assets/Sneh.webp";
import SonaliImage from "@/assets/Sonali.jpeg";
import LogoCloud from "@/components/LogoCloud";
import { MeshGradient } from "@paper-design/shaders-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const VibeCodingAccelerator = () => {
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

  const modules = [
    {
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
      project: "Interactive Web Page: Build your first responsive webpage with HTML, CSS, and JavaScript"
    },
    {
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
      project: "React App: Build a dynamic application using React components and hooks"
    },
    {
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
      project: "Animated Interface: Build an interactive app with smooth animations using Framer Motion"
    },
    {
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
      project: "Advanced UI: Build a complex interface with animations and custom styling"
    },
    {
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
      project: "Next.js App: Build a full-stack application with server-side rendering"
    },
    {
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
      project: "TypeScript App: Build a type-safe application using TypeScript with React and Next.js"
    },
    {
      number: "07",
      title: "Build Your Project & Create Your Portfolio",
      description: "Apply everything you've learned to build your portfolio",
      week: "Week 7",
      colors: ["#E74C3C", "#EC9281", "#F5C5BA", "#FDF0ED"],
      topics: [
        "Portfolio design and structure",
        "Showcasing your projects effectively",
        "Deployment to Vercel",
        "Optimizing for performance and SEO",
        "Presenting your work professionally"
      ],
      project: "Design Engineering Portfolio: Create and deploy your professional portfolio showcasing all your work"
    },
    {
      number: "08",
      title: "Figma Course",
      description: "Master design tools and prototyping",
      week: "Week 8",
      colors: ["#FF6B6B", "#FFD93D", "#FF8E53", "#FF6B9D"],
      topics: [
        "Figma interface and tools",
        "Creating designs and components",
        "Prototyping and interactions",
        "Design handoff and collaboration",
        "Advanced Figma techniques"
      ],
      project: "Figma Project: Design and prototype a complete interface using Figma"
    },
    {
      number: "09",
      title: "Shift UI Course",
      description: "Convert designs to code efficiently",
      week: "Week 9",
      colors: ["#4ECDC4", "#87CEEB", "#DA70D6", "#BA55D3"],
      topics: [
        "Shift UI fundamentals",
        "Converting Figma designs to code",
        "Design-to-code workflows",
        "Component generation and optimization",
        "Streamlining the design handoff process"
      ],
      project: "Shift UI Project: Convert Figma designs to production-ready React code using Shift UI"
    },
    {
      number: "10",
      title: "Career Roadmap and Building Your Personal Brand",
      description: "Plan your career path and establish your professional presence",
      week: "Week 10",
      colors: ["#2ECC71", "#58D68D", "#A9DFBF", "#E8F8F5"],
      topics: [
        "Design engineering career paths and opportunities",
        "Building a strong personal brand and online presence",
        "Networking strategies and community building",
        "Portfolio optimization and showcasing your work",
        "Landing your dream role or starting your own practice"
      ],
      project: "Career Plan: Develop your career roadmap and personal brand strategy"
    }
  ];

  const careerBenefits = [
    {
      icon: Briefcase,
      title: "Freelancers",
      description: "Deliver full $10K MVP projects"
    },
    {
      icon: TrendingUp,
      title: "Designers",
      description: "Move into high-value Design Engineer roles"
    },
    {
      icon: Rocket,
      title: "Founders",
      description: "Build prototypes 5× faster, raise sooner"
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
      answer: "No, we start from zero with AI tools. This accelerator is designed for designers who want to learn to build."
    },
    {
      question: "How much time weekly?",
      answer: "5–8 hours on average. The program is self-paced, so you can adjust based on your schedule."
    },
    {
      question: "When can I join?",
      answer: "Anytime — it's evergreen. You get immediate access upon enrollment."
    },
    {
      question: "Will I get feedback?",
      answer: "Yes, during weekly lives and community threads. You'll have plenty of opportunities to get your work reviewed."
    },
    {
      question: "Payment plans?",
      answer: "Yes, 3 × $1,900 option available for flexible monthly payments."
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

      <div className="min-h-screen bg-black">
        <Navigation />
        
        <main className="bg-black">
          {/* Hero Section - removed BlurFade wrappers */}
          <section className="relative py-16 md:py-24 overflow-hidden bg-black text-white border-b border-white/10 w-full z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-black to-black" />
            
            <div className="px-4 md:px-10 lg:px-[120px] relative z-10 w-full">
              <div className="max-w-[1200px] mx-auto">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-xs text-white/60 font-medium tracking-wider uppercase"></span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-8 tracking-tight">
                  Become a Design Engineer
                    <span className="block">in 90 Days</span>
                  </h1>

                  <p className="text-lg md:text-medium text-white/60 font-light mb-7 leading-relaxed max-w-3xl">
                  Master HTML, CSS, JavaScript, React, Tailwind CSS, and Next.js from the ground up. 
                    <br />
                    Build real projects and create your AI design engineering portfolio in 90 days.
                  </p>

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
                        Apply Today
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-white/20 text-white hover:bg-white/10"
                      asChild
                    >
                      <a 
                        href="https://cal.com/aidesignacademy/15min?overlayCalendar=true"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book a Call Today
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <LogoCloud />

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

          {/* Key Outcomes Cards */}
          <section className="py-24 md:py-32 bg-black text-white border-t border-white/10">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16 space-y-4">
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                    In 90 Days, You'll Be Able To …
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-lg leading-relaxed text-white/80">
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Curriculum Section */}
          <section className="relative py-24 md:py-32 bg-black text-white border-t border-white/10 overflow-hidden">
            <div className="px-4 md:px-10 lg:px-[120px] relative z-10">
              <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-4">
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                    10-Week Design Engineering Curriculum
                  </h2>
                  <p className="text-xl text-white/60 mt-4">Things You Will Learn</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-16">
                  {modules.map((module, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="cursor-pointer"
                    >
                      <Card className="border-white/10 h-full overflow-hidden transition-all duration-300 peer peer-hover:blur-sm">
                        {/* Shader Section with Module Info Overlay */}
                        <div className="relative h-32 overflow-hidden">
                          <MeshGradient
                            width={800}
                            height={200}
                            colors={module.colors}
                            distortion={0.8}
                            swirl={0.6}
                            speed={0.42}
                            offsetX={0.08}
                          />
                          {/* Module number and week overlay on shader */}
                          <div className="absolute bottom-0 left-0 p-4 flex items-center gap-3">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30">
                              <span className="text-white font-bold text-sm">{module.number}</span>
                            </div>
                            <span className="text-xs text-white uppercase tracking-wide font-medium">{module.week}</span>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="p-8 bg-black -mt-6 pt-10">
                          <div className="mb-6">
                            <h3 className="text-2xl font-normal mb-2 text-white">{module.title}</h3>
                            <p className="text-white/60 text-sm">{module.description}</p>
                          </div>
                          
                          <div className="space-y-4 pt-4 border-t border-white/10">
                            <p className="text-sm font-semibold text-white/90 uppercase tracking-wide">What You'll Learn:</p>
                            <ul className="space-y-2">
                              {module.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="flex items-start gap-2 text-sm text-white/70">
                                  <Check className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="pt-4 border-t border-white/10">
                              <p className="text-xs font-semibold text-white/60 uppercase tracking-wide mb-2">Project:</p>
                              <p className="text-sm font-medium text-white/90">{module.project}</p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects You Will Build */}
          <section className="py-24 md:py-32 bg-black text-white border-t border-white/10">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16 space-y-4">
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Projects You Will Build
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="cursor-pointer h-full"
                  >
                    <Card className="p-0 border-white/10 overflow-hidden transition-all duration-300 h-full group">
                      <div className="relative h-80 overflow-hidden bg-white/5">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Code2 className="w-16 h-16 text-white/20 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                      <div className="p-8 bg-black">
                        <h3 className="text-2xl font-semibold text-white mb-3">AI Mini-App</h3>
                        <p className="text-white/70 leading-relaxed">
                          Build your first AI-powered app using Lovable and deploy it live. Learn the fundamentals of modern AI development.
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="cursor-pointer h-full"
                  >
                    <Card className="p-0 border-white/10 overflow-hidden transition-all duration-300 h-full group">
                      <div className="relative h-80 overflow-hidden bg-white/5">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Database className="w-16 h-16 text-white/20 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                      <div className="p-8 bg-black">
                        <h3 className="text-2xl font-semibold text-white mb-3">Full-Stack Web App</h3>
                        <p className="text-white/70 leading-relaxed">
                          Create a complete web application with React, Next.js, and Supabase. Integrate APIs and databases.
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="cursor-pointer h-full"
                  >
                    <Card className="p-0 border-white/10 overflow-hidden transition-all duration-300 h-full group">
                      <div className="relative h-80 overflow-hidden bg-white/5">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Globe className="w-16 h-16 text-white/20 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                      <div className="p-8 bg-black">
                        <h3 className="text-2xl font-semibold text-white mb-3">Mobile-Ready Product</h3>
                        <p className="text-white/70 leading-relaxed">
                          Build a responsive, mobile-first application using Cursor and modern web technologies.
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="cursor-pointer h-full"
                  >
                    <Card className="p-0 border-white/10 overflow-hidden transition-all duration-300 h-full group">
                      <div className="relative h-80 overflow-hidden bg-white/5">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Rocket className="w-16 h-16 text-white/20 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                      <div className="p-8 bg-black">
                        <h3 className="text-2xl font-semibold text-white mb-3">Capstone Project</h3>
                        <p className="text-white/70 leading-relaxed">
                          Launch your own idea from concept to Vercel. Build, deploy, and showcase your unique product.
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-24 md:py-32 bg-black text-white border-t border-white/10">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 tracking-tight">
                  Learn at Your Own Pace — With Live Support.
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mt-16">
                  {howItWorks.map((item, index) => (
                    <Card key={index} className="p-8 text-center bg-white/5 border-white/10">
                      <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                      <p className="text-white/70">{item.description}</p>
                    </Card>
                  ))}
                </div>

                <p className="text-center text-white/60 mt-8">
                  You learn independently — but never alone.
                </p>
              </div>
            </div>
          </section>

          {/* Career Benefits Section */}
          <section className="py-24 md:py-32 bg-black text-white border-t border-white/10">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 tracking-tight">
                  How Vibe Coding Elevates Your Career
                </h2>
                <p className="text-center text-white/60 mb-16">
                  You're not learning syntax — you're learning freedom.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  {careerBenefits.map((benefit, index) => (
                    <Card key={index} className="p-8 text-center bg-white/5 border-white/10 hover:border-primary/50 transition-all">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                      <p className="text-white/70">{benefit.description}</p>
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
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-tight">
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
                <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl text-white">
                  Pricing that scale with your business
                </h2>
                <p className="text-white/60 mx-auto mt-4 max-w-md text-balance text-lg">
                  Choose the perfect plan for your needs and start optimizing your workflow today
                </p>
              </div>

              <div className="mt-8 md:mt-16">
                <Card className="relative bg-white/5 border-white/10">
                  <div className="grid items-start gap-12 divide-y divide-white/10 p-8 md:p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
                    <div className="pb-12 text-center md:pb-0 md:pr-12">
                      <h3 className="text-2xl font-semibold text-white">Suite Enterprise</h3>
                      <p className="mt-2 text-lg text-white/70">For your company of any size</p>
                      <span className="mb-6 mt-12 inline-block text-6xl font-bold text-white">
                        <span className="text-4xl">$</span>4999
                      </span>

                      <div className="flex justify-center">
                        <Button
                          asChild
                          size="lg"
                          variant="cta"
                        >
                          <a href="#">Get started</a>
                        </Button>
                      </div>

                      <p className="text-white/60 mt-12 text-sm">Includes : Security, Unlimited Storage, Payment, Search engine, and all features</p>
                    </div>
                    <div className="relative pt-0 md:pt-4 md:pl-12">
                      <ul
                        role="list"
                        className="space-y-4"
                      >
                        {['First premium advantage', 'Second advantage weekly', 'Third advantage donate to project', 'Fourth, access to all components weekly'].map((item, index) => (
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
                      <p className="text-white/60 mt-6 text-sm break-words">Team can be any size, and you can add or switch members as needed. Companies using our platform include:</p>
                      <div className="mt-12 flex flex-wrap items-center justify-start gap-8">
                        <img
                          className="h-5 w-fit brightness-0 invert"
                          src="https://html.tailus.io/blocks/customers/nvidia.svg"
                          alt="Nvidia Logo"
                          height="20"
                          width="auto"
                        />
                        <img
                          className="h-4 w-fit brightness-0 invert"
                          src="https://html.tailus.io/blocks/customers/column.svg"
                          alt="Column Logo"
                          height="16"
                          width="auto"
                        />
                        <img
                          className="h-4 w-fit brightness-0 invert"
                          src="https://html.tailus.io/blocks/customers/github.svg"
                          alt="GitHub Logo"
                          height="16"
                          width="auto"
                        />
                        <img
                          className="h-5 w-fit brightness-0 invert"
                          src="https://html.tailus.io/blocks/customers/nike.svg"
                          alt="Nike Logo"
                          height="20"
                          width="auto"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* About Creator Section */}
          <section className="py-24 md:py-32 bg-black text-white border-t border-white/10">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 tracking-tight">
                  Meet John Rodrigues
                </h2>

                <div className="max-w-3xl mx-auto text-center space-y-6">
                  <p className="text-xl text-white/80">
                    Design Engineer · Educator · Founder of AI Design Academy.
                  </p>
                  <p className="text-lg text-white/70">
                    John has guided thousands of designers into code and built AI products for leading startups. 
                    Vibe Coding distills his system for designing + shipping modern products fast.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-24 md:py-32 bg-black text-white border-t border-white/10">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-tight">
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
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-black to-black" />
            
            <div className="px-4 md:px-10 lg:px-[120px] relative z-10">
              <div className="max-w-[1200px] mx-auto text-center space-y-8">
                <h2 className="text-4xl md:text-7xl font-bold tracking-tight">
                  Start Building the Future
                </h2>
                
                <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto">
                  You already have taste. Now gain the power to build with it.<br/>
                  Join Vibe Coding and ship your first full-stack product in 60 days.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                  <Button 
                    variant="cta" 
                    size="xl"
                    className="group"
                    asChild
                  >
                    <a 
                      href="https://maven.com/productlearnio/aiproductdesignmasterycohort"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Now
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="xl"
                    className="border-white/20 text-white hover:bg-white/10"
                    asChild
                  >
                    <a href="mailto:admissions@aidesignacademy.com">
                      Talk to Admissions
                    </a>
                  </Button>
                </div>
                
                <p className="text-sm text-white/60 pt-4">
                  Evergreen enrollment · Weekly live support · Lifetime access
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default VibeCodingAccelerator;
