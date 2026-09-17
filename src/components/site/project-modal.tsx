"use client";

import Image from "next/image";
import { MessageCircle, ShieldCheck, Clock, Layers, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CatalogItem, SITE, whatsappLink } from "@/lib/site-data";

interface ProjectModalProps {
  item: CatalogItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectModal({ item, open, onOpenChange }: ProjectModalProps) {
  if (!item) return null;

  const quoteMessage = `Hola, me interesa cotizar un trabajo similar a: *${item.title}* (${item.specs.cristal} / ${item.specs.estructura}).`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl overflow-hidden p-0 sm:max-w-2xl lg:max-w-3xl">
        <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-950">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute top-4 left-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-md">
            {item.tag}
          </div>
        </div>

        <div className="p-6">
          <DialogHeader className="gap-1">
            <DialogTitle className="text-xl font-bold sm:text-2xl">
              {item.title}
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              {item.description}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 rounded-xl border border-border/60 bg-muted/40 p-4">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">
              Ficha Técnica del Trabajo
            </h4>
            <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <Sparkles className="h-4 w-4 shrink-0 text-amber-500 mt-0.5" />
                <div>
                  <span className="font-semibold text-foreground">Cristal:</span>{" "}
                  <span className="text-muted-foreground">{item.specs.cristal}</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Layers className="h-4 w-4 shrink-0 text-amber-500 mt-0.5" />
                <div>
                  <span className="font-semibold text-foreground">Estructura:</span>{" "}
                  <span className="text-muted-foreground">{item.specs.estructura}</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0 text-amber-500 mt-0.5" />
                <div>
                  <span className="font-semibold text-foreground">Acabado:</span>{" "}
                  <span className="text-muted-foreground">{item.specs.acabado}</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 shrink-0 text-amber-500 mt-0.5" />
                <div>
                  <span className="font-semibold text-foreground">Fabricación:</span>{" "}
                  <span className="text-muted-foreground">{item.specs.tiempoEntrega}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground">Garantía incluida:</span> 5 años en estructura metálica y herrajes.
            </div>
            <Button
              size="lg"
              className="gap-2 bg-amber-500 text-slate-950 font-bold hover:bg-amber-400"
              nativeButton={false}
              render={
                <a
                  href={whatsappLink(quoteMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <MessageCircle className="h-5 w-5" />
              Cotizar Este Modelo
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
