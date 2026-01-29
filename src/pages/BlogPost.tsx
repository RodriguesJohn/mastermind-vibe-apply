import { useParams, useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Helmet } from "react-helmet";
import CursorBlogImage from "@/assets/CursorBlog.png";
import FigmaAIThumbnail from "@/assets/FigmaAIThumbnail.svg";

// Manually importing since we can't easily export from the other file without refactoring
// Ideally this data should be in a separate file (e.g. src/data/blog-posts.ts)

// Blog post data (Duplicated for now to avoid circular dependencies/refactor issues in one go)
const featuredPost = {
  id: 5,
  title: "AI-Powered Design: Bridging Figma, Code, and Design Systems",
  excerpt: "Explore how AI tools like Claude Code and Cursor are revolutionizing design-to-code workflows. Learn what's possible when you connect your Figma design system directly to your codebase.",
  author: "AI Design Academy",
  date: "2025-01-28",
  readTime: "6 min read",
  category: "Insights",
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
                  <h3 className="text-lg font-medium text-white mb-3 tracking-tight">Master Vibe Coding in 2 Weeks</h3>
                  <p className="mb-4 text-white/70 text-base">
                    From 0→1 turn static screens into functional AI products with live building, feedback, and real-world workflows.
                  </p>
                  <Button size="sm" className="bg-white text-black hover:bg-white/90 rounded-md px-4 h-9 text-sm font-medium" asChild>
                    <a href="/">
                      Enroll in the Cohort
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
                  <h3 className="text-xl font-medium text-white mb-3 tracking-tight">Master Vibe Coding in 2 Weeks</h3>
                  <p className="mb-6 text-white/70 text-base max-w-lg mx-auto">
                    From 0→1 turn static screens into functional AI products with live building, feedback, and real-world workflows.
                  </p>
                  <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-12 text-base font-medium" asChild>
                    <a href="/">
                      Enroll in the Cohort
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
                  <h3 className="text-xl font-medium text-white mb-3 tracking-tight">Master Vibe Coding in 2 Weeks</h3>
                  <p className="mb-6 text-white/70 text-base max-w-lg mx-auto">
                    From 0→1 turn static screens into functional AI products with live building, feedback, and real-world workflows.
                  </p>
                  <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-12 text-base font-medium" asChild>
                    <a href="/">
                      Enroll in the Cohort
                    </a>
                  </Button>
                </div>
              </div>
            ) : post.slug === "clawdbot-ai-agent-mac-mini" ? (
              <div className="space-y-6 text-[17px] leading-[1.6]">
                <p className="text-xl md:text-2xl font-medium text-white leading-normal italic">
                  Why designers and creatives are rushing to set up always-on AI assistants and how you can too
                </p>
                <p>
                  If you've been on tech Twitter lately, you've probably seen people raving about a lobster emoji and suddenly buying Mac Minis. What's going on?
                </p>
                <p>
                  The answer is <strong>Clawdbot</strong>, an open-source AI agent that's changing how we think about personal AI assistants. And as someone who's been deep in the AI tools for designers space, I had to dig into what all the hype is about.
                </p>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">What Is Clawdbot, Really?</h2>
                <p>
                  Think of Clawdbot as having a personal AI employee that works 24/7, runs on your own hardware, and you control entirely from your phone through WhatsApp, Telegram, Discord, or iMessage.
                </p>
                <p>
                  Unlike ChatGPT or Claude where you go to a website and type, Clawdbot lives inside the messaging apps you already use. It can browse the web, fill out forms, manage your email, control your calendar, run shell commands, and even write its own skills to get better at helping you.
                </p>
                <p>
                  The creator, Peter Steinberger (known for high-quality macOS development), built it around his own AI assistant named Clawd, a playful space lobster character. What started as a personal project exploded into a community-driven phenomenon.
                </p>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">Why Everyone's Talking About It</h2>
                <p>Here's what makes Clawdbot different from every other AI assistant:</p>

                <h3 className="text-xl font-medium text-white mt-8 mb-3 tracking-tight">Always Proactive, Not Reactive</h3>
                <p>
                  Previous AI agents were semi-active, you had to prompt them. Clawdbot runs in the background actively doing your tasks 24/7. Federico Viticci from MacStories burned through 180 million tokens in his first week and killed his Zapier subscriptions because Clawdbot automated his entire workflow.
                </p>

                <h3 className="text-xl font-medium text-white mt-8 mb-3 tracking-tight">True Multi-Platform Integration</h3>
                <p>
                  Clawdbot connects to virtually everything: WhatsApp, Telegram, Slack, Discord, Google Chat, Signal, iMessage, Microsoft Teams, and more. Your assistant's memory stays intact across all of them.
                </p>

                <h3 className="text-xl font-medium text-white mt-8 mb-3 tracking-tight">Local-First Privacy</h3>
                <p>
                  Your data stays on your device. Unlike cloud AI services, you own and control everything. Memory is stored as Markdown files in folders like an Obsidian vault, completely inspectable and editable.
                </p>

                <h3 className="text-xl font-medium text-white mt-8 mb-3 tracking-tight">Self-Improving Skills</h3>
                <p>
                  This is the part that blew my mind. Clawdbot can create skills of its own. Users report it automatically figured out API authentication, built workflows, and even edited its own prompts to get better results.
                </p>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">The Mac Mini Phenomenon</h2>
                <p>So why is everyone buying Mac Minis?</p>
                <p>
                  The Mac Mini M4 has become the go-to dedicated hub for running Clawdbot because:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li><strong>Silent 24/7 operation</strong> that sips power with no noise</li>
                  <li><strong>iMessage sync</strong> for native Apple ecosystem integration</li>
                  <li><strong>Unified memory</strong> where the M4 Pro with 64GB handles complex AI workloads</li>
                  <li><strong>Compact form factor</strong> so you can tuck it in a closet and forget about it</li>
                </ul>
                <p>
                  Federico Viticci runs an M4 Mac Mini (~$600) and pays $200/month for Claude Max on top of that. But here's the thing: <strong>you don't need a Mac Mini</strong>.
                </p>
                <p>
                  Clawdbot runs on any laptop (Mac, Windows via WSL2, Linux), Raspberry Pi (some users have it running great), a $5/month VPS, or that dusty 2018 laptop collecting cobwebs.
                </p>
                <p>
                  The minimum requirements are surprisingly low: 1GB RAM, 500MB disk space. The AI model costs more than the hardware for most setups.
                </p>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">Real-World Use Cases (This Is Where It Gets Wild)</h2>
                <p>Here's what people are actually doing with Clawdbot:</p>

                <h3 className="text-xl font-medium text-white mt-8 mb-3 tracking-tight">Inbox Management</h3>
                <blockquote className="border-l-2 border-white/30 pl-6 italic text-white/70">
                  "Cleared 10,000+ emails from my inbox (45% reduction!)" — @jdrhyne
                </blockquote>

                <h3 className="text-xl font-medium text-white mt-8 mb-3 tracking-tight">Autonomous Coding</h3>
                <blockquote className="border-l-2 border-white/30 pl-6 italic text-white/70">
                  "Autonomous Claude Code loops from my phone. 'fix tests' via Telegram. Runs the loop, sends progress every 5 iterations." — @php100
                </blockquote>

                <h3 className="text-xl font-medium text-white mt-8 mb-3 tracking-tight">Business Operations</h3>
                <blockquote className="border-l-2 border-white/30 pl-6 italic text-white/70">
                  "Less than 24 hours in: cleaned up Linear issues, wrote email follow-ups, opened 3 PRs, prospected new signups." — @avi_press
                </blockquote>

                <h3 className="text-xl font-medium text-white mt-8 mb-3 tracking-tight">Smart Home & Calendar</h3>
                <p>
                  Daily briefings at 9am with calendar events, task priorities, and anything needing attention, all sent to your messaging app of choice.
                </p>

                <h3 className="text-xl font-medium text-white mt-8 mb-3 tracking-tight">Insurance & Reimbursements</h3>
                <blockquote className="border-l-2 border-white/30 pl-6 italic text-white/70">
                  "My @clawdbot accidentally started a fight with Lemonade Insurance because of a wrong interpretation response. After this email, they started to reinvestigate the case instead of instantly rejecting it."
                </blockquote>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">The Cost Breakdown</h2>
                <p>Let's talk real numbers:</p>
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left text-white/80 text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="py-3 pr-4 font-medium text-white">Setup</th>
                        <th className="py-3 pr-4 font-medium text-white">Hardware</th>
                        <th className="py-3 font-medium text-white">Monthly Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">Budget</td>
                        <td className="py-3 pr-4">Old laptop / Raspberry Pi / $5 VPS</td>
                        <td className="py-3">$0-20 (Claude Pro)</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">Standard</td>
                        <td className="py-3 pr-4">Mac Mini M4</td>
                        <td className="py-3">$20-200 (Claude Pro/Max)</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Power User</td>
                        <td className="py-3 pr-4">Mac Mini M4 Pro 64GB</td>
                        <td className="py-3">$200 (Claude Max)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  You can also use OpenAI API or Codex subscriptions, local models through LM Studio (free but reduced capability), or MiniMax M2.1 for cheaper general chat with Claude escalation for complex tasks.
                </p>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">What This Means for Designers and Creatives</h2>
                <p>As someone building AI tools for designers, here's why I think Clawdbot matters for our community:</p>

                <h3 className="text-xl font-medium text-white mt-8 mb-3 tracking-tight">Workflow Automation on Steroids</h3>
                <p>
                  Imagine telling your phone: "Research the latest UI trends, compile them into a mood board, add it to my Notion, and schedule a reminder to review it tomorrow." And it just... does it.
                </p>

                <h3 className="text-xl font-medium text-white mt-8 mb-3 tracking-tight">Client Communication</h3>
                <p>
                  Draft and send follow-up emails, schedule meetings, process invoices, all through a quick voice note on WhatsApp while you're sketching.
                </p>

                <h3 className="text-xl font-medium text-white mt-8 mb-3 tracking-tight">Content Pipeline</h3>
                <p>
                  Several users are turning YouTube videos into reusable agent skills, automating their content research, and even building entire websites from their phone.
                </p>

                <h3 className="text-xl font-medium text-white mt-8 mb-3 tracking-tight">Personal CRM</h3>
                <p>
                  The memory system means Clawdbot remembers every conversation, every preference, every decision. No more re-explaining context every time.
                </p>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">Should You Try It?</h2>
                <p>I'll be honest, I haven't set it up yet myself. But based on my research, here's my take:</p>

                <p><strong>Try it if:</strong></p>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>You're comfortable with command line basics</li>
                  <li>You already pay for Claude Pro or have API credits</li>
                  <li>You want to automate repetitive tasks</li>
                  <li>You're curious about where personal AI is heading</li>
                </ul>

                <p className="mt-6"><strong>Wait if:</strong></p>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>You want polished, plug-and-play software</li>
                  <li>You need enterprise-grade reliability today</li>
                  <li>You're not ready to troubleshoot occasional rough edges</li>
                </ul>

                <p>
                  The community is incredibly active (two Clawdbot instances run in the Discord answering questions), and bugs get fixed within minutes of being reported.
                </p>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">The Bottom Line</h2>
                <p>
                  Clawdbot represents something bigger than just another AI tool. It's a glimpse at what personal AI assistants should have been all along: proactive, private, integrated into the apps we already use, and actually capable of getting things done.
                </p>
                <p>
                  As one user put it: "It will actually be the thing that nukes a ton of startups, not ChatGPT as people meme about. The fact that it's hackable (and more importantly, self-hackable) and hostable on-prem will make sure tech like this DOMINATES conventional SaaS."
                </p>
                <p>
                  I'm planning to experiment with this and see if it holds up to the promise. If it does, building AI agents that work 24/7 seems to be closer than ever.
                </p>

                <p>Stay creative,<br /><strong>John</strong></p>

                <p className="italic text-white/60">
                  Have you tried Clawdbot? Drop your experience in the comments. I'd love to hear how designers are using it in their workflows.
                </p>

                <hr className="border-white/10 my-12" />

                <div className="not-prose">
                  <h3 className="text-lg font-medium text-white mb-4 tracking-tight">Related Resources</h3>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <a href="https://clawd.bot" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white underline decoration-white/30 underline-offset-4 transition-colors">Clawdbot Official Site</a>
                    <span className="text-white/20">|</span>
                    <a href="https://docs.clawd.bot" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white underline decoration-white/30 underline-offset-4 transition-colors">Documentation</a>
                    <span className="text-white/20">|</span>
                    <a href="https://github.com/clawdbot/clawdbot" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white underline decoration-white/30 underline-offset-4 transition-colors">GitHub Repository</a>
                    <span className="text-white/20">|</span>
                    <a href="https://www.macstories.net/stories/clawdbot-showed-me-what-the-future-of-personal-ai-assistants-looks-like/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white underline decoration-white/30 underline-offset-4 transition-colors">MacStories Coverage</a>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-8 my-8 text-center not-prose">
                  <h3 className="text-xl font-medium text-white mb-3 tracking-tight">Get the Free Vibe Coding Guide</h3>
                  <p className="mb-6 text-white/70 text-base max-w-lg mx-auto">
                    Learn how to go from static designs to functional AI products with our step-by-step vibe coding guide.
                  </p>
                  <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-12 text-base font-medium" asChild>
                    <a href="/guide">
                      Get the Free Guide
                    </a>
                  </Button>
                </div>
              </div>
            ) : post.slug === "control-figma-with-cursor-claude" ? (
              <div className="space-y-6 text-[17px] leading-[1.6]">
                <p className="text-xl md:text-2xl font-medium text-white leading-normal">
                  The future of design-to-code and code-to-design is here
                </p>
                <p>
                  AI-powered design automation is transforming how designers and developers collaborate. With tools like Figma, Cursor, and Claude Code, it's now possible to bridge the gap between design systems and frontend development in ways that weren't possible before.
                </p>

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">What's Now Possible</h2>
                <p>
                  The combination of AI coding assistants and design tools opens up powerful new workflows. Imagine being able to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white/80 mt-4">
                  <li>Automatically generate Figma components from your React code</li>
                  <li>Sync design tokens between your codebase and Figma design system</li>
                  <li>Have AI analyze your UI components and create matching design assets</li>
                  <li>Extract variables, styles, and component data bidirectionally</li>
                  <li>Automate repetitive design-to-code translation tasks</li>
                </ul>
                <p className="mt-4">
                  This isn't science fiction. It's happening now through MCP (Model Context Protocol) integrations that connect AI assistants directly to design tools.
                </p>

                <hr className="border-white/10 my-12" />

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">The Design Engineering Revolution</h2>
                <p>
                  Design engineering is emerging as a critical discipline that sits at the intersection of design and frontend development. AI tools are accelerating this trend by making it easier to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white/80 mt-4">
                  <li><strong>Maintain design system consistency:</strong> Keep your Figma design system and code components in sync automatically</li>
                  <li><strong>Speed up component creation:</strong> Generate multi-variant component sets from code or natural language descriptions</li>
                  <li><strong>Reduce design-dev handoff friction:</strong> AI can read both your designs and your code, bridging the gap</li>
                  <li><strong>Automate Tailwind CSS integration:</strong> Sync your Tailwind config with Figma variables and tokens</li>
                </ul>

                <hr className="border-white/10 my-12" />

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">The Technology Stack</h2>
                <p>
                  This new wave of design automation relies on several key technologies working together:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white/80 mt-4">
                  <li><strong>Figma:</strong> The industry-standard design tool with powerful plugin and API capabilities</li>
                  <li><strong>Cursor:</strong> An AI-native code editor built for the age of AI pair programming</li>
                  <li><strong>Claude Code:</strong> Anthropic's AI coding assistant with deep reasoning capabilities</li>
                  <li><strong>MCP (Model Context Protocol):</strong> The protocol that enables AI assistants to interact with external tools</li>
                  <li><strong>Design tokens:</strong> The bridge between design decisions and code implementation</li>
                </ul>

                <hr className="border-white/10 my-12" />

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">Real-World Applications</h2>
                <p>
                  Teams are already using AI-powered design workflows to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white/80 mt-4">
                  <li>Generate complete design systems from existing React component libraries</li>
                  <li>Create Figma mockups directly from code descriptions</li>
                  <li>Keep design tokens synchronized across platforms</li>
                  <li>Automate the creation of component variants and states</li>
                  <li>Accelerate prototyping with AI-assisted design generation</li>
                </ul>
                <p className="mt-4">
                  Whether you're a designer learning to code or a developer who wants to improve your design workflow, these AI-powered tools are changing what's possible.
                </p>

                <hr className="border-white/10 my-12" />

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">Getting Started</h2>
                <p>
                  If you're interested in exploring AI-powered design automation, here are the key areas to focus on:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white/80 mt-4">
                  <li>Learn how MCP servers work and how they connect AI assistants to external tools</li>
                  <li>Explore Figma's plugin ecosystem and API capabilities</li>
                  <li>Understand design tokens and how they bridge design and code</li>
                  <li>Practice with AI coding assistants like Claude Code in Cursor</li>
                  <li>Experiment with design-to-code and code-to-design workflows</li>
                </ul>
                <p className="mt-4">
                  The learning curve is real, but the productivity gains are significant. Teams that master these workflows are shipping faster and maintaining better consistency between their designs and implementations.
                </p>

                <hr className="border-white/10 my-12" />

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">The Future of Design + Code</h2>
                <p>
                  We're at the beginning of a fundamental shift in how design and development work together. AI isn't replacing designers or developers. It's giving both superpowers they didn't have before.
                </p>
                <p className="mt-4">
                  The designers who learn to leverage AI tools will be able to prototype faster, maintain more consistent design systems, and collaborate more effectively with developers. The developers who understand design workflows will build better user experiences with less friction.
                </p>
                <p className="mt-4">
                  This is what design engineering looks like in the AI era, and it's just getting started.
                </p>

                <hr className="border-white/10 my-12" />

                <h2 className="text-2xl font-medium text-white mt-12 mb-4 tracking-tight">Learn More</h2>
                <p>
                  Want to dive deeper into AI-powered design workflows and design engineering? Join our community to learn the hands-on skills that will define the next generation of design and development.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-lg p-8 my-8 text-center not-prose">
                  <h3 className="text-xl font-medium text-white mb-3 tracking-tight">Get the Free Vibe Coding Guide</h3>
                  <p className="mb-6 text-white/70 text-base max-w-lg mx-auto">
                    Learn how to go from static designs to functional AI products with our step-by-step vibe coding guide.
                  </p>
                  <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-12 text-base font-medium" asChild>
                    <a href="/guide">
                      Get the Free Guide
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
