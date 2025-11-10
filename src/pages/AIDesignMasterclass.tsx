import { Helmet } from "react-helmet";
import { Play, ChevronRight, ChevronLeft, ArrowRight, Lock } from "lucide-react";
import { useMemo, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface Lesson {
  id: number;
  title: string;
  videoId: string;
  unlocked: boolean;
}

interface CourseSection {
  id: number;
  title: string;
  lessons: Lesson[];
}

const AIDesignMasterclass = () => {
  const courseSections = useMemo<CourseSection[]>(
    () => [
      {
        id: 0,
        title: "Welcome",
        lessons: [],
      },
      {
        id: 1,
        title: "Where to Get Started with AI",
        lessons: [
          { id: 101, title: "Course Trailer", videoId: "dQw4w9WgXcQ", duration: "" , unlocked: true },
          { id: 102, title: "How AI Models Work", videoId: "1La4QzGeaaQ", duration: "", unlocked: true },
        ],
      },
      {
        id: 2,
        title: "Must-Have Skills",
        lessons: [
          { id: 201, title: "Complete Roadmap", videoId: "2Vv-BfVoq4g", duration: "", unlocked: true },
        ],
      },
      {
        id: 3,
        title: "My Journey Learning AI",
        lessons: [
          { id: 301, title: "Designing AI Experiences", videoId: "O4irXQhgMqg", duration: "", unlocked: true },
          { id: 302, title: "Building with AI Agents", videoId: "aqz-KE-bpKQ", duration: "", unlocked: true },
        ],
      },
      {
        id: 4,
        title: "From Theory to Application",
        lessons: [
          { id: 401, title: "Lesson 1", videoId: "dQw4w9WgXcQ", duration: "", unlocked: true },
        ],
      },
      {
        id: 5,
        title: "Leading the AI Revolution",
        lessons: [
          { id: 501, title: "Lesson 1", videoId: "dQw4w9WgXcQ", duration: "", unlocked: true },
        ],
      },
      {
        id: 6,
        title: "Masterclass",
        lessons: [
          { id: 601, title: "Masterclass", videoId: "7CiJGrQR0KE", duration: "", unlocked: true },
        ],
      },
      {
        id: 7,
        title: "Workshop Invite",
        lessons: [
          { id: 701, title: "Workshop Invite", videoId: "dQw4w9WgXcQ", duration: "", unlocked: true },
        ],
      },
    ],
    []
  );

  const [activeSectionId, setActiveSectionId] = useState<number | null>(courseSections[0]?.id ?? null);
  const [selectedLessonId, setSelectedLessonId] = useState<number | null>(
    courseSections[0]?.lessons[0]?.id ?? null
  );
  const [masterclassUnlocked, setMasterclassUnlocked] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    acceptCommunication: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  
  const allLessons = useMemo(() => courseSections.flatMap(section => section.lessons), [courseSections]);

  const handleLessonClick = (lesson: Lesson, sectionId?: number) => {
    if (sectionId) {
      setActiveSectionId(sectionId);
    }
    setSelectedLessonId(lesson.id);
  };

  const handleSectionClick = (sectionId: number) => {
    const section = courseSections.find((s) => s.id === sectionId);
    if (!section) return;
    
    setActiveSectionId(sectionId);
    const firstLesson = section.lessons[0];
    if (firstLesson) {
      setSelectedLessonId(firstLesson.id);
    } else {
      setSelectedLessonId(null);
    }
  };

  const handleMasterclassClick = () => {
    if (!masterclassUnlocked) {
      setModalOpen(true);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptCommunication) {
      setCheckboxError(true);
      // Remove error state after animation
      setTimeout(() => setCheckboxError(false), 600);
      return;
    }
    
    setCheckboxError(false);

    if (!formData.name || !formData.email) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send data to webhook
      const webhookUrl = 'https://n8n.srv1037166.hstgr.cloud/webhook-test/67040c87-56cc-483c-8aef-6e43e60d1e6c';
      
      const payload = {
        name: formData.name,
        email: formData.email,
        acceptCommunication: formData.acceptCommunication,
        timestamp: new Date().toISOString(),
      };

      console.log('Submitting to webhook:', webhookUrl);
      console.log('Payload:', payload);

      // Build URL with query parameters for GET request
      const url = new URL(webhookUrl);
      url.searchParams.append('name', formData.name);
      url.searchParams.append('email', formData.email);
      url.searchParams.append('acceptCommunication', formData.acceptCommunication.toString());
      url.searchParams.append('timestamp', new Date().toISOString());

      const response = await fetch(url.toString(), {
        method: 'GET',
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      // Check if response is ok or if it's a 200-299 status code
      if (response.ok || (response.status >= 200 && response.status < 300)) {
        // Unlock masterclass even if webhook response isn't perfect
        setMasterclassUnlocked(true);
        setModalOpen(false);
        
        // Navigate to masterclass section
        const masterclassSection = courseSections.find(s => s.id === 6);
        if (masterclassSection) {
          setActiveSectionId(6);
          const firstLesson = masterclassSection.lessons[0];
          if (firstLesson) {
            setSelectedLessonId(firstLesson.id);
          }
        }
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          acceptCommunication: false,
        });
      } else {
        // Try to get error message from response
        let errorMessage = 'There was an error submitting your information. Please try again.';
        try {
          const errorData = await response.text();
          console.error('Error response:', errorData);
          if (errorData) {
            errorMessage = `Error: ${errorData}`;
          }
        } catch (e) {
          console.error('Error reading response:', e);
        }
        alert(errorMessage);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Even if webhook fails, unlock the masterclass for better UX
      // The webhook might have received the data but failed to respond
      setMasterclassUnlocked(true);
      setModalOpen(false);
      
      // Navigate to masterclass section
      const masterclassSection = courseSections.find(s => s.id === 6);
      if (masterclassSection) {
        setActiveSectionId(6);
        const firstLesson = masterclassSection.lessons[0];
        if (firstLesson) {
          setSelectedLessonId(firstLesson.id);
        }
      }
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        acceptCommunication: false,
      });
      
      // Show success message even if webhook had issues
      alert('Masterclass unlocked! The webhook may have had connection issues, but your access has been granted.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    const currentIndex = courseSections.findIndex(s => s.id === activeSectionId);
    if (currentIndex < courseSections.length - 1) {
      const nextSection = courseSections[currentIndex + 1];
      handleSectionClick(nextSection.id);
    }
  };

  const handlePrevious = () => {
    const currentIndex = courseSections.findIndex(s => s.id === activeSectionId);
    if (currentIndex > 0) {
      const prevSection = courseSections[currentIndex - 1];
      handleSectionClick(prevSection.id);
    }
  };

  const selectedVideo = allLessons.find(lesson => lesson.id === selectedLessonId);
  const activeSection = courseSections.find(section => section.id === activeSectionId);
  const currentIndex = courseSections.findIndex(s => s.id === activeSectionId);
  const hasNext = currentIndex < courseSections.length - 1;
  const hasPrevious = currentIndex > 0;

  return (
    <>
      <Helmet>
        <title>AI Design Masterclass - Vibe Coding Mastermind</title>
        <meta 
          name="description" 
          content="Master AI design with our comprehensive masterclass designed for designers and product leaders." 
        />
        <style>{`
          .paper-texture {
            background-color: #ffffff;
            background-image: 
              radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0),
              linear-gradient(180deg, rgba(0,0,0,0.02) 0%, transparent 50%),
              linear-gradient(90deg, rgba(0,0,0,0.02) 0%, transparent 50%);
            background-size: 20px 20px, 100% 100%, 100% 100%;
            position: relative;
          }
          .paper-texture::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(0,0,0,0.01) 2px,
                rgba(0,0,0,0.01) 4px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(0,0,0,0.01) 2px,
                rgba(0,0,0,0.01) 4px
              );
            pointer-events: none;
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
            20%, 40%, 60%, 80% { transform: translateX(4px); }
          }
          .checkbox-shake {
            animation: shake 0.5s ease-in-out;
          }
        `}</style>
      </Helmet>
      
      
      <div className="min-h-screen bg-background flex">
        <div className="flex-1 flex flex-col">
          <Navigation />
          
          <main className="flex-1 pb-20 md:pb-0">
            {/* Course Content Layout */}
            <section className="py-8">
              <div className="px-5 sm:px-8 md:px-12 lg:px-20 max-w-[1800px] mx-auto">
                <div className="grid lg:grid-cols-[350px_1fr] gap-8">
                {/* Navigation - Left Sidebar */}
                <aside className="w-full hidden lg:block sticky top-20 h-[calc(100vh-5rem)] border-r border-border/40 pr-6 py-6 bg-card/30 backdrop-blur-sm overflow-y-auto">
                  <div className="flex flex-col gap-2">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/40 mb-2 px-2">Course Sections</p>
                    {courseSections.map((section) => {
                      const isActive = section.id === activeSectionId;
                      return (
                        <button
                          key={section.id}
                          onClick={() => handleSectionClick(section.id)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "text-white/70 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <span className={`text-xs font-semibold ${
                            isActive ? "text-white" : "text-white/50"
                          }`}>
                            {section.id === 0 ? "W" : section.id}
                          </span>
                          <span className="text-sm font-medium flex-1 truncate">
                            {section.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </aside>

                {/* Main Video Player - Centered */}
                <div className="flex flex-col">
                  <div className="w-full space-y-6">
                    {/* Header above video */}
                    <div className="mb-4">
                      <p className="text-base md:text-lg text-muted-foreground mb-4">DON'T KNOW WHERE TO START?</p>
                      <h1 className="text-3xl md:text-4xl font-medium">Step By Step For You To Get Started With AI.</h1>
                    </div>
                    
                    <div className="border-b border-border/40 mb-6"></div>
                    
                    <Card className={`overflow-hidden ${activeSectionId === 0 || activeSectionId === 1 || activeSectionId === 2 || activeSectionId === 3 || activeSectionId === 4 || activeSectionId === 5 || activeSectionId === 7 ? 'border-gray-200' : 'border-border/40'}`}>
                      {activeSectionId === 0 ? (
                        <div className="p-12 md:p-16 lg:p-20 bg-white dark:bg-gray-50 paper-texture relative">
                            <div className="flex gap-2 mb-6">
                              <button onClick={handlePrevious} disabled={!hasPrevious} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all border text-sm ${hasPrevious ? "border-gray-300 bg-white hover:bg-gray-50 text-gray-700 cursor-pointer" : "border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed text-gray-400"}`}>
                                <ChevronLeft className="w-4 h-4" />
                                <span>Previous</span>
                              </button>
                              <button onClick={handleNext} disabled={!hasNext} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all border text-sm ${hasNext ? "border-gray-300 bg-white hover:bg-gray-50 text-gray-700 cursor-pointer" : "border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed text-gray-400"}`}>
                                <span>Next</span>
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="space-y-4 text-left">
                              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-900">Welcome to the step-by-step guide.</h2>
                              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                                This comprehensive guide is designed to help you navigate your AI learning journey. Over the next sections, you'll discover everything you need to get started, from foundational skills to practical application and leadership in the AI revolution.
                              </p>
                              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                                Here is the outline of this series you're going to be going through.
                              </p>
                              <ul className="space-y-3 text-base md:text-lg text-gray-700 leading-relaxed list-disc list-inside">
                                <li>You will learn how to get started</li>
                                <li>What are the skills you need to have</li>
                                <li>Key journeys to learning</li>
                                <li>Learn from my journey navigating and learning AI</li>
                                <li>Going from theory to application</li>
                                <li>Leading AI revolution</li>
                                <li>Watch a recorded masterclass</li>
                                <li>Get resources</li>
                              </ul>
                            </div>
                          </div>
                      ) : activeSectionId === 1 ? (
                        <div className="p-12 md:p-16 lg:p-20 bg-white dark:bg-gray-50 paper-texture relative">
                          <div className="flex gap-2 mb-6">
                            <button onClick={handlePrevious} disabled={!hasPrevious} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all border text-sm ${hasPrevious ? "border-gray-300 bg-white hover:bg-gray-50 text-gray-700 cursor-pointer" : "border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed text-gray-400"}`}>
                              <ChevronLeft className="w-4 h-4" />
                              <span>Previous</span>
                            </button>
                            <button onClick={handleNext} disabled={!hasNext} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all border text-sm ${hasNext ? "border-gray-300 bg-white hover:bg-gray-50 text-gray-700 cursor-pointer" : "border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed text-gray-400"}`}>
                              <span>Next</span>
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="space-y-6 text-left">
                            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-900">Where to Get Started with AI</h2>
                            <div className="space-y-4">
                              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                So we've heard this multiple times: "I don't know where to start, it's overwhelming and it's changing so fast."
                              </p>
                              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                We've got you. We've mapped out these 6 steps and resources to help you go from chaos to clarity:
                              </p>
                            </div>
                            <div className="space-y-8 mt-8">
                              <div className="space-y-3">
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Step 1: Stay updated with industry changes, new tools, and workflows</h3>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                  Which resources should you follow to keep up? You can join the <a href="https://johnrodrigues.substack.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline font-medium">AI Design Playbook</a>, where we share the latest market changes and in-depth articles to help you stay ahead.
                                </p>
                              </div>
                              <div className="space-y-3">
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Step 2: Learn the AI foundations and key terminology</h3>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                  Just following trends is not enough; understanding the core foundations of AI is essential. Understand what AI is, the history of AI, and various concepts like machine learning and others. In our cohort, we cover this in depth too in an easy way for you to level up your foundation. But you can always learn about the foundation of AI by reading the articles available online.
                                </p>
                              </div>
                              <div className="space-y-3">
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Step 3: Create mini projects</h3>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                  You're not starting over, you're stacking new skills. Run small experimental projects: take your Figma design and prototype it in Figma Make, Lovable, or Cursor. If you spot a repetitive task, try automating it with agentic workflow tools like n8n. The best way to learn is by applying, not just reading.
                                </p>
                              </div>
                              <div className="space-y-3">
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Step 4: Share what you learn</h3>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                  If you're comfortable, share publicly on social media. If not, share internally with your team or within communities you're part of. This helps you get feedback and collaborate with others.
                                </p>
                              </div>
                              <div className="space-y-3">
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Step 5: Focus on strategy, not just tools</h3>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                  Don't only chase the latest tools think about what makes AI products successful. Understand why some products fail, how to design for trust, and how to look at them from a systems and strategy level. This will help you lead and solve problems that are grounded in user needs while delivering human-centered products.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : activeSectionId === 2 ? (
                        <div className="p-12 md:p-16 lg:p-20 bg-white dark:bg-gray-50 paper-texture relative">
                          {/* Previous/Next Navigation */}
                          <div className="flex gap-2 mb-6">
                            <button
                              onClick={handlePrevious}
                              disabled={!hasPrevious}
                              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all border text-sm ${
                                hasPrevious
                                  ? "border-gray-300 bg-white hover:bg-gray-50 text-gray-700 cursor-pointer"
                                  : "border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed text-gray-400"
                              }`}
                            >
                              <ChevronLeft className="w-4 h-4" />
                              <span>Previous</span>
                            </button>
                            
                            <button
                              onClick={handleNext}
                              disabled={!hasNext}
                              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all border text-sm ${
                                hasNext
                                  ? "border-gray-300 bg-white hover:bg-gray-50 text-gray-700 cursor-pointer"
                                  : "border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed text-gray-400"
                              }`}
                            >
                              <span>Next</span>
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <div className="space-y-6 text-left">
                            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-900">Must-Have Skills in the Age of AI</h2>
                            <div className="space-y-4 mb-8">
                              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                AI is definitely shifting our skill sets. Our previous approaches are being replaced by more efficient workflows and new ways of working. Based on industry reports and observations, we've mapped out 5 key skill areas every designer needs to focus on:
                              </p>
                            </div>

                            <div className="space-y-8">
                              <div className="space-y-3">
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">1. AI Fluency</h3>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                  You need to speak the language and build your vocabulary. When someone mentions RAG or AI agents, you shouldn't feel lost. Understanding the foundations is critical.
                                </p>
                              </div>

                              <div className="space-y-3">
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">2. Prototyping with AI</h3>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                  We're moving away from static screens and toward dynamic, interactive experiences. Prototyping with vibe-coding and AI-powered tools allows you to show real states and interactions, which goes a long way in product design.
                                </p>
                              </div>

                              <div className="space-y-3">
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">3. AI Agents and Systems Thinking</h3>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                  AI agents are becoming the next SaaS. Designers must learn how to design these agents, workflows, and systems solving both user and business problems at scale.
                                </p>
                              </div>

                              <div className="space-y-3">
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">4. AI-Assisted Design Systems</h3>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                  Design systems will become the backbone of product teams, and making them AI-ready will be a core skill. Learn how to evolve design systems with AI integration in mind.
                                </p>
                              </div>

                              <div className="space-y-3">
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">5. Strategy and Leadership</h3>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                  Much of the execution work will get easier or even replaced. Your ability to strategize, lead, and connect design to business outcomes will be the timeless skill that sets you apart.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : activeSectionId === 3 ? (
                        <div className="p-12 md:p-16 lg:p-20 bg-white dark:bg-gray-50 paper-texture relative">
                          {/* Previous/Next Navigation */}
                          <div className="flex gap-2 mb-6">
                            <button
                              onClick={handlePrevious}
                              disabled={!hasPrevious}
                              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all border text-sm ${
                                hasPrevious
                                  ? "border-gray-300 bg-white hover:bg-gray-50 text-gray-700 cursor-pointer"
                                  : "border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed text-gray-400"
                              }`}
                            >
                              <ChevronLeft className="w-4 h-4" />
                              <span>Previous</span>
                            </button>
                            
                            <button
                              onClick={handleNext}
                              disabled={!hasNext}
                              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all border text-sm ${
                                hasNext
                                  ? "border-gray-300 bg-white hover:bg-gray-50 text-gray-700 cursor-pointer"
                                  : "border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed text-gray-400"
                              }`}
                            >
                              <span>Next</span>
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <div className="space-y-6 text-left">
                            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-900">My Journey Learning AI</h2>
                            <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
                              <p>
                                I'm John Rodrigues, founder of AI Design Academy. Today, I want to share my journey in learning AI and why I'm doubling down on it.
                              </p>
                              <p>
                                I first got into AI in 2021 while taking a program at Stanford. I didn't talk much about it at the time, but things changed when ChatGPT was released. After making a video about it that gained a lot of attention, I realized this technology was the next big thing. I started researching deeply, giving talks, and experimenting whenever I could. This led me to document my thoughts and learning in the AI Design Playbook, now read by designers at Apple, Google, and more.
                              </p>
                              <p>
                                My curiosity led me to pitch and lead AI projects at Citi Bank, which were well-received by executives. Later, at JPMorgan Chase, I became known for my work in AI, hosting multiple workshops and leading projects across teams.
                              </p>
                              <p>
                                People kept reaching out to me for courses, resources, and advice. But I found most resources too technical or too hyped rarely useful for designers and creatives. That's why I decided to take matters into my own hands and founded AI Design Academy, where I now run 4-week live cohorts.
                              </p>
                              <p>
                                You're here because you want to learn too and I'm excited to share what I've learned with you. With 10+ years in the design industry, a master's in Interaction Design, and experience mentoring 300+ designers, my mission is to help you level up your skills in this new era.
                              </p>
                              <p className="mt-8">
                                – John Rodrigues
                              </p>
                              <div className="mt-8">
                                <a 
                                  href="https://www.linkedin.com/in/john-rodrigues4/" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-700 underline font-medium"
                                >
                                  Connect me on LinkedIn
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : activeSectionId === 4 ? (
                        <div className="p-12 md:p-16 lg:p-20 bg-white dark:bg-gray-50 paper-texture relative">
                          {/* Previous/Next Navigation */}
                          <div className="flex gap-2 mb-6">
                            <button
                              onClick={handlePrevious}
                              disabled={!hasPrevious}
                              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all border text-sm ${
                                hasPrevious
                                  ? "border-gray-300 bg-white hover:bg-gray-50 text-gray-700 cursor-pointer"
                                  : "border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed text-gray-400"
                              }`}
                            >
                              <ChevronLeft className="w-4 h-4" />
                              <span>Previous</span>
                            </button>
                            
                            <button
                              onClick={handleNext}
                              disabled={!hasNext}
                              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all border text-sm ${
                                hasNext
                                  ? "border-gray-300 bg-white hover:bg-gray-50 text-gray-700 cursor-pointer"
                                  : "border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed text-gray-400"
                              }`}
                            >
                              <span>Next</span>
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <div className="space-y-6 text-left">
                            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-900">From Theory to Application</h2>
                            <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
                              <p>
                                You can learn all the theory you want but what truly matters is leading with curiosity, experimenting with new tools, and figuring out how these tools can actually fit into your workflow.
                              </p>
                              <p>
                                At its core, design is about identifying and understanding real problems, and then exploring how AI might efficiently solve them. But remember to play devil's advocate: you don't need AI everywhere. True fluency comes from thinking critically about when and where AI adds value.
                              </p>
                              <p>
                                Start by looking for use cases where you encounter repetitive or particularly tough challenges. For instance, building an interactive prototype with AI capabilities might feel overwhelming, but no-code tools like Cursor or Lovable can help you visually communicate your concept with much less friction.
                              </p>
                              <p>
                                If you spot pain points in repetitive processes, solutions like n8n and other workflow automation tools can be game changers. Exploring these is becoming more and more vital.
                              </p>
                              <p>
                                Don't forget designing for trust is essential. As more products adopt AI, good visual language and design craft become real differentiators. Your ability to bring both strategy and execution to the table matters more than ever; we're seeing that designers who can do both are in high demand.
                              </p>
                              <p>
                                Going from theory to real-world application often starts with a project you're genuinely curious about. These can be personal projects — they help you communicate ideas, demonstrate AI's potential in your organization, and give you the confidence to lead change.
                              </p>
                              <p>
                                Mini projects are the fastest way to bridge the gap between theory and practice. Whether you're an individual designer or a leader, approaching all this with an experimental and growth mindset is key. By fostering this kind of creative "sculpture" for yourself and others, you'll pave the way for more experimentation, learning, and ultimately, fluency.
                              </p>
                              <p>
                                The more you experiment and create, the more fluent and adaptive you become.
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : activeSectionId === 5 ? (
                        <div className="p-12 md:p-16 lg:p-20 bg-white dark:bg-gray-50 paper-texture relative">
                          {/* Previous/Next Navigation */}
                          <div className="flex gap-2 mb-6">
                            <button
                              onClick={handlePrevious}
                              disabled={!hasPrevious}
                              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all border text-sm ${
                                hasPrevious
                                  ? "border-gray-300 bg-white hover:bg-gray-50 text-gray-700 cursor-pointer"
                                  : "border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed text-gray-400"
                              }`}
                            >
                              <ChevronLeft className="w-4 h-4" />
                              <span>Previous</span>
                            </button>
                            
                            <button
                              onClick={handleNext}
                              disabled={!hasNext}
                              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all border text-sm ${
                                hasNext
                                  ? "border-gray-300 bg-white hover:bg-gray-50 text-gray-700 cursor-pointer"
                                  : "border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed text-gray-400"
                              }`}
                            >
                              <span>Next</span>
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <div className="space-y-6 text-left">
                            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-900">Leading the AI Revolution</h2>
                            <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
                              <p>
                                You'll often hear design leaders say, "This is the age of the AI founder." But remember: not everyone needs to be a founder. What truly matters is developing a leadership mindset, strategic thinking, and systems-level perspective. As designers, we're uniquely positioned to tackle large-scale, complex problems.
                              </p>
                              <p>
                                There's no handbook or step-by-step playbook for leading in this new era. Creativity, initiative, and proactive problem-solving are essential — these traits will set you apart as the landscape rapidly evolves.
                              </p>
                              <p>
                                If you aspire to be a thought leader, share your journey within your community or organization. There's a massive knowledge gap in the industry: people want to learn, but practical guides are scarce. You don't need to be a social media influencer. Simply sharing what you learn with your team can have a big impact.
                              </p>
                              <p>
                                Future-proofing your career means going beyond execution. While delivering results is still crucial — after all, teams depend on it — you'll need to ask tough questions, think in terms of systems and strategy, and develop leadership skills. Imagine a world where AI automates all execution: what will matter most is your ability to lead, strategize, and design human-centered solutions.
                              </p>
                              <p>
                                Many products fail today because they can't build trust or clearly communicate the value they provide. Others struggle because of poor usability or outdated design.
                              </p>
                              <p>
                                Designers have a unique opportunity now — not just to prototype ideas, but to actually build new realities. Embracing proactive leadership is the best way to future-proof your career and help lead this AI revolution.
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : activeSectionId === 6 ? (
                        <div className="space-y-4">
                          <div className="flex gap-2 px-6 pt-6">
                            <button onClick={handlePrevious} disabled={!hasPrevious} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all border text-sm ${hasPrevious ? "border-white/40 bg-white/10 hover:bg-white/20 text-white cursor-pointer" : "border-white/10 bg-white/5 opacity-50 cursor-not-allowed text-white/50"}`}>
                              <ChevronLeft className="w-4 h-4" />
                              <span>Previous</span>
                            </button>
                            <button onClick={handleNext} disabled={!hasNext} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all border text-sm ${hasNext ? "border-white/40 bg-white/10 hover:bg-white/20 text-white cursor-pointer" : "border-white/10 bg-white/5 opacity-50 cursor-not-allowed text-white/50"}`}>
                              <span>Next</span>
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="relative aspect-video bg-black">
                            {!masterclassUnlocked ? (
                              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 z-10 cursor-pointer" onClick={handleMasterclassClick}>
                                <Lock className="w-16 h-16 text-white/60 mb-4" />
                                <h3 className="text-xl font-semibold text-white mb-2">Masterclass Locked</h3>
                                <p className="text-white/70 mb-6 text-center px-4">Enter your details to unlock the masterclass</p>
                                <button className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors">
                                  Unlock Masterclass
                                </button>
                              </div>
                            ) : null}
                            {selectedVideo ? (
                              <iframe
                                src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                                title={selectedVideo.title}
                                className="w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              />
                            ) : (
                              <iframe
                                src={`https://www.youtube.com/embed/6vnUzMOrAPw`}
                                title="AI Design Masterclass - Trailer"
                                className="w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              />
                            )}
                          </div>
                        </div>
                      ) : activeSectionId === 7 ? (
                        <div className="p-12 md:p-16 lg:p-20 bg-white dark:bg-gray-50 paper-texture relative">
                          {/* Previous/Next Navigation */}
                          <div className="flex gap-2 mb-6">
                            <button
                              onClick={handlePrevious}
                              disabled={!hasPrevious}
                              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all border text-sm ${
                                hasPrevious
                                  ? "border-gray-300 bg-white hover:bg-gray-50 text-gray-700 cursor-pointer"
                                  : "border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed text-gray-400"
                              }`}
                            >
                              <ChevronLeft className="w-4 h-4" />
                              <span>Previous</span>
                            </button>
                            
                            <button
                              onClick={handleNext}
                              disabled={!hasNext}
                              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all border text-sm ${
                                hasNext
                                  ? "border-gray-300 bg-white hover:bg-gray-50 text-gray-700 cursor-pointer"
                                  : "border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed text-gray-400"
                              }`}
                            >
                              <span>Next</span>
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <div className="space-y-6 text-left">
                            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-900">Vibe Coding Weekend Workshop</h2>
                            <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
                              <p className="font-semibold text-gray-900">
                                Learn Where to Start With Vibe Coding, Explore the Best Tools and Resources, and Vibe Code Your First App From Scratch.
                              </p>
                              <div className="mb-8">
                                <a 
                                  href="https://maven.com/productlearnio/vibe-coding-workshop" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg group"
                                >
                                  Join the workshop Today
                                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                              </div>
                              <div className="space-y-4">
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-8">Workshop Overview</h3>
                                <p>
                                  The Vibe Coding Workshop helps designers, builders, and innovators go from simply exploring AI tools to confidently designing and shipping real AI-powered products.
                                </p>
                                <p>
                                  You'll learn the foundations of Vibe Coding the creative workflow that blends design, AI, and code into one seamless process. Through guided lessons, hands-on demos, and a final project, you'll master the tools, mindset, and techniques needed to bring ideas to life fast.
                                </p>
                                <p>
                                  By the end of this workshop, you'll have built your own interactive app, gained practical prototyping skills, and developed the confidence to create apps with AI.
                                </p>
                              </div>

                              <div className="space-y-4 mt-8">
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Who is this course for</h3>
                                <ul className="space-y-3 list-disc list-inside">
                                  <li><strong>Product Designers, Researchers</strong> looking to build their AI portfolios and switch to the AI industry.</li>
                                  <li><strong>Design Leaders, Managers</strong> looking to upskill and lead AI design projects.</li>
                                  <li><strong>Founders, business owners</strong> who want to do AI consulting or level up their design services through AI</li>
                                </ul>
                              </div>

                              <div className="space-y-4 mt-8">
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">What you'll get out of this course</h3>
                                <div className="space-y-4">
                                  <div className="space-y-2">
                                    <h4 className="font-semibold text-gray-900">Learn how to get started with vibe coding</h4>
                                    <p className="text-gray-700">Discover the foundations of Vibe Coding, learn what it is, how it works, and how to start building your first AI-powered interface.</p>
                                  </div>
                                  <div className="space-y-2">
                                    <h4 className="font-semibold text-gray-900">What tools to leverage for vibe coding</h4>
                                    <p className="text-gray-700">Explore the essential tools that make Vibe Coding possible. Learn how to use platforms like Cursor, Lovable, React, and AI-powered assistants to design, code, and ship faster.</p>
                                  </div>
                                  <div className="space-y-2">
                                    <h4 className="font-semibold text-gray-900">Take a look at the demos in action</h4>
                                    <p className="text-gray-700">Watch real Vibe Coding demos in action and see how ideas turn into interactive apps using AI and modern design tools.</p>
                                  </div>
                                  <div className="space-y-2">
                                    <h4 className="font-semibold text-gray-900">Do a vibe coding challenge</h4>
                                    <p className="text-gray-700">Put your skills to the test with a hands-on Vibe Coding challenge. Apply what you've learned to build and ship your own mini AI-powered project.</p>
                                  </div>
                                </div>
                              </div>

                              <div className="space-y-4 mt-8">
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">What's included</h3>
                                <ul className="space-y-2">
                                  <li className="flex items-start gap-2">
                                    <span className="text-gray-900 font-medium">Live sessions:</span>
                                    <span className="text-gray-700">Learn directly from John Rodrigues in a real-time, interactive format.</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-gray-900 font-medium">Lifetime access:</span>
                                    <span className="text-gray-700">Go back to course content and recordings whenever you need to.</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-gray-900 font-medium">Community of peers:</span>
                                    <span className="text-gray-700">Stay accountable and share insights with like-minded professionals.</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-gray-900 font-medium">Certificate of completion:</span>
                                    <span className="text-gray-700">Share your new skills with your employer or on LinkedIn.</span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <span className="text-gray-900 font-medium">Maven Guarantee:</span>
                                    <span className="text-gray-700">This course is backed by the Maven Guarantee. Students are eligible for a full refund up until the halfway point of the course.</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="flex gap-2 px-6 pt-6">
                            <button onClick={handlePrevious} disabled={!hasPrevious} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all border text-sm ${hasPrevious ? "border-white/40 bg-white/10 hover:bg-white/20 text-white cursor-pointer" : "border-white/10 bg-white/5 opacity-50 cursor-not-allowed text-white/50"}`}>
                              <ChevronLeft className="w-4 h-4" />
                              <span>Previous</span>
                            </button>
                            <button onClick={handleNext} disabled={!hasNext} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all border text-sm ${hasNext ? "border-white/40 bg-white/10 hover:bg-white/20 text-white cursor-pointer" : "border-white/10 bg-white/5 opacity-50 cursor-not-allowed text-white/50"}`}>
                              <span>Next</span>
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="relative aspect-video bg-black">
                            {selectedVideo ? (
                              <iframe
                                src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                                title={selectedVideo.title}
                                className="w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              />
                            ) : (
                              <iframe
                                src={`https://www.youtube.com/embed/6vnUzMOrAPw`}
                                title="AI Design Masterclass - Trailer"
                                className="w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              />
                            )}
                          </div>
                        </div>
                      )}
                    </Card>

                    {/* Lesson list for active section */}
                    {activeSection && activeSection.lessons.length > 0 && (
                      <div className="bg-card/40 border border-border/40 rounded-xl divide-y divide-border/20">
                        <div className="px-6 py-4 space-y-1">
                          <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                            {activeSection.id === 0 ? "Welcome" : `Part ${activeSection.id}`}
                          </p>
                          <h3 className="text-lg font-semibold text-white">{activeSection.title}</h3>
                          <span className="uppercase tracking-[0.16em] text-[11px] text-white/40">Lessons</span>
                        </div>
                        <div className="divide-y divide-border/20">
                          {activeSection.lessons.map((lesson) => {
                            const isSelected = lesson.id === selectedLessonId;
                            const isLocked = activeSection.id === 6 && !masterclassUnlocked;
                            return (
                              <button
                                key={lesson.id}
                                onClick={() => handleLessonClick(lesson, activeSection.id)}
                                className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors ${
                                  isSelected ? "bg-white/10" : "hover:bg-white/5"
                                }`}
                              >
                                <div className="flex items-center gap-4">
                                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                                    isSelected ? "bg-white text-black" : "bg-white/5 text-white/50"
                                  }`}>
                                    {isLocked ? (
                                      <Lock className={`w-3.5 h-3.5 ${isSelected ? "text-black" : "text-white/60"}`} />
                                    ) : (
                                      <Play className={`w-3.5 h-3.5 ${isSelected ? "text-black" : "text-white/60"}`} />
                                    )}
                                  </span>
                                  <div>
                                    <p className={`text-sm font-medium ${isSelected ? "text-white" : "text-white/80"}`}>
                                      {lesson.title}
                                      {isLocked && <span className="text-white/50 ml-2">(Locked)</span>}
                                    </p>
                                  </div>
                                </div>
                                <ChevronRight className={`w-4 h-4 ${isSelected ? "text-white" : "text-white/30"}`} />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                  </div>
                </div>

              </div>
            </div>
          </section>
          </main>
          
          {/* Mobile Navigation - Bottom Footer Style */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-white/10">
            <div className="bg-black/80 backdrop-blur-xl">
              <div className="flex gap-2 p-4">
                <button
                  onClick={handlePrevious}
                  disabled={!hasPrevious}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all border ${
                    hasPrevious
                      ? "border-white/40 bg-white/10 hover:bg-white/20 text-white"
                      : "border-white/10 bg-white/5 opacity-50 cursor-not-allowed text-white/50"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="font-medium">Previous</span>
                </button>
                
                <button
                  onClick={handleNext}
                  disabled={!hasNext}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all border ${
                    hasNext
                      ? "border-white/40 bg-white/10 hover:bg-white/20 text-white"
                      : "border-white/10 bg-white/5 opacity-50 cursor-not-allowed text-white/50"
                  }`}
                >
                  <span className="font-medium">Next</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <footer className="border-t border-border py-12 bg-card/30 mt-16">
            <div className="container px-4 text-center text-sm text-muted-foreground">
              <p>© AI Design Academy. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>

      {/* Unlock Masterclass Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-black border-white/20 text-white sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-white">Unlock Masterclass</DialogTitle>
            <DialogDescription className="text-white/70">
              Please provide your details to access the masterclass
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleFormSubmit}>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className={`flex items-start space-x-3 pt-2 ${checkboxError ? 'checkbox-shake' : ''}`}>
                <Checkbox
                  id="acceptCommunication"
                  checked={formData.acceptCommunication}
                  onCheckedChange={(checked) => {
                    setFormData({ ...formData, acceptCommunication: checked === true });
                    setCheckboxError(false);
                  }}
                  className="h-5 w-5 rounded border-2 border-white/30 data-[state=checked]:bg-white data-[state=checked]:border-white data-[state=checked]:text-black mt-0.5 flex-shrink-0"
                />
                <Label 
                  htmlFor="acceptCommunication" 
                  className="text-sm text-white/90 leading-relaxed cursor-pointer flex-1"
                >
                  I accept to receive further communication from AI Design Academy and John Rodrigues *
                </Label>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setModalOpen(false)}
                className="border-white/20 text-white hover:bg-white/10"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || !formData.acceptCommunication}
                className="bg-white text-black hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Unlocking...' : 'Unlock Masterclass'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AIDesignMasterclass;

