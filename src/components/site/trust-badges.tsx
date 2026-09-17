import { ShieldCheck, Ruler, Sparkles, Award } from "lucide-react";
import { TRUST_STATS } from "@/lib/site-data";

export function TrustBadges() {
  const icons = [Award, ShieldCheck, Sparkles, Ruler];

  return (
    <section className="relative z-10 -mt-8 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-white/10 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {TRUST_STATS.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400/90 sm:text-sm">
                  {stat.label}
                </span>
                <p className="mt-1 text-xs text-slate-400 hidden sm:block">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
