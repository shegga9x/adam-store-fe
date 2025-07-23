import { fetchAllProductsApi } from "@/lib/data/product";
import { fetchAllCategoriesApi } from "@/lib/data/category";
import { Metadata } from "next";
import { cache } from "react";

import Banners from "@/components/templates/(marketing)/Index/Banners";
import BestSellers from "@/components/templates/(marketing)/Index/BestSellers";
import Categories from "@/components/templates/(marketing)/Index/Categories";
import ChooseUs from "@/components/templates/(marketing)/Index/ChooseUs";
import { NewestProducts } from "@/components/templates/(marketing)/Index/NewestProducts";

export const metadata: Metadata = {
  title: 'Home',
  description: '...',
}

const getProductsAndCategories = cache(async function () {
  return await Promise.all([
    fetchAllProductsApi(),
    fetchAllCategoriesApi(),
  ]);
});

export default async function Home() {
  const [products, categories] = await getProductsAndCategories();

  return (
    <div className="w-full">
      <Banners />

      <BestSellers products={products} />

      <Categories categories={categories} />

      <NewestProducts products={products} />

      <ChooseUs />
    </div>
  );
}
