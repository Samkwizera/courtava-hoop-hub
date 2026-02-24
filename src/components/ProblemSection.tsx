import { motion } from "framer-motion";
import { MapPinOff, Users, CalendarOff } from "lucide-react";

const problems = [
  {
    icon: MapPinOff,
    title: "No idea where people are playing",
    description:
      "You want to hoop but don't know which courts have games going on right now.",
  },
  {
    icon: Users,
    title: "Courts are empty or overcrowded",
    description:
      "You show up to an empty court or one that's packed — no way to plan ahead.",
  },
  {
    icon: CalendarOff,
    title: "No organized pickup system",
    description:
      "Group chats are messy and unreliable. There's no simple way to organize a game.",
  },
];

const ProblemSection = () => (
  <section className="py-24 bg-muted/50 relative overflow-hidden">
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
          The Problem
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
          The pickup game struggle is real
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Every hooper knows the frustration. Courtava is here to fix it.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            className="bg-card rounded-2xl p-8 border border-border relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="absolute top-5 right-5 font-display font-extrabold text-6xl text-muted/60 select-none leading-none">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5">
              <p.icon className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-2">
              {p.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {p.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
