import { Star, CheckCircle2, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIOS } from "@/lib/site-data";

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="bg-muted/40 py-16 sm:py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Opiniones Reales
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="mt-3 text-muted-foreground">
            Familias, arquitectos y negocios comerciales que confiaron en la
            calidad y puntualidad de nuestro taller.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIOS.map((t) => (
            <Card
              key={t.name}
              className="relative flex flex-col justify-between overflow-hidden border-border/70 bg-card p-6 shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <Quote className="absolute top-4 right-4 h-12 w-12 text-muted/40 -z-0 pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-foreground italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="relative z-10 mt-6 border-t border-border/60 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-foreground">{t.name}</h4>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="h-3 w-3" /> Verificado
                  </span>
                </div>
                <div className="mt-2 text-[11px] font-medium text-amber-500">
                  Proyecto: {t.project}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
