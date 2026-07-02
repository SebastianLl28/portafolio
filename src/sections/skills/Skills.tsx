import Reveal from "@/components/motion/Reveal";
import Card from "./components/Card";
import { categories, skills } from "./data/skills";

export default function Skills() {
  return (
    <section
      id="tecnologias"
      className="mx-auto w-11/12 max-w-5xl scroll-mt-24 py-16 md:py-24"
    >
      <Reveal>
        <p className="eyebrow">Con qué trabajo</p>
        <h2 className="section-title mt-2">Tecnologías</h2>
      </Reveal>
      <div className="mt-10 space-y-10 md:mt-14">
        {categories.map((category, index) => (
          <Reveal key={category} delay={index * 0.05}>
            <h3 className="font-mono text-sm uppercase tracking-wider text-muted">
              {category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <Card
                    key={skill.title}
                    title={skill.title}
                    image={skill.image}
                    alt={skill.alt}
                  />
                ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
