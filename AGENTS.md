<!-- BEGIN:nextjs-agent-rules -->

# Next.js

Before making changes related to Next.js:

- Always consult the documentation in `node_modules/next/dist/docs/`.
- Treat the local documentation as the source of truth.
- Do not rely on outdated training knowledge when the docs differ.

## Project Rules

- Use pnpm exclusively.
- Never use npm or npx.
- Use `pnpm add` for dependencies.
- Use `pnpm remove` for uninstalling packages.
- Use `pnpm dlx` instead of `npx`.
- Respect the existing App Router architecture.
- Prefer TypeScript.
- Keep components small and reusable.

<!-- END:nextjs-agent-rules -->
