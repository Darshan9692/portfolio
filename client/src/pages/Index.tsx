import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/shared/Marquee";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { MotionPreferenceProvider } from "@/components/shared/MotionPreference";

const Index = () => (
  <MotionPreferenceProvider>
    <a href="#main" className="skip-link">
      Skip to main content
    </a>
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Marquee />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  </MotionPreferenceProvider>
);

export default Index;
