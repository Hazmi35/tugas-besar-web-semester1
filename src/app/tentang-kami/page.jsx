import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { TentangSection } from "@/components/sections/tentang";

export const metadata = {
  title: "Tentang Kami - Hepburn's Brownies",
  description: "Pelajari lebih lanjut tentang Hepburn's Brownies",
};

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b bg-muted/40">
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 md:px-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <span>/</span>
              <span>Tentang Kami</span>
            </div>
          </div>
        </div>

        <TentangSection />
      </main>
    </div>
  );
}
