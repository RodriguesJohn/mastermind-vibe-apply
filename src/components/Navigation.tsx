import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMasterclassPage = location.pathname === "/guide";
  
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/98 backdrop-blur-xl">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="AI Design Academy" className="w-6 h-6" />
            <span className="font-bold text-lg">AI Design Academy</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-sm font-normal hover:text-primary transition-colors">
              AI Cohort
            </a>
            <a href="/guide" className="text-sm font-normal text-white hover:text-white/80 transition-colors">
              Guide
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-normal hover:text-primary transition-colors flex items-center gap-1 outline-none">
                More
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {/* <DropdownMenuItem asChild>
                  <a href="/vibe-coding-accelerator" className="cursor-pointer">
                    Mastermind
                  </a>
                </DropdownMenuItem> */}
                <DropdownMenuItem asChild>
                  <a href="/knowledge-hub" className="cursor-pointer">
                    Knowledge Hub
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="https://maven.com/productlearnio/vibe-coding-workshop" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    Workshop
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/design-engineering" className="cursor-pointer">
                    DX course
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/coaching" className="cursor-pointer">
                    Consulting
                  </a>
                </DropdownMenuItem>
                {/* <DropdownMenuItem asChild>
                  <a href="/tools" className="cursor-pointer">
                    Tools
                  </a>
                </DropdownMenuItem> */}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Header CTA removed per request */}

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
                  <img src="/logo.png" alt="AI Design Academy" className="w-5 h-5" />
                  AI Design Academy
                </SheetTitle>
              </SheetHeader>
              
              <nav className="flex flex-col gap-4 mt-8">
                <a href="/" className="text-base font-normal hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                  AI Cohort
                </a>
                {/* <a href="/vibe-coding-accelerator" className="text-base font-normal hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                  Mastermind
                </a> */}
                <a href="/guide" className="text-base font-normal text-white hover:text-white/80 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                  Guide
                </a>
                <a href="/knowledge-hub" className="text-base font-normal hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                  Knowledge Hub
                </a>
                <a href="https://maven.com/productlearnio/vibe-coding-workshop" target="_blank" rel="noopener noreferrer" className="text-base font-normal hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                  Workshop
                </a>
                <a href="/design-engineering" className="text-base font-normal hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                  DX course
                </a>
                <a href="/coaching" className="text-base font-normal hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                  Consulting
                </a>
                {/* <a href="/tools" className="text-base font-normal hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                  Tools
                </a> */}

                <Button variant="cta" size="lg" className="mt-2" asChild onClick={() => setMobileMenuOpen(false)}>
                  <a href="https://maven.com/productlearnio/aiproductdesignmasterycohort" target="_blank" rel="noopener noreferrer">Apply Now</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};