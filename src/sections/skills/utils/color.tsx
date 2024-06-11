export enum Color {
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "NextJS",
  "NodeJS",
  "Express",
  "Astro",
  "Angular",
  "Pug",
  "Material UI",
  "Styled Components",
  "Sass",
  "Emotion",
  "TailwindCSS",
  "Bootstrap",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Sequelize",
  "Redux",
  "Git",
  "GitHub",
  "Figma",
  "Vite",
}

export interface ITechMap {
  name: keyof typeof Color;
  bg: string;
  border: string;
}

const techMap: ITechMap[] = [
  { name: "HTML", bg: "bg-[#fa470a]", border: "hover:border-[#fa470a]" },
  { name: "CSS", bg: "bg-[#0a84fa]", border: "hover:border-[#0a84fa]" },
  { name: "JavaScript", bg: "bg-[#f7df1e]", border: "hover:border-[#f7df1e]" },
  { name: "React", bg: "bg-[#61dbfb]", border: "hover:border-[#61dbfb]" },
  { name: "TypeScript", bg: "bg-[#3078c6]", border: "hover:border-[#3078c6]" },
  { name: "NextJS", bg: "bg-[#ffffffd5]", border: "hover:border-[#ffffffd5]" },
  { name: "NodeJS", bg: "bg-[#8cc84b]", border: "hover:border-[#8cc84b]" },
  {
    name: "Express",
    bg: "bg-[#ffffffd5]",
    border: "hover:border-[#ffffffd5]",
  },
  { name: "Astro", bg: "bg-[#ffa571]", border: "hover:border-[#ffa571]" },
  { name: "Angular", bg: "bg-[#dd0031]", border: "hover:border-[#dd0031]" },
  { name: "Pug", bg: "bg-[#a86454]", border: "hover:border-[#a86454]" },
  { name: "Material UI", bg: "bg-[#0081cb]", border: "hover:border-[#0081cb]" },
  {
    name: "Styled Components",
    bg: "bg-[#fbade7]",
    border: "hover:border-[#fbade7]",
  },
  { name: "Sass", bg: "bg-[#c86697]", border: "hover:border-[#c86697]" },
  { name: "Emotion", bg: "bg-[#d06cbe]", border: "hover:border-[#d06cbe]" },
  { name: "TailwindCSS", bg: "bg-[#06b6d4]", border: "hover:border-[#06b6d4]" },
  { name: "Bootstrap", bg: "bg-[#7952b3]", border: "hover:border-[#7952b3]" },
  { name: "MySQL", bg: "bg-[#4479a1]", border: "hover:border-[#4479a1]" },
  { name: "MongoDB", bg: "bg-[#4db33d]", border: "hover:border-[#4db33d]" },
  { name: "PostgreSQL", bg: "bg-[#4f9cdc]", border: "hover:border-[#4f9cdc]" },
  { name: "Prisma", bg: "bg-[#4eb5ad]", border: "hover:border-[#4eb5ad]" },
  { name: "Sequelize", bg: "bg-[#399af3]", border: "hover:border-[#399af3]" },
  { name: "Redux", bg: "bg-[#764abc]", border: "hover:border-[#764abc]" },
  { name: "Git", bg: "bg-[#f34f29]", border: "hover:border-[#f34f29]" },
  { name: "GitHub", bg: "bg-[#fff]", border: "hover:border-[#fff]" },
  { name: "Figma", bg: "bg-[#ffa571]", border: "hover:border-[#ffa571]" },
  { name: "Vite", bg: "bg-[#646c72]", border: "hover:border-[#646c72]" },
];

export const color = (color: keyof typeof Color) =>
  techMap.find((tech) => tech.name === color) as ITechMap;
