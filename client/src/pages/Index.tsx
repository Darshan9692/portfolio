import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Marquee } from "@/components/shared/Marquee";
import { MotionPreferenceProvider } from "@/components/shared/MotionPreference";

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
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  </MotionPreferenceProvider>
);

export default Index;
