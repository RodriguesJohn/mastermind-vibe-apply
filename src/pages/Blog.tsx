import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";

// Blog post data
const featuredPost = {
  id: 1,
  title: "Building Production-Ready Apps with AI: Lessons from the Trenches",
  excerpt: "After helping dozens of designers and developers build real-world applications with AI coding tools, here are the key insights that separate successful projects from abandoned prototypes.",
  author: "John Rodrigues",
  date: "2024-11-26",
  readTime: "8 min read",
  category: "Tutorial",
  image: "/placeholder.svg",
  slug: "building-production-ready-apps-with-ai"
};

const blogPosts = [
  {
    id: 2,
    title: "Mastering Cursor: 10 Prompting Techniques That Actually Work",
    excerpt: "The difference between mediocre and exceptional results with AI coding tools comes down to how you communicate. Here's what we've learned.",
    author: "John Rodrigues",
    date: "2024-11-23",
    readTime: "6 min read",
    category: "Tutorial",
    slug: "mastering-cursor-prompting-techniques"
  },
  {
    id: 3,
    title: "Course Update: New AI Recipe Generator Module Released",
    excerpt: "We've just launched our latest hands-on project module where you'll build a complete AI-powered recipe generator from scratch.",
    author: "AI Design Academy",
    date: "2024-11-20",
    readTime: "3 min read",
    category: "Course Updates",
    slug: "ai-recipe-generator-module-released"
  },
  {
    id: 4,
    title: "Student Success: From Designer to Full-Stack Developer in 14 Days",
    excerpt: "Meet Sarah, a UX designer who had never written a line of code. Here's how she built and deployed three production apps using vibe coding.",
    author: "AI Design Academy",
    date: "2024-11-18",
    readTime: "5 min read",
    category: "Success Stories",
    slug: "designer-to-fullstack-developer"
  },
  {
    id: 5,
    title: "The Future of Design: Why Every Designer Needs to Code (Sort Of)",
    excerpt: "AI coding tools are changing the game for designers. You don't need to become a traditional developer, but understanding these tools is becoming essential.",
    author: "John Rodrigues",
    date: "2024-11-15",
    readTime: "7 min read",
    category: "Insights",
    slug: "future-of-design-ai-coding"
  },
  {
    id: 6,
    title: "Hackathon Winners Spotlight: UX Agent Built in 48 Hours",
    excerpt: "How our students used vibe coding techniques to win a major hackathon hosted by AGI, OpenAI, and Loveable.",
    author: "AI Design Academy",
    date: "2024-11-12",
    readTime: "4 min read",
    category: "Success Stories",
    slug: "ux-agent-hackathon-winner"
  },
  {
    id: 7,
    title: "Common Mistakes When Starting with AI Coding Tools",
    excerpt: "Avoid these pitfalls that trip up most beginners when they first start using Cursor and other AI coding assistants.",
    author: "John Rodrigues",
    date: "2024-11-10",
    readTime: "5 min read",
    category: "Tutorial",
    slug: "common-ai-coding-mistakes"
  }
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - AI Design Academy</title>
        <meta name="description" content="Tutorials, updates, and success stories from the AI Design Academy community. Learn vibe coding, AI tools, and how to build real applications." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4">
                AI Design Academy Blog
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tutorials, course updates, and success stories from our community of AI-powered designers and developers.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-8 border-t border-border/40">
          <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
            <h2 className="text-2xl font-semibold mb-8">Featured</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-muted flex items-center justify-center p-8">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="p-8">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-3xl mb-4">
                    {featuredPost.title}
                  </CardTitle>
                  <CardDescription className="text-base mb-6">
                    {featuredPost.excerpt}
                  </CardDescription>
                  <Button variant="default" className="w-fit">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardHeader>
              </div>
            </Card>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
            <h2 className="text-2xl font-semibold mb-8">Recent Posts</h2>
            <div className="space-y-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2 hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base mb-4">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">By {post.author}</span>
                      <Button variant="ghost" size="sm">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 border-t border-border/40">
          <div className="container mx-auto px-4 sm:px-8 max-w-4xl text-center">
            <h2 className="text-3xl font-semibold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest tutorials, course updates, and success stories delivered to your inbox.
            </p>
            <Button variant="cta" size="lg" asChild>
              <a href="https://maven.com/productlearnio/aiproductdesignmasterycohort" target="_blank" rel="noopener noreferrer">
                Join the Community
              </a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
