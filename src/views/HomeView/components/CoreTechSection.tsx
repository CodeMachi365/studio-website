import { CORE_TECHS } from "@/data/coreTechs";
import { TechnologyCards } from "./TechnologyCards";

export const CORE_TECH_SECTION_ID = "home-view-core-tech-section";

export default function CoreTechSection() {
  return (
    <section id={CORE_TECH_SECTION_ID} className="home-view-section">
      <h2 className="text-2xl font-bold text-center">Core Technology</h2>
      <div className="h-[1px] w-[90%] mx-auto bg-gray-200 md:w-1/2" />
      <TechnologyCards technologies={CORE_TECHS} />
    </section>
  );
}
