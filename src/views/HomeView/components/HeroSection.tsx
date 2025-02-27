import { flutterDemoRoute } from "@/app/flutter-demo/page";
import { STUDIO_NAME, STUDIO_SLOGAN } from "@/constants/config";
import SOCIAL_LINKS from "@/data/socialLinks";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import LinkButton from "@/components/ui/LinkButton";

import Link from "next/link";

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
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Icon size={20} />
    </Link>
  );
}

function HeroSectionContent() {
  return (
    <div className="col-[1/3] md:col-[unset]">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          {STUDIO_NAME}
        </h1>
        <p className="text-xl md:text-2xl">{STUDIO_SLOGAN}</p>
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
        src="/images/company_logo.png"
        alt="Company Logo"
        aspectRatio="aspect-square"
      />
    </div>
  );
}

function HeroSectionAction() {
  return <LinkButton href={flutterDemoRoute}>See for yourself</LinkButton>;
}
