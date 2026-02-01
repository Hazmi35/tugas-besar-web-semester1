export function ProdukSection() {
  const products = [
    {
      name: "Brownies Original",
      description:
        "Brownies klasik dengan rasa cokelat yang rich dan tekstur lembut",
      price: "Rp 45.000",
      image: "/placeholder-brownies.jpg",
    },
    {
      name: "Brownies Red Velvet",
      description: "Perpaduan sempurna red velvet dengan cream cheese frosting",
      price: "Rp 50.000",
      image: "/placeholder-brownies.jpg",
    },
    {
      name: "Brownies Matcha",
      description: "Brownies dengan matcha premium dari Jepang",
      price: "Rp 55.000",
      image: "/placeholder-brownies.jpg",
    },
    {
      name: "Brownies Salted Caramel",
      description: "Kombinasi manis dan asin yang bikin nagih",
      price: "Rp 52.000",
      image: "/placeholder-brownies.jpg",
    },
  ];

  return (
    <section id="produk" className="scroll-mt-16 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Produk Kami
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Brownies premium dengan berbagai varian rasa yang menggugah selera
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:mt-16">
          {products.map((product) => (
            <div
              key={product.name}
              className="group overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <div className="grid h-full w-full place-items-center bg-gradient-to-br from-primary/10 to-primary/5">
                  <span className="text-4xl">🧁</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold text-lg text-primary">
                    {product.price}
                  </span>
                  <button
                    type="button"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
