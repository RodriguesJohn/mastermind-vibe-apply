import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import CursorBlogImage from "@/assets/CursorBlog.png";
import FigmaAIThumbnail from "@/assets/FigmaAIThumbnail.svg";

// Blog post data
const featuredPost = {
  id: 5,
  title: "Complete Guide: Control Figma with Cursor + Claude",
  excerpt: "Create Figma components directly from your code using AI. This guide walks you through the full Local Mode setup so Cursor (with Claude) can read AND write to your Figma files.",
  author: "AI Design Academy",
  date: "2025-01-28",
  readTime: "10 min read",
  category: "Guide",
  image: FigmaAIThumbnail,
  slug: "control-figma-with-cursor-claude"
};

const blogPosts = [
  {
    id: 4,
    title: "Clawdbot: The AI Agent That Has Everyone Buying Mac Minis",
    excerpt: "Why designers and creatives are rushing to set up always-on AI assistants — and how you can too. A deep dive into the open-source agent changing personal AI.",
    author: "John Rodrigues",
    date: "2025-01-25",
    readTime: "12 min read",
    category: "Insights",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop",
    slug: "clawdbot-ai-agent-mac-mini"
  },
  {
    id: 1,
    title: "Cursor 2.0: The Future of Vibe Coding is Here",
    excerpt: "Cursor recently launched Cursor 2.0, introducing Composer 1, Agent Mode, and parallel workflows. These updates drastically improve efficiency and hint at where vibe-coding tools are heading.",
    author: "John Rodrigues",
    date: "2024-11-28",
    readTime: "5 min read",
    category: "Product Update",
    image: CursorBlogImage,
    slug: "cursor-2-0-update"
  },
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
            
{/* Categories and Newsletter Form - Hidden */}
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
