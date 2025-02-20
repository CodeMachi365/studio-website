import { FaCloudflare, FaDartLang, FaDocker, FaHtml5 } from "react-icons/fa6";
import { ImGit } from "react-icons/im";
import {
  RiCss3Fill,
  RiFlutterFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiGraphql, SiJest, SiRedux, SiTypescript } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import type { Technology } from "@/types/shared";
import { DiGoogleCloudPlatform } from "react-icons/di";

export const SKILLS: Technology[] = [
  {
    name: "Flutter",
    Icon: RiFlutterFill,
  },
  {
    name: "Dart",
    Icon: FaDartLang,
  },
  {
    name: "ReactJS",
    Icon: RiReactjsFill,
  },
  {
    name: "JavaScript",
    Icon: RiJavascriptFill,
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
  },
  {
    name: "NextJS",
    Icon: RiNextjsFill,
  },
  {
    name: "TailwindCSS",
    Icon: RiTailwindCssFill,
  },
  {
    name: "CSS",
    Icon: RiCss3Fill,
  },
  {
    name: "HTML",
    Icon: FaHtml5,
  },
  {
    name: "Redux",
    Icon: SiRedux,
  },
  {
    name: "NodeJS",
    Icon: RiNodejsFill,
  },
  {
    name: "GraphQL",
    Icon: SiGraphql,
  },
  {
    name: "SQL",
    Icon: TbSql,
  },
  {
    name: "Git",
    Icon: ImGit,
  },
  {
    name: "Jest",
    Icon: SiJest,
  },

  {
    name: "Docker",
    Icon: FaDocker,
  },
  {
    name: "GCP",
    Icon: DiGoogleCloudPlatform,
  },
  {
    name: "Cloudflare",
    Icon: FaCloudflare,
  },
];
