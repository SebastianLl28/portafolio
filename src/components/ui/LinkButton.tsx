import { cn } from "@/utils/cn";
import Link, { LinkProps } from "next/link";

interface LinkButtonProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  target?: string;
}

const LinkButton = ({ children, className, ...args }: LinkButtonProps) => {
  return (
    <Link
      className={cn(
        "inline-block bg-white/10 px-4 py-2 rounded-full border-white border-2 duration-100 relative hover:scale-110 hover:bg-white/20",
        className
      )}
      {...args}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
