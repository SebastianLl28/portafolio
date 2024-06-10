import { data } from "./data/data";
import Card from "./components/Card";

export default function Experience() {
  return (
    <section className="my-16 md:my-32">
      <h2 className="title">Experiencia Laboral</h2>
      <ul className="flex flex-col items-center space-y-6 mt-7 md:mt-12">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </ul>
      <p className="w-fit mx-auto border-green-400 border rounded-full px-4 py-2 bg-[#0d3d1555] text-green-400 mt-6">
        En busque de nuevas oportunidades
      </p>
    </section>
  );
}
