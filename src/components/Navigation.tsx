import { Button } from "@/components/ui/button";
import { Code2, ChevronDown, Menu } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg">AI Design Academy</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/cohort" className="text-sm font-medium hover:text-primary transition-colors">
              Cohort
            </a>
            <a href="#playbook" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </a>
            <a href="/ai-crash-course" className="text-sm font-medium hover:text-primary transition-colors">
              AI Crash Course
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                More
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <a href="/" className="cursor-pointer">
                    Vibe Coding Mastermind
                  </a>
                </DropdownMenuItem>
                {/* <DropdownMenuItem asChild>
                  <a href="/projects" className="cursor-pointer">
                    Projects
                  </a>
                 </DropdownMenuItem> */}
                <DropdownMenuItem asChild>
                  <a href="/consulting" className="cursor-pointer">
                    1:1 Consulting
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/tools" className="cursor-pointer">
                    Tools
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <Button variant="cta" size="sm" className="hidden md:flex">
            Apply Now
          </Button>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-primary" />
                  Vibe Coding
                </SheetTitle>
              </SheetHeader>
              
              <nav className="flex flex-col gap-4 mt-8">
                <a href="/cohort" className="text-base font-medium hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                  Cohort
                </a>
                <a href="#playbook" className="text-base font-medium hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                  Blog
                </a>
                <a href="/ai-crash-course" className="text-base font-medium hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                  AI Crash Course
                </a>
                
                <div className="border-t border-border pt-4 mt-2">
                  <p className="text-sm text-muted-foreground mb-3">More</p>
                  <a href="/" className="text-base font-medium hover:text-primary transition-colors py-2 block" onClick={() => setMobileMenuOpen(false)}>
                    Vibe Coding Mastermind
                  </a>
                  <a href="/consulting" className="text-base font-medium hover:text-primary transition-colors py-2 block" onClick={() => setMobileMenuOpen(false)}>
                    1:1 Consulting
                  </a>
                  <a href="/tools" className="text-base font-medium hover:text-primary transition-colors py-2 block" onClick={() => setMobileMenuOpen(false)}>
                    Tools
                  </a>
                </div>

                <Button variant="cta" size="lg" className="mt-6" onClick={() => setMobileMenuOpen(false)}>
                  Apply Now
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>;
};