import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-basketball.png";

const stats = [
  { icon: MapPin, label: "Courts mapped", value: "10+" },
  { icon: Users, label: "Players waiting", value: "420+" },
  { icon: Zap, label: "Cities launching", value: "2" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Basketball court illustration"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 z-0 dot-pattern opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Early Access — Join the Waitlist
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-[1.1] tracking-tight text-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Meet <span className="text-primary">Courtava</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold text-muted-foreground mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Find Real Pickup Basketball Games Anywhere
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Courtava connects you to nearby courts and pickup games — so you
            never miss a run again.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a href="https://form.typeform.com/to/jXf0uH8t" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-base px-8 py-6 rounded-xl font-display font-semibold shadow-lg shadow-primary/25 gap-2">
                Join Early Access
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="#how-it-works">
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 rounded-xl font-display font-semibold"
              >
                See How It Works
              </Button>
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            className="flex items-center justify-center gap-8 sm:gap-12 mt-16 pt-10 border-t border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <s.icon className="w-4 h-4 text-primary mb-1" />
                <span className="font-display font-bold text-xl text-foreground">{s.value}</span>
                <span className="text-xs text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
