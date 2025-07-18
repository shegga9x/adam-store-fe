import type { TProduct } from "@/types"; // your local template type

import {
  ProductControllerApi,
  type ProductRequest,
  type ProductUpdateRequest,
  type ApiResponseProductResponse,
  type ApiResponsePageResponseProductResponse,
  ProductResponse,
} from "@/api-client";
import { getAuthConfiguration } from "@/api-client/init-auth-config";

/**
 * Helper to get an instance of ProductControllerApi with auth config.
 */
function getProductController() {
  return new ProductControllerApi(getAuthConfiguration());
}

/**
 * Create a new product (admin).
 */
export async function createProductApi(data: ProductRequest): Promise<TProduct> {
  const api = getProductController();
  const response = await api.create6({ productRequest: data });
  if (response.data.code !== 200) {
    throw response.data;
  }
  return transformProductResponseToTProduct(response.data.result as ProductResponse);
}

/**
 * Update a product (admin).
 */
export async function updateProductApi(id: number, data: ProductUpdateRequest): Promise<TProduct> {
  const api = getProductController();
  const response = await api.update5({ id, productUpdateRequest: data });
  if (response.data.code !== 200) {
    throw response.data;
  }
  return transformProductResponseToTProduct(response.data.result as ProductResponse);
}

/**
 * Soft delete a product (admin).
 */
export async function deleteProductApi(id: number): Promise<TProduct> {
  const api = getProductController();
  const response = await api.delete4({ id });
  if (response.data.code !== 200) {
    throw response.data;
  }
  return transformProductResponseToTProduct(response.data.result as ProductResponse);
}

/**
 * Fetch all products for user (public).
 */
export async function fetchAllProductsApi(page?: number, size?: number, sort?: string[]): Promise<TProduct[]> {
  const api = getProductController();
  const response = await api.fetchAll1({ page, size, sort });
  if (response.data.code !== 200) {
    throw response.data;
  }
  return (response.data.result?.items ?? []).map(transformProductResponseToTProduct);
}

/**
 * Fetch all products for admin (admin).
 */
export async function fetchAllProductsForAdminApi(page?: number, size?: number, sort?: string[]): Promise<TProduct[]> {
  const api = getProductController();
  const response = await api.fetchAllProductsForAdmin({ page, size, sort });
  if (response.data.code !== 200) {
    throw response.data;
  }
  return (response.data.result?.items ?? []).map(transformProductResponseToTProduct);
}

/**
 * Fetch product detail by id (public).
 */
export async function fetchProductDetailByIdApi(id: number): Promise<TProduct> {
  const api = getProductController();
  const response = await api.fetchDetailById({ id });
  if (response.data.code !== 200) {
    throw response.data;
  }
  return transformProductResponseToTProduct(response.data.result as ProductResponse);
}

export function transformProductResponseToTProduct(apiProduct: ProductResponse): TProduct {
  
  const defaultMainImage = apiProduct.variants?.[0]?.imageUrl ?? "";
  const allImages = apiProduct.variants?.map(v => v.imageUrl || "").filter(Boolean) ?? [];
  const sizes = apiProduct.variants?.map(v => v.size?.id).filter((id): id is number => typeof id === 'number') ?? [];
  const colors = apiProduct.variants?.map(v => v.color?.id).filter(id => typeof id === 'string') ?? [];

  const totalQuantity = apiProduct.variants?.reduce((sum, v) => sum + (v.quantity || 0), 0) ?? 0;
  const price = apiProduct.variants?.[0]?.price?.toString() ?? "0";

  return {
    id: apiProduct.id?.toString() ?? "",
    title: apiProduct.name ?? "",
    price: price,
    description: apiProduct.description ?? "",
    colors: colors,
    sizes: sizes,
    quantity: totalQuantity,
    mainImage: defaultMainImage,
    images: allImages,
    gender: "unisex",
    sales: apiProduct.soldQuantity ?? null,
    categoryId: "1",
    createdAt: new Date(apiProduct.createdAt ?? new Date()),
    updatedAt: new Date(),
    Category: {
      id: "1",
      title: "Default Category",
      image: ""
    }
  };
}
