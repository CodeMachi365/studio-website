import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function HomePageButton(props: {
  className?: string;
}) {
  const { className } = props;

  return (
    <Link href="/" className={className}>
      <FaHome size={24} />
    </Link>
  );
}
