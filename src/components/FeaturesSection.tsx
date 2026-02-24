import { motion } from "framer-motion";
import { MapPin, Gamepad2, UserCircle, UsersRound, Bell } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Find Nearby Courts",
    description: "Discover basketball courts near you with real-time activity status.",
  },
  {
    icon: Gamepad2,
    title: "Join or Host Games",
    description: "Create pickup games or jump into ones already happening around you.",
  },
  {
    icon: UserCircle,
    title: "Player Profiles",
    description: "Show your skill level, position, and playing style to find the right match.",
  },
  {
    icon: UsersRound,
    title: "Community Groups",
    description: "Build your local basketball crew and stay connected with regulars.",
  },
  {
    icon: Bell,
    title: "Game Notifications",
    description: "Get notified when games start near you — never miss a run.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs font-display font-bold text-primary uppercase tracking-widest mb-3 block">
          Features
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
          Everything you need to hoop
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Courtava gives you the tools to find, organize, and enjoy pickup basketball.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className={`group bg-card rounded-2xl p-7 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 ${
              i >= 3 ? "sm:col-span-1 lg:col-span-1" : ""
            } ${i === 3 ? "lg:col-start-1 lg:col-end-2 lg:ml-auto lg:max-w-full" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-1.5">
              {f.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {f.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
