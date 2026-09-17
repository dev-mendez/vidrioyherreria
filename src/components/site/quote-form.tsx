"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, ShieldCheck, Ruler, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MATERIALES, SITE, TIPOS_TRABAJO, GROSORES_CRISTAL, whatsappLink } from "@/lib/site-data";

const initialState = {
  nombre: "",
  telefono: "",
  tipoTrabajo: "",
  medidas: "",
  material: "",
  cristal: "",
  grosorCristal: "",
  notas: "",
  urgencia: "Normal (1-2 semanas)",
};

export function QuoteForm() {
  const [form, setForm] = useState(initialState);

  const update = (field: keyof typeof initialState) => (value: string | null) =>
    setForm((prev) => ({ ...prev, [field]: value ?? "" }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const lines = [
      "🏛️ *NUEVA SOLICITUD DE COTIZACIÓN - METAL Y CRISTAL*",
      "",
      form.nombre && `👤 *Nombre:* ${form.nombre}`,
      form.telefono && `📱 *Teléfono:* ${form.telefono}`,
      form.tipoTrabajo && `📌 *Tipo de Trabajo:* ${form.tipoTrabajo}`,
      form.medidas && `📏 *Medidas Aproximadas:* ${form.medidas}`,
      form.material && `🛠️ *Estructura/Material:* ${form.material}`,
      form.cristal && `💎 *Lleva Cristal:* ${form.cristal}`,
      form.grosorCristal && `🔍 *Especificación Cristal:* ${form.grosorCristal}`,
      form.urgencia && `⏱️ *Tiempo Estimado:* ${form.urgencia}`,
      form.notas && `📝 *Detalles Adicionales:* ${form.notas}`,
      "",
      "Adjuntaré fotos o planos de referencia en este chat de WhatsApp.",
    ].filter(Boolean);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="cotizar" className="bg-background py-16 sm:py-24 border-t border-border/60">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <Ruler className="h-3.5 w-3.5" />
            Asesoría Técnica y Presupuesto
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Solicita tu Presupuesto a Medida
          </h2>
          <p className="mt-3 text-muted-foreground">
            Completa los detalles de tu proyecto y recibe atención inmediata por
            WhatsApp. Si tienes fotos del espacio, puedes enviarlas directo al chat.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Form Card */}
          <div className="lg:col-span-8">
            <Card className="border-border/80 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl">Detalles del Proyecto</CardTitle>
                <CardDescription>
                  Sin compromiso. Te contactamos en menos de 2 horas en horario laboral.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <div className="grid gap-2">
                    <Label htmlFor="tipoTrabajo">Tipo de trabajo requerido</Label>
                    <Select
                      value={form.tipoTrabajo}
                      onValueChange={update("tipoTrabajo")}
                    >
                      <SelectTrigger id="tipoTrabajo" className="w-full">
                        <SelectValue placeholder="Selecciona una especialidad" />
                      </SelectTrigger>
                      <SelectContent>
                        {TIPOS_TRABAJO.map((tipo) => (
                          <SelectItem key={tipo} value={tipo}>
                            {tipo}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="medidas">Medidas aproximadas</Label>
                      <Input
                        id="medidas"
                        placeholder="Ej. Ancho 1.50m x Alto 2.10m"
                        value={form.medidas}
                        onChange={(e) => update("medidas")(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="material">Estructura metálica</Label>
                      <Select value={form.material} onValueChange={update("material")}>
                        <SelectTrigger id="material" className="w-full">
                          <SelectValue placeholder="Selecciona el material" />
                        </SelectTrigger>
                        <SelectContent>
                          {MATERIALES.map((m) => (
                            <SelectItem key={m} value={m}>
                              {m}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="cristal">¿Incluye cristal?</Label>
                      <Select value={form.cristal} onValueChange={update("cristal")}>
                        <SelectTrigger id="cristal" className="w-full">
                          <SelectValue placeholder="Selecciona" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Sí, con cristal templado">Sí, con cristal templado</SelectItem>
                          <SelectItem value="Sí, con cristal laminado de seguridad">Sí, con cristal laminado</SelectItem>
                          <SelectItem value="Sí, con cristal arenado de privacidad">Sí, con cristal arenado</SelectItem>
                          <SelectItem value="No, solo herrería de metal">No, solo herrería de metal</SelectItem>
                          <SelectItem value="Requiero recomendación">Requiero recomendación</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="grosor">Grosor de Cristal deseado</Label>
                      <Select value={form.grosorCristal} onValueChange={update("grosorCristal")}>
                        <SelectTrigger id="grosor" className="w-full">
                          <SelectValue placeholder="Grosor sugerido" />
                        </SelectTrigger>
                        <SelectContent>
                          {GROSORES_CRISTAL.map((g) => (
                            <SelectItem key={g} value={g}>
                              {g}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="notas">Detalles o requerimientos especiales</Label>
                    <Textarea
                      id="notas"
                      placeholder="Describe qué deseas lograr, si es para interior/exterior o si tienes un diseño específico en mente..."
                      value={form.notas}
                      onChange={(e) => update("notas")(e.target.value)}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="nombre">Nombre completo</Label>
                      <Input
                        id="nombre"
                        placeholder="Tu nombre y apellido"
                        value={form.nombre}
                        onChange={(e) => update("nombre")(e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="telefono">Número de teléfono / WhatsApp</Label>
                      <Input
                        id="telefono"
                        type="tel"
                        placeholder="Ej. 8888 8888"
                        value={form.telefono}
                        onChange={(e) => update("telefono")(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-base font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 gap-2 shadow-lg shadow-amber-500/20"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Enviar Cotización a WhatsApp
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Se abrirá WhatsApp con tus datos ordenados para atenderte con {SITE.phoneDisplay}
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Guarantee & Why Choose Us Sidebar */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-md space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary">
                Garantías de Servicio
              </h3>

              <div className="flex gap-3 items-start text-xs sm:text-sm">
                <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">5 Años de Garantía</h4>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    Certificado escrito contra fallas de soldadura o herrajes.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start text-xs sm:text-sm">
                <Ruler className="h-5 w-5 shrink-0 text-amber-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Visita Técnica sin Costo</h4>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    Tomamos medidas con láser y verificamos plomos y niveles en sitio.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start text-xs sm:text-sm">
                <Clock className="h-5 w-5 shrink-0 text-cyan-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Entrega Puntual</h4>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    Cronograma de instalación respetado por contrato.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start text-xs sm:text-sm">
                <Sparkles className="h-5 w-5 shrink-0 text-amber-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Instalación Limpia</h4>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    Cuidamos tus pisos y paredes; dejamos el área limpia y aspirada.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Direct Box */}
            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                ¿Prefieres hablar directamente?
              </span>
              <p className="text-xs text-muted-foreground mt-2">
                Escríbenos una nota de voz o envíanos una foto de tu espacio ahora mismo.
              </p>
              <Button
                variant="outline"
                className="mt-4 w-full gap-2 border-amber-500/40 text-foreground hover:bg-amber-500/10 font-semibold"
                nativeButton={false}
                render={
                  <a
                    href={whatsappLink("Hola, deseo hacer una consulta directa sobre un trabajo.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <MessageCircle className="h-4 w-4 text-emerald-500" />
                Chat Directo con el Taller
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
