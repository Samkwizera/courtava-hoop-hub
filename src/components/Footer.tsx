import { Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-xl">🏀</span>
          <span className="font-display font-bold text-foreground">Courtava</span>
        </div>

        <div className="flex items-center gap-5">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Youtube className="w-5 h-5" />
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm text-muted-foreground">
            hello@courtava.com
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} Courtava. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
