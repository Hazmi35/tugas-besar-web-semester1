import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-28 md:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Brownies Premium
                <br />
                <span className="text-primary">Untuk Setiap Momen</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
                Nikmati kelezatan brownies homemade dengan kualitas premium dan
                berbagai varian rasa yang menggugah selera
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="rounded-xl px-8 shadow-lg">
                  Pesan Sekarang
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-xl px-8"
                  asChild
                >
                  <a href="/produk">Lihat Produk</a>
                </Button>
              </div>
              <p className="mt-8 text-sm text-muted-foreground">
                🛵 Tersedia di GrabFood & GoFood Bandung
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
