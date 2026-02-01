"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { CheckoutModal } from "@/components/checkout-modal";
import { useCheckoutModal } from "@/contexts/checkout-modal-context";

export function CheckoutModalWrapper() {
  const router = useRouter();
  const { cart, showCheckoutModal, setShowCheckoutModal } = useCheckoutModal();

  // Redirect to product page if cart is empty when modal tries to open
  useEffect(() => {
    if (showCheckoutModal && cart.length === 0) {
      setShowCheckoutModal(false);
      router.push("/produk");
    }
  }, [showCheckoutModal, cart.length, setShowCheckoutModal, router]);

  return (
    <CheckoutModal
      isOpen={showCheckoutModal}
      onClose={() => setShowCheckoutModal(false)}
    />
  );
}
