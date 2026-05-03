import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants/portfolio-data";

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
          <SectionHeader eyebrow="01 — Projects" />
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
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="embla__slide flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_35%] min-w-0">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block rounded-3xl overflow-hidden border border-border/60 bg-card/60 backdrop-blur-sm hover-lift hover:border-primary/50 h-full">
                  <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                    <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                    <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/40 backdrop-blur-md border border-white/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                      <span className="text-xs text-white font-mono">{p.year}</span>
                    </div>
                    <div className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-background/40 backdrop-blur-md border border-white/20 group-hover:bg-background group-hover:rotate-45 transition-all duration-500">
                      <ArrowUpRight className="h-5 w-5 text-white group-hover:text-primary" />
                    </div>
                  </div>
                  <div className="p-7">
                    <span className="text-xs font-mono uppercase tracking-widest text-primary">{p.category}</span>
                    <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">{p.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed line-clamp-2">{p.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="px-3 py-1 text-xs rounded-full bg-background/60 border border-border/60 font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
