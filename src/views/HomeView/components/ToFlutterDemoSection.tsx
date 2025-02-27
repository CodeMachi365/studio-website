import { flutterDemoRoute } from "@/app/flutter-demo/page";
import LinkButton from "@/components/ui/LinkButton";

export const TO_FLUTTER_DEMO_SECTION_ID = "home-view-to-flutter-demo-section";

export default function ToFlutterDemoSection() {
  return (
    <section id={TO_FLUTTER_DEMO_SECTION_ID} className="home-view-section">
      <h2 className="text-2xl font-bold mb-4">
        Experience Flutter&apos;s Cross-Platform Magic
      </h2>
      <p className="mb-6">
        Flutter lets you build native apps for multiple platforms from one
        codebase. Check out our demo to see Flutter in action.
      </p>
      <div className="flex justify-center">
        <LinkButton href={flutterDemoRoute}>Go to Flutter Demo</LinkButton>
      </div>
    </section>
  );
}
