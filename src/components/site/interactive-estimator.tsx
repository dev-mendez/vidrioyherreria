"use client";

import { useState } from "react";
import { MessageCircle, Calculator, Check, ArrowRight, ArrowLeft, Sparkles, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SITE, whatsappLink } from "@/lib/site-data";

const PROJECT_PRESETS = [
  {
    id: "puerta-pivot",
    name: "Puerta Principal Pivotante",
    description: "Estructura monumental de acero + cristal templado",
    icon: "🚪",
    recommendedGlass: "Templado 10mm Biselado / Acanalado",
    deliveryEstimate: "12 - 15 días",
  },
  {
    id: "ventanal",
    name: "Ventanal Panorámico / Corredizo",
    description: "Aluminio línea europea + doble cristal",
    icon: "🪟",
    recommendedGlass: "Templado Float 8mm / Laminado Acústico",
    deliveryEstimate: "7 - 10 días",
  },
  {
    id: "barandal-reja",
    name: "Reja / Barandal con Cristal",
    description: "Postes de acero o inox + paneles continuos",
    icon: "🛡️",
    recommendedGlass: "Templado 10mm o Laminado 6+6mm",
    deliveryEstimate: "10 - 14 días",
  },
  {
    id: "arenado-arte",
    name: "Cristalería Fina / Arenado Artístico",
    description: "Grabados a mano, divisiones o mamparas",
    icon: "✨",
    recommendedGlass: "Satinado al ácido / Arenado con cuarzo",
    deliveryEstimate: "5 - 8 días",
  },
];

const FINISH_TIERS = [
  {
    id: "standard",
    name: "Línea Profesional Clásica",
    specs: "Cristal Templado 8mm + Perfiles Acero Calibre 16",
    badge: "Excelente Rendimiento",
    warranty: "3 Años de Garantía",
  },
  {
    id: "premium",
    name: "Línea Arquitectónica Premium",
    specs: "Cristal Templado 10mm + Tubing Calibre 14 + Pintura al Horno",
    badge: "Recomendado por Arquitectos",
    warranty: "5 Años de Garantía Estructural",
  },
  {
    id: "security",
    name: "Línea Alta Seguridad / Blindaje",
    specs: "Cristal Laminado 5+5mm Anti-impacto + Cerradura Multipunto",
    badge: "Máxima Protección",
    warranty: "5 Años de Garantía + Refuerzo",
  },
];

