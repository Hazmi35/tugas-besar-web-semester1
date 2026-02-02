export function TestimoniSection() {
  const testimonials = [
    {
      name: "Sarah Wijaya",
      role: "Regular Customer",
      content:
        "Brownies paling enak yang pernah aku coba! Teksturnya fudgy, rasanya rich tapi gak bikin eneg. Pokoknya recommend banget!",
      rating: 5,
    },
    {
      name: "Budi Santoso",
      role: "Food Blogger",
      content:
        "Sebagai food blogger, aku udah coba banyak brownies di Jakarta. Hepburn's Brownies masuk top 3 favoritku. Quality consistent dan packaging-nya juga bagus.",
      rating: 5,
    },
    {
      name: "Amanda Chen",
      role: "Corporate Client",
      content:
        "Sudah beberapa kali pesan untuk acara kantor. Selalu jadi favorit! Pelayanan cepat, rasa enak, dan harga masih reasonable.",
      rating: 5,
    },
    {
      name: "Rizki Pratama",
      role: "Dessert Enthusiast",
      content:
        "Brownies red velvet-nya juara! Cream cheese frosting-nya pas banget, gak terlalu manis. Cocok buat yang suka dessert refined.",
      rating: 5,
    },
    {
      name: "Lisa Kusuma",
      role: "First Timer",
      content:
        "Pertama kali order langsung jatuh cinta! Dari packaging sampe rasanya semuanya on point. Bakal order lagi pasti!",
      rating: 5,
    },
    {
      name: "Dimas Aditya",
      role: "Birthday Gift",
      content:
        "Beli buat kado ulang tahun temen, dia suka banget! Packagingnya premium, cocok buat gift, tapi sayangnya cuma ada di Bandung. Next time order buat diri sendiri deh 😄",
      rating: 4,
    },
  ];

  return (
    <section
      id="testimoni"
      className="scroll-mt-16 bg-muted/40 py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Testimoni Pelanggan
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Apa kata mereka yang sudah mencoba Hepburn's Brownies
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:mt-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group rounded-xl border bg-card p-6 transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={`${testimonial.name}-star-${i}`}
                    className="h-5 w-5 fill-current"
                    viewBox="0 0 20 20"
                    aria-label="Star"
                  >
                    <title>Rating Star</title>
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-sm text-foreground/90 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="mt-4 border-t pt-4">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
