import { footerSitemap, footerSocials } from "@/constants/portfolio-data";
import { ArrowUp, Github, Linkedin, Zap, Globe } from "lucide-react";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
          hour12: true,
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border/60 py-10">
      <div className="container">
        {/* Top Row: Brand, Nav, Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 mb-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="font-display font-bold text-lg">
                Darshan<span className="text-muted-foreground">.panchal</span>
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Hire me</span>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            {footerSitemap.map((link) => (
              <a key={link.label} href={link.href} className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {footerSocials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                {social.label === "GitHub" && <Github className="h-4 w-4" />}
                {social.label === "LinkedIn" && <Linkedin className="h-4 w-4" />}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Empty (Left), Copyright (Center), Time & Top (Right) */}
        <div className="pt-6 border-t border-border/20 grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          <div className="hidden md:block" /> {/* Left Spacer */}
          <div className="text-center">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 text-center px-4">
              © {new Date().getFullYear()} — Designed & Developed by Darshan Panchal
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-end gap-6">
            <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground/50">
              <Globe className="h-3.5 w-3.5" />
              <span>{time} IST</span>
            </div>
            <button
              onClick={scrollToTop}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all group"
              aria-label="Back to top">
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
