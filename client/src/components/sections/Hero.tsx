import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowDown, Github, Linkedin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const onMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  return (
    <section id="home" onMouseMove={onMouseMove} className="relative min-h-screen flex items-center pt-32 pb-10 overflow-hidden cursor-crosshair">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-mesh opacity-30" />
        <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

        {/* Draggable Blobs - Higher Z to be reachable */}
        <motion.div
          drag
          dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/30 blur-[100px] cursor-grab active:cursor-grabbing z-10"
          whileHover={{ scale: 1.1 }}
        />
        <motion.div
          drag
          dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          className="absolute bottom-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-blue-400/20 blur-[100px] cursor-grab active:cursor-grabbing z-10"
          whileHover={{ scale: 1.1 }}
        />
        <motion.div
          drag
          dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          className="absolute top-1/2 left-1/2 h-[300px] w-[300px] rounded-full bg-cyan-400/20 blur-[80px] cursor-grab active:cursor-grabbing z-10"
          whileHover={{ scale: 1.1 }}
        />

        {/* Mouse Follower Spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-20"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                hsl(var(--primary) / 0.15),
                transparent 80%
              )
            `,
          }}
        />
      </div>

      <div className="container relative z-30 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-0 flex justify-center">
          <h2 className="text-xl md:text-2xl font-medium text-foreground flex items-center justify-center gap-2">
            Hey <span className="animate-pulse">👋</span>, I'm Darshan Panchal
          </h2>
        </motion.div>

        <h1 className="sr-only">Darshan Panchal — Software Engineer</h1>
        <div className="w-full mb-2 flex justify-center px-6 overflow-visible" aria-hidden="true">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.2rem,8vw,8rem)] font-bold tracking-tight text-foreground flex flex-wrap justify-center items-center gap-x-[0.1em] gap-y-2">
            <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="inline-block">
              Software
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gradient italic font-light relative py-1 px-2">
              Engineer.
            </motion.span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-col items-center gap-4">
          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed mx-auto">
            Full Stack Developer specializing in scalable backend systems and high-performance applications, delivering end-to-end solutions with a focus on clean architecture,
            efficiency, and seamless user experience.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="electric" size="lg" asChild>
              <a href="#projects">
                <Sparkles className="h-4 w-4 mr-2" /> View work
              </a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="#contact">Let's talk</a>
            </Button>
            <div className="flex items-center justify-center gap-1 ml-2">
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
        </motion.div>

        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="hidden md:flex absolute bottom-6 right-6 items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">
          Scroll <ArrowDown className="h-3 w-3 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};
