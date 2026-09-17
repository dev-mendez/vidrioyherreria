"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { MoveHorizontal, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { ANTES_DESPUES } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function BeforeAfterSlider() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = ANTES_DESPUES[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section id="antes-despues" className="relative bg-slate-950 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300">
            <Sparkles className="h-3.5 w-3.5" />
            Transformaciones Reales
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Antes y Después
          </h2>
          <p className="mt-3 text-base text-slate-300 sm:text-lg">
            Desliza la barra interactiva para comparar el estado previo contra
            el resultado final con estructura moderna y cristal templado.
          </p>
        </div>

        {/* Case selector tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {ANTES_DESPUES.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCaseIndex(index);
                setSliderPosition(50);
              }}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                activeCaseIndex === index
                  ? "bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20"
                  : "border border-white/10 bg-slate-900/80 text-slate-300 hover:bg-slate-800"
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Card */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left: Drag Slider Visualizer */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
              className="group relative aspect-16/10 w-full select-none overflow-hidden rounded-2xl border border-white/10 shadow-2xl cursor-ew-resize bg-slate-900"
            >
              {/* After Image (Background) */}
              <Image
                src={activeCase.afterImage}
                alt="Resultado después de la instalación"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
                priority
              />
              <div className="absolute top-4 right-4 rounded-md bg-emerald-500/90 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md backdrop-blur-xs">
                Después (Trabajo Terminado)
              </div>

              {/* Before Image (Clipped Overlay) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <Image
                  src={activeCase.beforeImage}
                  alt="Estado previo antes del trabajo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 800px"
                  priority
                />
                <div className="absolute top-4 left-4 rounded-md bg-slate-900/90 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-200 shadow-md backdrop-blur-xs border border-white/10">
                  Antes (Estado Previo)
                </div>
              </div>

              {/* Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-slate-950 bg-amber-400 text-slate-950 shadow-xl transition-transform hover:scale-110">
                  <MoveHorizontal className="h-5 w-5" />
                </div>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-medium text-slate-300 backdrop-blur-md border border-white/10 opacity-75 group-hover:opacity-100 transition-opacity">
                ↔ Arrastra para comparar
              </div>
            </div>
          </div>

          {/* Right: Technical Explanation & Benefits */}
          <div className="flex flex-col gap-5 lg:col-span-4">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                {activeCase.category}
              </span>
              <h3 className="mt-1 text-xl font-bold tracking-tight text-white sm:text-2xl">
                {activeCase.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {activeCase.description}
              </p>

              <div className="mt-6 flex items-center gap-2 rounded-xl bg-amber-400/10 border border-amber-400/20 p-3 text-xs font-medium text-amber-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-400" />
                <span>{activeCase.highlight}</span>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full gap-2 bg-amber-400 text-slate-950 font-bold hover:bg-amber-300"
              nativeButton={false}
              render={<a href="#cotizador-rapido" />}
            >
              Cotizar una transformación similar
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
