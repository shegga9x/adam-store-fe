"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { notoSans } from "@/config/fonts";
import Link from "next/link";
import { useRef, useState } from "react";
import Color from "./Color";
import Quantity from "./Quantity";
import Size from "./Size";
import { TCartItem, TColor, TEntityBasic, TProduct } from "@/types";

type ProductProps = {
  cartItem: TCartItem;
  product: Omit<TProduct, "Category">;
};

export default function ProductCard({ cartItem, product }: ProductProps) {
  const [isImageError, setImageError] = useState(false);
  const isExternalImage = product.mainImage?.startsWith("http");

  // Find initial color and size
  const initialColor = product.colors?.find((c) => c.name === cartItem.color) ?? product.colors?.[0];
  const initialSize = initialColor?.variants?.find((v) => v.size?.name === cartItem.size)?.size?.name
    ?? initialColor?.variants?.[0]?.size?.name;

  const [selectedColorId, setSelectedColorId] = useState<number | undefined>(initialColor?.id);
  const [selectedSizeName, setSelectedSizeName] = useState<string | undefined>(initialSize);
  const [isChanged, setIsChanged] = useState(false);

  const currentColor = product.colors?.find((c) => c.id === selectedColorId);
  const currentVariant = currentColor?.variants?.find((v) => v.size?.name === selectedSizeName);

  const maxQuantity = currentVariant?.quantity ?? 0;

  function onChangeColor(colorId: number | undefined) {
    setSelectedColorId(colorId);
    const color = product.colors?.find((c) => c.id === colorId);
    setSelectedSizeName(color?.variants?.[0]?.size?.name);
    setIsChanged(true);
  }

  function onChangeSize(sizeId: number | undefined) {
    const sizeName = currentColor?.variants?.find(v => v.size?.id === sizeId)?.size?.name;
    setSelectedSizeName(sizeName);
    setIsChanged(true);
  }

  return (
    <div className="grid grid-cols-3 gap-x-6 rounded-lg border border-secondary p-3 dark:border-secondary-dark md:grid-cols-4 xl:grid-cols-5">
      <div className="flex-center col-span-3 mb-2 max-h-56 overflow-hidden rounded-md sm:col-span-1 sm:mb-0 sm:max-h-none">
        <AspectRatio ratio={16 / 16} className="flex-center">
          <Image
            className={cn(
              "h-full w-full overflow-visible rounded-md object-contain p-2",
            )}
            src={isExternalImage && !isImageError ? product.mainImage : `/images/no-image.jpg`}
            alt="product"
            width={400}
            height={400}
            onError={() => setImageError(true)}
          />
        </AspectRatio>
      </div>
      <div className="col-span-3 flex h-full w-full justify-between pt-2 sm:col-span-2 md:col-span-3 xl:col-span-4">
        <div>
          <Link
            href={`/product/${product.id}`}
            className="line-clamp-1 text-3xl font-medium">
            {product.title}
          </Link>
          <span
            className={cn(
              "block pt-2 text-2xl font-bold text-gray-700 opacity-70 dark:text-gray-300",
              notoSans.className,
            )}>
            ${currentVariant?.price !== undefined ? currentVariant.price : "N/A"}
          </span>
          <div className="space-y-2 pt-4 text-gray-700 dark:text-gray-300">
            <Color
              cartItemId={cartItem.id}
              color={currentColor?.name ?? cartItem.color}
              productColors={product.colors ?? []}
              onChangeColor={onChangeColor}
            />
            <Size
              cartItemId={cartItem.id}
              size={selectedSizeName ?? ""}
              productSizes={currentColor?.variants?.map((v) => v.size).filter((size): size is TEntityBasic => size !== undefined) ?? []}
              onChangeSize={onChangeSize}
            />
          </div>
        </div>
        <Quantity cartItem={cartItem} maxQuantity={maxQuantity} isChanged={isChanged} setIsChanged={setIsChanged} />
      </div>
    </div>
  );
}
