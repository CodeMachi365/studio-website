import Link from "next/link";

export default function LinkButton(props: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { href, children, className = "" } = props;

  return (
    <Link
      href={href}
      type="button"
      className={[
        "w-fit inline-flex items-center gap-2 px-6 py-3 rounded-lg",
        "bg-primary hover:bg-primary-dark text-white transition-colors",
        "dark:bg-primary-dark dark:text-on-primary-dark dark:hover:bg-primary-light",
        className,
      ]
        .join(" ")
        .trim()}
    >
      {children}
    </Link>
  );
}
