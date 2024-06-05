import Image from "next/image";
import { data } from "./data/data";
import Card from "./components/Card";

export default function Experience() {
  return (
    <section className="my-12 space-y-6">
      <h2 className="title">Experience</h2>
      <ul className="flex flex-col items-center space-y-6">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </ul>
      <p className="w-fit mx-auto  border-green-400 border rounded-full px-4 py-2 bg-[#0d3d1555] text-green-400">
        En busque de nuevas oportunidades
      </p>
    </section>
  );
}
