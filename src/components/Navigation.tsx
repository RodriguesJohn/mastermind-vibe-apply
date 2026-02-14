import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Guide", href: "/guide" },
    { label: "Blog", href: "/blog" },
    { label: "Newsletter", href: "/newsletter" },
  ];

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - simple link */}
          <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="AI Design Academy" className="w-8 h-8 object-contain" />
          </a>

          {/* Circular Menu Button - Right Side */}
          <div ref={menuRef} className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                isOpen
                  ? "bg-white text-black"
                  : "bg-white/15 border border-white/50 text-white/90 hover:bg-white/25 hover:border-white/60"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-12 right-0 bg-black/90 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden transition-all duration-500 ease-in-out origin-top-right ${
                isOpen
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                  : "opacity-0 -translate-y-1 scale-[0.98] pointer-events-none"
              }`}
            >
              <div className="flex flex-col py-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`px-6 py-3 text-sm text-white hover:bg-white/10 transition-all duration-400 ease-out whitespace-nowrap ${
                      isOpen
                        ? "opacity-100 blur-0"
                        : "opacity-0 blur-[2px]"
                    }`}
                    style={{ transitionDelay: isOpen ? "100ms" : "0ms" }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};