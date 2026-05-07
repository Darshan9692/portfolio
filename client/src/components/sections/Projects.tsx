import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { projects } from "@/constants/portfolio-data";
import { Project } from "@/types/portfolio";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxVisibleTags, setMaxVisibleTags] = useState(8);

  // Adjust number of visible tags based on viewport width
  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateTagCount = () => {
      const width = window.innerWidth;
      // On small screens, show half the tags for tighter layout
      if (width < 768) {
        setMaxVisibleTags(4);
      } else {
        setMaxVisibleTags(8);
      }
    };

    updateTagCount();
    window.addEventListener("resize", updateTagCount);
    return () => window.removeEventListener("resize", updateTagCount);
  }, []);

  const visibleTags = project.tags.slice(0, maxVisibleTags);
  const hiddenTags = project.tags.slice(maxVisibleTags);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="embla__slide flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_35%] min-w-0">
      <div className="group relative block rounded-3xl overflow-hidden border border-border/60 bg-card/60 backdrop-blur-sm hover-lift hover:border-primary/50 h-full flex flex-col">
        {/* Project Image Header */}
        <div
          className={`relative aspect-[16/10] bg-gradient-to-br ${project.gradient} overflow-hidden shrink-0 ${
            index === 0 ? "ring-2 ring-emerald-400/70 ring-offset-2 ring-offset-background" : ""
          }`}>
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            width={600}
            height={375}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

          {/* Year / Status Badge */}
          <div className="absolute top-5 left-5 flex items-center gap-2">
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md border ${
                index === 0 ? "bg-emerald-500/15 border-emerald-400/70 text-emerald-50" : "bg-background/40 border-white/20 text-white"
              }`}>
              <span className={`h-1.5 w-1.5 rounded-full animate-pulse ${index === 0 ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" : "bg-white"}`} />
              <span className="text-xs font-mono flex items-center gap-1">
                {project.year}
                {index === 0 && <span className="hidden sm:inline-block text-[0.65rem] uppercase tracking-widest opacity-90">Active</span>}
              </span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-7 flex flex-col flex-grow">
          <h3 className="font-display text-2xl font-bold tracking-tight">{project.title}</h3>

          {/* Description with Expandable functionality */}
          <div className="mt-3 relative">
            <p className={`text-muted-foreground leading-relaxed transition-all duration-300 ${isExpanded ? "" : "line-clamp-2"}`}>{project.description}</p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              aria-label={isExpanded ? `Show less about project ${project.title}` : `Read more about project ${project.title}`}
              className="mt-2 text-xs font-mono text-primary flex items-center gap-1 hover:underline focus:outline-none">
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
          <div className="mt-auto pt-4 flex flex-wrap gap-2 items-start min-h-[64px]">
            {visibleTags.map((t) => (
              <span key={t} className="px-3 py-1 text-xs rounded-full bg-background/60 border border-border/60 font-mono">
                {t}
              </span>
            ))}

            {hiddenTags.length > 0 && (
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="px-3 py-1 text-xs rounded-full bg-background/60 border border-dashed border-border/60 font-mono text-primary hover:bg-primary/10 transition-colors">
                    +{hiddenTags.length} more
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] sm:max-w-lg max-h-[75vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>All technologies used</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs rounded-full bg-background/60 border border-border/60 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            )}
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
    <SectionWrapper id="projects" className="bg-secondary/30 border-y border-border/60 overflow-hidden" containerClassName="px-0 md:px-8" aria-labelledby="projects-title">
      <div className="container">
        <div className="flex items-end justify-between mb-12">
          <SectionHeader id="projects-title" eyebrow="04 — Projects" />
          <div className="flex gap-2 mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className="rounded-full border-border/60 hover:border-primary/50"
              aria-label="Previous project">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className="rounded-full border-border/60 hover:border-primary/50"
              aria-label="Next project">
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
