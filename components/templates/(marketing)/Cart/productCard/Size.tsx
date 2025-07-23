import { SquarePen } from "lucide-react";

import { changeCartItemSizeAction } from "@/actions/cartActions";
import Loader from "@/components/modules/Loader";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/stores/cartStore";
import { useState } from "react";
import { TEntityBasic } from "@/types";

export default function Size({
  cartItemId,
  size,
  productSizes,
  onChangeSize,
}: {
  cartItemId: string;
  size: string;
  productSizes: TEntityBasic[];
  onChangeSize: (size: number) => void;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const setCartItems = useCartStore((state) => state.setCartItems);

  // const onChangeSize = async (size: number) => {
  //   setIsLoading(true);
  //   const res = await changeCartItemSizeAction(cartItemId, size);
  //   setIsLoading(false);

  //   if (res.status === 202 && res.cart) {
  //     setCartItems(res.cart);
  //   }
  // };

  return (
    <div className="flex items-center gap-x-2">
      <span className="font-medium">Size :</span>
      <div className="flex items-center gap-x-2">
        <span>{size}</span>
        <DropdownMenu>
          <DropdownMenuTrigger
            disabled={isLoading}
            className="flex-center disabled:opacity-70">
            {isLoading ? (
              <Loader />
            ) : (
              <SquarePen className="size-5 opacity-90" />
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-wrap gap-x-2 p-2">
            {productSizes.map((productSize) => (
              <DropdownMenuItem key={productSize.name} className="w-fit p-0 ">
                <Button
                  size="icon"
                  variant="outline"
                  className={cn(
                    productSize.name === size &&
                    "!bg-neutral-200 dark:!bg-neutral-900",
                  )}
                  onClick={() => onChangeSize(productSize.id ?? 0)}
                  disabled={productSize.name === size}>
                  {productSize.name}
                </Button>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
