import { cn } from "@/utils/cn";

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const LinkButton = ({ children, className, ...args }: LinkButtonProps) => {
  return (
    <a
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/60 hover:bg-white/10",
        className
      )}
      {...args}
    >
      {children}
    </a>
  );
};

export default LinkButton;
