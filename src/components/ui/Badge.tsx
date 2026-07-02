export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded border border-line bg-white/5 px-2 py-0.5 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
