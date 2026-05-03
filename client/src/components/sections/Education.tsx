import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { education } from "@/constants/portfolio-data";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export const Education = () => (
  <SectionWrapper id="education" aria-labelledby="education-title">
    <SectionHeader id="education-title" eyebrow="06 — Education" />
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

      <div className="space-y-12">
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="relative grid md:grid-cols-2 gap-6 md:gap-12 items-start">
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 top-3 h-3 w-3 rounded-full bg-primary ring-4 ring-background -translate-x-1/2 shadow-glow z-10" />

            {/* Left Column: Degree & Year (Always on the left on Desktop) */}
            <div className="pl-12 md:pl-0 md:pr-12 md:text-right">
              <span className="font-mono text-xs uppercase tracking-widest text-primary">{e.year}</span>
              <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold tracking-tight">{e.degree}</h3>
            </div>

            {/* Right Column: School & Grade Card (Always on the right on Desktop) */}
            <div className="pl-12 md:pl-12">
              <div className="group relative p-6 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-electric shrink-0">
                    <GraduationCap className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="ml-auto px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20">{e.grade}</span>
                </div>
                <p className="text-sm text-muted-foreground font-bold leading-relaxed">{e.school}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);
