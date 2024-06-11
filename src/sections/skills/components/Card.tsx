import Image, { StaticImageData } from "next/image";
import { Color, color } from "../utils/color";

interface CardProps {
  title: keyof typeof Color;
  image: StaticImageData;
  alt: string;
}

export default function Card({ image, alt, title }: CardProps) {
  const { border, name, bg } = color(title);

  return (
    <div
      className={`w-full aspect-square rounded-3xl p-4 relative overflow-hidden flex items-center justify-center border-2 border-transparent ${border} duration-300`}
      title={name}
    >
      <Image
        src={image}
        alt={alt}
        width={80}
        height={80}
        priority={false}
        className="w-full h-full rounded object-contain"
      />
      <div className={`absolute inset-5 -z-20 blur-xl ${bg}`} />
    </div>
  );
}
