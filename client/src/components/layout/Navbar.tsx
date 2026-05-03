import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Zap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { MotionToggle } from "@/components/shared/MotionToggle";
import { navLinks } from "@/constants/portfolio-data";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-xl bg-background/70 border-b border-border/60" : "py-6 bg-transparent"
      }`}>
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group rounded-full" aria-label="Darshan Panchal — home">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-electric blur-md opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-electric">
              <Zap className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} aria-hidden="true" />
            </div>
          </div>
          <span className="font-display text-xl font-bold tracking-tight">
            Darshan<span className="text-gradient">.panchal</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full border border-border/60 bg-background/40 backdrop-blur-md">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary focus-visible:text-foreground focus-visible:bg-secondary">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <MotionToggle />
          <ThemeToggle />
          <Button variant="electric" size="sm" className="hidden md:inline-flex" asChild>
            <a href="#contact">Let's talk</a>
          </Button>
          <button
            className="md:hidden rounded-full border border-border/60 p-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          id="mobile-nav"
          aria-label="Mobile"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden container mt-4 flex flex-col gap-1 rounded-2xl border border-border/60 bg-background/95 p-4 backdrop-blur-xl">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-4 py-3 rounded-xl hover:bg-secondary focus-visible:bg-secondary text-sm font-medium">
              {l.label}
            </a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
};
