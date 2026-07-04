import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showLabel?: boolean;
}

export function Logo({ className, showLabel = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img
        src="/favicon.svg"
        alt=""
        aria-hidden
        className="size-7 shrink-0"
      />
      {showLabel && (
        <span className="text-base font-semibold tracking-tight">Notely</span>
      )}
    </div>
  );
}
