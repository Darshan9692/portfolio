import { MotionPrefContext } from "@/hooks/use-motion-preference";
import { MotionConfig, useReducedMotion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

export const MotionPreferenceProvider = ({ children }: { children: ReactNode }) => {
  const systemReduced = useReducedMotion();
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("reduced-motion");
    if (saved !== null) setReduced(saved === "true");
    else if (systemReduced) setReduced(true);
  }, [systemReduced]);

  const toggle = () => {
    setReduced((r) => {
      const next = !r;
      localStorage.setItem("reduced-motion", String(next));
      return next;
    });
  };

  return (
    <MotionPrefContext.Provider value={{ reduced, toggle }}>
      <MotionConfig reducedMotion={reduced ? "always" : "never"}>{children}</MotionConfig>
    </MotionPrefContext.Provider>
  );
};
