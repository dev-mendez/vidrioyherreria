"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS, SITE, whatsappLink } from "@/lib/site-data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur supports-backdrop-blur:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-white">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            nativeButton={false}
            render={
              <a
                href={whatsappLink("Hola, quiero cotizar un trabajo.")}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden"
            render={
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-white"
                aria-label="Abrir menú"
              />
            }
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle>{SITE.name}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <SheetClose
                  key={link.href}
                  nativeButton={false}
                  render={
                    <Link
                      href={link.href}
                      className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                    />
                  }
                >
                  {link.label}
                </SheetClose>
              ))}
              <SheetClose
                nativeButton={false}
                render={
                  <Button
                    className="mt-3"
                    nativeButton={false}
                    render={
                      <a
                        href={whatsappLink("Hola, quiero cotizar un trabajo.")}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  />
                }
              >
                <MessageCircle className="h-4 w-4" />
                Cotizar por WhatsApp
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
