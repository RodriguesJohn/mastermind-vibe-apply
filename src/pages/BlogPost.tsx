import { useParams, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Helmet } from "react-helmet";
import CursorBlogImage from "@/assets/CursorBlog.png";

// Manually importing since we can't easily export from the other file without refactoring
// Ideally this data should be in a separate file (e.g. src/data/blog-posts.ts)

// Blog post data (Duplicated for now to avoid circular dependencies/refactor issues in one go)
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

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Combine all posts to search through
  const allPosts = [featuredPost, ...blogPosts];
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0E0E10] text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <Button onClick={() => navigate("/blog")} variant="outline">
          Back to Blog
        </Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - AI Design Academy</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className="min-h-screen bg-[#0E0E10] text-white selection:bg-white/20">
        <Navigation />

        <article className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            className="mb-12 text-white/60 hover:text-white hover:bg-white/5 pl-0"
            onClick={() => navigate("/blog")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>

          {/* Header */}
          <header className="mb-12 max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-white">
              {post.title}
            </h1>

            <div className="flex items-center justify-center gap-2 text-sm text-white/60">
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </header>

          {/* Featured Image - Centered and constrained */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="aspect-[16/9] w-full bg-white/5 rounded-sm overflow-hidden border border-white/5">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Body - Narrower column, smaller text */}
          <div className="max-w-[640px] mx-auto">
            <div className="prose prose-invert prose-base max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-white prose-p:text-white/80 prose-p:leading-7 prose-li:text-white/80 prose-strong:text-white prose-strong:font-medium">
            {/* This is a placeholder. Real posts would have a 'content' field in the data object. */}
            {post.slug === "cursor-2-0-update" ? (
              <div className="space-y-6 text-[17px] leading-[1.6]">
                <p>
                  Cursor recently launched Cursor 2.0, which drastically improves vibe-coding efficiency and hints at where all these vibe-coding tools are heading.
                </p>
                <p>
                  This article covers a summary of the newest updates.
                </p>
                
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 my-8 not-prose">
                  <h3 className="text-lg font-medium text-white mb-3 tracking-tight">Announcement: Vibe Coding Course</h3>
                  <p className="mb-4 text-white/70 text-base">
                    We have launched a Vibe Coding with Cursor course where you will learn how to prototype your ideas, prototype mobile apps, web apps powered by the OpenAI API, and more, if you are interested in learning vibe coding.
                  </p>
                  <Button size="sm" className="bg-white text-black hover:bg-white/90 rounded-md px-4 h-9 text-sm font-medium" asChild>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      Enroll in the course
                    </a>
                  </Button>
                </div>

                <p>So let’s this dive deep in to some of the latest updates from Cursor.</p>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">1. Composer 1 Model</h2>
                <p>
                  This is something I’ve been using a lot lately. Cursor was originally a wrapper around existing AI models like Claude Sonnet and GPT-5, but they’ve now launched their own model called Composer 1, which is 4X faster than previous models. I’ve personally been using it to build the AI Design Academy platform and the speed is impressive.
                </p>
                <p>
                  This also reflects a larger trend: many AI companies that start as wrappers eventually build their own fine-tuned models based on the data they capture. These are trained for specific vertical use-cases, giving them better accuracy and context.
                </p>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">2. Agent Mode and Editor Mode</h2>
                <p>
                  Users can now switch between Agent Mode and Editor Mode.
                </p>
                <p>
                  For non-technical folks, Cursor used to look intimidating but Agent Mode hides the code and provides a simple chat interface alongside a live browser preview.
                </p>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">3. Parallel Agents & Multi-Agent Workflows</h2>
                <p>
                  You can now run several agents from different models Sonnet, GPT-5, etc. at once. The UX can feel a bit confusing at first, but this is an amazing way to test multiple outcomes. Each model has unique strengths and weaknesses, so combining them helps you orchestrate the best overall results.
                </p>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">4. Browser View</h2>
                <p>
                  Cursor 2.0 now includes a built-in browser inside the IDE, so you can preview your work live without switching windows making the entire workflow much faster.
                </p>

                <hr className="border-white/10 my-12" />
                
                <h3 className="text-xl font-medium text-white mb-4 tracking-tight">That’s a Wrap</h3>
                <p>These are some of the key updates from Cursor 2.0.</p>
              </div>
            ) : post.slug === "ai-reshaping-product-design" ? (
              <div className="space-y-6 text-[17px] leading-[1.6]">
                <p>
                  After directing over 5+ AI products in our AI cohort, building couple projects at work, running countless late-night experiments, and writing 46 articles on my Substack blog, here are a few key things I’ve observed about how AI is reshaping product design.
                </p>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">1. AI is the next UI</h2>
                <p>
                  Our new interfaces are driven by intelligence, they have memory, they understand you, and they adapt based on our interactions. This requires a mindset shift. Most designers aren’t yet used to designing for multimodal and probabilistic experiences, but this shift is essential.
                </p>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">2. When integrated well, AI makes products easier to use</h2>
                <p>
                  Products that fail to adapt to this new paradigm shift, risk becoming harder to use and these products will no longer be relevant.
                </p>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">3. Designers must challenge traditional UI patterns</h2>
                <p>
                  When I consult designers and leaders, I encourage them to explore new interaction patterns that align with both the limitations of AI systems and is also natural to human behavior. We almost have to invent this now.
                </p>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">4. Design roles are evolving</h2>
                <p>
                  Designers who adapt will be in high demand but they need to understand AI not just at the interface level, but at the systems level. Traditional design roles may not exist in a year or two, but design will evolve, and its importance will only grow.
                </p>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">5. AI agents will take over actions</h2>
                <p>
                  Agents will work behind the scenes to simplify users lives improving productivity and automating repetitive tasks. Designers will need to figure out how to make these invisible systems feel supportive, intuitive and orchestrate these experiences.
                </p>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">6. Future products will learn you</h2>
                <p>
                  Today’s products require users to learn the software. But future products will learn you. Designers need to figure out how to craft that cohesive, adaptive experience.
                </p>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">7. Demos over presentations</h2>
                <p>
                  The designers of the future won’t go to meetings with presentations and static screens, but with working products and functional demos.
                </p>

                <hr className="border-white/10 my-12" />
                
                <div className="bg-white/5 border border-white/10 rounded-lg p-8 my-8 text-center not-prose">
                  <h3 className="text-xl font-medium text-white mb-3 tracking-tight">Master Vibe Coding</h3>
                  <p className="mb-6 text-white/70 text-base max-w-lg mx-auto">
                    Ready to build your own AI-powered products? Join our comprehensive course on Vibe Coding with Cursor.
                  </p>
                  <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-12 text-base font-medium" asChild>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      Enroll in Vibe Coding Course
                    </a>
                  </Button>
                </div>
              </div>
            ) : post.slug === "where-to-get-started-with-ai" ? (
              <div className="space-y-8 text-lg md:text-xl leading-relaxed">
                <p className="text-xl md:text-2xl font-medium text-white leading-normal">
                  So we've heard this multiple times: "I don't know where to start, it's overwhelming and it's changing so fast."
                </p>
                <p>
                  We've got you. We've mapped out these 6 steps and resources to help you go from chaos to clarity:
                </p>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">Step 1: Stay updated with industry changes, new tools, and workflows</h2>
                <p>
                  Which resources should you follow to keep up? You can join the <a href="https://johnrodrigues.substack.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 underline decoration-white/30 underline-offset-4 transition-colors">AI Design Playbook</a>, where we share the latest market changes and in-depth articles to help you stay ahead.
                </p>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">Step 2: Learn the AI foundations and key terminology</h2>
                <p>
                  Just following trends is not enough; understanding the core foundations of AI is essential. Understand what AI is, the history of AI, and various concepts like machine learning and others. In our cohort, we cover this in depth too in an easy way for you to level up your foundation. But you can always learn about the foundation of AI by reading the articles available online.
                </p>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">Step 3: Create mini projects</h2>
                <p>
                  You're not starting over, you're stacking new skills. Run small experimental projects: take your Figma design and prototype it in Figma Make, Lovable, or Cursor. If you spot a repetitive task, try automating it with agentic workflow tools like n8n. The best way to learn is by applying, not just reading.
                </p>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">Step 4: Share what you learn</h2>
                <p>
                  If you're comfortable, share publicly on social media. If not, share internally with your team or within communities you're part of. This helps you get feedback and collaborate with others.
                </p>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">Step 5: Focus on strategy, not just tools</h2>
                <p>
                  Don't only chase the latest tools think about what makes AI products successful. Understand why some products fail, how to design for trust, and how to look at them from a systems and strategy level. This will help you lead and solve problems that are grounded in user needs while delivering human-centered products.
                </p>

                <hr className="border-white/10 my-12" />
                
                <div className="bg-white/5 border border-white/10 rounded-lg p-8 my-8 text-center not-prose">
                  <h3 className="text-xl font-medium text-white mb-3 tracking-tight">Start Your Journey Today</h3>
                  <p className="mb-6 text-white/70 text-base max-w-lg mx-auto">
                    Want to fast-track these steps? Join our Vibe Coding course to learn the tools, strategy, and build real projects.
                  </p>
                  <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-12 text-base font-medium" asChild>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      Enroll in Vibe Coding Course
                    </a>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-white/60 italic">
                Full article content coming soon...
              </div>
            )}
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPost;
