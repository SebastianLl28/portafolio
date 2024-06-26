export function BadgeBackgroundShine({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="inline-flex animate-shine items-center justify-center rounded-full text-xs md:text-sm border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 py-1 font-medium text-neutral-200 transition-colors">
      {children}
    </div>
  );
}
