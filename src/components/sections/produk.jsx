"use client";

import { Check, Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCheckoutModal } from "@/contexts/checkout-modal-context";
import { formatPrice, PRODUCTS } from "@/lib/constants/products";

export function ProdukSection() {
  const { cart, addToCart, updateCartQuantity, removeFromCart } =
    useCheckoutModal();
  const [addedProducts, setAddedProducts] = useState({});
  const handleAddToCart = (product) => {
    addToCart(product, 1);
    setAddedProducts((prev) => ({ ...prev, [product.name]: true }));
    setTimeout(() => {
      setAddedProducts((prev) => ({ ...prev, [product.name]: false }));
    }, 2000);
  };

  const getProductQuantity = (productName) => {
    const cartItem = cart.find((item) => item.name === productName);
    return cartItem?.quantity || 0;
  };

  const handleUpdateQuantity = (product, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(product.name);
    } else {
      updateCartQuantity(product.name, newQuantity);
    }
  };

  return (
    <section
      id="produk"
      className="scroll-mt-16 bg-muted/40 py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl lg:max-w-screen-xl xl:max-w-none px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Produk Kami
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Brownies premium dengan berbagai varian rasa yang menggugah selera
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:mt-16">
          {PRODUCTS.map((product) => {
            const quantity = getProductQuantity(product.name);
            const isInCart = quantity > 0;
            const justAdded = addedProducts[product.name];

            return (
              <div
                key={product.name}
                className="group overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-lg flex flex-col h-full"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <div className="grid h-full w-full place-items-center bg-gradient-to-br from-primary/10 to-primary/5">
                    <span className="text-4xl">🧁</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-lg line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2 flex-1">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-2">
                    <span className="font-semibold text-lg text-primary">
                      {formatPrice(product.price)}
                    </span>

                    {!isInCart ? (
                      <Button
                        onClick={() => handleAddToCart(product)}
                        disabled={justAdded}
                        size="sm"
                        className="h-8 px-3"
                      >
                        {justAdded ? (
                          <>
                            <Check className="mr-1 h-3 w-3" />
                            <span className="text-xs">Ditambah</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="mr-1 h-3 w-3" />
                            <span className="text-xs">Tambah</span>
                          </>
                        )}
                      </Button>
                    ) : (
                      <div className="flex items-center gap-1">
                        <Button
                          onClick={() =>
                            handleUpdateQuantity(product, quantity - 1)
                          }
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="min-w-[2rem] text-center text-sm font-semibold">
                          {quantity}
                        </span>
                        <Button
                          onClick={() =>
                            handleUpdateQuantity(product, quantity + 1)
                          }
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
