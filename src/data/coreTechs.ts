import {
  RiFlutterFill,
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
} from "react-icons/ri";
import type { Technology } from "@/types/shared";

export const CORE_TECHS: Technology[] = [
  {
    name: "ReactJS",
    Icon: RiReactjsFill,
  },
  {
    name: "Next.js",
    Icon: RiNextjsFill,
  },
  {
    name: "Flutter",
    Icon: RiFlutterFill,
  },
  {
    name: "Node.js",
    Icon: RiNodejsFill,
  },
];
