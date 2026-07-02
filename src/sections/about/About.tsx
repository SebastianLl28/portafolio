import Reveal from "@/components/motion/Reveal";

const facts = [
  { label: "Ubicación", value: "Lima, Perú" },
  { label: "Formación", value: "Desarrollo de Sistemas de Información, IDAT" },
  { label: "Actualmente", value: "Full Stack en Turismo CIVA" },
  { label: "Programando desde", value: "2021" },
];

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="mx-auto w-11/12 max-w-5xl scroll-mt-24 py-16 md:py-24"
    >
      <Reveal>
        <p className="eyebrow">Quién soy</p>
        <h2 className="section-title mt-2">Sobre mí</h2>
      </Reveal>
      <Reveal className="mt-10 grid gap-10 md:mt-14 md:grid-cols-[1fr,18rem] md:gap-16" delay={0.1}>
        <div className="space-y-4 leading-relaxed text-muted">
          <p>
            Empecé a programar en 2021 y me formé en Desarrollo de Sistemas de
            Información en el Instituto IDAT. Desde entonces he pasado del
            frontend al desarrollo full stack: hoy construyo funcionalidades
            completas — interfaz, servicios y base de datos — para sistemas que
            se usan a diario en producción.
          </p>
          <p>
            Me gusta trabajar en equipo y que las cosas funcionen bien de
            verdad: he revisado código de otros desarrolladores, definido la
            estructura de proyectos y coordinado tareas, siempre buscando que
            el equipo avance con orden.
          </p>
          <p>
            Si quieres conversar sobre una oportunidad o un proyecto,{" "}
            <a
              href="mailto:llamucasebas@gmail.com"
              className="text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
            >
              escríbeme
            </a>
            .
          </p>
        </div>
        <dl className="h-fit space-y-4 rounded-xl border border-line bg-surface p-6">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                {fact.label}
              </dt>
              <dd className="mt-0.5 text-sm text-white">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
