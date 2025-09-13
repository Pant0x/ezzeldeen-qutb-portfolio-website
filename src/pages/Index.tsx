import { PixelNavbar } from "@/components/PixelNavbar";
import { MobileSidebar } from "@/components/MobileSidebar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { WorkExperienceSection } from "@/components/portfolio/WorkExperienceSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { GetInTouchSection } from "@/components/portfolio/GetInTouchSection";
import { Reveal } from "@/components/Reveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PixelNavbar />
      <MobileSidebar />
      <main className="space-y-6">
        <HeroSection />
        <Reveal><AboutSection /></Reveal>
        <Reveal delay={0.05}><WorkExperienceSection /></Reveal>
        <Reveal delay={0.1}><SkillsSection /></Reveal>
        <Reveal delay={0.15}><ServicesSection /></Reveal>
        <Reveal delay={0.2}><ProjectsSection /></Reveal>
  <Reveal delay={0.25}><ContactSection /></Reveal>
  <Reveal delay={0.3}><GetInTouchSection /></Reveal>
      </main>
    </div>
  );
};

export default Index;
