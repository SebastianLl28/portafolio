import Image from "next/image";
import Link from "next/link";
import ProfileImage from "@/assets/profile.webp";
import LinkButton from "@/components/ui/LinkButton";
import Highlight from "@/components/motion/Highlight";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[32rem] w-[32rem] animate-breathe rounded-full bg-secondary/20 blur-[160px]"
        aria-hidden="true"
      />
      <div className="mx-auto w-11/12 max-w-5xl pb-16 pt-28">
        <h1 className="animate-rise font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
          Desarrollador{" "}
          <Highlight onMount delay={0.3}>
            Full Stack
          </Highlight>
        </h1>

        <div className="animate-rise mt-5 flex items-center gap-3 [animation-delay:150ms]">
          <Image
            src={ProfileImage}
            alt="Foto de Sebastian Llamuca"
            width={32}
            height={32}
            className="rounded-full border border-line"
            priority
          />
          <p className="eyebrow">
            Sebastian Llamuca · Lima, Perú · GMT-5
          </p>
        </div>

        <p className="animate-rise mt-8 max-w-2xl text-lg leading-relaxed text-muted [animation-delay:200ms] md:text-xl">
          Automatizo procesos y ordeno los que ya existen. Empiezo por
          entender cómo trabaja el equipo, no por el código. Así construyo
          soluciones que se sienten simples de usar.
        </p>

        <p className="animate-rise mt-6 flex items-center gap-2 font-mono text-sm text-emerald-400 [animation-delay:300ms]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Abierto a nuevas oportunidades
        </p>

        <div className="animate-rise mt-10 flex flex-wrap items-center gap-3 [animation-delay:400ms]">
          <LinkButton
            href="#proyectos"
            className="border-secondary bg-secondary text-white hover:border-secondary hover:bg-secondary/85"
          >
            Ver proyectos
            <ArrowUpRightIcon />
          </LinkButton>
          <LinkButton href="/sebastian_llamuca_cv.pdf" target="_blank">
            Descargar CV
          </LinkButton>
          <div className="ml-1 flex items-center gap-1">
            <Link
              href="https://github.com/SebastianLl28"
              target="_blank"
              aria-label="GitHub"
              className="rounded-full p-2.5 text-muted transition-colors hover:bg-white/10 hover:text-white"
            >
              <GitHubIcon size={22} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sebastian-llamuca"
              target="_blank"
              aria-label="LinkedIn"
              className="rounded-full p-2.5 text-muted transition-colors hover:bg-white/10 hover:text-white"
            >
              <LinkedInIcon size={22} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
