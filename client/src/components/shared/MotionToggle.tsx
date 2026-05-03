import { Accessibility } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMotionPreference } from "@/hooks/use-motion-preference";

export const MotionToggle = () => {
  const { reduced, toggle } = useMotionPreference();
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-pressed={reduced}
      aria-label={reduced ? "Enable animations" : "Reduce animations"}
      title={reduced ? "Enable animations" : "Reduce animations"}
      className="rounded-full border border-border/60 hover:border-primary/60 relative">
      <Accessibility className="h-4 w-4" />
      {reduced && <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />}
    </Button>
  );
};
