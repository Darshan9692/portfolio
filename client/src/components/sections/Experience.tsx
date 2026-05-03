import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { experiences } from "@/constants/portfolio-data";

export const Experience = () => (
  <SectionWrapper id="experience" className="bg-secondary/30 border-y border-border/60">
    <SectionHeader eyebrow="02 — Experience" />
    <div className="space-y-4">
      {experiences.map((exp, i) => (
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
          className="group relative grid md:grid-cols-12 gap-6 p-6 md:p-8 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm hover:border-primary/50 hover:bg-card/90 transition-all duration-500">
          <div className="md:col-span-3">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">{exp.period}</div>
            <div className="mt-1 text-sm text-muted-foreground">{exp.location}</div>
          </div>
          <div className="md:col-span-7">
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
              {exp.role}
              <span className="text-muted-foreground"> · </span>
              <span className="text-gradient">{exp.company}</span>
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{exp.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.stack.map((s) => (
                <span key={s} className="px-3 py-1 text-xs rounded-full bg-background/60 border border-border/60 font-mono">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 flex md:justify-end items-start">
            <a
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border/60 group-hover:bg-gradient-electric group-hover:border-transparent group-hover:rotate-45 transition-all duration-500"
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer">
              <ArrowUpRight className="h-5 w-5 group-hover:text-primary-foreground transition-colors" />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);
