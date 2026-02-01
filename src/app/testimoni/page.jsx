import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { TestimoniSection } from "@/components/sections/testimoni";

export const metadata = {
  title: "Testimoni - Hepburn's Brownies",
  description: "Baca testimoni pelanggan kami",
};

export default function TestimoniPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="min-h-screen">
        {/* Breadcrumb */}
        <div className="border-b bg-muted/40">
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 md:px-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <span>/</span>
              <span>Testimoni</span>
            </div>
          </div>
        </div>

        <TestimoniSection />
      </main>
    </div>
  );
}
