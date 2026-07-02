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
  angularImage,
  hibernateImage,
  jiraImage,
  springBootImage,
  viteImage,
} from "../assets/index";
import { Color } from "../utils/color";

export type SkillCategory =
  | "Frontend"
  | "Estilos"
  | "Backend y bases de datos"
  | "Herramientas";

export interface Skill {
  title: keyof typeof Color;
  image: StaticImageData;
  alt: string;
  category: SkillCategory;
}

export const categories: SkillCategory[] = [
  "Frontend",
  "Estilos",
  "Backend y bases de datos",
  "Herramientas",
];

export const skills: Skill[] = [
  { title: "HTML", image: htmlImage, alt: "HTML", category: "Frontend" },
  {
    title: "JavaScript",
    image: jsImage,
    alt: "JavaScript",
    category: "Frontend",
  },
  {
    title: "TypeScript",
    image: tsImage,
    alt: "TypeScript",
    category: "Frontend",
  },
  { title: "React", image: reactImage, alt: "React", category: "Frontend" },
  { title: "NextJS", image: nextImage, alt: "NextJS", category: "Frontend" },
  {
    title: "Angular",
    image: angularImage,
    alt: "Angular",
    category: "Frontend",
  },
  { title: "Astro", image: astroImage, alt: "Astro", category: "Frontend" },
  { title: "Pug", image: pugImage, alt: "Pug", category: "Frontend" },
  { title: "CSS", image: cssImage, alt: "CSS", category: "Estilos" },
  {
    title: "TailwindCSS",
    image: tailwindImage,
    alt: "TailwindCSS",
    category: "Estilos",
  },
  { title: "Sass", image: sassImage, alt: "Sass", category: "Estilos" },
  {
    title: "Material UI",
    image: materialImage,
    alt: "Material UI",
    category: "Estilos",
  },
  {
    title: "Styled Components",
    image: styledImage,
    alt: "Styled Components",
    category: "Estilos",
  },
  {
    title: "Emotion",
    image: emotionImage,
    alt: "Emotion",
    category: "Estilos",
  },
  {
    title: "NodeJS",
    image: nodeImage,
    alt: "NodeJS",
    category: "Backend y bases de datos",
  },
  {
    title: "Express",
    image: expressImage,
    alt: "Express",
    category: "Backend y bases de datos",
  },
  {
    title: "Spring Boot",
    image: springBootImage,
    alt: "Spring Boot",
    category: "Backend y bases de datos",
  },
  {
    title: "Hibernate",
    image: hibernateImage,
    alt: "Hibernate",
    category: "Backend y bases de datos",
  },
  {
    title: "MySQL",
    image: mysqlImage,
    alt: "MySQL",
    category: "Backend y bases de datos",
  },
  {
    title: "PostgreSQL",
    image: postgresqlImage,
    alt: "PostgreSQL",
    category: "Backend y bases de datos",
  },
  {
    title: "Prisma",
    image: prismaImage,
    alt: "Prisma",
    category: "Backend y bases de datos",
  },
  {
    title: "Sequelize",
    image: sequelizeImage,
    alt: "Sequelize",
    category: "Backend y bases de datos",
  },
  { title: "Git", image: gitImage, alt: "Git", category: "Herramientas" },
  { title: "Vite", image: viteImage, alt: "Vite", category: "Herramientas" },
  { title: "JIRA", image: jiraImage, alt: "JIRA", category: "Herramientas" },
  {
    title: "GitHub",
    image: githubImage,
    alt: "GitHub",
    category: "Herramientas",
  },
  { title: "Figma", image: figmaImage, alt: "Figma", category: "Herramientas" },
];
