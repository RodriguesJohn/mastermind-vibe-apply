import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LindaImage from "@/assets/Linda.jpeg";
import SnehImage from "@/assets/Sneh.webp";
import SonaliImage from "@/assets/Sonali.jpeg";
import KennyImage from "@/assets/Kenny.jpeg";
import AviadImage from "@/assets/Avaid.jpeg";
import IniImage from "@/assets/Indi.jpeg";

const testimonials = [
  {
    name: "Linda",
    role: "Principal Product Designer, Accessibility Specialist JPMorgan Chase",
    content: "This is the second AI course I've taken this year. My first course was more strategy-focused and geared toward business and product owners, which was helpful for understanding AI at a high level. John's course is different—it's practical, with demos and real encouragement to explore different AI tools specifically for designers. John genuinely cares about whether we're getting value out of this. His enthusiasm for AI design feels authentic, and it's contagious. I've actually used what I learned here—creating content with AI and exploring how to build a Figma plugin with AI assistance. That hands-on approach made all the difference. One of the highlights was when John brought in well-known AI design experts to talk with us directly. Getting to ask them questions and hear their real-world insights was unexpected and incredibly valuable. Our Slack channel has been surprisingly active—people sharing what they're building, which really speaks to the supportive environment John's created. He's managed to pack in a ton of practical content while keeping everything approachable and encouraging. If you're a UX professional who wants to actually use AI tools in your work, this is the course to take.",
    initials: "L",
    image: LindaImage
  },
  {
    name: "Sneh",
    role: "UX Designer",
    content: "Taking the AI Design Masterclass with John Rodrigues has been an incredibly inspiring experience. John is calm, insightful, and deeply attuned to emerging design trends. I joined this cohort to understand the foundations of AI, and his strategic frameworks and live sessions helped me think like both a strategist and a solutionist. The theory was never dull—concise, clear, and the perfect nudge to explore further. From hands-on agent-building sessions to creative lab-style explorations of the latest AI tools, every session felt like a collaborative discovery. The small cohort offered meaningful one-on-one attention and genuine discussions that often ran overtime (and no one minded!). I came here to learn, but left with motivation, clarity, and a supportive community of designers to grow with.",
    initials: "S",
    image: SnehImage
  },
  {
    name: "Sonali",
    role: "Sr.Product Designer at JPMorgan Chase",
    content: "The most valuable part of this cohort was the hands-on experience with new AI tools. John emphasizes practical application over lectures, which made the material immediately useful. I'm more confident in the subject and excited to deepen my expertise. I'm eager to apply this foundation to my career as a growth opportunity.",
    initials: "So",
    image: SonaliImage
  },
  {
    name: "Kenneth (Ken) Hargrove",
    role: "Product Designer @CoStar",
    content: "As a Product Designer moving into the fast-moving AI space, this cohort has given me the foundation to understand AI at a high level. I've learned about more tools to leverage in my design process. I also walked away with a foundational understanding of how to design human-centered AI experiences. I highly recommend this course",
    initials: "KH",
    image: KennyImage
  },
  {
    name: "Aviad",
    role: "Product Designer",
    content: "John delivered everything he listed and more. Always accessible, he creates additional tutorials on demand and is ready to help, explain, and mentor with patience and care.",
    initials: "A",
    image: AviadImage
  },
  {
    name: "ÌníOlúwa",
    role: "Senior Product Designer at Intercom",
    content: "There's so much I could say about this course, but the biggest takeaway has been how much it's pushed me to explore and grow. John has put in an incredible amount of effort and it shows. Every session has been engaging, interactive, and deeply impactful. I've gone from not knowing how to code to building my own AI agent and now creating an app. WHAT?! Thank you, John, for being such a generous teacher and for expanding my horizons!",
    initials: "Ì",
    image: IniImage
  }
];

export const CohortTestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="px-4 md:px-10 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 tracking-tight">
            Stories From Cohort Members
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card/50 border-border/40 hover:border-border transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-white leading-relaxed mb-6">
                {testimonial.content}
              </p>
              
              <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                <Avatar className="w-16 h-16">
                  {testimonial.image ? (
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  ) : null}
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};