export function InteractiveEstimator() {
  const [step, setStep] = useState(1);
  const [selectedProject, setSelectedProject] = useState(PROJECT_PRESETS[0].id);
  const [selectedTier, setSelectedTier] = useState(FINISH_TIERS[1].id);
  const [dimensions, setDimensions] = useState("");
  const [location, setLocation] = useState("Managua");
  const [clientName, setClientName] = useState("");

  const projectObj = PROJECT_PRESETS.find((p) => p.id === selectedProject)!;
  const tierObj = FINISH_TIERS.find((t) => t.id === selectedTier)!;

  const handleGenerateQuote = () => {
    const lines = [
      "🏛️ *SOLICITUD DE COTIZACIÓN - METAL Y CRISTAL*",
      "",
      `📌 *Proyecto:* ${projectObj.name}`,
      `💎 *Nivel de Acabado:* ${tierObj.name}`,
      `📐 *Especificación de Vidrio:* ${projectObj.recommendedGlass}`,
      `🛠️ *Estructura / Garantía:* ${tierObj.specs} (${tierObj.warranty})`,
      dimensions ? `📏 *Medidas aproximadas:* ${dimensions}` : "",
      location ? `📍 *Ubicación de instalación:* ${location}` : "",
      clientName ? `👤 *Cliente:* ${clientName}` : "",
      "",
      "¿Podrían brindarme una estimación de presupuesto y disponibilidad para medición en sitio?",
    ].filter(Boolean);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="cotizador-rapido" className="bg-muted/30 py-16 sm:py-24 border-t border-border/60">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <Calculator className="h-3.5 w-3.5" />
            Cotizador Inteligente en 3 Pasos
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Configura tu Proyecto al Instante
          </h2>
          <p className="mt-3 text-muted-foreground">
            Elige el tipo de trabajo, nivel de materiales y recibe asesoría
            directa por WhatsApp con especificaciones recomendadas.
          </p>
        </div>

        <Card className="mt-10 border-border/80 shadow-xl">
          {/* Progress Bar */}
          <div className="border-b border-border bg-muted/40 p-4">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className={step >= 1 ? "text-primary font-bold" : "text-muted-foreground"}>
                1. Tipo de Proyecto
              </span>
              <span className={step >= 2 ? "text-primary font-bold" : "text-muted-foreground"}>
                2. Nivel de Materiales
              </span>
              <span className={step >= 3 ? "text-primary font-bold" : "text-muted-foreground"}>
                3. Medidas & Envío
              </span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          <CardContent className="p-6 sm:p-8">
            {/* STEP 1: SELECT PROJECT */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-foreground">
                    ¿Qué tipo de trabajo deseas realizar?
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Selecciona la opción principal para tu hogar o negocio.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {PROJECT_PRESETS.map((preset) => {
                    const isSelected = preset.id === selectedProject;
                    return (
                      <div
                        key={preset.id}
                        onClick={() => setSelectedProject(preset.id)}
                        className={`cursor-pointer rounded-xl border p-4 transition-all flex gap-3 items-start ${
                          isSelected
                            ? "border-primary bg-primary/5 ring-2 ring-primary/20 shadow-sm"
                            : "border-border bg-card hover:bg-muted/40"
                        }`}
                      >
                        <span className="text-2xl">{preset.icon}</span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm text-foreground">
                              {preset.name}
                            </span>
                            {isSelected && (
                              <Check className="h-4 w-4 text-primary" />
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {preset.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-6 flex justify-end">
                  <Button
                    onClick={() => setStep(2)}
                    className="gap-2 bg-primary text-primary-foreground font-semibold"
                  >
                    Siguiente: Materiales
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 2: SELECT FINISH TIER */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-foreground">
                    Selecciona el nivel de calidad y resistencia
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Cada nivel incluye soldadura fina y herrajes garantizados.
                  </p>
                </div>

                <div className="grid gap-4">
                  {FINISH_TIERS.map((tier) => {
                    const isSelected = tier.id === selectedTier;
                    return (
                      <div
                        key={tier.id}
                        onClick={() => setSelectedTier(tier.id)}
                        className={`cursor-pointer rounded-xl border p-5 transition-all ${
                          isSelected
                            ? "border-primary bg-primary/5 ring-2 ring-primary/20 shadow-sm"
                            : "border-border bg-card hover:bg-muted/40"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-foreground">
                              {tier.name}
                            </span>
                            <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                              {tier.badge}
                            </span>
                          </div>
                          {isSelected && (
                            <Check className="h-4 w-4 text-primary" />
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          {tier.specs}
                        </p>
                        <div className="mt-3 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                          <ShieldCheck className="h-3.5 w-3.5" />
                          {tier.warranty}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-6 flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)} className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Atrás
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    className="gap-2 bg-primary text-primary-foreground font-semibold"
                  >
                    Siguiente: Detalles
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3: MEASUREMENTS & SUBMIT */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    Resumen y Datos para tu Cotización
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Si no tienes las medidas exactas, indícanos un aproximado y agendamos visita técnica.
                  </p>
                </div>

                {/* Configuration Summary Card */}
                <div className="rounded-xl border border-amber-400/30 bg-amber-400/5 p-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-bold text-amber-600 dark:text-amber-400">
                    <Sparkles className="h-4 w-4" />
                    Resumen de tu selección:
                  </div>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
                    <div><strong>Proyecto:</strong> {projectObj.name}</div>
                    <div><strong>Línea:</strong> {tierObj.name}</div>
                    <div><strong>Vidrio sugerido:</strong> {projectObj.recommendedGlass}</div>
                    <div><strong>Tiempo de fabricación:</strong> {projectObj.deliveryEstimate}</div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="dim">Medidas aproximadas (Opcional)</Label>
                    <Input
                      id="dim"
                      placeholder="Ej. Ancho 1.80m x Alto 2.20m"
                      value={dimensions}
                      onChange={(e) => setDimensions(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="loc">Ciudad / Zona de Instalación</Label>
                    <Input
                      id="loc"
                      placeholder="Ej. Managua, Carretera a Masaya, etc."
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="cliName">Tu Nombre o Empresa</Label>
                    <Input
                      id="cliName"
                      placeholder="Tu nombre completo"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-between items-center">
                  <Button variant="outline" onClick={() => setStep(2)} className="gap-2 w-full sm:w-auto">
                    <ArrowLeft className="h-4 w-4" />
                    Atrás
                  </Button>

                  <Button
                    size="lg"
                    onClick={handleGenerateQuote}
                    className="w-full sm:w-auto gap-2 bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 text-base"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Solicitar Presupuesto por WhatsApp
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
