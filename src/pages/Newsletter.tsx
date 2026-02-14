import { Navigation } from "@/components/Navigation";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Check, Clock, TrendingUp, Zap } from "lucide-react";

const Newsletter = () => {
  useEffect(() => {
    const scriptId = 'ck-script-newsletter';
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
        <title>Daily AI Newsletter for Designers | AI Design Academy</title>
        <meta name="description" content="Get daily AI news updates and trends delivered to your inbox. Stay on top of all the AI changes happening in design and product." />
      </Helmet>

      <div className="min-h-screen bg-black">
        <Navigation />
        
        <main className="py-12 md:py-20">
          <div className="px-4 md:px-10 lg:px-[120px]">
            <div className="max-w-[900px] mx-auto">
              
              {/* Hero Section with Form */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                  <Clock className="w-4 h-4" />
                  <span>2-minute daily read</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold text-white mb-5 leading-tight">
                  Your daily AI briefing.<br />
                  <span className="text-white/60">Stay updated, not overwhelmed.</span>
                </h1>
                
                <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8">
                  Get the most important AI news, tool updates, and design trends in your inbox every morning. Takes 2 minutes to read.
                </p>
              </div>

              {/* Form Card */}
              <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 md:p-8 max-w-lg mx-auto mb-12">
                <form
                  action="https://app.kit.com/forms/9087462/subscriptions"
                  className="seva-form formkit-form"
                  method="post"
                  data-sv-form="9087462"
                  data-uid="523a052d48"
                  data-format="inline"
                  data-version="5"
                  data-options='{"settings":{"after_subscribe":{"action":"redirect","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":"https://theaidesignacademy.com"}}}'
                >
                  <div className="space-y-3">
                    <input 
                      className="w-full px-4 py-4 rounded-xl bg-black/50 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base" 
                      aria-label="First Name" 
                      name="fields[first_name]" 
                      placeholder="Your first name" 
                      type="text" 
                    />
                    <input 
                      className="w-full px-4 py-4 rounded-xl bg-black/50 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base" 
                      name="email_address" 
                      aria-label="Email Address" 
                      placeholder="Your email address" 
                      required 
                      type="email" 
                    />
                    <button
                      data-element="submit"
                      type="submit"
                      className="w-full py-4 px-8 rounded-full text-white font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-[3px] active:translate-y-[1px]"
                      style={{
                        background: 'linear-gradient(135deg, #4285ff 0%, #2e72ff 50%, #1a5fff 100%)',
                        boxShadow: `
                          inset 0 0.3rem 0.9rem rgba(255, 255, 255, 0.4),
                          inset 0 -0.1rem 0.3rem rgba(0, 50, 150, 0.5),
                          inset 0 -0.4rem 0.9rem rgba(100, 170, 255, 0.4),
                          0 0.5rem 2rem rgba(46, 114, 255, 0.5),
                          0 1rem 3rem rgba(46, 114, 255, 0.3)
                        `,
                      }}
                    >
                      <span>✦</span>
                      Subscribe Free
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-center mt-4 text-white/50 text-sm">
                    <span className="flex items-center gap-1">
                      <Check className="w-4 h-4 text-green-500" />
                      Unsubscribe anytime
                    </span>
                  </div>
                </form>
              </div>

              {/* What's Inside */}
              <div className="mb-12">
                <h2 className="text-center text-white/40 text-sm font-medium uppercase tracking-wider mb-6">
                  What you'll get every morning
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                    <TrendingUp className="w-5 h-5 text-primary mb-3" />
                    <h3 className="text-white font-medium mb-1">Breaking AI News</h3>
                    <p className="text-white/50 text-sm">New tools, major updates, and industry shifts you need to know.</p>
                  </div>
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                    <Zap className="w-5 h-5 text-primary mb-3" />
                    <h3 className="text-white font-medium mb-1">Quick Wins</h3>
                    <p className="text-white/50 text-sm">Actionable tips you can apply to your workflow today.</p>
                  </div>
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                    <Check className="w-5 h-5 text-primary mb-3" />
                    <h3 className="text-white font-medium mb-1">Curated by AI Agents</h3>
                    <p className="text-white/50 text-sm">AI news and trends sourced and summarized by AI agents. Designed with thought and care by John Rodrigues.</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Newsletter;
