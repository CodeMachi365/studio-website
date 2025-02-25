import ViewWrapper from "@/components/layout/ViewWrapper";
import HomePageButton from "@/components/ui/HomePageButton";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function FlutterDemoView() {
  return (
    <ViewWrapper id="flutter-demo" className="relative">
      <HomePageButton className="absolute top-[-2.5rem] left-5" />
      <IntroSection />
      <IframeSection />
      <ReferenceLink />
    </ViewWrapper>
  );
}

function IntroSection() {
  return (
    <section className="mb-12">
      <h1 className="text-4xl font-bold text-center mb-4">Flutter Demo</h1>
      <p className="text-lg text-center text-gray-700 mb-12">
        Discover how Flutter is revolutionizing the industry by enabling
        developers to build natively compiled applications for mobile, web, and
        desktop from a single codebase. Experience the power of Flutter&apos;s
        expressive and flexible UI, and see how it can transform your
        development process.
      </p>
      <p className="text-lg text-center text-gray-700">
        <strong>One code base for all platforms.</strong> See for yourself how
        Flutter can be used to build a web app.
      </p>
    </section>
  );
}

function IframeSection() {
  const mdInnerScreenSize = "md:w-[375px] md:h-[700px]";
  const smInnerScreenSize = "w-[325px] h-[625px]";

  return (
    <section className="flex justify-center mb-12">
      <div
        className={`${smInnerScreenSize} ${mdInnerScreenSize} rounded-[2rem] overflow-hidden bg-white dark:bg-gray-800`}
      >
        <iframe
          src="https://weather-app-six-pi-16.vercel.app"
          title="Flutter Web App"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}

function ReferenceLink() {
  return (
    <div className="flex flex-col items-center justify-center my-10 gap-2">
      <div className="group relative">
        <Link href="https://github.com/code-tiger/weather_app" target="_blank">
          <FaGithub className="w-8 h-8" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Source Code
          </span>
        </Link>
      </div>
    </div>
  );
}
