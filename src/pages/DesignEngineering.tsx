import { Navigation } from "@/components/Navigation";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, Rocket, Briefcase, GraduationCap, Sparkles, Users, Check, Play, BookOpen, Target, Trophy } from "lucide-react";
import { MeshGradient } from "@paper-design/shaders-react";
import { motion } from "framer-motion";
import cursorLogo from "@/assets/logos/cursor.png";
import tailwindLogo from "@/assets/tailwindcss-logotype-white.svg";

const DesignEngineering = () => {
  const modules = [
    {
      number: "1",
      title: "Introduction to Design Engineering",
      description: "Get started with design engineering fundamentals. Understand the role, career path, and roadmap to becoming a successful design engineer.",
      colors: ["#FF6B6B", "#FFD93D", "#FF8E53", "#FF6B9D"],
      logos: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg"],
      status: "available"
    },
    {
      number: "2",
      title: "Design Engineering Roadmap",
      description: "Get a comprehensive roadmap to becoming a design engineer. Learn the step-by-step path, skills progression, and milestones to track your journey.",
      colors: ["#FF6B6B", "#FFD93D", "#FF8E53", "#FF6B9D"],
      logos: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg"],
      status: "available"
    },
    {
      number: "3",
      title: "Master HTML and CSS",
      description: "Master HTML structure and CSS styling in depth. Learn advanced techniques, layouts, responsive design, and modern CSS features.",
      colors: ["#4ECDC4", "#87CEEB", "#DA70D6", "#BA55D3"],
      logos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
      ],
      status: "available"
    },
    {
      number: "4",
      title: "Build with JavaScript",
      description: "Learn JavaScript from fundamentals to advanced concepts. Master variables, functions, DOM manipulation, and modern ES6+ features.",
      colors: ["#95E1D3", "#F38181", "#FCE38A", "#AAE3F0"],
      logos: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
      status: "coming up next"
    },
    {
      number: "5",
      title: "Learn React",
      description: "Build dynamic user interfaces with React. Learn components, state management, hooks, and modern React patterns for production-ready applications.",
      colors: ["#FF6B6B", "#FF8E53", "#FFD93D", "#FFA07A"],
      logos: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"],
      status: "coming up next"
    },
    {
      number: "6",
      title: "UI Animation with React",
      description: "Master React Motion to create smooth, engaging animations. Learn to build interactive UI animations and transitions that enhance user experience.",
      colors: ["#9B59B6", "#BB8FCE", "#D7BDE2", "#F4ECF7"],
      logos: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"],
      status: "coming up next"
    },
    {
      number: "7",
      title: "Style with Tailwind CSS",
      description: "Master Tailwind CSS for rapid UI development. Learn utility-first styling, responsive design, and building beautiful interfaces efficiently.",
      colors: ["#C44569", "#D68FD6", "#E3A0D3", "#FF8CC8"],
      logos: [tailwindLogo],
      status: "coming up next"
    },
    {
      number: "8",
      title: "Code with TypeScript",
      description: "Write type-safe, maintainable code with TypeScript. Master types, interfaces, generics, and advanced TypeScript patterns.",
      colors: ["#4F4F8C", "#5F7AAB", "#7FA8D5", "#87CEEB"],
      logos: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"],
      status: "coming up next"
    },
    {
      number: "9",
      title: "Ship with Next.js",
      description: "Build complete applications with Next.js. Learn server-side rendering, API routes, database integration, and deployment strategies.",
      colors: ["#667EEA", "#764BA2", "#F093FB", "#4FACFE"],
      logos: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"],
      status: "coming up next"
    },
    {
      number: "10",
      title: "Design with Figma",
      description: "Master Figma from basics to advanced design systems and prototyping. Learn to design, prototype, and hand off designs effectively.",
      colors: ["#F24E1E", "#A259FF", "#1ABCFE", "#0ACF83"],
      logos: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"],
      status: "coming up next"
    },
    {
      number: "11",
      title: "Learn SwiftUI",
      description: "Master SwiftUI to build native iOS and macOS applications. Learn declarative UI development, state management, and modern iOS design patterns.",
      colors: ["#2ECC71", "#58D68D", "#A9DFBF", "#E8F8F5"],
      logos: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg"],
      status: "coming up next"
    },
    {
      number: "12",
      title: "Sneak Peek into the Project",
      description: "Get an inside look at real-world projects. See how design engineers build and ship products, with detailed walkthroughs and insights.",
      colors: ["#E67E22", "#EB984E", "#F0B27A", "#F8C471"],
      logos: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg"],
      status: "coming up next"
    },
    {
      number: "13",
      title: "UI and Visual Craft",
      description: "Build complete projects from start to finish. Follow step-by-step tutorials and create portfolio-worthy applications.",
      colors: ["#3498DB", "#5DADE2", "#85C1E9", "#AED6F1"],
      logos: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg"],
      status: "coming up next"
    },
    {
      number: "14",
      title: "Portfolio Preparation",
      description: "Learn how to showcase your design engineering skills effectively. Build a compelling portfolio that highlights your projects and demonstrates your technical abilities.",
      colors: ["#E74C3C", "#EC7063", "#F1948A", "#F5B7B1"],
      logos: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg"],
      status: "coming up next"
    },
    {
      number: "15",
      title: "Advanced Design Engineering Techniques",
      description: "Explore advanced techniques and best practices in design engineering. Learn to build complex interfaces, optimize performance, and create scalable design systems.",
      colors: ["#16A085", "#1ABC9C", "#48C9B0", "#A3E4D7"],
      logos: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg"],
      status: "coming up next"
    }
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: "Go Through the Self-Paced Courses",
      description: "Learn at your own pace with comprehensive, structured courses designed for designers. Access all lessons anytime, anywhere, and progress through the curriculum on your schedule.",
    },
    {
      icon: Code2,
      title: "Practical, Project-Based Learning",
      description: "Build real projects that you can add to your portfolio. Learn by doing with hands-on exercises and practical applications that reinforce your coding skills.",
    },
    {
      icon: Users,
      title: "Private Community of Design Engineers",
      description: "Join an exclusive community of design engineers. Share builds, get feedback, network with peers, and learn from others on the same journey.",
    },
    {
      icon: Trophy,
      title: "Portfolio Development",
      description: "Build a standout portfolio that showcases your design engineering skills. Learn how to present your projects effectively and demonstrate your capabilities.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Design Engineering Course - Become a Design Engineer in 90 Days</title>
        <meta name="description" content="Master design engineering and learn to code. Build real projects, ship production-ready applications, and transition from designer to design engineer." />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-16 md:py-24 overflow-hidden bg-black text-white border-b border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15)_0%,_rgba(0,0,0,0)_70%)] blur-3xl" />
            
            <div className="px-4 md:px-10 lg:px-[120px] relative z-10 w-full">
              <div className="max-w-[1200px] mx-auto">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="text-xs text-white/60 font-medium tracking-wider uppercase">
                    Design Engineering Course
                  </span>
                </div>

                <h1 
                  className="font-medium mb-4 tracking-tight text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                >
                  Level Up Your Design Engineering Skills.
                </h1>

                <p className="text-lg md:text-xl text-white/70 font-light mb-8 leading-relaxed max-w-3xl mx-auto text-center">
                  Learn to code interfaces, build real projects, and accelerate your<br />journey from designer to design engineer.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
                  <Button 
                    variant="cta" 
                    size="lg"
                    className="group"
                    asChild
                  >
                    <a href="https://tally.so/r/RGKRBp" target="_blank" rel="noopener noreferrer">
                      Apply today
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10"
                    asChild
                  >
                    <a href="/login">
                      Login
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-24 md:py-32 bg-black text-white border-b border-white/10">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16 space-y-4">
                  <h2 
                    className="font-medium tracking-tight"
                    style={{ fontSize: '32px', lineHeight: '1.25' }}
                  >
                    What You'll Get
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {benefits.map((benefit, index) => (
                    <Card
                      key={index}
                      className="p-8 bg-white/5 border-white/10 hover:border-primary/50 transition-all overflow-hidden group"
                    >
                      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                      <p className="text-white/70 leading-relaxed">{benefit.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Video Section - Hidden for now */}
          {/* <section className="relative py-12 md:py-16 overflow-hidden bg-black text-white border-b border-white/10">
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
          </section> */}

          {/* Overview Section */}
          <section className="relative py-12 md:py-16 overflow-hidden bg-black text-white border-b border-white/10">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-0">
                  <h2 
                    className="font-medium tracking-tight"
                    style={{ fontSize: '32px', lineHeight: '1.25' }}
                  >
                    Why Design Engineering?
                  </h2>
                </div>
              </div>
            </div>
          </section>

          {/* Handwritten Card Section */}
          <section className="relative py-8 bg-black border-b border-white/10">
            <div className="px-4 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, rotate: -2 }}
                  animate={{ opacity: 1, rotate: -1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative max-w-md mx-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg shadow-2xl transform rotate-[-1deg]" />
                  <div className="relative bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 md:p-12 rounded-lg shadow-2xl border-2 border-yellow-200/50 transform rotate-[1deg]">
                    <div className="absolute top-4 right-4 w-12 h-12 opacity-10">
                      <div className="w-full h-full border-2 border-yellow-300 rounded-full" />
                    </div>
                    <p 
                      className="text-gray-800 text-lg md:text-xl leading-relaxed"
                      style={{
                        fontFamily: "'Kalam', 'Comic Sans MS', cursive",
                        fontWeight: 400,
                        letterSpacing: '0.02em',
                        lineHeight: '1.8'
                      }}
                    >
                      Many designers are stuck creating static mockups, waiting on developers, and unable to bring their ideas to life.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, rotate: 1 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative max-w-md mx-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg shadow-2xl transform rotate-[1deg]" />
                  <div className="relative bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 md:p-12 rounded-lg shadow-2xl border-2 border-yellow-200/50 transform rotate-[-1deg]">
                    <div className="absolute top-4 right-4 w-12 h-12 opacity-10">
                      <div className="w-full h-full border-2 border-yellow-300 rounded-full" />
                    </div>
                    <p 
                      className="text-gray-800 text-lg md:text-xl leading-relaxed"
                      style={{
                        fontFamily: "'Kalam', 'Comic Sans MS', cursive",
                        fontWeight: 400,
                        letterSpacing: '0.02em',
                        lineHeight: '1.8'
                      }}
                    >
                      With AI, the barrier to entry is getting lower—now is the right time to get started.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, rotate: -2 }}
                  animate={{ opacity: 1, rotate: -1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative max-w-md mx-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg shadow-2xl transform rotate-[-1deg]" />
                  <div className="relative bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 md:p-12 rounded-lg shadow-2xl border-2 border-yellow-200/50 transform rotate-[1deg]">
                    <div className="absolute top-4 right-4 w-12 h-12 opacity-10">
                      <div className="w-full h-full border-2 border-yellow-300 rounded-full" />
                    </div>
                    <p 
                      className="text-gray-800 text-lg md:text-xl leading-relaxed"
                      style={{
                        fontFamily: "'Kalam', 'Comic Sans MS', cursive",
                        fontWeight: 400,
                        letterSpacing: '0.02em',
                        lineHeight: '1.8'
                      }}
                    >
                      There's a significant demand for design engineers in the market.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Curriculum Section */}
          <section className="py-24 md:py-32 bg-black text-white overflow-hidden border-b border-white/10">
            <div className="px-4 sm:px-8 md:px-10 lg:px-[120px]">
              <div className="max-w-[1200px] mx-auto">
                <h2 
                  className="font-medium text-center mb-16 tracking-tight"
                  style={{ fontSize: '32px', lineHeight: '1.25' }}
                >
                  Curriculum Overview
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 group">
                  {modules.map((module, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                        mass: 0.5
                      }}
                      className="cursor-pointer transition-all duration-300"
                    >
                      <Card className="border-white/10 h-full overflow-hidden bg-white/5 hover:border-primary/50 flex flex-col">
                        {/* Shader Section */}
                        <div className="relative h-32 overflow-hidden flex-shrink-0">
                          <MeshGradient
                            width={800}
                            height={200}
                            colors={module.colors}
                            distortion={0.8}
                            swirl={0.6}
                            speed={0.42}
                            offsetX={0.08}
                          />
                          <div className="absolute bottom-0 left-0 p-4 flex items-center gap-3">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30">
                              <span className="text-white font-bold text-sm">{module.number}</span>
                            </div>
                            <span className="text-xs text-white uppercase tracking-wide font-medium">Module {module.number}</span>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="p-6 bg-white/5 -mt-6 pt-10 flex-1 flex flex-col">
                          <h3 className="text-lg font-semibold mb-3 text-white">{module.title}</h3>
                          <p className="text-white/60 text-sm leading-relaxed flex-1 mb-3">{module.description}</p>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>


          {/* Pricing & CTA Section */}
          <section id="enroll" className="relative py-24 md:py-32 bg-black text-white border-b border-white/10">
            <div className="mx-auto max-w-5xl px-4 md:px-10 lg:px-[120px]">
              <div className="mx-auto max-w-2xl text-center mb-8 md:mb-16">
                <h2 className="text-[48px] font-medium leading-[1.1] tracking-tight text-white">
                  Start Your Journey
                </h2>
                <p className="text-white/60 mx-auto mt-4 max-w-md text-balance text-lg">
                  Transform from designer to design engineer. Access all courses and practical projects and learning.
                </p>
              </div>

              <div className="mt-8 md:mt-16">
                <Card className="relative bg-white/5 border-white/10">
                  <div className="grid items-start gap-12 divide-y divide-white/10 p-8 md:p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
                    <div className="pb-12 text-left md:pb-0 md:pr-12">
                      <h3 className="text-2xl font-semibold text-white">Get Pro Access</h3>
                      <p className="mt-2 text-lg text-white/70">Unlock new possibilities and become a design engineer.</p>
                      <div className="mb-6 mt-12">
                        <span className="inline-block text-6xl font-semibold text-white">
                          <span className="text-4xl">$</span>99
                        </span>
                        <p className="text-white/60 text-sm mt-2">per month</p>
                      </div>

                      <div className="flex justify-start">
                        <Button
                          asChild
                          size="lg"
                          variant="cta"
                        >
                          <a href="https://tally.so/r/RGKRBp" target="_blank" rel="noopener noreferrer">
                            Apply today
                          </a>
                        </Button>
                      </div>

                      <p className="text-white/60 mt-12 text-sm">Cancel anytime. No hidden fees.</p>
                    </div>
                    <div className="relative pt-0 md:pt-4 md:pl-12">
                      <ul
                        role="list"
                        className="space-y-4"
                      >
                        {[
                          'Start your Design Engineering Journey today',
                          'Get access to hands-on practical courses all in one place with structured learning',
                          'Private community of design engineers',
                          'Self-paced learning',
                          'Gamified learning experience with leaderboard to unlock perks'
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
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        </main>
        
        <footer className="border-t border-white/10 py-12 bg-black">
          <div className="container px-4 text-center text-sm text-white/60">
            <p>© 2025 AI Design Academy. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DesignEngineering;
