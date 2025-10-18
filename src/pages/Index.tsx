import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vibe Coding Mastermind - Elite Developer Community</title>
        <meta 
          name="description" 
          content="Join an elite community of developers. Transform your coding skills through hands-on projects, expert mentorship, and exclusive networking opportunities." 
        />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        <main>
          <HeroSection />
        </main>
        
        <footer className="border-t border-border py-12 bg-card/30">
          <div className="px-4 md:px-10 lg:px-[120px] text-center text-sm text-muted-foreground">
            <div className="max-w-[1200px] mx-auto">
            <p>© 2025 Vibe Coding Mastermind. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
