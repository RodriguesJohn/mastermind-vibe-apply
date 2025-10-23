import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const logoUrl = new URL("@/assets/Logo.png", import.meta.url).href;

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/98 backdrop-blur-xl">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={logoUrl} alt="AI Design Academy" className="w-6 h-6" />
            <span className="font-bold text-lg">AI Design Academy</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Cohort
            </a>
           
            <a href="/ai-crash-course" className="text-sm font-medium hover:text-primary transition-colors">
              AI Crash Course
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                More
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <a href="/consulting" className="cursor-pointer">
                    Coaching
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/tools" className="cursor-pointer">
                    Tools
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/talent-pool" className="cursor-pointer">
                    Talent Hub
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <Button variant="cta" size="sm" className="hidden md:flex" asChild>
            <a href="/">Join the Cohort</a>
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
                  <img src={logoUrl} alt="AI Design Academy" className="w-5 h-5" />
                  AI Design Academy
                </SheetTitle>
              </SheetHeader>
              
              <nav className="flex flex-col gap-4 mt-8">
                <a href="/" className="text-base font-medium hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
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
                  <a href="/consulting" className="text-base font-medium hover:text-primary transition-colors py-2 block" onClick={() => setMobileMenuOpen(false)}>
                    Coaching
                  </a>
                  <a href="/tools" className="text-base font-medium hover:text-primary transition-colors py-2 block" onClick={() => setMobileMenuOpen(false)}>
                    Tools
                  </a>
                  <a href="/talent-pool" className="text-base font-medium hover:text-primary transition-colors py-2 block" onClick={() => setMobileMenuOpen(false)}>
                    Talent Hub
                  </a>
                </div>

                <Button variant="cta" size="lg" className="mt-6" asChild onClick={() => setMobileMenuOpen(false)}>
                  <a href="/">Apply Now</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};