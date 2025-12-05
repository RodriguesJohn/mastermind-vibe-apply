import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import Cohort from "./pages/Cohort";
import Consulting from "./pages/Consulting";
import AICrashCourse from "./pages/AICrashCourse";
import Projects from "./pages/Projects";
import Tools from "./pages/Tools";
import TalentPool from "./pages/TalentPool";
import Course from "./pages/Course";
import VibeCodingAccelerator from "./pages/VibeCodingAccelerator";
import AIDesignMasterclass from "./pages/AIDesignMasterclass";
import KnowledgeHub from "./pages/KnowledgeHub";
import DesignEngineering from "./pages/DesignEngineering";
import VibeCodingWeekendWorkshop from "./pages/VibeCodingWeekendWorkshop";
import AppLanding from "./pages/AppLanding";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import GetGuide from "./pages/GetGuide";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VibeCodingAccelerator />} />
          <Route path="/cohort" element={<Cohort />} />
          {/* <Route path="/coaching" element={<Consulting />} /> */}
          <Route path="/course" element={<Course />} />
          {/* Membership page hidden for now */}
          {/* <Route path="/index" element={<Index />} /> */}
          <Route path="/ai-crash-course" element={<AICrashCourse />} />
          <Route path="/guide" element={<AIDesignMasterclass />} />
          <Route path="/knowledge-hub" element={<KnowledgeHub />} />
          <Route path="/design-engineering" element={<DesignEngineering />} />
          <Route path="/weekend-workshop" element={<VibeCodingWeekendWorkshop />} />
          <Route path="/app" element={<AppLanding />} /> {/* TEMPORARY PAGE */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/get-guide" element={<GetGuide />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/tools" element={<Tools />} /> */}
          {/* <Route path="/talent-pool" element={<TalentPool />} /> */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
