export const PRODUCTS = [
  {
    name: "Brownies Original",
    description:
      "Brownies klasik dengan rasa cokelat yang rich dan tekstur lembut",
    price: 45000,
    image: "/brownies-original.jpg",
  },
  {
    name: "Brownies Red Velvet",
    description: "Perpaduan sempurna red velvet dengan cream cheese frosting",
    price: 50000,
    image: "/brownies-red-velvet.jpg",
  },
  {
    name: "Brownies Matcha",
    description: "Brownies dengan matcha premium dari Jepang",
    price: 55000,
    image: "/brownies-matcha.jpg",
  },
  {
    name: "Brownies Salted Caramel",
    description: "Kombinasi manis dan asin yang bikin nagih",
    price: 52000,
    image: "/brownies-salted-caramel.jpg",
  },
  {
    name: "Brownies Nutella",
    description: "Brownies berlapis nutella dengan topping hazelnut crunchy",
    price: 58000,
    image: "/brownies-nutella.jpg",
  },
  {
    name: "Brownies Triple Chocolate",
    description: "Perpaduan tiga jenis cokelat untuk pengalaman ultimate",
    price: 60000,
    image: "/brownies-triple-chocolate.jpg",
  },
  {
    name: "Brownies Peanut Butter",
    description: "Brownies dengan selai kacang creamy dan kacang panggang",
    price: 53000,
    image: "/brownies-peanut-butter.jpg",
  },
  {
    name: "Brownies Oreo Crumble",
    description: "Brownies dengan topping oreo crumble yang renyah",
    price: 56000,
    image: "/brownies-oreo-crumble.jpg",
  },
];

export const formatPrice = (price) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};
