import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { ProdukSection } from "@/components/sections/produk";

export const metadata = {
  title: "Produk - Hepburn's Brownies",
  description: "Jelajahi koleksi produk brownies premium kami",
};

export default function ProdukPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Breadcrumb */}
        <div className="border-b bg-muted/40">
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 md:px-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <span>/</span>
              <span>Produk</span>
            </div>
          </div>
        </div>

        <ProdukSection />
      </main>
    </div>
  );
}
