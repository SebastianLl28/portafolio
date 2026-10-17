import { cn } from "@/utils/cn";

const IconLink = ({
  children,
  className,
  ...args
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      className={cn(
        "rounded-full border border-line bg-surface p-2.5 text-muted transition-colors hover:border-primary/60 hover:text-white",
        className
      )}
      {...args}
    >
      {children}
    </a>
  );
};

export default IconLink;
