import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col px-4 py-12 sm:px-6">
        <div className="rounded-lg border border-dashed border-muted-foreground/40 bg-card/60 p-10 text-center text-sm text-muted-foreground">
          Ruang kosong. Mulai bikin section atau komponen kamu di sini.
        </div>
        <div className="mt-6 text-xs text-muted-foreground">
          Terinspirasi dari desain Toko Brownies. Silakan lanjutkan bikin hero,
          produk, atau testimoni.
        </div>
      </main>
    </div>
  );
}
