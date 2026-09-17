"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Eye, ShieldCheck, Check, MessageCircle } from "lucide-react";
import { GLASS_SIMULATOR_DATA, whatsappLink } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function GlassSimulator() {
  const [selectedGlass, setSelectedGlass] = useState(GLASS_SIMULATOR_DATA.glasses[0].id);
  const [selectedMetal, setSelectedMetal] = useState(GLASS_SIMULATOR_DATA.metals[0].id);

  const currentGlass = GLASS_SIMULATOR_DATA.glasses.find((g) => g.id === selectedGlass)!;
  const currentMetal = GLASS_SIMULATOR_DATA.metals.find((m) => m.id === selectedMetal)!;

  const quoteMessage = `Hola, estuve viendo el simulador de acabados y me interesa cotizar un proyecto con: *${currentGlass.name}* y estructura en *${currentMetal.name}*.`;

  // Visual filter for the simulator viewport based on glass
  const getGlassVisuals = () => {
    switch (selectedGlass) {
      case "arenado":
        return "backdrop-blur-md bg-white/40 opacity-85";
      case "humo":
        return "bg-amber-950/60 opacity-80 backdrop-blur-none";
      case "laminado":
        return "bg-cyan-900/10 opacity-95 border-2 border-emerald-400/40";
      case "claro":
      default:
        return "bg-cyan-500/5 opacity-95";
    }
  };

  return (
    <section id="simulador" className="bg-background py-16 sm:py-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <Eye className="h-3.5 w-3.5" />
            Guía Visual de Materiales
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Simulador de Cristales y Acabados
          </h2>
          <p className="mt-3 text-muted-foreground">
            Compara los tipos de cristal y perfilería metálica para encontrar el
            equilibrio perfecto entre privacidad, iluminación y seguridad.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Controls: Left Column */}
          <div className="flex flex-col gap-6 lg:col-span-6">
            {/* Glass Selection */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                1. Selecciona el Tipo de Cristal
              </label>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {GLASS_SIMULATOR_DATA.glasses.map((glass) => {
                  const isSelected = glass.id === selectedGlass;
                  return (
                    <button
                      key={glass.id}
                      onClick={() => setSelectedGlass(glass.id)}
                      className={`relative flex flex-col p-4 text-left rounded-xl border transition-all ${
                        isSelected
                          ? "border-primary bg-primary/5 ring-2 ring-primary/20 shadow-sm"
                          : "border-border bg-card hover:bg-muted/50"
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <Check className="h-3 w-3" />
                        </div>
                      )}
                      <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
                        {glass.badge}
                      </span>
                      <span className="font-semibold text-sm text-foreground mt-1">
                        {glass.name}
                      </span>
                      <span className="text-xs text-muted-foreground mt-1">
                        {glass.opacity}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Metal Finish Selection */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                2. Selecciona el Acabado de la Estructura
              </label>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {GLASS_SIMULATOR_DATA.metals.map((metal) => {
                  const isSelected = metal.id === selectedMetal;
                  return (
                    <button
                      key={metal.id}
                      onClick={() => setSelectedMetal(metal.id)}
                      className={`flex flex-col p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                          : "border-border bg-card hover:bg-muted/50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="h-4 w-4 rounded-full border border-black/20"
                          style={{ backgroundColor: metal.color }}
                        />
                        <span className="font-semibold text-xs text-foreground">
                          {metal.name.split(" ")[0]} {metal.name.split(" ")[1]}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Spec Summary Card */}
            <div className="rounded-xl border border-border bg-muted/30 p-4 text-sm">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <Sparkles className="h-4 w-4 text-amber-500" />
                Uso recomendado para esta combinación:
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {currentGlass.bestFor}. Combinado con perfiles en {currentMetal.name.toLowerCase()} para máxima durabilidad.
              </p>
            </div>
          </div>

          {/* Simulator Viewport: Right Column */}
          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 sm:aspect-16/11 w-full overflow-hidden rounded-2xl border-4 border-slate-900 shadow-2xl bg-slate-950">
              {/* Background Architectural Scenery */}
              <Image
                src="/images/hero-showcase.jpg"
                alt="Ambiente arquitectónico"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />

              {/* Simulated Glass Panel Window Frame */}
              <div className="absolute inset-6 flex items-center justify-center">
                {/* Structural metal frame */}
                <div
                  className="relative h-full w-full rounded-xl border-8 shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
                  style={{
                    borderColor: currentMetal.color,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  {/* Glass Pane Overlay */}
                  <div
                    className={`relative h-full w-full transition-all duration-500 flex flex-col justify-between p-4 ${getGlassVisuals()}`}
                  >
                    {/* Glass reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none" />

                    <div className="relative z-10 flex justify-between items-start">
                      <span className="rounded-md bg-slate-950/80 px-2 py-1 text-[11px] font-bold text-white backdrop-blur-md border border-white/20">
                        {currentGlass.name}
                      </span>
                      <span className="rounded-md bg-slate-950/80 px-2 py-1 text-[11px] font-semibold text-amber-400 backdrop-blur-md border border-white/20">
                        {currentMetal.name}
                      </span>
                    </div>

                    <div className="relative z-10 rounded-lg bg-slate-950/85 p-3 backdrop-blur-md border border-white/10 text-white">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-300">
                        <ShieldCheck className="h-4 w-4" />
                        {currentGlass.opacity}
                      </div>
                      <p className="mt-1 text-[11px] text-slate-300">
                        {currentGlass.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <Button
                className="w-full sm:w-auto gap-2 bg-amber-500 text-slate-950 font-bold hover:bg-amber-400"
                nativeButton={false}
                render={
                  <a
                    href={whatsappLink(quoteMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <MessageCircle className="h-4 w-4" />
                Cotizar con estos materiales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
