import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ngamije Dav",
    city: "Kigali, Rwanda",
    text: "I've been waiting for something like this. No more random group chat invites — just show up and play.",
    initials: "ND",
  },
  {
    name: "Toussaint Nkundwa",
    city: "Kigali, Rwanda",
    text: "As a new player in town, finding pickup games was impossible. Courtava is a game changer.",
    initials: "TN",
  },
  {
    name: "Mutabazi Bruno",
    city: "Kigali, Rwanda",
    text: "Hosting games with Courtava makes it so easy to get my regular crew together.",
    initials: "MB",
  },
];

const SocialProof = () => (
  <section id="community" className="py-24 bg-muted/50 relative overflow-hidden">
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
          Community
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
          Built for the basketball community
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Hear from players who are already excited about Courtava.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-card rounded-2xl p-7 border border-border relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Quote className="w-8 h-8 text-primary/15 mb-3" />
            <p className="text-foreground text-sm leading-relaxed mb-6">
              {t.text}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xs font-display font-bold text-primary">{t.initials}</span>
              </div>
              <div>
                <p className="font-display font-semibold text-sm text-foreground">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground">{t.city}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
