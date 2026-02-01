export const PRODUCTS = [
  {
    name: "Brownies Original",
    description:
      "Brownies klasik dengan tekstur lembut dan rasa cokelat yang kaya",
    price: 45000,
    image: "/brownies-original.jpeg",
  },
  {
    name: "Disert Red Velvet",
    description: "Perpaduan sempurna red velvet dengan cream cheese frosting",
    price: 10000,
    image: "/red-velvet.jpeg",
  },
  {
    name: "Disert Cheese",
    description: "Disert dengan lapisan keju yang gurih dan lezat",
    price: 10000,
    image: "/cheese.jpeg",
  },
  {
    name: "Disert Chocolate Ganache",
    description: "Disert dengan lapisan ganache cokelat yang meleleh di mulut",
    price: 10000,
    image: "/chocolate.jpeg",
  },
  {
    name: "Disert Tiramisu",
    description: "Disert dengan cita rasa tiramisu yang klasik dan nikmat",
    price: 10000,
    image: "/tiramisu.jpeg",
  },
  {
    name: "Chicken Popcorn BBQ",
    description: "Chicken popcorn dengan saus BBQ yang gurih dan manis",
    price: 20000,
    image: "/bbq.jpeg",
  },
  {
    name: "Chicken Popcorn Sweet & Sour",
    description:
      "Chicken popcorn dengan saus manis dan asam yang menggugah selera",
    price: 20000,
    image: "/sweet&sour.jpeg",
  },
  {
    name: "Chicken Popcorn Melted Cheese Orange",
    description:
      "Chicken popcorn dengan balutan keju leleh dan sentuhan jeruk segar",
    price: 20000,
    image: "/melted-cheese.jpg",
  },
  {
    name: "Chicken Popcorn Bulgogi",
    description: "Chicken popcorn dengan saus bulgogi yang khas dan lezat",
    price: 20000,
    image: "/bulgogi.jpeg",
  },
  {
    name: "Chicken Popcorn Black Papper",
    description:
      "Chicken popcorn dengan saus black papper yang pedas dan lezat",
    price: 20000,
    image: "/black-papper.jpeg",
  },
  {
    name: "Chicken Popcorn Gochujang",
    description: "Chicken popcorn dengan saus gochujang yang pedas dan manis",
    price: 20000,
    image: "/gochujang.jpeg",
  },
  {
    name: "Chocolate Milk",
    description: "Minuman susu cokelat yang lezat dan menyenangkan",
    price: 10000,
    image: "/chocolate2.jpeg",
  },
  {
    name: "Kopi Susu",
    description: "Kopi susu yang lezat dan menyenangkan",
    price: 10000,
    image: "/kopi-susu.jpg",
  },
  {
    name: "Matcha Latte",
    description: "Minuman kopi matcha yang lezat dan menyenangkan",
    price: 10000,
    image: "/matcha-latte.jpeg",
  },
];

export const formatPrice = (price) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};
