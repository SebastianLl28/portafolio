import { StaticImageData } from "next/image";
import {
  cssImage,
  htmlImage,
  jsImage,
  reactImage,
  tsImage,
  nodeImage,
  tailwindImage,
  figmaImage,
} from "../assets/index";
import { Color } from "../utils/color";

interface Skill {
  title: keyof typeof Color;
  image: StaticImageData;
  alt: string;
}

export const skills: Skill[] = [
  {
    title: "HTML",
    image: htmlImage,
    alt: "HTML icon",
  },
  {
    title: "CSS",
    image: cssImage,
    alt: "CSS icon",
  },
  {
    title: "JavaScript",
    image: jsImage,
    alt: "JavaScript icon",
  },
  {
    title: "TypeScript",
    image: tsImage,
    alt: "TypeScript icon",
  },
  {
    title: "React",
    image: reactImage,
    alt: "React icon",
  },
  {
    title: "NodeJS",
    image: nodeImage,
    alt: "NodeJS icon",
  },
  {
    title: "TailwindCSS",
    image: tailwindImage,
    alt: "ExpressJS icon",
  },
  {
    title: "Figma",
    image: figmaImage,
    alt: "Figma icon",
  },
];
