import Link from "next/link";

const links = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-md">
      <nav className="mx-auto flex h-14 w-11/12 max-w-5xl items-center justify-between">
        <Link
          href="#"
          className="font-mono text-sm font-semibold tracking-tight"
        >
          sllamuca<span className="text-secondary">_</span>
        </Link>
        <ul className="hidden items-center gap-6 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/sebastian_llamuca_cv.pdf"
          target="_blank"
          className="rounded-full border border-line px-4 py-1.5 font-mono text-xs text-white transition-colors hover:border-primary hover:text-primary"
        >
          CV
        </Link>
      </nav>
    </header>
  );
}
