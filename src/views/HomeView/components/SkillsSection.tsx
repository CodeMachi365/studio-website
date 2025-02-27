import { SKILLS } from "@/data/skills";
import TitleWithDivider from "@/components/ui/TitleWithDivider";

import { TechnologyCards } from "./TechnologyCards";

export const SKILLS_SECTION_ID = "home-view-skills-section";

export default function SkillsSection() {
  return (
    <section id={SKILLS_SECTION_ID} className="home-view-section">
      <TitleWithDivider
        title="Skills"
        subtitle="Our technical diversity is our strength"
      />
      <TechnologyCards technologies={SKILLS} />
    </section>
  );
}
