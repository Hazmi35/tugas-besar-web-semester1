import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#produk", label: "Produk" },
  { href: "#tentang", label: "Tentang Kami" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#kontak", label: "Kontak" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-8">
        <div className="flex flex-1 items-center gap-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-sm font-semibold uppercase tracking-tight text-primary-foreground shadow-sm">
              TB
            </div>
            <span className="text-xl font-semibold leading-none tracking-tight">
              Toko Brownies
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-base font-medium sm:flex">
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
        </div>

        <div className="flex flex-none items-center gap-2">
          <Button size="lg" className="rounded-xl px-6 shadow-sm">
            Pesan Sekarang
          </Button>
        </div>
      </div>
    </header>
  );
}
