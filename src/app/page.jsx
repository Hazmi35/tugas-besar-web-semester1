import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen bg-background text-foreground flex flex-col overflow-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative w-full h-screen overflow-hidden flex items-center justify-center"
          style={{
            backgroundImage: "url(/brownies-wp.png)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundAttachment: "scroll",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Brownies Premium
                <br />
                <span className="text-orange-500">Untuk Setiap Momen</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base text-gray-100 sm:text-lg md:text-xl">
                Nikmati kelezatan brownies homemade dengan kualitas premium dan
                berbagai varian rasa yang menggugah selera
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="rounded-xl px-8 shadow-lg bg-orange-600 hover:bg-orange-700 text-white"
                  asChild
                >
                  <Link href="/produk">Lihat Produk</Link>
                </Button>
                <Button
                  size="lg"
                  className="rounded-xl px-8 bg-white text-orange-600 hover:bg-gray-100 font-semibold"
                  asChild
                >
                  <Link href="/tentang-kami">Tentang Kami</Link>
                </Button>
              </div>
              <p className="mt-8 text-sm text-gray-200">
                🛵 Juga Tersedia di GrabFood & GoFood Bandung
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
