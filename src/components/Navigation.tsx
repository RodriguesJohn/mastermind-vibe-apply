import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
              Home
            </a>
            <a href="/cohort" className="text-sm font-normal hover:text-primary transition-colors">
              Workshop
            </a>
            <a href="/guide" className="text-sm font-normal hover:text-primary transition-colors">
              Guide
            </a>
            <a href="/blog" className="text-sm font-normal hover:text-primary transition-colors">
              Blog
            </a>
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
                  Home
                </a>
                <a href="/cohort" className="text-base font-normal hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                  Workshop
                </a>
                <a href="/guide" className="text-base font-normal hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                  Guide
                </a>
                <a href="/blog" className="text-base font-normal hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                  Blog
                </a>
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