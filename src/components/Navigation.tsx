import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
            <img src="/logo.png" alt="AI Design Academy" className="w-6 h-6 object-contain flex-shrink-0" />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-sm font-normal hover:text-primary transition-colors">
              Cohort
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-normal hover:text-primary transition-colors flex items-center gap-1 outline-none">
                More
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <a href="/vibe-coding-course" className="cursor-pointer">
                    Vibe Coding Course
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/blog" className="cursor-pointer">
                    Blog
                  </a>
                </DropdownMenuItem>
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
                  <img src="/logo.png" alt="AI Design Academy" className="w-5 h-5 object-contain flex-shrink-0" />
                  AI Design Academy
                </SheetTitle>
              </SheetHeader>
              
              <nav className="flex flex-col gap-4 mt-8">
                <a href="/" className="text-base font-normal hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                  Cohort
                </a>
                <div className="flex flex-col gap-2">
                  <span className="text-base font-normal text-foreground/60 py-2">More</span>
                  <a href="/vibe-coding-course" className="text-base font-normal hover:text-primary transition-colors py-2 pl-4" onClick={() => setMobileMenuOpen(false)}>
                    Vibe Coding Course
                  </a>
                  <a href="/blog" className="text-base font-normal hover:text-primary transition-colors py-2 pl-4" onClick={() => setMobileMenuOpen(false)}>
                    Blog
                  </a>
                </div>
                {/* <a href="/knowledge-hub" className="text-base font-normal hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                  Knowledge Hub
                </a> */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};