"use client";

import { cn } from "@/lib/utils";
import { TColor, TVariant } from "@/types";
import { useState } from "react";

type ColorsProps = {
  tColors: TColor[];
  onChangeColor: (color: number | undefined) => void;
};

export default function Colors({ tColors, onChangeColor }: ColorsProps) {
  const [selectedColor, setSelectedColor] = useState(tColors[0]?.id);

  function onSelectColor(color: number) {
    setSelectedColor(color);
    onChangeColor(color);
  }

  return (
    <div className="mt-6 xl:mt-10">
      <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
        Select Color:
      </span>
      <div className="select-color flex gap-x-3 pt-3">
        {tColors.map((tColor) => (
          <button
            key={tColor.id}
            className={cn(
              "size-9 rounded-full border [&.active]:outline [&.active]:outline-offset-2 [&.active]:outline-green-500",
              tColor?.id === selectedColor && "active",
            )}
            style={{ backgroundColor: tColor.name }}
            onClick={() => onSelectColor(tColor.id)}></button>
        ))}
      </div>
    </div>
  );
}
