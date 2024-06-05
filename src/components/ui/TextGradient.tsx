interface TextGradientProps {
  children: React.ReactNode;
}

export function TextGradient({ children }: TextGradientProps) {
  return (
    <span className="bg-gradient-to-b from-white to-[#f775be] text-transparent bg-clip-text">
      {children}
    </span>
  );
}
