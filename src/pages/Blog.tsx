import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import CursorBlogImage from "@/assets/CursorBlog.png";

// Blog post data
const featuredPost = {
  id: 1,
  title: "Cursor 2.0: The Future of Vibe Coding is Here",
  excerpt: "Cursor recently launched Cursor 2.0, introducing Composer 1, Agent Mode, and parallel workflows. These updates drastically improve efficiency and hint at where vibe-coding tools are heading.",
  author: "John Rodrigues",
  date: "2024-11-28",
  readTime: "5 min read",
  category: "Product Update",
  image: CursorBlogImage,
  slug: "cursor-2-0-update"
};

const blogPosts = [
  {
    id: 2,
    title: "7 Observations on How AI is Reshaping Product Design",
    excerpt: "After directing 5+ AI products and writing 46 articles, here are key observations on how AI is the next UI, the rise of agents, and why designers must evolve.",
    author: "John Rodrigues",
    date: "2024-11-23",
    readTime: "4 min read",
    category: "Insights",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop",
    slug: "ai-reshaping-product-design"
  },
  {
    id: 3,
    title: "Where to Get Started with AI: 6 Steps from Chaos to Clarity",
    excerpt: "Overwhelmed by how fast AI is changing? We've mapped out 6 practical steps and resources to help you build your foundation and start creating.",
    author: "AI Design Academy",
    date: "2024-11-20",
    readTime: "5 min read",
    category: "Guide",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
    slug: "where-to-get-started-with-ai"
  }
];

const Blog = () => {
  useEffect(() => {
    // Check if script is already present
    const scriptId = 'ck-script-87b7674766';
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
        <title>Blog - AI Design Academy</title>
        <meta name="description" content="Tutorials, updates, and success stories from the AI Design Academy community. Learn vibe coding, AI tools, and how to build real applications." />
        <style dangerouslySetInnerHTML={{__html: `
          .formkit-form[data-uid="87b7674766"] .formkit-submit[data-active] .formkit-spinner { opacity: 1; height: 100%; width: 50px; }
          .formkit-form[data-uid="87b7674766"] .formkit-submit[data-active] .formkit-spinner ~ span { opacity: 0; }
          .formkit-spinner { display: flex; height: 0px; width: 0px; margin: 0 auto; position: absolute; top: 0; left: 0; right: 0; overflow: hidden; text-align: center; transition: all 300ms ease-in-out; }
          .formkit-spinner > div { margin: auto; width: 12px; height: 12px; background-color: #fff; opacity: 0.3; border-radius: 100%; display: inline-block; animation: formkit-bouncedelay 1.4s infinite ease-in-out both; }
          .formkit-spinner > div:nth-child(1) { animation-delay: -0.32s; }
          .formkit-spinner > div:nth-child(2) { animation-delay: -0.16s; }
          @keyframes formkit-bouncedelay { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }
        `}} />
      </Helmet>

      <div className="min-h-screen bg-[#0E0E10] text-white selection:bg-white/20">
        <Navigation />

        <main className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto">
          {/* Header Section */}
          <div className="mb-16 sm:mb-24 space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight">
              Blog
            </h1>
            
            <div className="flex flex-col xl:flex-row gap-8 xl:items-end justify-between">
              {/* Categories */}
              <div className="flex flex-wrap gap-4 text-sm font-medium text-white/60">
                <button className="px-4 py-2 bg-white/10 text-white rounded-full hover:bg-white/15 transition-colors">
                  All
                </button>
                <button className="px-4 py-2 hover:bg-white/5 rounded-full transition-colors">
                  Tutorials
                </button>
                <button className="px-4 py-2 hover:bg-white/5 rounded-full transition-colors">
                  Updates
                </button>
                <button className="px-4 py-2 hover:bg-white/5 rounded-full transition-colors">
                  Stories
                </button>
              </div>

              {/* Top Newsletter Form */}
              <div className="w-full xl:max-w-xl">
                <p className="text-sm text-white/60 mb-4 xl:text-right">
                  Get all AI updates delivered to your inbox.
                </p>
                 <form 
                  action="https://app.kit.com/forms/8819273/subscriptions" 
                  className="seva-form formkit-form" 
                  method="post" 
                  data-sv-form="8819273" 
                  data-uid="87b7674766" 
                  data-format="inline" 
                  data-version="5" 
                >
                  <div data-style="clean">
                    <ul className="formkit-alert formkit-alert-error text-red-500 mb-3 text-sm" data-element="errors" data-group="alert"></ul>
                    
                    <div className="flex flex-col sm:flex-row gap-2.5">
                      <input 
                        className="formkit-input flex-1 h-11 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-sm" 
                        aria-label="First Name" 
                        name="fields[first_name]" 
                        placeholder="First Name" 
                        type="text" 
                      />
                      <input 
                        className="formkit-input flex-1 h-11 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-sm" 
                        name="email_address" 
                        aria-label="Email Address" 
                        placeholder="Email Address" 
                        required 
                        type="email" 
                      />
                      <button 
                        data-element="submit" 
                        className="formkit-submit h-11 px-8 bg-white text-black hover:bg-white/90 font-medium rounded-lg transition-all flex items-center justify-center relative overflow-hidden whitespace-nowrap text-sm shrink-0 shadow-lg shadow-white/10"
                        style={{ backgroundColor: '#ffffff', color: '#000000' }}
                      >
                        <div className="formkit-spinner absolute inset-0 flex items-center justify-center bg-white/10 opacity-0 transition-opacity">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                        <span className="formkit-submit-text" style={{ color: '#000000' }}>Subscribe</span>
                      </button>
                    </div>
                    
                    <div className="formkit-powered-by-convertkit-container mt-3 text-right">
                      <a href="https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic" data-element="powered-by" className="formkit-powered-by-convertkit text-[10px] text-white/20 hover:text-white/40 transition-colors" data-variant="dark" target="_blank" rel="nofollow">Built with Kit</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Main Grid Layout - 3 Equal Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {/* Featured Item (Cursor 2.0) - Now same size as others */}
            <div className="group cursor-pointer flex flex-col h-full" onClick={() => window.location.href = `/blog/${featuredPost.slug}`}>
              <div className="relative aspect-[16/10] mb-6 overflow-hidden bg-white/5 rounded-sm">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-500"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-[10px] sm:text-xs font-medium text-white/40 mb-3 uppercase tracking-wider">
                  {featuredPost.category}
                </div>
                <h3 className="text-xl font-medium leading-snug mb-3 group-hover:text-white/80 transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-2 text-[10px] sm:text-xs text-white/40">
                  <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                </div>
              </div>
            </div>

            {/* Other Posts */}
            {blogPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer flex flex-col h-full" onClick={() => window.location.href = `/blog/${post.slug}`}>
                <div className="relative aspect-[16/10] mb-6 overflow-hidden bg-white/5 rounded-sm">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-500"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                   <div className="flex items-center gap-2 text-[10px] sm:text-xs font-medium text-white/40 mb-3 uppercase tracking-wider">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-medium leading-snug mb-3 group-hover:text-white/80 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                   <div className="mt-auto flex items-center gap-2 text-[10px] sm:text-xs text-white/40">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Blog;
