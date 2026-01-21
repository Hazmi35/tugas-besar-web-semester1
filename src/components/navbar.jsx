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
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-md bg-primary text-sm font-semibold uppercase tracking-tight text-primary-foreground shadow-sm">
              TB
            </div>
            <span className="text-lg font-semibold leading-none tracking-tight">
              Toko Brownies
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-foreground/70 sm:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" className="shadow-sm">
            Pesan Sekarang
          </Button>
        </div>
      </div>
    </header>
  );
}
