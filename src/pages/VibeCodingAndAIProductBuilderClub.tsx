import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet";
import { CalendarDays, Clock, Users, Play, Sparkles, CheckCircle2, Video, BookmarkCheck, ShieldCheck, ArrowRight, BookOpen, Rocket, Code2, Hammer, Award } from "lucide-react";
import { DotScreenShader } from "@/components/DotScreenShader";
import { OutcomesSection } from "@/components/OutcomesSection";
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
  title: "Behind-the-scenes builds & resources",
  description: "Get exclusive access to behind-the-scenes builds, resources, and insights from real AI product development.",
  icon: BookOpen
}, {
  title: "Cursor Complete course",
  description: "Full access to the complete Cursor course. Master vibe coding and learn to build AI-powered products with Cursor.",
  icon: Code2
}, {
  title: "Native App Prototyping course",
  description: "Learn to prototype native apps and bring your AI product ideas to life across platforms with our comprehensive course.",
  icon: Rocket
}, {
  title: "Access to community of product builders",
  description: "Connect with a community of AI product builders. Share projects, get feedback, and collaborate with fellow creators.",
  icon: Users
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
  question: "What is AI Academy membership?",
  answer: "AI Academy membership is a community of builders creating AI-powered products. As a member, you get access to exclusive courses (Cursor Complete and Native App Prototyping), behind-the-scenes builds and resources, a community of product builders, and regular updates on the latest AI tools and trends."
}, {
  question: "I'm not technical, is this membership right for me?",
  answer: "Absolutely! AI Academy membership is designed for builders at all skill levels. You don't need any coding background to get started. We'll guide you through everything step-by-step, from learning vibe coding to building your first AI-powered products with the support of the community."
}, {
  question: "What do I get as a member?",
  answer: "As a member, you get access to: Behind-the-scenes builds & resources, the complete Cursor course, Native App Prototyping course, access to our community of product builders, and regular updates on the latest AI tools and updates. You can participate at your own pace and engage with the community whenever it's convenient for you."
}, {
  question: "How does the community work?",
  answer: "The community is a space where AI product builders connect, share projects, get feedback, and collaborate. You can ask questions, share your builds, learn from others, and get support from experienced builders. The community is active and welcoming to all skill levels."
}, {
  question: "Can I cancel my membership anytime?",
  answer: "Yes! You can cancel your membership anytime with no questions asked. There are no long-term commitments or cancellation fees. Your membership continues until you decide to cancel, giving you full flexibility to participate on your own terms."
}, {
  question: "How do I access the courses and resources?",
  answer: "Once you join the membership, you'll get immediate access to all resources including the Cursor Complete course, Native App Prototyping course, behind-the-scenes builds, and the community platform. You'll receive login details and instructions via email after joining."
}, {
  question: "How do I reach out if I have questions?",
  answer: "If you have any questions, you can reach out to us directly at hello@theaidesignacademy.com or connect with the community through our member platform where other builders can help answer your questions."
}, {
  question: "What's the best way to get support?",
  answer: "The best way to get support is through our member community platform where you can connect with other builders, or via email at hello@theaidesignacademy.com. We typically respond within 24-48 hours. For urgent matters, please include 'URGENT' in your subject line."
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
const VibeCodingAndAIProductBuilderClub = () => {
  return <>
      <Helmet>
        <title>AI Academy Membership</title>
        <meta name="description" content="Join AI Academy membership. Learn vibe coding, ship AI-powered products, and build alongside a community of creators and innovators." />
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
          {/* Exclusive Membership Header */}
          <section className="relative overflow-hidden border-b border-white/5 bg-[#0E0E10] py-24 sm:py-32 md:py-40 lg:py-48 min-h-screen flex items-center">
            {/* Shader background */}
            <DotScreenShader />

            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 w-full">
              {/* Header Section - Centered */}
              <div className="text-center mb-16 sm:mb-20 md:mb-24">
                {/* Exclusive Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-sm font-medium text-white border border-primary/20 mb-8">
                  <ShieldCheck className="h-4 w-4 text-white" />
                  Exclusive for Cohort Members Only
                </div>
                
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6 text-white">
                  AI Academy<br />Membership
                </h1>
                
                <p className="text-xl sm:text-2xl md:text-3xl text-white/60 leading-relaxed font-light max-w-3xl mx-auto mb-8">
                  Continue your journey with exclusive access to ongoing learning, community, and resources.
                </p>

                {/* CTA Buttons - Centered */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 sm:mb-20 md:mb-24">
                  <Button variant="cta" size="lg" className="w-full sm:w-auto sm:min-w-[220px] h-12 text-base font-medium">
                    Request Invite
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto sm:min-w-[220px] h-12 text-base font-medium bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                    Member Login
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Features Grid - Centered 2x2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <div className="group p-8 rounded-2xl border border-white/10 bg-white/3 hover:bg-white/5 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Continuous Courses</h3>
                  </div>
                  <p className="text-white/70 text-base leading-relaxed">Access to ongoing courses and learning materials to keep advancing your skills.</p>
                </div>
                
                <div className="group p-8 rounded-2xl border border-white/10 bg-white/3 hover:bg-white/5 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                      <CalendarDays className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Async Q&A</h3>
                  </div>
                  <p className="text-white/70 text-base leading-relaxed">Get answers to your questions through asynchronous Q&A with industry experts and community members.</p>
                </div>
                
                <div className="group p-8 rounded-2xl border border-white/10 bg-white/3 hover:bg-white/5 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                      <Video className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Behind-the-Scenes Walkthroughs</h3>
                  </div>
                  <p className="text-white/70 text-base leading-relaxed">Get exclusive access to behind-the-scenes content and project walkthroughs.</p>
                </div>
                
                <div className="group p-8 rounded-2xl border border-white/10 bg-white/3 hover:bg-white/5 hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Community Support</h3>
                  </div>
                  <p className="text-white/70 text-base leading-relaxed">Direct access to community support and discussions with fellow members.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Outcomes Section */}
          <div className="hidden">
            <OutcomesSection />
          </div>

          {/* Video Slider Section */}
          {/* <VideoSlider /> */}

          {/* Meet your instructor */}
          <section className="hidden relative border-b border-white/5 bg-[#0E0E10] py-12 sm:py-16 md:py-20 overflow-hidden">
            {/* Colorful shader effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(147,51,234,0.15)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" style={{
            animation: "glowMove 8s ease-in-out infinite"
          }} aria-hidden="true" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(34,197,94,0.1)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" style={{
            animation: "glowPulse 6s ease-in-out infinite"
          }} aria-hidden="true" />
            <div className="relative z-10 max-w-5xl sm:px-6 lg:px-10 mx-auto px-[24px]">
              <div className="max-w-4xl mx-auto">
                <div className="grid gap-6 sm:gap-8 md:grid-cols-[300px_1fr] md:items-start">
                  {/* Instructor Image */}
                  <div>
                    <div className="relative w-full mx-auto max-w-[400px] sm:max-w-[300px] aspect-square rounded-xl border border-white/5 overflow-hidden bg-white/5">
                      <img src={JohnImage2} alt="John Rodrigues" className="w-full h-full object-cover object-top" />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">John Rodrigues</h3>
                      <p className="text-lg text-white/60 font-medium leading-relaxed">
                        Sr. Product Design & Design Engineer
                      </p>
                    </div>
                    
                    <div className="space-y-4 text-white/60 text-base leading-relaxed">
                      <p>
                        Author of <span className="text-white">The AI Design Playbook</span>, trusted by 1,500+ industry leaders. Founder of AI Design Academy.
                      </p>
                      <p>
                        With over a decade of experience, John holds a Master's in Interaction Design and an AI certification from Stanford. He's recognized as one of the Top 10 mentors on ADPList and has built a community of over 10,000 followers on LinkedIn.
                      </p>
                    </div>
                    
                    {/* Trusted By Section */}
                    <div className="pt-6 border-t border-white/5">
                      <p className="text-sm font-medium text-white/40 mb-4 uppercase tracking-wider">PLAYBOOK TRUSTED BY DESIGNERS AT</p>
                      
                      {/* Mobile: Scrolling ticker */}
                      <div className="sm:hidden overflow-hidden relative">
                        <style>{`
                          @keyframes scroll-logos {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                          }
                          .logo-ticker {
                            animation: scroll-logos 10s linear infinite;
                          }
                          .logo-ticker:hover {
                            animation-play-state: paused;
                          }
                        `}</style>
                        <div className="logo-ticker flex items-center gap-8">
                          {/* First set of logos */}
                          <img src={AppleLogo} alt="Apple" className="h-6 w-auto object-contain opacity-70 flex-shrink-0" />
                          <img src={GoogleLogo} alt="Google" className="h-6 w-auto object-contain opacity-70 flex-shrink-0" />
                          <img src={MetaLogo} alt="Meta" className="h-6 w-auto object-contain opacity-70 flex-shrink-0" />
                          <img src={JPMorganLogo} alt="JPMorgan Chase" className="h-6 w-auto object-contain opacity-70 flex-shrink-0" />
                          <img src={IntercomLogo} alt="Intercom" className="h-6 w-auto object-contain opacity-70 flex-shrink-0" />
                          <img src={HubspotLogo} alt="HubSpot" className="h-6 w-auto object-contain opacity-70 flex-shrink-0" />
                          {/* Duplicate set for seamless loop */}
                          <img src={AppleLogo} alt="Apple" className="h-6 w-auto object-contain opacity-70 flex-shrink-0" />
                          <img src={GoogleLogo} alt="Google" className="h-6 w-auto object-contain opacity-70 flex-shrink-0" />
                          <img src={MetaLogo} alt="Meta" className="h-6 w-auto object-contain opacity-70 flex-shrink-0" />
                          <img src={JPMorganLogo} alt="JPMorgan Chase" className="h-6 w-auto object-contain opacity-70 flex-shrink-0" />
                          <img src={IntercomLogo} alt="Intercom" className="h-6 w-auto object-contain opacity-70 flex-shrink-0" />
                          <img src={HubspotLogo} alt="HubSpot" className="h-6 w-auto object-contain opacity-70 flex-shrink-0" />
                        </div>
                      </div>
                      
                      {/* Desktop: Static layout */}
                      <div className="hidden sm:flex items-center justify-start gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                        <img src={AppleLogo} alt="Apple" className="h-6 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                        <img src={GoogleLogo} alt="Google" className="h-6 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                        <img src={MetaLogo} alt="Meta" className="h-5 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                        <img src={JPMorganLogo} alt="JPMorgan Chase" className="h-5 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                        <img src={IntercomLogo} alt="Intercom" className="h-6 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                        <img src={HubspotLogo} alt="HubSpot" className="h-6 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Recent Accomplishment Section - Moved to bottom */}
              <div className="mt-12 sm:mt-16 md:mt-20 bg-white/5 rounded-lg p-6 md:p-8 border border-white/5">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <h4 className="text-xl font-medium text-white mb-4 flex items-center gap-2 tracking-tight">
                      <Award className="h-5 w-5 text-white/80" />
                      Recent Accomplishment
                    </h4>
                    <p className="text-base text-white/60 mb-6 leading-relaxed">Hackathon Winner Built UX Agent, a AI app that analyzes websites and gives feedback & UX audits, with AI agents fixes the websites to constantly self improve websites.<span className="text-white font-medium">Hackathon Winner</span> Built <span className="text-white">UX Agent</span>, a web platform that analyzes websites and gives feedback, in just two days with Vibe coding.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-white/40">
                      <span>Hosted by</span>
                      <div className="flex items-center gap-4 ml-2">
                        <img src={AGILogo} alt="AGI" className="h-4 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
                        <img src={OpenAILogo} alt="OpenAI" className="h-5 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
                        <img src={LoveableLogoMain} alt="Loveable" className="h-5 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <div className="hidden">
            <CoursePricingSection />
          </div>

          {/* FAQ */}
          <section className="hidden relative border-b border-white/5 bg-[#0E0E10] py-12 sm:py-16 md:py-20 overflow-hidden">
            {/* Colorful shader effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(168,85,247,0.15)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" style={{
            animation: "glowMove 8s ease-in-out infinite"
          }} aria-hidden="true" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.1)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" style={{
            animation: "glowPulse 6s ease-in-out infinite"
          }} aria-hidden="true" />
            <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
              <h2 className="text-3xl sm:text-4xl font-medium text-center tracking-tight mb-10">Frequently Asked Questions</h2>
              <div className="mt-6 sm:mt-10">
                <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
                  {faqs.map((faq, index) => <AccordionItem key={faq.question} value={`item-${index}`} className="border-white/5 bg-white/5 rounded-lg px-4 sm:px-6">
                      <AccordionTrigger className="text-lg sm:text-xl font-medium text-white hover:no-underline text-left py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base font-medium text-white/60 pt-0 pb-6 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>)}
                </Accordion>
              </div>
            </div>
          </section>

          {/* Resources Section */}
          <section className="hidden relative border-b border-white/5 bg-[#0E0E10] py-12 sm:py-16 md:py-20 overflow-hidden">
            {/* Colorful shader effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(168,85,247,0.15)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" style={{
            animation: "glowMove 8s ease-in-out infinite"
          }} aria-hidden="true" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.1)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" style={{
            animation: "glowPulse 6s ease-in-out infinite"
          }} aria-hidden="true" />
            <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
              <h2 className="text-3xl sm:text-4xl font-medium text-center tracking-tight mb-10">Resources</h2>
              <div className="mt-6 sm:mt-10">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                  <div className="aspect-video w-full">
                    <iframe 
                      src="https://www.youtube.com/embed/u-1dBIsXPM0?rel=0&modestbranding=1" 
                      title="AI Academy Resources" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen 
                      loading="lazy" 
                      className="h-full w-full" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="hidden relative bg-[#0E0E10] py-16 sm:py-20 md:py-24 overflow-hidden border-t border-white/5">
            {/* Shader effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" style={{
            animation: "glowPulse 6s ease-in-out infinite"
          }} aria-hidden="true" />
            <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-10 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 tracking-tight">Ready to Join AI Academy?</h2>
              <p className="text-lg md:text-xl text-white/60 mb-8 max-w-2xl mx-auto px-2 font-medium">
                Join a community of builders creating the next generation of AI products. Start building, learning, and growing with us today.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row justify-center">
                <Button variant="cta" size="lg" className="w-full sm:w-auto sm:min-w-[200px]" asChild>
                  <a href="https://www.skool.com/ai-design-academy-6114/about?ref=8d68f8fa4bf2422c8318d51d5f9fcadc" target="_blank" rel="noopener noreferrer">
                    Join Membership - $149/month
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto sm:min-w-[200px]">
                  Learn More
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </section>

          {/* Hide all other sections */}
          {false && <>
          {/* Video Section */}
          <section className="relative border-b border-white/10 bg-black py-20 overflow-hidden">
            {/* Colorful shader effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(59,130,246,0.3)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" style={{
              animation: "glowMove 8s ease-in-out infinite"
            }} aria-hidden="true" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(236,72,153,0.25)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none" style={{
              animation: "glowPulse 6s ease-in-out infinite"
            }} aria-hidden="true" />
            <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <div className="aspect-video w-full">
                  <iframe src="https://www.youtube.com/embed/An8IM-kPyms?rel=0&modestbranding=1" title="Vibe Coding Workshop Recording" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading="lazy" className="h-full w-full" />
                        </div>
                            </div>
                    </div>
          </section>

          {/* Highlights */}
          <section className="relative border-b border-white/10 bg-black py-20 overflow-hidden" id="highlights">
            {/* Shader effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.25)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" style={{
              animation: "glowMove 8s ease-in-out infinite"
            }} aria-hidden="true" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.2)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" style={{
              animation: "glowPulse 6s ease-in-out infinite"
            }} aria-hidden="true" />
            <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
              <h2 className="text-3xl font-semibold">Outcome from this course</h2>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {vibeCodingHighlights.map(item => <Card key={item.title} className="border-white/10 bg-white/5 p-6 hover:border-white/20 transition-colors">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                </div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-white/70">{item.description}</p>
                  </Card>)}
                      </div>
                  </div>
          </section>

          {/* Who is this course for */}
          <section className="relative border-b border-white/10 bg-black py-20 overflow-hidden">
            {/* Shader effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.25)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" style={{
              animation: "glowMove 8s ease-in-out infinite"
            }} aria-hidden="true" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.2)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" style={{
              animation: "glowPulse 6s ease-in-out infinite"
            }} aria-hidden="true" />
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
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.25)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" style={{
              animation: "glowMove 8s ease-in-out infinite"
            }} aria-hidden="true" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.2)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" style={{
              animation: "glowPulse 6s ease-in-out infinite"
            }} aria-hidden="true" />
            <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
              <h2 className="text-3xl font-semibold">What's included</h2>
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {whatsIncluded.map(item => <Card key={item.title} className="border-white/10 bg-white/5 p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                </div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm text-white/70">{item.description}</p>
                  </Card>)}
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
                  <iframe src="https://www.youtube.com/embed/aNNaVhnJdYc?rel=0&modestbranding=1" title="Vibe Coding Weekend Workshop Recording" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading="lazy" className="h-full w-full" />
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
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.25)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" style={{
              animation: "glowMove 8s ease-in-out infinite"
            }} aria-hidden="true" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.2)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" style={{
              animation: "glowPulse 6s ease-in-out infinite"
            }} aria-hidden="true" />
            
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
                {cohortModules.map((module, index) => <Card key={module.title} className="border-white/10 bg-white/5 p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                        {index + 1}
                </div>
              </div>
                    <h3 className="text-lg font-semibold text-white">{module.title}</h3>
                    </Card>)}
              </div>
            </div>
          </section>

          {/* Course syllabus */}
          <section className="relative border-b border-white/10 bg-black py-20 overflow-hidden">
            {/* Shader effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.25)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" style={{
              animation: "glowMove 8s ease-in-out infinite"
            }} aria-hidden="true" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.2)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" style={{
              animation: "glowPulse 6s ease-in-out infinite"
            }} aria-hidden="true" />
            
            <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">
              <h2 className="text-3xl font-semibold">Course syllabus</h2>
              <Accordion type="single" collapsible className="mt-10 space-y-4">
                {cohortModules.map((module, index) => <AccordionItem key={module.title} value={`module-${index}`} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-6">
                    <AccordionTrigger className="py-6 text-left text-lg text-white hover:text-white/80">
                      <div className="flex flex-col text-left">
                        <span className="text-sm uppercase tracking-wide text-white/60">{module.week}</span>
                        <span className="mt-2 text-xl font-semibold">{module.title}</span>
                      </div>
                        </AccordionTrigger>
                    <AccordionContent className="pb-6 text-white/70">
                      {module.items.length > 0 ? <ul className="mt-4 space-y-3 text-base">
                          {module.items.map(item => <li key={item} className="flex items-start gap-3">
                              <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                              <span>{item}</span>
                          </li>)}
                      </ul> : <p className="mt-4 text-base">0 items</p>}
                        </AccordionContent>
                      </AccordionItem>)}
                  </Accordion>
            </div>
          </section>

          {/* Gallery */}
          <section className="relative border-b border-white/10 bg-black py-20 overflow-hidden">
            {/* Colorful shader effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,146,60,0.25)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none" style={{
              animation: "glowMove 8s ease-in-out infinite"
            }} aria-hidden="true" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(168,85,247,0.2)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" style={{
              animation: "glowPulse 6s ease-in-out infinite"
            }} aria-hidden="true" />
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
                {galleryImages.map((image, index) => <div key={image} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                    <img src={image} alt={`Workshop moment ${index + 1}`} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>)}
                      </div>
            </div>
          </section>

          {/* Cohort details */}
          <section id="upcoming-cohort" className="relative border-b border-white/10 bg-black py-20 overflow-hidden">
            {/* Colorful shader effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.25)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" style={{
              animation: "glowMove 8s ease-in-out infinite"
            }} aria-hidden="true" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(236,72,153,0.2)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none" style={{
              animation: "glowPulse 6s ease-in-out infinite"
            }} aria-hidden="true" />
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
                  <Button variant="cta" size="lg" asChild>
                    <a href="https://maven.com/productlearnio/vibe-coding-workshop" target="_blank" rel="noopener noreferrer">
                      Enroll
                    </a>
                  </Button>
                        <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
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
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(34,197,94,0.2)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none" style={{
              animation: "glowMove 8s ease-in-out infinite"
            }} aria-hidden="true" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_rgba(251,146,60,0.25)_0%,_rgba(0,0,0,0)_60%)] pointer-events-none" style={{
              animation: "glowPulse 6s ease-in-out infinite"
            }} aria-hidden="true" />
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
                <input type="email" required defaultValue="rodriguesjohnbaptist@gmail.com" placeholder="you@example.com" className="flex-1 rounded-lg border border-white/20 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-primary focus:ring-2 focus:ring-primary/30" />
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
    </>;
};
export default VibeCodingAndAIProductBuilderClub;

