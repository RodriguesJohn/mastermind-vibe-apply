import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { ArrowRight } from "lucide-react";
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
  return (
    <>
      <Helmet>
        <title>Blog - AI Design Academy</title>
        <meta name="description" content="Tutorials, updates, and success stories from the AI Design Academy community. Learn vibe coding, AI tools, and how to build real applications." />
      </Helmet>

      <div className="min-h-screen bg-[#0E0E10] text-white selection:bg-white/20">
        <Navigation />

        <main className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto">
          {/* Header Section */}
          <div className="mb-16 sm:mb-24">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight mb-6 sm:mb-8">
              Blog
            </h1>
            
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

          {/* List View Section */}
          {/* Hidden since we only have 3 posts total now (1 featured + 2 secondary)
          <div className="border-t border-white/10 pt-24">
             <div className="flex items-center justify-between mb-16">
              <h2 className="text-2xl font-medium">All articles</h2>
              <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/5">
                View archive <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
               {blogPosts.slice(3).map((post) => (
                <article key={post.id} className="group cursor-pointer flex flex-col h-full" onClick={() => window.location.href = `/blog/${post.slug}`}>
                  <div className="aspect-[3/2] bg-white/5 mb-6 overflow-hidden rounded-sm">
                     <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-500"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between text-xs text-white/40 mb-3">
                       <span className="font-medium text-white/60">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>

                    <h3 className="text-lg font-medium leading-snug mb-3 group-hover:text-white/80 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-white/60 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          */}
        </main>

        {/* Minimal Footer CTA - Hidden for now */}
        {/* <section className="py-32 border-t border-white/10">
          <div className="container mx-auto px-6 text-center">
             <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
              Ready to start building?
            </h2>
            <div className="flex items-center justify-center gap-6">
              <Button size="lg" className="h-12 px-8 rounded-full bg-white text-black hover:bg-white/90 font-medium">
                Get started
              </Button>
               <Button size="lg" variant="ghost" className="h-12 px-8 rounded-full text-white hover:bg-white/10 font-medium">
                Read documentation
              </Button>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default Blog;
// Force sync update
