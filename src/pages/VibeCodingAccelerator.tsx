import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet";
import { CalendarDays, Clock, Users, Play, Sparkles, CheckCircle2, Video, BookmarkCheck, ShieldCheck, ArrowRight, BookOpen, Rocket, Code2, Hammer } from "lucide-react";
import { DotScreenShader } from "@/components/DotScreenShader";
import JohnImage from "@/assets/John.png";
import JPMorganLogo from "@/assets/Chase.png";
import IntercomLogo from "@/assets/intercom-1-logo-png-transparent.png";
import HubspotLogo from "@/assets/Hubspot.svg.png";
import MetaLogo from "@/assets/meta.png";
import GoogleLogo from "@/assets/Google.svg.png";
import WorkshopImage1 from "@/assets/workshop-1.jpg";
import WorkshopImage2 from "@/assets/workshop-2.jpg";
import WorkshopImage3 from "@/assets/workshop-3.jpg";
import CursorLogo from "@/assets/logos/cursor.png";

const vibeCodingHighlights = [
  {
    title: "Learn what vibe coding is",
    description:
      "Discover the foundations of Vibe Coding learn what it is, how it works, and how to start building your first AI-powered interface.",
    icon: BookOpen,
  },
  {
    title: "Learn tools and step by step how to get started",
    description:
      "Explore the essential tools that make Vibe Coding possible. Learn how to use platforms like Cursor, Lovable, React, and AI-powered assistants to design, code, and ship faster.",
    icon: Rocket,
  },
  {
    title: "Learn Cursor",
    description:
      "Watch real Vibe Coding demos in action and see how ideas turn into interactive apps using AI and modern design tools.",
    icon: Code2,
  },
  {
    title: "Build your first project",
    description:
      "Put your skills to the test with a hands-on Vibe Coding challenge. Apply what you've learned to build and ship your own mini AI-powered project.",
    icon: Hammer,
  },
];

const whatsIncluded = [
  {
    title: "Live sessions",
    description: "Learn directly from John Rodrigues in a real-time, interactive format.",
    icon: Users,
  },
  {
    title: "Lifetime access",
    description: "Go back to course content and recordings whenever you need to.",
    icon: BookmarkCheck,
  },
  {
    title: "Community of peers",
    description: "Stay accountable and share insights with like-minded professionals.",
    icon: Sparkles,
  },
  {
    title: "Certificate of completion",
    description: "Share your new skills with your employer or on LinkedIn.",
    icon: CheckCircle2,
  },
  {
    title: "Maven Guarantee",
    description: "This course is backed by the Maven Guarantee. Students are eligible for a full refund up until the halfway point of the course.",
    icon: ShieldCheck,
  },
];

const cohortModules = [
  {
    week: "Nov 14—Nov 15",
    title: "Welcome to Vibe Coding Bootcamp",
    items: [],
  },
  {
    week: "Nov 14—Nov 15",
    title: "Things to Prep For the Live Session",
    items: [],
  },
  {
    week: "Nov 14—Nov 15",
    title: "What is Vibe Coding",
    items: [],
  },
  {
    week: "Nov 14—Nov 15",
    title: "What are the tools to use for Vibe Coding",
    items: [],
  },
  {
    week: "Nov 14—Nov 15",
    title: "How to Leverage Vibe coding in your workflows",
    items: ["1 item"],
  },
  {
    week: "Nov 14—Nov 15",
    title: "Vibe Code Demos",
    items: [],
  },
  {
    week: "Nov 15",
    title: "Vibe Coding Bootcamp Live Session",
    items: ["Sat 11/15 7:00 PM—8:30 PM (UTC)"],
  },
  ];

  const faqs = [
    {
    question: "What happens if I can't make a live session?",
    answer:
      "You'll get the full recording, plus access to the community for recaps and Q&A. Join the next live session or catch up on your own time.",
  },
  {
    question: "I work full-time, what is the expected time commitment?",
    answer:
      "Plan for 2–3 hours across the workshop weekend. The core live session runs 90 minutes, and you'll have optional time to complete the vibe coding challenge.",
  },
  {
    question: "What's the refund policy?",
    answer:
      "The Maven Guarantee has you covered. You're eligible for a full refund up until the halfway point of the course.",
  },
];

const companyLogos = [
  { src: JPMorganLogo, alt: "JPMorgan Chase & Co." },
  { src: IntercomLogo, alt: "Intercom" },
  { src: HubspotLogo, alt: "HubSpot" },
  { src: MetaLogo, alt: "Meta" },
  { src: GoogleLogo, alt: "Google" },
];

