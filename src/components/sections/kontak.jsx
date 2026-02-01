"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function KontakSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
    alert("Terima kasih! Pesan Anda akan segera kami respon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Alamat",
      content: "Jl. Raya Brownies No. 123, Jakarta Selatan",
    },
    {
      icon: "📞",
      title: "Telepon",
      content: "+62 812-3456-7890",
    },
    {
      icon: "✉️",
      title: "Email",
      content: "hello@hepburnsbrownies.com",
    },
    {
      icon: "⏰",
      title: "Jam Operasional",
      content: "Senin - Minggu: 09.00 - 21.00 WIB",
    },
  ];

  return (
    <section
      id="kontak"
      className="scroll-mt-16 bg-muted/40 py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Hubungi Kami
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Ada pertanyaan atau ingin order? Jangan ragu untuk menghubungi kami
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 sm:mt-16">
          <div>
            <div className="grid gap-6 sm:grid-cols-2">
              {contactInfo.map((info) => (
                <div key={info.title} className="rounded-xl border bg-card p-6">
                  <div className="text-3xl">{info.icon}</div>
                  <h3 className="mt-4 font-semibold">{info.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {info.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border bg-card p-6">
              <h3 className="font-semibold text-lg">Follow Us</h3>
              <div className="mt-4 flex gap-4">
                <a
                  href="https://facebook.com"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-opacity hover:opacity-90"
                  aria-label="Facebook"
                >
                  <span className="text-lg">📘</span>
                </a>
                <a
                  href="https://instagram.com"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-opacity hover:opacity-90"
                  aria-label="Instagram"
                >
                  <span className="text-lg">📷</span>
                </a>
                <a
                  href="https://wa.me"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-opacity hover:opacity-90"
                  aria-label="WhatsApp"
                >
                  <span className="text-lg">💬</span>
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6 sm:p-8">
            <h3 className="font-semibold text-xl">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+62 812-3456-7890"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-lg border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>
              <Button type="submit" className="w-full rounded-lg">
                Kirim Pesan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
