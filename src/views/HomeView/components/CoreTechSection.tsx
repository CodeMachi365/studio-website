import { CORE_TECHS } from "@/data/coreTechs";
import TitleWithDivider from "@/components/ui/TitleWithDivider";

import { TechnologyCards } from "./TechnologyCards";

export const CORE_TECH_SECTION_ID = "home-view-core-tech-section";

export default function CoreTechSection() {
  return (
    <section id={CORE_TECH_SECTION_ID} className="home-view-section">
      <TitleWithDivider title="Core Technology" />
      <TechnologyCards technologies={CORE_TECHS} />
    </section>
  );
}
