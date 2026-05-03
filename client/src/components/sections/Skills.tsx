import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { skillsGroups } from "@/constants/portfolio-data";
import { getTechIcon } from "@/lib/tech-utils";
import { cn } from "@/lib/utils";
import { SkillGroup } from "@/types/portfolio";
import { motion } from "framer-motion";

interface ThemeConfig {
  color: string;
  bg: string;
  border: string;
  glow: string;
}

const categoryThemes: Record<string, ThemeConfig> = {
  "Core & Languages": {
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    glow: "group-hover:bg-blue-500/5",
  },
  Frontend: {
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    glow: "group-hover:bg-purple-500/5",
  },
  "Backend & APIs": {
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    glow: "group-hover:bg-emerald-500/5",
  },
  "Databases & Infrastructure": {
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    glow: "group-hover:bg-orange-500/5",
  },
  "Tools, Automation & AI": {
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    glow: "group-hover:bg-rose-500/5",
  },
};

const SkillTag = ({ name, theme }: { name: string; theme: ThemeConfig }) => {
  const { GenericIcon, slug } = getTechIcon(name);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "flex items-center gap-2.5 px-4 py-2.5 rounded-2xl",
        "bg-secondary/50 border border-border/40",
        "hover:bg-background/80 hover:border-primary/30",
        "transition-all group/item cursor-default hover:shadow-lg hover:shadow-black/10",
      )}>
      <div className="flex-none w-4 h-4 flex items-center justify-center opacity-70 group-hover/item:opacity-100 transition-opacity">
        {GenericIcon ? (
          <GenericIcon className={cn("w-4 h-4", theme.color)} />
        ) : (
          <img
            src={`https://cdn.simpleicons.org/${slug}`}
            alt={`${name} icon`}
            className="w-full h-full object-contain filter brightness-125"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${theme.color}"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
              }
            }}
          />
        )}
      </div>
      <span className="text-xs font-mono font-medium text-foreground/80 group-hover/item:text-foreground transition-colors">{name}</span>
    </motion.div>
  );
};

const SkillCard = ({ group, index }: { group: SkillGroup; index: number }) => {
  const CategoryIcon = group.icon;
  const theme = categoryThemes[group.title] || {
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    glow: "group-hover:bg-primary/5",
  };

  const isWide = group.title === "Backend & APIs" || group.title === "Tools, Automation & AI";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative p-8 rounded-[2.5rem] border border-border/40",
        "bg-card/20 backdrop-blur-xl transition-all duration-500",
        "flex flex-col hover:border-border/60 shadow-2xl shadow-black/5",
        isWide ? "md:col-span-2 lg:col-span-2" : "md:col-span-1 lg:col-span-1",
      )}>
      <div className={cn("absolute inset-0 rounded-[2.5rem] transition-colors duration-500", theme.glow)} />

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl border transition-transform duration-500 group-hover:scale-110", theme.bg, theme.border)}>
            <CategoryIcon className={cn("h-6 w-6", theme.color)} strokeWidth={1.5} />
          </div>
          <h3 className="font-display text-xl font-bold tracking-tight text-foreground">{group.title}</h3>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {group.items.map((item) => (
            <SkillTag key={item} name={item} theme={theme} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Skills = () => (
  <SectionWrapper id="skills" aria-labelledby="skills-title">
    <SectionHeader eyebrow="02 — Skills" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillsGroups.map((group, i) => (
        <SkillCard key={group.title} group={group} index={i} />
      ))}
    </div>
  </SectionWrapper>
);
