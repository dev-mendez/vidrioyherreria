import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site-data";

export function WhatsappFab() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex items-center gap-2 sm:right-6 sm:bottom-6 group">
      <span className="hidden sm:inline-block rounded-full bg-slate-950/90 px-3 py-1.5 text-xs font-semibold text-white shadow-xl backdrop-blur-md border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¿Cotizamos por WhatsApp?
      </span>
      <a
        href={whatsappLink("Hola, quiero cotizar un trabajo.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cotizar por WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-emerald-400"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400" />
        </span>
        <MessageCircle className="h-7 w-7 fill-white stroke-none" />
      </a>
    </div>
  );
}
