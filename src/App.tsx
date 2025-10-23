import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Cohort from "./pages/Cohort";
import Consulting from "./pages/Consulting";
import AICrashCourse from "./pages/AICrashCourse";
import Projects from "./pages/Projects";
import Tools from "./pages/Tools";
import TalentPool from "./pages/TalentPool";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cohort />} />
          <Route path="/coaching" element={<Consulting />} />
          {/* Membership page hidden for now */}
          {/* <Route path="/index" element={<Index />} /> */}
          <Route path="/ai-crash-course" element={<AICrashCourse />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/talent-pool" element={<TalentPool />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
