import ScrollUpBtn from "@/components/layout/ScrollUpBtn";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import TechStackSection from "./components/CoreTechSection";
import ViewWrapper from "@/components/layout/ViewWrapper";
import ToFlutterDemoSection from "./components/ToFlutterDemoSection";

export default function HomeView() {
  return (
    <ViewWrapper id="home-view">
      <HeroSection />
      <TechStackSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ToFlutterDemoSection />
      <ContactSection />
      <Spacer />
      <ScrollUpBtn />
    </ViewWrapper>
  );
}

function Spacer() {
  return <div className="h-[100px] w-full" />;
}
