import { cn } from "@/utils/cn";
import Link, { LinkProps } from "next/link";

interface LinkButtonProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  target?: string;
}

const LinkButton = ({
  children,
  className,
  target = "_self",
  ...args
}: LinkButtonProps) => {
  return (
    <Link
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/60 hover:bg-white/10",
        className
      )}
      target={target}
      {...args}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
