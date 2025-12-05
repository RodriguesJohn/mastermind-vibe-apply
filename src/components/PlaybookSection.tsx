import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

export const PlaybookSection = () => {
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
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(168,85,247,0.1)_0%,_rgba(0,0,0,0)_50%)] pointer-events-none" />
      
      <div className="px-4 md:px-10 lg:px-[120px] relative z-10">
        <div className="max-w-6xl mx-auto">
          <Card className="p-8 md:p-12 bg-card/50 border-border/40">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
              {/* Left Column: Content */}
              <div className="space-y-8 text-left">
                <div className="space-y-6">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.1]">
                    Getting Started Guide
                  </h2>
                  <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                    A step-by-step guide to help you navigate your AI learning journey—from foundational skills to practical application.
                  </p>
                </div>

                <div className="pt-4 max-w-md w-full">
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
                            className="formkit-input w-full h-12 px-4 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" 
                            aria-label="First Name" 
                            name="fields[first_name]" 
                            placeholder="First Name" 
                            type="text" 
                          />
                        </div>
                        <div className="formkit-field">
                          <input 
                            className="formkit-input w-full h-12 px-4 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" 
                            name="email_address" 
                            aria-label="Email Address" 
                            placeholder="Email Address" 
                            required 
                            type="email" 
                          />
                        </div>
                        <button 
                          data-element="submit" 
                          className="formkit-submit w-full h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-lg transition-colors flex items-center justify-center relative overflow-hidden"
                        >
                          <div className="formkit-spinner absolute inset-0 flex items-center justify-center bg-primary/10 opacity-0 transition-opacity">
                            <span className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                          </div>
                          <span className="formkit-submit-text">Get the Guide</span>
                        </button>
                      </div>
                      
                      <div className="formkit-powered-by-convertkit-container mt-4 text-center">
                        <a href="https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic" data-element="powered-by" className="formkit-powered-by-convertkit text-xs text-muted-foreground hover:text-foreground transition-colors" data-variant="dark" target="_blank" rel="nofollow">Built with Kit</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Right Column: Stylized Book Cover */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-[2/3] lg:aspect-[3/4] min-h-[500px] bg-[#1A1A1A] dark:bg-card rounded-xl border border-border/40 p-2 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 flex items-center justify-center overflow-hidden group">
                  {/* Book Spine Effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white/10 to-transparent z-20 pointer-events-none" />
                  
                  {/* Book Cover Content */}
                  <div className="absolute inset-2 bg-background rounded-lg flex flex-col items-center justify-center text-center p-8 border border-border/40 min-h-[calc(100%-1rem)]">
                    <div className="uppercase tracking-[0.2em] text-muted-foreground text-sm mb-4 font-medium">AI Design Academy</div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-[0.9] tracking-tighter mb-2">
                      GETTING<br />STARTED<br />GUIDE
                    </h2>
                    <div className="mt-8 w-12 h-1 bg-muted-foreground/20 rounded-full" />
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
