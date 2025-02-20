import { SKILLS } from "@/data/skills";
import { TechnologyCards } from "./TechnologyCards";

export const SKILLS_SECTION_ID = "home-view-skills-section";

export default function SkillsSection() {
  return (
    <section id={SKILLS_SECTION_ID} className="home-view-section">
      <h2 className="text-2xl font-bold text-center">Skills</h2>
      <h3 className="text-center text-gray-500">
        Our technical diversity is our strength
      </h3>
      <div className="h-[1px] w-[90%] mx-auto bg-gray-200 md:w-1/2" />
      <TechnologyCards technologies={SKILLS} />
    </section>
  );
}
