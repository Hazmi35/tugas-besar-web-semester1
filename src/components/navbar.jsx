"use client";

import { Instagram, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/produk", label: "Produk" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/testimoni", label: "Testimoni" },
  { href: "/kontak", label: "Kontak" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center px-4 sm:h-20 md:h-20 sm:px-6 md:px-8">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-sm font-semibold uppercase tracking-tight text-primary-foreground shadow-sm">
            HB
          </div>
          <span className="text-base font-semibold leading-none tracking-tight sm:text-lg md:text-xl">
            Hepburn's Brownies
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-6 text-sm font-medium sm:gap-6 sm:text-base sm:flex md:gap-8 lg:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:ml-0">
          <Button size="sm" className="rounded-lg px-3 shadow-sm sm:hidden">
            Pesan
          </Button>
          <Button
            size="sm"
            className="hidden rounded-lg px-3 shadow-sm sm:inline-flex lg:hidden"
          >
            Pesan
          </Button>
          <Button
            size="lg"
            className="hidden rounded-xl px-6 shadow-sm lg:inline-flex"
          >
            Pesan Sekarang
          </Button>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hidden rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            <Instagram className="h-5 w-5" />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="sm:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <div
        className={`${open ? "block" : "hidden"} border-t bg-background sm:hidden`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 text-base font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-2 text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
