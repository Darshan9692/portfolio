import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants/portfolio-data";
import { Project } from "@/types/portfolio";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown, ChevronUp, Github } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="embla__slide flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_35%] min-w-0">
      <div className="group relative block rounded-3xl overflow-hidden border border-border/60 bg-card/60 backdrop-blur-sm hover-lift hover:border-primary/50 h-full flex flex-col">
        {/* Project Image Header */}
        <div className={`relative aspect-[16/10] bg-gradient-to-br ${project.gradient} overflow-hidden shrink-0`}>
          <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

          {/* Year Badge */}
          <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/40 backdrop-blur-md border border-white/20">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-xs text-white font-mono">{project.year}</span>
          </div>

          {/* Links Section */}
          <div className="absolute top-5 right-5 flex gap-2 z-10">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                title="Source Code"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-background/40 backdrop-blur-md border border-white/20 hover:bg-background transition-all duration-500">
                <Github className="h-5 w-5 text-white group-hover:text-primary" />
              </a>
            )}
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-background/40 backdrop-blur-md border border-white/20 hover:bg-background hover:rotate-45 transition-all duration-500">
                <ArrowUpRight className="h-5 w-5 text-white group-hover:text-primary" />
              </a>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-7 flex flex-col flex-grow">
          <span className="text-xs font-mono uppercase tracking-widest text-primary">{project.category}</span>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">{project.title}</h3>

          {/* Description with Expandable functionality */}
          <div className="mt-3 relative">
            <p className={`text-muted-foreground leading-relaxed transition-all duration-300 ${isExpanded ? "" : "line-clamp-2"}`}>{project.description}</p>
            <button onClick={() => setIsExpanded(!isExpanded)} className="mt-2 text-xs font-mono text-primary flex items-center gap-1 hover:underline focus:outline-none">
              {isExpanded ? (
                <>
                  Show less <ChevronUp className="h-3 w-3" />
                </>
              ) : (
                <>
                  Read more <ChevronDown className="h-3 w-3" />
                </>
              )}
            </button>
          </div>

          {/* Tech Stack */}
          <div className="mt-auto pt-6 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="px-3 py-1 text-xs rounded-full bg-background/60 border border-border/60 font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <SectionWrapper id="projects" className="bg-secondary/30 border-y border-border/60 overflow-hidden" containerClassName="px-0 md:px-8">
      <div className="container">
        <div className="flex items-end justify-between mb-12">
          <SectionHeader eyebrow="04 — Projects" />
          <div className="flex gap-2 mb-8">
            <Button variant="outline" size="icon" onClick={scrollPrev} disabled={!prevBtnEnabled} className="rounded-full border-border/60 hover:border-primary/50">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={scrollNext} disabled={!nextBtnEnabled} className="rounded-full border-border/60 hover:border-primary/50">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex gap-6">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
