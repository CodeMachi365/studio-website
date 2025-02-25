import { STUDIO_NAME, STUDIO_SLOGAN } from "@/constants/config";
import SOCIAL_LINKS from "@/data/socialLinks";
import { CONTACT_SECTION_ID } from "./ContactSection";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

export const HERO_SECTION_ID = "home-view-hero-section";

export default function HeroSection() {
  return (
    <section id={HERO_SECTION_ID} className="home-view-section">
      <HeroSectionGridContainer>
        <SocialLinks />
        <HeroSectionLogo />
        <HeroSectionContent />
      </HeroSectionGridContainer>
    </section>
  );
}

function HeroSectionGridContainer(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <div
      className={[
        // Mobile
        "grid gap-6 grid-cols-[0.5fr_3fr]",
        // Desktop
        "md:grid-cols-[100px_repeat(2,_1fr)] md:gap-x-5",
      ]
        .join(" ")
        .trim()}
    >
      {children}
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="grid grid-cols-[max-content]">
      <div className="flex flex-col gap-6">
        {SOCIAL_LINKS.map((link) => (
          <SocialLink key={link.href} {...link} />
        ))}
      </div>
    </div>
  );
}

function SocialLink({ href, icon: Icon }: (typeof SOCIAL_LINKS)[number]) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon size={20} />
    </a>
  );
}

function HeroSectionContent() {
  return (
    <div className="col-[1/3] md:col-[unset]">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          {STUDIO_NAME}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600">{STUDIO_SLOGAN}</p>
        <HeroSectionAction />
      </div>
    </div>
  );
}

function HeroSectionLogo() {
  return (
    <div
      className={[
        // base
        "w-[200px] h-[200px] rounded-full overflow-hidden",
        // desktop
        "md:order-last",
      ]
        .join(" ")
        .trim()}
    >
      <ResponsiveImage
        src="/images/company_logo.jpg"
        alt="Company Logo"
        aspectRatio="aspect-square"
      />
    </div>
  );
}

function HeroSectionAction() {
  return (
    <a
      href={`#${CONTACT_SECTION_ID}`}
      type="button"
      className="w-fit inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 
                             text-white rounded-lg transition-colors"
    >
      See for yourself
    </a>
  );
}
