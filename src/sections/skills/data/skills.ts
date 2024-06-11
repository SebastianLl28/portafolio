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
  prismaImage,
  materialImage,
  sassImage,
  emotionImage,
  pugImage,
  mysqlImage,
  postgresqlImage,
  sequelizeImage,
  expressImage,
  nextImage,
  astroImage,
  styledImage,
  gitImage,
  githubImage,
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
  {
    title: "Prisma",
    image: prismaImage,
    alt: "Prisma icon",
  },
  {
    title: "Material UI",
    image: materialImage,
    alt: "MaterialUI icon",
  },
  {
    title: "Sass",
    image: sassImage,
    alt: "Sass icon",
  },
  {
    title: "Emotion",
    image: emotionImage,
    alt: "Emotion icon",
  },
  {
    title: "Pug",
    image: pugImage,
    alt: "Pug icon",
  },
  {
    title: "MySQL",
    image: mysqlImage,
    alt: "MySQL icon",
  },
  {
    title: "PostgreSQL",
    image: postgresqlImage,
    alt: "PostgreSQL icon",
  },
  {
    title: "Sequelize",
    image: sequelizeImage,
    alt: "Sequelize icon",
  },
  {
    title: "Express",
    image: expressImage,
    alt: "ExpressJS icon",
  },
  {
    title: "NextJS",
    image: nextImage,
    alt: "NextJS icon",
  },
  {
    title: "Astro",
    image: astroImage,
    alt: "Astro icon",
  },
  {
    title: "Styled Components",
    image: styledImage,
    alt: "StayledComponents icon",
  },
  {
    title: "Git",
    image: gitImage,
    alt: "Git icon",
  },
  {
    title: "GitHub",
    image: githubImage,
    alt: "GitHub icon",
  },
];
