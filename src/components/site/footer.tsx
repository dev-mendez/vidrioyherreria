import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS, SITE, whatsappLink } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="flex flex-col gap-3">
          <span className="text-lg font-bold text-white">{SITE.name}</span>
          <p className="text-sm text-slate-400">
            Rejas que protegen sin perder belleza. Puertas y ventanas que
            combinan metal resistente con cristal elegante.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-white">Navegación</span>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-white">Contacto</span>
          <a
            href={whatsappLink("Hola, quiero cotizar un trabajo.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
          >
            <Phone className="h-4 w-4 shrink-0" />
            {SITE.phoneDisplay}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
          >
            <Mail className="h-4 w-4 shrink-0" />
            {SITE.email}
          </a>
          <span className="flex items-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4 shrink-0" />
            {SITE.address}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-white">Horario</span>
          <span className="flex items-center gap-2 text-sm text-slate-400">
            <Clock className="h-4 w-4 shrink-0" />
            {SITE.hours}
          </span>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {SITE.name}. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
