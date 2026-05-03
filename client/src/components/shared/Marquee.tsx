import { marqueeItems } from "@/constants/portfolio-data";

export const Marquee = () => {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <section className="relative py-10 border-y border-border/60 bg-secondary/30 overflow-hidden">
      <div className="flex marquee whitespace-nowrap">
        {row.map((item, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            <span className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground/80">{item}</span>
            <span className="text-primary text-2xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
};
