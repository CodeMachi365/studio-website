import ScrollUpBtn from "@/components/layout/ScrollUpBtn";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import TechStackSection from "./components/CoreTechSection";

export default function HomeView() {
  return (
    <div id="home-view" className={`container w-[90%] mx-auto mt-[3.5rem]`}>
      <HeroSection />
      <TechStackSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <Spacer />
      <ScrollUpBtn />
    </div>
  );
}

function Spacer() {
  return <div className="h-[100px] w-full" />;
}
