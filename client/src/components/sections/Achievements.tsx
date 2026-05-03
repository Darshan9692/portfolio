import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { achievements } from "@/constants/portfolio-data";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const Achievements = () => (
  <SectionWrapper id="achievements">
    <SectionHeader eyebrow="05 — Achievements" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {achievements.map((achievement, i) => {
        const Icon = achievement.icon || null;
        return (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative p-8 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 flex flex-col h-full">
            <div className="flex flex-col h-full w-full">
              {/* Header with Icon, Date and Dialog Trigger */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-electric shadow-electric shrink-0">
                    {Icon && <Icon className="h-6 w-6 text-primary-foreground" />}
                  </div>
                  <span className="text-xs font-mono text-primary font-bold uppercase tracking-widest">{achievement.date}</span>
                </div>

                {achievement.image && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full h-10 w-10 border border-border/40 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0 overflow-hidden border-none bg-transparent">
                      <DialogHeader className="sr-only">
                        <DialogTitle>{achievement.title}</DialogTitle>
                      </DialogHeader>
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-secondary">
                        <img src={achievement.image} alt={achievement.title} className="h-full w-full object-contain" />
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>

              {/* Title Section */}
              <div className="min-h-[3.5rem]">
                <h3 className="text-xl font-display font-bold tracking-tight leading-snug group-hover:text-primary transition-colors">{achievement.title}</h3>
              </div>

              {/* Description Section */}
              <p className="text-sm text-muted-foreground leading-normal flex-1">{achievement.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </SectionWrapper>
);
