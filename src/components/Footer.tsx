import { Instagram } from "lucide-react";
import logo from "@/assets/courtava-logo.png";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Courtava" className="h-7 w-7" />
          <span className="font-display font-bold text-foreground">Courtava</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-muted-foreground">Follow us on social media</p>
          <a href="https://www.instagram.com/trycourtava/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Instagram className="w-5 h-5" />
            <span className="text-sm font-medium">@trycourtava</span>
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm text-muted-foreground">
            courtavaai@gmail.com
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
