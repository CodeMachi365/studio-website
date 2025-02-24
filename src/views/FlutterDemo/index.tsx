import ViewWrapper from "@/components/layout/ViewWrapper";

export default function FlutterDemoView() {
  return (
    <ViewWrapper id="flutter-demo">
      <IntroSection />
      <IframeSection />
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
