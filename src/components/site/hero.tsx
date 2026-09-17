import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowRight, ShieldCheck, Award, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DIFERENCIADORES, SITE, whatsappLink } from "@/lib/site-data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      {/* Background ambient lighting glow */}
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12 lg:items-center lg:py-28 lg:px-8">
        {/* Left Column: Value Proposition */}
        <div className="flex flex-col gap-6 lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md w-fit">
            <Award className="h-4 w-4 text-amber-400" />
            Maestros en Herrería Fina & Cristalería Templada
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight text-balance">
            {SITE.tagline}
            <span className="mt-1 block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
              {SITE.subtitle}
            </span>
          </h1>

          <p className="max-w-xl text-base text-slate-300 sm:text-lg leading-relaxed">
            {SITE.description}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="text-base font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-lg shadow-amber-500/25 transition-all hover:scale-102"
              nativeButton={false}
              render={
                <a
                  href={whatsappLink("Hola, quiero cotizar un trabajo en metal y cristal.")}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <MessageCircle className="h-5 w-5" />
              Cotizar por WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-slate-900/50 text-base text-white hover:bg-white/10 hover:text-white backdrop-blur-md"
              nativeButton={false}
              render={<Link href="#catalogo" />}
            >
              Ver Catálogo
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
            {DIFERENCIADORES.slice(0, 4).map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Hero Visual Showcase with Badges */}
        <div className="relative lg:col-span-6">
          <div className="relative aspect-4/3 sm:aspect-16/11 w-full overflow-hidden rounded-2xl border border-white/15 shadow-2xl shadow-black/50 bg-slate-900 group">
            <Image
              src="/images/hero-showcase.jpg"
              alt="Puerta pivotante monumental de herrería moderna con cristal templado"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

            {/* Bottom floating badge inside image */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/20 bg-slate-950/85 p-3.5 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400 text-slate-950 font-bold">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">
                    Puerta Monumental Pivotante
                  </h4>
                  <p className="text-[11px] text-slate-300">
                    Acero negro mate + Cristal templado acanalado
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-block rounded-md bg-amber-400/20 px-2 py-1 text-[11px] font-bold text-amber-300 border border-amber-400/30">
                100% a medida
              </span>
            </div>
          </div>

          {/* Floating Guarantee Tag */}
          <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2.5 rounded-xl border border-white/15 bg-slate-900/90 p-3 shadow-xl backdrop-blur-lg">
            <ShieldCheck className="h-6 w-6 text-emerald-400" />
            <div className="text-left">
              <div className="text-xs font-bold text-white">5 Años de Garantía</div>
              <div className="text-[10px] text-slate-400">Estructural y soldadura</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
