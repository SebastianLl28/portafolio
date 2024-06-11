import Image, { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  date: string;
  image: StaticImageData;
  description: JSX.Element[];
}

export default function Card({ title, date, image, description }: CardProps) {
  return (
    <ol className="w-11/12 p-3.5 md:px-6 md:py-5 space-y-5 flex flex-col animate-shine border border-white/10 bg-[linear-gradient(110deg,#000103,45%,#0f1318,55%,#010101)] bg-[length:200%_100%] transition-colors rounded-lg max-w-[45rem] ">
      <div className="grid grid-cols-[min-content,auto] grid-rows-[auto,auto] gap-x-2">
        <Image
          src={image}
          width={45}
          height={45}
          alt="devdatep"
          className="row-span-2 min-w-[45px] self-center"
        />
        <h3 className="text-lg font-semibold line-clamp-2 leading-tight self-end md:text-2xl">
          {title}
        </h3>
        <p className="text-sm">{date}</p>
      </div>
      <ul className="space-y-3">
        {description.map((desc, index) => (
          <li
            key={index}
            className="list-disc ml-4 md:ml-6 [&>p>span]:text-primary md:text-lg"
          >
            {desc}
          </li>
        ))}
      </ul>
    </ol>
  );
}
