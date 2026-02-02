export function TentangSection() {
  const features = [
    {
      icon: "🎂",
      title: "Premium Quality",
      description: "Bahan-bahan terbaik pilihan untuk setiap brownies",
    },
    {
      icon: "👨‍🍳",
      title: "Handmade",
      description: "Dibuat dengan tangan oleh chef berpengalaman",
    },
    {
      icon: "✨",
      title: "Fresh Daily",
      description: "Diproduksi fresh setiap hari untuk kesegaran maksimal",
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Pengiriman cepat langsung ke alamat Anda",
    },
  ];

  return (
    <section
      id="tentang"
      className="scroll-mt-16 bg-muted/40 py-16 sm:py-20 md:py-24 min-h-[calc(100vh-80px-43px)]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Tentang Kami
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Hepburn's Brownies adalah brand brownies premium yang didirikan
              pada tahun 2018 dengan komitmen untuk menghadirkan brownies
              berkualitas tinggi dengan rasa yang autentik dan tekstur yang
              sempurna.
            </p>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Kami percaya bahwa setiap gigitan harus memberikan pengalaman yang
              memorable. Oleh karena itu, kami hanya menggunakan bahan-bahan
              premium dan resep yang telah teruji untuk menciptakan brownies
              yang tak terlupakan.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-lg border bg-card p-4 text-center">
                <div className="text-2xl font-bold text-primary sm:text-3xl">
                  100+
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Order Selesai
                </div>
              </div>
              <div className="rounded-lg border bg-card p-4 text-center">
                <div className="text-2xl font-bold text-primary sm:text-3xl">
                  4.9/5
                </div>
                <div className="mt-1 text-sm text-muted-foreground">Rating</div>
              </div>
              <div className="rounded-lg border bg-card p-4 text-center">
                <div className="text-2xl font-bold text-primary sm:text-3xl">
                  10+
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Varian Rasa
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border bg-card p-6 transition-all hover:shadow-md"
              >
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="mt-4 font-semibold text-lg">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
