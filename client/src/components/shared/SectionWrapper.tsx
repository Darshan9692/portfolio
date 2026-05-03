import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export const SectionWrapper = ({ children, id, className, containerClassName }: SectionWrapperProps) => {
  return (
    <section id={id} className={cn("relative py-24 md:py-32 overflow-hidden", className)}>
      <div className={cn("container relative z-10", containerClassName)}>{children}</div>
    </section>
  );
};
