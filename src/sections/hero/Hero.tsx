import { TextGradient } from "@/components/ui/TextGradient";
import Image from "next/image";
import Footer from "./components/Footer";
import ProfileImage from "@/assets/profile.webp";
import Bg from "./components/Bg";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-dvh relative px-4 max-h-[1080px]">
      <Image
        src={ProfileImage}
        alt="profile image"
        width={112}
        height={112}
        className="rounded-full"
        role="img"
      />
      <p className="text-3xl mt-4 font-extrabold text-balance text-center md:text-5xl xl:text-7xl leading-normal">
        Hola, Soy <TextGradient>Sebastian Llamuca</TextGradient>
      </p>
      <h1 className="text-2xl mt-2 font-bold text-pretty text-center bg-gradient-to-b from-white to-[#f775be] text-transparent bg-clip-text md:text-4xl md:mt-4 xl:mt-6 xl:text-5xl">
        Desarrollador Frontend
      </h1>
      <p className="text-lg mt-2 leading-normal max-w-prose text-pretty text-center md:text-2xl xl:mt-4">
        Egresaro de la carrera de{" "}
        <TextGradient>Desarrollo de sistemas de Información</TextGradient>, en
        busca de nuevos desafios y oportunidades.
      </p>
      <Footer />
      <div className="bg" />
      <Bg />
    </section>
  );
}
