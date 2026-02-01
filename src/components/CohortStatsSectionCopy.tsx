import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TrendingUp, BookX, Target, Layers } from "lucide-react";

const stats = [
  {
    title: "80% of Organizations Adapting to AI",
    subcontent: "Companies are rapidly integrating AI into their workflows. Designers who don't adapt risk being left behind.",
    icon: "TrendingUp",
  },
  {
    title: "AI is #1 Priority in Organizations",
    subcontent: "AI adoption is now the top priority for most companies. The demand for AI-skilled designers is growing fast.",
    icon: "Target",
  },
  {
    title: "Lack of Practical Learning",
    subcontent: "Most AI courses are theory-heavy. Designers need hands-on, practical training that applies to real workflows.",
    icon: "BookX",
  },
  {
    title: "Few Resources for Designers",
    subcontent: "There's a shortage of AI learning resources specifically catered to designer workflows and creative processes.",
    icon: "Layers",
  },
];

export const CohortStatsSectionCopy = () => {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="px-4 md:px-10 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 sm:p-8 bg-white/5 border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                    <div className="flex flex-col items-start h-full">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 sm:mb-5">
                        {stat.icon === "TrendingUp" ? (
                          <TrendingUp size={20} className="text-white" />
                        ) : stat.icon === "Target" ? (
                          <Target size={20} className="text-white" />
                        ) : stat.icon === "BookX" ? (
                          <BookX size={20} className="text-white" />
                        ) : stat.icon === "Layers" ? (
                          <Layers size={20} className="text-white" />
                        ) : null}
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-3 leading-tight">
                        {stat.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-white/60 leading-relaxed flex-1">
                        {stat.subcontent}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
