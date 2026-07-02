import Reveal from "@/components/motion/Reveal";
import { data } from "./data/data";
import Card from "./components/Card";

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="mx-auto w-11/12 max-w-5xl scroll-mt-24 py-16 md:py-24"
    >
      <Reveal>
        <p className="eyebrow">Trayectoria</p>
        <h2 className="section-title mt-2">Experiencia</h2>
      </Reveal>
      <ul className="mt-10 md:mt-14">
        {data.map((item) => (
          <Reveal key={item.id} as="li">
            <Card {...item} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
