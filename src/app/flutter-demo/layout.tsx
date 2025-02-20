import Script from "next/script";

export default function FlutterDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script src="flutter_bootstrap.js" defer />
      {children}
    </>
  );
}
