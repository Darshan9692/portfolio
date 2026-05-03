import { Suspense, lazy } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/shared/Marquee";
import { MotionPreferenceProvider } from "@/components/shared/MotionPreference";

// Lazy load non-critical sections
const Education = lazy(() => import("@/components/sections/Education").then((m) => ({ default: m.Education })));
const Skills = lazy(() => import("@/components/sections/Skills").then((m) => ({ default: m.Skills })));
const Experience = lazy(() => import("@/components/sections/Experience").then((m) => ({ default: m.Experience })));
const Projects = lazy(() => import("@/components/sections/Projects").then((m) => ({ default: m.Projects })));
const Achievements = lazy(() => import("@/components/sections/Achievements").then((m) => ({ default: m.Achievements })));
const Contact = lazy(() => import("@/components/sections/Contact").then((m) => ({ default: m.Contact })));

const Index = () => (
  <MotionPreferenceProvider>
    <a href="#main" className="skip-link">
      Skip to main content
    </a>
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <Navbar />
      <main id="main" tabIndex={-1} className="overflow-x-hidden">
        <Hero />
        <Marquee />
        <Suspense fallback={<div className="h-20" />}>
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  </MotionPreferenceProvider>
);

export default Index;
