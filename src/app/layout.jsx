import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CheckoutModalWrapper } from "@/components/checkout-modal-wrapper";
import { CheckoutModalProvider } from "@/contexts/checkout-modal-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hepburn's Brownies",
  description: "get your favorite brownies here!",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CheckoutModalProvider>
          {children}
          <CheckoutModalWrapper />
        </CheckoutModalProvider>
      </body>
    </html>
  );
}
