import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationCertificationsSection from "@/components/EducationCertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SkillsSection />
        <ProjectsSection />
        <ArchitectureSection />
        <ExperienceSection />
        <EducationCertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
