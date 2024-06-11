import Card from "./components/Card";
import { skills } from "./data/skills";

export default function Skills() {
  return (
    <section className="my-16 md:my-32 w-11/12 max-w-5xl mx-auto">
      <h2 className="title mb-3 md:mb-7">Tecnologías</h2>
      <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(4rem,1fr))] justify-center justify-items-center">
        {skills.map((skill) => (
          <Card
            key={skill.title}
            title={skill.title}
            image={skill.image}
            alt={skill.alt}
          />
        ))}
      </div>
    </section>
  );
}
