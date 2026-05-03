import { footerSitemap } from "@/constants/portfolio-data";
import { Github, Linkedin, Zap } from "lucide-react";

export const Footer = () => (
  <footer className="relative bg-secondary/30 py-12 overflow-hidden">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-12 mb-16 text-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-electric">
              <Zap className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="font-display text-xl font-bold">
              Darshan<span className="text-gradient">.panchal</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Sitemap</div>
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            {footerSitemap.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-primary transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Social</div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Darshan9692"
              aria-label="GitHub"
              className="p-3 rounded-full border border-border/60 hover:border-primary/60 hover:text-primary transition-colors">
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/darshan-panchal-9735a8251"
              aria-label="LinkedIn"
              className="p-3 rounded-full border border-border/60 hover:border-primary/60 hover:text-primary transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center border-t border-border/20 text-xs text-muted-foreground font-mono">
        <p>© {new Date().getFullYear()} Darshan Panchal. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
