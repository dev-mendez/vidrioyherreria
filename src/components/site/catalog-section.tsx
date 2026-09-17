"use client";

import { useState } from "react";
import Image from "next/image";
import { DoorOpen, PanelsTopLeft, ShieldCheck, Gem, LucideIcon, Eye, MessageCircle, ArrowRight } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CATALOG, CatalogItem, whatsappLink } from "@/lib/site-data";
import { ProjectModal } from "@/components/site/project-modal";

const ICONS: Record<string, LucideIcon> = {
  door: DoorOpen,
  window: PanelsTopLeft,
  shield: ShieldCheck,
  gem: Gem,
};

export function CatalogSection() {
  const [selectedItem, setSelectedItem] = useState<CatalogItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenDetail = (item: CatalogItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  return (
    <section id="catalogo" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Trabajos a Medida
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Catálogo por Especialidad
          </h2>
          <p className="mt-3 text-muted-foreground">
            Cada pieza combina resistencia estructural con cristal templado o
            acabados artísticos, fabricados con precisión milimétrica.
          </p>
        </div>

        <Tabs defaultValue={CATALOG[0].slug} className="mt-12">
          <TabsList className="h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0 sm:justify-center">
            {CATALOG.map((category) => {
              const Icon = ICONS[category.icon];
              return (
                <TabsTrigger
                  key={category.slug}
                  value={category.slug}
                  className="gap-2 rounded-full border border-border/80 px-4 py-2.5 text-xs font-semibold data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {CATALOG.map((category) => (
            <TabsContent key={category.slug} value={category.slug} className="mt-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <Card
                    key={item.id}
                    className="group overflow-hidden rounded-2xl border-border/70 bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
                  >
                    {/* Item Image with Tag and Hover Action */}
                    <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-900">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      
                      <div className="absolute top-3 left-3 rounded-full bg-slate-950/80 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-400 backdrop-blur-md border border-white/10">
                        {item.tag}
                      </div>

                      {/* Quick Inspect Button on Hover */}
                      <button
                        onClick={() => handleOpenDetail(item)}
                        className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg bg-slate-950/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all hover:bg-amber-400 hover:text-slate-950"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        Ficha Técnica
                      </button>
                    </div>

                    {/* Card Content */}
                    <CardHeader className="pt-4 pb-2">
                      <CardTitle className="text-lg font-bold group-hover:text-amber-500 transition-colors">
                        {item.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-1 pb-4 text-xs sm:text-sm text-muted-foreground line-clamp-3">
                      {item.description}
                    </CardContent>

                    {/* Card Footer Actions */}
                    <div className="mt-auto border-t border-border/60 p-4 pt-3 flex items-center justify-between gap-2">
                      <button
                        onClick={() => handleOpenDetail(item)}
                        className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Ver detalles
                      </button>

                      <Button
                        size="sm"
                        className="gap-1.5 bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 text-xs"
                        nativeButton={false}
                        render={
                          <a
                            href={whatsappLink(`Hola, deseo cotizar el trabajo de: *${item.title}*.`)}
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        }
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        Cotizar
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Technical Detail Modal */}
        <ProjectModal
          item={selectedItem}
          open={modalOpen}
          onOpenChange={setModalOpen}
        />
      </div>
    </section>
  );
}
