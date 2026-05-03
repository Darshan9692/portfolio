import { MotionToggle } from "@/components/shared/MotionToggle";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants/portfolio-data";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, type LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface NavLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

const NavItem = ({ link }: { link: NavLink }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = link.icon;

  return (
    <motion.a
      href={link.href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center h-10 px-3 rounded-full hover:bg-secondary/80 transition-colors group"
      initial={false}
      animate={{
        width: isHovered ? "auto" : "40px",
      }}
      layout
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
        mass: 0.8,
      }}>
      <motion.div layout className="flex items-center justify-center shrink-0" animate={{ scale: isHovered ? 1.1 : 1 }}>
        <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </motion.div>
      <AnimatePresence>
        {isHovered && (
          <motion.span
            layout
            initial={{ opacity: 0, x: -5, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -5, filter: "blur(4px)" }}
            transition={{ duration: 0.2 }}
            className="ml-2 text-[10px] font-mono uppercase tracking-[0.2em] text-primary whitespace-nowrap overflow-hidden">
            {link.label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
};

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}>
      <div className="container flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2 group rounded-full" aria-label="Darshan Panchal — home">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-electric blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-electric">
              <Zap className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
          </div>
          <span className="font-display text-xl font-bold tracking-tight hidden sm:inline">
            Darshan<span className="text-gradient">.panchal</span>
          </span>
        </a>

        {/* Dock Navigation (Desktop) */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-1 p-1 rounded-full border border-border/60 bg-background/40 backdrop-blur-md shadow-lg">
          {navLinks.map((l) => (
            <NavItem key={l.href} link={l} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1 px-1 py-1 rounded-full border border-border/60 bg-background/40 backdrop-blur-md">
            <MotionToggle />
            <ThemeToggle />
          </div>
          <Button variant="electric" size="sm" className="hidden lg:inline-flex" asChild>
            <a href="#contact">Let's talk</a>
          </Button>

          <button className="md:hidden rounded-full border border-border/60 p-2 bg-background/40 backdrop-blur-md" onClick={() => setOpen(!open)}>
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden container mt-4 flex flex-col gap-1 rounded-2xl border border-border/60 bg-background/95 p-4 backdrop-blur-xl shadow-2xl">
            {navLinks.map((l) => {
              const Icon = l.icon;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-secondary transition-colors text-sm font-medium">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  {l.label}
                </a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
