import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { KontakSection } from "@/components/sections/kontak";

export const metadata = {
  title: "Kontak - Hepburn's Brownies",
  description: "Hubungi kami untuk pertanyaan atau pemesanan",
};

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex flex-col flex-1">
        {/* Breadcrumb */}
        <div className="border-b bg-muted/40 overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 md:px-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <span>/</span>
              <span>Kontak</span>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <KontakSection />
        </div>
      </main>
    </div>
  );
}
