import Details from "@/components/templates/(marketing)/Product/Details";
import Gallery from "@/components/templates/(marketing)/Product/Gallery";
import { fetchProductDetailByIdApi } from "@/lib/data/product";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

export async function generateMetadata({ params, }
  : { params: { id: string }; })
  : Promise<Metadata> {
  const [product] = await getProduct(params.id);
  return {
    title: product?.title,
  };
}

const getProduct = cache(async (id: string) => {
  return [await fetchProductDetailByIdApi(Number(id))];
});

export default async function ProductPage({ params, }: { params: { id: string }; }) {
  const [product] = await getProduct(params.id);
  if (!product) notFound();
  return (
    <div className="flex flex-col gap-8 pt-10 lg:flex-row xl:gap-x-10">
      <div className="w-full">
        <Gallery product={product} />
      </div>
      <div className="w-full pt-5 xl:pt-8">
        <Details product={product} />
      </div>
    </div>
  );
}
