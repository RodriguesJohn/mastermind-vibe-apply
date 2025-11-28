import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import PlaybookImage from "@/assets/Playbook.webp";
import { ArrowRight, Check } from "lucide-react";
import { useEffect } from "react";

const GetGuide = () => {
  useEffect(() => {
    // Check if script is already present
    const scriptId = 'ck-script-02ac25eadf';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://f.convertkit.com/ckjs/ck.5.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Get the Getting Started Guide - AI Design Academy</title>
        <meta name="description" content="Download the ultimate guide to mastering AI design workflows. Join 1,500+ designers staying ahead of the curve." />
      </Helmet>

      <div className="min-h-screen bg-[#0E0E10] text-white selection:bg-white/20 flex flex-col">
        <Navigation />

        <main className="flex-1 flex flex-col justify-center items-center px-6 md:px-12 py-20 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(168,85,247,0.1)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" />
          
          <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
            {/* Left Column: Content */}
            <div className="space-y-8 text-left order-1">
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] whitespace-nowrap">
                  Getting Started Guide
                </h1>
                <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-xl mx-0">
                  A step-by-step guide to help you navigate your AI learning journey—from foundational skills to practical application.
                </p>
              </div>

              {/* Removed feature list */}
              
              <div className="pt-4 max-w-md mx-0 w-full">
                {/* Embedded Kit Form */}
                <form 
                  action="https://app.kit.com/forms/8819242/subscriptions" 
                  className="seva-form formkit-form space-y-4" 
                  method="post" 
                  data-sv-form="8819242" 
                  data-uid="02ac25eadf" 
                  data-format="inline" 
                  data-version="5" 
                  min-width="400 500 600 700 800"
                >
                  <div data-style="clean">
                    <ul className="formkit-alert formkit-alert-error text-red-500 mb-4" data-element="errors" data-group="alert"></ul>
                    
                    <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields flex flex-col gap-4">
                      <div className="formkit-field">
                        <input 
                          className="formkit-input w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-white/20 transition-colors" 
                          aria-label="First Name" 
                          name="fields[first_name]" 
                          placeholder="First Name" 
                          type="text" 
                        />
                      </div>
                      <div className="formkit-field">
                        <input 
                          className="formkit-input w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-white/20 transition-colors" 
                          name="email_address" 
                          aria-label="Email Address" 
                          placeholder="Email Address" 
                          required 
                          type="email" 
                        />
                      </div>
                      <button 
                        data-element="submit" 
                        className="formkit-submit w-full h-12 px-8 bg-white text-black hover:bg-white/90 font-medium rounded-lg transition-colors flex items-center justify-center relative overflow-hidden"
                      >
                        <div className="formkit-spinner absolute inset-0 flex items-center justify-center bg-white/10 opacity-0 transition-opacity">
                          <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        </div>
                        <span className="formkit-submit-text">Get the Guide</span>
                      </button>
                    </div>
                    
                    <div className="formkit-powered-by-convertkit-container mt-4 text-center">
                      <a href="https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic" data-element="powered-by" className="formkit-powered-by-convertkit text-xs text-white/20 hover:text-white/40 transition-colors" data-variant="dark" target="_blank" rel="nofollow">Built with Kit</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="order-2 flex justify-center">
              <div className="relative w-full max-w-md aspect-[2/3] lg:aspect-[3/4] min-h-[500px] bg-[#1A1A1A] rounded-xl border border-white/10 p-2 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 flex items-center justify-center overflow-hidden group">
                {/* Book Spine Effect */}
                <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white/10 to-transparent z-20 pointer-events-none" />
                
                {/* Book Cover Content */}
                <div className="absolute inset-2 bg-[#0E0E10] rounded-lg flex flex-col items-center justify-center text-center p-8 border border-white/5 min-h-[calc(100%-1rem)]">
                  <div className="uppercase tracking-[0.2em] text-white/40 text-sm mb-4 font-medium">AI Design Academy</div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-white leading-[0.9] tracking-tighter mb-2">
                    GETTING<br />STARTED<br />GUIDE
                  </h2>
                  <div className="mt-8 w-12 h-1 bg-white/20 rounded-full" />
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default GetGuide;
