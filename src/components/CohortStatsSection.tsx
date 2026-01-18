import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CircleCheckBigIcon } from "@/components/CircleCheckBigIcon";
import { UsersRoundIcon } from "@/components/UsersRoundIcon";
import { StarIcon } from "@/components/StarIcon";
import { SparklesIcon } from "@/components/SparklesIcon";

const stats = [
  {
    number: "10",
    title: "Reviews",
    subcontent: "Positive feedback and transformation stories from cohort members sharing their success and growth",
    icon: "CircleCheckBig",
  },
  {
    number: "4",
    title: "Cohorts Ran",
    subcontent: "Successful cohorts completed with engaged designers and product leaders",
    icon: "Sparkles",
  },
  {
    number: "7+",
    title: "Tracks",
    subcontent: "Dedicated tracks focused on helping you level up your AI skills",
    icon: "UsersRound",
  },
  {
    number: "4.7",
    title: "Cohort Rating on Maven",
    subcontent: "Perfect rating from participants who completed the program",
    icon: "Star",
  },
];

export const CohortStatsSection = () => {
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
                      <div className="mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4 w-full">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                          {stat.icon === "CircleCheckBig" ? (
                            <CircleCheckBigIcon size={20} className="text-white" />
                          ) : stat.icon === "UsersRound" ? (
                            <UsersRoundIcon size={20} className="text-white" />
                          ) : stat.icon === "Star" ? (
                            <StarIcon size={20} className="text-white" />
                          ) : stat.icon === "Sparkles" ? (
                            <SparklesIcon size={20} className="text-white" />
                          ) : null}
                        </div>
                        <div className="flex-1">
                          <span className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-none">
                            {stat.number}
                          </span>
                        </div>
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

