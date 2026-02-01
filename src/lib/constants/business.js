export const BUSINESS_INFO = {
  name: "Hepburn's Brownies",
  phone: "6281234567890", // Format wa.me (tanpa +62, gunakan 62 atau 0)
  phoneDisplay: "+62 812-3456-7890", // Format untuk display
  email: "hello@hepburnsbrownies.com",
  address: "Jl. Raya Brownies No. 123, Bandung",
  operatingHours: "Senin - Minggu: 09.00 - 21.00 WIB",
  instagram: "https://www.instagram.com/hepburnsbrownie/",
};

export const getWhatsAppLink = (message = "") => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_INFO.phone}?text=${encodedMessage}`;
};
