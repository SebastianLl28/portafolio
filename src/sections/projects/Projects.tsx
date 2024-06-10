import { data } from "./data/data";
import Card from "./components/Card";

export default function Projects() {
  return (
    <section className="my-16 md:my-32 space-y-7 md:space-y-12">
      <h2 className="title">Proyectos</h2>
      <div className="flex flex-col items-center gap-y-10 md:gap-y-12 lg:gap-y-16">
        {data.map((project, index) => (
          <Card key={project.id} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}
