interface TextGradientProps {
  children: React.ReactNode;
}
export function TextGradient({ children }: TextGradientProps) {
  return (
    <span className="bg-gradient-to-b from-white to-[#fe27a1] text-transparent bg-clip-text">
      {children}
    </span>
  );
}
