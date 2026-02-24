import { motion } from "framer-motion";
import { UserPlus, Search, Dribbble } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create your profile",
    description: "Sign up and set your skill level, position, and neighborhood.",
  },
  {
    icon: Search,
    step: "02",
    title: "Discover courts & games",
    description: "Browse active courts and available pickup games near you.",
  },
  {
    icon: Dribbble,
    step: "03",
    title: "Show up and play",
    description: "Join a game, meet players, and ball out. It's that simple.",
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-muted/50 relative overflow-hidden">
    <div className="absolute inset-0 dot-pattern opacity-30" />
    <div className="container mx-auto px-4 relative">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs font-display font-bold text-primary uppercase tracking-widest mb-3 block">
          How It Works
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
          Three steps to get in the game
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Simple, fast, and built around how players actually play.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Connector line */}
        <div className="hidden md:block absolute top-[3.5rem] left-[16.67%] right-[16.67%] h-px bg-border" />

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-card border-2 border-primary/20 flex items-center justify-center mx-auto mb-5 relative z-10">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="inline-block px-3 py-0.5 rounded-full bg-primary/10 text-xs font-display font-bold text-primary uppercase tracking-wider mb-3">
                Step {s.step}
              </span>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[250px] mx-auto">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
