import { Button } from "@/components/ui/button";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowDown, Github, Linkedin, Sparkles } from "lucide-react";

export const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const onMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  return (
    <section id="home" onMouseMove={onMouseMove} className="relative min-h-[100svh] flex items-center pt-32 pb-10 overflow-hidden cursor-crosshair">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-mesh opacity-30" />
        <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

        {/* Draggable Blobs - Optimized for Mobile */}
        <motion.div
          drag
          dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
          dragElastic={0.1}
          className="absolute top-1/4 left-1/4 h-[200px] w-[200px] md:h-[280px] md:w-[280px] rounded-full bg-primary/20 blur-[60px] md:blur-[100px] cursor-grab active:cursor-grabbing z-10"
          whileHover={{ scale: 1.1 }}
        />
        <motion.div
          drag
          dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
          dragElastic={0.1}
          className="absolute bottom-1/4 right-1/4 h-[180px] w-[180px] md:h-[250px] md:w-[250px] rounded-full bg-blue-400/15 blur-[60px] md:blur-[100px] cursor-grab active:cursor-grabbing z-10"
          whileHover={{ scale: 1.1 }}
        />

        {/* Mouse Follower Spotlight (Desktop only for performance) */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 hidden md:block"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                hsl(var(--primary) / 0.1),
                transparent 80%
              )
            `,
          }}
        />
      </div>

      <div className="container relative z-30 flex flex-col items-center text-center px-6">
        <div className="mb-4 flex justify-center">
          <h2 className="text-base md:text-2xl font-medium text-foreground/80 flex items-center justify-center gap-2">
            Hey{" "}
            <span className="animate-pulse" role="img" aria-label="waving hand">
              👋
            </span>
            , I'm Darshan Panchal
          </h2>
        </div>

        <h1
          className="w-full mb-6 font-display text-[clamp(2.5rem,10vw,8rem)] font-bold tracking-tight text-foreground flex flex-wrap justify-center items-center gap-x-[0.1em] gap-y-2 leading-[1.1]">
          <span>Software</span>
          <span className="text-gradient italic font-light relative">Engineer.</span>
        </h1>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="flex flex-col items-center gap-6">
          <p className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed mx-auto">
            Full Stack Developer specializing in scalable backend systems and high-performance applications, delivering end-to-end solutions with a focus on clean architecture and
            efficiency.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button variant="electric" size="lg" className="w-full sm:w-auto min-w-[160px]" asChild>
              <a href="#projects">
                <Sparkles className="h-4 w-4 mr-2" /> View work
              </a>
            </Button>

            <div className="flex items-center justify-center gap-3">
              <a
                href="https://github.com/Darshan9692"
                aria-label="Visit my GitHub profile"
                className="p-3 rounded-full border border-border/60 hover:border-primary/60 hover:text-primary transition-all hover:scale-110 active:scale-95">
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/darshan-panchal-9735a8251"
                aria-label="Visit my LinkedIn profile"
                className="p-3 rounded-full border border-border/60 hover:border-primary/60 hover:text-primary transition-all hover:scale-110 active:scale-95">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.a
          href="#education"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="hidden lg:flex absolute bottom-8 right-8 items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
          Scroll <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};
