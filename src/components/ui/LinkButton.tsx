import Link from "next/link";

export default function LinkButton(props: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { href, children, className = "" } = props;

  return (
    <Link href={href} type="button" className={`btn w-fit ${className}`.trim()}>
      {children}
    </Link>
  );
}
