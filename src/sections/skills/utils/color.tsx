export enum Color {
  "HTML" = "bg-[#fa470a]", // ✔
  "CSS" = "bg-[#0a84fa]", // ✔
  "JavaScript" = "bg-[#f7df1e]", // ✔
  "React" = "bg-[#61dbfb]", // ✔
  "TypeScript" = "bg-[#3078c6]", // ✔
  "NextJS" = "bg-[#ffffffd5]", // ✔
  "NodeJS" = "bg-[#8cc84b]", // ✔
  "ExpressJS" = "bg-[#ffffffd5]", // ✔
  "Astro" = "bg-[#ffa571]", // ✔
  "Angular" = "bg-[#dd0031]",
  "Pug" = "bg-[#a86454]", // ✔
  "MaterialUI" = "bg-[#0081cb]", // ✔
  "StyledComponents" = "bg-[#fbade7]",
  "Sass" = "bg-[#c86697]", // ✔
  "Emotion" = "bg-[#d06cbe]", // ✔
  "TailwindCSS" = "bg-[#06b6d4]", // ✔
  "Bootstrap" = "bg-[#7952b3]",
  "MySQL" = "bg-[#4479a1]", // ✔
  "MongoDB" = "bg-[#4db33d]",
  "PostgreSQL" = "bg-[#4f9cdc]", // ✔
  "Prisma" = "bg-[#4eb5ad]", // ✔
  "Sequelize" = "bg-[#399af3]", // ✔
  "Redux" = "bg-[#764abc]",
  "Git" = "bg-[#f34f29]", // ✔
  "GitHub" = "bg-[#fff]", // ✔
  "Figma" = "bg-[#ffa571]", // ✔
  "Vite" = "bg-[#646c72]",
}

export const color = (color: keyof typeof Color) => {
  return Color[color];
};
