import { createContext, useContext } from "react";

type Ctx = {
  reduced: boolean;
  toggle: () => void;
};

export const MotionPrefContext = createContext<Ctx | null>(null);

export const useMotionPreference = () => {
  const ctx = useContext(MotionPrefContext);
  if (!ctx) {
    throw new Error("useMotionPreference must be used within MotionPreferenceProvider");
  }
  return ctx;
};
