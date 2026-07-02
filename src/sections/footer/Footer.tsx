import Link from "next/link";
import LinkButton from "@/components/ui/LinkButton";
import Highlight from "@/components/motion/Highlight";
import Reveal from "@/components/motion/Reveal";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export default function Footer() {
  return (
    <>
      <section
        id="contacto"
        className="mx-auto w-11/12 max-w-5xl scroll-mt-24 py-16 md:py-24"
      >
        <Reveal className="rounded-2xl border border-line bg-surface px-6 py-12 text-center md:py-16">
          <p className="eyebrow">Contacto</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">
            ¿Trabajamos{" "}
            <Highlight className="px-2" delay={0.3}>
              juntos
            </Highlight>
            ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Estoy abierto a nuevas oportunidades y colaboraciones. Escríbeme y
            te respondo pronto.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <LinkButton
              href="mailto:llamucasebas@gmail.com"
              className="border-secondary bg-secondary text-white hover:border-secondary hover:bg-secondary/85"
            >
              <MailIcon size={18} />
              llamucasebas@gmail.com
            </LinkButton>
            <LinkButton
              href="https://www.linkedin.com/in/sebastian-llamuca"
              target="_blank"
            >
              <LinkedInIcon size={18} />
              LinkedIn
            </LinkButton>
          </div>
        </Reveal>
      </section>
      <footer className="border-t border-line py-8">
        <div className="mx-auto flex w-11/12 max-w-5xl flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Sebastian Llamuca Dueñas
          </p>
          <div className="flex items-center gap-1">
            <Link
              href="https://github.com/SebastianLl28"
              target="_blank"
              aria-label="GitHub"
              className="rounded-full p-2 text-muted transition-colors hover:text-white"
            >
              <GitHubIcon size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sebastian-llamuca"
              target="_blank"
              aria-label="LinkedIn"
              className="rounded-full p-2 text-muted transition-colors hover:text-white"
            >
              <LinkedInIcon size={18} />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
