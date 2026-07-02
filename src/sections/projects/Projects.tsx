import Reveal from "@/components/motion/Reveal";
import { data } from "./data/data";
import Card from "./components/Card";

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="mx-auto w-11/12 max-w-5xl scroll-mt-24 py-16 md:py-24"
    >
      <Reveal>
        <p className="eyebrow">Trabajo real, en producción</p>
        <h2 className="section-title mt-2">Proyectos</h2>
      </Reveal>
      <div className="mt-10 flex flex-col gap-16 md:mt-14 lg:gap-24">
        {data.map((project, index) => (
          <Reveal key={project.id}>
            <Card {...project} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
