import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export function PlaceholderMedia({
  icon: Icon,
  label,
  className,
  variant = "light",
}: {
  icon: LucideIcon;
  label?: string;
  className?: string;
  variant?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-lg border",
        variant === "dark"
          ? "border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 text-white/70"
          : "border-border bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400",
        className
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_45%,rgba(56,189,248,0.12)_50%,transparent_55%)]" />
      <Icon className="h-8 w-8 shrink-0" strokeWidth={1.5} />
      {label ? (
        <span className="px-4 text-center text-xs font-medium">{label}</span>
      ) : null}
    </div>
  );
}
