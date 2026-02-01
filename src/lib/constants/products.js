export const PRODUCTS = [
  {
    name: "Brownies Original",
    description:
      "Brownies klasik dengan rasa cokelat yang rich dan tekstur lembut",
    price: 45000,
  },
  {
    name: "Brownies Red Velvet",
    description: "Perpaduan sempurna red velvet dengan cream cheese frosting",
    price: 50000,
  },
  {
    name: "Brownies Matcha",
    description: "Brownies dengan matcha premium dari Jepang",
    price: 55000,
  },
  {
    name: "Brownies Salted Caramel",
    description: "Kombinasi manis dan asin yang bikin nagih",
    price: 52000,
  },
  {
    name: "Brownies Nutella",
    description: "Brownies berlapis nutella dengan topping hazelnut crunchy",
    price: 58000,
  },
  {
    name: "Brownies Triple Chocolate",
    description: "Perpaduan tiga jenis cokelat untuk pengalaman ultimate",
    price: 60000,
  },
  {
    name: "Brownies Peanut Butter",
    description: "Brownies dengan selai kacang creamy dan kacang panggang",
    price: 53000,
  },
  {
    name: "Brownies Oreo Crumble",
    description: "Brownies dengan topping oreo crumble yang renyah",
    price: 56000,
  },
];

export const formatPrice = (price) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};
