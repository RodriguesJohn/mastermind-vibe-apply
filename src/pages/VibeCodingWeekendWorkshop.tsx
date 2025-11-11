import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet";
import { CalendarDays, Clock, Users, Play, Sparkles, CheckCircle2, Video, BookmarkCheck, ShieldCheck } from "lucide-react";
import JohnImage from "@/assets/John.png";
import JPMorganLogo from "@/assets/Chase.png";
import IntercomLogo from "@/assets/intercom-1-logo-png-transparent.png";
import HubspotLogo from "@/assets/Hubspot.svg.png";
import MetaLogo from "@/assets/meta.png";
import GoogleLogo from "@/assets/Google.svg.png";
import WorkshopImage1 from "@/assets/workshop-1.jpg";
import WorkshopImage2 from "@/assets/workshop-2.jpg";
import WorkshopImage3 from "@/assets/workshop-3.jpg";

const vibeCodingHighlights = [
  {
    title: "Learn how to get started with vibe coding",
    description:
      "Discover the foundations of Vibe Coding learn what it is, how it works, and how to start building your first AI-powered interface.",
  },
  {
    title: "What tools to leverage for vibe coding",
    description:
      "Explore the essential tools that make Vibe Coding possible. Learn how to use platforms like Cursor, Lovable, React, and AI-powered assistants to design, code, and ship faster.",
  },
  {
    title: "Take a look at the demos in action.",
    description:
      "Watch real Vibe Coding demos in action and see how ideas turn into interactive apps using AI and modern design tools.",
  },
  {
    title: "Do a vibe coding challenge.",
    description:
      "Put your skills to the test with a hands-on Vibe Coding challenge. Apply what you've learned to build and ship your own mini AI-powered project.",
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
    description: "Revisit course content, playbacks, and resources whenever you need a refresher.",
    icon: BookmarkCheck,
  },
  {
    title: "Community of peers",
    description: "Stay accountable and share insights with an active community of designers and builders.",
    icon: Sparkles,
  },
  {
    title: "Certificate of completion",
    description: "Showcase your new skills to hiring managers, clients, or on LinkedIn.",
    icon: CheckCircle2,
  },
  {
    title: "Maven guarantee",
    description: "Eligible for a full refund up until the halfway point of the course.",
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
    question: "What happens if I can’t make a live session?",
    answer:
      "You’ll get the full recording, plus access to the community for recaps and Q&A. Join the next live session or catch up on your own time.",
  },
  {
    question: "I work full-time, what is the expected time commitment?",
    answer:
      "Plan for 2–3 hours across the workshop weekend. The core live session runs 90 minutes, and you’ll have optional time to complete the vibe coding challenge.",
  },
  {
    question: "What’s the refund policy?",
    answer:
      "The Maven Guarantee has you covered. You’re eligible for a full refund up until the halfway point of the course.",
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

const VibeCodingWeekendWorkshop = () => {
  return (
    <>
      <Helmet>
        <title>Vibe Coding Weekend Workshop</title>
        <meta
          name="description"
          content="Learn where to start with vibe coding, explore the best tools, and build your first AI-powered app in a weekend with John Rodrigues."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <Navigation />

        <main>
          {/* Hero */}
          <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-white/5 via-black to-black py-20 md:py-28">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_60%)] blur-3xl opacity-60" />
            <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center md:gap-16 lg:px-10">
              <div className="flex-1 space-y-6">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-white/60">
                  <span className="rounded-full border border-white/20 px-3 py-1">New</span>
                  <span className="rounded-full border border-white/20 px-3 py-1">2 Days</span>
                  <span className="rounded-full border border-white/20 px-3 py-1">Cohort-based Course</span>
                </div>

                <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  Vibe Coding Weekend Workshop
                </h1>
                <p className="max-w-2xl text-lg text-white/70 sm:text-xl">
                  Learn where to start with vibe coding, explore the best tools and resources, and vibe code your first
                  AI-powered app from scratch in a weekend.
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

              <div className="flex-1">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-1">
                  <div className="h-full w-full rounded-[26px] bg-black/40 p-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={JohnImage}
                        alt="John Rodrigues"
                        className="h-20 w-20 rounded-2xl border border-white/10 object-cover"
                      />
                      <div>
                        <p className="text-sm uppercase tracking-widest text-white/60">Hosted by</p>
                        <h3 className="text-2xl font-semibold text-white">John Rodrigues</h3>
                        <p className="text-sm text-white/60">
                          Sr. Product Designer at JPMorgan Chase · Founder of AI Design Academy
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 space-y-2 text-sm text-white/70">
                      <p>Mentored designers from:</p>
                      <div className="flex flex-wrap items-center gap-4">
                        {companyLogos.map((logo) => (
                          <div key={logo.alt} className="flex h-12 items-center justify-center rounded-lg bg-white/5 px-4">
                            <img src={logo.src} alt={logo.alt} className="h-6 w-auto mix-blend-screen" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Course Overview */}
          <section className="border-b border-white/10 bg-black py-20">
            <div className="mx-auto max-w-5xl px-6 lg:px-10">
              <div className="grid gap-12 md:grid-cols-2">
                <div className="space-y-6">
                  <h2 className="text-3xl font-semibold">Course overview</h2>
                  <p className="text-lg text-white/70">
                    Learn the basics of Vibe Coding, build your first AI-powered app & publish
                  </p>
                  <p className="text-lg text-white/70">
                    The Vibe Coding Bootcamp helps designers, builders, and innovators go from simply exploring AI tools to confidently designing and shipping real AI-powered products.
                  </p>
                  <p className="text-lg text-white/70">
                    You'll learn the foundations of Vibe Coding the creative workflow that blends design, AI, and code into one seamless process. Through guided lessons, hands-on demos, and a final project, you'll master the tools, mindset, and techniques needed to bring ideas to life fast.
                  </p>
                  <p className="text-lg text-white/70">
                    By the end of this bootcamp, you'll have built your own interactive app, gained practical prototyping skills, and developed the confidence to create apps with AI.
                  </p>
                </div>
                <div className="space-y-6">
                  <Card className="border-white/10 bg-white/5 backdrop-blur">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center gap-3 text-sm uppercase tracking-widest text-white/60">
                        <CalendarDays className="h-4 w-4" />
                        Nov 14—16, 2025
                      </div>
                      <CardTitle className="text-2xl text-white">Weekend immersion</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-white/70">
                      <p className="flex items-center gap-3 text-base">
                        <Clock className="h-5 w-5 text-white/50" />
                        Sat 11/15 7:00 PM—8:30 PM (UTC)
                      </p>
                      <p className="flex items-center gap-3 text-base">
                        <Users className="h-5 w-5 text-white/50" />
                        Cohort-based learning with live collaboration
                      </p>
                      <p className="flex items-center gap-3 text-base">
                        <Video className="h-5 w-5 text-white/50" />
                        Recording delivered within 24 hours
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Highlights */}
          <section className="border-b border-white/10 bg-black py-20" id="highlights">
            <div className="mx-auto max-w-6xl px-6 lg:px-10">
              <h2 className="text-3xl font-semibold">What you’ll get out of this course</h2>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {vibeCodingHighlights.map((item) => (
                  <Card key={item.title} className="border-white/10 bg-white/5 p-6 hover:border-white/20 transition-colors">
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-white/70">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Who is this course for */}
          <section className="border-b border-white/10 bg-black py-20">
            <div className="mx-auto max-w-6xl px-6 lg:px-10">
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
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">Prerequisites</p>
              <h2 className="mt-4 text-3xl font-semibold">Eagerness to learn</h2>
              <p className="mt-6 text-lg text-white/70">
                Eagerness to learn and a desire to leverage AI to level up your skills and bring AI products to life.
              </p>
            </div>
          </section>

          {/* What's included */}
          <section className="border-b border-white/10 bg-black py-20">
            <div className="mx-auto max-w-6xl px-6 lg:px-10">
              <h2 className="text-3xl font-semibold">What’s included</h2>
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
              <p className="mt-6 text-sm text-white/60">
                This course is backed by the Maven Guarantee. Students are eligible for a full refund up until the halfway
                point of the course.
              </p>
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

          {/* Course syllabus */}
          <section className="border-b border-white/10 bg-black py-20">
            <div className="mx-auto max-w-5xl px-6 lg:px-10">
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
                      <ul className="mt-4 space-y-3 text-base">
                        {module.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* Meet your instructor */}
          <section className="border-b border-white/10 bg-black py-20">
            <div className="mx-auto max-w-5xl px-6 lg:px-10">
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
          <section className="border-b border-white/10 bg-black py-20">
            <div className="mx-auto max-w-6xl px-6 lg:px-10">
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
          <section id="upcoming-cohort" className="border-b border-white/10 bg-black py-20">
            <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
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
          <section className="border-b border-white/10 bg-black py-20">
            <div className="mx-auto max-w-6xl px-6 lg:px-10">
              <div className="grid gap-10 md:grid-cols-3">
                <Card className="border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white">Active hands-on learning</h3>
                  <p className="mt-3 text-sm text-white/70">This course is anchored in live workshops and shipped projects.</p>
                </Card>
                <Card className="border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white">Interactive and project-based</h3>
                  <p className="mt-3 text-sm text-white/70">Breakout rooms, project teams, and feedback loops keep you building.</p>
                </Card>
                <Card className="border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white">Learn with a cohort</h3>
                  <p className="mt-3 text-sm text-white/70">
                    Join peers leveling up, stay accountable, and share your progress every step of the way.
                  </p>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="border-b border-white/10 bg-black py-20">
            <div className="mx-auto max-w-4xl px-6 lg:px-10">
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
              <h2 className="mt-4 text-3xl font-semibold">Get workshop updates and AI design resources</h2>
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
        </main>
      </div>
    </>
  );
};

export default VibeCodingWeekendWorkshop;

