"use client";

import { fetchCartItemsAction } from "@/actions/cartActions";
import { useCartStore } from "@/stores/cartStore";
import { useEffect, useState } from "react";
import EmptyCart from "./EmptyCart";
import ProductCard from "./productCard/ProductCard";
import ProductCartSkeleton from "./productCard/ProductCartSkeleton";

export default function CartItemsList({ userId }: { userId: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const cartItems = useCartStore((state) => state.cartItems);
  const setCartItems = useCartStore((state) => state.setCartItems);

  useEffect(() => {
    const fetchCartItems = async () => {
      const res = await fetchCartItemsAction();
      setCartItems(res.success ? res.data ?? [] : []);
      setIsLoading(false);
    };

    fetchCartItems();
  }, [userId, setCartItems]);

  if (isLoading) {
    return (
      <>
        <ProductCartSkeleton />
        <ProductCartSkeleton />
      </>
    );
  }

  return (
    <>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        cartItems.map((cartItem) => (
          <ProductCard
            key={cartItem.id}
            cartItem={cartItem}
            product={cartItem.Product}
          />
        ))
      )}
    </>
  );
}
