import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg">Vibe Coding</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Vibe Coding Mastermind
            </a>
            <a href="/cohort" className="text-sm font-medium hover:text-primary transition-colors">
              Cohort
            </a>
            <a href="#playbook" className="text-sm font-medium hover:text-primary transition-colors">
              AI Design Playbook
            </a>
            <a href="#crash-course" className="text-sm font-medium hover:text-primary transition-colors">
              AI Crash Course
            </a>
          </div>
          
          <Button variant="cta" size="sm">
            Apply Now
          </Button>
        </div>
      </div>
    </nav>
  );
};
