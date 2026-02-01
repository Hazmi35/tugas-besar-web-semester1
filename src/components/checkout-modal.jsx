"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCheckoutModal } from "@/contexts/checkout-modal-context";
import { getWhatsAppLink } from "@/lib/constants/business";
import { formatPrice } from "@/lib/constants/products";

export function CheckoutModal({ isOpen, onClose }) {
  const { cart, clearCart } = useCheckoutModal();
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    address: "",
    notes: "",
  });

  const handleOrderWhatsApp = () => {
    if (cart.length === 0) return;

    let message = "Halo! Saya ingin memesan:\n\n";

    // Add delivery info if provided
    if (deliveryInfo.name) {
      message += `Nama: ${deliveryInfo.name}\n`;
    }
    if (deliveryInfo.address) {
      message += `Alamat: ${deliveryInfo.address}\n`;
    }
    if (deliveryInfo.notes) {
      message += `Catatan: ${deliveryInfo.notes}\n`;
    }
    if (deliveryInfo.name || deliveryInfo.address || deliveryInfo.notes) {
      message += "\n";
    }

    // Add order items
    message += "Pesanan:\n";
    let total = 0;
    cart.forEach((product) => {
      const subtotal = product.price * product.quantity;
      total += subtotal;
      message += `• ${product.name} (${product.quantity}x) - ${formatPrice(product.price)} = ${formatPrice(subtotal)}\n`;
    });
    message += `\nTotal: ${formatPrice(total)}\n\nTerima kasih!`;

    const whatsappUrl = getWhatsAppLink(message);

    window.open(whatsappUrl, "_blank");
    onClose();
    clearCart();
    setDeliveryInfo({ name: "", address: "", notes: "" });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4">
      {/* Backdrop */}
      <button
        type="button"
        className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClose();
          }
        }}
        aria-label="Tutup modal"
        tabIndex={0}
        style={{ cursor: "pointer" }}
      />

      {/* Modal */}
      <div className="relative bg-card border rounded-xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden my-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">Checkout</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-lg"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-96 p-6">
          <div className="space-y-4">
            {/* Order Summary */}
            <div className="bg-muted/30 rounded-lg p-4 space-y-2">
              <h3 className="font-semibold text-sm mb-3">Ringkasan Pesanan</h3>
              {cart.map((product) => (
                <div
                  key={product.name}
                  className="flex justify-between text-sm"
                >
                  <span>
                    {product.name} ({product.quantity}x)
                  </span>
                  <span className="font-medium">
                    {formatPrice(product.price * product.quantity)}
                  </span>
                </div>
              ))}
              <div className="border-t pt-2 flex justify-between font-semibold">
                <span>Total:</span>
                <span className="text-primary">
                  {formatPrice(
                    cart.reduce((sum, p) => sum + p.price * p.quantity, 0),
                  )}
                </span>
              </div>
            </div>

            {/* Delivery Form */}
            <div className="space-y-3">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1.5"
                >
                  Nama Penerima
                </label>
                <input
                  type="text"
                  id="name"
                  value={deliveryInfo.name}
                  onChange={(e) =>
                    setDeliveryInfo({
                      ...deliveryInfo,
                      name: e.target.value,
                    })
                  }
                  placeholder="Nama penerima"
                  className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium mb-1.5"
                >
                  Alamat Pengiriman
                </label>
                <textarea
                  id="address"
                  value={deliveryInfo.address}
                  onChange={(e) =>
                    setDeliveryInfo({
                      ...deliveryInfo,
                      address: e.target.value,
                    })
                  }
                  placeholder="Alamat lengkap pengiriman"
                  rows={3}
                  className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <div>
                <label
                  htmlFor="notes"
                  className="block text-sm font-medium mb-1.5"
                >
                  Catatan (opsional)
                </label>
                <input
                  type="text"
                  id="notes"
                  value={deliveryInfo.notes}
                  onChange={(e) =>
                    setDeliveryInfo({
                      ...deliveryInfo,
                      notes: e.target.value,
                    })
                  }
                  placeholder="Catatan tambahan"
                  className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-6 flex gap-2">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Batal
          </Button>
          <Button
            onClick={handleOrderWhatsApp}
            disabled={cart.length === 0}
            className="flex-1 bg-green-600 hover:bg-green-700"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Pesan via WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
