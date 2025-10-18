import { Button } from "@/components/ui/button";
import { Code2, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
            <a href="/cohort" className="text-sm font-medium hover:text-primary transition-colors">
              AI Design Academy
            </a>
            <a href="#playbook" className="text-sm font-medium hover:text-primary transition-colors">
              AI Design Playbook
            </a>
            <a href="/ai-crash-course" className="text-sm font-medium hover:text-primary transition-colors">
              AI Crash Course
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                Programs
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <a href="/" className="cursor-pointer">
                    Vibe Coding Mastermind
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#projects" className="cursor-pointer">
                    Projects
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <Button variant="cta" size="sm">
            Apply Now
          </Button>
        </div>
      </div>
    </nav>
  );
};
