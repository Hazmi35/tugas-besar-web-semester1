"use client";

import { X } from "lucide-react";
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
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-label="WhatsApp"
            >
              <title>WhatsApp</title>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pesan via WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
