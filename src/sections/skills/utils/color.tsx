export enum Color {
  "HTML" = "bg-[#fa470a]",
  "CSS" = "bg-[#0a84fa]",
  "JavaScript" = "bg-[#f7df1e]",
  "React" = "bg-[#61dbfb]",
  "TypeScript" = "bg-[#3178c6]",
  "NextJS" = "bg-[#000000]",
  "NodeJS" = "bg-[#8cc84b]",
  "ExpressJS" = "bg-[#ffffffd5]",
  "Astro" = "bg-[#000000]",
  "Angular" = "bg-[#dd0031]",
  "Pug" = "bg-[#a86454]",
  "MaterialUI" = "bg-[#0081cb]",
  "StayledComponents" = "bg-[#db7093]",
  "Sass" = "bg-[#c69]",
  "Emotion" = "bg-[#db7093]",
  "TailwindCSS" = "bg-[#06b6d4]",
  "Bootstrap" = "bg-[#7952b3]",
  "MySQL" = "bg-[#4479a1]",
  "MongoDB" = "bg-[#4db33d]",
  "PostgreSQL" = "bg-[#336791]",
  "Prisma" = "bg-[#2d3748]",
  "Sequelize" = "bg-[#399af3]",
  "Redux" = "bg-[#764abc]",
  "Git" = "bg-[#f34f29]",
  "GitHub" = "bg-[#181717]",
  "Figma" = "bg-[#f24e1e]",
  "Vite" = "bg-[#646c72]",
}

export const color = (color: keyof typeof Color) => {
  return Color[color];
};
