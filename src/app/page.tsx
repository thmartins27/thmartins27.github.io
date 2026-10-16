import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { ExperienceSection } from "./components/experience-section";
import { HeroSection } from "./components/hero-section";
import { MotionController } from "./components/motion-controller";
import { ProjectsSection } from "./components/projects-section";

export default function Page() {
  return (
    <main id="conteudo">
      <MotionController />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