const galleryImages = [WorkshopImage1, WorkshopImage2, WorkshopImage3];

const VibeCodingAccelerator = () => {
  return (
    <>
      <Helmet>
        <title>Vibe Coding 101 Beginner Course</title>
        <meta
          name="description"
          content="Master vibe coding and design engineering. Learn to ship AI-powered products, build a standout portfolio, and command top-tier roles."
        />
      </Helmet>

      <div className="bg-black text-white">
        <Navigation />
        
        <main>
          {/* Hero */}
          <section className="relative overflow-hidden border-b border-white/10 bg-black py-32 sm:py-40 md:py-48">
            {/* Shader background */}
            <div className="absolute inset-0 z-0">
              <DotScreenShader />
                  </div>
            
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

            <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-10">
              <div className="space-y-6 text-center relative">
                {/* Bouncing Cursor Logo around title */}
                <div className="absolute -top-16 sm:-top-20 md:-top-24 left-1/2 -translate-x-1/2 pointer-events-none flex items-center justify-center">
                  <img 
                    src={CursorLogo} 
                    alt="Cursor" 
                    className="w-12 h-12 sm:w-16 sm:h-16 opacity-80"
                    style={{
                      animation: 'bounceAround 15s ease-in-out infinite',
                    }}
                  />
                </div>
                <h1 className="text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl relative">
                  Vibe Coding 101 with Cursor
                  </h1>
                <p className="text-lg text-white/70 sm:text-xl mx-auto max-w-2xl">
                  Learn where to get started with Vibe Coding, discover what tools to use, explore project demos behind the scenes, and build your first Vibe Coding prototype.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row justify-center max-w-md mx-auto">
                  <Button variant="cta" size="xl" className="w-full sm:w-auto sm:min-w-[200px]" asChild>
                    <a href="https://maven.com/productlearnio/aiproductdesignmasterycohort" target="_blank" rel="noopener noreferrer">
                      Join Live Workshop
                      <Play className="h-5 w-5" />
                      </a>
                    </Button>
                  <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto sm:min-w-[200px]">
                    Self-Paced Course
                    <ArrowRight className="h-5 w-5" />
                    </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Hide all other sections */}
          {false && <>
          {/* Video Section */}
          <section className="relative border-b border-white/10 bg-black py-20 overflow-hidden">
            {/* Colorful shader effects */}
            <div 
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(59,130,246,0.3)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" 
              style={{ animation: "glowMove 8s ease-in-out infinite" }}
              aria-hidden="true" 
            />
            <div 
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(236,72,153,0.25)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none" 
              style={{ animation: "glowPulse 6s ease-in-out infinite" }}
              aria-hidden="true" 
            />
            <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.youtube.com/embed/An8IM-kPyms?rel=0&modestbranding=1"
                    title="Vibe Coding Workshop Recording"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Highlights */}
          <section className="relative border-b border-white/10 bg-black py-20 overflow-hidden" id="highlights">
            {/* Shader effects */}
            <div 
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.25)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" 
              style={{ animation: "glowMove 8s ease-in-out infinite" }}
              aria-hidden="true" 
            />
            <div 
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.2)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" 
              style={{ animation: "glowPulse 6s ease-in-out infinite" }}
              aria-hidden="true" 
            />
            <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
              <h2 className="text-3xl font-semibold">Outcome from this course</h2>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {vibeCodingHighlights.map((item) => (
                  <Card key={item.title} className="border-white/10 bg-white/5 p-6 hover:border-white/20 transition-colors">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                </div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-white/70">{item.description}</p>
                  </Card>
                              ))}
              </div>
            </div>
          </section>

          {/* Who is this course for */}
          <section className="relative border-b border-white/10 bg-black py-20 overflow-hidden">
            {/* Shader effects */}
            <div 
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.25)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" 
              style={{ animation: "glowMove 8s ease-in-out infinite" }}
              aria-hidden="true" 
            />
            <div 
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.2)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" 
              style={{ animation: "glowPulse 6s ease-in-out infinite" }}
              aria-hidden="true" 
            />
            <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
              <h2 className="text-3xl font-semibold mb-10">Who is this course for</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="border-white/10 bg-white/5 p-6">
                  <div className="text-4xl font-bold text-primary mb-4">01</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Product Designers, Researchers</h3>
                  <p className="text-white/70">looking to build their AI portfolios and switch to the AI industry.</p>
                </Card>
                <Card className="border-white/10 bg-white/5 p-6">
                  <div className="text-4xl font-bold text-primary mb-4">02</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Design Leaders, Managers</h3>
                  <p className="text-white/70">looking to upskill and lead AI design projects.</p>
                </Card>
                <Card className="border-white/10 bg-white/5 p-6">
                  <div className="text-4xl font-bold text-primary mb-4">03</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Founders, business owners</h3>
                  <p className="text-white/70">who want to do AI consulting or level up their design services through AI</p>
                </Card>
              </div>
            </div>
          </section>

          {/* Prerequisites */}
          <section className="border-b border-white/10 bg-gradient-to-br from-primary/10 via-black to-black py-20">
            <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
              <h2 className="text-3xl font-semibold">Prerequisites</h2>
              <p className="mt-6 text-lg text-white/70">
                No coding required, bring only vibes. Eagerness to learn and a desire to leverage AI to level up your skills and bring AI products to life.
                  </p>
                </div>
          </section>

          {/* What's included */}
          <section className="relative border-b border-white/10 bg-black py-20 overflow-hidden">
            {/* Shader effects */}
            <div 
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.25)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" 
              style={{ animation: "glowMove 8s ease-in-out infinite" }}
              aria-hidden="true" 
            />
            <div 
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.2)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" 
              style={{ animation: "glowPulse 6s ease-in-out infinite" }}
              aria-hidden="true" 
            />
            <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
              <h2 className="text-3xl font-semibold">What's included</h2>
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {whatsIncluded.map((item) => (
                  <Card key={item.title} className="border-white/10 bg-white/5 p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                      </div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm text-white/70">{item.description}</p>
                    </Card>
                  ))}
              </div>
            </div>
          </section>

          {/* Recording */}
          <section id="watch-recording" className="border-b border-white/10 bg-black py-20">
            <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 px-4 py-2 text-sm text-white/60">
                <Play className="h-4 w-4" />
                Watch the vibe coding workshop recording
                        </div>
              <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.youtube.com/embed/aNNaVhnJdYc?rel=0&modestbranding=1"
                    title="Vibe Coding Weekend Workshop Recording"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    className="h-full w-full"
                  />
                      </div>
                </div>
              <p className="mt-6 text-base text-white/70">
                Get a head start by watching the workshop recording, then join the next live session to build alongside
                the community.
              </p>
            </div>
          </section>

          {/* Course outline */}
          <section className="relative border-b border-white/10 bg-black py-20 overflow-hidden">
            {/* Shader effects */}
            <div 
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.25)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" 
              style={{ animation: "glowMove 8s ease-in-out infinite" }}
              aria-hidden="true" 
            />
            <div 
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.2)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" 
              style={{ animation: "glowPulse 6s ease-in-out infinite" }}
              aria-hidden="true" 
            />
            
            <style>
              {`
                @keyframes glowMove {
                  0%, 100% {
                    transform: translate(0, 0) scale(1);
                    opacity: 0.25;
                  }
                  50% {
                    transform: translate(20px, -30px) scale(1.1);
                    opacity: 0.35;
                  }
                }
                @keyframes glowPulse {
                  0%, 100% {
                    transform: scale(1);
                    opacity: 0.2;
                  }
                  50% {
                    transform: scale(1.15);
                    opacity: 0.3;
                  }
                }
              `}
            </style>
            
            <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
              <h2 className="text-3xl font-semibold">Course outline</h2>
              <p className="mt-6 text-lg text-white/70">
                No coding required, bring only vibes. Eagerness to learn and a desire to leverage AI to level up your skills and bring AI products to life.
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cohortModules.map((module, index) => (
                  <Card key={module.title} className="border-white/10 bg-white/5 p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{module.title}</h3>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Course syllabus */}
          <section className="relative border-b border-white/10 bg-black py-20 overflow-hidden">
            {/* Shader effects */}
            <div 
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.25)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" 
              style={{ animation: "glowMove 8s ease-in-out infinite" }}
              aria-hidden="true" 
            />
            <div 
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.2)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" 
              style={{ animation: "glowPulse 6s ease-in-out infinite" }}
              aria-hidden="true" 
            />
            
            <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">
              <h2 className="text-3xl font-semibold">Course syllabus</h2>
              <Accordion type="single" collapsible className="mt-10 space-y-4">
                {cohortModules.map((module, index) => (
                  <AccordionItem
                    key={module.title}
                    value={`module-${index}`}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-6"
                  >
                    <AccordionTrigger className="py-6 text-left text-lg text-white hover:text-white/80">
                      <div className="flex flex-col text-left">
                        <span className="text-sm uppercase tracking-wide text-white/60">{module.week}</span>
                        <span className="mt-2 text-xl font-semibold">{module.title}</span>
                  </div>
                        </AccordionTrigger>
                    <AccordionContent className="pb-6 text-white/70">
                      {module.items.length > 0 ? (
                        <ul className="mt-4 space-y-3 text-base">
                          {module.items.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                              <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      ) : (
                        <p className="mt-4 text-base">0 items</p>
                      )}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
            </div>
          </section>

          {/* Meet your instructor */}
          <section className="relative border-b border-white/10 bg-black py-20 overflow-hidden">
            {/* Colorful shader effects */}
            <div 
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(147,51,234,0.3)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" 
              style={{ animation: "glowMove 8s ease-in-out infinite" }}
              aria-hidden="true" 
            />
            <div 
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(34,197,94,0.2)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" 
              style={{ animation: "glowPulse 6s ease-in-out infinite" }}
              aria-hidden="true" 
            />
            <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">
              <h2 className="text-3xl font-semibold mb-8">Meet your instructor</h2>
              <div className="grid gap-8 md:grid-cols-[200px_1fr]">
                <div>
                  <img
                    src={JohnImage}
                    alt="John Rodrigues"
                    className="w-full rounded-2xl border border-white/10 object-cover"
                  />
                                  </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white">John Rodrigues</h3>
                  <div className="space-y-3 text-white/70">
                    <p>
                      John Rodrigues is a Senior Product Designer, AI strategist, and author of <em>The AI Design Playbook</em>, a resource trusted by over 1,500 industry leaders. He is the founder of AI Design Academy
                    </p>
                    <p>
                      John currently leads AI design initiatives at JPMorgan Chase and has previously worked with Citi Bank. With over a decade of experience in product design, he holds a Master's degree in Interaction Design, a Bachelor's in Engineering, and an AI certification from Stanford University.
                    </p>
                    <p>
                      Recognized as one of the Top 10 mentors on ADPList, John has built a loyal community of over 10,000 followers on LinkedIn and authored book on design career. His work bridges design, technology, and AI helping the next generation of designers stay ahead in a rapidly evolving industry.
                    </p>
                                </div>
                        </div>
                      </div>
            </div>
          </section>

          {/* Gallery */}
          <section className="relative border-b border-white/10 bg-black py-20 overflow-hidden">
            {/* Colorful shader effects */}
            <div 
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,146,60,0.25)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none" 
              style={{ animation: "glowMove 8s ease-in-out infinite" }}
              aria-hidden="true" 
            />
            <div 
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(168,85,247,0.2)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" 
              style={{ animation: "glowPulse 6s ease-in-out infinite" }}
              aria-hidden="true" 
            />
            <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
              <div className="flex flex-col gap-6 text-left md:flex-row md:items-center md:justify-between">
                          <div>
                  <h2 className="text-3xl font-semibold">Inside the vibe coding weekend</h2>
                  <p className="mt-3 max-w-xl text-white/70">
                    Active, hands-on learning with guided demos, breakout rooms, and real-time collaboration.
                            </p>
                          </div>
                          </div>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {galleryImages.map((image, index) => (
                  <div
                    key={image}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
                  >
                    <img src={image} alt={`Workshop moment ${index + 1}`} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                ))}
                      </div>
            </div>
          </section>

          {/* Cohort details */}
          <section id="upcoming-cohort" className="relative border-b border-white/10 bg-black py-20 overflow-hidden">
            {/* Colorful shader effects */}
            <div 
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.25)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" 
              style={{ animation: "glowMove 8s ease-in-out infinite" }}
              aria-hidden="true" 
            />
            <div 
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(236,72,153,0.2)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none" 
              style={{ animation: "glowPulse 6s ease-in-out infinite" }}
              aria-hidden="true" 
            />
            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">Join an upcoming cohort</p>
              <h2 className="mt-4 text-3xl font-semibold">Vibe Coding Weekend Workshop</h2>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <Card className="border-white/10 bg-white/5 p-6 text-left">
                  <h3 className="text-lg font-semibold text-white">Cost</h3>
                  <p className="mt-3 text-3xl font-semibold text-white">$299</p>
                  <p className="text-sm uppercase tracking-wider text-white/60">USD</p>
                    </Card>
                <Card className="border-white/10 bg-white/5 p-6 text-left">
                  <h3 className="text-lg font-semibold text-white">Upcoming Cohort 1</h3>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    <li>Dates: Nov 14—16, 2025</li>
                    <li>Payment Deadline: Nov 14, 2025</li>
                    <li>Don't miss out! Enrollment closes in 4 days</li>
                  </ul>
                </Card>
                                </div>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 text-sm text-white/70">
                <p>Need help? Get reimbursed by your company or save 20%+ with a team enrollment.</p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button variant="cta" size="xl" asChild>
                    <a href="https://maven.com/productlearnio/vibe-coding-workshop" target="_blank" rel="noopener noreferrer">
                      Enroll
                    </a>
                  </Button>
                        <Button
                    variant="outline"
                    size="xl"
                    className="border-white/30 text-white hover:bg-white/10"
                          asChild
                        >
                    <a href="mailto:rodriguesjohnbaptist@gmail.com">Get reimbursed</a>
                        </Button>
                              </div>
                <p className="text-sm text-white/50">$299 · USD · 4 days left to enroll</p>
                                  </div>
                                </div>
          </section>

          {/* Community promise */}
          <section className="relative border-b border-white/10 bg-black py-20 overflow-hidden">
            {/* Colorful shader effects */}
            <div 
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(34,197,94,0.2)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none" 
              style={{ animation: "glowMove 8s ease-in-out infinite" }}
              aria-hidden="true" 
            />
            <div 
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_rgba(251,146,60,0.25)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none" 
              style={{ animation: "glowPulse 6s ease-in-out infinite" }}
              aria-hidden="true" 
            />
            <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
              <div className="grid gap-10 md:grid-cols-3">
                <Card className="border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white">Active hands-on learning</h3>
                  <p className="mt-3 text-sm text-white/70">This course builds on live workshops and hands-on projects</p>
                </Card>
                <Card className="border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white">Interactive and project-based</h3>
                  <p className="mt-3 text-sm text-white/70">You'll be interacting with other learners through breakout rooms and project teams</p>
                </Card>
                <Card className="border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white">Learn with a cohort of peers</h3>
                  <p className="mt-3 text-sm text-white/70">
                    Join a community of like-minded people who want to learn and grow alongside you.
                  </p>
                </Card>
              </div>
                              </div>
          </section>

          {/* FAQ */}
          <section className="relative border-b border-white/10 bg-black py-20 overflow-hidden">
            {/* Colorful shader effects */}
            <div 
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(168,85,247,0.25)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" 
              style={{ animation: "glowMove 8s ease-in-out infinite" }}
              aria-hidden="true" 
            />
            <div 
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.2)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" 
              style={{ animation: "glowPulse 6s ease-in-out infinite" }}
              aria-hidden="true" 
            />
            <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-10">
              <h2 className="text-3xl font-semibold text-center">Frequently Asked Questions</h2>
              <div className="mt-10 space-y-6">
                {faqs.map((faq) => (
                  <Card key={faq.question} className="border-white/10 bg-white/5 p-6">
                    <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                    <p className="mt-3 text-base text-white/70">{faq.answer}</p>
                          </Card>
                ))}
                      </div>
                    </div>
          </section>

          {/* Stay in the loop */}
          <section className="border-b border-white/10 bg-gradient-to-b from-white/5 via-black to-black py-20">
            <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">Stay in the loop</p>
              <h2 className="mt-4 text-3xl font-semibold">Sign up to be the first to know about course updates.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
                Join 1,500+ design leaders and founders exploring the intersection of product design and AI. Receive weekly
                insights, workshop recordings, and industry updates so you stay ahead.
              </p>

              <form className="mx-auto mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  defaultValue="rodriguesjohnbaptist@gmail.com"
                  placeholder="you@example.com"
                  className="flex-1 rounded-lg border border-white/20 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
                <Button variant="cta" size="lg" type="submit">
                  Sign up
                </Button>
              </form>
                    </div>
          </section>

          {/* Final CTA */}
          <section className="bg-black py-24">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center lg:px-10">
              <h2 className="text-3xl font-semibold">Ready to vibe code your first app?</h2>
              <p className="max-w-2xl text-lg text-white/70">
                Watch the workshop recording, join the next live session, and ship a real AI-powered experience in one
                weekend.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button variant="cta" size="xl" asChild>
                  <a href="#watch-recording">
                    Watch the recording
                    <Play className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <a href="#upcoming-cohort">
                    Join the live session
                    <CalendarDays className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </section>
          </>}
        </main>
      </div>
    </>
  );
};

export default VibeCodingAccelerator;
