import Image, { StaticImageData } from "next/image";
import { Color, color } from "../utils/color";

interface CardProps {
  title: keyof typeof Color;
  image: StaticImageData;
  alt: string;
}

export default function Card({ image, alt, title }: CardProps) {
  const { border, name } = color(title);

  return (
    <li
      className={`flex items-center gap-2.5 rounded-lg border border-line bg-surface px-3.5 py-2.5 transition-colors duration-300 ${border}`}
    >
      <Image
        src={image}
        alt={alt}
        width={22}
        height={22}
        className="h-[22px] w-[22px] object-contain"
      />
      <span className="font-mono text-sm text-white/90">{name}</span>
    </li>
  );
}
