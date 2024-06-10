import Image, { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  image: StaticImageData;
  alt: string;
  colorBg: string;
}

export default function Card({ image, alt, colorBg }: CardProps) {
  return (
    <div className="w-full aspect-square rounded-3xl p-4 relative overflow-hidden">
      <Image
        src={image}
        alt={alt}
        width={80}
        height={80}
        priority={false}
        className="w-full h-full rounded object-contain"
      />
      <div className={`absolute inset-5 -z-20 blur-xl ${colorBg}`} />
    </div>
  );
}
