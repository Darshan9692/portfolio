import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
}

export const SectionHeader = ({ eyebrow }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
    className="mb-10 max-w-3xl">
    <div className="inline-flex items-center gap-2">
      <span className="h-px w-8 bg-primary" />
      <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-primary">{eyebrow}</h2>
    </div>
  </motion.div>
);
