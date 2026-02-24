import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const TYPEFORM_URL = "https://form.typeform.com/to/jXf0uH8t";

const EarlyAccessForm = () => {
  return (
    <section id="early-access" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Get early access
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Be the first to know when Courtava drops in your city. Sign up in under a minute.
          </p>
          <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="text-base px-10 py-6 rounded-xl font-display font-semibold shadow-lg shadow-primary/25 gap-2"
            >
              Join the Waitlist
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EarlyAccessForm;
