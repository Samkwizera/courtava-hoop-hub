import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EarlyAccessForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [skill, setSkill] = useState("");
  const [wantHost, setWantHost] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !city || !skill) return;
    setSubmitted(true);
  };

  return (
    <section id="early-access" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {submitted ? (
            <div className="text-center bg-secondary rounded-2xl p-12 border border-border">
              <span className="text-5xl mb-4 block">🏀</span>
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                You're on the Courtava roster!
              </h3>
              <p className="text-muted-foreground">
                We'll notify you when we launch. Get ready to hoop.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
                  Get early access
                </h2>
                <p className="text-muted-foreground text-lg">
                  Be the first to know when Courtava drops in your city.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-8 border border-border shadow-sm space-y-5"
              >
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    placeholder="Your city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label>Skill Level</Label>
                  <Select value={skill} onValueChange={setSkill} required>
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Select your level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="host"
                    checked={wantHost}
                    onCheckedChange={(v) => setWantHost(v === true)}
                  />
                  <Label htmlFor="host" className="text-sm cursor-pointer">
                    I want to host games
                  </Label>
                </div>
                <Button type="submit" className="w-full py-6 text-base font-display font-semibold rounded-xl">
                  Join the Waitlist
                </Button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EarlyAccessForm;
