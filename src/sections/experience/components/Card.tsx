import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { ExperienceEntry } from "../data/data";

export default function Card({
  company,
  role,
  period,
  current,
  image,
  points,
  stack,
}: ExperienceEntry) {
  return (
    <div className="relative grid gap-4 md:grid-cols-[11rem,1fr] md:gap-10">
      <div className="flex items-start justify-between md:block">
        <p
          className={`font-mono text-sm ${
            current ? "text-emerald-400" : "text-muted"
          }`}
        >
          {period}
        </p>
      </div>
      <div className="relative border-l border-line pb-12 pl-6 md:pl-10">
        <span
          className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ${
            current ? "bg-emerald-400" : "bg-secondary"
          }`}
          aria-hidden="true"
        />
        <div className="flex items-center gap-3">
          <Image
            src={image}
            width={40}
            height={40}
            alt={`Logo de ${company}`}
            className="h-10 w-10 rounded-md object-contain"
          />
          <div>
            <h3 className="font-display text-xl font-semibold md:text-2xl">
              {company}
            </h3>
            <p className="text-sm text-primary">{role}</p>
          </div>
        </div>
        <ul className="mt-5 space-y-2.5">
          {points.map((point, index) => (
            <li
              key={index}
              className="ml-4 list-disc text-muted marker:text-secondary [&>p>span]:text-white"
            >
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
